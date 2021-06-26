<template>
    <div class="container">
        
        <p class="heading">A Local <span id="IO">Celebration of Tech </span> </p>
        <div class="stickers">
           <h1>Stickers goes here</h1>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.container{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    height: 400px;
   background: linear-gradient(1200deg,rgb(238, 200, 200),rgb(181, 250, 117));
    box-shadow: 4px 6px 4px gray;
    border-radius: 40px;
    width: 80%;
    margin: auto;
}
.heading{
    font-size: 2rem;
        font-family: sans-serif;
}
#IO{
    font-weight: 900;
}
@media(max-width:800px){
    .container{
    
    width: 95%;
    
}
}


</style>