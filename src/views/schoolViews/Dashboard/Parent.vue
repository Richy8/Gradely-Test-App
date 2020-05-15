<template>
  <div>
    <vue-headful title="School Parents | Gradelyng" description="Description goes here"/>
    <div class="school-parent-section">
      <!-- PAGE TITLE -->
      <div class="container px-1">
        <div class="row">
          <div class="col-12 dashboard-header-row">
            <!-- PAGE TITLE -->
            <div class="page-title">Parents</div>

            <!-- FILTER AND ADD TEACHER INFO -->
            <div class="d-flex">
              <!-- FILTER ICON -->
              <div
                class="avatar avatar_md btn-whitish left-avatar pointer"
                @mouseenter.self="btnHover($event, 'filter_icon_light')"
                @mouseleave.self="btnHover($event, 'filter_icon_light')"
              >
                <div class="cust_icon avatar-img filter_icon"></div>
              </div>

              <!-- ADD ICON -->
              <div
                class="avatar avatar_md btn-accent right-avatar pointer"
                @mouseenter.self="btnHover($event, 'plus_icon_light')"
                @mouseleave.self="btnHover($event, 'plus_icon_light')"
              >
                <div class="cust_icon avatar-img plus_icon"></div>
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
            <div class="table-header">
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
              initials="RH"
              fullname="Robius Hagrid"
              :child_count="2"
              email="robiushagrid@gmail.com"
              :phone="2348131177703"
              @openParentProfile="toggleProfileCard"
            ></ParentRowCard>

            <ParentRowCard
              initials="BC"
              fullname="Babatunde Calebs"
              :child_count="1"
              email="babatundecalebs@gmail.com"
              :phone="2348165544109"
              @openParentProfile="toggleProfileCard"
            ></ParentRowCard>

            <ParentRowCard
              initials="AK"
              fullname="Akinwunmi Kola"
              :child_count="3"
              email="akinwunmikola@gmail.com"
              :phone="2348165544109"
              @openParentProfile="toggleProfileCard"
            ></ParentRowCard>

            <ParentRowCard
              initials="RH"
              fullname="Robius Hagrid"
              :child_count="2"
              email="robiushagrid@gmail.com"
              :phone="2348131177703"
              @openParentProfile="toggleProfileCard"
            ></ParentRowCard>

            <ParentRowCard
              initials="BC"
              fullname="Babatunde Calebs"
              :child_count="1"
              email="babatundecalebs@gmail.com"
              :phone="2348165544109"
              @openParentProfile="toggleProfileCard"
            ></ParentRowCard>

            <ParentRowCard
              initials="AK"
              fullname="Akinwunmi Kola"
              :child_count="3"
              email="akinwunmikola@gmail.com"
              :phone="2348165544109"
              @openParentProfile="toggleProfileCard"
            ></ParentRowCard>

            <ParentRowCard
              initials="AK"
              fullname="Akinwunmi Kola"
              :child_count="3"
              email="akinwunmikola@gmail.com"
              :phone="2348165544109"
              @openParentProfile="toggleProfileCard"
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
      <ParentProfileCard v-if="profile_card" @closeTriggered="toggleProfileCard"></ParentProfileCard>
      <!-- MODAL COMPONENT -->
    </div>
  </div>
</template>

<script>
// BACKGROUND COLOR EXTERNAL FUNCTION
import { bgColorSetter } from "@/assets/jsComps/extFunc";
import ParentRowCard from "@/components/schoolComps/dashboard/parent/ParentRowCard";
import RequestInvoiceCard from "@/components/schoolComps/dashboard/parent/RequestInvoiceCard";
import Pagination from "@/components/basicComps/Pagination";

// MODAL
import SubscribeRequestModal from "@/components/schoolComps/dashboard/modals/SubscribeRequestModal";
import ParentProfileCard from "@/components/schoolComps/dashboard/modals/ParentProfileCard";

export default {
  name: "Parent",

  components: {
    ParentRowCard,
    RequestInvoiceCard,
    Pagination,
    SubscribeRequestModal,
    ParentProfileCard
  },

  data() {
    return{
      subscribe_form: false,
      profile_card: false
    }
  },

  mounted() {
    bgColorSetter("#f0f0f0");
  },

  methods: {
    btnHover(event, icon) {
      event.target.firstElementChild.classList.contains(icon)
        ? event.target.firstElementChild.classList.remove(icon)
        : event.target.firstElementChild.classList.add(icon);
    },

    closeSubscribeForm() {
      this.subscribe_form = !this.subscribe_form;
    },

    toggleProfileCard() {
      this.profile_card = !this.profile_card;
    }
  }
};
</script>

<style>
</style>
