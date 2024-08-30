<template>
  <!-- <div class="grid-container"> -->
    <!-- Navigation bar always at the top -->
      <!-- <NavBar /> -->


    <!-- Main content centered in the middle of the page -->
    <!-- <main class="content"> -->
      <router-view />
    <!-- </main> -->

    <!-- Footer at the bottom -->
    <!-- <footer class="footer">
      <Footer />
    </footer> -->
  <!-- </div> -->
</template> 


<script setup>

import { useStore } from 'vuex';
import { computed, onMounted, watch } from 'vue';
import router from './router';
import NavBar from './components/NavBar.vue';
const store = useStore();

// Liaison de l'état user de Vuex à une propriété calculée
const user = computed(() => store.state.user);
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



// watch(user, (newUser) => {
//   if(user) { 
//     console.log(newUser)
//     console.log(user)
//   }
// })



</script>


<style lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.grid-container {
  display: grid;
  grid-template-rows: auto 1fr auto;

}

.content {
  grid-row: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.footer {
  grid-row: 3;
}

</style>