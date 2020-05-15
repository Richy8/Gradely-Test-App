<template>
    <div>
        <Modal @closeModal="$emit('closeTriggered')">
            <!-- MODAL TITLE -->
            <div slot="modal-title">
                <span class="font-weight-bold">Add Class branches</span> 
            </div>

            <!-- MODAL BODY -->
            <div slot="modal-body">
                <form action="" @submit.prevent="">
                    <!-- CLASS LEVEL -->
                    <div class="modal-body-row row">
                        <div class="col-4">
                            <label for="" class="text-uppercase control-label font-14 color_grey_dark">Class Level</label>
                        </div>
                        <div class="col-8">
                            <span class="font-weight-bold brand_primary">Junior Secondary School 1</span>
                        </div>
                    </div>

                    <!-- CLASS BRANCH INPUT -->
                    <div class="modal-body-row row">
                        <div class="col-4">
                            <label for="" class="text-uppercase control-label font-14 color_grey_dark">Class Branches</label>
                        </div>
                        <div class="col-8">
                            <input type="text" v-model="form.class_branch" class="form-control" placeholder="E.g. A">
                            <div class="help-block color_grey_dark font-12 font-normal">Seen As: <span class="font-weight-bold">JSS1A</span> </div>
                        </div>
                    </div>

                    <!-- ADD BRANCH BUTTON -->
                    <div class="modal-body-row row">
                        <div class="col-4"></div>
                        <div class="col-8">
                            <router-link to="" class="w-100 d-flex align-items-center">
                                <div class="undone undone-md"></div>
                                <div class="label-text brand_accent font-14 font-weight-bold ml-3">Add another</div>
                            </router-link>
                        </div>
                    </div>

                    <!-- REPLICATE BRANCH -->
                    <div class="modal-body-row row">
                        <div class="col-4"></div>
                        <div class="col-8">
                            <div class="checkbox checkbox-inline" style="padding-left:2px;">
                                <label for="classLevel" class="pointer">
                                    <input type="checkbox" v-model="form.replicate_branch" value="checked"
                                        id="classLevel">
                                    <span class="label_text font-14 color_text">Replicate for other class levels</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- CANCEL OR SUBMIT FORM -->
                    <div class="modal-body-row row d-flex justify-content-center align-items-center nowrap mb-2">
                       <button @click="dropModal" class="btn btn-md black-ic z-depth-0 mr-5">Cancel</button>
                       <button type="submit" class="btn btn-md btn-accent ml-5">Save Class</button>
                    </div>

                </form>

            </div>

        </Modal>
    </div>
</template>

<script>
import Modal from "@/components/basicComps/Modal";

export default {
    name: "AddBranchModal",
    components: {Modal},
    data() {
        return{
            form: {
                class_branch: '',
                replicate_branch: 'checked'
            }
        }
    },
    methods: {
        dropModal() {
            this.$emit('closeTriggered');
        }
    }
}
</script>

<style>

</style>
