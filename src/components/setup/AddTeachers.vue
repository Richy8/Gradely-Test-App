<template>
<b-container>
    <b-row>
        <b-col cols="12" md="10" lg="8" offset-md="1" offset-lg="2" class="form-content">
            <div class="form-title title-black w-100 text-center">Add your Teacher</div>

            <div class="add-teacher mt-4 w-100 rounded-5">
                <div class="tip-title title-black">How to add a Teacher</div>

                <!-- TIP ONE -->
                <div class="tip mb-3 title-black d-flex justify-content-start align-items-start">
                    <div class="tip-number mr-3">1.</div>
                    <div>
                        <div class="tip-text">Give your teacher’s the class code to their assigned class</div>
                        <div class="tip-link"> <a href="#" class=" orange-light link-underline">Find your class codes here</a> </div>
                    </div>
                </div>

                <!-- TIP TWO -->
                <div class="tip title-black d-flex justify-content-start align-items-start">
                    <div class="tip-number mr-3">2.</div>
                    <div>
                        <div class="tip-text">Invite your teachers to join your school using their phone number or email address</div>
                        <div class="tip-link"> <a href="#" class=" orange-light link-underline">Invite Teachers</a> </div>
                    </div>
                </div>

            </div>

        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: "AddTeachers",
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
