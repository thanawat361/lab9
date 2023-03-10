<template>
    <div class="main">
        <Slide></Slide>
        <br />
        <div class="row row-cols-1 row-cols-md-4 g-4">

            <div class="col">
                <div class="card">
                    <a href="https://www.advice.co.th/">
                    <img src="https://www.ryt9.com/img/files/20200827/iqd4efe05413686b218ca7419ce87758b4-0.jpg" class="card-img-top" alt="..." /></a>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <a href="https://www.advice.co.th/product/">
                    <img src="https://img.advice.co.th/images_nas/advice_activity/202003271327081870.jpg" class="card-img-top" alt="..." /></a>
                </div>
            </div>
            

        </div>
    </div>
</template>

<script>

import Slide from "../components/Slide.vue";

export default {
    name: "Home",
    components: {
        Slide,
    },
};
</script>

<style>
.main {
    background-color: #2b44b4;
}


.text{
    margin-top: 5px;
    text-align: center;
    font-size: 16px;
}

.col {
    margin-bottom: 20px;
}
</style>
