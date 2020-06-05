<template>
  <div>
    <div class="post-poll-section">
      <div class="post-text color_text" v-html="post.text">{{ post.text }}</div>

      <!-- POLL CARD -->
      <div
        class="poll-card text-wrap position-relative"
        v-for="(poll, index) in poll_data"
        :key="index"
        @click="makeAVote(index)"
      >
        <div class="empty rounded-circle" :class="{'done': poll.selected}"></div>
        <div class="option-text color_ash">{{ poll.text }}</div>
        <!-- PERCENT -->
        <div
          class="percent position-absolute border_grey_dark font-10"
          v-if="voted"
        >{{poll.progress}}%</div>
        <!-- PROGRESS -->
        <div
          class="progress-bar position-absolute h-100 slideInLeft"
          v-wow="{'animation-name': 'slideInLeft', 'animation-duration': '0.7s'}"
          :style="'width:'+ poll.progress +'%'"
          role="progressbar"
          v-if="voted"
        ></div>
      </div>

      <!-- VOTE COUNT -->
      <div class="vote-count font-10-5 border_grey_dark mt-2" v-if="voted">200 Votes</div>

      <!-- VOTE BUTTON -->
      <div class="vote-button d-flex flex-center" v-if="!voted">
        <button
          disabled
          class="vote-btn btn btn-sm btn-accent color_text font-11"
          @click="voteNow"
        >Vote</button>
      </div>

      <!-- RESPONSE TEXT -->
      <div class="d-flex flex-center" v-if="voted">
        <div
          class="response-text rounded-5 color_white_bg brand_primary"
        >👍 Thanks for your response!</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPollBlock",

  props: {
    post: Object
  },

  watch: {
    post: "loadPolls"
  },

  mounted() {
    this.loadPolls();
  },

  data() {
    return {
      valid_vote: true,
      voted: false,
      poll_data: []
    };
  },

  methods: {
    loadPolls() {
      this.poll_data.push(...this.post.poll_data);
    },

    makeAVote(index) {
      if (this.valid_vote) {
        this.poll_data.map(poll => (poll.selected = false));
        this.poll_data[index].selected = true;
        document.querySelector(".vote-btn").removeAttribute("disabled");
      }
    },

    voteNow() {
      this.voted = true;
      this.valid_vote = false;
    }
  }
};
</script>

<style lang="scss">
.post-poll-section {
  .post-text {
    margin-bottom: 10px;
    font-size: 13px;
    line-height: 16px;
  }

  .poll-card {
    @include flex_row_start_nowrap;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
    border-radius: 5px;
    margin-bottom: 2px;
    border: 1px solid $brand_inverse_light;
    box-sizing: border-box;
    padding: 10px;
    transition: all 0.6s ease-in-out;

    &:hover {
      background: #f8f8f8;
    }

    .progress-bar {
      left: 0;
      transition: all 0.6s ease-in-out;
      background: rgba(17, 189, 207, 0.15) !important;
    }

    .percent {
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      transition: all 0.6s ease-in-out;
    }

    .empty {
      margin-right: 10px;
      @include equal_min_edge(16);
      border: 1px solid $brand_inverse;
      transition: all 0.6s ease-in-out;
    }

    .option-text {
      font-size: 12px;
      line-height: 16px;
    }
  }

  .vote-button {
    margin-top: 15px;
    margin-bottom: 15px;
    a {
      padding: 8px 26px;
      font-size: 10px;
      line-height: 140%;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: $color_text;
        background: $brand_accent !important;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
      }
    }
  }

  .response-text {
    padding: 7px 27px;
  }
}
</style>
