<template>
  <div>
    <div class="subject-preference">
      <div class="preference-title-row">
        <!-- TITLE -->
        <div class="preference-title">School Users</div>
        <!-- PLUS ICON -->
        <div class="avatar pointer" @click="toggleUserModal">
          <span class="flex-center icon-plus font-17 color_text font-weight-600"></span>
        </div>
      </div>

      <!-- USER CARD COMPONENTS -->
      <UserCard
        :fullname="user.name"
        :email="user.email"
        :role="user.role"
        :status="user.status"
        @editRole="toggleUserRoleModal"
        v-for="(user, index) in user_list"
        :key="index"
      ></UserCard>
      <!-- USER CARD COMPONENTS -->

      <!-- ADD USER MODAL COMPONENTS -->
      <AddUserModal v-if="user_modal" @closeTriggered="toggleUserModal"></AddUserModal>
      <!-- ADD USER MODAL COMPONENTS -->
      <!-- EDIT USER ROLE MODAL COMPONENTS -->
      <EditUserRoleModal v-if="user_role" @closeTriggered="toggleUserRoleModal"></EditUserRoleModal>
      <!-- EDIT USER ROLE MODAL COMPONENTS -->
    </div>
  </div>
</template>

<script>
export default {
  name: "UserPreference",

  components: {
    UserCard: () =>
      import(/* webpackChunkName: "UserCard" */ "@/components/globalComps/SettingsComps/PreferenceComps/UserCard"),
    AddUserModal: () =>
      import(/* webpackChunkName: "AddUserModal" */ "@/components/modalComps/settingsModals/AddUserModal"),
    EditUserRoleModal: () =>
      import(/* webpackChunkName: "EditUserRoleModal" */ "@/components/modalComps/settingsModals/EditUserRoleModal")
  },

  data() {
    return {
      user_modal: false,
      user_role: false,
      user_list: [
        {
          name: "Boye Oshinaga",
          email: "boye@gradely.ng",
          role: "Owner",
          status: "active"
        },
        {
          name: "Calebs Babatunde",
          email: "calebs@gradely.ng",
          role: "Principal",
          status: "active"
        },
        {
          name: "Seyi Adelaju",
          email: "seyi@gradely.ng",
          role: "IT Director",
          status: "inactive"
        }
      ]
    };
  },

  methods: {
    toggleUserModal() {
      this.user_modal = !this.user_modal;
    },

    toggleUserRoleModal() {
      this.user_role = !this.user_role;
    }
  }
};
</script>

<style lang="scss">
</style>
