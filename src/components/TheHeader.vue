<template>
<header>
    <nav>
        <ul>
            <li> <h3> <span id="IO"> I/O</span><b>Extended</b>  Universal</h3> </li>
            <li> About </li>
            <li>Agenda </li>
            <li> Speaker </li>
            <li>Community</li>
            <li>Register</li>
        </ul>
    </nav>

</header>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Ultra&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Ropa+Sans&display=swap');
header{
    position: fixed;
    width: 100%;
}
nav{
    background: rgb(255, 255, 255);
    overflow: hidden;
}
nav ul{
    display: flex;
    justify-content:space-evenly;
    align-items: center;

}
nav ul li{
    color: rgb(0, 0, 0);
    padding: .5rem;
    margin: .4rem;
    color: rgb(0, 0, 0);
    list-style: none;
    font-family: 'Ropa Sans', sans-serif;
    font-size: 1.4rem;
    cursor: pointer;
    transition: .5s;
}
nav ul li:hover{
    text-decoration: underline;

}
#IO{
    color: rgb(0, 49, 122);
    font-size: 1.8rem;
     font-family: 'Ultra', serif;
     position: relative;
     left: -20px;
}
li:last-child{
    background: yellow;
    border-radius: 20px;
    font-weight: bolder;
    padding: .4rem;
    width: 150px;
    text-align: center;
    border:.5px solid black;
    
}
@media(max-width:500px){

    nav ul{
    display: flex;
    justify-content:flex-start;
    align-items: center;

}
nav ul li{
    
    padding: .3rem;
    margin: .2rem;
    font-size: .5rem;
   
}
#IO{

    font-size: 1rem;
    left:0px
    
}
li:last-child{
    background: yellow;
    border-radius: 10px;
    font-weight: bold;
    padding: .3rem;
    width: 60px;
   
   
    
}
}
</style>