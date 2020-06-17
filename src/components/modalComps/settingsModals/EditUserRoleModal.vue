<template>
  <div>
    <Modal @closeModal="$emit('closeTriggered')">
      <!-- MODAL TITLE -->
      <div slot="modal-title">
        <span class="font-weight-bold">CHANGE USER ROLE</span>
      </div>

      <!-- MODAL BODY -->
      <div slot="modal-body">
        <form action @submit.prevent>
          <div class="container">
            <!--CURRENT USER INFO-->
            <div class="user-block d-flex justify-content-start align-items-center row">
              <div class="avatar avatar-square avatar_md">
                <div class="avatar-text white-text font-weight-bold brand_tonic_bg">BO</div>
              </div>

              <!-- USER DETAIL -->
              <div>
                <div class="name font-weight-bold color_text">Boye Oshinaga</div>
                <div class="status rounded-5 brand_inverse_light_bg">
                  <span class="color_grey_dark">Current Role</span> &nbsp;
                  <span class="brand_navy font-weight-bold">Owner</span>
                </div>
              </div>
            </div>

            <!-- ROLE IN SCHOOL -->
            <div class="modal-body-row row">
              <label for="schoolrole" class="text-uppercase control-label color_grey_dark">NEW ROLE</label>
              <select name id="schoolrole" class="form-control">
                <option value="Owner">School Owner</option>
                <option value="Principal">Principal</option>
                <option value="IT Director">IT Director</option>
              </select>
            </div>
          </div>

          <!-- CANCEL OR SUBMIT FORM -->
          <div class="row d-flex justify-content-center align-items-center nowrap">
            <button
              @click="$emit('closeTriggered')"
              class="btn btn-md black-ic z-depth-0 mr-4"
            >Cancel</button>
            <button type="submit" class="btn btn-md btn-accent ml-4">Update</button>
          </div>
        </form>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/globalComps/Modal";

export default {
  name: "EditUserRoleModal",

  components: {
    Modal
  },

  data() {
    return {
      form: {}
    };
  },

  methods: {}
};
</script>

<style lang="scss">
.user-block {
  margin-bottom: 30px;

  .avatar {
    margin-right: 15px;
    margin-left: 0px;
  }

  .name {
    margin-bottom: 4px;
    font-size: 16px;
    line-height: 22px;

    @include breakpoint_max(sm) {
      font-size: 14px;
    }
  }

  .status {
    font-size: 13px;
    line-height: 16px;
    padding: 5px 15px;

    @include breakpoint_max(sm) {
      font-size: 12px;
    }
  }
}
</style>
