<template>
    <div>
        <Navbar/>
        <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import Navbar from "@/components/schoolComps/dashboard/Navbar.vue";

export default {
    name: "DashboardView",
    components: {Navbar}
}
</script>

<style lang="scss" scoped>
    .slide-fade-enter-active {
        transition: all .2s ease-in;
    }
    .slide-fade-leave-active {
        transition: all .4s ease-out;   
    }
    .slide-fade-enter,
    .slide-fade-leave-to {
        transform: translateX(3px);
        opacity: 0;
    }
</style>
