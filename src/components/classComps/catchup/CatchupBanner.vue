<template>
  <div>
    <div class="catchup-banner w-100">
      <img v-lazy="localImg('CatchupBg.png')" class="w-100 h-auto" alt>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatchupBanner"
};
</script>

<style lang="scss">
.catchup-banner {
  position: relative;
  margin-bottom: 10px;
}
</style>
