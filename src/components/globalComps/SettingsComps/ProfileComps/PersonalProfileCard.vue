<template>
  <div>
    <!-- SCHOOL LOGO SECTION -->
    <div class="personal-info-section d-flex justify-content-start align-items-center nowrap">
      <!-- DISPLAY LOGO -->
      <div class="avatar avatar-square avatar_xl avatar-personal rounded-10">
        <img v-lazy="dynamicImg(avatar_img)" alt class="avatar-img" v-if="avatar_img">
        <div class="avatar-text" :class="current_theme" v-else>{{ getInitial }}</div>
      </div>

      <div class="right-section d-flex flex-wrap align-items-start">
        <!-- LOGO INSTRUCTION -->
        <div class="logo-guide">
          <div class="title font-weight-bold color_text">Upload Photo</div>
          <div class="options">Accepts .png, .jpg or .jpeg</div>
        </div>

        <!-- LOGO CHANGE BUTTON -->
        <div class="logo-change-button">
          <!-- STUDENT CHANGE PHOTO BUTTON -->
          <button
            class="btn btn-default-outline btn-md mx-0"
            v-if="account_type==='student'"
            @click="toggleAvatarModal"
          >CHANGE PHOTO</button>

          <!-- OTHERS -->
          <label for="changeLogo" class="btn btn-default-outline btn-md mx-0" v-else>
            <input
              type="file"
              class="inputFile"
              id="changeLogo"
              accept=".png, .jpg, .jpeg"
              hidden
              @change="changePhoto"
            >
            <div class="d-flex flex-center">
              <div>Change Photo</div>
            </div>
          </label>
        </div>
      </div>

      <!-- MODALS -->
      <SelectAvatarModal v-if="avatar_modal" @closeTriggered="toggleAvatarModal"></SelectAvatarModal>
      <!-- MODALS -->
    </div>
  </div>
</template>

<script>
import { setInitial } from "@/scripts/utilities";
import { CLOUDINARY_UPLOAD } from "@/scripts/cloudinary";

export default {
  name: "PersonalProfileCard",

  props: ["fullname", "avatar_img"],

  components: {
    SelectAvatarModal: () =>
      import(/* webPackChunkName: "modal" */ "@/components/modalComps/studentModals/SelectAvatarModal")
  },

  computed: {
    getInitial() {
      return setInitial(this.fullname);
    }
  },

  data() {
    return {
      account_type: "",
      current_theme: "",
      school_photo: null,
      theme_list: {
        school: "brand_inverse_light_bg brand_primary",
        teacher: "brand_tonic_bg brand_white",
        parent: "brand_navy_bg brand_white",
        student: "brand_navy_bg brand_white"
      },
      avatar_modal: false
    };
  },

  mounted() {
    this.getAccountType();
  },

  methods: {
    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
      if (this.account_type === "school") {
        this.current_theme = this.theme_list.school;
      } else if (this.account_type === "teacher") {
        this.current_theme = this.theme_list.teacher;
      } else if (
        this.account_type === "parent" ||
        this.account_type === "student"
      ) {
        this.current_theme = this.theme_list.parent;
      }
    },

    changePhoto($event) {
      let file = $event.target.files[0];
      this.school_photo = CLOUDINARY_UPLOAD(file);
      console.log(this.school_photo);
    },

    toggleAvatarModal() {
      this.avatar_modal = !this.avatar_modal;
    }
  }
};
</script>

<style lang="scss">
.personal-info-section {
  .avatar {
    margin-right: 30px;

    @include breakpoint_max(md) {
      @include equal_min_edge(68);
    }

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
