<template>
  <div>
    <div class="homework-section-block profile-block rounded-5">
      <div class="title-row d-flex justify-content-between align-items-center nowrap">
        <!-- TITLE -->
        <div class="title-bold color_text text-uppercase" v-if="account_type!=='parent'">Homework</div>
        <div class="title-bold color_text text-uppercase" v-else>Schoolwork history</div>

        <!-- COMPLETION RATE -->
        <div
          class="completion-rate d-flex flex-column justify-content-center align-items-end"
          v-if="account_type!=='parent'"
        >
          <div class="text text-right color_grey_dark">Completion Rate: 75%</div>
          <!-- PROGRESS BAR -->
          <div class="progress">
            <div class="progress-bar" style="width: 75%" role="progress"></div>
          </div>
        </div>
      </div>

      <!-- HOMEWORK DATA COMPONENT -->
      <HomeworkBlock
        :day="17"
        month="March"
        title="Homework title goes here"
        subject="Mathematics"
        percent="none"
        status="New"
      ></HomeworkBlock>

      <HomeworkBlock
        :day="8"
        month="April"
        title="Homework title goes here"
        subject="English Language"
        percent="87"
        status="Completed"
      ></HomeworkBlock>

      <HomeworkBlock
        :day="22"
        month="January"
        title="Homework title goes here"
        subject="Social Studies"
        percent="45"
        status="Missed"
      ></HomeworkBlock>

      <HomeworkBlock
        :day="10"
        month="August"
        title="Homework title goes here"
        subject="Basic Technology"
        percent="25"
        status="Completed"
      ></HomeworkBlock>

      <HomeworkBlock
        :day="12"
        month="September"
        title="Homework title goes here"
        subject="Computer Science"
        percent="8"
        status="Missed"
      ></HomeworkBlock>
      <!-- HOMEWORK DATA COMPONENT -->

      <!-- SHOW MORE -->
      <div class="show-more">
        <router-link to class="btn-link font-weight-bold" v-if="account_type!=='parent'">Show More</router-link>
        <router-link to class="btn-link font-weight-bold" v-else>See All Homework</router-link>
      </div>
      <!-- SHOW MORE -->
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeworkSection",

  components: {
    HomeworkBlock: () =>
      import(/* webpackChunkName: "HomeworkBlock" */ "@/components/profileComps/studentprofile/HomeworkBlock")
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
.homework-section-block {
  .title-row {
    margin-top: 8px;
    margin-bottom: 31px;

    .text {
      font-size: 12px;
      line-height: 16px;
      margin-bottom: 5px;
    }

    .progress {
      width: 150%;

      @include breakpoint_max(xs) {
        width: 120%;
      }
    }
  }
}
</style>
