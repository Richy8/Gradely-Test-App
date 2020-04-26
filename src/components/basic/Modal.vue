<template>
    <div>
        <div class="modal-overlay">
            <div class="modal-box modal-md">
                <div class="container position-relative">
                    <div class="close-btn" @click="$emit('handleModal')">
                        <b-icon icon="x" scale="1.5" shift-h="5" shift-v="-2" class="label-black"></b-icon>
                    </div>
                    <div class="row">
                        <div class="col-12 px-sm-2 px-md-4">
                           <slot name="modal-title"></slot>
                           <slot name="modal-body"></slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Modal",

    methods: {
       
    }
}
</script>

<style lang='scss' scoped>
   
</style>
