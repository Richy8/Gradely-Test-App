<template>
  <div>
    <div class="recipient-card">
      <RecipientCard fullname="Kayode Ojo"></RecipientCard>
      <RecipientCard fullname="Efemena Elvis"></RecipientCard>
      <RecipientCard fullname="Micheal Jonah"></RecipientCard>
      <RecipientCard fullname="Ruth Okocha"></RecipientCard>
    </div>
  </div>
</template>

<script>
import RecipientCard from "@/components/globalComps/MessageComps/RecipientCard";

export default {
  name: "TeacherList",

  components: {
    RecipientCard
  }
};
</script>

<style>
</style>