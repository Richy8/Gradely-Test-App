<template>
  <div class="badge-container position-relative w-100 h-auto p-0">
    <!-- BADGE CARD -->
    <div
      class="badge-card badge-effect pointer"
      v-for="(badge, index) in badges"
      :key="index"
      @click="showBadgeInfo(badge.name, badge.img)"
    >
      <img v-lazy="localImg(badge.img)" alt>
      <div
        class="top count brand_navy_bg brand_inverse_light rounded-50"
        v-if="badge.position==='top' && badge.count!==0"
      >{{ badge.count }}</div>
      <div
        class="bottom count brand_navy_bg brand_inverse_light rounded-50"
        v-else-if="badge.position==='bottom' && badge.count!==0"
      >{{ badge.count }}</div>
    </div>
    <!-- BADGE CARD -->

    <!-- BADGE MODAL -->
    <BadgeInfoModal
      v-if="badge_modal"
      :badge_img="badge_img"
      :badge_name="badge_name"
      @closeTriggered="toggleBadgeModal"
    ></BadgeInfoModal>
  </div>
</template>

<script>
export default {
  name: "BadgeContentRow",

  components: {
    BadgeInfoModal: () =>
      import(/* webpackChunkName: "BadgeInfoModal" */ "@/components/modalComps/parentModals/BadgeInfoModal")
  },

  data() {
    return {
      badge_modal: false,
      badge_img: "",
      badge_name: "",

      badges: [
        {
          name: "streak",
          img: "badge-streak.png",
          position: "top",
          count: 9
        },
        {
          name: "coins",
          img: "badge-coins.png",
          position: "top",
          count: 324
        },
        {
          name: "clue",
          img: "badge-clue.png",
          position: "bottom",
          count: 1
        },
        {
          name: "champ",
          img: "badge-champ.png",
          position: "bottom",
          count: 0
        },
        {
          name: "coins",
          img: "badge-coins.png",
          position: "bottom",
          count: 5
        },
        {
          name: "streak",
          img: "badge-streak.png",
          position: "top",
          count: 9
        },
        {
          name: "coins",
          img: "badge-coins.png",
          position: "top",
          count: 324
        },
        {
          name: "clue",
          img: "badge-clue.png",
          position: "bottom",
          count: 1
        },
        {
          name: "champ",
          img: "badge-champ.png",
          position: "bottom",
          count: 0
        },
        {
          name: "coins",
          img: "badge-coins.png",
          position: "bottom",
          count: 5
        }
      ]
    };
  },

  methods: {
    toggleBadgeModal() {
      this.badge_modal = !this.badge_modal;
    },

    showBadgeInfo(name, img) {
      this.badge_name = name;
      this.badge_img = img;
      this.toggleBadgeModal();
    }
  }
};
</script>

<style lang="scss">
.badge-card {
  .count {
    position: absolute;
    left: 50%;
    font-size: 11px;
    padding: 2px 8px;
    font-weight: bold;
    line-height: 18px;
    transform: translateX(-50%);
  }

  .top {
    top: 22%;
  }

  .bottom {
    bottom: 21%;
  }
}

.badge-effect {
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(0.95);
  }
}
</style>
