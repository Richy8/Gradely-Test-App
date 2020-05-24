<template>
  <div>
    <div class="table-body">
      <!-- PARENT FULLNAME -->
      <div class="col-one d-flex flex-start">
        <!-- PARENT AVATAR -->
        <div class="avatar avatar_sm_md">
          <div class="avatar-text white-text text-uppercase" :class="setAvatarBg">{{ initials }}</div>
        </div>

        <!-- PARENT INFO -->
        <div class="parent-info text-truncate">
          <div class="parent-name color_text font-weight-bold text-truncate">{{ fullname }}</div>
          <div class="child-count color_grey_dark">{{ noOfChildren }}</div>
        </div>
      </div>

      <!-- PARENT EMAIL -->
      <div class="col-two brand_accent link-underline text-truncate">{{ email }}</div>

      <!-- PARENT PHONE NUMBER -->
      <div class="col-three brand_accent link-underline text-truncate">{{ phone }}</div>

      <!-- PARENT OPTIONS -->
      <div class="col-four position-relative">
        <div class="avatar avatar_empty_lg pointer" v-on-clickaway="onDrop" @click="toggleParentOption">
          <span class="icon-ellipsis-h font-19 flex-center"></span>
        </div>

        <!-- DRODOWN MENU -->
        <div class="dropdown-btn-menu placement-bottom" v-if="parent_option">
          <ul class="list-unstyled">
            <li>
              <router-link to="" @click.native="$emit('openParentProfile')">View Details</router-link>
            </li>
            <li>
              <router-link to>Send a Message</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { colors, random, shuffle } from "@/assets/jsComps/extFunc";
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "ParentRowCard",

  mixins: [clickaway],

  props: {
    initials: String,
    fullname: String,
    child_count: Number,
    email: String,
    phone: Number
  },

  data() {
    return {
      parent_option: false
    };
  },

  computed: {
    noOfChildren() {
      if (this.child_count > 1) {
        return `${this.child_count} children`;
      } else {
        return `${this.child_count} child`;
      }
    },

    setAvatarBg() {
      let shuffled = shuffle(colors);
      return shuffled[random(15, 0)];
    }
  },

  methods: {
    toggleParentOption() {
      this.parent_option = !this.parent_option;
    },

    onDrop() {
      this.parent_option = false;
    }
  }
};
</script>

<style>
</style>
