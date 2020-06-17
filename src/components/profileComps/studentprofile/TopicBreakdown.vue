<template>
  <div>
    <!-- TOPIC BREAKDOWN BLOCK -->
    <div class="topic-breakdown-block profile-block rounded-5">
      <div class="title-row d-flex justify-content-between align-items-center nowrap">
        <!-- TITLE -->
        <div class="title-bold color_text text-uppercase">Topic Breakdown</div>

        <!-- SELECT WEEK -->
        <div class="week">
          <select class="form-control rounded-30">
            <option value="1">1 Week</option>
            <option value="3">2 Week</option>
            <option value="3">3 Week</option>
          </select>
        </div>
      </div>

      <!-- BREAKDOWN ROW -->
      <div class="breakdown-row row">
        <div class="col-12 col-md-6">
          <BreakdownCard
            topic_img="Math1.png"
            topic="Number Base"
            :trend_percent="86"
            :trend_count="2"
          ></BreakdownCard>
        </div>

        <div class="col-12 col-md-6">
          <BreakdownCard topic_img="Math2.png" topic="Indices" :trend_percent="59" :trend_count="1"></BreakdownCard>
        </div>

        <div class="col-12 col-md-6">
          <BreakdownCard
            topic_img="Math3.png"
            topic="Logarithm"
            :trend_percent="39"
            :trend_count="1"
          ></BreakdownCard>
        </div>

        <div class="col-12 col-md-6">
          <BreakdownCard
            topic_img="Math4.png"
            topic="Fractions"
            :trend_percent="93"
            :trend_count="2"
          ></BreakdownCard>
        </div>

        <div class="col-12 col-md-6">
          <BreakdownCard
            topic_img="Math5.png"
            topic="Constructions"
            :trend_percent="10"
            :trend_count="2"
          ></BreakdownCard>
        </div>

        <div class="col-12 col-md-6">
          <BreakdownCard
            topic_img="Math6.png"
            topic="Modular Arithmetic"
            :trend_percent="72"
            :trend_count="2"
          ></BreakdownCard>
        </div>

        <div class="col-12 col-md-6">
          <BreakdownCard
            topic_img="Math7.png"
            topic="Variation"
            :trend_percent="55"
            :trend_count="1"
          ></BreakdownCard>
        </div>

        <div class="col-12 col-md-6">
          <BreakdownCard
            topic_img="Math8.png"
            topic="Subject of Formula"
            :trend_percent="30"
            :trend_count="2"
          ></BreakdownCard>
        </div>
      </div>

      <!-- SHOW MORE -->
      <div class="show-more mt-3">
        <router-link
          :to="'/'+account_type+'/dashboard/student/topic_trend'"
          class="btn-link font-weight-bold"
        >See Full Report</router-link>
      </div>
      <!-- SHOW MORE -->
    </div>
  </div>
</template>

<script>
export default {
  name: "TopicBreakdown",

  components: {
    BreakdownCard: () =>
      import(/* webpackChunkName: "BreakdownCard" */ "@/components/profileComps/studentprofile/BreakdownCard")
  },

  data() {
    return {
      account_type: ""
    };
  },

  mounted() {
    this.getAccountType();
  },

  methods: {
    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
    }
  }
};
</script>

<style lang="scss">
.topic-breakdown-block {
  .form-control {
    position: relative;
    background: $color_white;
    box-sizing: border-box;
    font-size: 12px;
    color: $color_text;
    padding: 2px 25px;

    &:focus {
      border: 1px solid $brand_accent;
    }
  }

  .week {
    position: relative;
    width: 100px;

    &::after {
      position: absolute;
      content: "\25BE";
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 3;
      font-size: 20px;
      color: $color_text;
    }
  }

  .breakdown-row {
    margin-top: 22px;
  }
}
</style>
