<template>
  <div>
    <div class="post-homework-section rounded-5">
      <div class="d-flex justify-content-between align-items-start">
        <div class="top-block">
          <!-- HOMEWORK AVATAR -->
          <div class="avatar brand_inverse_light_bg">
            <div class="span flex-center icon-library brand_navy font-17"></div>
          </div>

          <!-- HOMEWORK INFO -->
          <div class="homework-info">
            <div class="title color_text font-weight-bold">{{ post.homework_data.title }}</div>
            <div class="subject color_grey_dark">{{ post.homework_data.subject }}</div>

            <!-- HOMEWORK TIMING INFO -->
            <div class="time-row">
              <div class="brand_green left-block">Open</div>
              <div class="color_text">
                <span class="date">{{ post.homework_data.date }}</span> &nbsp;
                <span class="time">{{ post.homework_data.time }}</span>
              </div>
            </div>

            <!-- HOMEWORK STATUS INFO -->
            <div class="status-row color_grey_dark">
              <div class="left-block">STATUS</div>
              <div class>DUE DATE</div>
            </div>

            <!-- REPORT LINK -->
            <router-link to class="font-10-5 color_grey_dark">See Homework Report</router-link>
          </div>
        </div>

        <!-- HOMEWORK OPTIONS -->
        <div class="position-relative">
          <div
            class="avatar border pointer homework-options"
            v-on-clickaway="dropOption"
            @click="toggleHomeworkOption"
            v-if="account_type==='teacher'"
          >
            <span class="icon-options font-20 flex-center border_grey_dark"></span>
          </div>
          <!-- DROPDOWN MENU -->
          <div class="dropdown-btn-menu placement-bottom" v-if="homework_option">
            <ul class="list-unstyled">
              <li>
                <router-link to>View Details</router-link>
              </li>
              <li>
                <router-link to>Edit Homework</router-link>
              </li>
              <li>
                <router-link to>Extend due date</router-link>
              </li>
              <li>
                <router-link to>Refresh Homework</router-link>
              </li>
              <li>
                <router-link to>Delete Homework</router-link>
              </li>
            </ul>
          </div>
        </div>
        <!-- HOMEWORK OPTIONS -->
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "PostHomeworkBlock",

  props: {
    post: Object
  },

  mixins: [clickaway],

  data() {
    return {
      account_type: "",
      homework_option: false
    };
  },

  mounted() {
    this.getAccountType();
  },

  methods: {
    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
    },

    toggleHomeworkOption() {
      this.homework_option = !this.homework_option;
    },

    dropOption() {
      this.homework_option = false;
    }
  }
};
</script>

<style lang="scss">
.post-homework-section {
  border: 1px solid #dbf5f8;
  box-sizing: border-box;
  padding: 10px 10px 14px;

  .top-block {
    @include flex_row_start_nowrap;
    align-items: flex-start;
    position: relative;

    .avatar {
      margin-right: 10px;

      @include breakpoint_max(sm) {
        @include equal_min_edge(32);
      }
    }

    .title {
      font-size: 14px;
      line-height: 19px;
      margin-bottom: 2px;
    }

    .subject {
      font-size: 12px;
      line-height: 16px;
      margin-bottom: 14px;
    }

    .time-row {
      @include flex_row_start_nowrap;
      font-weight: bold;
      font-size: 12px;
      line-height: 140%;
      margin-bottom: 4px;
    }

    .status-row {
      @include flex_row_start_nowrap;
      font-size: 10px;
      line-height: 177.06%;
      margin-bottom: 12px;
    }

    .left-block {
      width: 80px;
    }

    a {
      margin-left: 80px;
    }
  }

  .dropdown-btn-menu {
    width: 180px;
    a {
      font-size: 12px;
      color: $color_grey_dark;
      padding: 9px 5px;
    }
  }
}
</style>
