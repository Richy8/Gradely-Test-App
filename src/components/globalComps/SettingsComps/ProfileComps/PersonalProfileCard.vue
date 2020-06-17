<template>
  <div>
    <!-- SCHOOL LOGO SECTION -->
    <div class="personal-info-section d-flex justify-content-start align-items-center nowrap">
      <!-- DISPLAY LOGO -->
      <div class="avatar avatar-square avatar_xl avatar-personal rounded-10">
        <div class="avatar-text" :class="color_scheme">{{ getInitial }}</div>
      </div>

      <div class="right-section d-flex flex-wrap align-items-start">
        <!-- LOGO INSTRUCTION -->
        <div class="logo-guide">
          <div class="title font-weight-bold color_text">Upload Photo</div>
          <div class="options">Accepts .png, .jpg or .jpeg</div>
        </div>

        <!-- LOGO CHANGE BUTTON -->
        <div class="logo-change-button">
          <label for="changeLogo" class="btn btn-default-outline btn-md mx-0">
            <input type="file" class="inputFile" id="changeLogo" hidden>
            <div class="d-flex flex-center">
              <div>CHANGE Photo</div>
            </div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setInitial } from "@/scripts/utilities";

export default {
  name: "PersonalProfileCard",

  props: ["fullname", "color_scheme"],

  computed: {
    getInitial() {
      return setInitial(this.fullname);
    }
  }
};
</script>

<style lang="scss">
.personal-info-section {
  .avatar {
    margin-right: 30px;

    .avatar-text {
      font-size: 32px;

      @include breakpoint_max(sm) {
        font-size: 22px;
      }
    }
  }

  .logo-guide {
    font-size: 15px;
    margin-right: 30px;

    @include breakpoint_max(sm) {
      font-size: 13.5px;
    }
  }

  .btn {
    @include breakpoint_max(xs) {
      font-size: 11px;
      padding: 9px 18px;
    }
  }
}
</style>
