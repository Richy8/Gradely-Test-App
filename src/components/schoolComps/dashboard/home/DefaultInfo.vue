<template>
  <div>
    <!-- WELCOLE BLOCK COMPONENT -->
    <WelcomeBlock/>

    <!-- ACTIVITIES -->
    <div class="activity-list-items">
      <ActivityList
        activity_progress="done"
        activity_text="Add Teachers"
        activity_type="emit"
        activity_route
        activity_function="toggleTeacher"
        @toggleTeacher="$emit('toggleTeacherModal')"
      ></ActivityList>

      <ActivityList
        activity_progress="undone"
        activity_text="Invite Parents"
        activity_type="emit"
        activity_route
        activity_function
        label_text="off_white"
      ></ActivityList>

      <ActivityList
        activity_progress="undone"
        activity_text="Update your school profile"
        activity_type="route"
        activity_route
        activity_function
        label_text="off_white"
      ></ActivityList>

      <ActivityList
        activity_progress="undone"
        activity_text="Setup your curriculum"
        activity_type="route"
        activity_route="SchoolSettingsPreferences"
        activity_function
        label_text="off_white"
      ></ActivityList>
    </div>
  </div>
</template>

<script>
import WelcomeBlock from "@/components/schoolComps/dashboard/home/WelcomeBlock";
import ActivityList from "@/components/schoolComps/dashboard/home/ActivityList";
export default {
  name: "DefaultInfo",

  components: {
    WelcomeBlock,
    ActivityList
  }
};
</script>

<style lang="scss">
.activity-list-items {
  padding-left: 42px;
  padding-right: 42px;

  @include breakpoint_max(xl) {
    padding-left: 26px;
    padding-right: 26px;
  }

  @include breakpoint_max(lg) {
    padding-left: 18px;
    padding-right: 18px;
  }

  @include breakpoint_max(md) {
    padding-left: 42px;
    padding-right: 42px;
  }
}
</style>
