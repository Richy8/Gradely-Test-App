<template>
  <div>
    <!-- ACCORDION TOP -->
    <div
      class="accordion-top d-flex justify-content-start align-items-center nowrap pointer"
      @click="toggleAccordion"
    >
      <div class="avatar mr-3">
        <span class="flex-center color_grey_dark font-15">
          <i class="chevron fas fa-chevron-right" v-if="close"></i>
          <i class="chevron fas fa-chevron-down" v-if="open"></i>
        </span>
      </div>

      <div class="info">
        <div
          class="question color_text font-weight-bold"
        >What is the logarithmic characteristic of 1.345?</div>
        <div class="description color_grey_dark">17 of 20 students struggled with this question</div>
      </div>
    </div>

    <!-- ACCORDION BOTTOM -->
    <div class="accordion-bottom" v-if="toggle_accordion">
      <div class="struggling-list">
        <div class="student">
          <!-- AVATAR -->
          <div class="avatar">
            <img src="@/assets/images/GirlTwo.png" alt class="avatar-img">
          </div>
          <!-- NAME -->
          <div class="name color_text font-weight-bold">Rilwan Abdul-jabar</div>
        </div>

        <div class="student">
          <!-- AVATAR -->
          <div class="avatar">
            <img src="@/assets/images/GirlTwo.png" alt class="avatar-img">
          </div>
          <!-- NAME -->
          <div class="name color_text font-weight-bold">Rilwan Abdul-jabar</div>
        </div>

        <div class="student">
          <!-- AVATAR -->
          <div class="avatar">
            <img src="@/assets/images/GirlTwo.png" alt class="avatar-img">
          </div>
          <!-- NAME -->
          <div class="name color_text font-weight-bold">Rilwan Abdul-jabar</div>
        </div>

        <div class="student">
          <!-- AVATAR -->
          <div class="avatar">
            <img src="@/assets/images/GirlTwo.png" alt class="avatar-img">
          </div>
          <!-- NAME -->
          <div class="name color_text font-weight-bold">Rilwan Abdul-jabar</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",

  data() {
    return {
      close: true,
      open: false,
      toggle_accordion: false
    };
  },

  methods: {
    toggleAccordion() {
      this.close = !this.close;
      this.open = !this.open;
      this.toggle_accordion = !this.toggle_accordion;
    }
  }
};
</script>

<style>
</style>
