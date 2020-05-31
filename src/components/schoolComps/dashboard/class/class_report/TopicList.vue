<template>
  <div>
    <div
      class="topic-list pointer"
      v-for="(topic, index) in topic_list"
      :key="index"
      :class="[topic.active ? 'active' : '']"
      @click="switchTopic(index, topic.progress_data)"
    >
      <!-- TOPIC INFO -->
      <div class="topic-info d-flex justify-content-start align-items-center nowrap">
        <!-- TOPIC IMAGE -->
        <div class="avatar avatar-square">
          <img :src="dynamicImg(topic.img)" alt class="avatar-img">
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
          <img :src="dynamicImg(topic_img)" alt class="avatar-img">
        </div>

        <!-- TOPIC TITLE -->
        <div class="topic-title color_text">{{ topic_title }}</div>
      </div>

      <!-- NAVIGATION -->

      <div class="navs">
        <!-- LEFT NAV -->
        <i class="icon-caret-left border_grey_dark font-18 mr-3 pointer" @click="moveLeft"></i>
        <!-- RIGHT NAV -->
        <i class="icon-caret-right border_grey_dark font-18 ml-3 pointer" @click="moveRight"></i>
      </div>
    </div>
  </div>
</template>

<script>
import RenderImages from "@/scripts/mixins/RenderImages";
export default {
  name: "TopicList",

  mixins: [RenderImages],

  data() {
    return {
      topic_list: [
        {
          img: "Math1.png",
          title: "Indices",
          progress_data: { above: 20, average: 60, below: 20 },
          active: true
        },
        {
          img: "Math2.png",
          title: "Number Bases",
          progress_data: { above: 30, average: 30, below: 40 },
          active: false
        },
        {
          img: "Math3.png",
          title: "Logarithm",
          progress_data: { above: 20, average: 70, below: 10 },
          active: false
        },
        {
          img: "Math4.png",
          title: "Fractions & Decimals",
          progress_data: { above: 65, average: 25, below: 20 },
          active: false
        },
        {
          img: "Math5.png",
          title: "Constructions",
          progress_data: { above: 45, average: 25, below: 30 },
          active: false
        },
        {
          img: "Math6.png",
          title: "Modular Arithmetic",
          progress_data: { above: 30, average: 30, below: 40 },
          active: false
        },
        {
          img: "Math7.png",
          title: "Variation",
          progress_data: { above: 70, average: 15, below: 15 },
          active: false
        },
        {
          img: "Math8.png",
          title: "Subject of Formula",
          progress_data: { above: 45, average: 10, below: 45 },
          active: false
        }
      ],
      topic_title: "Number Bases",
      topic_img: "Math2.png",
      topic_index: 0
    };
  },

  mounted() {
    this.switchTopic(
      this.topic_index,
      this.topic_list[this.topic_index].progress_data
    );
  },

  methods: {
    switchTopic(index, progress) {
      this.topic_list.map(topic => (topic.active = false));
      this.topic_list[index].active = true;

      // UPDATE MOBILE VIEW
      this.topic_index = index;
      this.topic_title = this.topic_list[index].title;
      this.topic_img = this.topic_list[index].img;

      this.$emit("switchTopicProgress", progress);
    },

    moveLeft() {
      if (this.topic_index !== 0) {
        this.topic_index -= 1;
        this.switchTopic(
          this.topic_index,
          this.topic_list[this.topic_index].progress_data
        );
      }
    },

    moveRight() {
      if (this.topic_index !== this.topic_list.length - 1) {
        this.topic_index += 1;
        this.switchTopic(
          this.topic_index,
          this.topic_list[this.topic_index].progress_data
        );
      }
    }
  }
};
</script>

<style lang="scss">
// TOPIC LIST CARD
.topic-list {
  @include flex_row_between_nowrap;
  margin-bottom: 10px;
  margin-left: 20px;
  padding-right: 20px;

  @include breakpoint_max(xl) {
    margin-left: 10px;
  }

  @include breakpoint_max(lg) {
    margin-left: 5px;
  }

  @include breakpoint_max(md) {
    display: none;
  }

  .avatar {
    margin-right: 15px;

    @include breakpoint_max(xl) {
      margin-right: 10px;
    }

    .avatar-img {
      filter: grayscale(150%);
      mix-blend-mode: normal;
      transition: all 0.3s ease-in-out;
    }
  }

  .title {
    font-size: 13px;
    line-height: 16px;
    transition: all 0.3s ease-in-out;

    @include breakpoint_max(lg) {
      font-size: 12px;
    }
  }

  .option {
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    .avatar {
      .avatar-img {
        filter: unset;
      }
    }

    .title {
      font-weight: bold;
      color: $brand_primary !important;
    }

    .option {
      opacity: 1;
      visibility: visible;
    }
  }
}

.active {
  .avatar {
    .avatar-img {
      filter: unset;
    }
  }

  .title {
    font-weight: bold;
    color: $brand_primary !important;
  }

  .option {
    opacity: 1;
    visibility: visible;
  }
}

// MOBILE TOPIC LIST
.mobile-topic-list {
  .topic-title {
    @include breakpoint_max(sm) {
      font-size: 15px;
    }

    @include breakpoint_max(xs) {
      font-size: 14.5px;
    }
  }
}
</style>
