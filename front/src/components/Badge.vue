<template>
    <div class="container">
        <div class="rightbar-card">
            <div class="rightbar-title">
               Badges :
            </div>
            <div class="badge-container">
                <div class="badge-image">
                    <img src="https://images.pexels.com/photos/6532373/pexels-photo-6532373.jpeg?auto=compress&cs=tinysrgb&w=600" alt="">
                </div>
                <div>Réussir un quiz parfait !</div>
                <div>0 / 1 </div>
            </div>
            <hr>
            <div class="badge-container">
                <div class="badge-image">
                    <img src="https://images.pexels.com/photos/9394657/pexels-photo-9394657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </div>
                <div>Réussir un quiz parfait !</div>
                <div>0 / 1 </div>
            </div>
            <hr>
            <div class="badge-container">
                <div class="badge-image">
                    <img src="https://images.pexels.com/photos/27205007/pexels-photo-27205007/free-photo-of-rhume-froid-glacier-neige.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                </div>
                <div>Réussir un quiz parfait !</div>
                <div>0 / 1 </div>
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
    margin-right: 30px;
}

.rightbar-card {
    background-color: #FDFDFD;
    border-radius: 12px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    width: 100%;
    margin: 30px 30px 0 0;
    height: auto;

}

.rightbar-title {
    display: flex;
    justify-content: center;
}

.badge-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 15px 0;
}

.badge-image {
    width: 50px;
    height: 50px;
    border-radius: 50%; /* Assurez-vous d'utiliser 50% ici pour arrondir correctement */
    overflow: hidden;  /* Masque l'excès de l'image pour garantir une forme ronde */
}

.badge-image img {
    width: 100%;
    height: 100%;
    object-fit: fill;
}

hr {
    height: 1px; /* Réduit l'épaisseur de la ligne */
    width: 80%;  /* Réduit la longueur de la ligne */
    background-color: #e0e0e0; /* Change la couleur de la ligne */
    border: none; /* Enlève la bordure par défaut */
    margin: 10px auto; /* Centrer l'hr et ajouter un espace vertical */
}
</style>