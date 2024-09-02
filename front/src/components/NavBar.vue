<template>

<nav>
  <div class="container">
    <router-link to="/"><button>Quizz</button></router-link>
    <v-icon icon="fas fa-home" id="menu-activator" />
    <v-menu activator="#menu-activator">
      <v-list>
        <!-- Lien vers la page de profil -->
        <v-list-item>
          <router-link to="/profil">
            <v-list-item-title>Profil</v-list-item-title>
          </router-link>
        </v-list-item>

        <!-- Conditionnel pour afficher Se déconnecter/Se connecter -->
        <v-list-item v-if="isLoggedIn">
          <router-link to="/logout">
            <v-list-item-title @click="logout">Se déconnecter</v-list-item-title>
          </router-link>
        </v-list-item>

        <v-list-item v-if="!isLoggedIn">
          <router-link to="/login">
            <v-list-item-title>Se connecter</v-list-item-title>
          </router-link>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</nav>
  </template>
<script setup>

import { RouterLink } from 'vue-router';
import { RouterView } from 'vue-router';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import router from '@/router';

const store = useStore();
const isLoggedIn = computed(() => store.getters.isLoggedIn)

onMounted(() => {
  const token = localStorage.getItem('token');
  if(token) { 
    store.dispatch('checkAuth')
    router.push('/')
  } else {
    store.dispatch('logout')
  }
})

const logout = () => {
  // Déclencher l'action logout dans Vuex
  store.dispatch('logout');
}

</script>
<style scoped>

img {
    width: 50px;
    height: 50px;
}
.container {
    display: flex;
    justify-content: space-between;
    align-items:center;
    height: 50px;
    background: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(241,244,255,1) 100%);
    padding: 20px 30px;
    border-radius: 12px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);

}

nav {
  padding: 30px 30px 0 30px;
}
a, .router-link {
  text-decoration: none;
}
</style>
