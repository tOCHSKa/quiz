<template>
<NavBar />
<div class="layout">
  <Sidebar class="sidebar"/>
  <Stats class="stats"/>
  <div class="rightbar">
    <Badge />
    <CreateQuiz/>
  </div>
  
</div>


<!-- <router-view /> -->
</template>

<script setup>

import Sidebar from '@/components/Sidebar.vue';
import NavBar from '@/components/NavBar.vue';
import Stats from '@/components/Stats.vue';
import Badge from '@/components/Badge.vue';
import CreateQuiz from '@/components/CreateQuiz.vue';
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
  flex: 2 1 45%; /* Occupe 60% de la largeur, c'est la partie principale */
  min-width: 300px; /* Assurez-vous que le stats ne devienne pas trop petit */
}

.rightbar {
  flex: 1 1 35%; /* Occupe 20% de la largeur */
  min-width: 200px; /* Assurez-vous que le rightbar ne devienne pas trop petit */
}

.rightbar-quiz {
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-right: 30px;
  background-color:aqua;
  height: 100px;
  border-radius: 12px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
}

</style>