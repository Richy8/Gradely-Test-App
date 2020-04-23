<template>
<b-container>
    <b-row>
        <b-col cols="12" md="8" offset-md="2" class="form-content">
            <div class="form-title title-black w-100 text-center">Setup your classes</div>

            <div class="classes">
                <!-- SCHOOL TYPE -->
                <div class="form-group">
                    <label for="schoolType" class="label-black">SCHOOL TYPE</label>
                    <div class="select position-relative rounded-5" :class="{selected: select_input}" @click="handleSelect()">{{ form.school_type }}</div>
                    <div class="option rounded-5" :class="{clicked: select_input}">
                        <div class="option-text" v-for="(option, index) in options" :key="index" :value="option.value" @click="onSelect($event)">{{ option.text }}</div>
                    </div>
                </div>

                <div class="form-group">
                    <label for="namingStyle" class="label-black">NAMING STYLE</label>
                    <div class="naming-style d-flex flex-column justify-content-center align-items-center px-2">
                        <!-- STYLE ONE -->
                        <div class="style d-flex justify-content-start align-items-start rounded-5 w-100" :class="{style_selected: form.grade_style}" @click="selectNaming('one')">
                            <div class="radiobtn">
                                <div class="radio-input position-relative" :class="{style_checked: form.grade_style}"></div>
                            </div>
                            <div class="style-content">
                                <div class="style-title title-black">Year / Grade</div>
                                <div class="style-text label-black">Use the K12 naming style of Grade 1 - Year 12</div>
                            </div>
                        </div>

                        <!-- STYLE TWO -->
                        <div class="style d-flex justify-content-start align-items-start rounded-5 w-100" :class="{style_selected: form.local_style}" @click="selectNaming('two')">
                            <div class="radiobtn">
                                <div class="radio-input position-relative" :class="{style_checked: form.local_style}"></div>
                            </div>
                            <div class="style-content">
                                <div class="style-title title-black">Local Naming style</div>
                                <div class="style-text label-black">Use the defualt Nigerian class naming style of nursery, primary, Junior and Senior secondary class</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-group" style="margin-bottom: -0.8125rem">
                    <label for="schoolType" class="label-black">CLASS STRUCTURE</label>

                    <!-- STRUCTURE ONE -->
                    <div class="d-flex justify-content-start align-items-start">
                        <div class="structure d-flex justify-content-start align-items-start pointer w-auto" @click="selectStructure('one')">
                            <div class="radiobtn">
                                <div class="radio-input position-relative" :class="{style_checked: form.single}"></div>
                            </div>
                            <div class="structure-text title-black">Single Branch per class level</div>
                        </div>
                        <div class="ml-2" style="margin-top:-2px;">
                            <b-icon icon="question-circle" class="pointer cyan-text"></b-icon>
                        </div>
                    </div>

                    <!-- STRUCTURE TWO -->
                    <div class="d-flex justify-content-start align-items-start">
                        <div class="structure d-flex justify-content-start align-items-start pointer w-auto" @click="selectStructure('two')">
                            <div class="radiobtn">
                                <div class="radio-input position-relative" :class="{style_checked: form.multiple}"></div>
                            </div>
                            <div class="structure-text title-black">Multiple Branch per class level</div>
                        </div>
                        <div class="ml-2" style="margin-top:-2px;">
                            <b-icon icon="question-circle" class="pointer cyan-text"></b-icon>
                        </div>
                    </div>
                </div>
            </div>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: "Classes",
    data() {
        return {
            form: {
                school_type: "",
                school_value: "",
                grade_style: false,
                local_style: false,
                single: false,
                multiple: false
            },
            // SELECT FORM OPTIONS
            options: [{
                text: "Secondary & Primary School",
                value: "Secondary & Primary",
                selected: true
            }],
            select_input: false,
            school_type_data: [],
            naming_style_data: [],
            class_structure_data: []
        };
    },

    mounted() {
        this.checkSelection();
    },

    methods: {
        // TOGGLE SELECT DROPDOWN
        handleSelect() {
            this.select_input = !this.select_input;
        },

        // HANDLE CLICK EVENT OF SELECT OPTIONS
        onSelect($event) {
            let content = $event.target.textContent;
            let value = $event.target.getAttribute("value");
            if (value !== null) {
                this.form.school_type = content;
                this.form.school_value = value;
                this.school_type_data.length = 0;
                this.school_type_data.push({
                    school_type: value
                });
                this.handleSelect();
                console.log(this.school_type_data[0]);
            }
        },

        // GET DEFINED SELECTION ON LOAD
        checkSelection() {
            let school_option = this.options.filter(item => item.selected === true);
            this.form.school_type = school_option[0].text;
            this.form.school_value = school_option[0].value;
            this.school_type_data.length = 0;
            this.school_type_data.push({
                school_type: this.form.school_value
            });
        },

        // HANDLE SELECTION OF NAMING STYLE
        selectNaming(value) {
            if (value === "one") {
                this.form.local_style = false;
                this.form.grade_style = !this.form.grade_style;
                (this.form.grade_style) ? this.updateNaming(value) : this.naming_style_data.length = 0;

            } else if (value === "two") {
                this.form.grade_style = false;
                this.form.local_style = !this.form.local_style;
                (this.form.local_style) ? this.updateNaming(value) : this.naming_style_data.length = 0;
            }
        },

        // CHECK THE NAMING STYLE SELECTION AND PASS THE DATA TO THE ARRAY
        updateNaming(value) {
            if (value === "one") {
                this.naming_style_data.length = 0;
                this.naming_style_data.push("grade-style");

            } else if (value === "two") {
                this.naming_style_data.length = 0;
                this.naming_style_data.push("local-style");
            }
        },

        // HANDLE SELECTION OF CLASS STRUCTURE
        selectStructure(value) {
            if (value === "one") {
                this.form.multiple = false;
                this.form.single = !this.form.single;
                (this.form.single) ? this.updateStructure(value) : this.class_structure_data.length = 0;

            } else if (value === "two") {
                this.form.single = false;
                this.form.multiple = !this.form.multiple;
                (this.form.multiple) ? this.updateStructure(value) : this.class_structure_data.length = 0;
            }
        },

        // CHECK THE CLASS STRUCTURE SELECTION AND PASS THE DATA TO THE ARRAY
        updateStructure(value) {
            if (value === "one") {
                this.class_structure_data.length = 0;
                this.class_structure_data.push("single-branch");
                
            } else if (value === "two") {
                this.class_structure_data.length = 0;
                this.class_structure_data.push("multiple-branch");
            }
        }
    }
};
</script>

<style>
</style>
