<template>
  <div>
    <!-- PAGINATION BLOCK -->
    <div
      class="paging-block d-flex justify-content-start align-items-start nowrap w-auto h-auto py-auto"
    >
      <!-- PAGINATION NAVS -->
      <div class="paging-nav">
        <router-link to>Prev</router-link>
      </div>
      <div class="paging-item paging-active">
        <router-link to>1</router-link>
      </div>
      <div class="paging-item">
        <router-link to>2</router-link>
      </div>
      <div class="paging-item">
        <router-link to>3</router-link>
      </div>
      <!-- PAGINATION NAVS -->
      <div class="paging-nav">
        <router-link to>Next</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination"
};
</script>

<style lang="scss">
// PAGINATION
.paging-block {
  margin: 30px 0 10px;
  vertical-align: middle;
}

.paging-item,
.paging-nav {
  position: relative;
  margin-right: 15px;
  font-size: 14px;
  line-height: 19px;
  color: $color_grey_dark;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  @include breakpoint_max(md) {
    margin-right: 10px;
    font-size: 13px;
  }

  a {
    @include transform_center;
  }

  &:hover {
    background: $border_grey;

    a {
      color: $color_text;
    }
  }
}

.paging-item {
  @include equal_min_edge(30);
  border-radius: 50%;
}

.paging-nav {
  @include custom_min_edge(50, 30);
  padding: 5px 7px;
  border-radius: 2px;
}

.paging-active {
  background: $border_grey;
  color: $color_text;
}
</style>
