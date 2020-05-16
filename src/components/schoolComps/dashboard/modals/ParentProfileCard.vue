<template>
  <div>
    <ModalCover @closeModal="$emit('closeTriggered')">
      <!-- MODAL BODY -->
      <div slot="modal-cover-body">
        <div class="parent-profile-card color_deep_blue_bg">
          <!-- CARD TOP -->
          <div class="card-top">
            <!-- AVATAR -->
            <div class="avatar avatar_lg">
              <div class="avatar-text brand_accent_bg color_deep_blue">RH</div>
            </div>

            <!-- PARENT NAME -->
            <div class="parent-name font-weight-bold color_white">Rubius Hagrid</div>

            <!-- PARENT ROLE -->
            <div class="parent-role border_grey">Father</div>

            <!-- PARENT INFO -->
            <div class="parent-info">
              <!-- PHONE -->
              <div class="col col-one">
                <!-- ICON -->
                <span class="icon-phone border_grey_dark mr-2"></span>
                <!-- INFO -->
                <div>
                  <div class="label">Phone Number</div>
                  <div class="output brand_accent link-underline">08033752311</div>
                </div>
              </div>

              <!-- EMAIL -->
              <div class="col col-two">
                <!-- ICON -->
                <span class="icon-email border_grey_dark mr-2"></span>
                <!-- INFO -->
                <div>
                  <div class="label">Email Address</div>
                  <div class="output output-email brand_accent link-underline">rbh_ltd@gmail.com</div>
                </div>
              </div>
            </div>

            <!-- MESSAGE BUTTON -->
            <button
              class="btn btn-md d-flex flex-center rounded-20 btn-grey-outline"
            >
              <span class="icon-chat font-16 border_grey_dark mr-2"></span>
              SEND A MESSAGE
            </button>
          </div>

          <!-- CARD BOTTOM -->
          <div class="card-bottom white">
            <div class="title-label color_grey_dark">Children</div>
            <!-- CHILDREN ROW -->
            <div class="children-row">
              <!-- CHILD COMPONENT -->
              <ChildListCard
                img="MaleChild.png"
                child_name="Jake Hagrid"
                class_year="Year 7"
                branch="Gold"
              ></ChildListCard>

              <ChildListCard
                img="FemaleChild.png"
                child_name="Penelope Hagrid"
                class_year="Year 7"
                branch="Silver"
              ></ChildListCard>
              <!-- CHILD COMPONENT -->
            </div>
          </div>
        </div>
      </div>
    </ModalCover>
  </div>
</template>

<script>
import ModalCover from "@/components/basicComps/ModalCover";
import ChildListCard from "@/components/schoolComps/dashboard/parent/ChildListCard";

export default {
  name: "ParentProfileCard",

  components: {
    ModalCover,
    ChildListCard
  },

  data() {
    return {};
  },

  methods: {
    btnHover(event, icon) {
      event.target.firstElementChild.classList.contains(icon)
        ? event.target.firstElementChild.classList.remove(icon)
        : event.target.firstElementChild.classList.add(icon);
    }
  }
};
</script>

<style>
</style>
