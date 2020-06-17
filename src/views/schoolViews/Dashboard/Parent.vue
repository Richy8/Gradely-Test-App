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
            <!-- PARENT ROW CARD COMPONENT -->
            <ParentRowCard
              fullname="Robius Hagrid"
              :child_count="2"
              email="robiushagrid@gmail.com"
              :phone="2348131177703"
              @openParentProfile="toggleProfileCard"
              @toggleMessage="toggleMessageModal"
            ></ParentRowCard>

            <ParentRowCard
              fullname="Babatunde Calebs"
              :child_count="1"
              email="babatundecalebs@gmail.com"
              :phone="2348165544109"
              @openParentProfile="toggleProfileCard"
              @toggleMessage="toggleMessageModal"
            ></ParentRowCard>

            <ParentRowCard
              fullname="Akinwunmi Kola"
              :child_count="3"
              email="akinwunmikola@gmail.com"
              :phone="2348165544109"
              @openParentProfile="toggleProfileCard"
              @toggleMessage="toggleMessageModal"
            ></ParentRowCard>
            <ParentRowCard
              fullname="Akinwunmi Kola"
              :child_count="3"
              email="akinwunmikola@gmail.com"
              :phone="2348165544109"
              @openParentProfile="toggleProfileCard"
              @toggleMessage="toggleMessageModal"
            ></ParentRowCard>
            <!-- PARENT ROW CARD COMPONENT -->
          </div>

          <!-- REQUEST INVOICE CARD -->
          <div class="col-4">
            <!-- REQUEST INVOICE CARD COMPONENT -->
            <RequestInvoiceCard @triggerRequestForm="closeSubscribeForm"></RequestInvoiceCard>
            <!-- REQUEST INVOICE CARD COMPONENT -->
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-sm-12 col-md-8 pagination-section">
            <!-- PAGINATION COMPONENT -->
            <Pagination></Pagination>
            <!-- PAGINATION COMPONENT -->
          </div>
        </div>
      </div>

      <!-- MODAL COMPONENT -->
      <SubscribeRequestModal v-if="subscribe_form" @closeTriggered="closeSubscribeForm"></SubscribeRequestModal>

      <ParentProfileCard
        v-if="profile_card"
        @toggleMessage="toggleMessageModal"
        @closeTriggered="toggleProfileCard"
      ></ParentProfileCard>

      <NewMessageModal v-if="message_modal" @closeTriggered="toggleMessageModal"></NewMessageModal>
      <!-- MODAL COMPONENT -->
    </div>
  </div>
</template>

<script>
import ParentRowCard from "@/components/schoolComps/dashboard/parent/ParentRowCard";
import RequestInvoiceCard from "@/components/schoolComps/dashboard/parent/RequestInvoiceCard";
import Pagination from "@/components/globalComps/Pagination";

export default {
  name: "Parent",

  components: {
    ParentRowCard,
    RequestInvoiceCard,
    Pagination,
    SubscribeRequestModal: () =>
      import(/* webpackChunkName: "subscriberequestModal" */ "@/components/modalComps/schoolModals/SubscribeRequestModal"),
    ParentProfileCard: () =>
      import(/* webpackChunkName: "parentprofilecard" */ "@/components/modalComps/schoolModals/ParentProfileCard"),
    NewMessageModal: () =>
      import(/* webpackChunkName: "messagemodal" */ "@/components/modalComps/messageModals/NewMessageModal")
  },

  data() {
    return {
      subscribe_form: false,
      profile_card: false,
      message_modal: false
    };
  },

  methods: {
    closeSubscribeForm() {
      this.subscribe_form = !this.subscribe_form;
    },

    toggleProfileCard() {
      this.profile_card = !this.profile_card;
    },

    toggleMessageModal() {
      this.message_modal = !this.message_modal;
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
