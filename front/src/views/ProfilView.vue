<template>
<NavBar />
<div class="layout">
  <Sidebar />
  <Stats />
</div>


<!-- <router-view /> -->
</template>

<script setup>

import Sidebar from '@/components/Sidebar.vue';
import NavBar from '@/components/NavBar.vue';
import Stats from '@/components/Stats.vue';
</script>

<style scoped>

.layout {
  display: flex;
}

</style>