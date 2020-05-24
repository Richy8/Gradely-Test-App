<template>
    <div class="mt-3">
        <div class="row empty-child-row position-relative">
            <!-- EMPTY CARD -->
            <div class="col-6 col-md-4 col-lg-3">
                <ChildDefaultCard></ChildDefaultCard>
            </div>

            <div class="col-6 col-md-4 col-lg-3">
                <ChildDefaultCard></ChildDefaultCard>
            </div>

            <div class="col-6 col-md-4 col-lg-3">
                <ChildDefaultCard></ChildDefaultCard>
            </div>

            <div class="col-6 col-md-4 col-lg-3">
                <ChildDefaultCard></ChildDefaultCard>
            </div>

            <div class="col-6 col-md-4 col-lg-3 d-none d-md-block">
                <ChildDefaultCard></ChildDefaultCard>
            </div>

            <div class="col-6 col-md-4 col-lg-3 d-none d-md-block">
                <ChildDefaultCard></ChildDefaultCard>
            </div>

            <div class="col-6 col-md-4 col-lg-3 d-none d-md-block">
                <ChildDefaultCard></ChildDefaultCard>
            </div>

            <div class="col-6 col-md-4 col-lg-3 d-none d-md-block">
                <ChildDefaultCard></ChildDefaultCard>
            </div>

            <div class="col-6 col-md-4 col-lg-3 d-none d-md-block">
                <ChildDefaultCard></ChildDefaultCard>
            </div>

            <div class="col-6 col-md-4 col-lg-3 d-none d-lg-block">
                <ChildDefaultCard></ChildDefaultCard>
            </div>

            <div class="col-6 col-md-4 col-lg-3 d-none d-lg-block">
                <ChildDefaultCard></ChildDefaultCard>
            </div>

            <div class="col-6 col-md-4 col-lg-3 d-none d-lg-block">
                <ChildDefaultCard></ChildDefaultCard>
            </div>
            <!-- EMPTY CARD -->

            <!-- ADD STUDENTS SECTION -->
            <div class="add-member-default d-flex flex-column flex-center">
                <!-- EMPTY IMAGE -->
                <div class="avatar avatar_xxl">
                    <img src="@/assets/images/EmptyStudent.png" alt="" class="avatar-img">
                </div>

                <!-- INFO TEXT -->
                <div class="info-text color_text font-14 text-center">There are currently no students in this class</div>

                <!-- CTA BUTTON -->
                <router-link to="/school/dashboard/add_students" class="btn btn-md btn-accent">ADD STUDENTS</router-link>
            </div>
            <!-- ADD STUDENTS SECTION -->

        </div>
    </div>
</template>

<script>
import ChildDefaultCard from "@/components/schoolComps/dashboard/class/class_members/ChildDefaultCard";

export default {
    name: "ChildDefaultInfo",

    components: {ChildDefaultCard}
}
</script>

<style>

</style>
