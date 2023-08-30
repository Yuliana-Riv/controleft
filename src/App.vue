<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {
      colores: "",
    };
  },

  async created() {
    await this.getAllInfoClr("profile");

    this.colores = this.profiles;
    this.actualizarColores();
  },
  watch: {
    profiles() {
      this.actualizarColores();
    },
  },
  computed: {
    profiles() {
      return this.$store.getters["profile/data"];
    },
  },
  methods: {
    ...mapActions("colors", ["getAllInfoClr"]),
    ...mapActions("profile", ["getAllInfoPrf"]), 

    actualizarColores() {
      const arr = this.$store.getters["colors/data"];

      if (Array.isArray(arr)) {
        for (var i = 0; i < arr.length; i++) {
          if (i == 0) {
            document.documentElement.style.setProperty(
              "--color-1",
              arr[i].code
            );
          } else if (i == 1) {
            document.documentElement.style.setProperty(
              "--color-2",
              arr[i].code
            );
          } else if (i == 2) {
            document.documentElement.style.setProperty(
              "--color-3",
              arr[i].code
            );
          } else if (i == 3) {
            document.documentElement.style.setProperty(
              "--color-4",
              arr[i].code
            );
          } else if (i == 4) {
            document.documentElement.style.setProperty(
              "--color-5",
              arr[i].code
            );
          } else if (i == 5) {
            document.documentElement.style.setProperty(
              "--color-6",
              arr[i].code
            );
          } else if (i == 6) {
            document.documentElement.style.setProperty(
              "--color-7",
              arr[i].code
            );
          }
        }
      }
    },
  }, 
};
</script>



<style>
@import "./css/default.css";

@import url("https://fonts.googleapis.com/css2?family=Mukta:wght@300;400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700;800&family=Sora:wght@100;200;300;400;500;600;700;800&family=Source+Sans+Pro:wght@300;400;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

html {
  scroll-behavior: smooth;
}

:root {
  /** No eliminar los 7 colores */
  --color-1: #e21f1d;
  --color-2: #242424;
  --color-3: #a7a7a7;
  --color-4: #f5f5f5;
  --color-5: #ffffff;
  --color-6: #d9d9d9;
  --color-7: #ffffff;

  --Sans: "Source Sans Pro", sans-serif;
  --Open_Sans: "Open Sans", sans-serif;
  --Sora: "Sora", sans-serif;
  --Mukta: "Mukta", sans-serif;
  --Inter: "Inter", sans-serif;
  --Montserrat: "Montserrat", sans-serif;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0vw;
}

body {
  margin: 0vw;
}

html {
  scroll-behavior: smooth;
}

input:focus-visible {
  outline: none !important;
}

p{
  margin: 0;
}

input,
textarea,
select {
  padding-left: 0.5vw;
  outline: none;
}

.dflx {
  display: flex;
}

.pointer {
  cursor: pointer;
}

.jcsb {
  justify-content: space-between;
}
.VueCarousel-navigation-button {
  color: transparent !important;
  width: 6.146vw !important;
  height: 6.146vw !important;
  padding: 0 !important;
  background-image: url("assets/btn-s.svg");
  background-repeat: no-repeat;
  background-size: 100%;
}
.VueCarousel-navigation-prev,
.VueCarousel-navigation-next {
  transform: translateY(0%) translateX(0%) !important;
}
.VueCarousel-navigation-prev {
  left: 3.698vw !important;
}
.VueCarousel-navigation-next {
  transform: rotate(180deg) !important;
  right: 3.698vw !important;
}
.VueCarousel-pagination {
    position: absolute;
    bottom: 2.240vw;
}
.VueCarousel-dot--active {
    background-color: #E33A23!important;
}
.s6 .VueCarousel-navigation-button { 
    top: -7vw!important;
}
.s6 .VueCarousel-navigation-prev {
    left: 69.26vw!important;
}
.s6 .VueCarousel-navigation-button { 
    width: 3.385vw!important;
    height: 3.385vw!important;
}
.s6 .VueCarousel-navigation-next { 
    right: 1.146vw !important;
}
#SocialRes .VueCarousel-navigation-button{
width: 3.385vw !important;
height: 3.385vw !important;
background-image: url('assets/left1.svg')!important;
transition: .5s;
}
#SocialRes .VueCarousel-navigation-button:hover{
background-image: url('assets/left1h.svg')!important; 
}
@media (min-width: 768px) {
#SocialRes .VueCarousel-navigation-prev {
    left: 63.594vw !important;
}
#SocialRes .VueCarousel-navigation-next{
    left: 63.94vw !important;
    margin-top: -4.479vw!important;
}
}



@media (min-width: 769px) {

  .GF3 .VueCarousel-inner {
    flex-basis: 0vw !important;
  }
  .GF3 .VueCarousel-wrapper {
    width: 65.2vw;
    align-self: center;
  }

  .GF3 .VueCarousel-navigation-button {
    width: 3.3854166666666665VW !important;
    height: 3.3854166666666665VW !important;
  }
  
  .GF3 .VueCarousel-navigation {
    width: 4vw;
    align-self: center;
    margin-left: 2.2916666666666665VW;
    text-align-last: center;
  }

  .GF3 .VueCarousel-navigation-button {
    position: inherit !important;
    color: #E33A23 !important;
    border: 0.1vw solid #E33A23 !important;
    border-radius: 10vw !important;
  }
  .GF3 .VueCarousel {
    flex-direction: inherit !important;
    place-content: center;
    display: flex !important;
}
.GF3 button.VueCarousel-navigation-button.VueCarousel-navigation-prev.VueCarousel-navigation--disabled {
    margin-bottom: 1.09375VW;
}

}


@media (max-width: 768px) {
  .VueCarousel-navigation-button {
    color: transparent !important;
    width: 12.56vw!important;
    height: 12.56vw!important;
}
.VueCarousel-navigation-prev {
    left: auto !important;
    right: 5.698vw!important; 
}
.VueCarousel-navigation-next { 
    margin-top: 17vw!important;
}

.GF3 .VueCarousel-inner {
    /*justify-content: center;*/
    text-align: -webkit-center;
}

.GF3 .VueCarousel-navigation-button {
  position: inherit !important;
  top: 0% !important;
}
.GF3 .VueCarousel-navigation-button {
  background-image: none !important;
}


}
</style>
