<template>
  <div>
    <ModalCover @closeModal="$emit('closeTriggered')">
      <!-- MODAL BODY -->
      <div slot="modal-cover-body">
        <div class="group-remedial-card">
          <!-- CARD TOP -->
          <div class="card-top d-flex justify-content-start align-items-start nowrap">
            <!-- DISPLAY IMAGE -->
            <div class="avatar avatar-square brand_inverse_light_bg">
              <span class="font-17 icon-video-on brand_inverse flex-center"></span>
            </div>

            <!-- REMEDIAL INFO -->
            <div class="remedial-info">
              <!-- CARD TITLE -->
              <div
                class="text-title font-weight-bold brand_accent text-uppercase"
              >Remedial Class With</div>

              <!-- STUDENT NAMES -->
              <div class="student-row d-flex justify-content-start align-items-start flex-wrap">
                <!-- ADD STUDENT -->
                <div class="avatar brand_inverse_bg pointer" @click="toggleAddStudentModal">
                  <span class="icon-plus font-21 brand_navy flex-center"></span>
                </div>
                <!-- ADD STUDENT -->

                <!-- STUDENT -->
                <div class="name-card">
                  <div class="text">Giwa Omolade</div>

                  <!-- AVATAR -->
                  <div class="avatar">
                    <span class="icon-minus font-15 brand_tonic flex-center"></span>
                  </div>
                </div>

                <div class="name-card">
                  <div class="text">Giwa Omolade</div>

                  <!-- AVATAR -->
                  <div class="avatar">
                    <span class="icon-minus font-15 brand_tonic flex-center"></span>
                  </div>
                </div>

                <div class="name-card">
                  <div class="text">Giwa Omolade</div>

                  <!-- AVATAR -->
                  <div class="avatar">
                    <span class="icon-minus font-15 brand_tonic flex-center"></span>
                  </div>
                </div>

                <div class="name-card">
                  <div class="text">Giwa Omolade</div>

                  <!-- AVATAR -->
                  <div class="avatar">
                    <span class="icon-minus font-15 brand_tonic flex-center"></span>
                  </div>
                </div>
                <!-- STUDENT -->
              </div>
              <!-- STUDENT NAMES -->
            </div>
          </div>

          <!-- CARD BOTTOM -->
          <div class="card-bottom">
            <div class="text-title text-uppercase brand_navy font-weight-bold">Schedule a live class</div>

            <!-- TOPIC TITLE -->
            <div class="topic-title-row d-flex justify-content-start align-items-start nowrap">
              <div class="avatar">
                <span class="icon-practice-card color_ash font-20 flex-center"></span>
              </div>
              <div>
                <div class="topic-title color_ash font-12-5">Recommended Topic</div>
                <div class="topic font-weight-bold brand_navy">Basic Algebra</div>
              </div>
            </div>

            <!-- CLASS INFO FORM -->
            <form action>
              <div class="form-row w-100 d-flex justify-content-between align-items-center nowrap">
                <!-- DATE -->
                <div class="input-control">
                  <label
                    for="date"
                    class="control-label color_ash text-capitalize font-weight-400 w-100"
                  >Class Date</label>
                  <div class="position-relative">
                    <input type="date" class="form-control" id="date" placeholder="Set Date">
                    <span class="position-absolute icon-calendar"></span>
                  </div>
                </div>

                <!-- TIME -->
                <div class="input-control">
                  <label
                    for="time"
                    class="control-label color_ash text-capitalize font-weight-400 w-100"
                  >Set Time</label>
                  <div class="position-relative">
                    <input type="time" name class="form-control" id="time" placeholder="Set Time">
                    <span class="position-absolute icon-watch"></span>
                  </div>
                </div>
              </div>

              <div class="submit-btn d-flex justify-content-center align-items-center">
                <button
                  type="submit"
                  class="btn btn-md btn-accent brand_navy font-weight-bold"
                >Schedule Class</button>
              </div>
            </form>
            <!-- CLASS INFO FORM -->
          </div>
        </div>
      </div>
    </ModalCover>

    <!-- MODAL -->
    <AddStudentModal v-if="add_student" @closeTriggered="toggleAddStudentModal"></AddStudentModal>
    <!-- MODAL -->
  </div>
</template>

<script>
import ModalCover from "@/components/globalComps/ModalCover";

export default {
  name: "GroupRemedialModal",

  components: {
    ModalCover,
    AddStudentModal: () =>
      import(/* webpackChunkName: "AddStudentModal" */ "@/components/modalComps/classModals/AddStudentModal")
  },

  data() {
    return {
      add_student: false
    };
  },

  methods: {
    toggleAddStudentModal() {
      this.add_student = !this.add_student;
    }
  }
};
</script>

<style lang="scss" scoped>
.group-remedial-card {
  .card-top,
  .card-bottom {
    width: 100%;
  }

  .card-top {
    height: auto;
    padding: 40px 30px 30px;
    background: $brand_navy;
    mix-blend-mode: normal;

    @media (max-width: 578px) {
      padding: 30px 25px 30px;
    }

    @media (max-width: 460px) {
      padding: 25px 15px 30px;
    }

    .avatar {
      @include custom_min_edge(36, 34);
      margin-right: 15px;
    }

    .text-title {
      font-size: 12px;
      line-height: 16px;
      margin-bottom: 1px;
    }

    .student-row {
      margin-top: 20px;

      .add-student {
        @include equal_min_edge(33);
        margin-right: 10px;
        margin-bottom: 8px;
        transition: all 0.4s ease-in-out;
        &:hover {
          background: $brand_accent !important;
        }
      }

      .name-card {
        @include flex_row_between_nowrap;
        padding: 8px 14px;
        background: #0a1e33;
        border-radius: 40px;
        margin-right: 10px;
        margin-bottom: 8px;

        .text {
          font-size: 12px;
          line-height: 16px;
          color: $brand_inverse_light;
        }

        .avatar {
          @include equal_min_edge(22);
          background: $brand_navy;
          margin-left: 15px;
          cursor: pointer;
          transition: all 0.3s ease-in-out;

          &:hover {
            background: $brand_red;
            span {
              color: $brand_white !important;
            }
          }

          span {
            position: relative;
            top: 1.5px;
          }
        }
      }
    }
  }

  .card-bottom {
    position: relative;
    padding: 18px 30px 40px;
    background: #ffffff;

    @media (max-width: 578px) {
      padding: 30px 25px 30px;
    }

    @media (max-width: 460px) {
      padding: 25px 15px 30px;
    }

    .text-title {
      font-size: 14px;
      line-height: 19px;
      margin-bottom: 20px;
    }

    .topic-title-row {
      margin-bottom: 20px;
      .avatar {
        left: -5px;
        top: -7px;
        margin-right: 5px;
      }
      .topic {
        margin-top: 4px;
        font-size: 17px;
        line-height: 22px;
      }
    }

    .form-row {
      .input-control {
        width: 46%;
        input {
          padding-left: 43px;
        }
        span {
          top: 10px;
          left: 10px;
          color: $border_grey_dark;
          z-index: 1;
          font-size: 23px;
          font-weight: 100;
        }
      }
    }

    .submit-btn {
      margin-top: 30px;
    }
  }
}
</style>
