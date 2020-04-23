<template>
<b-container>
    <b-row>
        <b-col cols="12" md="10" lg="8" offset-md="1" offset-lg="2" class="form-content">
            <div class="form-title title-black w-100 text-center">Select your school curriculum</div>

            <!-- CURRICULUMS -->
            <div class="curriculums d-flex flex-column justify-content-center align-items-center px-2">
                <!-- CURRICULLUM ONE -->
                <div class="curriculum d-flex justify-content-start align-items-start rounded-5" :class="{selected: form.curriculum_one}" @click="select_curriculum('one')">
                    <div class="checkbox">
                        <div class="check-input position-relative" :class="{checked: form.curriculum_one}"></div>
                    </div>
                    <div class="curriculum-content">
                        <div class="curriculum-title title-black">WAEC/NECO</div>
                        <div class="curriculum-text label-black">Prepare your students for Nigerian accredited examinations at the Senior and Junior secondary School level</div>
                    </div>
                </div>

                <!-- CURRICULLUM TWO -->
                <div class="curriculum d-flex justify-content-start align-items-start rounded-5" :class="{selected: form.curriculum_two}" @click="select_curriculum('two')">
                    <div class="checkbox">
                        <div class="check-input position-relative" :class="{checked: form.curriculum_two}"></div>
                    </div>
                    <div class="curriculum-content">
                        <div class="curriculum-title title-black">Cambridge(IGCSE)</div>
                        <div class="curriculum-text label-black">Designed to prepare students for the International General Certificate of Secondary Education.</div>
                    </div>
                </div>

                <!-- CURRICULLUM THREE -->
                <div class="curriculum d-flex justify-content-start align-items-start rounded-5" :class="{selected: form.curriculum_three}" @click="select_curriculum('three')">
                    <div class="checkbox">
                        <div class="check-input position-relative" :class="{checked: form.curriculum_three}"></div>
                    </div>
                    <div class="curriculum-content">
                        <div class="curriculum-title title-black">Others</div>
                        <div class="curriculum-text label-black">Focused on preparing students for admission in to American colleges or international studies.</div>
                    </div>
                </div>
            </div>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: "Curriculum",
    data() {
        return {
            curriculums: {
                curriculum_one: "Waec/Neco",
                curriculum_two: "Cambridge",
                curriculum_three: "Others"
            },

            form: {
                curriculum_one: false,
                curriculum_two: false,
                curriculum_three: false
            },

            selected: []
        };
    },

    methods: {
        select_curriculum(curriculum) {
            if (curriculum === "one") {
                this.form.curriculum_one = !this.form.curriculum_one;

                // PUSH CURRICULUM TO SELECTED ARRAY IF TRUE
                this.form.curriculum_one ?
                    this.selected.push(this.curriculums.curriculum_one) :
                    this.getIndex(this.curriculums.curriculum_one);

            } else if (curriculum === "two") {
                this.form.curriculum_two = !this.form.curriculum_two;

                // PUSH CURRICULUM TO SELECTED ARRAY IF TRUE
                this.form.curriculum_two ?
                    this.selected.push(this.curriculums.curriculum_two) :
                    this.getIndex(this.curriculums.curriculum_two);

            } else if (curriculum === "three") {
                this.form.curriculum_three = !this.form.curriculum_three;

                // PUSH CURRICULUM TO SELECTED ARRAY IF TRUE
                this.form.curriculum_three ?
                    this.selected.push(this.curriculums.curriculum_three) :
                    this.getIndex(this.curriculums.curriculum_three);

            }
        },

        // METHOD TO DELETE THE NOT CHECKED CURRICULUM FROM THE ARRAY
        getIndex($value) {
            let indexedItem = this.selected.findIndex($elm => {
                return $elm === $value;
            });
            this.selected.splice(indexedItem, 1);
        }
    }
};
</script>

<style>
</style>
