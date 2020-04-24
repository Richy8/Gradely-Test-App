<template>
  <section class="setup-section off-white-light-bg off-white-dark position-absolute overflow-auto">
    <b-container class="h-auto">
      <!-- SCHOOL SETUP TITLE-SECTION -->
      <b-row class="title-row">
        <b-col cols="12" md="10" lg="8" offset-md="1" offset-lg="2">
          <div
            class="title-block w-100 d-flex flex-column justify-content-center align-items-center"
          >
            <div class="setup-title navy-blue-light mb-3">School Setup</div>
            <div class="setup-nav-block d-flex justify-content-center align-items-center">
              <!-- TAB NAVIGATION -->
              <div
                class="setup-nav"
                v-for="(tab, index) in tabs"
                :key="index"
                :class="[current_tab===index ? 'active' : '']"
              ></div>
            </div>
          </div>
        </b-col>
      </b-row>

      <!-- SCHOOL SETUP FORM SECTION -->
      <b-row class="setup-form-row mb-4">
        <b-col cols="12" md="8" offset-md="2">
          <div class="card-block w-100 h-auto rounded-20 overflow-hidden">
            <!-- FORM BLOCK -->
            <form @submit.prevent>
              <div class="card-top white w-100">
                <transition name="slide-fade">
                  <!-- COMPONENT BLOCK -->
                  <keep-alive>
                    <component :is="tab"></component>
                  </keep-alive>
                  <!-- COMPONENT BLOCK -->
                </transition>
              </div>
              <div class="card-bottom w-100 d-flex justify-content-between align-items-center">
                <button class="btn btn-md white label-black" v-if="current_tab == 0">CANCEL</button>
                <button class="btn btn-md white label-black" @click="prev_tab()" v-else>BACK</button>
                <button
                  class="btn btn-md orange-light-bg black-text"
                  @click="next_tab()"
                  v-if="current_tab == 0"
                >CONTINUE</button>
                <button
                  class="btn btn-md orange-light-bg black-text"
                  @click="next_tab()"
                  v-else
                >NEXT</button>
              </div>
            </form>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div class="setup-title"></div>
  </section>
</template>

<script>
import Curriculum from "@/components/setup/Curriculum";
import Classes from "@/components/setup/Classes";
import ClassTemplate from "@/components/setup/ClassTemplate";
import YourClasses from "@/components/setup/YourClasses";
import AddTeachers from "@/components/setup/AddTeachers";
import InviteTeachers from "@/components/setup/InviteTeachers";

export default {
  name: "SchoolSetup",

  components: {
    Curriculum,
    Classes,
    ClassTemplate,
    YourClasses,
    AddTeachers,
    InviteTeachers
  },

  data() {
    return {
      tabs: [
        "Curriculum",
        "Classes",
        "ClassTemplate",
        "YourClasses",
        "AddTeachers",
        "InviteTeachers"
      ],
      tab: "Curriculum",
      current_tab: 0
    };
  },

  methods: {
    next_tab() {
      this.tab = this.tabs[this.current_tab + 1];
      this.current_tab == this.current_tab++;
    },

    prev_tab() {
      this.tab = this.tabs[this.current_tab - 1];
      this.current_tab == this.current_tab--;
    }
  }
};
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.2s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.1s ease-in-out;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
