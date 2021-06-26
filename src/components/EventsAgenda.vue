<template>
    <div class="container">
        
        <p class="heading">Event <span id="IO">Agenda </span> </p>
        <div class="stickers">
           <h1>Event Schedule</h1>
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
    background: linear-gradient(230deg,rgb(238, 200, 200),rgb(86, 243, 248));
    box-shadow: 4px 6px 4px rgb(168, 168, 168);
    border-radius: 40px;
    width: 80%;
    margin: 40px auto;
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