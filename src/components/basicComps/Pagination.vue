<template>
  <div>
    <!-- PAGINATION BLOCK -->
    <div class="paging-block">
      <!-- PAGINATION NAVS -->
      <div class="paging-nav">
        <router-link to>Prev</router-link>
      </div>
      <div class="paging-item paging-active">
        <router-link to>1</router-link>
      </div>
      <div class="paging-item">
        <router-link to>2</router-link>
      </div>
      <div class="paging-item">
        <router-link to>3</router-link>
      </div>
      <!-- PAGINATION NAVS -->
      <div class="paging-nav">
        <router-link to>Next</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination"
};
</script>

<style>
</style>
