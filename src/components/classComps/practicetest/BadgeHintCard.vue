<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <div class="badge-hint-card px-auto w-100">
          <!-- BADGE CARD -->
          <div
            class="badge-card w-100 h-auto f-flex flex-column justify-content-center align-items-center"
          >
            <div class="badge-background">
              <img v-lazy="localImg('CardBg.png')" alt>
            </div>

            <!-- BADGE ICON -->
            <div class="badge-icon position-relative mx-auto text-center">
              <img v-lazy="localImg('badge-clue.png')" alt>
            </div>

            <!-- BADGE TITLE -->
            <div
              class="badge-title font-weight-bold brand_navy text-center position-relative"
            >You Earned a Clue!</div>

            <!-- BADGE MESSAGE -->
            <div
              class="badge-message brand_white text-center position-relative"
            >Use a clue to to reveal helpful tips to answer difficult questions.</div>

            <!-- BADGE BUTTON -->
            <div class="d-flex justify-content-center align-item-center">
              <button
                class="btn btn-md btn-whitish brand_navy"
                @click="$emit('toggleUpdate')"
              >Continue</button>
            </div>
          </div>
          <!-- BADGE CARD -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BadgeHintCard"
};
</script>

<style lang="scss">
.badge-hint-card {
  .badge-card {
    width: 400px;
    position: relative;
    overflow: hidden;
    border-radius: 15px;

    .badge-background {
      img {
        @include img_cover;
      }
    }

    .badge-icon {
      margin-top: 50px;
      margin-bottom: 32px;

      img {
        @include equal_min_edge(100);

        @include breakpoint_max(xs) {
          @include equal_min_edge(80);
        }
      }
    }

    .badge-title {
      font-size: 21px;
      line-height: 29px;
      margin-bottom: 15px;

      @include breakpoint_max(xs) {
        font-size: 19px;
      }
    }

    .badge-message {
      font-size: 16px;
      line-height: 25px;
      margin-bottom: 33px;
      padding-left: 20px;
      padding-right: 20px;

      @include breakpoint_max(xs) {
        font-size: 14px;
      }
    }

    .btn {
      margin-bottom: 42px;

      @include breakpoint_max(xs) {
        font-size: 10px;
      }
    }
  }
}
</style>
