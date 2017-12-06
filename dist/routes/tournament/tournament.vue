<template>
    <div class="container">

        <div class="masthead">
            <h4 class="text-muted">Image Ranker</h4>
        </div>

        <div class="row text-center justify-content-center">
            <div class="col-lg-10">
                <h1 class="title">{{ title }}</h1><br>
                <h3 class="desc">{{ description }}</h3>
                <div class="row row-fight">
                    <div class="col-sm-6 img-align">
                        <a :href="'/tournament/' + key + '/' + left.id + '/' + right.id"><img :src="left.url"></a>
                    </div>
                    <div class="col-sm-6 img-align">
                        <a :href="'/tournament/' + key + '/' + right.id + '/' + left.id"><img :src="right.url"></a>
                    </div>
                </div>
                <a :href="'/ranking/' + key" class="btn btn-primary">View ranking</a>
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
            key: '',
            left: '',
            right: ''
        }
    }
}
</script>

<style lang="css">
.row-fight {
    display: flex;
    align-items: center;
}
.img-align img {
    height: auto;
    width: 100%;
}
.masthead {
    margin-bottom: 20px;
}
.desc {
    margin-bottom: 30px;
}
.row-fight {
    margin-bottom: 40px;
}
</style>
