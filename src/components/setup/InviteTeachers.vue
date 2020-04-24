<template>
<b-container>
    <b-row>
        <b-col cols="12" lg="10" offset-lg="1" class="form-content">
            <div class="form-title title-black w-100 text-center">Add your Teachers</div>
          
            <div class="invite-teacher">
                <div class="d-flex flex-center w-100">
                     <div class="button rounded-30 title-black">INVITE A TEACHER</div>
                </div>

                <div class="d-flex flex-start">
                    <div class="navy-blue-light teachers-title">INVITED TEACHERS</div>
                </div>

                <!-- TEACHER LIST -->
                <div class="teachers-list w-100 d-flex justify-content-between align-items-center">
                    <div class="basic-info d-flex justify-content-start align-items-center">
                        <div class="avatar bg-danger mr-3">
                            <div class="avatar-text white-text">AY</div>
                        </div>
                        <div class="teacher-info">
                            <div class="name title-black">Andrew Young</div>
                            <div class="email label-black">a_young@gmail.com</div>
                        </div>
                    </div>

                    <div class="class-name text-left title-black pl-2">JSS1</div>
                    <div class="close-icon text-right pr-3"><b-icon icon="x" scale="1.8" class="label-black"></b-icon></div>
                </div>

                 <div class="teachers-list w-100 d-flex justify-content-between align-items-center">
                    <div class="basic-info d-flex justify-content-start align-items-center">
                        <div class="avatar bg-primary mr-3">
                            <div class="avatar-text white-text">AY</div>
                        </div>
                        <div class="teacher-info">
                            <div class="name title-black">Andrew Young</div>
                            <div class="email label-black">a_young@gmail.com</div>
                        </div>
                    </div>

                    <div class="class-name text-left title-black pl-2">JSS1</div>
                    <div class="close-icon text-right pr-3"><b-icon icon="x" scale="1.8" class="label-black"></b-icon></div>
                </div>

                 <div class="teachers-list w-100 d-flex justify-content-between align-items-center">
                    <div class="basic-info d-flex justify-content-start align-items-center">
                        <div class="avatar bg-success mr-3">
                            <div class="avatar-text white-text">AY</div>
                        </div>
                        <div class="teacher-info">
                            <div class="name title-black">Andrew Young</div>
                            <div class="email label-black">a_young@gmail.com</div>
                        </div>
                    </div>

                    <div class="class-name text-left title-black pl-2">JSS1</div>
                    <div class="close-icon text-right pr-3"><b-icon icon="x" scale="1.8" class="label-black"></b-icon></div>
                </div>

                 <div class="teachers-list w-100 d-flex justify-content-between align-items-center">
                    <div class="basic-info d-flex justify-content-start align-items-center">
                        <div class="avatar navy-blue-bg mr-3">
                            <div class="avatar-text white-text">AY</div>
                        </div>
                        <div class="teacher-info">
                            <div class="name title-black">Andrew Young</div>
                            <div class="email label-black">a_young@gmail.com</div>
                        </div>
                    </div>

                    <div class="class-name text-left title-black pl-2">JSS1</div>
                    <div class="close-icon text-right pr-3"><b-icon icon="x" scale="1.8" class="label-black"></b-icon></div>
                </div>

            </div>

        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: "InviteTeachers",
    data() {
        return {
           
        };
    },

    methods: {
       
    }
};
</script>

<style>
</style>
