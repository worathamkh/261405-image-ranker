<template>
    <div class="container">

        <div class="masthead">
            <h4 class="text-muted">Image Ranker</h4>
        </div>

        <div class="row text-center justify-content-center">
            <div class="col-lg-8">
                <h1 class="title">{{ title }}</h1><br>
                <h3 class="desc">{{ description }}</h3>
                <!-- <div class="row"> -->
                <!--     <div class="image"> -->
                <!--         <img class="rank-1" :src="rankedImages[0].url"> -->
                <!--         <h2><span>1</span></h2> -->
                <!--     </div> -->
                <!-- </div> -->
                <!-- <div class="row text-center"> -->
                <!--     <img class="rank-2" :src="rankedImages[1].url"> -->
                <!--     <img class="rank-3" :src="rankedImages[2].url"> -->
                <!-- </div> -->
                <!-- <div class="row text-center"> -->
                <!--     <ol> -->
                <!--         <li v-for="i in rankedImages.length" v-if="i > 3"> -->
                <!--             <img :src="rankedImages[i-1].url"> -->
                <!--         </li> -->
                <!--     </ol> -->
                <!-- </div> -->
                <div class="row">
                    <div class="image" v-for="i in rankedImages.length">
                        <img :src="rankedImages[i-1].url">
                        <h2><span>{{ i }}</span></h2>
                    </div>
                </div>
            </div>
        </div>

        <!-- Site footer -->
        <footer class="footer">
            <p>&copy; Woratham Kh 2017</p>
        </footer>

    </div> <!-- /container -->
</template>

<script>
export default {
    data: function () {
        return {
            title: '',
            description: '',
            rankedImages: []
        }
    }
}
</script>

<style lang="css">
.masthead {
    margin-bottom: 20px;
}
.desc {
    margin-bottom: 30px;
}
.image {
    position: relative;
    margin: 0 auto;
    width: 100%
}
.image > img {
    max-width: 80%;
    height: auto;
}
.image > h2 {
    position: absolute;
    top: 8px;
    left: 16px;
}
.image > h2 > span {
    color: white; 
    font: bold 24px/45px Helvetica, Sans-Serif; 
    letter-spacing: -1px;  
    background: rgb(0, 0, 0); /* fallback color */
    background: rgba(0, 0, 0, 0.7);
    padding: 10px; 
}
.rank-1 {
    max-width: 75%;
    height: auto;
}
.rank-2, .rank-3 {
    max-width: 50%;
    height: auto;
}
</style>
