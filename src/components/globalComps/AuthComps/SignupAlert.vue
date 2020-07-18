<template>
  <div>
    <div class="alert signup-alert" :class="alert_class">
      <div class="alert-text font-weight-400">{{ alert_msg }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupAlert",

  props: {
    alert_type: String,
    alert_msg: String
  },

  data() {
    return {
      alert_class: "",
      alert_error: "signup-error-comp",
      alert_success: "signup-success-comp"
    };
  },

  mounted() {
    this.setAlertType();
  },

  watch: {
    alert_type: "setAlertType"
  },

  methods: {
    setAlertType() {
      if (this.alert_type === "error") {
        this.alert_class = this.alert_error;
      } else if (this.alert_type === "success") {
        this.alert_class = this.alert_success;
      }
    }
  }
};
</script>

<style lang="scss">
.signup-alert {
  position: relative;
  top: -10px;
  padding-left: 20px;

  .alert-text {
    font-size: 14.8px;
    line-height: 22px;
  }
}

.signup-error-comp {
  border-left: 4px solid lighten($brand_red, 5%);
  background: rgba($brand_red_light, 0.5);
  color: darken($brand_red, 35%);
}

.signup-success-comp {
  border-left: 4px solid rgba(15, 168, 48, 0.5);
  background: rgba(rgb(108, 230, 169), 0.3);
  color: darken(rgb(6, 148, 82), 35%);
}
</style>
