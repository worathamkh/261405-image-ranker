<template>
    <div class="container">

        <div class="masthead">
            <h4 class="text-muted">Image Ranker</h4>
        </div>

        <div class="row justify-content-center">
            <div class="col-lg-8">
                <h3 class="inner-head">Create a new tournament</h3>
                <form method="post" :action="'?_csrf=' + csrfToken" enctype="multipart/form-data">

                    <div class="form-group row">
                        <label for="title" class="col-2 col-form-label col-form-label-lg">Title</label>
                        <div class="col-10">
                            <input class="form-control form-control-lg" type="text" name="title" id="title" placeholder="Cute cats">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="description" class="col-2 col-form-label">Description</label>
                        <div class="col-10">
                            <input class="form-control" type="text" name="description" id="description" placeholder="Help us find out which one is the cutest">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="images" class="col-2 col-form-label">Images</label>
                        <div class="col-10">
                            <input class="form-control-file" type="file" name="images" id="images" multiple>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary float-right">Create</button>
                </form>
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
        }
    }
}
</script>

<style lang="css">
.col > .form-control {
    margin-top: .5rem;
}
.col > .form-control-file {
    margin-top: .5rem;
}
.masthead {
    margin-bottom: .5rem;
}
.inner-head {
    margin-top: 20px;
    margin-bottom: 20px
}
</style>
