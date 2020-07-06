<template>
  <div>
    <div class="tutor-profile-card border_grey_light_bg">
      <!-- ITEM ONE -->
      <div class="item-row margin-20">
        <!-- ICON -->
        <span class="icon-graduation-cap icon"></span>

        <span class="item-text">Teaches:</span>

        <span class="item-value">{{ tutor_subject_types }}</span>
      </div>

      <!-- ITEM TWO -->
      <div class="item-row margin-20">
        <!-- ICON -->
        <span class="icon-event-cancel icon"></span>

        <span class="item-text">Lesson Cancellation:</span>

        <span class="item-value">{{ tutor_notice }}</span>
      </div>

      <!-- ITEM THREE -->
      <div class="item-row margin-20">
        <!-- ICON -->
        <span class="icon-speaker-notes icon"></span>

        <span class="item-text">Speaks:</span>

        <span class="item-value">{{ tutor_language }}</span>
      </div>

      <!-- ITEM FOUR -->
      <div class="item-row">
        <!-- ICON -->
        <span class="icon-speaker-notes icon"></span>

        <span class="item-text">Preferred Class:</span>

        <span class="item-value">{{ tutor_class }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TutorProfileCard",

  props: {
    tutor_subject_types: String,
    tutor_notice: String,
    tutor_language: String,
    tutor_class: String
  }
};
</script>

<style lang="scss">
.tutor-profile-card {
  border-radius: 4px;
  margin-bottom: 30px;
  padding: 20px;

  .item-row {
    font-size: 14px;
    line-height: 19px;

    .icon {
      position: relative;
      top: 3.5px;
      margin-right: 10px;
      font-size: 20px;
      color: $border_grey_dark;
    }

    .item-text {
      color: $color_grey_dark;
      font-weight: 500;
      margin-right: 4px;
    }
    .item-value {
      font-weight: bold;
      color: $color_text;
    }
  }

  .margin-20 {
    margin-bottom: 20px;
  }
}
</style>
