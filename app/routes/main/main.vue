<template>
    <div class="container">

      <div class="masthead">
        <h4 class="text-muted">Image Ranker</h4>

        <!-- <nav class="navbar navbar-expand-md navbar-light bg-light rounded mb-3"> -->
        <!--   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"> -->
        <!--     <span class="navbar-toggler-icon"></span> -->
        <!--   </button> -->
        <!--   <div class="collapse navbar-collapse" id="navbarCollapse"> -->
        <!--     <ul class="navbar-nav text-md-center nav-justified w-100"> -->
        <!--       <li class="nav-item active"> -->
        <!--         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
        <!--       </li> -->
        <!--       <li class="nav-item"> -->
        <!--         <a class="nav-link" href="#">Projects</a> -->
        <!--       </li> -->
        <!--       <li class="nav-item"> -->
        <!--         <a class="nav-link" href="#">Services</a> -->
        <!--       </li> -->
        <!--       <li class="nav-item"> -->
        <!--         <a class="nav-link" href="#">Downloads</a> -->
        <!--       </li> -->
        <!--       <li class="nav-item"> -->
        <!--         <a class="nav-link" href="#">About</a> -->
        <!--       </li> -->
        <!--       <li class="nav-item dropdown"> -->
        <!--         <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a> -->
        <!--         <div class="dropdown-menu" aria-labelledby="dropdown01"> -->
        <!--           <a class="dropdown-item" href="#">Action</a> -->
        <!--           <a class="dropdown-item" href="#">Another action</a> -->
        <!--           <a class="dropdown-item" href="#">Something else here</a> -->
        <!--         </div> -->
        <!--       </li> -->
        <!--     </ul> -->
        <!--   </div> -->
        <!-- </nav> -->
      </div>

      <!-- Jumbotron -->
      <div class="jumbotron">
        <h1>Rank things two at a time</h1>
        <p class="lead">Upload images and let your friends choose the better one side-by-side. The results are ranked using an Elo system.</p>
        <p><a class="btn btn-lg btn-success" href="/create" role="button">Upload</a></p>
      </div>

      <!-- Example row of columns -->
      <div class="row">
        <div class="col-lg-4">
          <h2>No sign up</h2>
          <p>Don't waste time signing up. Just create your page and then send the link to your friends.</p>
          <!-- <p><a class="btn btn-primary" href="#" role="button">View details &raquo;</a></p> -->
        </div>
        <div class="col-lg-4">
          <h2>Two at a time</h2>
          <p>No headache of trying to rate many things at a time. Just compare two things and decide which is better.</p>
          <!-- <p><a class="btn btn-primary" href="#" role="button">View details &raquo;</a></p> -->
        </div>
        <div class="col-lg-4">
          <h2>Elo system</h2>
          <p>A rating system used in chess so popular you've probably heard it from a movie.</p>
          <!-- <p><a class="btn btn-primary" href="#" role="button">View details &raquo;</a></p> -->
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
.masthead {
    margin-bottom: .5rem;
}
</style>
