<template>
  <div>
    <Modal @closeModal="$emit('closeTriggered')">
      <!-- MODAL TITLE -->
      <div slot="modal-title">
        <span class="font-weight-bold">UPDATE CARD</span>
      </div>

      <!-- MODAL BODY -->
      <div slot="modal-body">
        <form action @submit.prevent>
          <div class="container">
            <!-- CARD NAME -->
            <div class="modal-body-row row">
              <label for class="text-uppercase control-label color_grey_dark">Name on Card</label>
              <input
                type="text"
                v-model="form.card_name"
                class="form-control"
                placeholder="Enter name"
              >
            </div>

            <!-- CARD NUMBER -->
            <div class="modal-body-row row position-relative">
              <label for class="text-uppercase control-label color_grey_dark">Card Number</label>
              <input
                type="number"
                v-model="form.card_number"
                class="form-control card-number-input"
                placeholder="Enter card number"
              >

              <div class="icon-pack position-absolute">
                <CreditCardIcon></CreditCardIcon>
              </div>
            </div>
          </div>

          <!-- CARD EXPIRY AND CVV  -->
          <div class="card-detail d-flex justify-content-between align-items-center nowrap">
            <!-- EXPIRY -->
            <div class="left-input">
              <label for class="text-uppercase control-label color_grey_dark">Expiry Date</label>
              <!-- EXPIRY DATE -->
              <div
                class="exipry-date d-flex justify-content-between align-items-center nowrap w-100"
              >
                <input
                  type="number"
                  v-model="form.card_month"
                  class="form-control"
                  placeholder="Month"
                >

                <select v-model="form.card_year" class="form-control">
                  <option value selected disabled>Year</option>
                </select>
              </div>
            </div>

            <!-- CVV -->
            <div class="right-input">
              <label for class="text-uppercase control-label color_grey_dark">
                CVV/CVC CODE
                <span class="icon-info brand_tonic font-13 ml-2 pointer"></span>
              </label>
              <input
                type="number"
                v-model="form.card_cvv"
                class="form-control"
                placeholder="Enter code"
              >
            </div>
          </div>

          <!-- CANCEL OR SUBMIT FORM -->
          <div
            class="modal-body-row row d-flex justify-content-center align-items-center nowrap mt-5 mb-2"
          >
            <button @click="dropModal" class="btn btn-md black-ic z-depth-0 mr-4">Cancel</button>
            <button type="submit" class="btn btn-md btn-accent ml-4">Update Card</button>
          </div>
        </form>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/globalComps/Modal";
import CreditCardIcon from "@/components/coloredIconPack/CreditCardIcon";

export default {
  name: "UpdateEmailModal",

  components: {
    Modal,
    CreditCardIcon
  },

  data() {
    return {
      form: {
        card_name: "",
        card_number: "",
        card_month: "",
        card_year: "",
        card_cvv: ""
      }
    };
  },

  methods: {
    dropModal() {
      this.$emit("closeTriggered");
    }
  }
};
</script>

<style lang="scss" scoped>
.card-number-input {
  padding-left: 60px;
}

.icon-pack {
  top: 34px;
  left: 15px;
  z-index: 9;
}

.card-detail {
  .left-input {
    width: 55%;

    .form-control {
      width: 48%;
    }
  }
  .right-input {
    width: 42%;
  }
}
</style>
