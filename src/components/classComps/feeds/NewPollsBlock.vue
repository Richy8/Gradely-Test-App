<template>
  <div>
    <div class="new-polls-block rounded-5">
      <div class="poll-title-row">
        <!-- TITLE -->
        <div class="poll-title color_text font-weight-bold">New Poll</div>
        <!-- REMOVE -->
        <div class="remove-poll color_grey_text pointer" @click="$emit('removePoll')">Remove</div>
      </div>

      <!-- POLL OPTION -->
      <div class="input-group-option" v-for="(poll, index) in poll_list" :key="index">
        <input
          type="text"
          :v-model="'poll_' + poll.id"
          class="form-control"
          :placeholder="'Poll Option '+ poll.id"
        >
        <div
          class="avatar pointer index-9"
          :class="[poll.id === 1 || poll.id === 2 ? 'd-none' : '']"
          @click="removePoll(index)"
        >
          <span class="flex-center icon-decline color_grey_dark font-16"></span>
        </div>
      </div>
      <!-- POLL OPTION -->

      <!-- ADD NEW POLL OPTION -->
      <div class="add-new-item w-50 pointer" @click="addOption">
        <div class="undone"></div>
        <div class="label-text font-weight-bold brand_accent font-12-5">Add an Option</div>
      </div>
      <!-- ADD NEW POLL OPTION -->
    </div>
  </div>
</template>

<script>
export default {
  name: "NewPollsBlock",

  data() {
    return {
      poll_list: [
        { id: 1, poll_1: "", text: "Poll Option " },
        { id: 2, poll_2: "", text: "Poll Option " },
        { id: 3, poll_3: "", text: "Poll Option " }
      ]
    };
  },

  methods: {
    addOption() {
      let new_id = this.poll_list.length + 1;
      let poll_title = "poll_" + new_id;
      this.poll_list.push({
        id: new_id,
        [poll_title]: "",
        text: "Poll Option "
      });
    },

    removePoll(index) {
      this.poll_list.splice(index, 1);
    }
  }
};
</script>

<style lang="scss">
.new-polls-block {
  border: 1px solid $border_grey_light;
  padding: 15px 15px 20px;
  transition: all 0.4s ease-in-out;

  .poll-title-row {
    @include flex_row_between_nowrap;
    margin-bottom: 20px;

    .poll-title {
      font-size: 14.5px;
    }

    .remove-poll {
      font-size: 11.5px;
      &:hover {
        color: darken($brand_accent, 20%);
      }
    }
  }

  .input-group-option {
    margin-bottom: 5px !important;
    position: relative;

    .form-control {
      border: none;
      background: #f5f5f5;
      border-radius: 5px;
      font-size: 13px;

      &::placeholder {
        font-size: 13px;
      }
    }

    .avatar {
      position: absolute;
      right: -5px;
      top: 50%;
      transform: translateY(-50%);
      span {
        transition: all 0.3s ease-in-out;
        &:hover {
          color: $brand_tonic !important;
        }
      }
    }
  }

  .add-new-item {
    margin-top: 15px;
    margin-bottom: 0px;
  }
}
</style>
