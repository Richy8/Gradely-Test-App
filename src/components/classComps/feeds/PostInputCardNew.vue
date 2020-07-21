<template>
  <div>
    <div class="new-post-input-container w-100 h-100 white rounded-5">
      <!-- POST TYPE ROW -->
      <div class="post-type-row" v-if="type_selected">
        <PostTypeBlock @selected="switchPostView($event)"></PostTypeBlock>
      </div>
      <!-- POST TYPE ROW -->

      <!-- POST CONTENT ROW -->
      <div class="post-content-row d-flex justify-content-row alogn-items-start nowrap">
        <div class="avatar avatar-square" :class="type_selected ? 'avatar_md' : ''">
          <img v-lazy="dynamicImg(avatar_img)" alt class="avatar-img" v-if="avatar_img">
          <div class="avatar-text font-weight-bold" :class="color_scheme" v-else>{{ getInitial }}</div>
        </div>

        <!-- PLACEHOLDER TEXT -->
        <transition name="fade" mode="out-in">
          <keep-alive>
            <components :is="in_view" v-if="type_selected"></components>

            <div
              class="placeholder-text color_grey_dark d-flex justify-content-start align-items-center pointer"
              @click="postTypeSelected"
              v-else
            >Create a discussion, pool, or class work</div>
            <!-- PLACEHOLDER TEXT -->
          </keep-alive>
        </transition>
      </div>
      <!-- POST CONTENT ROW -->

      <!-- INPUT OPTIONS -->
      <PostInputOptions v-if="type_selected" :view="in_view" @closeTypeSelected="postTypeSelected"></PostInputOptions>
    </div>
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
    PostTypeBlock: () =>
      import(/* webpackChunkName: "PostTypeBlock" */ "@/components/classComps/feeds/PostTypeBlock"),
    NewDiscussionInput: () =>
      import(/* webpackChunkName: "NewDiscussionInput" */ "@/components/classComps/feeds/NewDiscussionInput"),
    NewAssessmentInput: () =>
      import(/* webpackChunkName: "NewAssessmentInput" */ "@/components/classComps/feeds/NewAssessmentInput"),
    NewLiveClassInput: () =>
      import(/* webpackChunkName: "NewLiveClassInput" */ "@/components/classComps/feeds/NewLiveClassInput"),
    NewLessonInput: () =>
      import(/* webpackChunkName: "NewLessonInput" */ "@/components/classComps/feeds/NewLessonInput")
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
      type_selected: false,
      in_view: "NewDiscussionInput"
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

    postTypeSelected() {
      this.type_selected = !this.type_selected;
    },

    switchPostView(view) {
      if (view === "Lesson") {
        this.in_view = "NewLessonInput";
      } else if (view === "Discussion") {
        this.in_view = "NewDiscussionInput";
      } else if (view === "Live Class") {
        this.in_view = "NewLiveClassInput";
      } else if (view === "Assessment") {
        this.in_view = "NewAssessmentInput";
      }
    }
  }
};
</script>

<style lang="scss">
.new-post-input-container {
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  margin-bottom: 15px;
  padding-top: 18px;

  .post-type-row {
    transition: all 0.5s ease-in-out;
    padding-left: 16px;
  }

  .post-content-row {
    padding: 0px 18px 18px;

    .avatar {
      margin-right: 14px;

      @include breakpoint_max(sm) {
        @include equal_min_edge(32);
      }
    }

    .placeholder-text {
      flex: 1;
      font-size: 15px;
      line-height: 19px;
    }
  }
}
</style>
