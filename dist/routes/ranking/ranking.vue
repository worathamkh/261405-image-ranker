<template>
    <div class="container">

        <div class="masthead">
            <h3 class="text-muted">Image Ranker</h3>
        </div>

        <div class="row text-center justify-content-center">
            <div class="col-lg-8">
                    <h1>{{ title }}</h1>
                    <h3>{{ description }}</h3>
                    <ul>
                        <li v-for="url in images">
                            <img :src="url">
                        </li>
                    </ul>
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
            images: []
        }
    }
}
</script>

<style lang="css">
</style>
