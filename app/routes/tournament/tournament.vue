<template>
    <div class="container">

        <div class="masthead">
            <h3 class="text-muted">Image Ranker</h3>
        </div>

        <div class="row text-center justify-content-center">
            <div class="col-lg-10">
                <h1>{{ title }}</h1><br>
                <h3>{{ description }}</h3>
                <div class="row">
                    <div class="col-sm-6">
                        <a :href="'/tournament/' + key + '/' + left.id + '/' + right.id"><img :src="left.url"></a>
                    </div>
                    <div class="col-sm-6">
                        <a :href="'/tournament/' + key + '/' + right.id + '/' + left.id"><img :src="right.url"></a>
                    </div>
                </div>
                <a :href="'/ranking/' + key"><button class="btn btn-primary">View ranking</button></a>
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
img {
    max-width: 100%;
}
</style>
