<template>
  <div>
    <div class="upgrade-alert rounded-5 brand_accent_light_bg">
      <div class="d-flex justify-content-start align-items-center">
        <!-- ALERT MESSAGE -->
        <div class="alert-msg color_text d-flex justify-content-start align-items-center nowrap">
          <div class="mr-2">
            <img :src="localImg('GiftBox.png')" alt>
          </div>
          <div>You have 14 days of free trial left</div>
        </div>

        <!-- ALERT CTA -->
        <div class="alert-cta">
          <router-link :to="{name: 'ParentUpgradePlan'}" class="btn btn-whitish">Upgrade Plan</router-link>
        </div>
      </div>

      <!-- CLOSE ALERT -->
      <div class="avatar pointer" @click="$emit('closeUpgradeAlert')">
        <span class="icon-decline flex-center border_grey_dark font-weight-600 font-18"></span>
      </div>
    </div>
  </div>
</template>

<script>
import RenderImages from "@/scripts/mixins/RenderImages";

export default {
  name: "UpgradeAlertCard",

  mixins: [RenderImages]
};
</script>

<style lang="scss" scoped>
.upgrade-alert {
  @include flex_row_between_nowrap;
  align-items: center;
  padding: 8px 15px;
  margin-bottom: 12px;

  .alert-msg {
    font-size: 13px;
    line-height: 19px;

    @include breakpoint_max(sm) {
      font-size: 12px;
    }
  }

  .alert-cta {
    margin-left: 10px;

    .btn {
      font-size: 10.5px !important;

      @include breakpoint_max(sm) {
        font-size: 10px !important;
      }
    }
  }

  .avatar {
    transition: all 0.3s ease-in-out;
    span {
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      background: $brand_inverse_light;

      span {
        color: $border_grey_dark !important;
      }
    }
  }
}
</style>
