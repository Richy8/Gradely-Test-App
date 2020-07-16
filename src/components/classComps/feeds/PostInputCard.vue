<template>
  <div>
    <div
      class="post-input-container w-100 h-100 white rounded-5 overflow-hidden"
      :class="account_type==='teacher' || account_type==='parent' ? 'd-none d-md-block' : ''"
    >
      <!-- INPUT AREA -->
      <div class="input-area">
        <!-- USER INFO ROW -->
        <div class="user-info-row d-flex justify-content-start align-items-center nowrap">
          <div class="avatar avatar-square">
            <img v-lazy="dynamicImg(avatar_img)" alt class="avatar-img" v-if="avatar_img">
            <div class="avatar-text font-weight-bold" :class="color_scheme" v-else>{{ getInitial }}</div>
          </div>

          <!-- POST INFO TEXT -->
          <div
            class="post-text color_grey_dark"
            @click="togglePostModal"
            v-if="account_type === 'school'"
          >Post an announcement</div>
          <div
            class="post-text color_grey_dark"
            @click="togglePostModal"
            v-else-if="account_type === 'teacher' || account_type === 'parent' || account_type === 'student'"
          >Share some material with your class</div>
        </div>
      </div>

      <!-- INPUT OPTIONS -->
      <PostInputOptions></PostInputOptions>
    </div>

    <!-- TEACHER MOBILE POST INPUT CARD -->
    <div
      class="teacher-mobile-post-input rounded-5 white d-flex justify-content-between align-items-center nowrap pointer"
      :class="account_type==='teacher' || account_type==='parent' || account_type==='student' ? 'd-md-none' : ''"
      v-if="account_type==='teacher' || account_type==='parent' || account_type==='student'"
      @click="togglePostModal"
    >
      <!-- POST INPUT PLACEHOLDER -->
      <div class="placeholder color_grey_dark">Start a discussion or share study materials</div>
      <!-- POST INPUT ICON -->
      <div class="avatar">
        <span class="icon-paper-clip border_grey_dark font-20 flex-center"></span>
      </div>
    </div>
    <!-- TEACHER MOBILE POST INPUT CARD -->

    <!-- NEW POST MODAL COMPONENT -->
    <NewPostModal
      v-if="post_modal"
      :fullname="fullname"
      :color_scheme="color_scheme"
      :account_type="account_type"
      @closeTriggered="togglePostModal"
    ></NewPostModal>
    <!-- NEW POST MODAL COMPONENT -->
  </div>
</template>

<script>
import { setInitial } from "@/scripts/utilities";
import PostInputOptions from "@/components/classComps/feeds/PostInputOptions";

export default {
  name: "PostInputCard",

  props: {
    fullname: String,
    avatar_img: String
  },

  components: {
    PostInputOptions,
    NewPostModal: () =>
      import(/* webpackChunkName: "NewPostModal" */ "@/components/modalComps/classModals/NewPostModal")
  },

  computed: {
    getInitial() {
      return setInitial(this.fullname);
    }
  },

  data() {
    return {
      account_type: "",
      color_scheme: "",
      post_modal: false
    };
  },

  mounted() {
    this.getAccountType();
  },

  methods: {
    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
      if (this.account_type === "school") {
        this.color_scheme = "brand_inverse_light_bg brand_primary";
      } else if (this.account_type === "teacher") {
        this.color_scheme = "brand_tonic_bg brand_white";
      } else if (this.account_type === "parent") {
        this.color_scheme = "brand_navy_bg brand_white";
      }
    },

    togglePostModal() {
      this.post_modal = !this.post_modal;
    }
  }
};
</script>

<style lang="scss">
.post-input-container {
  border: 1px solid $border_grey;
  box-sizing: border-box;
  margin-bottom: 11px;

  .input-area {
    padding: 14px 15px 10px;
    cursor: text;

    .user-info-row {
      margin-bottom: 35px;
    }

    .avatar {
      margin-right: 15px;
      @include breakpoint_max(sm) {
        @include equal_min_edge(32);
      }
    }

    .post-text {
      font-size: 14px;
      line-height: 19px;
      flex: 1;
      padding-bottom: 10px;

      @include breakpoint_max(sm) {
        font-size: 13.5px;
      }
    }
  }
}

.teacher-mobile-post-input {
  font-size: 13px;
  line-height: 15px;
  padding: 10px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  margin-bottom: 10px;
}
</style>
