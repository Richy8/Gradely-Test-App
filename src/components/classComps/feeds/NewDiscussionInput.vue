<template>
  <div class="w-100">
    <div
      class="discussion-text-input-content d-flex flex-column justify-content-start align-items-center"
    >
      <textarea
        id
        v-model="discussion_text"
        class="form-control border-0 color_ash"
        placeholder="Enter discussion text content here..."
      ></textarea>

      <!-- PICTURE CONTENT -->
      <div class="picture-content rounded-10 position-relative w-100 border">
        <img v-lazy="dynamicImg('DiscussionImg.jpg')" alt>

        <!-- CLOSE ICON -->
        <div class="avatar black position-absolute pointer">
          <span class="icon-decline color_grey_light font-20 flex-center"></span>
        </div>
        <!-- CLOSE ICON -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewDiscussionInput",

  data() {
    return {
      discussion_text:
        "So I am trying to create a poll to ask my students how they feel about adding banana pancake to the school menu. This part is where I type the question of the poll."
    };
  }
};
</script>

<style lang="scss">
.discussion-text-input-content {
  transition: all 0.6s ease-in-out;
  animation: panel-slide-down 0.5s ease-in-out forwards;

  textarea {
    font-size: 14px;
    line-height: 165%;
    height: auto;
    margin-bottom: 10px;
  }

  .picture-content {
    overflow: hidden;
    height: 350px;
    img {
      @include img_cover;
    }

    .avatar {
      @include equal_min_edge(36);
      top: 20px;
      right: 20px;
      transition: all 0.4s ease-in-out;

      &:hover {
        transform: scale(0.95);
      }
    }
  }
}
</style>
