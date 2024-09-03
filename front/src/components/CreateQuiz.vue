<template>

    <div class="container">
        <div class="stats-card">
            <div class="stats-content">
                <div><p>Quiz</p></div>
            </div>
            <div class="stats-icon">
                <div class="stats-background">
                    <i class="fas fa-plus"></i>
                </div>
            </div>  
        </div>
        <!-- <div class="stats-card">
            <div class="stats-icon">
                <div class="stats-background">
                    <i class="fas fa-plus"></i>
                </div>
            </div>
            <div class="stats-content">
                <div><p>Question</p></div>
            </div>
        </div>
        <div class="stats-card">
            <div class="stats-icon">
                <div class="stats-background">
                    <i class="fas fa-plus"></i>
                </div>
            </div>
            <div class="stats-content">
                <div><p>Badge</p></div>
            </div>
        </div> -->
    </div>

</template>
<script setup>

</script>
<style scoped>

.container {
    display: flex;
    width: 100%;
    margin-right: 30px;
}

.stats-icon {
    background-color:aliceblue;
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
    align-items: center;
}

.stats-card {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 30px;
    margin-right: 30px;
    height: auto;
    width: 100%;
    padding: 15px;
    border-radius: 12px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s; 
    cursor: pointer; 
}

.stats-card:hover {
    transform: scale(1.05); 
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); 
}

    
</style>