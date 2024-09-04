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
    :show="show" 
    @close="hideModal"
    @prev="goToPreviousPage"
    @next="goToNextPage"
    @submit="handleSubmit"/>
  </div>

  <div class="rightbar">
    <Badge />
    <CreateQuiz 
    @show="showModal"/>
  </div>
  
</div>

</template>

<script setup>

import Sidebar from '@/components/Sidebar.vue';
import NavBar from '@/components/NavBar.vue';
import Stats from '@/components/Stats.vue';
import Badge from '@/components/Badge.vue';
import CreateQuiz from '@/components/CreateQuiz.vue';
import Modal from '@/components/Modal.vue';

import { ref } from 'vue'


const previousPage = ref(0)
const nextPage = ref(1)
const show = ref(false)
const quizzData = ref({})

const goToPreviousPage = () => {
  console.log('Précédent')
}

const goToNextPage = (submittedData) => {
  console.log(quizzData.value);

}

const showModal = () => {
  show.value = true; // Affiche le modal
}

const hideModal = () => {
  show.value = false; // Cache le modal
}


const handleSubmit = (submittedData) => {

  // quizzData.value.nom = submittedData.nom;
  // console.log(quizzData.value.nom)
  // quizzData.value.theme = submittedData.theme;
  // console.log(quizzData.value.theme)
  //   // Initialiser le tableau `questions` s'il n'existe pas encore
  //   if (!quizzData.value.questions) {
  //   quizzData.value.questions = [];
  }

  // Ajouter les questions existantes
  // quizzData.value.questions = submittedData.questions.map(question => ({
  //   question: question.question,
  //   reponses: question.reponses,
  //   bonneReponse: question.bonneReponse
  // }));

  // // Afficher le tableau des questions après ajout
  // console.log(quizzData.value.questions);


  // fetch('http://localhost:3000/api/profil/add', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(quizzData.value),
  //       })
  //         .then((response) => response.json())
  //         .then((data) => {

  //           console.log(data)
  //         // Réinitialiser les données du quiz
  //         quizzData.value.nom = '';
  //         quizzData.value.theme = '';
  //         quizzData.value.reponses = [];
  //         quizzData.value.question = '';
  //         quizzData.value.bonneReponse = '';
  //         hideModal();

  //         })
  //         .catch((error) => {
  //           console.error('Error:', error);
  //         });
  //     };

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