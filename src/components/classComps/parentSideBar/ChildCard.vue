  <template>
  <div>
    <div
      class="parent-child-card position-relative overflow-hidden rounded-5 pointer"
      :class="[active ? 'active-class-card' : 'not-active-class-card']"
    >
      <!-- CHILD LABEL -->
      <div class="card-label position-absolute brand_accent_bg" v-if="active"></div>

      <!-- CHILD INFO  -->
      <div class="child-card d-flex justify-content-between align-items-center nowrap">
        <div class="left d-flex justify-content-start align-items-center">
          <div class="avatar avatar-square avatar_md mr-2">
            <img v-lazy="localImg(child_img)" alt class="avatar-img">
          </div>

          <div class="child-info">
            <div
              class="name font-weight-bold"
              :class="active ? 'brand_navy' : 'color_grey_dark'"
            >{{ child_name }}</div>
            <div class="code color_grey_dark">{{ child_code }}</div>
          </div>
        </div>

        <!-- OPTION -->
        <div class="avatar" v-if="active">
          <span class="icon-caret-right flex-center border_grey_dark"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChildCard",

  props: {
    child_img: String,
    child_name: String,
    child_code: String,
    active: Boolean
  },

  computed: {
    class_name() {
      return `${this.class_year} - ${this.class_branch}`;
    }
  }
};
</script>

<style lang="scss">
.parent-child-card {
  padding: 12px 8px 12px 12px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: $brand_inverse_light;
  }

  .card-label {
    top: 0;
    left: 0;
    height: 100%;
    width: 6px;
  }

  .child-card {
    .left {
      .avatar {
        margin-left: 10px;

        @include breakpoint_max(lg) {
          margin-left: 5px;
        }
      }
    }
  }

  .name {
    font-size: 14.5px;
    line-height: 22px;
    margin-bottom: 1px;

    @include breakpoint_max(lg) {
      font-size: 13px;
      line-height: 18px;
    }

    @include breakpoint_max(md) {
      font-size: 14px;
      line-height: 21px;
    }
  }

  .code {
    font-size: 12px;
    line-height: 16px;

    @include breakpoint_max(lg) {
      font-size: 11px;
    }

    @include breakpoint_max(md) {
      font-size: 12px;
    }
  }
}

.active-class-card {
  background: $brand_inverse_light;
  @include breakpoint_max(md) {
    background: unset;
  }
}

.not-active-class-card {
  @include breakpoint_max(md) {
    display: none;
  }
}
</style>
