<template>
    <div>
        <Navbar/>
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from "@/components/schoolComps/dashboard/Navbar.vue";

export default {
    name: "DashboardView",
    components: {Navbar}
}
</script>

<style>

</style>
