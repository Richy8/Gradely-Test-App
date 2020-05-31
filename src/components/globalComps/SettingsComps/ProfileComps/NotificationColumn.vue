<template>
  <div class="user-lander-section">
    <!-- NOTIFICATION -->
    <div class="user-group-row">
      <div class="notification-label color_grey_dark">Notification Settings</div>
      <div class="user-data d-flex justify-content-start align-items-center nowrap">
        <div class="value font-14">{{notification_msg}}</div>
        <div class="update-link btn-link">
          <router-link :to="{name: notification_route}">Update</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotificationColumn",

  props: ["notification_msg", "notification_route"]
};
</script>

<style lang="scss">
.user-lander-section {
  .notification-label {
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 20px;

    @include breakpoint_max(sm) {
      font-size: 13.5px;
    }
  }

  .value {
    @include breakpoint_max(sm) {
      font-size: 13px !important;
    }
  }
}
</style>
