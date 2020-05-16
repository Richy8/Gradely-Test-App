<template>
  <div>
    <div class="class-branch-section">
      <!-- BRANCH CARD -->
      <div class="branch-card">
        <!-- BRANCH CARD HEADER -->
        <div class="branch-card-header">
          <!-- BRANCH CARD TITLE -->
          <div class="branch-card-title">{{class_branch}}</div>
          <div class="branch-card-option">
            <span
              class="icon-ellipsis-h font-20 pointer"
              v-on-clickaway="onDrop"
              @click="toggleDropdown"
            ></span>
            <!-- DROP DOWN MENU -->
            <div class="dropdown-btn-menu placement-bottom" v-if="branch_options">
              <ul class="list-unstyled">
                <li>
                  <a href @click.prevent="$emit('openClassModal')">Edit Info</a>
                </li>
                <li>
                  <a href @click.prevent>View Feeds</a>
                </li>
                <li>
                  <a href @click.prevent="$emit('openTeacherModal')">Add Teachers</a>
                </li>
                <li>
                  <a href @click.prevent>Delete Class</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- BRANCH CARD CLASS CODE -->
        <div class="branch-card-code">
          Class Code:
          <span class="font-weight-bold brand_black">{{class_code}}</span>
        </div>

        <!-- BRANCH CARD ICON ROW -->
        <div class="branch-card-icon-row">
          <!-- CALL OUT ICON LINK -->
          <router-link to="/">
            <span class="branch-icon icon-callout"></span>
          </router-link>

          <!-- LIBRARY ICON LINK -->
          <router-link to="/">
            <span class="branch-icon icon-library"></span>
          </router-link>
          
          <!-- PIE CHART ICON LINK -->
          <router-link to="/">
            <span class="branch-icon icon-pie-chart"></span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "ClassBranch",
  mixins: [clickaway],
  components: {},

  props: {
    class_branch: String,
    class_code: String
  },

  data() {
    return {
      branch_options: false
    };
  },

  methods: {
    toggleDropdown() {
      this.branch_options = !this.branch_options;
    },

    onDrop() {
      this.branch_options = false;
    }
  }
};
</script>

<style>
</style>
