<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand " href="#"> <h3 class="ml-2"> <span class="mx-2" id="IO"> I/O</span><b>Extended</b>  Universal</h3></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse float-right" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto text-dark">
      <li class="nav-item active ">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item ml-lg-3">
        <a class="nav-link" href="#">About</a>
      </li>
       <li class="nav-item ml-lg-3">
        <a class="nav-link" href="#">Agenda</a>
      </li>
       <li class="nav-item ml-lg-3">
        <a class="nav-link ml-lg-3" href="#">Speaker</a>
      </li>
       <li class="nav-item ml-lg-3">
        <a class="nav-link" href="#">Community</a>
      </li>
       <li class="nav-item ml-md-3">
        <a class="nav-link bg-warning  rounded text-dark px-3 font-weight-bold"   href="#">Register</a>
      </li>
      <!-- <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> -->
     
    </ul>
    
  </div>
</nav>
</template>

<script>
    export default {
        

    }
</script>

<style scoped>
#IO{
    color: rgb(0, 49, 122);
    font-size: 1.8rem;
     
     position: relative;
     /* left: -20px; */
     font-weight: bolder;
     
}
.navbar-light .navbar-nav .nav-link {
    margin-left: 10px;
    /* float: right; */
    font-weight: bolder;
    
}

</style>