<template>
  <div>
    <div class="homework-default-info position-relative">
      <TeacherDefaultCard></TeacherDefaultCard>
      <TeacherDefaultCard></TeacherDefaultCard>
      <TeacherDefaultCard></TeacherDefaultCard>
      <TeacherDefaultCard></TeacherDefaultCard>
      <TeacherDefaultCard></TeacherDefaultCard>
      <TeacherDefaultCard></TeacherDefaultCard>

      <!-- ADD HOMEWORK SECTION -->
      <EmptyContent
        display_img="EmptyHomework.png"
        display_text="This class has not been assigned homework"
        button_type="emit"
        button_text="Create Homework"
        button_function
        v-if="account_type!=='parent'"
      ></EmptyContent>

      <EmptyContent
        display_img="EmptyHomework.png"
        display_text="You do not have any newly assigned homework. You will know when you have new homework."
        button_type="emit"
        button_text="Join School"
        button_function
        v-else
      ></EmptyContent>
      <!-- ADD HOMEWORK SECTION -->
    </div>
  </div>
</template>

<script>
import EmptyContent from "@/components/globalComps/EmptyContent";
import TeacherDefaultCard from "@/components/classComps/members/teachers/TeacherDefaultCard";

export default {
  name: "DefaultInfo",

  components: {
    TeacherDefaultCard,
    EmptyContent
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
.homework-default-info {
  margin-top: 30px;
  margin-bottom: 60px;

  @include breakpoint_max(md) {
    margin-bottom: 100px;
  }
}
</style>
