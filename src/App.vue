<template>
<the-header></the-header>
 <the-home></the-home>
 <Content></Content>
 <tech-stickers></tech-stickers>
 <events-agenda></events-agenda>
 <speakers></speakers>
 <partners></partners>
 <the-footer></the-footer>
</template>

<script>
import TheHome from "./components/TheHome.vue";
import TheHeader from "./components/TheHeader.vue";
import Content from "./components/Content.vue";
import TechStickers from "./components/TechStickers.vue";
import EventsAgenda from "./components/EventsAgenda.vue";
import Speakers from "./components/Speakers.vue";
import Partners from "./components/Partners.vue";
import TheFooter from "./components/TheFooter.vue";


export default {
  name: "App",
  components: {
    TheHome,
    TheHeader,
    Content,
    TechStickers,
    EventsAgenda,
    Speakers,
    Partners,
    TheFooter
    
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap');
#app{
  background: rgb(221, 217, 217);
}
</style>
