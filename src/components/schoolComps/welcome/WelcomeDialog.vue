<template>
  <div>
    <div class="welcome-dialog-section">
      <div class="welcome-container white">
        <transition name="fade" mode="out-in">
          <keep-alive>
            <!-- COMPONENT BLOCK -->
            <!-- <component :is="tab"></component> -->
            <DialogOne
              v-if="current_tab === 0 && account_type === 'school'"
              banner="DialogOne.png"
              display_img="GradelyIcon.png"
            ></DialogOne>

            <DialogOne
              v-if="current_tab === 0 && account_type === 'teacher'"
              banner="TeacherDialog.png"
              display_img="GradelyIcon.png"
            ></DialogOne>

            <DialogOne
              v-if="current_tab === 0 && account_type === 'parent'"
              banner="ParentDialog.png"
              display_img="GradelyIcon.png"
            ></DialogOne>

            <DialogOne
              v-if="current_tab === 0 && account_type === 'student'"
              banner="StudentDialog.png"

              display_img="GradelyIcon.png"
            ></DialogOne>

            <DialogTwo
              v-else-if="current_tab === 1"
              banner="DisplayBanner.png"
              display_img="DialogTwo.png"
            ></DialogTwo>

            <DialogThree
              v-else-if="current_tab === 2"
              banner="DisplayBanner.png"
              display_img="DialogThree.png"
            ></DialogThree>

            <DialogFour
              v-else-if="current_tab === 3"
              banner="DisplayBanner.png"
              display_img="DialogFour.png"
            ></DialogFour>

            <DialogFive
              v-else-if="current_tab === 4"
              banner="DisplayBanner.png"
              display_img="DialogFour.png"
            ></DialogFive>
            <!-- COMPONENT BLOCK -->
          </keep-alive>
        </transition>

        <!-- NAVIGATION BLOCK -->
        <div
          class="navigation-block w-100 d-flex flex-column justify-content-start align-items-center"
        >
          <router-link
            :to="{name: 'ParentInvitation'}"
            class="btn btn-accent next-btn"
            v-if="account_type==='student'"
          >Invite Your Parent</router-link>
          <button class="btn btn-accent next-btn" @click="nextTab" v-else>Next</button>

          <button
            class="btn btn-accent done-btn d-none"
            v-if="account_type!=='parent'"
            @click="$emit('closeDialog')"
          >Done</button>
          <router-link
            :to="{name: 'ParentNewChildOnboarding'}"
            class="btn btn-accent done-btn d-none"
            v-else
            @click="$emit('closeDialog')"
          >Add a Child</router-link>

          <div
            class="navigations d-flex justify-content-center align-items-start"
            v-if="account_type!=='student'"
          >
            <div
              class="nav rounded-circle border_grey_bg"
              v-for="(tab, index) in tabs"
              :key="index"
              :class="[current_tab===index ? 'active' : '']"
              @click="changeTab(tab, index)"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DialogOne from "@/components/schoolComps/welcome/welcomeComps/DialogOne.vue";
import DialogTwo from "@/components/schoolComps/welcome/welcomeComps/DialogTwo.vue";
import DialogThree from "@/components/schoolComps/welcome/welcomeComps/DialogThree.vue";
import DialogFour from "@/components/schoolComps/welcome/welcomeComps/DialogFour.vue";
import DialogFive from "@/components/schoolComps/welcome/welcomeComps/DialogFive.vue";

export default {
  name: "WelcomeDialog",
  components: {
    DialogOne,
    DialogTwo,
    DialogThree,
    DialogFour,
    DialogFive
  },
  data() {
    return {
      tab: DialogOne,
      account_type: "",
      current_tab: 0,
      tabs: [DialogOne, DialogTwo, DialogThree, DialogFour, DialogFive]
    };
  },

  mounted() {
    this.getAccountType();
  },

  methods: {
    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
    },

    nextTab() {
      this.tab = this.tabs[this.current_tab + 1];
      this.current_tab === this.current_tab++;
      this.checklastTab();
    },

    changeTab(tab, index) {
      this.tab = tab.name;
      this.current_tab = index;
      this.checklastTab();
    },

    checklastTab() {
      let nextBtn = document.querySelector(".next-btn");
      let doneBtn = document.querySelector(".done-btn");

      if (this.current_tab === 4) {
        nextBtn.classList.add("d-none");
        doneBtn.classList.remove("d-none");
      } else {
        nextBtn.classList.remove("d-none");
        doneBtn.classList.add("d-none");
      }
    }
  }
};
</script>

<style>
</style>
