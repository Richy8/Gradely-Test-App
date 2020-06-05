<template>
  <div>
    <div class="post-input-container w-100 h-100 white rounded-5 overflow-hidden">
      <!-- INPUT AREA -->
      <div class="input-area">
        <!-- USER INFO ROW -->
        <div class="user-info-row d-flex justify-content-start align-items-center nowrap">
          <div class="avatar avatar-square">
            <div
              class="avatar-text brand_primary font-weight-bold brand_inverse_light_bg"
            >{{ getInitial }}</div>
          </div>

          <!-- POST INFO TEXT -->
          <div class="post-text color_grey_dark" @click="togglePostModal">Post an announcement</div>
        </div>
      </div>

      <!-- INPUT OPTIONS -->
      <PostInputOptions></PostInputOptions>
    </div>

    <!-- NEW POST MODAL COMPONENT -->
    <NewPostModal v-if="post_modal" @closeTriggered="togglePostModal"></NewPostModal>
    <!-- NEW POST MODAL COMPONENT -->
  </div>
</template>

<script>
import { setInitial } from "@/scripts/utilities";
import PostInputOptions from "@/components/schoolComps/dashboard/class/class_feeds/PostInputOptions";

export default {
  name: "PostInputCard",

  components: {
    PostInputOptions,
    NewPostModal: () =>
      import(/* webpackChunkName: "NewPostModal" */ "@/components/schoolComps/modals/NewPostModal")
  },

  props: ["fullname"],

  computed: {
    getInitial() {
      return setInitial(this.fullname);
    }
  },

  data() {
    return {
      post_modal: false
    };
  },

  methods: {
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
    }

    .post-text {
      font-size: 14px;
      line-height: 19px;
      flex: 1;
      padding-bottom: 10px;
    }
  }
}
</style>
