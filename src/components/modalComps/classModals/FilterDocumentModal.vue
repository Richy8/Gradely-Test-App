<template>
  <div>
    <ModalCover :show_close="false" modal_style="rounded-1 modal-small">
      <!-- MODAL BODY -->
      <div slot="modal-cover-body" class="filter-modal">
        <!-- MODAL TOP -->
        <div class="container-fluid px-0">
          <div class="modal-title-row color_white_bg">
            <!-- TITLE -->
            <div class="title text-uppercase font-weight-bold color_text">Filters</div>

            <!-- CLOSE DIALOG -->

            <div class="avatar pointer" @click="$emit('closeTriggered')">
              <span class="icon-decline flex-center font-22"></span>
            </div>
          </div>

          <!-- MODAL BODY -->
          <div class="filter-modal-body">
            <form action @submit.prevent>
              <!-- SEARCH INPUT -->
              <div class="form-row w-100">
                <div class="position-relative w-100">
                  <input
                    type="search"
                    id
                    v-model="form.search"
                    class="form-control"
                    placeholder="Search"
                  >
                  <span class="icon position-absolute icon-search brand_accent font-20 index-1"></span>
                </div>
              </div>
              <!-- SEARCH INPUT -->

              <!-- DOCUMENT TYPE SECTION -->
              <div class="form-accordion">
                <div
                  class="title-row d-flex justify-content-between align-items-center w-100"
                  @click="toggleDocumentType"
                >
                  <div class="title-text color_text font-weight-bold">Document Type</div>
                  <div class="avatar">
                    <span
                      class="icon-caret-down font-11 border_grey_dark flex-center"
                      v-if="document_type"
                    ></span>
                    <span class="icon-caret-up font-17 border_grey_dark flex-center" v-else></span>
                  </div>
                </div>

                <div class="form-content w-100" v-if="document_type">
                  <div class="checkbox d-flex flex-column">
                    <!-- PDF -->
                    <label for="pdf" class="mb-3 pointer">
                      <input type="checkbox" v-model="form.document.pdf" value="pdf" id="pdf">
                      <span class="label_text font-14 color_grey_dark">Pdf</span>
                    </label>

                    <!-- WORD -->
                    <label for="word" class="mb-3 pointer">
                      <input type="checkbox" v-model="form.document.word" value="word" id="word">
                      <span class="label_text font-14 color_grey_dark">Word</span>
                    </label>

                    <!-- POWERPOINT -->
                    <label for="powerpoint" class="mb-3 pointer">
                      <input
                        type="checkbox"
                        v-model="form.document.ppt"
                        value="ppt"
                        id="powerpoint"
                      >
                      <span class="label_text font-14 color_grey_dark">Powerpoint</span>
                    </label>

                    <label for="others" class="mb-3 pointer">
                      <input
                        type="checkbox"
                        v-model="form.document.others"
                        vallue="others"
                        id="others"
                      >
                      <span class="label_text font-14 color_grey_dark">Others</span>
                    </label>
                  </div>
                </div>
              </div>
              <!-- DOCUMENT TYPE SECTION -->

              <!-- DATE SHARED -->
              <div class="form-accordion">
                <div
                  class="title-row d-flex justify-content-between align-items-center w-100"
                  @click="toggleDateShared"
                >
                  <div class="title-text color_text font-weight-bold">Date Shared</div>
                  <div class="avatar">
                    <span
                      class="icon-caret-down font-11 border_grey_dark flex-center"
                      v-if="date_shared"
                    ></span>
                    <span class="icon-caret-up font-17 border_grey_dark flex-center" v-else></span>
                  </div>
                </div>

                <div class="form-content w-100 pb-3" v-if="date_shared">
                  <div class="position-relative w-100">
                    <input
                      type="text"
                      id
                      class="form-control"
                      v-model="form.date"
                      placeholder="Last 30 days"
                    >
                    <span
                      class="icon position-absolute icon-calendar border_grey_dark font-20 index-1"
                    ></span>
                  </div>
                </div>
              </div>
              <!-- DATE SHARED -->

              <!-- SORT BY -->
              <div class="form-accordion">
                <div
                  class="title-row d-flex justify-content-between align-items-center w-100"
                  @click="toggleSortBy"
                >
                  <div class="title-text color_text font-weight-bold">Sort By</div>
                  <div class="avatar">
                    <span
                      class="icon-caret-down font-11 border_grey_dark flex-center"
                      v-if="sort_by"
                    ></span>
                    <span class="icon-caret-up font-17 border_grey_dark flex-center" v-else></span>
                  </div>
                </div>

                <div class="form-content w-100" v-if="sort_by">
                  <div class="radio d-flex flex-column">
                    <!-- PDF -->
                    <label for="newest" class="mb-3 pointer">
                      <input type="radio" v-model="form.sorted_by" value="newest" id="newest">
                      <span class="label_text font-14 color_grey_dark">Newest</span>
                    </label>

                    <!-- WORD -->
                    <label for="oldest" class="mb-3 pointer">
                      <input type="radio" v-model="form.sorted_by" value="oldest" id="oldest">
                      <span class="label_text font-14 color_grey_dark">Oldest</span>
                    </label>

                    <!-- POWERPOINT -->
                    <label for="ascendingOrder" class="mb-3 pointer">
                      <input
                        type="radio"
                        v-model="form.sorted_by"
                        value="ascending"
                        id="ascendingOrder"
                      >
                      <span class="label_text font-14 color_grey_dark">Name A-Z</span>
                    </label>

                    <label for="descendingOrder" class="mb-3 pointer">
                      <input
                        type="radio"
                        v-model="form.sorted_by"
                        value="descending"
                        id="descendingOrder"
                      >
                      <span class="label_text font-14 color_grey_dark">Name Z-A</span>
                    </label>
                  </div>
                </div>
              </div>
              <!-- SORT BY -->
            </form>
          </div>
        </div>
      </div>
    </ModalCover>
  </div>
