<template>
  <div>
    <!-- COUNT AND SORT SECTION -->
    <div class="student-count-sort-row d-flex justify-content-between align-items-center nowrap">
      <!-- COUNT -->
      <div class="count font-weight-bold color_grey_dark">15 Students</div>
      <!-- SORT -->
      <div class="sort d-flex justify-content-start align-items-center nowrap color_text pointer">
        <div class="sort-range">Sort A - Z</div>
        <div class="caret-icon">
          <span class="flex-center icon-caret-fill-down position-relative font-9"></span>
        </div>
      </div>
    </div>

    <!-- STUDENT CONTENT SECTION -->
    <div class="row">
      <div class="col-12 col-md-4 col-lg-3">
        <!-- ADD STUDENT -->
        <div class="student-member-card add-new-student pointer" @click="redirectToAddStudent">
          <div class="content w-100 h-100">
            <!-- ADD STUDENT ICON -->
            <span class="icon icon-user-plus border_grey_dark d-block"></span>
            <!-- ADD STUDENT ICON -->
            <div class="text color_text">Add Students</div>
          </div>
        </div>
        <!-- ADD STUDENT -->
      </div>

      <!-- STUDENT CONTENT CARD -->
      <div class="col-12 col-md-4 col-lg-3">
        <StudentContentCard
          child_img="BoyOne.png"
          child_name="Henry Okafor"
          child_code="UED/2019/0856"
          @toggleMessage="$emit('toggleMessage')"
        ></StudentContentCard>
      </div>

      <div class="col-12 col-md-4 col-lg-3">
        <StudentContentCard
          child_img="GirlOne.png"
          child_name="Helen Bright"
          child_code="UED/2019/0856"
          @toggleMessage="$emit('toggleMessage')"
        ></StudentContentCard>
      </div>

      <div class="col-12 col-md-4 col-lg-3">
        <StudentContentCard
          child_img="BoyTwo.png"
          child_name="Andrew Oshinaga"
          child_code="UED/2019/0856"
          @toggleMessage="$emit('toggleMessage')"
        ></StudentContentCard>
      </div>

      <div class="col-12 col-md-4 col-lg-3">
        <StudentContentCard
          child_img="GirlTwo.png"
          child_name="Giwa Omolade"
          child_code="UED/2019/0856"
          @toggleMessage="$emit('toggleMessage')"
        ></StudentContentCard>
      </div>

      <div class="col-12 col-md-4 col-lg-3">
        <StudentContentCard
          child_img="GirlOne.png"
          child_name="Helen Bright"
          child_code="UED/2019/0856"
          @toggleMessage="$emit('toggleMessage')"
        ></StudentContentCard>
      </div>

      <div class="col-12 col-md-4 col-lg-3">
        <StudentContentCard
          child_img="BoyTwo.png"
          child_name="Andrew Oshinaga"
          child_code="UED/2019/0856"
          @toggleMessage="$emit('toggleMessage')"
        ></StudentContentCard>
      </div>

      <div class="col-12 col-md-4 col-lg-3">
        <StudentContentCard
          child_img="GirlTwo.png"
          child_name="Giwa Omolade"
          child_code="UED/2019/0856"
          @toggleMessage="$emit('toggleMessage')"
        ></StudentContentCard>
      </div>
      <!-- STUDENT CONTENT CARD -->
    </div>
  </div>
</template>

<script>
import StudentContentCard from "@/components/classComps/members/students/StudentContentCard";

export default {
  name: "StudentContentInfo",

  components: {
    StudentContentCard
  },

  data() {
    return {};
  },

  methods: {
    redirectToAddStudent() {
      let account_type = this.$route.path.split("/")[1];
      this.$router.push(`/${account_type}/dashboard/add-students`);
    }
  }
};
</script>

<style lang="scss">
// STUDENT CARD
.student-member-card {
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  border-radius: 10px;
  margin-bottom: 30px;
  cursor: pointer;

  @include breakpoint_max(lg) {
    height: 180px;
  }

  @include breakpoint_max(md) {
    height: auto;
    margin-bottom: 6px;
  }
}

.student-count-sort-row {
  margin-top: 25px;
  margin-bottom: 14px;

  .count {
    font-size: 14px;
    line-height: 19px;

    @include breakpoint_max(lg) {
      font-size: 13px;
    }
  }

  .sort-range {
    font-size: 12px;
    line-height: 16px;
    margin-right: 15px;

    @include breakpoint_max(lg) {
      font-size: 11.5px;
    }
  }

  .caret-icon {
    padding-right: 11px;
  }
}

.add-new-student {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23333' stroke-width='1' stroke-dasharray='7' stroke-dashoffset='2' stroke-linecap='square'/%3e%3c/svg%3e");
  -webkit-text-stroke-color: #959595;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;

  @include breakpoint_max(md) {
    padding: 14px 22px;
  }

  .content {
    @include flex_column_center;

    @include breakpoint_max(md) {
      @include flex_row_start_nowrap;
    }
  }

  .icon {
    text-align: center;
    font-size: 48px;
    margin-bottom: 24px;
    transition: all 0.3s ease-in-out;

    @include breakpoint_max(lg) {
      font-size: 46px;
    }

    @include breakpoint_max(md) {
      margin-bottom: 0px;
      margin-right: 20px;
      font-size: 23px;
    }

    @include breakpoint_max(sm) {
      font-size: 21px;
    }
  }

  .text {
    font-size: 14px;
    line-height: 19px;
    transition: all 0.3s ease-in-out;

    @include breakpoint_max(lg) {
      font-size: 13px;
    }

    @include breakpoint_max(md) {
      font-size: 15px;
    }

    @include breakpoint_max(sm) {
      font-size: 14px;
    }
  }

  &:hover {
    .icon,
    .text {
      color: $brand_accent !important;
    }
  }
}
</style>
