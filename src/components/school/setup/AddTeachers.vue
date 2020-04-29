<template>
<b-container>
    <b-row>
        <b-col cols="12" lg="8" offset-lg="2" class="form-content">
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
                        <div class="tip-link"> <a href="javascript:void(0)" class=" orange-light link-underline" @click="showModal = !showModal">Invite Teachers</a> </div>
                    </div>
                </div>

            </div>

        </b-col>
    </b-row>

    <!-- MODAL -->
    <Modal v-if=showModal @handleModal="showModal = !showModal">
        <div slot="modal-title" class="modal-title-block label-black">INVITE TEACHER</div>
        <div slot="modal-body" class="modal-body-block">
            <form action="" autocomplete="off" @submit.prevent>
                <!-- NAME -->
                <div class="form-group">
                    <label for="name" class="navy-blue">NAME</label>
                    <input type="text" v-model="form.name" class="form-control" id="name" required placeholder="The name of the teacher">
                </div>

                <!-- EMAIL -->
                <div class="form-group">
                    <label for="email" class="navy-blue">EMAIL ADDRESS</label>
                    <input type="email" v-model="form.email" class="form-control" id="email" required placeholder="Teacher’s email Address">
                </div>

                <!-- PHONE NUMBER -->
                <div class="form-group">
                    <label for="phoneNumber" class="navy-blue">PHONE NUMBER</label>
                    <input type="number" v-model="form.phone" class="form-control" id="phoneNumber" required placeholder="The phone number of the Teacher">
                </div>

                <!-- CLASS -->
                <div class="form-group">
                    <span class="select-label navy-blue">CLASS</span>
                    <div class="select-input" :class="{clicked: select_class}" @click="handleClassSelect">
                        {{form.class_type}}
                    </div>
                    <div class="select-options" :class="{selected: select_class}">
                        <div class="option label-black" v-for="(option, index) in class_options" :key=index :value="option.value" @click="onClassSelect($event)">{{option.text}}</div>
                    </div>
                </div>

                <!-- SUBJECT -->
                <div class="form-group">
                    <span class="select-label navy-blue">SUBJECT</span>
                    <div class="select-input" :class="{clicked: select_subject}" @click="handleSubjectSelect">
                        {{form.subject_type}}
                    </div>
                    <div class="select-options" :class="{selected: select_subject}">
                        <div class="option label-black" v-for="(option, index) in subject_options" :key=index :value="option.value" @click="onSubjectSelect($event)">{{option.text}}</div>
                    </div>
                </div>

                <div class="form-group d-flex flex-center">
                    <button class="btn btn-md orange-light-bg title-black rounded-30 m-0" @click="verifyData($event)">SEND INVITATION</button>
                </div>

            </form>
        </div>
    </Modal>
    <!-- MODAL -->

</b-container>
</template>

<script>
import Modal from '@/components/basic/Modal';
import {
    setTimeout
} from 'timers';

export default {
    name: "AddTeachers",
    components: {
        Modal: Modal
    },

    data() {
        return {
            showModal: false,
            select_class: false,
            select_subject: false,

            form: {
                name: "",
                email: "",
                phone: "",
                class_type: "",
                subject_type: ""
            },

            class_options: [{
                    text: "Assign to Class",
                    value: null,
                    selected: true
                },
                {
                    text: "Junior Secondary School 1",
                    value: "JSS1",
                    selected: false
                },
                {
                    text: "Junior Secondary School 2",
                    value: "JSS2",
                    selected: false
                },
                {
                    text: "Junior Secondary School 3",
                    value: "JSS3",
                    selected: false
                }
            ],

            subject_options: [{
                    text: "Assign a Subject",
                    value: null,
                    selected: true
                },
                {
                    text: "Mathematics",
                    value: "Maths",
                    selected: false
                },
                {
                    text: "English Language",
                    value: "English",
                    selected: false
                },
                {
                    text: "Agricultural Science",
                    value: "Agric",
                    selected: false
                }
            ],

            class_data: [],
            subject_data: []
        };
    },

    mounted() {
        this.classSelection();
        this.subjectSelection();
    },

    methods: {
        // TOGGLE CLASS SELECT DROPDOWN
        handleClassSelect() {
            this.select_class = !this.select_class;
        },

        // TOGGLE SUBJECT SELECT DROPDOWN
        handleSubjectSelect() {
            this.select_subject = !this.select_subject;
        },

        // HANDLE CLICK EVENT OF CLASS SELECT OPTIONS
        onClassSelect($event) {
            let content = $event.target.textContent;
            let value = $event.target.getAttribute("value");
            if (value !== null) {
                this.form.class_type = content;
                this.class_data.length = 0;
                this.class_data.push({
                    class: value
                });
                this.handleClassSelect();
            }
        },

        // HANDLE CLICK EVENT OF SUBJECT SELECT OPTIONS
        onSubjectSelect($event) {
            let content = $event.target.textContent;
            let value = $event.target.getAttribute("value");
            if (value !== null) {
                this.form.subject_type = content;
                this.subject_data.length = 0;
                this.subject_data.push({
                    subject: value
                });
                this.handleSubjectSelect();
            }
        },

        // GET DEFINED CLASS SELECTION ON LOAD
        classSelection() {
            let class_option = this.class_options.filter(item => item.selected === true);
            this.form.class_type = class_option[0].text;
            this.class_data.length = 0;
            this.class_data.push({
                class: class_option[0].value
            });
        },

        // GET DEFINED SUBJECT SELECTION ON LOAD
        subjectSelection() {
            let subject_option = this.subject_options.filter(item => item.selected === true);
            this.form.subject_type = subject_option[0].text;
            this.subject_data.length = 0;
            this.subject_data.push({
                subject: subject_option[0].value
            });
        },

        verifyData($event) {
            if (this.form.name != "" && this.form.email != "" && this.form.phone != "") {

                if (this.class_data[0].class !== null && this.subject_data[0].subject !== null) {
                    $event.target.innerHTML = 'SENDING <i class="fas fa-spinner fa-spin ml-1"></i>';

                    setTimeout(() => {
                        $event.target.innerHTML = 'SENT <i class="fas fa-check font-weight-600 ml-1"></i>';
                    }, 3000)

                    setTimeout(() => {
                        this.showModal = !this.showModal;
                    }, 5000)

                } else {
                    console.log('Null Found');
                }
            }
        }
    }
};
</script>

<style>
</style>
