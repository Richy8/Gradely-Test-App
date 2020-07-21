<template>
  <div>
    <div class="test-processing-section">
      <div class="container">
        <div class="row">
          <div
            class="col-12 d-flex flex-column justify-content-center align-items-center"
            :class="{'invisible': hide_info}"
          >
            <!-- OUTER SPINNER -->
            <div class="spinner-container position-relative">
              <!-- OUTER SPINNER -->
              <div class="outer-spinner">
                <img v-lazy="localImg('SpinnerOne.png')" alt>
              </div>

              <!-- INNER SPINNER -->
              <div class="inner-spinner position-absolute">
                <img v-lazy="localImg('SpinnerTwo.png')" alt>
              </div>
            </div>

            <!-- PROCESSING TEXT -->
            <p class="text brand_inverse_light text-center mt-4">Analyzing your homework test</p>
            <!-- PROCESSING TEXT -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestProcessing",

  props: {
    hide_info: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
.test-processing-section {
  @include fixed_full_section();
  background: $brand_navy;

  .col-12 {
    min-height: 100vh;
  }

  .spinner-container {
    @include equal_min_edge(130);
  }

  .outer-spinner {
    animation: right-spinner 3.5s linear infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  .inner-spinner {
    top: 29%;
    left: 28%;
    // transform: translate(-0%, -0%);
    animation: left-spinner 4s linear infinite;
    transform-origin: center;
    transform-box: fill-box;
  }

  .text {
    font-size: 19px;
    line-height: 29px;

    @include breakpoint_max(sm) {
      font-size: 16px;
    }
  }

  @keyframes right-spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes left-spinner {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
}
</style>