</template>

<script>
// import { setInitial } from "@/scripts/utilities";
import ModalCover from "@/components/globalComps/ModalCover";

export default {
  name: "FilterDocumentModal",

  components: {
    ModalCover
  },

  props: {},

  computed: {},

  data() {
    return {
      document_type: true,
      date_shared: false,
      sort_by: false,

      form: {
        search: "",
        document: {
          pdf: "",
          word: "",
          ppt: "",
          others: ""
        },
        date: "",
        sorted_by: "newest"
      }
    };
  },

  methods: {
    toggleDocumentType() {
      this.document_type = !this.document_type;
    },

    toggleDateShared() {
      this.date_shared = !this.date_shared;
    },

    toggleSortBy() {
      this.sort_by = !this.sort_by;
    }
  }
};
</script>

<style lang="scss">
.filter-modal {
  .modal-title-row {
    @include flex_row_between_nowrap;
    padding: 24px 30px;
    margin-bottom: 20px;

    .title {
      font-size: 17px;
      line-height: 22px;
    }

    .avatar {
      position: relative;
      right: -10px;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: $brand_inverse_light;
      }

      span {
        color: $color_text;
        opacity: 0.6;
      }
    }
  }

  .filter-modal-body {
    .form-row {
      padding: 5px 30px 30px;
      margin-bottom: 10px;

      input {
        width: 102%;
      }

      .icon {
        right: 14px;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .form-accordion {
      padding: 5px 30px 10px;
      margin-bottom: 20px;
      border-bottom: 1px solid #e5e5e5;

      .title-row {
        cursor: pointer;

        .title-text {
          font-size: 15px;
          line-height: 19px;
        }
        .avatar {
          top: 5px;
        }
      }

      .form-content {
        padding-top: 20px;
        padding-bottom: 5px;
        transition: all 0.4s ease-in-out;
        animation: panel-slide-down 0.4s ease-in-out forwards;

        .icon {
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
}
</style>
