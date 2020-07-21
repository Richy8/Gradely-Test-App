<template>
  <div class="position-relative">
    <ParentDefaultCard></ParentDefaultCard>
    <ParentDefaultCard></ParentDefaultCard>
    <ParentDefaultCard></ParentDefaultCard>
    <ParentDefaultCard></ParentDefaultCard>
    <ParentDefaultCard></ParentDefaultCard>

    <EmptyContent
      display_img="EmptyTeacher.png"
      display_text="No parent have been added to your school list yet."
      button_type="emit"
      button_text="Add Parent"
      button_function="toggleTeacher"
      @toggleTeacher="$emit('toggleTeacher')"
    ></EmptyContent>
  </div>
</template>

<script>
import EmptyContent from "@/components/globalComps/EmptyContent";
import ParentDefaultCard from "@/components/schoolComps/dashboard/parent/ParentDefaultCard";

export default {
  name: "ParentDefaultInfo",

  components: {
    EmptyContent,
    ParentDefaultCard
  }
};
</script>

<style lang="scss">
</style>
