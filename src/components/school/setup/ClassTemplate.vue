<template>
<b-container>
    <b-row>
        <b-col cols="12" lg="8" offset-lg="2" class="form-content">
            <div class="form-title title-black w-100 text-center">Create a Class Template</div>
            <p class="text-center title-black">Set the class names and branches for a single class and our system will use that information to generate your other classes.</p>
           
            <div class="form-group w-100 d-flex justify-content-start align-items-start class-template">
                <div class="label-half label-black">
                    CLASS LEVEL
                </div>
                <div class="text-half navy-blue-light">Junior Secondary School 1</div>
            </div>

            <div class="form-group w-100 d-flex justify-content-start align-items-start class-template mt-4">
                <div class="label-half label-black mt-2">
                    CLASS BRANCHES
                </div>
                <div class="text-half input-half">
                    <input type="text" v-model="form.branch_a" class="form-control" placeholder="E.g. A">
                    <div class="help-text label-black">Class seen: JSS1A</div>
                </div>
            </div>

            <div class="w-100 d-flex justify-content-start align-items-start class-template mt-3">
                <div class="label-half mt-2"></div>
                <div class="text-half input-half">
                    <input type="text" v-model="form.branch_b" class="form-control" placeholder="E.g. B">
                    <div class="help-text label-black">Class seen: JSS1B</div>
                </div>
            </div>

            <div class="w-100 d-flex justify-content-start align-items-start class-template mt-3" v-for="(branch, index) in new_branch" :key=index>
                <div class="label-half mt-2"></div>
                <div class="text-half input-half">
                    <input type="text" class="form-control" placeholder="Class Branch" @input="logData($event, index, branch.title)">
                </div>
            </div>

            <div class="w-100 d-flex justify-content-start align-items-start class-template mt-3">
                <div class="label-half mt-2"></div>
                <div class="text-half add-branch pointer" @click="addBranch()">
                    <b-iconstack font-scale="1.45">
                        <b-icon icon="circle"></b-icon>
                        <b-icon icon="plus" scale="0.8" class="orange-light"></b-icon>
                    </b-iconstack>
                    <span class="orange-light ml-3">Add another Branch</span> 
                </div>
            </div>

        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: "ClassTemplate",
    data() {
        return {
            form:{
                branch_a: "",
                branch_b: ""
            },
            branches: 0,
            new_branch: []
        };
    },

    methods: {
        addBranch() {
            this.branches = this.branches+1;
            let branch_key = `branch_${this.branches-1}`;
            let branch_obj = {};
            branch_obj[branch_key] = "";
            branch_obj.title = `branch_${this.branches-1}`;
            this.new_branch.push(branch_obj);
        },

        logData($event, index, title){
            this.new_branch[index][title] = $event.target.value;
        }
    }
};
</script>

<style>
</style>
