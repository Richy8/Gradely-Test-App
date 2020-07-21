<template>
  <div>
    <div class="right-menu-section d-flex justify-content-end align-items-center nowrap">
      <!-- IDEA BOX -->
      <div class="idea-box rounded-5 d-flex justify-content-end align-items-center">
        <IdeaHighIcon size="font-15"></IdeaHighIcon>
        <div class="brand_inverse_light ml-2">0</div>
      </div>

      <div class>
        <!-- COINS PILE BOX -->
        <div
          class="coins-pile-box rounded-5 d-flex justify-content-end align-items-center position-relative"
        >
          <CoinPileIcon size="font-17"></CoinPileIcon>
          <div class="brand_inverse_light ml-2">750</div>

          <!-- COIN BOX -->
          <div
            class="coin-box rounded-5 d-flex justify-content-center align-items-center nowrap position-absolute"
          >
            <CoinIcon size="font-16"></CoinIcon>
            <div class="brand_inverse_light ml-2">+20</div>
          </div>
        </div>
        <!-- COINS PILE BOX -->
      </div>
    </div>
  </div>
</template>

<script>
import IdeaHighIcon from "@/components/coloredIconPack/IdeaHighIcon";
import CoinPileIcon from "@/components/coloredIconPack/CoinPileIcon";
import CoinIcon from "@/components/coloredIconPack/CoinIcon";

export default {
  name: "RightMenu",

  components: {
    IdeaHighIcon,
    CoinPileIcon,
    CoinIcon
  }
};
</script>

<style lang="scss">
.right-menu-section {
  @include breakpoint_max(xs) {
    flex-direction: column;
  }

  .idea-box,
  .coins-pile-box {
    margin-right: 3px;
    padding: 10px 13px;
    background: rgba(0, 0, 0, 0.4);
  }

  .idea-box,
  .coins-pile-box {
    font-weight: bold;
    font-size: 13.5px;
    line-height: 19px;

    @include breakpoint_max(sm) {
      font-size: 12px;
    }
  }

  .idea-box {
    @include breakpoint_max(xs) {
      margin-bottom: 5px;
    }
  }

  .coin-box {
    font-size: 14px;
    line-height: 19px;
    top: 55px;
    left: 15%;

    @include breakpoint_max(sm) {
      font-size: 12px;
    }
  }
}
</style>
