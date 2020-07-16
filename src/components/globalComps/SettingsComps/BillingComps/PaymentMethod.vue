<template>
  <div>
    <div class="payment-method">
      <div class="title font-weight-bold color_grey_dark text-uppercase">Payment Method</div>

      <!-- CARD DETAILS -->
      <div class="card-details">
        <!-- CARD ROW -->
        <div class="card-row">
          <!-- CARD TYPE -->
          <div class="card-type">
            <img v-lazy="localImg('visa.png')" alt>
          </div>
          <div class="card-type-link">
            <router-link to class="btn-link" @click.native="toggleCardModal">Change card</router-link>
          </div>
        </div>

        <!-- CARD ROW -->
        <div class="card-row">
          <!-- CARD ACCOUNT HISTORY -->
          <div class="card-account">
            <div class="brand_navy">•••• •••• •••• 4234</div>
          </div>
          <div class="card-type-link">
            <router-link to class="btn-link">Billing History</router-link>
          </div>
        </div>
      </div>
      <!-- CARD DETAILS -->
    </div>

    <!-- MODAL -->
    <ChangeCardModal v-if="card_modal" @closeTriggered="toggleCardModal"></ChangeCardModal>
  </div>
</template>

<script>

export default {
  name: "PaymentMethod",
  
  components: {
    ChangeCardModal: () =>
      import(/* webpackChunkName: "ChangeCardModal" */ "@/components/modalComps/settingsModals/ChangeCardModal")
  },

  data() {
    return {
      card_modal: false
    };
  },

  methods: {
    toggleCardModal() {
      this.card_modal = !this.card_modal;
    }
  }
};
</script>

<style lang="scss">
.payment-method {
  .title {
    font-size: 16px;
    line-height: 22px;
    margin-top: 45px;
    margin-bottom: 30px;

    @include breakpoint_max(sm) {
      font-size: 15px;
    }
  }

  .card-row {
    @include flex_row_between_nowrap;
    margin-bottom: 15px;

    .card-account {
      font-size: 16px;
      line-height: 22px;
    }

    .card-type-link {
      font-size: 14px;
      line-height: 19px;
    }
  }
}
</style>
