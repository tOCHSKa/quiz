<template>
  <NavBar />
    <div class="container">
      <Subscribe />
    </div>
  
    </template>
    
    <style scoped>
  
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 90vh;
    }
    </style>
    
    <script setup>
  
  import Subscribe from '../components/Subscribe.vue'
  import NavBar from '@/components/NavBar.vue';
  
  </script>