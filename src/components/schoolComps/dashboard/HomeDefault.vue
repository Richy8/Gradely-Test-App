<template>
    <div class="default-content">
        <!-- EMPTY IMAGE ICON -->
        <div class="empty-img-icon w-100">
            <img src="@/assets/images/HugoListEmpty.png" alt="ListEmpty">
        </div>

        <!-- WELCOME MESSAGE -->
        <div class="welcome w-100 d-flex flex-column justify-content-center align-items-center">
            <div class="title text-center">Welcome to Gradely</div>
            <div class="msg text-center">You have no activity happening in your school at the moment. Here are a few things you can do about it.</div>
        </div>

        <!-- ACTIVITIES -->
        <ul class="activities list-unstyled">
            <li class="activity">
                <label @click="toggleCheck($event)">
                    <div class="checkmark checked"><i class="fas fa-check"></i></div>
                    <div class="text">Add and assign teachers to Class</div>
                    <input type="checkbox" checked=checked>
                </label>
            </li>

            <li class="activity">
                <label @click="toggleCheck($event)">
                    <div class="checkmark"><i class="fas fa-check"></i></div>
                    <div class="text">Ask your teachers to create homework</div>
                    <input type="checkbox">
                </label>
            </li>

            <li class="activity">
                <label @click="toggleCheck($event)">
                    <div class="checkmark"><i class="fas fa-check"></i></div>
                    <div class="text">Update your school profile</div>
                    <input type="checkbox">
                </label>
            </li>

            <li class="activity">
                <label @click="toggleCheck($event)">
                    <div class="checkmark"><i class="fas fa-check"></i></div>
                    <div class="text">Create a School wide pool</div>
                    <input type="checkbox">
                </label>
            </li>

        </ul>
    </div>
</template>

<script>
export default {
    name: "HomeDefault",

    data(){
        return{

        }
    },

    methods:{
        toggleCheck($event) {
            if ($event.target.checked) {
                $event.target.parentElement.firstElementChild.classList.add('checked');
                
            } else {
                $event.target.parentElement.firstElementChild.classList.remove('checked')
            }
        }
    }
}
</script>

<style>

</style>
