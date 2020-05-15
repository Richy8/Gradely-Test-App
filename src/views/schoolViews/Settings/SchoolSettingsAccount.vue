<template>
    <div>
    <vue-headful
      title="Account Settings | Gradely.ng - School"
      description="Description goes here"
    />
     <div class="settings-display-layout white rounded-10">
      <!-- PAGE TITLE -->
      <div class="page-title">Change Password</div>

        <!-- CHANGE PASSWORD FORM -->
        <div class="change-password-form mt-5">  
            <div class="container">
                <!-- CURRENT PASSWORD -->
                <div class="row form-group-row d-flex align-items-start">
                    <!-- LABEL -->
                    <div class="col-12 px-0 col-md-4 col-lg-3 col-xl-4 form-group-item">
                        <label for="currentPwd" class="control-label color_grey_dark">Current Password</label>
                    </div>
                    <!-- INPUT -->
                    <div class="col-12 px-0 col-md-8 col-lg-9 col-xl-8 form-group-item">
                        <input
                        type="password"
                        v-model="form.current_password"
                        id="currentPwd"
                        class="form-control"
                        placeholder="Enter your current password"
                        >
                    </div>
                </div>

                <!-- NEW PASSWORD -->
                <div class="row form-group-row d-flex align-items-start">
                    <!-- LABEL -->
                    <div class="col-12 px-0 col-md-4 col-lg-3 col-xl-4 form-group-item">
                        <label for="newPwd" class="control-label color_grey_dark">New Password</label>
                    </div>
                    <!-- INPUT -->
                    <div class="col-12 px-0 col-md-8 col-lg-9 col-xl-8 form-group-item">
                        <input
                        type="password"
                        v-model="form.new_password"
                        id="newPwd"
                        class="form-control"
                        placeholder="Create a new password"
                        >
                    </div>
                </div>

                <!-- NEW PASSWORD -->
                <div class="row form-group-row d-flex align-items-start">
                    <!-- LABEL -->
                    <div class="col-12 px-0 col-md-4 col-lg-3 col-xl-4 form-group-item">
                        <label for="newPwdConfirm" class="control-label color_grey_dark">Confirm New Password</label>
                    </div>
                    <!-- INPUT -->
                    <div class="col-12 px-0 col-md-8 col-lg-9 col-xl-8 form-group-item">
                        <input
                        type="password"
                        v-model="form.new_password_confirm"
                        id="newPwdConfirm"
                        class="form-control"
                        placeholder="Enter the new password again"
                        >
                    </div>
                </div>

                <!-- SUBMIT BUTTON -->
                <div class="row form-group-row d-flex align-items-start">
                    <!-- LABEL -->
                    <div class="col-12 px-0 col-md-4 col-lg-3 col-xl-4 form-group-item">
                    </div>
                    <!-- INPUT -->
                    <div class="col-12 px-0 col-md-8 col-lg-9 col-xl-8 form-group-item">
                       <button type="submit" class="btn btn-md btn-accent ml-0">CHANGE PASSWORD</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- FORM DIVIDER -->
        <div class="form-divider"></div>

        <!-- PAGE TITLE -->
        <div class="page-title">Delete your Account</div>

        <div class="delete-acct">
            <p>
                Deleting your account transfers the control of the school account to another school user with admin access. You will no longer be able to log in or get any notification about the activities of this school any longer. This includes your teacher activities, parent and student information, results, reports and messages
            </p>
            <p class="brand_tonic">
                Are you sure you want to continue? This action can not be undone.
            </p>
        </div>

        <!-- DELETE BUTTON -->
        <button class="btn btn-md btn-default-outline ml-0">Delete this account</button>

    </div>
  </div>
</template>

<script>
export default {
    name: "SchoolSettingsAccount",

    data(){
        return{
            form:{
                current_password: "",
                new_password: "",
                new_password_confirm: "",
            }
        }
    }
}
</script>

<style>

</style>
