<template>
   <div class="container">
       <h1 >I/O</h1>
       <h1 id="tag2">Experience IO</h1> 
       <h2 id="tag3">With your local communties</h2>
       <button>Register Now</button>
   </div>

</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Ultra&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
.container{
    width: 90%;
    height: 500px;
    background: rgb(255, 255, 0);
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: auto;
    border-radius: 40px;
    box-shadow: 4px 6px 8px gray;

}

h1:nth-child(1){
    color: rgb(0, 0, 0);
    font-weight: bolder;
    font-size: 5rem;
    font-family: 'Ultra', serif;
}
h1:nth-child(2){
    color: rgb(0, 0, 0);
    letter-spacing: 2px;
    font-family: 'Noto Sans JP', sans-serif;
}
h2{
    color: black;
    word-spacing: 3px;
}
button{
    background: white;
    color: black;
    font-family: 'Noto Sans JP', sans-serif;
    border-radius: 15px;
    padding: 8px;
    outline: none;
    margin-top: 2rem;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
}

</style>