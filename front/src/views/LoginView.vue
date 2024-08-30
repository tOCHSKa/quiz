<template>
  <NavBar />
    
    <div class="container">
      <Login />
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
  
  import Login from '../components/Login.vue'
  import NavBar from '../components/NavBar.vue'
  
  </script>