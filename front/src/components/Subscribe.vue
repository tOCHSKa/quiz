<template>
    <div class="form-container">
      <form @submit.prevent="handleSubmit" class="login-form">
        <h2>Inscription</h2>
  
        <div class="input-group">
          <div class="password-label">
            <label>Nom d'utilisateur</label>
          </div>
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
        <div class="input-group">
          <div class="password-label">
            <label>Prénom</label>
          </div>
          <input 
            v-model="form.firstname" 
            placeholder="Prénoms" 
             type="text"
            required 
          />
        </div>
        <div class="input-group">
          <div class="password-label">
            <label>Nom</label>
          </div>
          <input 
            v-model="form.name" 
            placeholder="Noms" 
             type="text"
            required 
          />
        </div>
  
        <button type="submit" class="submit-button">
          S'inscrire
        </button>
      </form>
    </div>
  </template>

  <script setup>

import { ref } from 'vue';
  
  const form = ref({
    username: '',
    password: '',
    name: '',
    firstname: '',
  });
  const visible = ref(false);
  
  const handleSubmit = () => {
    // Afficher les données dans la console
    console.log('Form data:', form.value);

    fetch('http://localhost:3000/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

</script>

<style scoped>

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  background-color: #f5f5f5;
}

.login-form {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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
  border-radius: 4px;
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
  border-radius: 4px;
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
  border-radius: 4px;
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