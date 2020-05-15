<template>
    <div>
         <vue-headful
      title="User Information Settings | Gradely.ng - School"
      description="Description goes here"
    />

    <div class="settings-display-layout white rounded-10">
        <!-- PERSONAL INFO CARD COMPONENT -->
        <PersonalInfoCard></PersonalInfoCard>
        <!-- PERSONAL INFO CARD COMPONENT -->   
        
        <!-- FORM DIVIDEER -->
        <div class="form-divider"></div>

        <div class="user-lander-section">
            <!-- USER DATA -->
            <div class="user-group-row">
                <div class="label">Your Name</div>
                <div class="user-data d-flex justify-content-start align-items-center nowrap">
                    <div class="value">Francis Sanni</div>
                    <div class="update-link font-weight-bold"> <router-link to="/school/dashboard/settings/personal_information" class="btn-link font-weight-bold">Update</router-link> </div>
                </div>
            </div>
            
            <!-- LOGIN EMAIL -->
            <div class="user-group-row">
                <div class="label">Login Email</div>
                <div class="user-data d-flex justify-content-start align-items-center nowrap">
                    <div class="value">francis@cchub.com</div>
                    <div class="update-link btn-link" @click="toggleModal"> Update </div>
                </div>
            </div>

            <!-- PASSWORD -->
            <div class="user-group-row">
                <div class="label">Password</div>
                <div class="user-data d-flex justify-content-start align-items-center nowrap">
                    <div class="value">**********</div>
                    <div class="update-link font-weight-bold"> <router-link to="/school/dashboard/settings/account_settings" class="btn-link font-weight-bold">Update</router-link> </div>
                </div>
            </div>

            <!-- FORM DIVIDER -->
            <div class="form-divider"></div>

            <!-- NOTIFICATION -->
            <div class="user-group-row">
                <div class="notification-label color_grey_dark">Notification Settings</div>
                <div class="user-data d-flex justify-content-start align-items-center nowrap">
                    <div class="value font-14">Choose the types of notifications you want to receive from Gradely</div>
                    <div class="update-link btn-link"> Update </div>
                </div>
            </div>

        </div>

        <!-- EMAIL UPDATE MODAL COMPONENT -->
        <UpdateEmailModal v-if="email_modal" @closeTriggered="toggleModal"></UpdateEmailModal>
        <!-- EMAIL UPDATE MODAL COMPONENT -->

    </div>
    </div>
</template>

<script>
import PersonalInfoCard from "@/components/schoolComps/dashboard/settings/PersonalInfoCard"
import UpdateEmailModal from "@/components/schoolComps/dashboard/modals/UpdateEmailModal"

export default {
    name: "SchoolSettingsPersonalUser",
    components: {PersonalInfoCard, UpdateEmailModal},
    data() {
        return {
            email_modal: false
        }
    },

    methods: {
        toggleModal() {
            this.email_modal = !this.email_modal;
        }
    }
}
</script>

<style>

</style>
