<template>
  <div>
    <!-- COUNT AND SORT SECTION -->
    <div class="count-sort-row d-flex justify-content-between align-items-center nowrap">
      <!-- COUNT -->
      <div class="count font-weight-bold color_grey_dark">15 Students</div>
      <!-- SORT -->
      <div class="sort d-flex justify-content-start align-items-center nowrap color_text pointer">
        <div class="sort-range">Sort A - Z</div>
        <div class="caret-icon">
          <i class="fas fa-caret-down"></i>
        </div>
      </div>
    </div>

    <!-- STUDENT CONTENT SECTION -->
    <div class="row">
      <div class="col-12 col-md-4 col-lg-3">
        <!-- ADD STUDENT -->
        <div class="student-card add-student pointer" @click="redirectToAddStudent">
          <div class="content w-100 h-100">
            <!-- ADD STUDENT ICON -->
            <span class="icon icon-user-plus border_grey_dark d-block"></span>
            <!-- ADD STUDENT ICON -->
            <div class="text color_text">Add Students</div>
          </div>
        </div>
        <!-- ADD STUDENT -->
      </div>

      <!-- STUDENT CONTENT CARD -->
      <div class="col-12 col-md-4 col-lg-3">
        <ChildContentCard
          child_img="BoyOne.png"
          child_name="Henry Okafor"
          child_code="UED/2019/0856"
          @toggleMessage="toggleMessageModal"
        ></ChildContentCard>
      </div>

      <div class="col-12 col-md-4 col-lg-3">
        <ChildContentCard
          child_img="GirlOne.png"
          child_name="Helen Bright"
          child_code="UED/2019/0856"
          @toggleMessage="toggleMessageModal"
        ></ChildContentCard>
      </div>

      <div class="col-12 col-md-4 col-lg-3">
        <ChildContentCard
          child_img="BoyTwo.png"
          child_name="Andrew Oshinaga"
          child_code="UED/2019/0856"
          @toggleMessage="toggleMessageModal"
        ></ChildContentCard>
      </div>

      <div class="col-12 col-md-4 col-lg-3">
        <ChildContentCard
          child_img="GirlTwo.png"
          child_name="Giwa Omolade"
          child_code="UED/2019/0856"
          @toggleMessage="toggleMessageModal"
        ></ChildContentCard>
      </div>

      <div class="col-12 col-md-4 col-lg-3">
        <ChildContentCard
          child_img="GirlOne.png"
          child_name="Helen Bright"
          child_code="UED/2019/0856"
          @toggleMessage="toggleMessageModal"
        ></ChildContentCard>
      </div>

      <div class="col-12 col-md-4 col-lg-3">
        <ChildContentCard
          child_img="BoyTwo.png"
          child_name="Andrew Oshinaga"
          child_code="UED/2019/0856"
          @toggleMessage="toggleMessageModal"
        ></ChildContentCard>
      </div>

      <div class="col-12 col-md-4 col-lg-3">
        <ChildContentCard
          child_img="GirlTwo.png"
          child_name="Giwa Omolade"
          child_code="UED/2019/0856"
          @toggleMessage="toggleMessageModal"
        ></ChildContentCard>
      </div>

      <div class="col-12 col-md-4 col-lg-3">
        <ChildContentCard
          child_img="GirlOne.png"
          child_name="Helen Bright"
          child_code="UED/2019/0856"
          @toggleMessage="toggleMessageModal"
        ></ChildContentCard>
      </div>

      <div class="col-12 col-md-4 col-lg-3">
        <ChildContentCard
          child_img="BoyTwo.png"
          child_name="Andrew Oshinaga"
          child_code="UED/2019/0856"
          @toggleMessage="toggleMessageModal"
        ></ChildContentCard>
      </div>

      <div class="col-12 col-md-4 col-lg-3">
        <ChildContentCard
          child_img="GirlTwo.png"
          child_name="Giwa Omolade"
          child_code="UED/2019/0856"
          @toggleMessage="toggleMessageModal"
        ></ChildContentCard>
      </div>

      <div class="col-12 col-md-4 col-lg-3">
        <ChildContentCard
          child_img="GirlOne.png"
          child_name="Helen Bright"
          child_code="UED/2019/0856"
          @toggleMessage="toggleMessageModal"
        ></ChildContentCard>
      </div>
      <!-- STUDENT CONTENT CARD -->

      <!-- NEW MESSAGE MODAL -->
      <NewMessageModal v-if="message_modal" @closeTriggered="toggleMessageModal"></NewMessageModal>
      <!-- NEW MESSAGE MODAL -->
    </div>
  </div>
</template>

<script>
import ChildContentCard from "@/components/schoolComps/dashboard/class/class_members/ChildContentCard";
import NewMessageModal from "@/components/schoolComps/dashboard/modals/NewMessageModal";

export default {
  name: "ChildContentInfo",

  components: {
    ChildContentCard,
    NewMessageModal
  },

  data() {
    return {
      message_modal: false
    };
  },

  methods: {
    redirectToAddStudent() {
      this.$router.push("/school/dashboard/add_students");
    },

    toggleMessageModal() {
      this.message_modal = !this.message_modal;
    }
  }
};
</script>

<style>
</style>
