<template>
    <div>
        <Modal @closeModal="$emit('closeTriggered')">
            <!-- MODAL TITLE -->
            <div slot="modal-title">
                <span class="font-weight-bold">Invite Teacher</span> 
            </div>

            <!-- MODAL BODY -->
            <div slot="modal-body">
                <form action="" @submit.prevent="">
                    <!-- TEACHER NAME -->
                    <div class="modal-body-row row">
                        <div class="col-12">
                            <label for="teacherName" class="control-label label-compact">Name</label>
                            <input type="text" v-model="form.name" class="form-control" id="teacherName" placeholder="The name of the teacher">
                        </div>
                    </div>

                    <!-- TEACHER EMAIL ADDRESS -->
                    <div class="modal-body-row row">
                        <div class="col-12">
                            <label for="teacherEmail" class="control-label label-compact">Email Address</label>
                            <input type="email" v-model="form.email" class="form-control" id="teacherEmail" placeholder="Teacher’s email Address">
                        </div>
                    </div>

                    <!-- TEACHER PHONE NUMBER -->
                    <div class="modal-body-row row">
                        <div class="col-12">
                            <label for="teacherPhone" class="control-label label-compact">Phone Number</label>
                            <input type="number" v-model="form.phone" class="form-control" id="teacherPhone" placeholder="The phone number of the Teacher">
                        </div>
                    </div>

                    <!-- TEACHER CLASS -->
                    <div class="modal-body-row row">
                        <div class="col-12">
                            <label for="class" class="control-label label-compact">Class</label>
                            <select class="form-control" v-model="form.class">
                                <option value="" disabled selected>Assign to class</option>
                                <option value="Jss 1">Jss 1</option>
                                <option value="Jss 2">Jss 2</option>
                                <option value="Jss 3">Jss 3</option>
                            </select>
                        </div>
                    </div>

                    <!-- TEACHER SUBJECT -->
                    <div class="modal-body-row row">
                        <div class="col-12">
                            <label for="subject" class="control-label label-compact">Subject</label>
                           <select class="form-control" v-model="form.subject">
                                <option value="" disabled selected>Assign a Subject</option>
                                <option value="Maths">Mathematics</option>
                                <option value="English">English language</option>
                                <option value="Agric">Agriculture</option>
                                <option value="Econs">Economics</option>
                            </select>
                        </div>
                    </div>

                     <!-- SEND INVITATION-->
                    <div class="modal-body-row row mb-1">
                        <div class="col-12 d-flex flex-center">
                           <button type="submit" class="btn btn-md btn-accent">Send Invitation</button>
                        </div>
                    </div>

                </form>
            </div>

        </Modal>
    </div>
</template>

<script>
import Modal from "@/components/basicComps/Modal";

export default {
    name: "AddTeacherModal",
    components: {Modal},
    data() {
        return{
            form: {
                name: "",
                email: "",
                phone: "",
                class: "",
                subject: ""
            }
        }
    }
}
</script>

<style>

</style>
