<template>
  <div>
    <!-- CONTENT TITLE -->
    <div class="content-title font-weight-bold color_white">This Week in school</div>

    <ActivityCard route_name bold_title="10" light_title="Homework Due" meta_text></ActivityCard>

    <ActivityCard route_name bold_title="21" light_title="Homework Created" meta_text></ActivityCard>

    <ActivityCard route_name bold_title="18" light_title="Live Classes Scheduled" meta_text></ActivityCard>

    <ActivityCard
      route_name
      bold_title="Gradely Webinar"
      light_title
      meta_text="How to setup your gradely classroom"
    ></ActivityCard>

    <!-- MORE ICON -->
    <router-link :to="{name: 'SchoolCalendar'}">
      <div
        class="link-to-calendar d-flex justify-content-start align-items-center nowrap position-relative"
      >
        <span class="icon-calendar brand_accent font-20"></span>
        <div class="title white-text">View Calendar</div>
      </div>
    </router-link>
  </div>
</template>

<script>
import ActivityCard from "@/components/schoolComps/dashboard/home/ActivityCard";

export default {
  name: "ContentInfo",

  components: {
    ActivityCard
  }
};
</script>

<style lang="scss">
// CONTENT INFO
.content-title {
  line-height: 22px;
  margin: 18px 20px 20px;

  @include breakpoint_max(xl) {
    font-size: 14.5px;
  }

  @include breakpoint_max(md) {
    margin: 18px 30px 20px;
  }

  @include breakpoint_max(sm) {
    font-size: 13px;
  }
}

.link-to-calendar {
  width: 140px;
  margin-top: 34.83px;
  margin-left: 25.67px;

  span {
    transition: all 0.3s ease-in-out;
  }

  .title {
    margin-left: 11.67px;
    font-size: 14px;
    line-height: 19px;
    transition: color 0.3s ease-in-out;

    @include breakpoint_max(lg) {
      font-size: 12px;
    }
  }

  &:hover {
    .title {
      color: $brand-accent !important;
      text-decoration: underline;
    }
  }
}
</style>
