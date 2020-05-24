<template>
  <div>
    <Modal @closeModal="$emit('closeTriggered')">
      <!-- MODAL TITLE -->
      <div slot="modal-title">
        <span class="font-weight-bold">Select Recipients</span>
      </div>

      <!-- MODAL BODY -->
      <div slot="modal-body" class="modal__top">
        <form action @submit.prevent>
          <!-- SEARCH FORM -->
          <div class="form-group">
            <label for="Search" sr-only></label>
            <input
              type="search"
              class="form-control rounded-45 color_grey_dark color_white_bg border-0 px-4"
              placeholder="Search contacts by name"
            >
          </div>
          <!-- SEARCH FORM -->

          <!-- NAVIGATION TAB -->
          <div class="tabs w-100 d-flex justify-content-between align-items-center nowrap">
            <div
              class="tab w-50 select-none active"
              @click="toggleView($event, 'ParentList')"
            >Parents</div>
            <div class="tab w-50 select-none" @click="toggleView($event, 'TeacherList')">Teachers</div>
          </div>

          <div class="list-view mt-3">
            <transition name="fade" mode="out-in">
              <keep-alive>
                <component :is="in_view"></component>
              </keep-alive>
            </transition>
          </div>

          <!-- SEND INVITATION-->
          <div class="modal-body-row row mt-3 mb-1">
            <div class="col-12 d-flex flex-center">
              <button type="submit" class="btn btn-md btn-default-outline" @click="$emit('selctionCompleted')">Done</button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/basicComps/Modal";
import ParentList from "@/components/schoolComps/dashboard/messages/ParentList";
import TeacherList from "@/components/schoolComps/dashboard/messages/TeacherList";

export default {
  name: "AddRecipientModal",

  components: {
    Modal,
    ParentList,
    TeacherList
  },

  data() {
    return {
      in_view: "ParentList"
    };
  },

  methods: {
    toggleView(event, view) {
      let tabs = document.querySelectorAll(".tab");
      tabs.forEach(tab => tab.classList.remove("active"));

      if (view === "ParentList") {
        this.in_view = "ParentList";
        event.target.classList.add("active");
      } else if (view == "TeacherList") {
        this.in_view = "TeacherList";
        event.target.classList.add("active");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.2s ease-in;
}
.fade-leave-active {
  transition: opacity 0.2s ease-out;
  opacity: 0;
}

.modal__top {
  margin-top: -35px;
}

.tabs {
  padding-bottom: 8px;
  border-bottom: 1px solid #d5d5d5;

  .tab {
    position: relative;
    color: #959595;
    width: 50%;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #353535;

      &::after {
        position: absolute;
        content: "";
        width: 100%;
        left: 0;
        bottom: -9px;
        height: 3px;
        background: #f2ab3e;
      }
    }
  }
  .active {
    font-weight: 600;
    color: #353535;

    &::after {
      position: absolute;
      content: "";
      width: 100%;
      left: 0;
      bottom: -9px;
      height: 3px;
      background: #f2ab3e;
    }
  }
}
</style>
