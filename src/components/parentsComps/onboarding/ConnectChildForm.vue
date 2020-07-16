<template>
  <div class="parent-onboarding-section">
    <!-- AVATAR -->
    <div class="w-100 d-flex justify-content-center">
      <ChildIcon></ChildIcon>
    </div>
    <!-- AVATAR -->

    <!-- ONBOARDING TITLE -->
    <div class="onboarding-title font-weight-bold brand_navy text-center">Add your Child</div>

    <!-- ONBOARDING ALERT CARD -->
    <div class="alert-onboarding-card mx-auto text-center rounded-5">
      <span class="icon-error-report brand_navy font-17 mr-2"></span>
      Student code does not exist.
      <router-link
        :to="{name: 'ParentNewChildOnboarding'}"
        class="connect-link link-underline"
      >Create an account instead</router-link>
    </div>

    <!-- FORM AREA -->
    <form action @submit.prevent>
      <!-- CHILD NAME -->
      <div class="form-group">
        <label for="studentCode" class="control-label color_grey_dark">
          Student Code
          <span class="icon-info brand_tonic font-12 ml-2 pointer"></span>
        </label>
        <input
          type="text"
          v-model="form.stydent_code"
          id="studentCode"
          class="form-control"
          placeholder="Enter Child Name"
        >
      </div>

      <!-- RELATIONSHIP -->
      <div class="form-group">
        <label for="relationship" class="control-label color_grey_dark">Relationship</label>
        <select class="form-control" id="relationship" v-model="form.relationship">
          <option value selected disabled>- How are you related to the child? -</option>
        </select>
      </div>

      <!-- CHILD CARD DISPLAY -->
      <div class="child-card-display rounded-5">
        <!-- AVATAR -->
        <div class="avatar avatar-square avatar_md brand_inverse_light_bg">
          <img v-lazy="dynamicImg('ChildSqr1.png')" alt class="avatar-img">
        </div>

        <!-- CHILD INFO -->
        <div class="child-info">
          <div class="child-name font-weight-bold brand_primary">Omolade Giwa</div>
          <div class="child-school color_grey_dark">IMMAD College (JSS1 - Gold)</div>
        </div>
      </div>

      <!-- LINE SEPARATOR -->
      <div class="form-divider w-100"></div>

      <!-- SUBMIT BUTTON -->
      <div class="w-100 d-flex justify-content-end align-items-start mb-5">
        <button
          class="btn btn-md btn-accent font-weight-bold brand_navy"
          @click="toggleConnectedChildModal"
        >Connect</button>
      </div>
    </form>

    <!-- MODALS -->
    <ChildConnectedModal v-if="child_connected" @closeTriggered="toggleConnectedChildModal"></ChildConnectedModal>
    <!-- MODALS -->
  </div>
</template>

<script>
import ChildIcon from "@/components/coloredIconPack/ChildIcon";

export default {
  name: "ConnectChildForm",

  components: {
    ChildIcon,
    ChildConnectedModal: () =>
      import(/* webpackChunkName: "ChildConnectedModal" */ "@/components/modalComps/parentModals/ChildConnectedModal")
  },

  data() {
    return {
      form: {
        student_code: "",
        relationship: ""
      },
      child_connected: false
    };
  },

  methods: {
    toggleConnectedChildModal() {
      this.child_connected = !this.child_connected;
    }
  }
};
</script>

<style lang="scss">
.parent-onboarding-section {
  .child-card-display {
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    padding: 15px;
    @include flex_row_start_nowrap;

    .avatar {
      margin-right: 15px;
    }

    .child-name {
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 4px;

      @include breakpoint_max(sm) {
        font-size: 15px;
      }
    }

    .child-school {
      font-size: 14px;
      line-height: 19px;

      @include breakpoint_max(sm) {
        font-size: 13px;
      }
    }
  }

  .form-divider {
    margin: 45px auto 30px;
  }
}
</style>
