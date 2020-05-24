<template>
    <div>
        <div class="help-block-two">
            <div class="title color_text font-weight-bold">Help your students here</div>
            <div class="meta color_ash">Click on a topic to reveal the questions</div>

            <Accordion></Accordion>
            <Accordion></Accordion>
            <Accordion></Accordion>
        </div>
    </div>
</template>

<script>
import Accordion from "@/components/schoolComps/dashboard/class/class_homework/Accordion";

export default {
    name: "HelpBlockTwo",

    components: {
        Accordion
    }
}
</script>

<style>

</style>
