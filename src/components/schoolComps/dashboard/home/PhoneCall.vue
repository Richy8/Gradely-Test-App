<template>
  <div class="phone-section d-flex justify-content-end align-items-center">
    <div class="dropdown-btn">
      <div class="part-one font-weight-bold select-none">Request a</div>
      <div
        class="part-two d-flex pointer select-none"
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
            <a href @click.prevent="selected('Call')" id="dropdownLink">Call</a>
          </li>
          <li>
            <a href @click.prevent="selected('Text')" id="dropdownLink">Text Message</a>
          </li>
          <li>
            <a href @click.prevent="selected('Visit')" id="dropdownLink">Visitation</a>
          </li>
        </ul>
      </div>
    </div>

    <a href="javascript:void(0)" @click="$emit('toggleSidebar')">
      <div class="avatar avatar_md brand_accent_bg btn-accent">
        <span class="icon-arrow-right"></span>
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
      dropdown_item: "Call",
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

<style>
</style>
