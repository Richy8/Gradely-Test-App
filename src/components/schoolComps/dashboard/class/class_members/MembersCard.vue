<template>
  <div class="position-relative">
    <div class="members-card branch-card">
      <!-- TOP CARD -->
      <div class="member-top d-flex justify-content-between align-items-center nowrap">
        <div class="left d-flex justify-content-start align-items-start">
          <!-- CLASS SWITCH ICON -->
          <div class="avatar brand_inverse_light_bg">
            <span class="icon-swap brand_primary"></span>
          </div>

          <!-- CLASS NAME -->
          <div class="class-info">
            <div class="title font-weight-bold color_text">Year 7 - Gold</div>
            <div class="text color_grey_dark">SwitchClass</div>
          </div>
        </div>

        <div class="right">
          <span class="d-block caret-icon icon-caret-down color_grey_dark font-13 pointer"></span>
        </div>
      </div>

      <!-- BOTTOM CARD -->
      <div class="member-bottom d-none d-md-block">
        <div class="text color_grey_dark font-weight-bold text-uppercase font-12">Assigned TEachers</div>
        <!-- AVATAR ROW -->
        <div class="avatar-row">
          <!-- TEACHERS -->
          <div class="avatar avatar-square">
            <div class="avatar-text white-text brand_primary_bg" :class="setAvatarBg">AJ</div>
          </div>

          <div class="avatar avatar-square">
            <div class="avatar-text white-text brand_tonic_bg" :class="setAvatarBg">LS</div>
          </div>

          <div class="avatar avatar-square">
            <img src="@/assets/images/TeacherOne.png" alt class="avatar-img">
          </div>

          <div class="avatar avatar-square">
            <img src="@/assets/images/TeacherTwo.png" alt class="avatar-img">
          </div>

          <div class="avatar avatar-square add-teacher pointer" @click="toggleTeacherModal">
            <div class="avatar-text transparent_bg">
              <span class="icon-plus border_grey_dark font-17 font-weight-400"></span>
            </div>
          </div>
          <!-- TEACHERS -->
        </div>

        <!-- CODE INFO -->
        <div
          class="code-info color_grey_dark font-12"
        >Share this code with anyone you wish to add to the class</div>
        <!-- CLASS CODE -->
        <span class="class-code">
          Class Code:
          <span class="code font-weight-bold brand_navy">IMD/JSS1B</span>
        </span>

        <!-- V-SLOT SECTION FOR ADD NEW ITEM -->
        <slot name="new__item"></slot>
      </div>
    </div>

    <!-- ADD TEACHER MODAL -->
    <AddTeacherModal v-if="teacher_modal" @closeTriggered="toggleTeacherModal"></AddTeacherModal>
    <!-- ADD TEACHER MODAL -->
  </div>
</template>

<script>
import { colors, random, shuffle } from "@/assets/jsComps/extFunc";
import AddTeacherModal from "@/components/schoolComps/dashboard/modals/AddTeacherModal";

export default {
  name: "MembersCard",

  components: {
    AddTeacherModal
  },

  data() {
    return {
      teacher_modal: false
    };
  },

  computed: {
    setAvatarBg() {
      let shuffled = shuffle(colors);
      return shuffled[random(15, 0)];
    }
  },

  methods: {
    toggleTeacherModal() {
      this.teacher_modal = !this.teacher_modal;
    }
  }
};
</script>

<style>
</style>
