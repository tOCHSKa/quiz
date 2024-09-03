<template>
    <div class="stats-container">
        <div class="stats-card">
            <div class="stats-icon1">
                <div class="stats-background">
                    <i class="fas fa-star"></i>
                </div>
            </div>
            <div class="stats-content">
                <div>Moyenne global</div>
                <div><h3>20</h3></div>
            </div>
        </div>
        <div class="stats-card">
            <div class="stats-icon2">
                <div class="stats-background">
                    <i class="fas fa-trophy"></i>
                </div>
            </div>
            <div class="stats-content">
                <div>Taux de réussite</div>
                <div><h3>100%</h3></div>
            </div>
        </div>
        <div class="stats-card">
            <div class="stats-icon3">
                <div class="stats-background">
                    <i class="fas fa-medal"></i>
                </div>
            </div>
            <div class="stats-content">
                <div>Badges Gagnés</div>
                <div><h3>50</h3></div>
            </div>
        </div>
    </div>

    
</template>
<script setup>

</script>
<style scoped>

.stats-container {
    display: flex;
    width: 100%;
}

.stats-card {
    background-color: #FDFDFD;
    border-radius: 12px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    max-width: 300px;
    width: 100%;
    max-height: 70px;
    margin: 30px 30px 0 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.stats-icon1 {
    background-color:#EFBDD5;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items:center;
}
.stats-icon2 {
    background-color:#EFC8DE;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items:center;
}
.stats-icon3 {
    background-color:#F0D3E6;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items:center;
}

.stats-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

    
</style>