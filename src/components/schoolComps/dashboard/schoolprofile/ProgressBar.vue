<template>
    <div class="progress-bar-section">
        <div class="label-range color_text">{{ range }}</div>
        <div class="d-flex justify-content-start align-items-center">
            <div class="progress mr-2">
                <div class="progress-bar brand_primary_bg" :style="'width:'+ percent +'%'" role="progressbar">
                </div>
            </div>

            <div class="percentage brand_primary">{{ percent }}%</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProgressBar",

    props: {
        range: String,
        percent: Number
    }
}
</script>

<style>

</style>
