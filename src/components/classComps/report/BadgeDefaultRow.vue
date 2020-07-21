<template>
  <div>
    <div class="badge-container position-relative w-100 h-auto p-0">
      <!-- DEFAULT BRANCH CARD -->
      <div class="badge-card">
        <img v-lazy="localImg('badge-clue-fade.png')" alt>
      </div>

      <div class="badge-card">
        <img v-lazy="localImg('badge-champ-fade.png')" alt>
      </div>

      <div class="badge-card">
        <img v-lazy="localImg('badge-coins-fade.png')" alt>
      </div>

      <div class="badge-card">
        <img v-lazy="localImg('badge-streak-fade.png')" alt>
      </div>

      <div class="badge-card">
        <img v-lazy="localImg('badge-clue-fade.png')" alt>
      </div>

      <div class="badge-card">
        <img v-lazy="localImg('badge-champ-fade.png')" alt>
      </div>

      <div class="badge-card d-xs-none">
        <img v-lazy="localImg('badge-coins-fade.png')" alt>
      </div>

      <div class="badge-card d-xs-none">
        <img v-lazy="localImg('badge-champ-fade.png')" alt>
      </div>

      <div class="badge-card d-xs-none">
        <img v-lazy="localImg('badge-clue-fade.png')" alt>
      </div>

      <div class="badge-card d-xs-none">
        <img v-lazy="localImg('badge-streak-fade.png')" alt>
      </div>

      <div class="badge-card d-xs-none">
        <img v-lazy="localImg('badge-coins-fade.png')" alt>
      </div>

      <div class="badge-card d-xs-none">
        <img v-lazy="localImg('badge-champ-fade.png')" alt>
      </div>

      <div class="badge-card d-none d-sm-block">
        <img v-lazy="localImg('badge-streak-fade.png')" alt>
      </div>

      <div class="badge-card d-none d-sm-block">
        <img v-lazy="localImg('badge-clue-fade.png')" alt>
      </div>

      <div class="badge-card d-none d-sm-block">
        <img v-lazy="localImg('badge-champ-fade.png')" alt>
      </div>

      <!-- DEFAULT INFO SECTION -->
      <div class="default-info position-absolute w-100 h-100">
        <!-- DEFAULT CONTENT -->
        <div
          class="default-content position-relative w-100 h-100 d-flex flex-column justify-content-center align-items-center"
        >
          <!-- IMAGE BOX -->
          <div class="default-image-box mb-4">
            <img v-lazy="localImg('EmptyBadge.png')" alt>
          </div>

          <!-- DEFAULT TEXT -->
          <div
            class="default-text color_text text-center"
          >Unlock badges, games, rewards and more as you practice on Gradely. Subscribe to a CatchUp!.</div>

          <!-- DEFAULT CTA -->
          <div class="d-flex">
            <button class="btn btn-md btn-accent brand_navy mr-3">Unlock CatchUp!</button>
            <button class="btn btn-md transparent-bg z-depth-0 brand_navy ml-3">Learn More</button>
          </div>
        </div>
      </div>
      <!-- DEFAULT INFO SECTION -->
    </div>
  </div>
</template>

<script>
export default {
  name: "BadgeDefaultRow"
};
</script>

<style lang="scss">
.badge-container {
  margin-bottom: 20px;
  border: 2px solid white;
  @include flex_row_start_wrap;
  align-items: flex-start;

  .badge-card {
    position: relative;
    width: 20%;
    height: 150px;
    border: 1px solid lighten($brand_inverse_light, 2.5%);

    @include breakpoint_max(md) {
      width: 25%;
    }

    @include breakpoint_max(sm) {
      width: 33.333%;
    }

    @include breakpoint_max(xs) {
      width: 50%;
    }

    img {
      @include transform_center;
    }
  }

  .d-xs-none {
    @include breakpoint_max(xs) {
      display: none;
    }
  }

  .default-info {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.4) 0%,
      #ffffff 100%
    );

    .default-img-box {
      @include equal_min_edge(180);
    }

    .default-text {
      margin-bottom: 40px;
      font-size: 13.5px;
      line-height: 165%;
      width: 60%;

      @include breakpoint_max(sm) {
        width: 95%;
        font-size: 12.5px;
      }
    }

    .btn {
      @include breakpoint_max(xs) {
        font-size: 10.5px;
      }
    }
  }
}
</style>
