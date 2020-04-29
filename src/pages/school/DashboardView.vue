<template>
    <div>
        <Navbar/>
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from "@/components/school/dashboard/Navbar";

export default {
    name: "DashboardView",
    components: {
        Navbar
    }
}
</script>

<style>

</style>
