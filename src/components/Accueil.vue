<script setup>

</script>

<template>
    <h1>Bienvenue dans notre librairie</h1>
    <h2>Notre dernière collection</h2>

    <div class="slider">
        <div class="slider-viewport">
            <div id="img1">
                <div id="img2">
                    <div id="img3">
                        <div id="img4">
                            <div id="img5">
                                <div id="img6">
                                    <div class="slider-content">
                                        <img src="../assets/harry_potter.jpg" alt="harry_potter">
                                        <img src="../assets/seigneur_des_anneaux.jpg" alt="seigneur_des_anneaux">
                                        <img src="../assets/python.jpg" alt="python">
                                        <img src="../assets/vue_js.jpg" alt="vue_js">
                                        <img src="../assets/cyber.jpg" alt="cybersécurité">
                                        <img src="../assets/spring_boot.jpg" alt="spring-boot">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="slider-nav">
            <a href="#img1"></a>
            <a href="#img2"></a>
            <a href="#img3"></a>
            <a href="#img4"></a>
            <a href="#img5"></a>
            <a href="#img6"></a>
        </div>
    </div>


</template>

<style scoped>
h1 {
    color: #631b2a;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 35px;
    text-shadow: 2px 2px #88a3cf;
    text-align: center;
    text-decoration: underline overline #dbd7d8;
}

h2 {
    color: #25592d;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 25px;
    text-shadow: 2px 2px #88a3cf;
    text-align: center;
    box-shadow: 1px 1.5px 5px #c0d1c3;
}

.slider {
    width: 800px;
    margin: 30px auto;
    position: relative;
}

.slider-viewport {
    width: 800px;
    height: 500px;
    overflow: hidden;
}

.slider-content {
    display: grid;
    grid-auto-flow: column;
    -webkit-transition: 1s all;
    transition: 1s all;
}

.slider-content img {
    width: 800px;
    height: 500px;
}

.slider-nav {
    position: absolute;
    width: 100%;
    bottom: -30px;
    margin-top: 10px;
    text-align: center;
}

.slider-nav a {
    -webkit-box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.3);
    box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.3);
    display: inline-block;
    background-color: #adafbc;
    width: 15px;
    height: 15px;
    margin: 0 3px;
}

.slider-nav a:hover {
    background-color: #fff;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.8);
    box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.8);
}

#img2:target .slider-content {
    -webkit-transform: translateX(-800px);
    transform: translateX(-800px);
}

#img3:target .slider-content {
    -webkit-transform: translateX(-1600px);
    transform: translateX(-1600px);
}

#img4:target .slider-content {
    -webkit-transform: translateX(-2400px);
    transform: translateX(-2400px);
}

#img5:target .slider-content {
    -webkit-transform: translateX(-3200px);
    transform: translateX(-3200px);
}

#img6:target .slider-content {
    -webkit-transform: translateX(-4000px);
    transform: translateX(-4000px);
}
</style>