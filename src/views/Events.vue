<template>
  <div className="container p-5">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-3">
        <button
          type="button"
          class="btn"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Intro to Tensorflow (18 July 2021)"
        >
          <img width="60" height="60" src="../assets/tensorflow.png" alt="" />
            
        </button>
         <img class="arrow"  src="../assets/arrow.png" alt="" />
      </div>
      
      <div class="col-3">
        <button
          type="button"
          class="btn me-2"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Android 12 (21 July 2021)"
        >
           <img width="60" height="60" src="../assets/android.png" alt="" />
          
        </button>
      </div>
    </div>
  </div>
  <!-- <a tabindex="0" class="btn btn-lg " role="button" data-bs-toggle="popover" data-bs-trigger="focus" title="Dismissible popover" data-bs-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</a> -->
</template>
<script>
//importing bootstrap 5 Modules
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Tooltip } from "bootstrap/dist/js/bootstrap.esm.min.js";
export default {
  mounted() {
    //inti tooltip
    Array.from(
      document.querySelectorAll('button[data-bs-toggle="tooltip"]')
    ).forEach((tooltipNode) => new Tooltip(tooltipNode));

    var popover = new bootstrap.Popover(
      document.querySelector(".popover-dismiss"),
      {
        trigger: "focus",
      }
    );
  },
};
</script>
{"mode":"full","isActive":false}

<style scoped>
@media screen and (max-width:1200px) {
  .arrow{
    display: none;
  }
  
}

</style>