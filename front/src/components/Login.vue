<template>
  <div class="form-container">
    <form @submit.prevent="handleSubmit" class="login-form">
      <h2>Connexion</h2>

      <div class="input-group">
        <input 
          type="text" 
          v-model="form.username" 
          placeholder="Nom d'utilisateur" 
          required 
        />
      </div>

      <div class="input-group">
        <div class="password-label">
          <label>Password</label>
          <a href="#" class="forgot-password">Mot de passe oublié ?</a>
        </div>
        <input 
          :type="visible ? 'text' : 'password'" 
          v-model="form.password" 
          placeholder="Mot de passe" 
          required 
        />
        <span @click="visible = !visible" class="toggle-password">
          {{ visible ? 'Hide' : 'Show' }}
        </span>
      </div>

      <div class="warning-box">
        <p>
          Warning: After 3 consecutive failed login attempts, your account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.
        </p>
      </div>

      <button type="submit" class="submit-button">
        Se Connecter
      </button>

      <div class="signup-link">
        <router-link to="/subscribe">S'inscrire maintenant</router-link>
      </div>
    </form>
  </div>
</template>
  
  <script setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  import { computed, onMounted } from 'vue';  
  import router from '../router'

  const store = useStore();

  const visible = ref(false);
  const form = ref({
        username: '',
        password: '',
      });
  
    // Variable réactive pour stocker le message d'erreur
    const errorMessage = ref('');


    const handleSubmit = () => {
      // Réinitialiser le message d'erreur avant de soumettre
      errorMessage.value = '';
        // Afficher les données dans la console
        // console.log('Form data:', form.value);
  
        fetch('http://localhost:3000/api/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form.value),
        })
          .then((response) => response.json())
          .then((data) => {

        // Décoder le token pour obtenir les informations utilisateur
        // const user = JSON.parse(atob(data.token.split(".")[1]));
        console.log(data);

        // Déclencher la mutation setUser dans le store Vuex
        // store.commit('setUser', data.user);
        store.commit('setToken', data.token);

            // Navigating to the named route
            router.push({ name: 'home' });
          })
          .catch((error) => {
            console.error('Error:', error);
          // Mettre à jour le message d'erreur en cas d'échec
          errorMessage.value = 'Nom d\'utilisateur ou mot de passe incorrect.';
          console.log(errorMessage.value)
          });
      };


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


  </script>
  
  <style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form {
  background: white;
  padding: 20px;
  border-radius: 12px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.input-group {
  margin-bottom: 15px;
  position: relative;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 12px;
  box-sizing: border-box;
}

.password-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  font-size: 14px;
  color: #555;
}

.forgot-password {
  color: #007bff;
  text-decoration: none;
  font-size: 12px;
}

.warning-box {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  padding: 10px;
  border-radius: 12px;
  margin-bottom: 20px;
  font-size: 12px;
  text-align: left;
}

.toggle-password {
  position: absolute;
  right: 10px;
  top: 35px;
  cursor: pointer;
  font-size: 12px;
  color: #007bff;
}

.submit-button {
  background-color: #1697F6;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  text-transform: uppercase;
}

.submit-button:hover {
  background-color: #7BC6FF;
}

.signup-link {
  margin-top: 20px;
}

.signup-link a {
  color: #007bff;
  text-decoration: none;
  font-size: 14px;
}
</style>
  
  