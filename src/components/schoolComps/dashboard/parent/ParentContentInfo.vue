<template>
  <div>
    <ParentRowCard
      fullname="Robius Hagrid"
      image="Man.png"
      :child_count="2"
      email="robiushagrid@gmail.com"
      :phone="2348131177703"
      @openParentProfile="toggleProfileCard"
      @toggleMessage="toggleMessageModal"
    ></ParentRowCard>

    <!-- PAGINATION COMPONENT -->
    <div class="pagination-section mt-5">
      <Pagination></Pagination>
    </div>
    <!-- PAGINATION COMPONENT -->

    <!-- MODAL -->
    <ParentProfileCard
      v-if="profile_card"
      @toggleMessage="toggleMessageModal"
      @closeTriggered="toggleProfileCard"
    ></ParentProfileCard>

    <NewMessageModal v-if="message_modal" @closeTriggered="toggleMessageModal"></NewMessageModal>
    <!-- MODAL -->
  </div>
</template>

<script>
import Pagination from "@/components/globalComps/Pagination";
import ParentRowCard from "@/components/schoolComps/dashboard/parent/ParentRowCard";

export default {
  name: "ParentContentInfo",

  props: {
    parents: Array
  },

  components: {
    Pagination,
    ParentRowCard,
    ParentProfileCard: () =>
      import(/* webpackChunkName: "parentprofilecard" */ "@/components/modalComps/schoolModals/ParentProfileCard"),
    NewMessageModal: () =>
      import(/* webpackChunkName: "messagemodal" */ "@/components/modalComps/messageModals/NewMessageModal")
  },

  data() {
    return {
      profile_card: false,
      message_modal: false
    };
  },

  methods: {
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
</style>
