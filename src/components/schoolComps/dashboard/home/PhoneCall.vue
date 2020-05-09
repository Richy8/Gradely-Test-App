<template>
    <div class="phone-section d-flex justify-content-end align-items-center">

        <div class="dropdown-btn">
            <div class="part-one font-weight-bold select-none">Request a</div>
            <div class="part-two d-flex pointer select-none" @click="showDropdown">
                {{ dropdown_item }}
                <div class="dropdown-btn-toggler icon_xxs ml-2"></div>
            </div>

            <!-- DROP DOWN MENU -->
            <div class="dropdown-btn-menu" v-if="toggle">
                <ul class="list-unstyled">
                    <li> <a href="#" @click="selected('Call')">Call</a> </li>
                    <li> <a href="#" @click="selected('Text')">Text Message</a> </li>
                    <li> <a href="#" @click="selected('Visit')">Visitation</a> </li>
                </ul>
            </div>
        </div>

        <router-link to="/" @mouseenter.native.self="btnHover($event)" @mouseleave.native.self="btnHover($event)">
            <div class="avatar avatar_md brand_accent_bg btn-accent">
                <div class="cust_icon avatar-img icon_arrow_right icon_xs"></div>
            </div>
        </router-link>

    </div>
</template>

<script>
export default {
    name: "PhoneCall",

    data(){
        return{
            dropdown_item: "Call",
            toggle: false
        }
    },

    methods: {
        showDropdown(){
            this.toggle = !this.toggle;
        },

        selected(val){
            this.dropdown_item = val;
            this.toggle = !this.toggle;
        },

        btnHover(event) {
            (event.target.firstElementChild.firstElementChild.classList.contains('icon_arrow_right_white')) ?  event.target.firstElementChild.firstElementChild.classList.remove('icon_arrow_right_white') : event.target.firstElementChild.firstElementChild.classList.add('icon_arrow_right_white');
        }
    }
}
</script>

<style>

</style>
