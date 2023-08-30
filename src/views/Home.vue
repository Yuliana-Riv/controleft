<template >
  <div id="Home">
    <div class="modal-b" v-if="modal == true" @click="modal = false">
      <div class="modal-cont" @click.stop>
        <div class="mc-c"></div>
      </div>
    </div>
    <Navigator />
    <div class="home-b">
      <div class="s1">
        <div class="s1c">
          <carousel :perPage="1" navigationEnabled paginationEnabled>
            <slide class="slide-item bk">
              <div class="sl-i-c">
                <p class="title">
                  Integral solutions <span>for industrial automation</span>
                </p>
                <p class="descr">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
                <div class="logos-cont pc">
                  <img src="../assets/logos1.png" alt="logo" class="logo" />
                  <img src="../assets/logos2.png" alt="logo" class="logo" />
                </div>
                <div class="logos-cont mo">
                  <agile :options="opcionesD" class="sl-b">
                    <div>
                      <img src="../assets/sl1.svg" alt="logo" class="logo" />
                    </div>
                    <div>
                      <img src="../assets/sl2.svg" alt="logo" class="logo" />
                    </div>
                    <div>
                      <img src="../assets/sl3.svg" alt="logo" class="logo" />
                    </div>
                    <div>
                      <img src="../assets/sl4.svg" alt="logo" class="logo" />
                    </div>
                    <div>
                      <img src="../assets/sl5.svg" alt="logo" class="logo" />
                    </div>
                    <div>
                      <img src="../assets/sl6.svg" alt="logo" class="logo" />
                    </div>
                  </agile>
                </div>
              </div>
            </slide>
            <slide class="slide-item bk">
              <div class="sl-i-c">
                <p class="title">
                  Integral solutions <span>for industrial automation</span>
                </p>
                <p class="descr">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
                <div class="logos-cont pc">
                  <img src="../assets/logos1.png" alt="logo" class="logo" />
                  <img src="../assets/logos2.png" alt="logo" class="logo" />
                </div>
                <div class="logos-cont mo">
                  <agile :options="opcionesD" class="sl-b">
                    <div>
                      <img src="../assets/sl1.svg" alt="logo" class="logo" />
                    </div>
                    <div>
                      <img src="../assets/sl2.svg" alt="logo" class="logo" />
                    </div>
                    <div>
                      <img src="../assets/sl3.svg" alt="logo" class="logo" />
                    </div>
                    <div>
                      <img src="../assets/sl4.svg" alt="logo" class="logo" />
                    </div>
                    <div>
                      <img src="../assets/sl5.svg" alt="logo" class="logo" />
                    </div>
                    <div>
                      <img src="../assets/sl6.svg" alt="logo" class="logo" />
                    </div>
                  </agile>
                </div>
              </div>
            </slide>
          </carousel>
        </div>
      </div>

      <div class="s2 bk">
        <div class="s2c">
          <div class="tc">
            <p class="t1">About Us</p>
            <p class="t2">Who We Are</p>
          </div>
          <div class="txtc">
            <p>
              Since 1995, Control-E has specialized in bringing up to date
              technology industry solutions in an environment and community
              responsible matter.
            </p>
            <p>
              Control-e has as an objective that all our clients reach their
              production and cost saving goals, maximizing the quality of their
              product. We have built our organization by recruiting
              professionals who share our philosophy of looking for an
              environment of equal opportunities for growing and developing
              together as a team.
            </p>
            <a href="" class="btn-o">View More</a>
          </div>
        </div>
      </div>

      <div class="s3">
        <div class="c1">
          <p>Certifications</p>
        </div>
        <div class="c2">
          <div class="logo brt">
            <img src="../assets/c1.png" alt="logo" />
          </div>
          <div class="logo brt">
            <img src="../assets/c2.png" alt="logo" />
          </div>
          <div class="logo">
            <img src="../assets/c3.png" alt="logo" />
          </div>
        </div>
      </div>

      <div class="s4">
        <p class="s4t">Services</p>
        <img src="../assets/bk3.svg" alt="bk3" class="bk3" />
        <div class="s4c">
          <div class="s4s1">
            <img src="../assets/s1.png" class="img-c" alt="img" />
            <div class="cl1">
              <img src="../assets/i1.png" class="img-i" alt="icon" />
              <div class="txtc">
                <p class="t1">Industrial Automation</p>
                <p class="t2">
                  In Control-e we car perform Hardware & Software Design, PLC,
                  HMI, site commissioning, software emulation and start up for
                  all your automated systems.
                </p>
              </div>
            </div>
          </div>
          <div class="s4s2">
            <div class="cl1">
              <img src="../assets/i2.png" class="img-i" alt="icon" />
              <div class="txtc">
                <p class="t1">Industrial Information Technology</p>
                <p class="t2">
                  We develop solutions oriented to Manufacturing process
                  controls, our Data-collection solutions use a system of
                  communication tools protocols to share and store information
                  being collected real time on your production floor, at the
                  time and place it is needed, to have a complete view of your
                  production process starting at machine level, following a
                  production line or your complete factory.
                </p>
              </div>
            </div>
            <img src="../assets/s2.png" class="img-c pc" alt="img" />
            <img src="../assets/s2m.png" class="img-c mo" alt="img" />
          </div>
          <div class="s4s3">
            <img src="../assets/s3.png" class="img-c" alt="img" />
            <div class="cl1">
              <section>
                <img src="../assets/i3.png" class="img-i" alt="icon" />
                <div class="txtc">
                  <p class="t1">Controls Oriented Field Wiring</p>
                  <p class="t2">
                    We have extense experience in performing complete Design
                    Engineering, Tray and Busway Layouts in 3D, installation,
                    commissioning in all Control Related Electrical Field
                    Wiring.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div class="s5">
        <p class="s5t">Latest Projects</p>
        <div class="s5c">
          <div class="projects-c">
            <div class="scrolled">
              <div
                class="procont"
                v-for="(p, i) in datapro"
                :key="i"
                :style="{ 'background-image': 'url(' + srcImg(p.image) + ')' }"
              >
                <div class="procont2" :class="'cont' + (i + 1)">
                  <p class="tl">{{ p.title }}</p>
                   <img src="../assets/plus.svg" alt="btn" class="button" 
          @click="modal = true"
                  /> 
                </div>
              </div>
            </div>
          </div>
          <div class="scroll-c-arr">
            <img
              @click="btnleft()"
              src="../assets/left.svg"
              alt="left"
              class="arr-c"
            />
            <img
              @click="btnright()"
              src="../assets/right.svg"
              alt="right"
              class="arr-c"
            />
          </div>
          <a href="/projects" class="btn-o">View More</a>
        </div>
      </div>

      <div class="s6">
        <div class="s6c">
          <p class="title">News</p>
          <carousel
            :perPage="4"
            navigationEnabled
            :paginationEnabled="false"
            class="slnw-pc"
          >
            <slide v-for="(b, i) in blog" :key="i">
              <a href="">
                <div class="newcont">
                  <img :src="b.image" alt="news" class="image" />
                  <p class="tl">{{ b.title }}</p>
                  <p class="date">
                    <img src="../assets/reloj.svg" alt="date" />{{ b.date }}
                  </p>
                </div>
              </a>
            </slide>
          </carousel>
          <div class="slnw-mo">
            <section class="scrolled scrbl">
              <div v-for="(b, i) in blog" :key="i">
                <a href="">
                  <div class="newcont">
                    <img :src="b.image" alt="news" class="image" />
                    <p class="tl">{{ b.title }}</p>
                    <p class="date">
                      <img src="../assets/reloj.svg" alt="date" />{{ b.date }}
                    </p>
                  </div>
                </a>
              </div>
            </section>
          </div>
          <div class="scroll-c-arr">
            <img
              @click="btnleft2()"
              src="../assets/left.svg"
              alt="left"
              class="arr-c"
            />
            <img
              @click="btnright2()"
              src="../assets/right.svg"
              alt="right"
              class="arr-c"
            />
          </div>
        </div>
      </div>

      <div class="s7">
        <div class="s7c">
          <p class="titulo">Some Reviews of Out Clients</p>
          <div class="rev-c">
            <div class="review" v-for="(r, i) in reviews" :key="i">
              <img :src="r.image" alt="image" />
              <p class="t1">
                <b>{{ r.name }}</b>
              </p>
              <p class="t2">{{ r.area }}</p>
              <p class="desc">“{{ r.descr }}”.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import { url, endpointCodes } from "../global/index";
