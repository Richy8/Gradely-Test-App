<template>
  <div>
    <div class="post-data white rounded-5">
      <!-- POST AUTHOR INFO -->
      <div class="post-author d-flex justify-content-start align-items-center nowrap">
        <!-- AVATAR -->
        <div class="avatar avatar-square avatar_sm">
          <img :src="dynamicImg(post_img)" alt class="avatar-img">
        </div>

        <!-- AUTHOR NAME -->
        <div class="fullname font-weight-bold brand_navy">{{ post_author }}</div>
      </div>

      <!-- POST BODY -->
      <div class="post-body color_ash">{{ post_body }}</div>

      <!-- POST TIME -->
      <div class="post-time brand_navy">
        <span class="time">{{ post_time }}</span> •
        <span class="date">{{ post_date }}</span>
      </div>

      <!-- POST ACTIVITY -->
      <div class="post-activity d-flex justify-content-start align-items-center nowrap">
        <!-- LIKES ACTIVITY -->
        <div class="likes pointer">
          <span class="icon icon-thumbs-up border_grey_dark"></span>
          <span class="count brand_navy">{{ post_likes_count }}</span>
        </div>

        <!-- COMMENTS ACTIVITY -->
        <div class="comments pointer">
          <span class="icon icon-chat border_grey_dark"></span>
          <span class="count brand_navy">{{ post_comment_count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostData",

  props: {
    post_img: String,
    post_author: String,
    post_body: String,
    post_time: String,
    post_date: String,
    post_likes_count: Number,
    post_comment_count: Number
  },

};
</script>

<style lang="scss">
.post-data {
  margin-top: 20px;
  border: 1px solid $border_grey;
  box-sizing: border-box;
  width: 250px;
  height: 170px;
  padding: 10px;
  margin-right: 10px;

  .post-author {
    margin-bottom: 10px;
  }

  .avatar {
    margin-right: 10px;
  }

  .fullname {
    font-size: 12px;
    line-height: 16px;
  }

  .post-body {
    margin-bottom: 5px;
    height: 66px;
    font-size: 12px;
    line-height: 16px;
    text-overflow: ellipsis;
  }

  .post-time {
    font-size: 10px;
    line-height: 14px;
    margin-bottom: 17px;
    opacity: 0.7;
  }

  .post-activity {
    .likes,
    .comments {
      font-size: 11px;
      line-height: 140%;

      .count {
        position: relative;
        top: -2px;
      }

      .icon {
        font-size: 15px;
        margin-right: 5px;
      }
    }

    .likes {
      margin-right: 33px;
    }
  }
}
</style>
