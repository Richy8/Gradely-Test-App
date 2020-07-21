<template>
  <div>
    <vue-headful title="School Parents | Gradelyng" description="Description goes here"/>
    <div class="school-parent-section base-type-layout">
      <!-- PAGE TITLE -->
      <div class="container px-1">
        <div class="row">
          <div class="col-12 dashboard-header-row">
            <!-- PAGE TITLE -->
            <div class="page-title">Parents</div>

            <!-- FILTER AND ADD TEACHER INFO -->
            <div class="d-flex">
              <!-- FILTER ICON -->
              <div class="avatar avatar_md btn-whitish left-avatar pointer mr-4">
                <span class="icon icon-two icon-filter-icon"></span>
              </div>

              <!-- ADD ICON -->
              <div class="avatar avatar_md btn-accent right-avatar pointer">
                <span class="icon icon-one icon-plus"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- PARENT INFO DISPLAY SECTION -->
      <div class="container px-1">
        <!-- PARENT INFO LABEL ROW -->
        <div class="row">
          <div class="col-12 col-sm-12 col-md-8">
            <!-- HEADER ROW -->
            <div
              class="table-header d-flex justify-content-start align-items-center nowrap w-100 font-11-5 border_grey_dark text-uppercase"
            >
              <div class="col-one">Parent</div>
              <div class="col-two">Email Address</div>
              <div class="col-three">Phone</div>
              <div class="col-four">Options</div>
            </div>
          </div>
        </div>

        <div class="row">
          <!-- PARENT DATA ROW -->
          <div class="col-12 col-sm-12 col-md-8">
            <!-- PARENT COMPONENT -->
            <transition name="fade" mode="out-in">
              <component :is="in_view" :parents="parentList"></component>
            </transition>
            <!-- PARENT COMPONENT -->
          </div>

          <!-- REQUEST INVOICE CARD -->
          <div class="col-4">
            <!-- REQUEST INVOICE CARD COMPONENT -->
            <RequestInvoiceCard @triggerRequestForm="closeSubscribeForm"></RequestInvoiceCard>
            <!-- REQUEST INVOICE CARD COMPONENT -->
          </div>
        </div>
      </div>

      <!-- MODAL COMPONENT -->
      <SubscribeRequestModal v-if="subscribe_form" @closeTriggered="closeSubscribeForm"></SubscribeRequestModal>
      <!-- MODAL COMPONENT -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ParentContentInfo from "@/components/schoolComps/dashboard/parent/ParentContentInfo";
import ParentDefaultInfo from "@/components/schoolComps/dashboard/parent/ParentDefaultInfo";
import RequestInvoiceCard from "@/components/schoolComps/dashboard/parent/RequestInvoiceCard";

export default {
  name: "Parent",

  components: {
    ParentContentInfo,
    ParentDefaultInfo,
    RequestInvoiceCard,
    SubscribeRequestModal: () =>
      import(/* webpackChunkName: "subscriberequestModal" */ "@/components/modalComps/schoolModals/SubscribeRequestModal")
  },

  computed: {
    ...mapGetters(["parentList"])
  },

  data() {
    return {
      in_view: "ParentDefaultInfo",
      subscribe_form: false
    };
  },

  created() {
    this.getParents()
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
  },

  mounted() {
    this.switchView();
  },

  methods: {
    ...mapActions(["getParents"]),

    closeSubscribeForm() {
      this.subscribe_form = !this.subscribe_form;
    },

    switchView() {
      this.parentList.length > 0
        ? (this.in_view = "ParentContentInfo")
        : (this.in_view = "ParentDefaultInfo");
    }
  }
};
</script>

<style lang="scss">
.school-parent-section {
  // TABLE HEADER
  .table-header {
    line-height: 16px;
    padding-bottom: 6px;
    border-bottom: 1px solid $color_grey_dark;
    margin-bottom: 2px;

    @include breakpoint_max(xl) {
      font-size: 11px;
    }

    @include breakpoint_max(sm) {
      display: none;
    }
  }

  .col-one {
    padding-left: 15px;
    width: 34%;
  }

  .col-two {
    width: 33%;
  }

  .col-three {
    width: 21%;
  }

  .col-four {
    width: 12%;
  }

  @include breakpoint_max(md) {
    .col-one {
      padding-left: 15px;
      width: 38%;
    }

    .col-two {
      width: 28%;
    }

    .col-three {
      width: 22%;
    }

    .col-four {
      width: 12%;
    }
  }

  @include breakpoint_max(sm) {
    .col-one {
      padding-left: 15px;
      width: 80%;
    }

    .col-two {
      width: 0%;
      display: none;
    }

    .col-three {
      width: 0%;
      display: none;
    }

    .col-four {
      width: 20%;
    }
  }

  @include breakpoint_max(xs) {
    .col-one {
      padding-left: 15px;
      width: 85%;
    }

    .col-four {
      width: 15%;
    }
  }
}
</style>
