<template>
  <div class>
    <div class="members-card white rounded-5 w-100 h-auto position-relative">
      <!-- CARD LABEL -->
      <div class="members-card-label position-absolute w-100 brand_accent_bg rounded-top-5"></div>
      <!-- TOP CARD -->
      <div
        class="member-top d-flex justify-content-between align-items-center nowrap pointer"
        @click="toggleSwitchClass"
      >
        <div class="left d-flex justify-content-start align-items-start">
          <!-- CLASS SWITCH ICON -->
          <div class="avatar brand_inverse_light_bg">
            <span class="icon-swap brand_primary"></span>
          </div>

          <!-- CLASS NAME -->
          <div class="class-info">
            <div class="title font-weight-bold color_text">{{ class_name }}</div>
            <div class="text color_grey_dark">SwitchClass</div>
          </div>
        </div>

        <div class="right">
          <span class="d-block caret-icon icon-caret-down color_grey_dark font-10 pointer"></span>
        </div>
      </div>

      <!-- BOTTOM CARD -->
      <div class="member-bottom d-none d-md-block">
        <div class="text color_grey_dark font-weight-bold text-uppercase font-12">Assigned Teachers</div>

        <!-- TEACHER CONTENT GOES HERE -->
        <slot name="teacher__content"></slot>

        <!-- CODE INFO -->
        <div
          class="code-info color_grey_dark font-12"
        >Share this code with anyone you wish to add to the class</div>
        <!-- CLASS CODE -->
        <span class="class-code color_white_bg color_grey_dark w-100">
          Class Code:
          <span class="code font-weight-bold brand_navy">{{ class_code }}</span>
        </span>

        <!-- ADD NEW ITEM -->
        <div v-if="show_add_button">
          <router-link :to="{name: button_route}" class="add-new" v-if="button_type==='route'">
            <div class="avatar avatar_sm_md brand_accent_bg pointer">
              <span class="flex-center icon-plus color_text font-24"></span>
            </div>
          </router-link>

          <router-link
            to
            class="add-new"
            @click="$emit(button_function)"
            v-if="button_type==='emit'"
          >
            <div class="avatar avatar_sm_md brand_accent_bg pointer">
              <span class="flex-center icon-plus color_text font-24"></span>
            </div>
          </router-link>
        </div>
        <!-- ADD NEW ITEM -->
      </div>
    </div>

    <!-- SWITCH CLASS MODAL COMPONENT -->
    <SwitchClassModal
      :class_id="class_id"
      v-if="switch_class"
      @closeTriggered="toggleSwitchClass"
      @getSelected="pushSelectedClass($event)"
    ></SwitchClassModal>
    <!-- SWITCH CLASS MODAL COMPONENT -->
  </div>
</template>

<script>
export default {
  name: "MembersCard",

  components: {
    SwitchClassModal: () =>
      import(/* webpackChunkName: "SwitchClassModal" */ "@/components/schoolComps/modals/SwitchClassModal")
  },

  props: {
    class_id: String,
    class_year: String,
    class_branch: String,
    class_code: String,
    show_add_button: {
      type: Boolean,
      default: false
    },
    button_type: {
      type: String,
      default: "emit"
    },
    button_function: String,
    button_route: String
  },

  computed: {
    class_name() {
      return `${this.class_year} - ${this.class_branch}`;
    }
  },

  data() {
    return {
      switch_class: false
    };
  },

  methods: {
    toggleSwitchClass() {
      this.switch_class = !this.switch_class;
    },

    pushSelectedClass($event) {
      this.$emit("getSelected", $event);
      this.toggleSwitchClass();
    }
  }
};
</script>

<style lang="scss">
.members-card {
  padding: 15px 15px 25px;

  @include breakpoint_max(lg) {
    width: 123% !important;
  }

  @include breakpoint_max(md) {
    min-height: 80px !important;
    height: 80px;
    width: 100% !important;
    margin-bottom: 14px;
  }

  @include breakpoint_max(sm) {
    min-height: 70px !important;
  }

  .members-card-label {
    left: 0;
    top: 0;
    height: 6px;
  }
}

// MEMBER TOP
.member-top {
  .avatar {
    position: relative;
    margin-right: 15px;

    @include breakpoint_max(lg) {
      margin-right: 5px;
    }

    @include breakpoint_max(md) {
      margin-right: 15px;
    }

    span {
      @include transform-center;
      font-size: 20px;
    }
  }

  .title {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 2.5px;

    @include breakpoint_max(lg) {
      font-size: 14px;
    }

    @include breakpoint_max(md) {
      font-size: 16px;
    }

    @include breakpoint_max(sm) {
      font-size: 14px;
    }
  }

  .text {
    font-size: 12px;
    line-height: 16px;

    @include breakpoint_max(lg) {
      font-size: 11px;
    }

    @include breakpoint_max(md) {
      font-size: 13px;
    }

    @include breakpoint_max(sm) {
      font-size: 12px;
    }
  }

  .caret-icon {
    position: relative;
    top: -7px;

    @include breakpoint_max(lg) {
      top: -8px;
      font-size: 11px !important;
    }

    @include breakpoint_max(md) {
      font-size: 13px !important;
    }

    @include breakpoint_max(sm) {
      font-size: 12px !important;
    }
  }
}

// MEMBER BOTTOM
.member-bottom {
  margin-top: 30px;

  .text {
    margin-bottom: 15px;
  }

  .code-info {
    margin-bottom: 11px;
  }

  .class-code {
    font-size: 12px;
    line-height: 16px;
    text-overflow: ellipsis;
    border-radius: 3px;
    padding: 8px 12px;

    @include breakpoint_max(lg) {
      display: block;
      font-size: 11.5px;
    }

    .code {
      margin-left: 10px;
      font-size: 14px;
      line-height: 19px;

      @include breakpoint_max(lg) {
        font-size: 13px;
      }
    }
  }

  // ADD NEW
  .add-new {
    @include flex_row_end_nowrap;
    margin-top: 20px;
    margin-left: auto;
    width: 100%;

    .avatar {
      transition: all 0.3s ease-in-out;

      span {
        transition: all 0.3s ease-in-out;
      }

      &:hover {
        background: $brand_primary !important;

        span {
          color: #ffffff !important;
        }
      }
    }
  }
}
</style>
