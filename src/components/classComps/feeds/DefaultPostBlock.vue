<template>
  <div>
    <div class="default-post-block white rounded-5">
      <!-- TOP ROW -->
      <div class="top-row">
        <!-- LEFT LAYOUT -->
        <div class="left-layout">
          <div class="avatar avatar-square">
            <div class="avatar-text brand_inverse_bg brand_navy">G</div>
          </div>

          <!-- TITLE -->
          <div>
            <div class="title font-weight-bold color_text">Gradely</div>
            <div class="meta color_grey_dark">Welcome to class</div>
          </div>
        </div>

        <!-- RIGHT LAYOUT -->
        <div class="right-layout">
          <div class="avatar pointer">
            <span class="flex-center icon-caret-down black-text font-13 pr-2"></span>
          </div>
        </div>
      </div>

      <!-- MIDDLE ROW -->
      <div class="middle-row">
        <div class="title color_text">Get Started</div>
        <div
          class="description color_ash"
        >Send class updates, assignments, quizzes and more. Start building your digital classroom community!</div>
      </div>

      <!-- BOTTOM ROW -->
      <div class="bottom-row">
        <div class="title font-weight-bold color_text">Here are some things to try</div>

        <!-- ACTIVITY LIST -->
        <ActivityList
          activity_progress="done"
          activity_text="Add students"
          activity_type="route"
          activity_route="AddStudents"
          activity_function
        ></ActivityList>

        <ActivityList
          activity_progress="done"
          activity_text="Schedule live class or recording"
          activity_type="route"
          activity_route
          activity_function
        ></ActivityList>

        <ActivityList
          activity_progress="undone"
          activity_text="Create homework"
          activity_type="emit"
          activity_route
          activity_function
        ></ActivityList>

        <ActivityList
          activity_progress="undone"
          activity_text="Create exam"
          activity_type="emit"
          activity_route
          activity_function
          v-if="account_type==='school'"
        ></ActivityList>

        <!-- HELP INFO -->
        <div class="help-info">
          Need more help?
          <router-link to class="btn-link">Contact us</router-link>&nbsp; for support
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActivityList from "@/components/schoolComps/dashboard/home/ActivityList";

export default {
  name: "DefaultPostBlock",

  props: ["account_type"],

  components: {
    ActivityList
  }
};
</script>

<style lang="scss">
.default-post-block {
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  padding: 13px 16px 20px;
  margin-bottom: 70px;

  .title {
    font-size: 12px;
    line-height: 16px;
  }

  .top-row {
    @include flex_row_between_nowrap;
    align-items: flex-start;
    margin-bottom: 15px;

    .left-layout {
      @include flex_row_start_nowrap;

      .avatar {
        margin-right: 10px;
        .avatar-text {
          font-size: 14px;
          line-height: 16px;
        }
      }

      .title {
        margin-bottom: 4px;
      }
      .meta {
        font-size: 10px;
        line-height: 14px;
      }
    }
    .right-layout {
      font-size: 10px;
      line-height: 14px;
    }
  }

  .middle-row {
    .title,
    .description {
      margin-bottom: 10px;
      font-size: 12px;
      line-height: 16px;
    }

    .description {
      margin-bottom: 15px;
    }
  }

  .bottom-row {
    .help-info {
      margin-top: 20px;
      font-size: 10.5px;
      line-height: 14px;
      color: $color_ash;
    }
  }
}
</style>
