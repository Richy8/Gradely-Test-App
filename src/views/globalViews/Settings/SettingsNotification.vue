<template>
  <div>
    <vue-headful
      title="Notification Preferences | Gradely.ng - School"
      description="Description goes here"
    />

    <div class="settings-display-layout white rounded-10 notification-settings">
      <!-- PAGE TITLE -->
      <div class="page-title">Notification Preferences</div>
      <!-- TEXT INFO -->
      <div
        class="text-info color_ash"
      >Help us improve your experience with Gradely through better communication. Please adjust your notification preferences below</div>

      <!-- NOTIFICATIONFORM -->
      <form action @submit.prevent>
        <!-- WEEKLY PROGRESS -->
        <div
          class="option w-100 h-auto"
          v-for="(notification, index) in notification_options"
          :key="index"
        >
          <label :for="notification.id" class="checkbox pointer">
            <!-- INPUT -->
            <input
              type="checkbox"
              v-model="notification.selected"
              :id="notification.id"
              class="mt-1"
            >
            <!-- LABEL -->
            <div class="notification-label">
              <div class="title brand_navy">{{notification.title}}</div>
              <div class="meta color_ash">{{notification.description}}</div>
            </div>
          </label>
        </div>

        <div class="form-row-group">
          <button
            type="submit"
            class="btn btn-md btn-accent font-weight-900 mx-0 mt-4 black-text"
          >Update my Preferences</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsNotification",

  data() {
    return {
      notification_options: [
        {
          title: "Weekly progress reports",
          description:
            "Get a weekly report with statistics and insights on how your classes and teachers are performing",
          selected: true,
          id: "weeklyProgress"
        },
        {
          title: "Product Updates",
          description:
            "Important info on new features and products. We may also ask for your feedback on occasion.",
          selected: true,
          id: "productUpdates"
        },
        {
          title: "Gradely Offers",
          description:
            "These emails may include special upgrade offers, limited-time events, or coupons",
          selected: false,
          id: "gradelyOffers"
        },
        {
          title: "Text (SMS) Messages",
          description: "Get notifications by text message.",
          selected: true,
          id: "textMessage"
        },
        {
          title: "The Gradely Newsletter",
          description:
            "A weekly newsletter that includes fun tips and insights on Education",
          selected: true,
          id: "gradelyNewsletter"
        },
        {
          title: "WhatsApp Messages",
          description: "Get notifications by WhatsApp instant messageing",
          selected: false,
          id: "whatsappMessage"
        },
        {
          title: "Reminders",
          description:
            "Get notifications on upcoming events or anything you have missed.",
          selected: true,
          id: "reminders"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.notification-settings {
  .text-info {
    font-size: 14px;
    line-height: 165%;
    padding-bottom: 21px;
    border-bottom: 1px solid $border_grey;
  }

  .option {
    padding-left: 3px;
    padding-right: 3px;
    padding-top: 21px;
    padding-bottom: 21px;
    border-bottom: 1px solid $border_grey;

    label {
      width: 100%;
      height: auto;
      @include flex_row_start_nowrap;
      align-items: flex-start;

      input {
        margin-right: 17px;
      }

      .title {
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 10px;
      }
      .meta {
        font-size: 13px;
        line-height: 18px;
      }
    }
  }
}
</style>
