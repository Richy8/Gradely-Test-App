<template>
  <div>
    <div class="post-event-section rounded-5">
      <div class="top-block">
        <!-- EVENT AVATAR -->
        <div class="avatar avatar-square brand_red_light_bg">
          <div class="span flex-center icon-videocam brand_accent font-17"></div>
        </div>

        <!-- EVENT INFO -->
        <div class="homework-info">
          <div class="title color_text font-weight-bold">{{ post.event_data.title }}</div>
          <div class="timing color_grey_dark">
            <span>{{ post.event_data.date }}</span> &nbsp;•&nbsp;
            <span>{{ post.event_data.time }}</span>
          </div>

          <!-- EVENT TIMING INFO -->
          <div class="join-class-btn" v-if="account_type==='school' || account_type==='parent'">
            <a href class="color_white_bg brand_accent font-weight-bold rounded-50">JOIN CLASS</a>
          </div>

          <!-- TEACHER VIEW -->
          <div
            class="d-flex justify-content-start align-items-center position-relative"
            style="margin-top: -15px;"
            v-if="account_type==='teacher'"
          >
            <div class="btn-link font-12 font-weight-bold link-no-underline mr-4">Start</div>
            <!-- OPTION -->
            <div class="avatar pointer" v-on-clickaway="dropOption" @click="toggleEventOption">
              <span class="icon-ellipsis-h color_grey_dark font-19 flex-center"></span>
            </div>

            <!-- DROPDOWN MENU -->
            <div class="dropdown-btn-menu placement-bottom" v-if="event_option">
              <ul class="list-unstyled">
                <li>
                  <router-link to>Reschedule</router-link>
                </li>
                <li>
                  <router-link to>Edit Details</router-link>
                </li>
                <li>
                  <router-link to>Cancel Class</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "PostEventBlock",

  props: {
    post: Object
  },

  mixins: [clickaway],

  data() {
    return {
      account_type: "",
      event_option: false
    };
  },

  mounted() {
    this.getAccountType();
  },

  methods: {
    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
    },

    toggleEventOption() {
      this.event_option = !this.event_option;
    },

    dropOption() {
      this.event_option = false;
    }
  }
};
</script>

<style lang="scss">
.post-event-section {
  border: 1px solid #dbf5f8;
  box-sizing: border-box;
  padding: 10px 10px 14px;

  .top-block {
    @include flex_row_start_nowrap;
    align-items: flex-start;

    .avatar {
      margin-right: 13px;
      @include breakpoint_max(sm) {
        @include equal_min_edge(32);
      }
    }

    .title {
      font-size: 14px;
      line-height: 19px;
      margin-bottom: 5px;
    }

    .timing {
      font-size: 12px;
      line-height: 16px;
      margin-bottom: 20px;
    }

    .join-class-btn {
      margin-top: 22px;
      margin-bottom: 5px;
      a {
        padding: 8px 26px;
        font-size: 10px;
        line-height: 140%;
        transition: all 0.3s ease-in-out;

        &:hover {
          background: $brand_inverse_light !important;
          box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
        }
      }
    }
  }

  .dropdown-btn-menu {
    width: 170px;
    a {
      font-size: 11.5px;
      color: $color_grey_dark;
      padding: 9px 5px;
    }
  }
}
</style>
