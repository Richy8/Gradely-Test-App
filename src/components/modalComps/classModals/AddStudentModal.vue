<template>
  <div>
    <ModalCover :show_close="false" modal_style="rounded-1 modal-small">
      <!-- MODAL BODY -->
      <div slot="modal-cover-body" class="add-student-modal">
        <!-- MODAL TOP -->
        <div class="container-fluid px-0">
          <div class="modal-title-row">
            <!-- TITLE -->
            <div class="title text-uppercase font-weight-bold color_text">Select Student</div>

            <!-- CLOSE DIALOG -->

            <div class="avatar pointer" @click="$emit('closeTriggered')">
              <span class="icon-decline flex-center font-20"></span>
            </div>
          </div>

          <!-- MODAL BODY -->
          <div class="filter-modal-body">
            <div class="form-input">
              <input
                type="search"
                class="form-control rounded-45 brand_white_bg"
                placeholder="Search name"
              >
            </div>

            <!-- ADD ALL STUDENT -->
            <div class="add-all d-flex justify-content-between align-items-center nowrap">
              <!-- LEFT -->
              <div class="left d-flex justify-content-start align-items-center nowrap">
                <div class="avatar avatar-square brand_inverse_light_bg">
                  <span class="icon-add-group flex-center font-22 brand_inverse"></span>
                </div>
                <div class="text color_text">Select All</div>
              </div>

              <!-- RIGHT -->
              <div class="right checkbox">
                <input type="checkbox">
              </div>
            </div>

            <!-- STUDENT LIST -->
            <div
              class="student-list d-flex justify-content-between align-items-center nowrap mx-auto"
            >
              <!-- LEFT -->
              <div class="left d-flex justify-content-start align-items-center nowrap">
                <div class="avatar avatar-square brand_inverse_light_bg">
                  <img v-lazy="dynamicImg('MaleChild.png')" alt class="avatar-im">
                </div>
                <div class="text color_text">Giwa Omolade</div>
              </div>

              <!-- RIGHT -->
              <div class="right checkbox">
                <input type="checkbox">
              </div>
            </div>

            <div
              class="student-list d-flex justify-content-between align-items-center nowrap mx-auto"
            >
              <!-- LEFT -->
              <div class="left d-flex justify-content-start align-items-center nowrap">
                <div class="avatar avatar-square brand_inverse_light_bg">
                  <img v-lazy="dynamicImg('MaleChild.png')" alt class="avatar-im">
                </div>
                <div class="text color_text">Giwa Omolade</div>
              </div>

              <!-- RIGHT -->
              <div class="right checkbox">
                <input type="checkbox">
              </div>
            </div>
            <!-- STUDENT LIST -->

            <!-- ADD ALL STUDENT -->
          </div>
        </div>
      </div>
    </ModalCover>
  </div>
</template>

<script>
// import { setInitial } from "@/scripts/utilities";
import ModalCover from "@/components/globalComps/ModalCover";

export default {
  name: "AddStudentModal",

  components: {
    ModalCover
  },

  props: {},

  computed: {},

  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
.add-student-modal {
  .modal-title-row {
    @include flex_row_between_nowrap;
    padding: 24px 20px;

    .title {
      font-size: 15px;
      line-height: 22px;
    }

    .avatar {
      background: $brand_white;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: $brand_inverse_light;
      }

      span {
        color: $color_text;
        opacity: 0.6;
      }
    }
  }

  .filter-modal-body {
    padding-bottom: 20px;
    .form-input {
      padding: 2px 20px;
      margin-bottom: 10px;
      input {
        padding-left: 20px;
      }
    }

    .add-all,
    .student-list {
      padding: 2px 20px;
      margin-bottom: 10px;
      .avatar {
        @include equal_min_edge(36);
        margin-right: 10px;
      }

      .text {
        font-size: 14px;
        line-height: 19px;
      }

      input {
        position: relative;
        top: 5px;
      }
    }

    .student-list {
      padding: 10px 20px;
      margin-bottom: 1px;
      border-top: 1px solid $border_grey;
    }
  }
}
</style>
