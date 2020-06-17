<template>
  <div>
    <div class="demographics-section">
      <!-- DEMOGRAPHICS TITLE -->
      <div class="page-sub-title">Demographics</div>

      <!-- CHART DATA -->
      <div class="row">
        <!-- GENDER -->
        <div class="col-6 col-md-5">
          <div class="chart-title font-14 color_grey_dark text-uppercase">Gender</div>

          <div class="doughnut-row d-flex justify-content-start align-items-start nowrap">
            <!-- INDICATORS -->
            <div class="indicators d-flex flex-column justify-content-start align-items-start">
              <!-- FEMALE INDICATOR -->
              <div class="indicator-female d-flex flex-row flex-start">
                <div class="indicator-icon brand_inverse_bg"></div>
                <div class="indicator-data">
                  <div class="type">Female</div>
                  <div class="percentage">54%</div>
                </div>
              </div>

              <!-- MALE INDICATOR -->
              <div class="indicator-male d-flex flex-row flex-start">
                <div class="indicator-icon brand_primary_bg"></div>
                <div class="indicator-data">
                  <div class="type">Male</div>
                  <div class="percentage">46%</div>
                </div>
              </div>
            </div>

            <!-- CHART -->
            <div class="chart">
              <!-- GENDER CHART COMPONENT -->
              <GenderChart :female_data="54" :male_data="46"></GenderChart>
              <!-- GENDER CHART COMPONENT -->
            </div>
          </div>
        </div>

        <!-- AGE -->
        <div class="col-6 offset-md-1 col-md-4">
          <div class="chart-title">Age</div>
          <!-- PROGRESS BARS -->
          <div class="progress-bars">
            <!-- PROGRESS BAR COMPONENT -->
            <ProgressBar range="7-10" :percent="37"></ProgressBar>
            <ProgressBar range="11-12" :percent="48"></ProgressBar>
            <ProgressBar range="13-15" :percent="13"></ProgressBar>
            <ProgressBar range="Above 16" :percent="2"></ProgressBar>
            <!-- PROGRESS BAR COMPONENT -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GenderChart from "@/components/profileComps/schoolprofile/GenderChart";
import ProgressBar from "@/components/profileComps/schoolprofile/ProgressBar";

export default {
  name: "Demographics",

  components: {
    GenderChart,
    ProgressBar
  }
};
</script>

<style lang="scss">
.demographics-section {
  .page-sub-title {
    margin-bottom: 30px;
  }

  .chart-title {
    margin-bottom: 22px;
    font-weight: normal;
  }

  .indicators {
    margin-right: 25px;

    @include breakpoint_max(xs) {
      margin-right: 17px;
    }

    @include breakpoint_min_max(330, 380) {
      margin-right: 7px;
    }

    .indicator-icon {
      margin-right: 12px;
    }

    .type {
      font-size: 13px;
      line-height: 16px;
      color: $color_text;
    }

    .percentage {
      font-size: 14.5px;
      line-height: 19px;
      color: $color_grey_dark;
    }

    .indicator-female {
      margin-bottom: 15px;
    }
  }

  .chart {
    @include equal_min_edge(100);

    @include breakpoint_max(xs) {
      @include equal_min_edge(86);
    }

    @include breakpoint_min_max(330, 380) {
      @include equal_min_edge(75);
    }
  }
}
</style>
