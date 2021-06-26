<template>
  <div class="content">
    <div class="heading-contaner">
      <p>Why <span id="IO">IO Extended</span> ?</p>
    </div>
    <div class="main-container">
        <div class="box" id="box1">
            <h1>Because Community matters</h1>
            <p>Amet sit sadipscing ea labore ea duo stet, ea nonumy et sed amet consetetur magna diam labore, lorem aliquyam accusam vero no duo invidunt dolor. Sed sanctus erat diam lorem est consetetur et gubergren, no sed elitr lorem ipsum. Sadipscing lorem nonumy vero sit kasd tempor sanctus sit ipsum, et sit no consetetur no erat stet, diam tempor ut sed magna takimata takimata voluptua takimata. Sit eirmod duo amet lorem. Sit magna est kasd sanctus nonumy amet dolore takimata, tempor rebum lorem amet takimata amet gubergren.</p>
        </div>
        <div class="box" id="box2">
            <h1>Because Growth matters</h1>
            <p>Amet sit sadipscing ea labore ea duo stet, ea nonumy et sed amet consetetur magna diam labore, lorem aliquyam accusam vero no duo invidunt dolor. Sed sanctus erat diam lorem est consetetur et gubergren, no sed elitr lorem ipsum. Sadipscing lorem nonumy vero sit kasd tempor sanctus sit ipsum, et sit no consetetur no erat stet, diam tempor ut sed magna takimata takimata voluptua takimata. Sit eirmod duo amet lorem. Sit magna est kasd sanctus nonumy amet dolore takimata, tempor rebum lorem amet takimata amet gubergren.</p>
        </div>
    </div>
    <div class="main-container">
        <div class="box" id="box3">
            <h1>Because YOU matter</h1>
            <p>Amet sit sadipscing ea labore ea duo stet, ea nonumy et sed amet consetetur magna diam labore, lorem aliquyam accusam vero no duo invidunt dolor. Sed sanctus erat diam lorem est consetetur et gubergren, no sed elitr lorem ipsum. Sadipscing lorem nonumy vero sit kasd tempor sanctus sit ipsum, et sit no consetetur no erat stet, diam tempor ut sed magna takimata takimata voluptua takimata. Sit eirmod duo amet lorem. Sit magna est kasd sanctus nonumy amet dolore takimata, tempor rebum lorem amet takimata amet gubergren.</p>
        </div>
        <div class="box" id="box4">
            <img src="../assets/calendar.png" alt="">
            <h2>16 July</h2>
            <h3>Friday</h3>
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
    box-shadow: 4px 6px 4px gray;

}
#box1{
background: rgb(252, 119, 115);
padding: 2rem;
}
#box1 p, #box2 p,#box3 p{
margin-top: 1rem;
font-size: 1rem;
font-size: 1.3rem;
font-weight: 500;
}

#box2{
background: rgb(79, 248, 108);
padding: 2rem;
}
#box3{
    background: rgb(217, 255, 0);
    padding: 2rem;
    width: 58%;
}
#box4{
    width: 12%;
    background: rgb(67, 147, 252);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    height: 250px;
    color: wheat;
    min-width: 200px;
    min-height: 250px;
    
}
#box4 img{
    margin-bottom: .5rem;
}
#box4 h2,h3{
    margin: .2rem;
}

@media(max-width:800px){
    #box3{
 
    width: 90%;
}
}
</style>
