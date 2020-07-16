<template>
  <div>
    <div class="video-display-block position-relative w-100 h-auto">
      <!-- OVERLAY -->
      <div class="position-absolute w-100 h-100 rgba-black-strong index-1" v-if="!is_subscribed"></div>
      <!-- OVERLAY -->

      <!-- SUBSCRIBE ACTION -->
      <div
        class="subscribe-cta position-absolute d-flex flex-column flex-center index-1"
        v-if="!is_subscribed"
      >
        <div class="subscribe-img">
          <img v-lazy="localImg('NoSubscription.png')" alt>
        </div>

        <div
          class="message-text brand_inverse_light text-center"
        >You need to be subscribed to watch this video</div>
        <router-link
          :to="'/'+account_type+'/settings/upgrade_plan'"
          class="btn btn-md btn-accent font-weight-bold brand_navy"
        >Upgrade Plan</router-link>
      </div>
      <!-- SUBSCRIBE ACTION -->

      <div class="container position-relative">
        <div class="row">
          <div class="col-md-12 mx-auto">
            <!-- VIDEO SECTION -->
            <video :poster="dynamicImg('VideoPoster.png')" controls class="w-100 h-auto">
              <source :src="dynamicVid('TestVideo.mp4')" type="video/mp4">Your Browser does not support the video tag
            </video>
            <!-- VIDEO SECTION -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoDisplayBlock",

  props: {
    is_subscribed: {
      type: Boolean,
      default: true
    }
  },

  components: {},

  data() {
    return {
      account_type: ""
    };
  },

  mounted() {
    this.getAccountType();
  },

  methods: {
    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
    }
  }
};
</script>

<style lang="scss">
.subscribe-cta {
  @include transform_center;

  .subscribe-img {
    margin-bottom: 20px;

    @include breakpoint_max(md) {
      margin-bottom: 10px;
      img {
        @include equal_min_edge(85);
      }
    }

    @include breakpoint_max(xs) {
      margin-bottom: 7px;
      img {
        @include equal_min_edge(80);
      }
    }
  }

  .message-text {
    font-size: 15px;
    line-height: 165%;
    margin-bottom: 30px;

    @include breakpoint_max(md) {
      margin-bottom: 20px;
      font-size: 13px;
    }

    @include breakpoint_max(xs) {
      margin-bottom: 12px;
      font-size: 11.5px;
      width: 150%;
    }
  }

  .btn {
    @include breakpoint_max(md) {
      font-size: 10px;
      padding-top: 9px;
      padding-bottom: 9px;
    }

    @include breakpoint_max(xs) {
      font-size: 9px;
      padding-top: 8px;
      padding-bottom: 8px;
    }
  }
}
</style>
