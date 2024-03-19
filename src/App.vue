<script setup>
import headerr from './components/header.vue'
import footerr from './components/footer.vue'

</script>

<template>
  <main>
    <headerr/>
    <router-view></router-view>
    <footerr/>
  </main>
</template>

<style scoped>

</style>
