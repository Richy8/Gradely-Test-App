<template>
  <div>
    <div class="table-body white w-100 d-flex justify-content-start align-items-center nowrap">
      <!-- PARENT FULLNAME -->
      <div class="col-one d-flex flex-start">
        <!-- PARENT AVATAR -->
        <div class="avatar avatar_sm_md">
          <img v-lazy="dynamicImg(image)" :alt="getInitial" class="avatar-img" v-if="image">
          <div
            class="avatar-text white-text text-uppercase"
            :class="setAvatarBg"
            v-else
          >{{ getInitial }}</div>
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
        <div
          class="avatar avatar_empty_lg pointer"
          v-on-clickaway="onDrop"
          @click="toggleParentOption"
        >
          <span class="icon-ellipsis-h font-19 flex-center"></span>
        </div>

        <!-- DRODOWN MENU -->
        <div class="dropdown-btn-menu placement-bottom" v-if="parent_option">
          <ul class="list-unstyled">
            <li>
              <router-link to @click.native="$emit('openParentProfile')">View Details</router-link>
            </li>
            <!-- <li>
              <router-link to @click.native="$emit('toggleMessage')">Send a Message</router-link>
            </li>-->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { colors, random, shuffle, setInitial } from "@/scripts/utilities";
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "ParentRowCard",

  mixins: [clickaway],

  props: {
    fullname: String,
    image: String,
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
    getInitial() {
      return setInitial(this.fullname);
    },

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

<style lang="scss">
// TABLE BODY
.table-body {
  border-radius: 3px;
  padding-top: 18px;
  padding-bottom: 18px;
  margin-bottom: 2px;

  .avatar {
    margin-right: 15px;
  }

  .parent-name {
    font-size: 15.5px;
    line-height: 22px;
    margin-bottom: 2px;
    padding-right: 5px;

    @include breakpoint_max(xl) {
      font-size: 14.5px;
    }

    @include breakpoint_max(sm) {
      font-size: 14px;
    }
  }

  .child-count {
    font-size: 12.5px;
    line-height: 18px;

    @include breakpoint_max(xl) {
      font-size: 13px;
    }
  }

  .col-two,
  .col-three {
    font-size: 13.5px;
    line-height: 19px;
    padding-right: 15px;

    @include breakpoint_max(xl) {
      font-size: 12.5px;
    }
  }

  .col-four {
    .avatar {
      border: 1px solid $border_grey_light;
      transition: all 0.3s ease-in-out;

      &:hover {
        border: 1px solid transparent;
        background-color: rgba($brand_inverse, 0.1);
      }
    }
  }

  .dropdown-btn-menu {
    right: 40px;
    top: 65%;
    width: 200px;

    @include breakpoint_max(lg) {
      width: 160px;
    }

    @include breakpoint_max(xs) {
      right: 20px;
    }
  }
}
</style>
