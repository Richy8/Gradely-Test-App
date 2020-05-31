<template>
  <div>
    <router-link :to="{name: route_name}">
      <div class="activity-card white rounded-5 h-auto">
        <div class="card-row d-flex justify-content-between align-items-center nowrap">
          <div class="title color_text">
            <span class="font-weight-bold">{{ bold_title }}</span>
            {{ light_title }}
          </div>
          <div class="avatar avatar_sm">
            <span class="flex-center icon-caret-right border_grey_dark font-15"></span>
          </div>
        </div>
        <div class="card-meta brand_inverse">{{ meta_text }}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ActivityCard",

  props: {
    route_name: String,
    bold_title: String,
    light_title: String,
    meta_text: String
  }
};
</script>

<style lang="scss">
.activity-card {
  width: 330px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  padding: 14px 16px;

  @include breakpoint_max(xl) {
    width: 285px;
  }

  @include breakpoint_max(lg) {
    width: 260px;
  }

  @include breakpoint_max(md) {
    width: 480px;
  }

  @include breakpoint_max(sm) {
    width: 92%;
  }

  .title {
    line-height: 22px;
    margin-bottom: 4px;

    @include breakpoint_max(xl) {
      font-size: 13.5px;
    }

    @include breakpoint_max(lg) {
      font-size: 12.5px;
    }

    @include breakpoint_max(md) {
      font-size: 13.5px;
    }

    @include breakpoint_max(sm) {
      font-size: 12.5px;
    }
  }

  .card-meta {
    font-size: 14px;
    line-height: 19px;

    @include breakpoint_max(xl) {
      font-size: 12.5px;
    }

    @include breakpoint_max(lg) {
      font-size: 12px;
    }

    @include breakpoint_max(md) {
      font-size: 13.5px;
    }

    @include breakpoint_max(sm) {
      font-size: 12px;
    }
  }
}
</style>
