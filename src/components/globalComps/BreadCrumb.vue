<template>
  <div>
    <div class="container px-1 d-none d-md-block">
      <div class="row">
        <div class="col-12">
          <div
            class="breadcrumb-row d-flex justify-content-between align-items-center flex-wrap px-0"
          >
            <!-- BREADCRUNB -->
            <div
              class="breadcrumb position-relative d-flex justify-content-start align-items-center nowrap mb-0 transparent_bg"
            >
              <div class="breadcrumb-item">{{ item_one }}</div>
              <div class="breadcrumb-item" :class="[!item_two ? 'd-none' : '']">
                <router-link :to="{name: item_two_link}">{{ item_two }}</router-link>
              </div>
              <div class="breadcrumb-item active">{{ item_three }}</div>
            </div>

            <!-- BREAD CRUMB NAVIGATION -->
            <div
              class="breadcrumb-nav d-flex justify-content-end align-items-center nowrap font-14"
              v-if="show_nav"
            >
              <div class="nav nav-left" title="Next">
                <!-- <i class="fas fa-caret-left"></i> -->
                <span class="icon-caret-fill-left color_grey_light"></span>
              </div>
              <div class="page">
                <span class="current">{{ current_page }}</span>/
                <span class="total">{{ total_page }}</span>
              </div>
              <div class="nav nav-right" title="Prev">
                <span class="icon-caret-fill-right color_grey_light"></span>
                <!-- <i class="fas fa-caret-right"></i> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb",

  props: {
    item_one: String,
    item_two: String,
    item_three: String,
    item_two_link: String,
    current_page: Number,
    total_page: Number,
    show_nav: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss">
// BREADCRUMB NAVIGATION
.breadcrumb-row {
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #d5d5d5;
}

.breadcrumb {
  left: -12px;

  > .active {
    pointer-events: none;
    color: $brand_primary;
  }
}

.breadcrumb-item {
  color: $color_grey_light;
  @include flex_row_start_nowrap;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.015em;

  + .breadcrumb-item {
    &::before {
      align-items: center;
      padding: 0 14px;
      content: "\e914";
      font-family: "icomoon";
      font-weight: 600;
      font-size: 8px;
      color: $border_grey_dark;
    }
  }
}

.breadcrumb-nav {
  .nav {
    color: $border_grey_dark;
    cursor: pointer;

    &:hover {
      color: $brand_accent;
    }
  }

  .page {
    color: $brand_primary;
  }

  .nav-left {
    margin-right: 20px;
  }

  .nav-right {
    margin-left: 20px;
  }
}
</style>
