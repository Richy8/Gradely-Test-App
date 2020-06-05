<template>
  <div>
    <div class="post-intro-card d-flex justify-content-between align-items-start nowrap">
      <!-- POST INFO -->
      <div class="post-info d-flex justify-content-start align-items-start nowrap">
        <!-- DISPLAY AVATAR -->
        <div class="avatar avatar-square">
          <img :src="dynamicImg(post.author_img)" alt class="avatar-img" v-if="post.author_img">
          <div class="avatar-text white-text" :class="setAvatarBg" v-else>{{ getInitial}}</div>
        </div>

        <!-- POST DETAIL -->
        <router-link :to="{name: 'ClassFeedView', params: {post_id: post.id}}">
          <div class="post-detail">
            <div class="post-title-info color_text">
              <span class="font-weight-bold">{{ post.author_name }}</span>&nbsp;
              <span v-html="intro_text">{{ intro_text }}</span>
            </div>
            <div class="post-time color_grey_dark">{{ post.time }}</div>
          </div>
        </router-link>
      </div>

      <!-- POST OPTIONS -->
      <div class="post-options position-relative">
        <div class="avatar pointer" v-on-clickaway="dropOption" @click="togglePostOption">
          <span class="icon-ellipsis-h flex-center font-18 color_grey_dark"></span>
        </div>
        <!-- DROPDOWN MENU -->
        <div class="dropdown-btn-menu placement-bottom" v-if="post_option">
          <ul class="list-unstyled">
            <li>
              <router-link to @click.native="$emit('toggleComment')">Reply</router-link>
            </li>
            <li>
              <router-link to @click.native="toggleMessageModal">Message Author</router-link>
            </li>
            <li>
              <router-link to @click.native="toggleReportModal">Report Post</router-link>
            </li>
            <li>
              <router-link to>Delete Post</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- MODAL COMPONENTS -->
    <NewMessageModal v-if="message_modal" @closeTriggered="toggleMessageModal"></NewMessageModal>
    <PostReportModal v-if="report_modal" @closeTriggered="toggleReportModal"></PostReportModal>
    <!-- MODAL COMPONENTS -->
  </div>
</template>

<script>
import RenderImages from "@/scripts/mixins/RenderImages";
import { mixin as clickaway } from "vue-clickaway";
import { colors, shuffle, random, setInitial } from "@/scripts/utilities";

export default {
  name: "PostIntroCard",

  components: {
    NewMessageModal: () =>
      import(/* webpackChunkName: "NewMessageModal" */ "@/components/schoolComps/modals/NewMessageModal"),
    PostReportModal: () =>
      import(/* webpackChunkName: "PostReportModal" */ "@/components/schoolComps/modals/PostReportModal")
  },

  props: {
    post: Object
  },

  mixins: [clickaway, RenderImages],

  computed: {
    getInitial() {
      return setInitial(this.post.author_name);
    },

    setAvatarBg() {
      let shuffled = shuffle(colors);
      return shuffled[random(15, 0)];
    }
  },

  watch: {
    post: "setText"
  },

  mounted() {
    this.setText();
  },

  data() {
    return {
      post_option: false,
      message_modal: false,
      report_modal: false,
      intro_text: ""
    };
  },

  methods: {
    setText() {
      switch (this.post.type) {
        case "Homework":
          this.intro_text =
            "<span>created an <span class='font-weight-bold'>Homework</span> </span>";
          break;

        case "Image":
          this.intro_text =
            "<span>shared an <span class='font-weight-bold'>Image</span> </span>";
          break;

        case "Text":
          this.intro_text =
            "<span>made an <span class='font-weight-bold'>Announcement</span> </span>";
          break;

        case "Poll":
          this.intro_text =
            "<span>made an <span class='font-weight-bold'>Announcement</span> </span>";
          break;

        case "Event":
          this.intro_text =
            "<span>scheduled a <span class='font-weight-bold'>Class</span> </span>";
          break;

        case "Recommendation":
          this.intro_text =
            "<span>recommendation for the <span class='font-weight-bold'>Class</span> </span>";
          break;

        default:
          this.intro_text = "";
      }
    },

    togglePostOption() {
      this.post_option = !this.post_option;
    },

    dropOption() {
      this.post_option = false;
    },

    toggleMessageModal() {
      this.message_modal = !this.message_modal;
    },

    toggleReportModal() {
      this.report_modal = !this.report_modal;
    }
  }
};
</script>

<style lang="scss">
.post-intro-card {
  padding: 16px;

  .post-info {
    .avatar {
      margin-right: 10px;
    }

    .post-title-info {
      font-size: 12px;
      line-height: 16px;
      margin-bottom: 1px;
    }

    .post-time {
      font-size: 9px;
      line-height: 11px;
    }
  }

  .post-options {
    .dropdown-btn-menu {
      width: 180px;
      a {
        font-size: 12.5px;
      }
    }
  }
}
</style>
