<template>
  <div>
    <vue-headful title="Class Members | School Dashboard" description="Description goes here"/>
    <div class="class-members-section">
      <div class="container px-1">
        <div class="row">
          <!-- CLASS BRANCH INFO COLUMN -->
          <div class="col-12 col-md-3 col-lg-3 left-left-layout">
            <MembersCard></MembersCard>
          </div>
          <!-- CLASS BRANCH INFO COLUMN -->

          <!-- CLASS MEMBERS AND TEACHERS -->
          <div class="col-12 offset-md-1 col-md-8 offset-lg-0 col-lg-9 right-layout">
            <!-- PAGE TITLE -->
            <div class="page-title font-weight-bold color_text">Members</div>

            <!-- PAGE TABS -->
            <div class="page-tab d-flex justify-content-start align-items-center nowrap">
              <div
                class="tab select-none active"
                @click="switchView('student')"
                @dblclick="switchDefaultView('student')"
              >Students</div>

              <div
                class="tab select-none"
                @click="switchView('teacher')"
                @dblclick="switchDefaultView('teacher')"
              >Teachers</div>
            </div>

            <!-- STUDENTS AND TEACHERS COMPONENTS GOES HERE -->
            <transition name="fade" mode="out-in">
              <component :is="member_view"></component>
            </transition>
            <!-- STUDENTS AND TEACHERS COMPONENTS GOES HERE -->
          </div>
          <!-- CLASS MEMBERS AND TEACHERS -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChildContentInfo from "@/components/schoolComps/dashboard/class/class_members/ChildContentInfo";
import ChildDefaultInfo from "@/components/schoolComps/dashboard/class/class_members/ChildDefaultInfo";
import TeacherContentInfo from "@/components/schoolComps/dashboard/class/class_members/TeacherContentInfo";
import TeacherDefaultInfo from "@/components/schoolComps/dashboard/class/class_members/TeacherDefaultInfo";
import MembersCard from "@/components/schoolComps/dashboard/class/class_members/MembersCard";

export default {
  name: "ClassMembers",

  components: {
    ChildContentInfo,
    ChildDefaultInfo,
    TeacherContentInfo,
    TeacherDefaultInfo,
    MembersCard
  },

  data() {
    return {
      member_view: "ChildContentInfo"
    };
  },

  methods: {
    switchDefaultView(view) {
        let tabs = document.querySelectorAll('.tab');
        tabs.forEach(elm => {elm.classList.remove('active')})

        if(view === "student") {
            this.member_view = "ChildDefaultInfo";
            event.target.classList.add('active');
        }else {
            this.member_view = "TeacherDefaultInfo";
            event.target.classList.add('active');
        }
    },

    switchView(view) {
        let tabs = document.querySelectorAll('.tab');
        tabs.forEach(elm => {elm.classList.remove('active')})

        if(view === "student") {
            this.member_view = "ChildContentInfo";
            event.target.classList.add('active');
        }else {
            this.member_view = "TeacherContentInfo";
            event.target.classList.add('active');
        }
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.2s ease-in;
}
.fade-leave-active {
  transition: opacity 0.2s ease-out;
  opacity: 0;
}
</style>
