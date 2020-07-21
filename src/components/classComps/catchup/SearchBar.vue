<template>
  <div>
    <!-- SERCH BAR -->
    <div class="search-bar-section position-relative rounded-40 overflow-hidden">
      <!-- SECTION OVERLAY -->
      <div class="box-overlay position-absolute w-100 h-100"></div>

      <!-- SEARCH ICON -->
      <div class="avatar avatar_xs">
        <span class="icon-search font-14 brand_inverse"></span>
      </div>
      <input type="search" class="border_grey_dark index-1" placeholder="Search by Topic">
    </div>
    <!-- SERCH BAR -->
  </div>
</template>

<script>
export default {
  name: "SearchBar"
};
</script>

<style lang="scss">
.search-bar-section {
  @include flex_row_between_nowrap;
  width: 400px;
  height: 45px;
  padding: 13px 19px;

  @include breakpoint_max(md) {
    width: 530px;
    margin-top: 10px;
  }

  @include breakpoint_max(sm) {
    width: 100%;
  }

  .box-overlay {
    background: #000000;
    opacity: 0.5;
  }

  .avatar {
    margin-right: 10px;
  }

  input {
    flex: 1;
    font-size: 14px;
    background: transparent;
    border: 0;
    outline: 0;

    @include breakpoint_max(sm) {
      font-size: 13px;
    }

    &:hover {
      border: 0;
    }
    &::placeholder {
      font-size: 13.5px;
      color: $border_grey_dark;

      @include breakpoint_max(sm) {
        font-size: 12.5px;
      }
    }
  }
}
</style>
