<template>
  <div>
    <!-- LANGUAGE AND REGION -->
    <section>
      <div class="account-title font-weight-bold color_grey_dark text-uppercase">Language & Region</div>

      <div class="account-sub-text color_ash">English Language</div>
      <div class="account-sub-text color_ash d-flex">
        <div class="mr-5">West Africa / Lagos</div>
        <div class="btn-link font-weight-bold text-uppercase link-no-underline">Update Timezone</div>
      </div>
    </section>

    <!-- PROFILE URL -->
    <section>
      <div class="account-title font-weight-bold color_grey_dark text-uppercase">PROFILE URL</div>

      <div
        class="account-sub-text color_ash"
      >You can set a unique URL so people can easily fid more information about your school</div>

      <div class="input-group profile-url-input position-relative">
        <!-- URL DOMAIN -->
        <span class="url-domain">www.gradely.com/school/</span>
        <!-- INPUT -->
        <input
          type="text"
          v-model="profile_url"
          class="form-control"
          placeholder="christland_intl_school"
        >

        <!-- COPY LINK -->
        <span class="input-group-addon cover color_white_bg rounded-25 pointer">
          <span class="border_grey_dark font-10 text flex-center">COPY</span>
        </span>
      </div>
    </section>

    <!-- DEACTIVATE -->
    <section class="border-0">
      <div
        class="account-title font-weight-bold color_grey_dark text-uppercase"
      >DEACTIVATE YOUR SCHOOL</div>

      <!-- DEACTIVATE INFO TEXT -->
      <div
        class="account-sub-text color_ash multple-line"
      >This will remove all information about you, your classes, and your students. Once deleted, you have 60 days to retrieve your account until it is deleted permanently.</div>

      <!-- DEACTIVATE BUTTON -->
      <div class="account-sub-text color_ash d-flex">
        <button class="btn btn-md btn-tonic-outline" @click="toggleDeleteModal">DELETE</button>
      </div>
    </section>

    <!-- DELETE ACCOUNT MODAL -->
    <DeleteAccount account_type="school" v-if="delete_modal" @closeTriggered="toggleDeleteModal"></DeleteAccount>
    <!-- DELETE ACCOUNT MODAL -->
  </div>
</template>

<script>
export default {
  name: "AccountPreference",

  components: {
    DeleteAccount: () =>
      import(/* webpackChunkName: "DeleteAccount" */ "@/components/modalComps/settingsModals/DeleteAccount")
  },

  data() {
    return {
      profile_url: "",
      delete_modal: false
    };
  },

  methods: {
    toggleDeleteModal() {
      this.delete_modal = !this.delete_modal;
    }
  }
};
</script>

<style  lang="scss">
section {
  padding: 0px 2px 30px;
  border-bottom: 1px solid $border_grey;

  .account-title {
    margin-top: 30px;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 20px;

    @include breakpoint_max(sm) {
      font-size: 13.5px;
    }
    @include breakpoint_max(xs) {
      font-size: 13px;
    }
  }

  .account-sub-text {
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 15px;

    @include breakpoint_max(sm) {
      font-size: 13px;
    }
    @include breakpoint_max(xs) {
      font-size: 12.5px;
    }
  }

  .multple-line {
    line-height: 165%;
  }

  .profile-url-input {
    .cover {
      width: 61px;
      height: 30px;
      margin-right: 10px;
      transition: all 0.4s ease-in-out;
      &:hover {
        background: $color_ash !important;
      }
    }

    .url-domain {
      position: absolute;
      font-size: 14px;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: $color_grey_dark;
      z-index: 9;

      @include breakpoint_max(sm) {
        font-size: 13px;
      }
      @include breakpoint_max(xs) {
        font-size: 12.5px;
      }
    }

    input {
      padding-left: 180px;

      @include breakpoint_max(sm) {
        padding-left: 168px;
      }

      @include breakpoint_max(sm) {
        padding-left: 162px;
      }
    }
  }
}
</style>
