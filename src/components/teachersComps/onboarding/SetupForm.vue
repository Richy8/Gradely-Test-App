<template>
  <div>
    <form action>
      <!-- CLASS CODE -->
      <div class="form-group row d-flex align-items-end">
        <div class="col-md-8">
          <label
            for="classCode"
            class="color_grey_dark text-uppercase font-weight-bold font-13"
          >Class Code</label>
          <input type="text" id="classCode" class="form-control" placeholder="Enter class code">
        </div>

        <div class="col-md-4">
          <button class="btn btn-md btn-inverse brand_navy mx-0">VERIFY CODE</button>
        </div>

        <div class="col-12" v-if="show_invite">
          <div class="add-new-item pointer w-100 mt-3">
            <div class="undone"></div>
            <div class="label-text color_ash font-13-5">
              Don't have a class code?
              <router-link
                to
                class="btn-link link-no-underline"
                @click.native="$emit('toggleInviteForm')"
              >Invite your School</router-link>
            </div>
          </div>
        </div>
      </div>
    </form>

    <!-- CLASS DISPLAY BLOCK -->
    <div class="row mt-4 mb-5">
      <div class="col-md-8 border-gray">
        <div class="class-info-display rounded-5">
          <!-- CLASS -->
          <div class="class font-weight-bold brand_primary">Senior Secondary School 1 (SSS1)</div>
          <!-- SCHOOL -->
          <div class="school color_grey_dark">@Christland Intl. School</div>

          <router-link
            to
            class="option font-weight-bold btn-link link-no-underline"
            @click.native="$emit('findClass')"
          >Not my Class?</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SetupForm",

  props: {
    show_invite: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss">
.class-info-display {
  box-sizing: border-box;
  border: 1px solid $border_grey;
  padding: 15px;

  .class {
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 4px;

    @include breakpoint_max(sm) {
      font-size: 14px;
    }
  }

  .school {
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 20px;

    @include breakpoint_max(sm) {
      font-size: 13px;
    }
  }

  .option {
    font-size: 14px;
    line-height: 19px;

    @include breakpoint_max(sm) {
      font-size: 13px;
    }
  }
}
</style>
