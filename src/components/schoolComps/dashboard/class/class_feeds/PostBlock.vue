<template>
  <div>
    <div
      class="content-post-block white rounded-5"
      v-for="(post_obj, index) in post_data"
      :key="index"
    >
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
</template>

<script>
import PostData from "@/scripts/mixins/PostData";
import PostIntroCard from "@/components/schoolComps/dashboard/class/class_feeds/content_post_comps/PostIntroCard";
import PostActivityCard from "@/components/schoolComps/dashboard/class/class_feeds/content_post_comps/PostActivityCard";
import CommentInputCard from "@/components/schoolComps/dashboard/class/class_feeds/content_post_comps/CommentInputCard";

export default {
  name: "PostBlock",

  components: {
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

  mixins: [PostData],

  data() {
    return {
      comment_modal: false,
      share_modal: false
    };
  },

  methods: {
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
.content-post-block {
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  padding: 10px auto 10px;
  margin-bottom: 10px;

  .post-display-container {
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 10px;
  }
}
</style>
