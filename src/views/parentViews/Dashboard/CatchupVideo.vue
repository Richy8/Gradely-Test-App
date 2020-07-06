<template>
  <div>
    <vue-headful title="Catchup Video Lesson | Parents" description="Description goes here"/>
    <section class="video-display-section base-type-layout w-100 h-auto brand_navy_bg">
      <VideoDisplayBlock :is_subscribed="false"></VideoDisplayBlock>

      <!-- VIDEO OVERLAY -->
      <div class="not-subscribed"></div>
      <!-- VIDEO OVERLAY -->
    </section>

    <!-- BOTTOM CONTENT -->
    <section class="base-type-layout" style="background: #f0f0f0 !important">
      <div class="container catchup-video-container px-1">
        <div class="row">
          <div class="col-12 col-md-8 left-layout">
            <!-- CARD INTRO COMPONENT -->
            <VideoIntro
              card_topic="Introduction to Algebraic Fractions"
              card_subject="Mathematics"
              :card_views="2000"
            ></VideoIntro>
            <!-- CARD INTRO COMPONENT -->

            <!-- CARD ACTIITIES COMPONENT -->
            <VideoActivities card_name="Gradely" card_like_count="1.4k" card_dislike_count="200"></VideoActivities>
            <!-- CARD ACTIITIES COMPONENT -->

            <!-- COMMENT INPUT COMPONENT -->
            <div class="comment-title-count color_text font-weight-bold">Comments (5)</div>
            <VideoCommentInput card_name="Rotimi Oshinaga"></VideoCommentInput>
            <!-- COMMENT INPUT COMPONENT -->

            <!-- COMMENT CARD COMPONENT -->
            <VideoCommentCard
              card_img="MaleChild.png"
              card_name="Saheed Balogun"
              card_date="2 days ago"
              card_comment="I may not be able to join the class. I’d probably I have more important things to do."
            ></VideoCommentCard>

            <VideoCommentCard
              card_img="FemaleChild.png"
              card_name="Racheal Andrews"
              card_date="2 days ago"
              card_comment="I may not be able to join the class. I’d probably I have more important things to do."
            ></VideoCommentCard>

            <VideoCommentCard
              card_img="MaleChild.png"
              card_name="Saheed Balogun"
              card_date="2 days ago"
              card_comment="I may not be able to join the class. I’d probably I have more important things to do."
            ></VideoCommentCard>

            <VideoCommentCard
              card_img="FemaleChild.png"
              card_name="Racheal Andrews"
              card_date="2 days ago"
              card_comment="I may not be able to join the class. I’d probably I have more important things to do."
            ></VideoCommentCard>
            <!-- COMMENT CARD COMPONENT -->
          </div>

          <div class="col-12 col-md-4 right-layout">
            <div class="title color_text font-weight-900 text-uppercase">Watch Again</div>

            <!-- VIDEO LIST -->
            <VideoItemCard
              card_video_poster="VideoCardOne.png"
              card_subject="Mathematics"
              card_topic="Introduction to Algebraic Fractions"
            ></VideoItemCard>

            <VideoItemCard
              card_video_poster="VideoCardOne.png"
              card_subject="Mathematics"
              card_topic="Introduction to Algebraic Fractions"
            ></VideoItemCard>

            <VideoItemCard
              card_video_poster="VideoCardOne.png"
              card_subject="Mathematics"
              card_topic="Introduction to Algebraic Fractions"
            ></VideoItemCard>

            <VideoItemCard
              card_video_poster="VideoCardOne.png"
              card_subject="Mathematics"
              card_topic="Introduction to Algebraic Fractions"
            ></VideoItemCard>
            <!-- VIDEO LIST -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import VideoDisplayBlock from "@/components/classComps/catchup/catchupvideo/VideoDisplayBlock";
import VideoIntro from "@/components/classComps/catchup/catchupvideo/VideoIntro";
import VideoActivities from "@/components/classComps/catchup/catchupvideo/VideoActivities";
import VideoCommentInput from "@/components/classComps/catchup/catchupvideo/VideoCommentInput";

export default {
  name: "CatchupVideo",

  components: {
    VideoDisplayBlock,
    VideoIntro,
    VideoActivities,
    VideoCommentInput,
    VideoItemCard: () =>
      import(/* webpackChunkName: "VideoItemCard" */ "@/components/classComps/catchup/catchupvideo/VideoItemCard"),
    VideoCommentCard: () =>
      import(/* webpackChunkName: "VideoCommentCard" */ "@/components/classComps/catchup/catchupvideo/VideoCommentCard")
  }
};
</script>

<style lang="scss">
.video-display-section {
  position: relative;
  top: 60px;
}

.catchup-video-container {
  .left-layout {
    padding-bottom: 50px;
    border-right: 1px solid $border_grey;
    padding-right: 25px;

    @include breakpoint_max(md) {
      border: none;
      padding-right: 15px;
      padding-bottom: 0px;
    }

    .comment-title-count {
      font-size: 20px;
      line-height: 29px;
      margin-bottom: 30px;

      @include breakpoint_max(sm) {
        font-size: 16px;
      }
    }
  }

  .right-layout {
    padding-bottom: 50px;
    padding-left: 25px;

    @include breakpoint_max(md) {
      padding-left: 15px;
      margin-bottom: 50px;
    }

    @include breakpoint_max(sm) {
      margin-top: 40px;
    }
    .title {
      margin-top: 30px;
      margin-bottom: 20px;
      font-size: 16px;
      line-height: 22px;

      @include breakpoint_max(sm) {
        font-size: 14px;
      }
    }
  }
}
</style>
