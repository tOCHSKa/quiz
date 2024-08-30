<template>
    <div>
      <p>Compteur : {{ counter }}</p>
      <button @click="increment">Incrémenter</button>
      <button @click="reset">Réinitialiser</button>
    </div>

  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['counter'])
    },
    methods: {
      ...mapActions(['increment', 'reset'])
    }
  }



  </script>
  