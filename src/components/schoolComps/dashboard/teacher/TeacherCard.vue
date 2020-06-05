<template>
  <div>
    <!-- TEACHER CARD -->
    <div class="teacher-card w-100 white rounded-20 position-relative border-0">
      <!-- TEACHER CARD TOP -->
      <div class="teacher-card-top rounded-top-20 position-relative w-100">
        <!-- CARD OPTIONS -->
        <div class="card-option position-absolute d-flex justify-content-end align-items-start">
          <span
            class="icon-ellipsis-h font-20 pointer"
            v-on-clickaway="onDrop"
            @click="toggleDropdown"
          ></span>
          <!-- DRODOWN MENU -->
          <div class="dropdown-btn-menu placement-bottom" v-if="card_option">
            <ul class="list-unstyled">
              <li class="mb-1">
                <router-link :to="{name: 'TeacherProfile'}">View Profile</router-link>
              </li>
              <li class="mb-1">
                <router-link to @click.native="$emit('toggleMessage')">Send a Message</router-link>
              </li>
              <li class="mb-1">
                <router-link to>Assign to Class</router-link>
              </li>
              <li class="mb-1">
                <router-link to>Remove from School</router-link>
              </li>
            </ul>
          </div>
        </div>

        <!-- AVATAR   -->
        <div class="avatar avatar_md">
          <div
            class="avatar-text white-text font-weight-bold font-14 text-uppercase"
            :class="setAvatarBg"
          >{{ getInitial }}</div>
        </div>

        <!-- TEACHER NAME -->
        <div
          class="teacher-name font-weight-bold color_text text-center text-capitalize"
        >{{ fullname }}</div>
        <div class="teacher-email color_grey_dark text-center text-truncate font-13">{{ email }}</div>
      </div>

      <!-- TEACHER CARD BOTTOM -->
      <div class="teacher-card-bottom rounded-bottom-20 position-relative w-100">
        <!-- CLASSES -->
        <div class="teacher-column classes">
          <div class="counter font-weight-bold color_text mb-1">{{ classes }}</div>
          <div class="title color_grey_dark font-12">Classes</div>
        </div>
        <!-- SUBJECT -->
        <div class="teacher-column subject">
          <div class="counter font-weight-bold color_text mb-1">{{ subject }}</div>
          <div class="title color_grey_dark font-12">Subject</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { colors, random, shuffle, setInitial } from "@/scripts/utilities";
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "TeacherCard",

  props: {
    fullname: String,
    email: String,
    classes: Number,
    subject: Number
  },

  mixins: [clickaway],

  computed: {
    getInitial() {
      return setInitial(this.fullname);
    },

    setAvatarBg() {
      let shuffled = shuffle(colors);
      return shuffled[random(15, 0)];
    }
  },

  data() {
    return {
      card_option: false
    };
  },

  methods: {
    toggleDropdown() {
      this.card_option = !this.card_option;
    },

    onDrop() {
      this.card_option = false;
    }
  }
};
</script>

<style lang="scss">
// TEACHERS CARD
.teacher-card {
  height: 226.84px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  margin-bottom: 30px;

  @include breakpoint_max(xl) {
    height: 220px;
  }

  @include breakpoint_max(md) {
    overflow: unset;
    height: 210px;
  }

  @include breakpoint_max(sm) {
    height: 160px;
  }

  .teacher-card-top {
    top: 0;
    left: 0;
    padding: 30.84px 15px 22px;
    @include flex_column_center;

    .card-option {
      margin: 25px auto 0;
      top: 0;
      width: 90%;

      @include breakpoint_max(xs) {
        width: 88%;
      }
    }

    .avatar {
      margin-bottom: 20px;
    }

    .teacher-name {
      margin-bottom: 2px;
      overflow-wrap: break-word;

      @include breakpoint_max(md) {
        font-size: 15px;
      }

      @include breakpoint_max(sm) {
        font-size: 13.5px;
      }

      @include breakpoint_max(xs) {
        font-size: 12px;
      }
    }

    .teacher-email {
      @include breakpoint_max(md) {
        font-size: 12.5px !important;
      }

      @include breakpoint_max(sm) {
        font-size: 11px !important;
      }

      @include breakpoint_max(xs) {
        font-size: 10px !important;
        width: 130px;
      }
    }
  }

  .teacher-card-bottom {
    @include flex_row_between_nowrap;
    bottom: 0;
    left: 0;
    height: 30.86%;
    background-color: #fceacf;
    padding: 14px 70px;

    @include breakpoint_max(xl) {
      padding: 10px 45px;
    }

    @include breakpoint_max(md) {
      padding: 5px 65px;
    }

    @include breakpoint_max(sm) {
      display: none;
    }

    .teacher-column {
      @include flex_column_center;
      margin-bottom: 6.5px;

      .counter {
        @include breakpoint_max(xl) {
          font-size: 15px;
        }

        @include breakpoint_max(md) {
          font-size: 14px;
        }
      }

      .title {
        @include breakpoint_max(xl) {
          font-size: 11px;
        }

        @include breakpoint_max(md) {
          font-size: 10px;
        }
      }
    }
  }
}
</style>
