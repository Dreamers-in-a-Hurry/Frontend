<script setup>

import PremiumConfirm from "@/components/premium/premium-confirm/premium-confirm.component.vue";
import TheToolbar from "@/components/shared/the-toolbar.component.vue";
</script>

<template>
  <main class="main">
    <the-toolbar/>
    <premium-confirm/>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: space-around;
  width: 85vw;
  max-width: 1050px;
  min-height: 100vh;
  padding: .6em 1.2em;
  margin: auto;
  background-color: #f3f3f3;
}
@media (max-width: 600px) {
  .main {
    width: 100vw;
  }
}
</style>