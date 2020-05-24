<template>
  <div>
    <div
      class="topic-list pointer"
      v-for="(topic, index) in topic_list"
      :key="index"
      :class="[topic.active ? 'active' : '']"
    >
      <!-- TOPIC INFO -->
      <div class="topic-info d-flex justify-content-start align-items-center nowrap">
        <!-- TOPIC IMAGE -->
        <div class="avatar avatar-square">
          <img :src="require('@/assets/images/'+ topic.img +'')" alt class="avatar-img">
        </div>

        <!-- TOPIC TITLE -->
        <div class="title color_grey_dark">{{ topic.title }}</div>
      </div>

      <!-- OPTION -->
      <div class="option">
        <span class="icon-caret-right border_grey_dark font-16"></span>
      </div>
    </div>

    <!-- MBILE TOPIC DISPLAY -->
    <div
      class="mobile-topic-list w-100 d-flex justify-content-between align-items-center nowrap mb-4 mb-md-0 d-md-none"
    >
      <div class="display-topic d-flex justify-content-start align-items-center nowrap">
        <!-- TOPIC IMAGE -->
        <div class="avatar avatar-square mr-3">
          <img src="@/assets/images/Math2.png" alt class="avatar-img">
        </div>

        <!-- TOPIC TITLE -->
        <div class="topic-title color_text">Number Bases</div>
      </div>

      <!-- NAVIGATION -->

      <div class="navs">
        <!-- LEFT NAV -->
        <i class="fas fa-chevron-left border_grey_dark font-18 mr-3 pointer"></i>
        <!-- RIGHT NAV -->
        <i class="fas fa-chevron-right border_grey_dark font-18 ml-3 pointer"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopicList",

  data() {
    return {
      topic_list: [
        { img: "Math1.png", title: "Indices", active: true },
        { img: "Math2.png", title: "Number Bases", active: false },
        { img: "Math3.png", title: "Logarithm", active: false },
        { img: "Math4.png", title: "Fractions & Decimals", active: false },
        { img: "Math5.png", title: "Constructions", active: false },
        { img: "Math6.png", title: "Modular Arithmetic", active: false },
        { img: "Math7.png", title: "Variation", active: false },
        { img: "Math8.png", title: "Subject of Formula", active:false }
      ]
    };
  },

  methods: {

  }
};
</script>

<style>
</style>
