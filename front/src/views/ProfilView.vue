<template>
<NavBar />
<div class="layout">
  <Sidebar class="sidebar"/>
  <Stats class="stats"/>
  <Rightbar class="rightbar"/>
</div>


<!-- <router-view /> -->
</template>

<script setup>

import Sidebar from '@/components/Sidebar.vue';
import NavBar from '@/components/NavBar.vue';
import Stats from '@/components/Stats.vue';
import Rightbar from '@/components/Rightbar.vue';
</script>

<style scoped>

.layout {
  display: flex;
}
.sidebar {
  flex: 1 1 20%; /* Occupe 20% de la largeur, peut grandir ou rétrécir */
  min-width: 200px; /* Assurez-vous que le sidebar ne devienne pas trop petit */
}

.stats {
  flex: 2 1 50%; /* Occupe 60% de la largeur, c'est la partie principale */
  min-width: 300px; /* Assurez-vous que le stats ne devienne pas trop petit */
}

.rightbar {
  flex: 1 1 30%; /* Occupe 20% de la largeur */
  min-width: 200px; /* Assurez-vous que le rightbar ne devienne pas trop petit */
}
</style>