<template>
  <div>
    <div class="post-data white rounded-5">
      <!-- POST AUTHOR INFO -->
      <div class="post-author d-flex justify-content-start align-items-center nowrap">
        <!-- AVATAR -->
        <div class="avatar avatar-square avatar_sm">
          <img src="@/assets/images/ManSquare.png" alt class="avatar-img">
        </div>

        <!-- AUTHOR NAME -->
        <div class="fullname font-weight-bold brand_navy">Andrew Oshinaga</div>
      </div>

      <!-- POST BODY -->
      <div
        class="post-body color_ash"
      >This is post by the student for the class. An announcement is posted by the school admin and can only be seen by the target class or individual.</div>

      <!-- POST TIME -->
      <div class="post-time brand_navy">
        <span class="time">6:31pm</span> •
        <span class="date">12 Mar 20</span>
      </div>

      <!-- POST ACTIVITY -->
      <div class="post-activity d-flex justify-content-start align-items-center nowrap">
        <!-- LIKES ACTIVITY -->
        <div class="likes">
          <span class="icon icon-thumbs-up border_grey_dark"></span>
          <span class="count brand_navy">2</span>
        </div>

        <!-- COMMENTS ACTIVITY -->
        <div class="comments">
          <span class="icon icon-chat border_grey_dark"></span>
          <span class="count brand_navy">4</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostData"
};
</script>

<style>
</style>
