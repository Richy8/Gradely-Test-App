<template>
  <div>
    <!-- TEACHER CARD -->
    <div class="teacher-card">
      <!-- TEACHER CARD TOP -->
      <div class="teacher-card-top rounded-top-20">
        <!-- CARD OPTIONS -->
        <div class="card-option">
          <span
            class="icon-ellipsis-h font-20 pointer"
            v-on-clickaway="onDrop"
            @click="toggleDropdown"
          ></span>
          <!-- DRODOWN MENU -->
          <div class="dropdown-btn-menu placement-bottom" v-if="card_option">
            <ul class="list-unstyled">
              <li class="mb-1">
                <router-link to>View Profile</router-link>
              </li>
              <li class="mb-1">
                <router-link to>Send a Message</router-link>
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
          <div class="avatar-text white-text text-uppercase" :class="setAvatarBg">{{ initials }}</div>
        </div>

        <!-- TEACHER NAME -->
        <div class="teacher-name color_text text-center text-capitalize">{{ fullname }}</div>
        <div class="teacher-email color_grey_dark text-center text-truncate">{{ email }}</div>
      </div>

      <!-- TEACHER CARD BOTTOM -->
      <div class="teacher-card-bottom rounded-bottom-20">
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
import { colors, random, shuffle } from "@/assets/jsComps/extFunc";
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "TeacherCard",

  props: {
    initials: String,
    fullname: String,
    email: String,
    classes: Number,
    subject: Number
  },

  mixins: [clickaway],

  computed: {
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

<style>
</style>
