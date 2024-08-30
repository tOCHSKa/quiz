<template>
    <div class="container">
            <div class="profile-card">
                <div class="profile-image">
                    <img src="https://images.pexels.com/photos/8294554/pexels-photo-8294554.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Profile Image">
                </div>
                <h2 class="name">Ubeda Kevin</h2>
                <p class="location"><i class="fas fa-map-marker-alt"></i> Mouvaux, FRA</p>
                <div class="social-links">
                    <a href="http://www.x.com" target="_blank"><i class="fab fa-twitter"></i></a>
                    <a href="http://www.linkedin.com" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href="http://www.github.com" target="_blank"><i class="fab fa-github"></i></a>
                </div>
                <button class="edit-profile">Edit Profile</button>
            </div>
            <div class="quiz">
                <div class="quiztitle"><h2 class="name">Questionnaire : </h2></div>
                <div class="quizlist">
                    <div class="quiz-encours">
                        <div class="quizcard">
                            <div class="quizcontent">
                                <div class="quizicon"><i class="fas fa-circle" style="color: green;"></i></div>
                                <div>Disponible(s) : 3</div>
                            </div>
                        </div>
                    </div>
                    <div class="quiz-termine">
                        <div class="quizcard">
                            <div class="quizcontent">
                                <div><i class="fas fa-circle" style="color: orange;"></i></div>
                                <div>En cours</div>
                            </div>
                        </div>
                    </div>
                    <div class="quiz-dispo">                    
                        <div class="quizcard">
                            <div class="quizcontent">
                                <div><i class="fas fa-circle" style="color: red;"></i></div>
                                <div>Terminé(s)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>
<script setup>

</script>
<style scoped>


.container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    padding: 30px;
}

.profile-card {
    background-color: #FDFDFD;
    border-radius: 12px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    width: 100%;
    max-width: 300px;
    margin-bottom: 30px;
    

}

.quiz {
    background-color: #FDFDFD;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
}

.quiztitle {
    text-align: center;
}

.quizlist {
    display: flex;
    flex-direction: column;
}

.quizcard {
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 10px;
    text-align: center;
    margin: 15px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.quizcontent {
    display: flex;
    justify-content: space-between;
    margin: 0 10px;
    cursor: pointer;
}

.quizicon {
    text-align: left;
}

.quizcard:hover {
    background-color: #e0e0e0; /* Couleur de fond au survol */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombre au survol */
}

.quizcard:active {
    background-color: #d0d0d0; /* Couleur de fond lors du clic */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Ombre réduite lors du clic */
}

.profile-image img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-bottom: 15px;
}

.name {
    font-size: 1.5em;
    margin: 0;
    color: #2c3e50;
}

.location {
    font-size: 0.9em;
    color: #7f8c8d;
    margin: 10px 0;
}

.social-links a {
    margin: 0 10px;
    color: #2c3e50;
    text-decoration: none;
    font-size: 1.2em;
}

.edit-profile {
    background-color: #F1F4FF;
    border: none;
    border-radius: 12px;
    color: #2c3e50;
    padding: 5px 30px;
    width: 100%;
    font-size: 1em;
    cursor: pointer;
    margin-top: 20px;
}

.actions {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    width: 100%;
}

.actions button {
    background-color: #38385F;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 5px 30px;
    font-size: 1em;
    cursor: pointer;
}

.stats {
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #ecf0f1;
    padding-top: 20px;
}

.stats div {
    text-align: center;
}

.stats h3 {
    margin: 0;
    font-size: 1.2em;
    color: #2c3e50;
}

.stats p {
    margin: 5px 0 0;
    font-size: 0.9em;
    color: #7f8c8d;
}

.quiz {
    display: flex;
}

</style>