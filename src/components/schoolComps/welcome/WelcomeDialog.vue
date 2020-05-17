<template>
  <div>
    <div class="welcome-dialog-section">
      <div class="welcome-container white">
        <transition name="fade" mode="out-in">
          <keep-alive>
            <!-- COMPONENT BLOCK -->
            <!-- <component :is="tab"></component> -->
            <DialogOne
              v-if="current_tab === 0"
              banner="DialogOne.png"
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
          <button class="btn btn-accent next-btn" @click="nextTab">Next</button>
          <button class="btn btn-accent done-btn d-none" @click="$emit('closeDialog')">Done</button>

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
      current_tab: 0,
      tabs: [DialogOne, DialogTwo, DialogThree, DialogFour, DialogFive]
    };
  },

  created() {
    this.preloadImages(['DisplayBanner.png', 'DialogOne.png', 'DialogTwo.png', 'DialogThree.png', 'DialogThree.png', 'DialogFour.png']);
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
    },

    preloadImages(array) {
      // if (!preloadImages.list) {
      //   preloadImages.list = [];
      // }
      let list = [];
      for (let i = 0; i < array.length; i++) {
        let img = new Image();
        img.onload = function() {
          let index = list.indexOf(this);
          if (index !== -1) {
            // remove image from the array once it's loaded
            // for memory consumption reasons
            list.splice(index, 1);
          }
        };
        list.push(img);
        img.src = array[i];
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
