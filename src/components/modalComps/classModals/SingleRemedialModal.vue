<template>
  <div>
    <ModalCover @closeModal="$emit('closeTriggered')">
      <!-- MODAL BODY -->
      <div slot="modal-cover-body">
        <div class="remedial-card">
          <!-- CARD TOP -->
          <div class="card-top d-flex justify-content-start align-items-start nowrap">
            <!-- DISPLAY IMAGE -->
            <div class="avatar avatar-square avatar_lg remedial-img">
              <img v-lazy="dynamicImg('MaleChildLg.png')" alt class="avatar-img">
            </div>

            <!-- REMEDIAL INFO -->
            <div class="remedial-info">
              <!-- CARD TITLE -->
              <div
                class="text-title font-weight-bold brand_accent text-uppercase"
              >Remedial Class With</div>

              <!-- STUDENT NAME -->
              <div class="student-name font-weight-bold brand_white">Giwa Omolade</div>

              <!-- TOPIC TITLE -->
              <div class="topic-title-row d-flex justify-content-start align-items-start nowrap">
                <div class="avatar">
                  <span class="icon-practice-card border_grey font-20 flex-center"></span>
                </div>
                <div>
                  <div class="topic-title border_grey font-12-5">Recommended Topic</div>
                  <div class="topic font-weight-bold brand_white">Basic Algebra</div>
                </div>
              </div>
            </div>
          </div>

          <!-- CARD BOTTOM -->
          <div class="card-bottom">
            <div class="text-title text-uppercase brand_navy font-weight-bold">Schedule a live class</div>

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
  </div>
</template>

<script>
import ModalCover from "@/components/globalComps/ModalCover";

export default {
  name: "SingleRemedialModal",

  components: {
    ModalCover
  },

  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
.remedial-card {
  .card-top,
  .card-bottom {
    width: 100%;
  }

  .card-top {
    height: auto;
    padding: 40px 30px 30px;
    background: #004680;
    mix-blend-mode: normal;

    @media (max-width: 578px) {
      padding: 30px 25px 30px;
    }

    @media (max-width: 460px) {
      padding: 25px 15px 30px;
    }

    .avatar {
      margin-right: 15px;
    }

    .text-title {
      font-size: 12px;
      line-height: 16px;
      margin-bottom: 1px;
    }

    .student-name {
      font-size: 21px;
      line-height: 29px;
      margin-bottom: 30px;
    }

    .topic-title-row {
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
