<template>
<NavBar />
<div class="layout">
  <Sidebar class="sidebar"/>
  <div class="stats">
    <Stats />
    <Modal 
    :quizz="quizzData"
    :previousPage="previousPage"
    :nextPage="nextPage"
    :maxReponse="4"
    @prev="goToPreviousPage"
    @next="goToNextPage"
    @submit="handleSubmit"/>
  </div>

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
import Modal from '@/components/Modal.vue';

import { ref } from 'vue'
const quizzData = ref({
  nom: '',
  theme: '',
  reponses: [],  // Ajouter une propriété pour stocker les réponses
  selectedAnswer: ''  // Ajouter une propriété pour stocker la réponse sélectionnée
})


const previousPage = ref(0)
const nextPage = ref(1)

const goToPreviousPage = () => {
  console.log('Précédent')
}

const goToNextPage = () => {
  console.log('Suivant')
}

const handleSubmit = (submittedData) => {
  quizzData.value.nom = submittedData.nom;
  quizzData.value.theme = submittedData.theme;
  quizzData.value.question = submittedData.question;
  quizzData.value.reponses = submittedData.reponses;
  quizzData.value.selectedAnswer = submittedData.selectedAnswer;

  console.log('Quiz Data:', quizzData.value);
}

</script>

<style scoped>

.layout {
  display: flex;
}
.sidebar {
  flex: 1 1 20%; /* Occupe 20% de la largeur, peut grandir ou rétrécir */
  min-width: 200px; /* Assurez-vous que le sidebar ne devienne pas trop petit */
  padding: 30px;
}

.stats {
  flex: 2 1 45%; /* Occupe 60% de la largeur, c'est la partie principale */
  min-width: 300px; /* Assurez-vous que le stats ne devienne pas trop petit */
  display: flex;
  flex-direction: column;
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