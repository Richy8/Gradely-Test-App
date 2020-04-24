<template>
<b-container>
    <b-row>
        <b-col cols="12" lg="10" offset-lg="1" class="form-content">
            <div class="form-title title-black w-100 text-center">Your Classes</div>

            <div class="your-classes">
                <div class="accordion white rounded-5">
                    <div class="accordion-top d-flex justify-content-start align-items-start pointer" @click="toggleDropdown()">
                        <div class="caret" :class="{toggle_caret: showDropdown}"></div>
                        <div class="d-flex flex-column justify-content-start align-items-start">
                            <div class="accordion-title title-black">Junior Secondary School 1</div>
                            <div class="accordion-subtitle label-black">3 branches</div>
                        </div>
                    </div>
                    <div class="accordion-bottom d-flex justify-content-start align-items-center" :class="{toggle_dropdown:showDropdown}">

                        <div class="class-structure white rounded-5 overflow-hidden">
                            <div class="color-top"></div>
                            <div class="d-flex flex-column justify-content-start align-items-start p-2">
                                <div class="branch-name title-black mb-2">JSS1A</div>
                                <div class="class-code title-black py-1 px-2 w-100 text-center">Class Code: IMD/JSS1A</div>
                                <div class="more-icons mt-3 d-flex justify-content-start align-items-center">
                                    <b-icon icon="pencil" scale="1.2" shift-h="4" class="label-black pointer"></b-icon>
                                    <b-icon icon="trash" scale="1.2" shift-h="35" class="label-black pointer"></b-icon>
                                </div>
                            </div>
                        </div>

                        <div class="class-structure white rounded-5 overflow-hidden">
                           <div class="color-top"></div>
                           <div class="d-flex flex-column justify-content-start align-items-start p-2">
                            <div class="branch-name title-black mb-2">JSS1B</div>
                            <div class="class-code title-black py-1 px-2 w-100 text-center">Class Code: IMD/JSS1B</div>
                            <div class="more-icons mt-3 d-flex justify-content-start align-items-center">
                                <b-icon icon="pencil" scale="1.2" shift-h="4" class="label-black pointer"></b-icon>
                                <b-icon icon="trash" scale="1.2" shift-h="35" class="label-black pointer"></b-icon>
                            </div>
                           </div>
                       </div>

                        <div class="class-structure white rounded-5 overflow-hidden">
                           <div class="color-top"></div>
                           <div class="d-flex flex-column justify-content-start align-items-start p-2">
                            <div class="branch-name title-black mb-2">JSS1C</div>
                            <div class="class-code title-black py-1 px-2 w-100 text-center">Class Code: IMD/JSS1C</div>
                            <div class="more-icons mt-3 d-flex justify-content-start align-items-center">
                                <b-icon icon="pencil" scale="1.2" shift-h="4" class="label-black pointer"></b-icon>
                                <b-icon icon="trash" scale="1.2" shift-h="35" class="label-black pointer"></b-icon>
                            </div>
                           </div>
                       </div>

                    </div>
                </div>


                <!-- ADD BRANCH -->
                <div class="w-100 d-flex justify-content-start align-items-start mt-3">
                    <div class="text-half add-branch pointer" @click="addBranch()">
                        <b-iconstack font-scale="1.25">
                            <b-icon icon="circle"></b-icon>
                            <b-icon icon="plus" scale="0.7" class="orange-light"></b-icon>
                        </b-iconstack>
                        <span class="orange-light ml-3 font-14">Add another Branch</span> 
                    </div>
                </div>

            </div>

        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: "YourClasses",
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
