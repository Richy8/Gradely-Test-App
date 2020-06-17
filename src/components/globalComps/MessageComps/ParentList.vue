<template>
  <div>
    <div class="recipient-card">
      <RecipientCard fullname="Robius Hagrid"></RecipientCard>
      <RecipientCard fullname="Ayanwu Emeka"></RecipientCard>
      <RecipientCard fullname="Princewill Okoro"></RecipientCard>
      <RecipientCard fullname="Stephen James"></RecipientCard>
      <RecipientCard fullname="Stephen James"></RecipientCard>
    </div>
  </div>
</template>

<script>
import RecipientCard from "@/components/globalComps/MessageComps/RecipientCard";

export default {
  name: "ParentList",

  components: {
    RecipientCard
  }
};
</script>

<style>
</style>
