<template>
    <div>
        <Modal @closeModal="$emit('closeTriggered')">
            <!-- MODAL TITLE -->
            <div slot="modal-title"></div>

            <!-- MODAL BODY -->
            <div slot="modal-body">
                <div class="subscribe-modal-form">

                    <div class="form-title font-weight-bold color_text">Interest Form</div>
                    <div class="form-meta color_text font-weight-500">Please fill the interest form below. Our representatives will get in touch for further discussion.</div>

                    <form action="" @submit.prevent="">
                        <!-- SCHOOL NAME -->
                        <div class="modal-body-row row">
                            <div class="col-12">
                            <label for="schoolName" class="control-label font-14 font-weight-bold brand_primary text-uppercase">School Name</label>
                            <input
                                type="text"
                                v-model="form.school_name"
                                class="form-control"
                                id="schoolName"
                                placeholder="Chrisland Intl. College"
                            >
                            </div>
                        </div>
                        
                        <!-- SCHOOL ROLE-->
                        <div class="modal-body-row row">
                            <div class="col-12">
                            <label for="schoolRole" class="control-label font-14 font-weight-bold brand_primary text-uppercase">Role in School</label>
                            <input
                                type="text"
                                v-model="form.school_role"
                                class="form-control"
                                id="schoolRole"
                                placeholder="E.g School Admin, Head Teacher, etc"
                            >
                            </div>
                        </div>
                        
                        <!-- PARENTS NUMBER -->
                        <div class="modal-body-row row">
                            <div class="col-12">
                            <label for="parentCount" class="control-label font-14 font-weight-bold brand_primary text-uppercase">Number of Parents</label>
                            <input
                                type="text"
                                v-model="form.parent_count"
                                class="form-control"
                                id="parentCount"
                                placeholder="How many parents do you want to subscribe?"
                            >
                            </div>
                        </div>

                        <div class="modal-separator"></div>

                        <!-- CANCEL OR SUBMIT FORM -->
                        <div class="modal-body-row row d-flex justify-content-center align-items-center nowrap" style="margin-bottom:-23px !important;">
                        <button type="submit" class="btn btn-md btn-accent color_text font-weight-bold">Submit Request</button>
                        </div>

                    </form>
                </div>
            </div>

        </Modal>
    </div>
</template>

<script>
import Modal from "@/components/basicComps/Modal";

export default {
    name: "SubscribeRequestModal",
    components: {Modal},
    data() {
        return{
            form: {
                school_name: '',
                school_role: '',
                parent_count: '',
                
            }
        }
    }
}
</script>

<style>

</style>
