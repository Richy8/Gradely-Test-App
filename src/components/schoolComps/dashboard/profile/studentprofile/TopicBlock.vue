<template>
  <div
    class="d-flex justify-content-start align-items-center flex-wrap fadeInDown"
    v-wow="{'animation-name': 'fadeInDown', 'animation-duration': '1s'}"
  >
    <span
      class="topic rounded-25 text-center"
      :class="color_code"
      v-for="(subject, index) in subjects"
      :key="index"
    >{{ subject }}</span>
  </div>
</template>

<script>
export default {
  name: "TopicBlock",

  props: {
    subjects: Array,

    status: String
  },

  data() {
    return {
      color_code: ""
    };
  },

  watch: {
    status: "assignColor"
  },

  mounted() {
    this.assignColor();
  },

  methods: {
    assignColor() {
      if (this.status === "excel") {
        this.color_code = "excel_color";
      } else if (this.status === "average") {
        this.color_code = "average_color";
      } else if (this.status === "struggle") {
        this.color_code = "struggle_color";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.excel_color {
  background: rgba(96, 210, 176, 0.25);
}

.average_color {
  background: #e5e5e5;
}

.struggle_color {
  background: rgba(254, 116, 125, 0.25);
}

.topic {
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px 20px;
  white-space: nowrap;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.05em;

  @include breakpoint_max(lg) {
    font-size: 10px;
  }

  @include breakpoint_max(md) {
    font-size: 12px;
  }
}
</style>
