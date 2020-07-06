<template>
  <div>
    <div class="badge-section white rounded-5">
      <div class="title font-weight-bold text-uppercase">Achievements</div>

      <!-- BADGE CONTAINER -->
      <transition name="fade" mode="out-in">
        <component :is="in_view"></component>
      </transition>
      <!-- BADGE CONTAINER -->

      <router-link to class="btn-link font-weight-bold" v-if="badge_count>0">See More</router-link>
    </div>
  </div>
</template>

<script>
import BadgeDefaultRow from "@/components/classComps/report/BadgeDefaultRow";

const BadgeContentRow = () => ({
  component: import(/* webpackChunkName: "BadgeContentRow" */ "@/components/classComps/report/BadgeContentRow"),
  loading: BadgeDefaultRow,
  error: BadgeDefaultRow,
  delay: 500,
  timeout: 7000
});

export default {
  name: "BadgesSection",

  components: {
    BadgeDefaultRow,
    BadgeContentRow
  },

  data() {
    return {
      in_view: null,
      badge_count: 1
    };
  },

  watch: {
    badge_count: "updateBadge"
  },

  mounted() {
    this.updateBadge();
  },

  methods: {
    updateBadge() {
      if (this.badge_count > 0) {
        this.in_view = "BadgeContentRow";
      } else {
        this.in_view = "BadgeDefaultRow";
      }
    }
  }
};
</script>

<style lang="scss">
.badge-section {
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  padding: 20px 20px 30px;
  margin-bottom: 30px;

  .title {
    font-size: 16px;
    line-height: 165%;
    letter-spacing: 0.02em;
    margin-bottom: 20px;
  }

  .btn-link {
    font-size: 15px;
  }
}
</style>
