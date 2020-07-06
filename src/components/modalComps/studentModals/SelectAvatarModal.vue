<template>
  <div>
    <Modal @closeModal="$emit('closeTriggered')">
      <!-- MODAL TITLE -->
      <div slot="modal-title">
        <span class="font-weight-bold">Change Your Avatar</span>
      </div>

      <!-- MODAL BODY -->
      <div slot="modal-body">
        <form action @submit.prevent>
          <!-- AVATAR SECTIONS -->
          <div class="avatar-sections d-flex justify-content-between align-items-start flex-wrap">
            <!-- AVATAR CARD -->
            <div
              class="avatar avatar_xxl avatar-square avatar-card d-flex flex-column justify-content-center align-items-center px-auto"
            >
              <div class="avatar avatar_md brand_inverse_light_bg mx-auto">
                <span class="flex-center icon-upload brand_navy font-25"></span>
              </div>
              <div class="color_text font-12 mt-3">Upload Photo</div>
            </div>

            <!-- AVATAR IMAGES -->
            <div
              class="avatar avatar_xxl avatar-square avatar-card border-0 position-relative"
              v-for="(num, index) in avatars"
              :key="index"
              @click="selectAvatar(num)"
            >
              <img v-lazy="localImg('avatar'+num+'.png')" alt class="avatar-img">

              <!-- AVATAR SELECT -->
              <div
                class="avatar-select avatar avatar_sm_md brand_black_bg index-99"
                v-if="active_avatar===num"
              >
                <span class="icon-accept flex-center font-24 brand_inverse"></span>
              </div>
            </div>
            <!-- AVATAR IMAGES -->
          </div>

          <!-- SELECT AVATAR -->
          <div class="modal-body-row row my-4">
            <div class="col-12 d-flex flex-center">
              <button type="submit" class="btn btn-md btn-accent">Pick this Avatar</button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/globalComps/Modal";
import RenderImages from "@/scripts/mixins/RenderImages";

export default {
  name: "SelectAvatarModal",

  components: { Modal },

  mixins: [RenderImages],

  data() {
    return {
      avatars: [],
      avatar_count: 15,
      active_avatar: 1
    };
  },

  mounted() {
    this.updateAvatarList();
  },

  methods: {
    updateAvatarList() {
      for (let i = 1; i <= this.avatar_count; i++) {
        this.avatars.push(i);
      }
    },

    selectAvatar(num) {
      this.active_avatar = num;
    }
  }
};
</script>

<style lang="scss" scoped>
.avatar-sections {
  .avatar-card {
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    margin: 10px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    &:hover {
      transform: scale(0.94);
    }

    @include equal_min_edge(115);

    @include breakpoint_max(lg) {
      @include equal_min_edge(90);
    }

    @include breakpoint_max(md) {
      @include equal_min_edge(90);
    }

    @include breakpoint_max(xs) {
      @include equal_min_edge(85);
    }
  }

  .avatar-select {
    position: absolute;
    border: 2px solid $brand_inverse;
    @include transform_center;
  }
}
</style>
