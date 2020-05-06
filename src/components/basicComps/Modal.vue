<template>
<div>
    <div class="modal-overlay">
        <div class="modal-box modal-md">
            <div class="container">
                <div class="row">
                    <div class="col-12 px-sm-2 px-md-4 d-flex justify-content-between align-items-center">
                        <div class="font-15-5 font-weight-800">
                            <slot name="modal-title"></slot>
                        </div>
                        <div class="close-btn"></div>
                    </div>

                    <div class="col-12 px-sm-2 px-md-4 mt-4">
                        <slot name="modal-body"></slot>
                    </div>

                    <div class="col-12 px-sm-2 px-md-4 mt-1">
                        <slot name="modal-footer"></slot>
                    </div>

                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Modal"
}
</script>

<style lang='scss' scoped>

</style>
