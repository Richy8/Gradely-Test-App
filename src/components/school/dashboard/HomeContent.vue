<template>
<div class="live-content">
    <div class="board-title off-white-lighter">This Week in School</div>

    <div class="accordion fadeInDown" v-wow data-wow-delay="0.5s" data-wow-duration="1s">
        <div class="accordion-top rounded-5 white pointer">
            <div class="task title-black"><span>10</span> Homework due</div>
            <div class="caret"></div>
        </div>
        <div class="accordion-bottom"></div>
    </div>

    <div class="accordion fadeInDown" v-wow data-wow-delay="0.8s" data-wow-duration="1s">
        <div class="accordion-top rounded-5 white pointer">
            <div class="task title-black"><span>21</span> Homework Created</div>
            <div class="caret"></div>
        </div>
        <div class="accordion-bottom"></div>
    </div>

    <div class="accordion fadeInDown" v-wow data-wow-delay="1.1s" data-wow-duration="1s">
        <div class="accordion-top rounded-5 white pointer">
            <div class="task title-black"><span>18</span> Live Classes Scheduled</div>
            <div class="caret"></div>
        </div>
        <div class="accordion-bottom"></div>
    </div>

    <div class="accordion fadeInDown" v-wow data-wow-delay="1.4s" data-wow-duration="1s">
        <div class="accordion-top rounded-5 white pointer">
            <div class="task title-black">
                <div class="font-weight-bold mb-1">Gradely Webinar</div>
                <div class="cyan-dark">How to setup your gradely classroom</div>
            </div>
            <div class="caret"></div>
        </div>
        <div class="accordion-bottom"></div>
    </div>

</div>
</template>

<script>
export default {
    name: "HomeContent"
}
</script>

<style>

</style>