import Navigator from "../components/fixed/Navigator.vue";
import Footer from "../components/fixed/Footer.vue";
import { Carousel, Slide } from "vue-carousel";
import { mapActions } from "vuex";
export default {
  name: "HOME",
  data() {
    return {
      url,
      modal:false,
      opcionesD: {
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        navButtons: false,
        dots: false,
      },

      projects: [
        {
          title: "GM Ramos Battery Tray Conveyors.",
          image: require("../assets/lp1.png"),
        },
        {
          title: "GM Ramos Chassis Modifications.",
          image: require("../assets/lp2.png"),
        },
        {
          title: "GM Silao New PTED Shop.",
          image: require("../assets/lp3.png"),
        },
      ],
      blog: [
        {
          image: require("../assets/bl1.png"),
          title:
            "Ford Cuautitlan B299 Body Secuencer System for Deck Lid, Lift Gate, Rear Door.",
          date: "12/10/2022",
        },
        {
          image: require("../assets/bl1.png"),
          title:
            "Ford Cuautitlan B299 Body Secuencer System for Deck Lid, Lift Gate, Rear Door.",
          date: "12/10/2022",
        },
        {
          image: require("../assets/bl2.png"),
          title:
            "Ford Cuautitlan B299 Body Secuencer System for Deck Lid, Lift Gate, Rear Door.",
          date: "12/10/2022",
        },
        {
          image: require("../assets/bl3.png"),
          title:
            "Ford Cuautitlan B299 Body Secuencer System for Deck Lid, Lift Gate, Rear Door.",
          date: "12/10/2022",
        },
        {
          image: require("../assets/bl4.png"),
          title:
            "Ford Cuautitlan B299 Body Secuencer System for Deck Lid, Lift Gate, Rear Door.",
          date: "12/10/2022",
        },
      ],
      reviews: [
        {
          name: "Mark Rise",
          area: "CEO Ford Hermosillo",
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          image: require("../assets/rv1.png"),
        },
        {
          name: "Jessica Jones",
          area: "CEO GM Ramos",
          descr:
            "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          image: require("../assets/rv2.png"),
        },
        {
          name: "Rachel Maddow",
          area: "CEO Ford Cuautitlán",
          descr:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          image: require("../assets/rv3.png"),
        },
      ],
    };
  },
  components: {
    Navigator,
    Carousel,
    Footer,
  },
  metaInfo() {
    return {
      title: "Welcome",
      titleTemplate: "%s | Control E",
      htmlAttrs: {
        lang: "es",
      },
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content:
            "Control E.",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    };
  },
  created() {
    this.getAllInfoPrj("project");
  },
  computed: {
    datapro() {
      let arr = this.$store.getters["project/data"];
      let narr = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].statusproject == "VISIBLE") {
          narr.push(arr[i]);
        }
      }
      return narr.slice(0, 3);
    },
  },
  methods: {
    ...mapActions("project", ["getAllInfoPrj"]),

    btnleft() {
      let sl = document.getElementsByClassName("projects-c")[0];
      sl.scrollLeft -= 302;
    },
    btnright() {
      let sl = document.getElementsByClassName("projects-c")[0];
      sl.scrollLeft += 302;
    },

    btnleft2() {
      let sl = document.getElementsByClassName("slnw-mo")[0];
      sl.scrollLeft -= 271.75;
    },
    btnright2() {
      let sl = document.getElementsByClassName("slnw-mo")[0];
      sl.scrollLeft += 271.75;
    },
    srcImg: function (img) {
      let src = `${url}/${endpointCodes.get}/project-img/${img}`;

      this.status_img(img);

      return src;
    },
    status_img: async function (img) {
      let payload = {
        option: "project-img",
        image: img,
      };
      let response = "";

      try {
        response = await this.$store.dispatch("main/getStatusImage", payload);
        if (response.data.status == "error") {
          this.statusimg = "error";
        } else {
          this.statusimg = "success";
        }
      } catch (err) {
        this.statusimg = "error";
      }
    },
  },
};
</script>
<style >
.bk {
  background-size: cover;
  background-repeat: no-repeat;
}
.s1 .slide-item.bk {
  background-image: url("../assets/slide.png");
}
.s1 .sl-i-c {
  padding: 18.281vw 7.24vw 2.344vw 7.813vw;
}
.s1 .sl-i-c .title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 4.427vw;
  line-height: 102.4%;
  color: #ffffff;
  width: 43.229vw;
  margin: 0 0 3.385vw 4.792vw;
}
.s1 .sl-i-c .descr {
  width: 33.333vw;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.146vw;
  line-height: 1.406vw;
  color: #ffffff;
  margin: 0 0 4.635vw 4.792vw;
}
.s1 .sl-i-c .title span {
  color: #e33a23;
}
.s1 .logos-cont.pc {
  display: flex;
  justify-content: space-between;
}
.s1 .logos-cont.mo {
  display: none;
}
.s1 .logos-cont.pc .logo {
  width: auto;
  height: 8.906vw;
}
.s2 {
  background-image: url("../assets/bk2.png");
}
.s2 .s2c {
  width: 41.771vw;
  padding: 6.875vw 0 8.958vw;
  margin: auto;
}
.s2 .s2c p {
  font-family: "Inter";
  color: white;
}
.s2 .tc {
  width: fit-content;
  margin: 0 auto 5.208vw;
}
.s2 .tc .t1 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 0.833vw;
  line-height: 1.042vw;
  margin-bottom: 0.781vw;
}
.s2 .tc .t2 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 2.344vw;
  line-height: 2.865vw;
  text-align: center;
  color: #e33a23 !important;
}
.s2 .txtc {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.s2 .txtc p {
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.042vw;
  line-height: 178.52%;
  margin-bottom: 2.344vw;
}
.s2 a.btn-o {
  margin-top: 5.052vw;
  background: #e33a23;
  border-radius: 2.604vw;
  color: white;
  text-decoration-color: transparent;
  padding: 1.458vw 4.271vw;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 0.938vw;
  line-height: 1.146vw;
  transition: 0.5s;
}
.s2 a.btn-o:hover {
  background: white;
  color: #e33a23;
}
.s3,
.s3 .c2 {
  display: flex;
}
.s3 .c1 {
  background: #e33a23;
  width: 25%;
  height: 24.479vw;
}
.s3 .c1 p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 2.344vw;
  line-height: 2.865vw;
  text-align: center;
  color: #ffffff;
  margin-top: 11.198vw;
}
.s3 .c2 {
  width: 75%;
}
.s3 .c2 .logo {
  width: 33.33%;
  height: 13.906vw;
  margin-top: 5.365vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.s3 .c2 .logo.brt {
  border-right: 0.3vw dotted gray;
}
.s3 .c2 .logo img {
  width: auto;
  height: 7.813vw;
}
.s4 .bk3 {
  position: absolute;
  left: 0;
  width: 49.635vw;
  margin-top: -9.948vw;
}
.s4 .s4t {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 2.344vw;
  line-height: 2.865vw;
  text-align: center;
  color: #e33a23;
  padding: 10.365vw 0 10.938vw;
}
.s4 .s4c {
  padding: 0 7.396vw 7.813vw;
}
.s4 .s4s1,
.s4 .s4s2,
.s4 .s4s3 {
  display: flex;
}
.s4 .s4s1 .img-c {
  width: 38.542vw;
}
.s4 .s4s2 .img-c {
  width: 38.542vw;
}
.s4 .s4s3 .img-c {
  width: 46.615vw;
}
.s4 .s4s3 .cl1 .img-i {
  width: 9.063vw;
}
.s4 .s4s1 .cl1 {
  background: #0a4f8f;
  display: flex;
}
.s4 .s4s1 .cl1 .txtc {
  margin: 9.583vw 7.552vw 0 2.083vw;
}
.s4 .s4s1 .cl1 .txtc p.t1 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 1.198vw;
  line-height: 159.4%;
  margin-bottom: 3.542vw;
}
.s4 .s4s1 .cl1 .txtc p.t2 {
  font-weight: 400;
  font-size: 1.042vw;
  line-height: 178.52%;
}
.s4 .s4s1 .cl1 .txtc p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  color: #ffffff;
}
.s4 .s4s1 .cl1 .img-i {
  width: 9.063vw;
  height: 9.063vw;
  margin: 13.958vw 0 0 4.531vw;
}
.s4 .s4s2 .cl1 {
  background: white;
  display: flex;
}
.s4 .s4s2 .cl1 .img-c {
  width: 38.542vw;
}
.s4 .s4s2 .cl1 .img-i {
  margin: 20.521vw 2.813vw 0 0;
  width: 9.063vw;
  height: 9.063vw;
}
.s4 .s4s2 .cl1 .txtc {
  margin: 12.865vw 13.275vw 0 0;
}
.s4 .s4s2 .cl1 .txtc p.t1 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 1.198vw;
  line-height: 159.4%;
  margin-bottom: 3.427vw;
  width: 13.594vw;
}
.s4 .s4s2 .cl1 .txtc p.t2 {
  font-weight: 400;
  font-size: 1.042vw;
  line-height: 178.52%;
  color: #747474;
}
.s4 .s4s3 .cl1 {
  background: #e33a23;
}
.s4 .s4s3 .cl1 .img-c {
  width: 46.615vw;
}
.s4 .s4s3 .cl1 .txtc p {
  color: white;
}
.s4 .s4s3 .cl1 section {
  margin: 6.51vw 9.177vw 0 9.323vw;
}
.s4 .s4s3 .cl1 .txtc {
  margin-left: 0.677vw;
}
.s4 .s4s3 .cl1 .txtc .t1 {
  width: 13vw;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 1.198vw;
  line-height: 159.4%;
  margin: 1.823vw 0 4.115vw;
}
.s4 .s4s3 .cl1 .txtc p.t2 {
  font-weight: 400;
  font-size: 1.042vw;
  line-height: 178.52%;
}
.s5 {
  background-color: #f7f7f8;
  background-image: url("../assets/bk4.svg");
  background-repeat: no-repeat;
  background-size: 59.219vw;
  background-position-x: right;
  background-position-y: 2.604vw;
}
.s5 .s5c {
  display: flex;
  flex-direction: column;
  padding-bottom: 7.5vw;
  align-items: center;
}
.s5 .s5t {
  text-align: center;
  padding: 10vw 0 7.76vw;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 2.344vw;
  line-height: 2.865vw;
  text-align: center;
  color: #e33a23;
}
.s5 .projects-c {
  display: flex;
  width: fit-content;
  margin: 0 auto 7.24vw;
}
.s5 .projects-c .scrolled {
  display: flex;
}
.s5 .procont2 {
  width: 28.542vw;
  height: 36.875vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.s5 .procont {
  background-size: cover;
  background-position: center;
  width: 28.542vw;
  height: 36.875vw;
}
.s5 .procont2.cont1 {
  background-color:  rgba(0, 0, 0, 0.8);
}
.s5 .procont2.cont2 {
  background-color:  rgba(10, 79, 143, 0.8);
}
.s5 .procont2.cont3 {
  background-color:  rgba(227, 58, 35, 0.8);
}
.s5 .procont .tl {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1.354vw;
  line-height: 159.4%;
  text-align: center;
  color: #ffffff;
  width: 16.458vw;
  margin: 16.198vw auto 7.865vw;
}
.s5 .procont img.button {
  width: 3.385vw;
cursor: pointer;
}
.s5 a.btn-o {
  border: 0.01vw solid #e33a23;
  border-radius: 2.604vw;
  color: #e33a23;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 0.938vw;
  line-height: 1.146vw;
  text-align: center;
  padding: 1.563vw 4.271vw;
  text-decoration-color: transparent;
  transition: 0.5s;
}
.s5 a.btn-o:hover {
  background-color: #e33a23;
  color: white;
}
.s6 {
  background-color: #000000;
  background-image: url("../assets/bk5.svg");
  background-repeat: no-repeat;
  background-size: 44vw;
  background-position-y: 4.5vw;
  background-position-x: 2.5vw;
}
.s6 .s6c {
  padding: 10.833vw 10.521vw;
}
.s6 .s6c a {
  text-decoration-color: transparent;
}
.s6 p.title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 2.344vw;
  line-height: 2.865vw;
  color: #ffffff;
  margin-bottom: 4.167vw;
}
.s6 .newcont img {
  width: 18.385vw;
  height: 15.469vw;
}
.s6 .newcont p.tl {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1.146vw;
  line-height: 139.4%;
  color: #ffffff;
  margin: 1.979vw 0;
}
.s6 .newcont p.date {
  display: flex;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 0.729vw;
  line-height: 139.4%;
  color: #d9d9d9;
}
.s6 .newcont p.date img {
  width: 0.938vw;
  height: 0.938vw;
  margin-right: 0.625vw;
}
.s7 {
  background: #f5f5f5;
  background-image: url("../assets/bk6.svg");
  background-size: 49.74vw;
  background-position-x: right;
  background-position-y: 2vw;
  background-repeat: no-repeat;
}
.s7 .s7c {
  padding: 10.625vw 13.073vw;
}
.s7 .s7c .titulo {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 2.344vw;
  line-height: 2.865vw;
  text-align: center;
  color: #e33a23;
  width: 21.25vw;
  margin: 0 auto 8.125vw;
}
.s7 .rev-c {
  display: flex;
  justify-content: space-between;
}
.s7 .rev-c .review {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.s7 .rev-c .review img {
  width: 11.51vw;
  height: 11.51vw;
}
.s7 .rev-c .review p.t1 {
  margin-top: 3.75vw;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 1.302vw;
  line-height: 1.563vw;
  text-align: center;
  color: #000000;
}
.s7 .rev-c .review p.t2 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 1.042vw;
  line-height: 1.25vw;
  text-align: center;
  color: #747474;
  margin: 0.833vw auto 2.708vw;
}
.s7 .rev-c .review p.desc {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.042vw;
  line-height: 1.25vw;
  text-align: center;
  color: #b7b7b7;
  width: 18.802vw;
}
.s4 .s4s2 .img-c.mo {
  display: none;
}
.s4 .s4s2 .img-c.pc {
  display: block;
}
.s5 .scroll-c-arr,
.s6 .scroll-c-arr {
  display: none;
}
.slnw-pc {
  display: block;
}
.slnw-mo {
  display: none;
}
.modal-b {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #0000008a;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-cont {
  width: 75%;
  height: 75%;
  background: white;
}
@media (max-width: 768px) {
  .s1 .slide-item.bk {
    background-image: url("../assets/slmo.png");
  }
  .s1 .sl-i-c {
    padding: 80.435vw 7.729vw 17.15vw 7.005vw;
  }
  .s1 .sl-i-c .title {
    font-size: 9.662vw;
    width: 64.229vw;
    margin: 0 0 27.778vw;
  }
  .s1 .sl-i-c .descr {
    display: none;
  }
  .s1 .logos-cont.mo {
    display: flex;
    justify-content: space-between;
  }
  .s1 .logos-cont.pc {
    display: none;
  }
  .s1 .logos-cont .sl-c {
    width: 33.3% !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .s1 .sl-b {
    width: 85vw;
  }
  img.logo {
    width: 86%;
    min-height: 7.005vw;
    max-height: 12.763vw;
    display: flex;
    margin: auto;
  }
  .s2 {
    background-image: url("../assets/bk2mo.png");
  }
  .s2 .tc .t2 {
    font-size: 10.87vw;
    line-height: 55px;
  }
  .s2 .s2c {
    width: 79.952vw;
    padding: 21.014vw 0 29.952vw;
    margin: auto;
  }
  .s2 .tc .t1 {
    font-size: 4.831vw;
    line-height: 5.797vw;
    margin-bottom: 2.657vw;
  }
  .s2 .txtc p {
    font-size: 4.831vw;
    margin-bottom: 4.831vw;
  }
  .s2 .tc {
    margin: 0 auto 17.15vw;
  }
  .s2 a.btn-o {
    margin-top: 14.7vw;
    border-radius: 20.604vw;
    padding: 6.763vw 19.807vw;
    font-size: 4.348vw;
    line-height: 5.314vw;
    transition: 0.5s;
  }
  .s3 {
    flex-direction: column;
  }
  .s3 .c1 {
    background: #e33a23;
    width: 100%;
    height: 71.014vw;
  }
  .s3 .c2 {
    width: 83.816vw;
    margin: auto;
    flex-direction: column;
    align-items: center;
    border-bottom: 0.242vw solid #b7b7b7;
  }
  .s3 .c1 p {
    font-size: 10.87vw;
    line-height: 13.285vw;
    margin-top: 28.744vw;
  }
  .s3 .c2 .logo {
    width: 64.493vw;
    height: 46.86vw;
  }
  .s3 .c2 .logo.brt {
    border-right: none !important;
    border-bottom: 0.3vw dotted gray;
  }
  .s3 .c2 .logo img {
    width: auto;
    height: 27.295vw;
  }
  .s4 .s4t {
    font-size: 10.87vw;
    line-height: 13.285vw;
    padding: 20.531vw 0 14.976vw;
  }
  .s4 .bk3 {
    width: 91.635vw;
    margin-top: -16.48vw;
    left: -7.4vw;
  }
  .s4 .s4s1,
  .s4 .s4s2,
  .s4 .s4s3 {
    display: flex;
    flex-direction: column;
  }
  .s4 .s4s2 {
    flex-direction: column-reverse;
  }
  .s4 .s4s1 .img-c,
  .s4 .s4s2 .img-c,
  .s4 .s4s3 .img-c {
    width: 100%;
  }
  .s4 .s4s2 .img-c.pc {
    display: none;
  }
  .s4 .s4s2 .img-c.mo {
    display: block;
  }
  .s4 .s4s1 .cl1 {
    flex-direction: column;
  }
  .s4 .s4s1 .cl1 .img-i,
  .s4 .s4s2 .cl1 .img-i,
  .s4 .s4s3 .cl1 .img-i {
    width: 29.71vw;
    height: 29.71vw;
    margin: 9.179vw 0 0 8.937vw;
  }
  .s4 .s4s1 .cl1 .txtc,
  .s4 .s4s2 .cl1 .txtc,
  .s4 .s4s3 .cl1 .txtc {
    margin: 4.348vw 9.179vw 13.043vw;
  }
  .s4 .s4s1 .cl1 .txtc p.t1,
  .s4 .s4s2 .cl1 .txtc p.t1,
  .s4 .s4s3 .cl1 .txtc p.t1 {
    width: 95%;
    font-size: 5.556vw;
    margin-bottom: 4.415vw;
  }
  .s4 .s4s1 .cl1 .txtc p.t2,
  .s4 .s4s2 .cl1 .txtc p.t2,
  .s4 .s4s3 .cl1 .txtc p.t2 {
    font-size: 4.831vw;
    line-height: 178.52%;
  }
  .s4 .s4s3 .cl1 section {
    margin: 0;
  }
  .s4 .s4s2 .cl1 {
    flex-direction: column;
  }
  .s5 {
    background-size: 113.219vw;
    background-position-x: 10vw;
    background-position-y: 40.604vw;
  }
  .s5 .s5t {
    font-size: 10.87vw;
    line-height: 13.285vw;
    padding: 36.957vw 0 47.343vw;
  }
  .s5 .projects-c {
    width: 100%;
    margin: 0 auto 13.043vw;
    overflow: hidden;
    overflow-x: scroll;
    transition: 0.5s;
    scroll-behavior: smooth;
  }
  .s5 .procont {
    width: 81.563vw;
    height: 117.13vw;
    transition: 0.5s;
  }
  .s5 .procont .tl {
    font-size: 6.28vw;
    width: 47.101vw;
    margin: 51.449vw auto 13.043vw;
  }
  .s5 .projects-c .scrolled {
    margin: 0 8vw;
    transition: 0.5s;
  }
  .s5 .procont img.button {
    width: 9.662vw;
  }
  .s5 .scroll-c-arr .arr-c,
  .s6 .scroll-c-arr .arr-c {
    width: 17.15vw;
  }
  .s5 .scroll-c-arr,
  .s6 .scroll-c-arr {
    width: 42.029vw;
    display: flex;
    justify-content: space-between;
    margin-bottom: 23.671vw;
  }
  .s5 a.btn-o {
    font-size: 4.348vw;
    line-height: 5.314vw;
    padding: 7.246vw 19.807vw;
    border-radius: 24.155vw;
  }
  .s5 .s5c {
    padding-bottom: 37.198vw;
  }
  .s6 {
    background-size: 74.638vw;
    background-position-y: 42.5vw;
    background-position-x: -2.85vw;
  }
  .s6 p.title {
    font-size: 10.87vw;
    line-height: 13.285vw;
    margin-bottom: 29.227vw;
    text-align: center;
  }
  .s6 .s6c {
    padding: 38.164vw 13.768vw;
  }
  .slnw-pc {
    display: none;
  }
  .slnw-mo {
    display: block;
    width: 100%;
    overflow: hidden;
    overflow-x: scroll;
    scroll-behavior: smooth;
  }
  .slnw-mo .scrolled {
    width: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 279vw;
  }
  .s6 .newcont img {
    width: 100%;
    height: 71.739vw;
  }
  .s6 .newcont p.tl {
    font-size: 5.314vw;
    margin: 8.937vw 0;
  }
  .s6 .newcont p.date {
    font-size: 3.382vw;
    line-height: 139.4%;
    margin-bottom: 12.56vw;
  }
  .s6 .newcont p.date img {
    width: 3.623vw;
    height: 3.623vw;
    margin-right: 3vw;
  }
  .s6 .scroll-c-arr {
    margin: auto;
  }
  .s6 .scroll-c-arr .arr-c {
    filter: brightness(4);
  }
  .s7 {
    background-size: 93.74vw;
    background-position-x: 12vw;
    background-position-y: 28vw;
  }
  .s7 .rev-c {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .s7 .s7c {
    padding: 40.821vw 13.073vw 20.821vw;
  }
  .s7 .s7c .titulo {
    font-size: 10.87vw;
    line-height: 13.285vw;
    width: 65.25vw;
    margin: 0 auto 23.43vw;
  }
  .s7 .rev-c .review img {
    width: 53.382vw;
    height: 53.382vw;
  }
  .s7 .rev-c .review p.t1 {
    margin-top: 17.391vw;
    font-size: 6.039vw;
    line-height: 7.246vw;
  }
  .s7 .rev-c .review p.t2 {
    font-size: 4.831vw;
    line-height: 5.797vw;
    margin: 3.382vw auto 12.56vw;
  }
  .s7 .rev-c .review p.desc {
    font-size: 4.831vw;
    line-height: 5.797vw;
    width: 83.802vw;
    margin-bottom: 16.425vw;
  }
}
</style>
