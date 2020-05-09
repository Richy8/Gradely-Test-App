<template>
<div>
    <vue-headful title="School Dashboard | Home" description="Description goes here" />
    <div class="school-home-section">

        <div class="bg-color-setter off_white_bg">
            <!-- CLASS BANNER -->
            <div class="class-banner w-100">
                <div class="banner-overlay box-overlay color_mid_blue_bg">
                    <img src="@/assets/images/ClassDoodle.png" alt="ClassDoodle" class="img img-overlay">
                </div>

                <!-- SCHOOL INFO DETAIL -->
                <div class="school-detail-info white-text">
                    <!-- SCHOOL AVATAR -->
                    <div class="avatar avatar_xl rounded-10">
                        <div class="avatar-text white font-weight-bold">C</div>
                    </div>
                    <!-- SCHOOL INFO -->
                    <div class="school-info d-flex flex-column justify-content-end align-items-start">
                        <div class="school-name font-weight-bold color_white">Chrisland Intl. College</div>
                        <div class="school-location brand_inverse_light">Lagos, Nigeria</div>
                        <div class="profile-update-cta">
                            <router-link to="/" class="">Update school profile</router-link>
                        </div>
                    </div>
                </div>

            </div>

            <!-- SCHOOL HOME CONTENT -->
            <div class="container">
                <div class="row mb-5 mb-sm-4">
                    <!-- LEFT CONTENT -->
                    <div class="left-content color_mid_blue_bg rounded-5">
                        <transition mode="out-in">
                            <component :is="view"></component>
                        </transition>
                    </div>

                    <!-- RIGHT CONTENT -->
                    <div class="right-content">
                        <div class="title-row d-flex justify-content-between align-items-center nowrap">
                            <div class="header-title font-weight-bold color_text">My Classes</div>
                            <div>
                                <!-- PHONE CALL COMPONENT -->
                                <PhoneCall/>
                                <!-- PHONE CALL COMPONENT -->
                            </div>
                        </div>

                        <!-- CLASS STRUCTURE COMPONENT -->
                        <ClassStructure class_year="Year 7" arms="1 Arm" />
                        <ClassStructure class_year="Year 8" arms="3 Arm"/>
                        <ClassStructure class_year="Year 9" arms="4 Arm"/>
                        <!-- CLASS STRUCTURE COMPONENT -->

                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script>
import DefaultInfo from "@/components/schoolComps/dashboard/home/DefaultInfo";
import ContentInfo from "@/components/schoolComps/dashboard/home/ContentInfo";
import PhoneCall from "@/components/schoolComps/dashboard/home/PhoneCall";
import ClassStructure from "@/components/schoolComps/dashboard/home/ClassStructure";

export default {
    name: "Home",
    components: {
        DefaultInfo,
        ContentInfo,
        PhoneCall,
        ClassStructure
    },
    data() {
        return {
            view: ContentInfo
        }
    }
}
</script>

<style>

</style>
