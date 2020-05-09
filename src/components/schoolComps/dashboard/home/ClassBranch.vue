<template>
<div class="class-branch-section">
    <!-- BRANCH CARD -->
    <div class="branch-card">
        <!-- BRANCH CARD HEADER -->
        <div class="branch-card-header">
            <!-- BRANCH CARD TITLE -->
            <div class="branch-card-title">{{class_branch}}</div>
            <div class="branch-card-option">
                <div class="cust_icon h-ellipsis-icon icon_sm_mid pointer"></div>
            </div>
        </div>

        <!-- BRANCH CARD CLASS CODE -->
        <div class="branch-card-code">
            Class Code:
            <span class="font-weight-bold brand_black">{{class_code}}</span>
        </div>

        <!-- BRANCH CARD ICON ROW -->
        <div class="branch-card-icon-row">
            <!-- CALL OUT ICON LINK -->
            <router-link to="/" @mouseenter.native.self="iconHover($event, 'callout')" @mouseleave.native.self="iconHover($event, 'callout')">
                <div class="cust_icon icon_sm_22 pointer callout_icon"></div>
            </router-link>
            <!-- LIBRARY ICON LINK -->
            <router-link to="/" @mouseenter.native.self="iconHover($event, 'library')" @mouseleave.native.self="iconHover($event, 'library')">
                <div class="cust_icon icon_sm_22 pointer library_icon"></div>
            </router-link>
            <!-- PIE CHART ICON LINK -->
            <router-link to="/" @mouseenter.native.self="iconHover($event, 'piechart')" @mouseleave.native.self="iconHover($event, 'piechart')">
                <div class="cust_icon icon_sm_22 pointer pie_chart_icon"></div>
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "ClassBranch",

    props: {
        class_branch: String,
        class_code: String
    },

    data() {
        return {};
    },

    methods: {
        iconHover(event, icon) {
            if (icon === "callout") {
                event.target.firstElementChild.classList.contains("callout_accent_icon") ?
                    event.target.firstElementChild.classList.remove("callout_accent_icon") :
                    event.target.firstElementChild.classList.add("callout_accent_icon");
            } else if (icon === "library") {
                event.target.firstElementChild.classList.contains("library_accent_icon") ?
                    event.target.firstElementChild.classList.remove("library_accent_icon") :
                    event.target.firstElementChild.classList.add("library_accent_icon");
            } else if (icon === "piechart") {
                event.target.firstElementChild.classList.contains("pie_chart_accent_icon") ?
                    event.target.firstElementChild.classList.remove("pie_chart_accent_icon") :
                    event.target.firstElementChild.classList.add("pie_chart_accent_icon");
            }
        }
    }
};
</script>

<style>
</style>
