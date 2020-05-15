<template>
    <div>
        <!-- EMPTY LOGO -->
        <div class="empty-logo">
            <img src="@/assets/images/HugoListEmpty.png" alt="HugoListEmpty" class="hugo-img">
        </div>

        <!-- WELCOME SECTION -->
        <div class="welcome-section w-100 d-flex flex-column justify-content-start align-items-center">
            <div class="title font-weight-bold brand_inverse_light text-center">Welcome to Gradely</div>
            <div class="info border_grey_light text-center">You have no activity happening in your school at the moment. Here are a few things you can do about it.</div>
        </div>

        <!-- ACTIVITIES -->
        <div class="activities">
            <div class="activity pointer w-100" @click="$emit('toggleTeacherModal')">
                <div class="done"></div>
                <div class="label-text">Add Teachers</div>
            </div>

            <router-link to="/" class="activity">
                <div class="undone"></div>
                <div class="label-text">Invite Parents</div>
            </router-link>

            <router-link to="/" class="activity">
                <div class="undone"></div>
                <div class="label-text">Update your school profile</div>
            </router-link>

            <router-link to="/" class="activity">
                <div class="undone"></div>
                <div class="label-text">Setup your curriculum</div>
            </router-link>
        </div>

    </div>
</template>

<script>
export default {
    name: "DefaultInfo",
    data(){
        return{
          
        }
    },

    methods:{
     
    }
}
</script>

<style>

</style>
