<template>
  <div>
    <vue-headful title="Welcome | Gradelyng" description="Description goes here"/>
    <div class="welcome-dialog-section">
      <div class="welcome-container">
        <transition name="slide-fade" mode="out-in">
          <!-- COMPONENT BLOCK -->
          <component :is="tab"></component>
          <!-- COMPONENT BLOCK -->
        </transition>

        <!-- NAVIGATION BLOCK -->
        <div
          class="navigation-block w-100 d-flex flex-column justify-content-start align-items-center"
        >
          <button class="btn btn-accent next-btn" @click="nextTab">Next</button>
          <button class="btn btn-accent done-btn d-none">Done</button>

          <div class="navigations d-flex justify-content-center align-items-start">
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
import DialogOne from "@/components/schoolComps/welcome/DialogOne.vue";
import DialogTwo from "@/components/schoolComps/welcome/DialogTwo.vue";
import DialogThree from "@/components/schoolComps/welcome/DialogThree.vue";
import DialogFour from "@/components/schoolComps/welcome/DialogFour.vue";
import DialogFive from "@/components/schoolComps/welcome/DialogFive.vue";

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
      current_tab: 0,
      tabs: [DialogOne, DialogTwo, DialogThree, DialogFour, DialogFive]
    };
  },

  methods: {
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

    checklastTab(){
        let nextBtn = document.querySelector('.next-btn');
        let doneBtn = document.querySelector('.done-btn');

        if (this.current_tab === 4) {
            nextBtn.classList.add('d-none');
            doneBtn.classList.remove('d-none');
        }
        else {
            nextBtn.classList.remove('d-none');
            doneBtn.classList.add('d-none');
        }
    }
  }
};
</script>

<style lang="scss" scoped>
.slide-fade-leave-active {
  transition: all 0.5s ease-out;
}
.slide-fade-enter-active {
    transition: all 0.5s;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
.slide-fade-enter {
    transform: translateX(5px);
}
</style>
