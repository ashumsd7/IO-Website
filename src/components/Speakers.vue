<template>
  <div class="content">
    <div class="heading-contaner">
      <p>Speakers <span id="IO">Lineup</span> </p>
    </div>
    <div class="main-container">
        <div class="box" id="box1">
           <ul>
               <li>
                    <h3>Jane Cooper</h3>
                    <small> CEO at ABC Company</small>
               
               </li>
               <li>
                    <h3>Jane Cooper</h3>
                    <small> CEO at ABC Company</small>
               
               </li>
               <li>
                    <h3>Jane Cooper</h3>
                    <small> CEO at ABC Company</small>
               
               </li>
           </ul>
        </div>
        <div class="box" id="box2">
            <ul>
               <li>
                    <h3>Jane Cooper</h3>
                    <small> CEO at ABC Company</small>
               
               </li>
               <li>
                    <h3>Jane Cooper</h3>
                    <small> CEO at ABC Company</small>
               
               </li>
               <li>
                    <h3>Jane Cooper</h3>
                    <small> CEO at ABC Company</small>
               
               </li>
           </ul>
        </div>
    </div>
   
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap');
.content{
    margin-top: 5rem;
    font-family: sans-serif;
    width: 100%;
}
.heading-contaner{
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
 
}
#IO{
    font-weight: 1000;
}

.main-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.box{
    height: auto;
    width: 600px;
    margin: 1.5rem;
    border-radius: 60px;


}
#box1{
background: rgb(221, 217, 217);
padding: 2rem;
}


#box2{
background: rgb(221, 217, 217);
padding: 2rem;
}

#box1 ul li,#box2 ul li{
    margin: 1.5rem;
    margin-left: 20px;
    list-style: none;
}




</style>
