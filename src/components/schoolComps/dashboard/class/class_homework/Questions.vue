<template>
    <div class="questions">
        <div class="title color_text font-weight-bold">Questions Attempted</div>

        <QuestionItem></QuestionItem>
        <QuestionItem></QuestionItem>
        <QuestionItem></QuestionItem>
        <QuestionItem></QuestionItem>
    </div>
</template>

<script>
import QuestionItem from "@/components/schoolComps/dashboard/class/class_homework/QuestionItem";

export default {
    name: "Questions",

    components: {
        QuestionItem
    }
}
</script>

<style>

</style>
