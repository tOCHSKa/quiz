<template>
  <div v-if="show" class="container modal">
    <div class="modal-close">
      <button @click="emitClose">Fermé</button>
    </div>
    <div class="modal-title">
      <h2>Ajout de Quiz</h2>
    </div>
    <div class="modal-content">
      <form class="modal-form" @submit.prevent="emitSubmit">
        <v-text-field
          v-model="quizz.nom"
          :rules="rules"
          label="Nom du Quiz"
          variant="solo-filled">
        </v-text-field>
        <v-text-field
          v-model="quizz.theme"
          :rules="rules"
          label="Thématique"
          variant="solo-filled">
        </v-text-field>
        <div class="modal-question">
          <p>Question :</p>
          <div class="modal-question-add">
            <v-text-field
              class="modal-question-add-field"
              clearable
              label="Question ?"
              variant="solo-filled"
              v-model="quizz.question">
            </v-text-field>
            <div class="modal-icon" @click="addAnswer">
              <div class="stats-background">
                <i class="fas fa-plus"></i>
              </div>
            </div>
          </div>
          <div class="modal-answer">
            <div v-for="(reponse, index) in quizz.reponses" :key="index" class="answer-field">
              <v-text-field
                clearable
                :label="'Réponse ' + (index + 1)"
                variant="solo-filled"
                v-model="reponse.value">
              </v-text-field>
              <div class="modal-radio">
                <input 
                  type="radio" 
                  :name="'question'" 
                  :value="index" 
                  v-model="quizz.bonneReponse">
                <label :for="'Réponse' + (index + 1)">{{reponse.value}}</label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-button">
          <button class="prev-button" type="button" @click="emitPrev">Précédent</button>
          <button class="next-button" type="button" @click="emitNext">Suivant</button>
        </div>
        <div class="modal-submit">
          <button class="submit-button" type="submit">Créer le Quiz</button>
        </div>       
      </form>
    </div>
  </div>
</template>



  
<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue'

const props = defineProps({
  quizz: Object,
  previousPage: Number,
  nextPage: Number,
  maxReponse: Number,
  show: Boolean
})

const quizz = ref({
  nom: '',
  theme: '',
  question: '',
  reponses: [{ value: '' }], 
  bonneReponse: ''
})

const emit = defineEmits(['prev', 'next', 'submit', 'close'])

const addAnswer = () => {
  if (quizz.value.reponses.length < props.maxReponse) {
    quizz.value.reponses.push({ value: '' })
  } else {
    alert('Nombre maximum de réponses atteint')
  }
}

const emitClose = () => {
  // Réinitialiser les données du quiz lorsqu'on ferme le modal
  quizz.value = {
    nom: '',
    theme: '',
    question: '',
    reponses: [{ value: '' }], 
    bonneReponse: ''
  }
  emit('close')
}

const emitPrev = () => emit('prev')
const emitNext = () => emit('next')
const emitSubmit = () => {
  emit('submit', { ...quizz.value })
  // Réinitialiser le modal après soumission
  emitClose()
}

// Mettre à jour quizz en fonction des props
watch(() => props.quizz, (newVal) => {
  quizz.value = { ...newVal }
})
</script>


<style scoped>


.modal-close {
  display: flex;
  justify-content: end;
  align-items:center;
  padding: 0 30px;
}

.modal.hidden {
  display: none;
}

.container {
    background-color: #FDFDFD;
    border-radius: 12px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 30px 30px 0 0;
    height: auto;
    justify-content: center;
    align-items: center;
}

.modal-title {
    font-size: 1.5em;
    margin: 0;
    color: #2c3e50;
    display: flex;
    justify-content: center;
    align-items: center;}

.modal-form {
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 80%;
}

.modal-question p {
    margin-left: 15px;
    margin-bottom: 10px;
}

.modal-question-add {
    display: flex;
    gap: 15px;
}

.modal-icon {
    background-color:#F0D4E6 ;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items:center;
    margin-top: 5px;
    cursor: pointer;
}

.modal-icon:hover {
  scale: 1.05;
}

.modal-answer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}

.modal-radio {
    display: flex;
    justify-content: space-evenly;
}
.modal-content {
    padding: 50px;
    justify-content: center;
    display: flex;
}
.prev-button{

    background: linear-gradient(90deg, rgba(238,174,202,1) 0%, #EFC8DE 100%);
    border: none;
    border-radius: 12px;
    color: #2c3e50;
    padding: 5px 30px;
    width: 70%;
    font-size: 1em;
    cursor: pointer;
    margin-top: 60px;
}

.next-button{

    background: linear-gradient(90deg, #EFC8DE 0%, #F0D4E6 100%);
    border: none;
    border-radius: 12px;
    color: #2c3e50;
    padding: 5px 30px;
    width: 70%;
    font-size: 1em;
    cursor: pointer;
    margin-top: 60px;
}
.submit-button{

    background: linear-gradient(90deg, rgba(238,174,202,1) 0%, #F0D4E6 100%);
    border: none;
    border-radius: 12px;
    color: #2c3e50;
    padding: 5px 30px;
    width: 100%;
    font-size: 1em;
    cursor: pointer;
}

.modal-button {
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
}

.modal-submit {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    width: 100%;
}

.answer-field {
    width: 100%;
}

button:hover {
  scale: 1.05;
  background: #F0D4E6;
}
    
</style>