<template>
  <div>
    <div
      class="default-parent-row table-body w-100 d-flex justify-content-start align-items-center nowrap"
    >
      <!-- PARENT FULLNAME -->
      <div class="col-one d-flex flex-start">
        <!-- PARENT AVATAR -->
        <div class="avatar avatar_sm_md brand_white_bg"></div>

        <!-- PARENT INFO -->
        <div class="parent-info">
          <div class="parent-name h-50 brand_white_bg"></div>
          <div class="child-count h-25 brand_white_bg"></div>
        </div>
      </div>

      <!-- PARENT EMAIL -->
      <div class="col-two">
        <div class="email brand_white_bg"></div>
      </div>

      <!-- PARENT PHONE NUMBER -->
      <div class="col-three">
        <div class="phone brand_white_bg"></div>
      </div>

      <!-- PARENT OPTIONS -->
      <div class="col-four position-relative">
        <div class="avatar avatar_empty_lg brand_white_bg"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ParentDefaultCard"
};
</script>

<style lang="scss">
// TABLE BODY
.default-parent-row {
  background: rgba(#ffffff, 0.8);
  border-radius: 3px;
  padding-top: 18px;
  padding-bottom: 18px;
  margin-bottom: 2px;

  .avatar {
    margin-right: 15px;
  }

  .parent-name {
    width: 120px;

    @include breakpoint_max(lg) {
      width: 80px;
    }

    @include breakpoint_max(sm) {
      width: 200px;
    }

    @include breakpoint_max(xs) {
      width: 170px;
    }
  }

  .email {
    @include custom_min_edge(160, 35);

    @include breakpoint_max(lg) {
      @include custom_min_edge(110, 30);
    }
  }

  .phone {
    @include custom_min_edge(140, 35);

    @include breakpoint_max(xl) {
      @include custom_min_edge(110, 35);
    }

    @include breakpoint_max(lg) {
      @include custom_min_edge(90, 30);
    }
  }

  .col-two,
  .col-three {
    width: 150px;
  }
}
</style>
