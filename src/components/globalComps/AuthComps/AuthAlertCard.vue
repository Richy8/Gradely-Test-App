<template>
  <div>
    <div
      class="auth-alert h-auto rounded-5 d-flex justify-content-start align-items-center text-left"
      :class="alert_class"
    >
      <div class="avatar avatar_sm mr-3 position-relative" style="margin-top: -5px;">
        <img :src="localImg(alert_icon)" alt class="avatar-img">
      </div>
      {{ alert_msg }}
    </div>
  </div>
</template>

<script>

export default {
  name: "AuthAlertCard",

  props: {
    alert_type: String,
    alert_msg: String,
    alert_icon: String
  },

  data() {
    return {
      alert_class: "",
      alert_error: "error-comp",
      alert_success: "success-comp"
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

<style lang="scss" scoped>
.auth-alert {
  padding: 10px 15px;
  margin: 30px auto 0px;
  font-size: 13.5px;
  line-height: 27px;

  @include breakpoint_max(sm) {
    font-size: 13px;
  }
}

.error-comp {
  border: 1px solid lighten($brand_red, 15%);
  background: rgba($brand_red_light, 0.4);
  color: darken($brand_red, 5%);
}

.success-comp {
  border: 1px solid rgba(15, 168, 48, 0.5);
  background: rgba(rgb(108, 230, 169), 0.4);
  color: darken(rgb(6, 148, 82), 5%);
}
</style>
