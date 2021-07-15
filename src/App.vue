<template>

<the-nav-bar></the-nav-bar>
  <router-view/>
    <the-footer></the-footer>

</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
import TheNavBar from './components/boss/TheNavbar.vue'
import TheFooter from './components/boss/TheFooter.vue'
export default {
  components:{
    TheNavBar,
    TheFooter
  }
}
</script>
<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
 
}
</style>
