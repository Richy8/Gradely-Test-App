<template>
  <div>
    <div
      class="content-post-block white rounded-5"
      v-for="(post_obj, index) in post_data"
      :key="index"
    >
      <!-- POST INTRO SECTION -->
      <PostIntroCard :post="post_obj"></PostIntroCard>

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
      <PostActivityCard :show_activity="post_obj.activity" @toggleShare="toggleShareModal"></PostActivityCard>
      <!-- POST ACTIVITY CARD COMPONENTS -->

      <!-- COMMENT VIEW COMPONENT -->
      <CommentViewCard :comments="post_obj.comment"></CommentViewCard>
      <!-- COMMENT VIEW COMPONENT -->

      <!-- COMMENT INPUT COMPONENT -->
      <CommentInputCard fullname="Anthony Joshua" v-if="post_obj.type!='Recommendation'"></CommentInputCard>
      <!-- COMMENT INPUT COMPONENT -->
    </div>

    <!-- MODAL COMPONENTS -->
    <SharePostModal v-if="share_modal" @closeTriggered="toggleShareModal"></SharePostModal>
    <!-- MODAL COMPONENTS -->
  </div>
</template>

<script>
import PostData from "@/scripts/mixins/PostData";
import PostIntroCard from "@/components/classComps/feeds/post_content/PostIntroCard";
import PostActivityCard from "@/components/classComps/feeds/post_content/PostActivityCard";
import CommentInputCard from "@/components/classComps/feeds/post_content/CommentInputCard";

export default {
  name: "PostBlock",

  components: {
    PostIntroCard,
    PostActivityCard,
    CommentInputCard,
    PostTextBlock: () =>
      import(/* webpackChunkName: "PostTextBlock" */ "@/components/classComps/feeds/post_content/PostTextBlock"),
    PostImageBlock: () =>
      import(/* webpackChunkName: "PostImageBlock" */ "@/components/classComps/feeds/post_content/PostImageBlock"),
    PostEventBlock: () =>
      import(/* webpackChunkName: "PostEventBlock" */ "@/components/classComps/feeds/post_content/PostEventBlock"),
    PostHomeworkBlock: () =>
      import(/* webpackChunkName: "PostHomeworkBlock" */ "@/components/classComps/feeds/post_content/PostHomeworkBlock"),
    PostVideoBlock: () =>
      import(/* webpackChunkName: "PostVideoBlock" */ "@/components/classComps/feeds/post_content/PostVideoBlock"),
    PostPollBlock: () =>
      import(/* webpackChunkName: "PostPollBlock" */ "@/components/classComps/feeds/post_content/PostPollBlock"),
    PostTutorBlock: () =>
      import(/* webpackChunkName: "PostTutorBlock" */ "@/components/classComps/feeds/post_content/PostTutorBlock"),
    PostRecommendationBlock: () =>
      import(/* webpackChunkName: "PostRecommendationBlock" */ "@/components/classComps/feeds/post_content/PostRecommendationBlock"),
    CommentViewCard: () =>
      import(/* webpackChunkName: "CommentViewCard" */ "@/components/classComps/feeds/post_content/CommentViewCard"),
    SharePostModal: () =>
      import(/* webpackChunkName: "SharePostModal" */ "@/components/modalComps/classModals/SharePostModal")
  },

  mixins: [PostData],

  data() {
    return {
      share_modal: false
    };
  },

  methods: {
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
