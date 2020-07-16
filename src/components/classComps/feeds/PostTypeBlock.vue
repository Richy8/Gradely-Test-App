<template>
  <div>
    <span class="post-type-block brand_inverse_light_bg rounded-20">
      <!-- ICON -->
      <span class="icon brand_primary font-24" :class="selected_icon"></span>

      <!-- POST TYPE -->
      <span
        class="type brand_primary font-weight-bold pointer"
        @click="toggleOption"
      >Create {{selected_type}}</span>

      <!-- CARET -->
      <span class="option icon-caret-fill-down font-10 border_grey_dark"></span>

      <!-- DROPDOWN -->
      <div
        class="post-type-dropdown position-absolute rounded-10 white overflow-hidden index-9"
        v-on-clickaway="dropOption"
        @click="toggleOption"
        v-if="post_type_option"
      >
        <div class="top text-uppercase font-weight-800 color_text">Create A...</div>
        <!-- TYPE -->
        <div
          class="type pointer d-flex justify-content-between align-items-center nowrap"
          v-for="(type, index) in post_types"
          :key="index"
          @click="selectPostType(index)"
        >
          <!-- LEFT -->
          <div class="left">
            <!-- AVATAR -->
            <div class="avatar brand_primary_bg">
              <span class="flex-center font-18 brand_inverse" :class="type.icon"></span>
            </div>
            <!-- TEXT -->
            <div class="text color_text">{{ type.text }}</div>
          </div>

          <!-- RIGHT -->
          <div class="right">
            <div class="avatar brand_inverse_bg" v-if="type.selected">
              <span class="icon-accept flex-center white-text font-14"></span>
            </div>
          </div>
        </div>
      </div>
    </span>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "PostTypeBlock",

  mixins: [clickaway],

  data() {
    return {
      selected_type: "a Discussion",
      selected_icon: "icon-discussion",

      post_type_option: false,

      post_types: [
        {
          text: "Lesson",
          value: "a Lesson",
          icon: "icon-files",
          selected: false
        },
        {
          text: "Discussion",
          value: "a Discussion",
          icon: "icon-discussion",
          selected: true
        },
        {
          text: "Live Class",
          value: "a Live Class",
          icon: "icon-videocam",
          selected: false
        },
        {
          text: "Assessment",
          value: "an Assessment",
          icon: "icon-assessment",
          selected: false
        }
      ]
    };
  },

  methods: {
    selectPostType(index) {
      this.post_types.map(type => (type.selected = false));
      this.post_types[index].selected = true;
      this.selected_type = this.post_types[index].value;
      this.selected_icon = this.post_types[index].icon;
      this.$emit("selected", this.post_types[index].text);
    },

    toggleOption() {
      this.post_type_option = !this.post_type_option;
    },

    dropOption() {
      this.post_type_option = false;
    }
  }
};
</script>

<style lang="scss">
.post-type-block {
  position: relative;
  margin-bottom: 15px;
  padding: 5px 10px;
  display: inline-block;

  .icon {
    margin-right: 12px;
    margin-left: 3px;
  }

  .type {
    position: relative;
    top: -4px;
    font-size: 14px;
    line-height: 19px;
  }

  .option {
    position: relative;
    top: -4px;
    margin-left: 16px;
    margin-right: 6px;
  }

  .post-type-dropdown {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
    width: 240px;
    left: 0;
    top: 45px;
    transition: all 0.6s ease-in-out;
    animation: panel-slide-down 0.5s ease-in-out forwards;

    .top {
      padding: 15px;
      font-size: 12px;
      line-height: 16px;
    }

    .type {
      padding: 8px 15px;
      transition: all 0.3s ease-in-out;

      .left {
        @include flex_row_start_nowrap;
        .avatar {
          margin-right: 10px;
          @include equal_min_edge(34);
        }

        .text {
          font-size: 13.5px;
          line-height: 16px;
        }
      }

      .right {
        .avatar {
          @include equal_min_edge(18);
        }
      }

      &:hover {
        background: #f5f5f5;
      }
    }
  }
}
</style>
