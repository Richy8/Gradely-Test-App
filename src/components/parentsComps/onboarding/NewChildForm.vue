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
      Student already registered?
      <router-link
        :to="{name: 'ParentConnectChildOnboarding'}"
        class="connect-link link-underline"
      >Connect with student code</router-link>
    </div>

    <!-- FORM AREA -->
    <form action @submit.prevent>
      <!-- CHILD NAME -->
      <div class="form-group">
        <label for="childName" class="control-label color_grey_dark">Child's Name</label>
        <input
          type="text"
          v-model="form.child_name"
          id="childName"
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

      <!-- CLASS -->
      <div class="form-group">
        <label for="class" class="control-label color_grey_dark">Class</label>
        <select class="form-control" id="class" v-model="form.class">
          <option value selected disabled>- What class is your child? -</option>
        </select>
      </div>

      <!-- PASSWORD -->
      <div class="form-group">
        <label for="password" class="control-label color_grey_dark">Create Password</label>
        <div class="input-group">
          <input
            :type="passwordType ? 'password': 'text'"
            v-model="form.password"
            class="form-control"
            id="password"
            minlength="6"
            placeholder="Create a login password for your child"
          >
          <span class="input-group-addon show-pwd" @click="showPwd">
            <i class="pointer cust_icon icon_eye"></i>
          </span>
        </div>
      </div>

      <!-- POST SCRIPT -->
      <div class="extra-text border_grey_dark">
        <span class="brand_tonic font-weight-bold">P.S:</span> A student code will be generated for your child. This along with the password you entered above will be required of your child to login
      </div>

      <!-- LINE SEPARATOR -->
      <div class="form-divider w-100"></div>

      <!-- SUBMIT BUTTON -->
      <div class="w-100 d-flex justify-content-end align-items-start mb-5">
        <button
          class="btn btn-md btn-accent font-weight-bold brand_navy"
          @click="toggleNewChildModal"
        >ADD CHILD</button>
      </div>
    </form>

    <!-- MODALS -->
    <ChildAddedModal v-if="child_added" @closeTriggered="toggleNewChildModal"></ChildAddedModal>
    <!-- MODALS -->
  </div>
</template>

<script>
import ChildIcon from "@/components/coloredIconPack/ChildIcon";

export default {
  name: "NewChildForm",

  components: {
    ChildIcon,
    ChildAddedModal: () =>
      import(/* webpackChunkName: "ChildAddedModal" */ "@/components/modalComps/parentModals/ChildAddedModal")
  },

  data() {
    return {
      form: {
        child_name: "",
        relationship: "",
        class: "",
        password: ""
      },
      passwordType: true,
      child_added: false
    };
  },

  methods: {
    toggleNewChildModal() {
      this.child_added = !this.child_added;
    },

    showPwd() {
      let pwd_icon = document.querySelector(".show-pwd");
      this.passwordType = !this.passwordType;
      pwd_icon.classList.toggle("show_pass");
    }
  }
};
</script>

<style lang="scss">
.parent-onboarding-section {
  .extra-text {
    font-size: 12.5px;
    line-height: 18px;
    margin-top: 10px;
  }

  .form-divider {
    margin: 45px auto 30px;
  }
}
</style>
