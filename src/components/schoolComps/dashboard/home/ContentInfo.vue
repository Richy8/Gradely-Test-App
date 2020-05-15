<template>
<div>
    <!-- CONTENT TITLE -->
    <div class="content-title font-weight-bold color_white">This Week in school</div>
    <!-- SMALL CARDS -->
    <router-link to="/">
        <div class="activity-card">
            <div class="card-row">
                <div class="title"> <span class="font-weight-bold">10</span> Homework Due</div>
                <div class="cust_icon caret_right_icon icon_sm_mid"></div>
            </div>
        </div>
    </router-link>

    <router-link to="/">
        <div class="activity-card">
            <div class="card-row">
                <div class="title"> <span class="font-weight-bold">21</span> Homework Created</div>
                <div class="cust_icon caret_right_icon icon_sm_mid"></div>
            </div>
        </div>
    </router-link>

    <router-link to="/">
        <div class="activity-card">
            <div class="card-row">
                <div class="title"> <span class="font-weight-bold">18</span> Live Classes Scheduled</div>
                <div class="cust_icon caret_right_icon icon_sm_mid"></div>
            </div>
        </div>
    </router-link>

    <router-link to="/">
        <div class="activity-card">
            <div class="card-row">
                <div class="title"> <span class="font-weight-bold">Gradely Webinar</span> </div>
                <div class="cust_icon caret_right_icon icon_sm_mid"></div>
            </div>
            <div class="card-meta">How to setup your gradely classroom</div>
        </div>
    </router-link>

    <!-- MORE ICON -->
    <router-link to="/school/dashboard/calendar">
        <div class="more d-flex justify-content-start align-items-center nowrap">
            <div class="cust_icon calendar_accent_icon icon_sm_mid"></div>
            <div class="title color_white">See All</div>
        </div>
    </router-link>

</div>
</template>

<script>
export default {
    name: "ContentInfo"
}
</script>

<style>

</style>
