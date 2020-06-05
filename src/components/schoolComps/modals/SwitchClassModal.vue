<template>
  <div>
    <Modal @closeModal="$emit('closeTriggered')">
      <!-- MODAL TITLE -->
      <div slot="modal-title">
        <span class="font-weight-bold">SWITCH CLASS</span>
      </div>

      <!-- MODAL BODY -->
      <div slot="modal-body">
        <!-- SWITCH CLASS ROW COMPONENT -->
        <SwitchClassRow
          :class_year="item.year"
          :class_branch="item.branch"
          :selected="item.active"
          @getSelected="updateClassOptions(index)"
          v-for="(item, index) in class_options"
          :key="index"
        ></SwitchClassRow>
        <!-- SWITCH CLASS ROW COMPONENT -->
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/globalComps/Modal";
import SwitchClassRow from "@/components/schoolComps/dashboard/class/SwitchClassRow";

export default {
  name: "SwitchClassModal",

  props: {
    class_id: String
  },

  components: {
    Modal,
    SwitchClassRow
  },

  mounted() {
    this.checkPreviousSelectedClass(this.class_id);
  },

  data() {
    return {
      class_options: [
        { id: "1", year: "Year 7", branch: "Gold", active: true },
        { id: "2", year: "Year 7", branch: "Silver", active: false },
        { id: "3", year: "Year 8", branch: "Gold", active: false },
        { id: "4", year: "Year 8", branch: "Silver", active: false },
        { id: "5", year: "Year 9", branch: "Gold", active: false },
        { id: "6", year: "Year 9", branch: "Silver", active: false }
      ]
    };
  },

  methods: {
    updateClassOptions(index) {
      this.$emit("getSelected", {
        id: this.class_options[index].id,
        year: this.class_options[index].year,
        branch: this.class_options[index].branch
      });
    },

    checkPreviousSelectedClass(id) {
      let class_index = this.class_options.findIndex(val => id === val.id); //GET PREVIOUS SELECTED INDEX
      this.class_options.forEach(item => (item.active = false)); //RESET CLASS ACTIVE TO FALSE
      this.class_options[class_index].active = true;
    }
  }
};
</script>

<style lang="scss">
</style>
