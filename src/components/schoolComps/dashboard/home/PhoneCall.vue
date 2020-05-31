<template>
  <div class="phone-section d-flex justify-content-end align-items-center position-relative">
    <!-- GET PREMIUM LINK -->
    <span class="get-premium-link position-absolute">
      <router-link to class="color_grey_dark font-11">Get Premium</router-link>
    </span>
    <!-- GET PREMIUM LINK -->

    <div class="dropdown-btn d-flex justify-content-between align-items-center nowrap">
      <div class="phone-section-one font-weight-bold select-none">Request a</div>
      <div
        class="phone-section-two d-flex pointer select-none"
        v-on-clickaway="onClose"
        @click="showDropdown"
      >
        {{ dropdown_item }}
        <div class="dropdown-btn-toggler icon_xxs ml-2"></div>
      </div>

      <!-- DROP DOWN MENU -->
      <div
        class="dropdown-btn-menu placement-bottom"
        :class="{'placement-top':y_placement}"
        v-if="toggle_dropdown"
      >
        <ul class="list-unstyled" id="dropdown">
          <li>
            <a href @click.prevent="selected('Demo Call')" id="dropdownLink">Demo Call</a>
          </li>
          <li>
            <a href @click.prevent="selected('Video Call')" id="dropdownLink">Video Call</a>
          </li>
        </ul>
      </div>
    </div>

    <a href="javascript:void(0)" @click="$emit('toggleSidebar')">
      <div class="avatar avatar_md brand_accent_bg btn-accent">
        <span class="flex-center icon-arrow-right color_text font-16"></span>
      </div>
    </a>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "PhoneCall",

  mixins: [clickaway],

  data() {
    return {
      dropdown_item: "Demo Call",
      toggle_dropdown: false,
      y_placement: false
    };
  },

  methods: {
    showDropdown() {
      this.toggle_dropdown = !this.toggle_dropdown;
      // CHECK PAGE-Y-OFFSET
      if (window.innerWidth < 768) {
        window.pageYOffset < 480
          ? (this.y_placement = !this.y_placement)
          : (this.y_placement = false);
      }
    },

    selected(val) {
      this.dropdown_item = val;
      this.toggle_dropdown = !this.toggle_dropdown;
    },

    onClose() {
      this.toggle_dropdown = false;
    }
  }
};
</script>

<style lang="scss">
.phone-section {
  @include breakpoint_max(lg) {
    margin-top: 30px;
  }

  @include breakpoint_max(md) {
    margin-top: unset;
  }

  @include breakpoint_max(xs) {
    margin-top: 30px;
  }

  .get-premium-link {
    left: 0;
    top: -22px;
    &:hover {
      text-decoration: underline !important;
    }
  }
  .dropdown-btn {
    margin-right: 20px;

    @include breakpoint_max(lg) {
      margin-right: 17px;
    }

    &:after {
      position: absolute;
      content: "";
      background: $border_grey;
      width: 1px;
      height: 28px;
      background-color: $border_grey;
      top: 8px;
      left: 55%;
      transform: translateX(-45%);
    }

    .phone-section-one {
      margin-right: 13px;

      @include breakpoint_max(lg) {
        font-size: 13px;
      }

      @include breakpoint_max(sm) {
        font-size: 12px;
      }
    }

    .phone-section-two {
      margin: auto 5px auto 13px;

      &:hover {
        color: $color_text !important;
      }

      @include breakpoint_max(lg) {
        font-size: 13px;
      }

      @include breakpoint_max(sm) {
        font-size: 12px;
      }
    }
  }

  a {
    span {
      transition: color 0.3s ease-in-out;
    }

    &:hover {
      span {
        color: #fff !important;
      }
    }
  }
}
</style>
