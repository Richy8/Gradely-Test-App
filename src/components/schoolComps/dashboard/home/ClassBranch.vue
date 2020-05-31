<template>
  <div>
    <div class="class-branch-section">
      <!-- BRANCH CARD -->
      <div class="branch-card white rounded-5 h-auto position-relative">
        <!-- BRANCH CARD LABEL -->
        <div class="branch-card-label position-absolute w-100 rounded-top-5" :class="setLabelBg"></div>

        <!-- BRANCH CARD HEADER -->
        <div
          class="branch-card-header position-relative d-flex justify-content-between align-items-center nowrap"
        >
          <!-- BRANCH CARD TITLE -->
          <div class="branch-card-title font-weight-bold color_text">{{ setclassInfo }}</div>
          <div class="branch-card-option my-auto" v-if="show_option">
            <span
              class="icon-ellipsis-h font-20 pointer"
              v-on-clickaway="onDrop"
              @click="toggleDropdown"
            ></span>
            <!-- DROP DOWN MENU -->
            <div class="dropdown-btn-menu placement-bottom" v-if="branch_options">
              <ul class="list-unstyled">
                <li>
                  <a href @click.prevent="$emit('openClassModal')">Edit Info</a>
                </li>
                <li>
                  <router-link :to="{name: 'ClassFeeds'}">View Feeds</router-link>
                </li>
                <li>
                  <a href @click.prevent="$emit('openTeacherModal')">Add Teachers</a>
                </li>
                <li>
                  <a href @click.prevent>Delete Class</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- BRANCH CARD CLASS CODE -->
        <div
          class="branch-card-code position-relative w-auto color_white_bg color_grey_dark"
          v-if="branch_type==='code'"
        >
          Class Code:
          <span class="font-weight-bold brand_black">{{class_code}}</span>
        </div>

        <!-- BRANCH CARD SUBJECT LIST -->
        <div
          class="branch-card-subject position-relative w-auto color_ash"
          v-if="branch_type==='subject'"
        >{{ class_subject }}</div>

        <!-- BRANCH CARD ICON ROW -->
        <div
          class="branch-card-icon-row mb-0 d-flex justify-content-between align-items-center nowrap"
        >
          <!-- CALL OUT ICON LINK -->
          <router-link :to="{name: 'ClassFeeds'}">
            <span class="branch-icon font-20 color_grey_light pointer icon-callout"></span>
          </router-link>

          <!-- LIBRARY ICON LINK -->
          <router-link :to="{name: 'ClassHomework'}">
            <span class="branch-icon font-20 color_grey_light pointer icon-library"></span>
          </router-link>

          <!-- PIE CHART ICON LINK -->
          <router-link :to="{name: 'ClassReport'}">
            <span class="branch-icon font-20 color_grey_light pointer icon-pie-chart"></span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
import { colors, shuffle, random } from "@/scripts/utilities";

export default {
  name: "ClassBranch",
  mixins: [clickaway],
  components: {},

  props: {
    class_year: String,
    class_branch: String,
    class_code: String,
    class_subject: String,
    branch_type: String,
    show_option: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    setclassInfo() {
      return `${this.class_year} - ${this.class_branch}`;
    },

    setLabelBg() {
      let shuffled = shuffle(colors);
      return shuffled[random(11, 0)];
    }
  },

  data() {
    return {
      branch_options: false
    };
  },

  methods: {
    toggleDropdown() {
      this.branch_options = !this.branch_options;
    },

    onDrop() {
      this.branch_options = false;
    }
  }
};
</script>

<style lang="scss">
// CLASS BRANCH SECTION
.class-branch-section {
  margin-bottom: 50px;
}

.branch-card {
  width: 210px;
  padding: 16px 15px;
  margin-right: 20px;

  @include breakpoint_max(lg) {
    @include custom_min_edge(190, 160);
  }

  @include breakpoint_max(sm) {
    @include custom_min_edge(190, 150);
  }

  @include breakpoint_max(xs) {
    @include custom_min_edge(175, 130);
  }

  @include breakpoint_min_max(320, 419) {
    margin-right: 10px;
  }

  .branch-card-label {
    top: 0;
    left: 0;
    height: 6px;
  }

  .branch-card-header {
    margin-bottom: 15px;

    .branch-card-title {
      line-height: 22px;

      @include breakpoint_max(lg) {
        font-size: 15px;
      }

      @include breakpoint_max(sm) {
        font-size: 13px;
      }
    }
  }

  .branch-card-code,
  .branch-card-subject {
    text-overflow: ellipsis;
    padding: 6px 8px;
    border-radius: 3px;
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 33px;

    @include breakpoint_max(lg) {
      font-size: 13px;
    }

    @include breakpoint_max(sm) {
      margin-bottom: 22px;
      font-size: 12px;
    }
  }

  .branch-card-subject {
    font-size: 13px;
    margin-bottom: 25px;
    padding: 3px;

    @include breakpoint_max(xs) {
      font-size: 12.5px;
    }
  }

  .branch-card-icon-row {
    padding-left: 13px;
    padding-right: 13px;

    .branch-icon {
      transition: all 0.3s ease-in-out;

      @include breakpoint_max(xs) {
        font-size: 18.5px !important;
      }

      &:hover {
        color: $brand_accent !important;
      }
    }
  }
}
</style>
