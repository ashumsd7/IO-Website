<template>
  <div class="conatiner">
    <div class="footer  bg-warning text-dark">
      <div class="row d-flex flex-column">
        <div class="col-lg">
          <div class="row">
            <div id="logo" class="col-3 mx-4 my-2"></div>
            <div id="logo-slash"></div>
            <div id="logo2" class="col-3"></div>
          </div>
        </div>
        <div class="col-lg ml-3">
            <div id="logo-name" class="col-6"> <span>Extended</span> Universal</div>
        </div>
        <div class="col-lg">
             <button class="bg-light register-btn p-2  outline-none border-0">
            Register Now
          </button>
        </div>
      </div>
    </div>
    <div class="row d-lg-block design-banner-circle"></div>
    <div class="row d-lg-block design-banner-square"></div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.conatiner {
  position: relative;
  overflow: hidden;
}
.footer {
  /* font-weight: bolder; */
  height: 180px;
  /* font-size: 0.9rem; */
}
.design-banner-circle {
  width: 200px;
  height: 200px;
  /* background: black; */
  border: 2px solid black;

  border-radius: 50%;
  position: absolute;
  top: -60%;
  right: -10%;
}
.design-banner-square {
  width: 200px;
  height: 200px;
  /* background: black; */
  border: 2px solid black;

  position: absolute;
  bottom: -170px;
  left: -20px;
}
/* _for I rectangle / */
#logo {
  width: 20px;
  height: 50px;
  background: black;
  margin-left: -10px;
}
/* _for / */
#logo-slash {
  width: 1px;
  height: 60px;
  background: black;
  transform: rotateY(84deg) rotateX(-20deg);
  transform-origin: left;
  margin-left: -10px;
  margin-top: 5px;
}
/* _for O rounded O */
#logo2 {
  width: 50px;
  height: 50px;
  background: black;
  border-radius: 50%;
  margin-left: -10px;
  margin-top: 10px;
}

#logo-name{
  font-family: "Poppins", sans-serif;
   margin-left: 10px;
 
  
}
#logo-name span{
  font-weight: bolder;
  
}
.register-btn {
  border-radius: 10px;
  margin-left: 10px;
}
</style>