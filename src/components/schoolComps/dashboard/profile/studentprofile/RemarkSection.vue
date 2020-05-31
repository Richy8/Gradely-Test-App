<template>
  <div>
    <div class="student-remark-section profile-block rounded-5">
      <div class="title-row d-flex justify-content-between align-items-center nowrap">
        <!-- TITLE -->
        <div class="title-bold color_text text-uppercase">Teacher’s Remarks</div>
      </div>

      <!-- REMARK COMPONENT BLOCK -->
      <RemarkBlock
        teacher_name="Andrew Jackson"
        remark_date="2d"
        teacher_subject="English Language"
        teacher_remark="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
      ></RemarkBlock>

      <RemarkBlock
        teacher_name="Mike Balogun"
        remark_date="2d"
        teacher_subject="Biology"
        teacher_remark="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
      ></RemarkBlock>
      <!-- REMARK COMPONENT BLOCK -->

      <!-- REMARK COMMENT -->
      <div class="remark-comment-form-block d-flex justify-content-start align-items-start nowrap">
        <!-- AVATAR -->
        <div class="avatar avatar-square avatar_md">
          <div class="avatar-text brand_inverse_light_bg brand_navy">FS</div>
        </div>

        <div class="comment-form w-100">
          <!-- FULLNAME -->
          <div class="name font-weight-bold">Francis Sanni</div>
          <!-- FORM INPUT -->
          <form action @submit.prevent class="w-100">
            <textarea
              cols="30"
              rows="5"
              v-model="comment"
              class="form-control w-100"
              placeholder="Your comment here"
            ></textarea>
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
  name: "RemarkSection",

  components: {
    RemarkBlock: () =>
      import(/* webpackChunkName: "RemarkBlock" */ "@/components/schoolComps/dashboard/profile/studentprofile/RemarkBlock")
  },

  data() {
    return {
      comment: ""
    };
  }
};
</script>

<style lang="scss">
.student-remark-section {
  .title-row {
    margin-bottom: 25px;
  }

  .remark-comment-form-block {
    margin-top: 20px;

    .avatar {
      margin-right: 20px;
    }

    .name {
      margin-bottom: 9px;
      font-size: 16px;
      line-height: 22px;

      @include breakpoint_max(sm) {
        font-size: 14px;
      }
    }

    .form-control {
      margin-bottom: 30px;
    }
  }
}
</style>
