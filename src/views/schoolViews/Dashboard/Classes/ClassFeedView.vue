<template>
  <div>
    <vue-headful title="Class Post View | School Dashboard" description="Description goes here"/>
    <div class="class-feed-view">
      <div class="container px-1">
        <div class="row">
          <!-- POST AUTHOR COMPONENT -->
          <div class="col-12 col-md-3 left-layout">
            <AuthorCard></AuthorCard>
          </div>

          <!-- POST VIEW COMPONENT -->
          <div class="col-12 col-md-6 right-layout" v-if="post_obj">
            <router-link
              :to="{name: 'ClassFeeds'}"
              class="go-back-post d-flex justify-content-start align-items-center nowrap w-25 pointer color_text"
            >
              <span class="icon-arrow-left icon font-22 d-block"></span>
              <span class="font-weight-bold text ml-2 d-block">Post</span>
            </router-link>

            <!-- POST COMPONENT -->
            <div class="content-post-block white rounded-5">
              <!-- POST INTRO SECTION -->
              <PostIntroCard @toggleComment="toggleCommentModal" :post="post_obj"></PostIntroCard>

              <!-- POST DISPLAY -->
              <div class="post-display-container font-12 text-justify">
                <transition name="fade" mode="out-in">
                  <keep-alive>
                    <component :is="'Post'+ post_obj.type +'Block'" :post="post_obj"></component>
                  </keep-alive>
                </transition>
              </div>
              <!-- POST DISPLAY -->

              <!-- POST ACTIVITY CARD COMPONENTS -->
              <PostActivityCard
                :show_activity="post_obj.activity"
                @toggleShare="toggleShareModal"
                @toggleComment="toggleCommentModal"
              ></PostActivityCard>
              <!-- POST ACTIVITY CARD COMPONENTS -->

              <!-- COMMENT VIEW COMPONENT -->
              <CommentViewCard :comments="post_obj.comment"></CommentViewCard>
              <!-- COMMENT VIEW COMPONENT -->

              <!-- COMMENT INPUT COMPONENT -->
              <CommentInputCard @toggleComment="toggleCommentModal" v-if="post_obj.comment.length"></CommentInputCard>
              <!-- COMMENT INPUT COMPONENT -->
            </div>

            <!-- MODAL COMPONENTS -->
            <NewCommentModal v-if="comment_modal" @closeTriggered="toggleCommentModal"></NewCommentModal>
            <SharePostModal v-if="share_modal" @closeTriggered="toggleShareModal"></SharePostModal>
            <!-- MODAL COMPONENTS -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthorCard from "@/components/schoolComps/dashboard/class/class_feed_view/AuthorCard";
import PostData from "@/scripts/mixins/PostData";
import PostIntroCard from "@/components/schoolComps/dashboard/class/class_feeds/content_post_comps/PostIntroCard";
import PostActivityCard from "@/components/schoolComps/dashboard/class/class_feeds/content_post_comps/PostActivityCard";
import CommentInputCard from "@/components/schoolComps/dashboard/class/class_feeds/content_post_comps/CommentInputCard";

export default {
  name: "ClassFeedView",

  mixins: [PostData],

  components: {
    AuthorCard,
    PostIntroCard,
    PostActivityCard,
    CommentInputCard,
    PostTextBlock: () =>
      import(/* webpackChunkName: "PostTextBlock" */ "@/components/schoolComps/dashboard/class/class_feeds/content_post_comps/PostTextBlock"),
    PostImageBlock: () =>
      import(/* webpackChunkName: "PostImageBlock" */ "@/components/schoolComps/dashboard/class/class_feeds/content_post_comps/PostImageBlock"),
    PostEventBlock: () =>
      import(/* webpackChunkName: "PostEventBlock" */ "@/components/schoolComps/dashboard/class/class_feeds/content_post_comps/PostEventBlock"),
    PostHomeworkBlock: () =>
      import(/* webpackChunkName: "PostHomeworkBlock" */ "@/components/schoolComps/dashboard/class/class_feeds/content_post_comps/PostHomeworkBlock"),
    PostPollBlock: () =>
      import(/* webpackChunkName: "PostPollBlock" */ "@/components/schoolComps/dashboard/class/class_feeds/content_post_comps/PostPollBlock"),
    PostRecommendationBlock: () =>
      import(/* webpackChunkName: "PostRecommendationBlock" */ "@/components/schoolComps/dashboard/class/class_feeds/content_post_comps/PostRecommendationBlock"),
    CommentViewCard: () =>
      import(/* webpackChunkName: "CommentViewCard" */ "@/components/schoolComps/dashboard/class/class_feeds/content_post_comps/CommentViewCard"),
    NewCommentModal: () =>
      import(/* webpackChunkName: "NewCommentModal" */ "@/components/schoolComps/modals/NewCommentModal"),
    SharePostModal: () =>
      import(/* webpackChunkName: "SharePostModal" */ "@/components/schoolComps/modals/SharePostModal")
  },

  data() {
    return {
      comment_modal: false,
      share_modal: false,
      post_obj: null
    };
  },

  watch: {
    $route: "fetchPost"
  },

  beforeRouteEnter(to, from, next) {
    let post_id = to.params.post_id;
    next(vm => {
      let post_index_id = vm.post_data.findIndex(post => post.id === post_id);
      vm.post_obj = vm.post_data[post_index_id];
    });
  },

  //   beforeRouteUpdate(to, from, next) {
  //     this.post_obj = {};
  //     this.fetchPost(to.params.post_id);
  //     next();
  //   },

  methods: {
    fetchPost() {
      this.post_obj = null;
      let post_index_id = this.post_data.findIndex(
        post => post.id === this.$route.params.post_id
      );
      this.post_obj = this.post_data[post_index_id];
    },

    toggleCommentModal() {
      this.comment_modal = !this.comment_modal;
    },

    toggleShareModal() {
      this.share_modal = !this.share_modal;
    }
  }
};
</script>

<style lang="scss">
.go-back-post {
  margin-bottom: 16px;
  transition: all 0.3s ease-in-out;

  @include breakpoint_max(sm) {
    .icon {
      font-size: 20px !important;
    }
    .text {
      font-size: 15.5px;
    }
  }

  &:hover {
    color: $border_grey_dark !important;
  }
}
</style>
