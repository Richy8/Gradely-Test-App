<template>
  <div>
    <div class="student-remark-section profile-block rounded-5">
      <div class="title-row d-flex justify-content-between align-items-center nowrap">
        <!-- TITLE -->
        <div class="title-bold color_text text-uppercase">Teacher’s Remarks</div>
      </div>

      <!-- REMARK BLOCK -->
      <div class="remark-block">
        <div class="top d-flex justify-content-start align-items-start nowrap">
          <!-- AVATAR -->
          <div class="avatar avatar-square avatar_md">
            <div class="avatar-text brand_tonic_bg white-text font-weight-bold">AJ</div>
          </div>

          <div class="teacher-info">
            <!-- TEACHER NAME -->
            <div class="name font-weight-bold color_text">
              Andrew Jackson
              <span class="color_grey_dark font-12 ml-2">-- 2d</span>
            </div>

            <!-- TEACHER SUBJECT -->
            <div class="subject color_grey_dark">English Language Teacher</div>

            <!-- TEACHER COMMENT -->
            <div
              class="comment color_ash"
            >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
          </div>
        </div>
      </div>

      <!-- REMARK COMMENT -->
      <div class="remark-comment d-flex justify-content-start align-items-start nowrap">
        <!-- AVATAR -->
        <div class="avatar avatar-square avatar_md">
          <div class="avatar-text brand_inverse_light_bg brand_navy">FS</div>
        </div>

        <div class="comment-form w-100">
          <!-- FULLNAME -->
          <div class="name font-weight-bold">Francis Sanni</div>
          <!-- FORM INPUT -->
          <form action @submit.prevent class="w-100">
            <textarea cols="30" rows="5" class="form-control w-100" placeholder="Your comment here"></textarea>
            <div class="submit d-flex justify-content-end align-items-center no wrap">
              <button type="submit" class="btn btn-md btn-accent">POST</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RemarkSection"
};
</script>

<style>
</style>
