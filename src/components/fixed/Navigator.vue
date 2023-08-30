<template>
  <div class="navigator" :class="{ scrolled: scr > 0 }">
    <div class="nav-c" :class="{ scrolled: scr > 0 }">
      <a href="/" class="logo">
        <img
          src="../../assets/logo.png"
          alt="logo"
          :class="{ scrolled: scr > 0 }"
        />
      </a>
      <img
        src="../../assets/bars.svg"
        alt=""
        class="barsbtn"
        @click="dmenu = true"
      />
      <div class="menu-c" :class="{ active: dmenu }">
        <section class="secm">
          <img
            src="../../assets/close.svg"
            alt=""
            class="barsbtn"
            @click="dmenu = false"
          />
          <div class="row up">
            <a href="mailto:contacto@control-e.com">
              <img src="../../assets/mail.svg" alt="email" />
              contacto@control-e.com
            </a>
            <a href="tel:+526622136415">
              <img src="../../assets/phone.svg" alt="tel" />
              Tels: (52) (662) 213 6415,</a
            >
            <a href="tel:+526622136416">213 6416,</a>
            <a href="tel:+526622136417">213 6417 </a>
          </div>
          <div class="row un" :class="{ scrolled: scr > 0 }">
            <a
              href="/"
              @click="click('Home')"
              :class="{ active: hop == 'Home' }"
              >HOME</a
            >
            <a href="/about-us" 
              @click="click('about-us')"
              :class="{ active: hop == 'about-us' }">ABOUT</a>
            <a href="/projects"
              @click="click('projects')"
              :class="{ active: hop == 'projects' }">PROJECTS</a>
            <a href="/services"
              @click="click('services')"
              :class="{ active: hop == 'services' }">SERVICES</a>
            <a
              href="/blog"
              @click="click('blog')"
              :class="{ active: hop == 'blog' }"
              >NEWS</a
            >
            <a href="/social-responsability"
              @click="click('social-responsability')"
              :class="{ active: hop == 'social-responsability' }">SOCIAL RESPONSABILITY</a>
          </div>
          <div class="row mob">
            <div class="input-c">
              <img src="../../assets/lupa.svg" alt="lupa" class="lupa" />
              <input type="search" name="search" id="search" />
            </div>
            <div class="sm-c">
              <a href="" class="sm-i">
                <img src="../../assets/sm-m-1.svg" alt="sm" />
              </a>
              <a href="" class="sm-i">
                <img src="../../assets/sm-m-2.svg" alt="sm" />
              </a>
              <a href="" class="sm-i">
                <img src="../../assets/sm-m-3.svg" alt="sm" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      dmenu: false,
      scr: 0,
      act: false,
    };
  },
  created() {
    let nav = localStorage.getItem("ruta");
    this.setHistoryOptionNavi(nav);
  },
  computed: {
    hop() {
      return this.$store.getters["navi/getHistoryOption"];
    },
  },
  methods: {
    ...mapActions("navi", ["setHistoryOptionNavi"]),

    click(val) {
      window.localStorage.setItem("ruta", val);
      this.setHistoryOptionNavi(val);
      this.act = false;
    },
    scrollNum(event) {
      let number = event.target.documentElement.scrollTop;
      let offset = number * 1;
      localStorage.setItem("scroll", offset);
      this.scr = localStorage.getItem("scroll");
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollNum);
  },
};
</script>
<style>
.navigator {
  position: fixed;
  z-index: 500;
  width: 100%;
}
.navigator .active {
  color: #e33a23 !important;
}
.nav-c {
  padding: 3.698vw 4.948vw;
  display: flex;
  justify-content: space-between;
  width: auto;
}
.navigator a.logo img {
  width: 5.521vw;
}
.navigator .menu-c section {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.navigator .row.up {
  display: flex;
}
.navigator .row.up a {
  display: flex;
  align-items: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 0.833vw;
  line-height: 168.02%;
  color: #ffffff;
  text-decoration-color: transparent;
}
.navigator .row a {
  transition: 0.5s;
}
.navigator .row a:hover {
  color: #e33a23 !important;
}
.navigator .row.up a:first-child {
  margin-right: 2.448vw;
}
.navigator .row.up a img {
  width: auto;
  height: 1.198vw;
  margin-right: 0.573vw;
}
.navigator .row.un {
  margin-top: 2.917vw;
}
.navigator .row.un a {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1.042vw;
  line-height: 1.25vw;
  text-transform: uppercase;
  color: white;
  text-decoration-color: transparent;
  margin-left: 4.688vw;
}
.navigator .barsbtn {
  display: none;
}
  .navigator {
    transition: 0.25s;
  }
  .navigator.scrolled {
    background: #0a4f8fe6;
  }
@media (min-width: 768px) {
  .navigator a.logo img {
    transition: 0.25s;
  }
  .navigator a.logo img.scrolled {
    width: 3.521vw;
  }
  .nav-c {
    transition: 0.25s;
  }
  .nav-c.scrolled {
    padding: 1.698vw 4.948vw;
  }
  .navigator .row.un {
    transition: 0.25s;
  }
  .navigator .row.un.scrolled {
    margin-top: 1.917vw;
  }
  .menu-c .row.mob {
    display: none;
  }
}
@media (max-width: 768px) { 
  .menu-c {
    width: 77.295vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    display: none;
    background-image: url("../../assets/bkmo.png");
    background-size: cover;
    background-repeat: no-repeat;
  }
  .menu-c.active {
    display: block;
  }
  .navigator .barsbtn {
    display: block;
  }
  .navigator a.logo img {
    width: 17.391vw;
  }
  .navigator .row.un {
    margin-top: 15vw;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .navigator .row.un a {
    font-size: 4.831vw;
    line-height: 5.797vw;
    margin-bottom: 8.454vw;
    text-align: right;
  }
  .menu-c .secm {
    padding: 10.411vw 9.662vw 13.527vw 11.353vw;
  }
  .navigator .row.up {
    display: none;
  }
  .menu-c .input-c {
    border: 0.121vw solid #ffffff;
    border-radius: 17.246vw;
    display: flex;
    align-items: center;
    padding: 4.348vw 0 4.348vw 6.28vw;
  }
  .menu-c .input-c .lupa {
    width: 8.696vw;
  }
  .menu-c .input-c input {
    width: 39.614vw;
    background: transparent;
    border: none;
    color: white;
  }
  .menu-c .sm-c {
    display: flex;
    justify-content: space-between;
    margin-top: 7.488vw;
  }
  .menu-c .sm-c .sm-i img {
    width: 13.527vw;
    height: 13.527vw;
  }
}
</style>