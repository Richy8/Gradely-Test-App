<template>
  <div>
    <div class="student-post-section profile-block d-none d-md-block">
      <div class="title-row d-flex justify-content-between align-items-center nowrap">
        <!-- TITLE -->
        <div class="title-bold color_text text-uppercase">Posts</div>

        <!-- VIEW ALL -->
        <div class="view-all">
          <span class="btn-link font-weight-bold">See all</span>
        </div>
      </div>

      <!-- POST DATA ROW -->
      <div class="post-row d-flex justify-content-start align-items-center nowrap">
        <!-- POST DATA COMPONENT -->
        <PostData
          post_img="ManSquare.png"
          post_author="Andrew Oshinaga"
          post_body="This is post by the student for the class. An announcement is posted by the school admin and can only be seen by the target class or individual."
          post_time="6:31 pm"
          post_date="12 Mar 20"
          :post_likes_count="4"
          :post_comment_count="5"
        ></PostData>

        <PostData
          post_img="ManSquare.png"
          post_author="Andrew Oshinaga"
          post_body="This is post by the student for the class. An announcement is posted by the school admin and can only be seen by the target class or individual."
          post_time="6:31 pm"
          post_date="12 Mar 20"
          :post_likes_count="2"
          :post_comment_count="5"
        ></PostData>

        <PostData
          post_img="ManSquare.png"
          post_author="Andrew Oshinaga"
          post_body="This is post by the student for the class. An announcement is posted by the school admin and can only be seen by the target class or individual."
          post_time="6:31 pm"
          post_date="12 Mar 20"
          :post_likes_count="4"
          :post_comment_count="10"
        ></PostData>
        <!-- POST DATA COMPONENT -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostSection",

  components: {
    PostData: () =>
      import(/* webpackChunkName: "PostData" */ "@/components/schoolComps/dashboard/profile/studentprofile/PostData")
  }
};
</script>

<style lang="scss">
.student-post-section {
  .title-row {
    span {
      text-decoration: none;
      font-size: 14px;
      line-height: 140%;
    }
  }

  .post-row {
    width: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
      height: 8px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background: $color_grey_light;
    }

    @include breakpoint_max(md) {
      -ms-overflow-style: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
}
</style>
