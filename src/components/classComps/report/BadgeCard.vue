<template>
  <div class>
    <div
      class="badge-card badge-effect position-relative pointer"
      @click="showBadgeInfo(badge_name, badge_img)"
    >
      <img v-lazy="localImg(badge_img)" alt>
      <div
        class="top count brand_navy_bg brand_inverse_light rounded-50"
        v-if="badge_count_position==='top' && badge_count!==0"
      >{{ badge_count }}</div>
      <div
        class="bottom count brand_navy_bg brand_inverse_light rounded-50"
        v-else-if="badge_count_position==='bottom' && badge_count!==0"
      >{{ badge_count }}</div>
    </div>

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
  name: "BadgeCard",

  props: {
    badge_name: String,
    badge_img: String,
    badge_count: Number,
    badge_count_position: String
  },

  components: {
    BadgeInfoModal: () =>
      import(/* webpackChunkName: "BadgeInfoModal" */ "@/components/modalComps/parentModals/BadgeInfoModal")
  },

  data() {
    return {
      badge_modal: false,
      badge_modal_img: "",
      badge_modal_name: "",

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
      this.badge_modal_name = name;
      this.badge_modal_img = img;
      this.toggleBadgeModal();
    }
  }
};
</script>

<style lang="scss" scoped>
.badge-card {
  @include equal_min_edge(66);

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
    top: -10px;
  }

  .bottom {
    bottom: -10px;
  }
}

.badge-effect {
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(0.95);
  }
}
</style>
