<template >
  <div id="SocialRes">
    <Navigator />
    <div class="serv-hsr">
      <p>Social Responsability</p>
    </div>
    <div id="sr_view">
      <div id="sr_pc">
        <div class="sr_blq1">
          <div class="blq1_cnt">
            <div class="blq1_item">
              <p class="blq1_ttl ttlb">Enviromental Responsability</p>
              <p class="blq1_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <img
                src="../assets/social/spc1.png"
                alt="Enviromental Responsability"
              />
            </div>
            <div class="blq1_item">
              <img
                src="../assets/social/spc2.png"
                alt="Ethical Responsability"
              />
              <p class="blq1_ttl ttlr">Ethical Responsability</p>
              <p class="blq1_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div class="blq1_item">
              <p class="blq1_ttl ttlb">Philanthropic Responsability</p>
              <p class="blq1_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <img
                src="../assets/social/spc3.png"
                alt="Philanthropic Responsability"
              />
            </div>
          </div>
        </div>
        <hr class="hrbl1" />
        <div class="sr_blq2">
          <div class="blq2_item">
            <img :src="entrada.image" alt="" />
            <div>
              <p class="blq2_cat">{{ entrada.category }}</p>
              <p class="blq2_ttl">{{ entrada.title }}</p>
              <p class="blq2_text">{{ limitWords(entrada.body) }}</p>
              <div class="blq2_item_foo">
                <img
                  class="blq2_clock"
                  src="../assets/social/Clock.png"
                  alt=""
                />
                <p class="blq2_date">{{ entrada.date }}</p>
                <a href="#" class="a_read_more">Read more</a>
              </div>
            </div>
          </div>
        </div>
        <div class="slider_sr_blq2">
          <carousel :perPage="3" navigationEnabled :loop="true">
            <slide v-for="(item, index) in entradas" :key="index">
              <div class="item_sldr_blq2">
                <img class="img_sldr2" :src="item.image" alt="" />
                <div class="sldr_blq2_foo">
                  <img
                    class="sldr_blq2_clock"
                    src="../assets/social/Clock.png"
                    alt=""
                  />
                  <p class="sldr_blq2_date">{{ item.date }}</p>
                  <p class="sldr_blq2_cat">{{ item.category }}</p>
                </div>
                <p class="sldr_blq2_ttl">{{ item.title }}</p>
                <p class="sldr_blq2_text">{{ limitWords(item.body) }}</p>
                <a href="#" class="sldr_a_read_more">Read more</a>
              </div>
            </slide>
          </carousel>
        </div>
        <div class="btn-csr">
          <a href="#">
            <img
              class="img-btn-csr"
              src="../assets/social/bntmaspc.png"
              alt=""
            />
          </a>
        </div>
      </div>

      <!-- MOVIL -->
      <div id="sr_mv">
        <div class="slider_sr_mv">
          <carousel :perPage="1" navigationEnabled :loop="true">
            <slide>
              <div class="blq1_item">
                <p class="blq1_ttl ttlb">Enviromental Responsability</p>
                <p class="blq1_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <img
                  src="../assets/social/spc1.png"
                  alt="Enviromental Responsability"
                />
              </div>
            </slide>
            <slide>
              <div class="blq1_item">
                <img
                  src="../assets/social/spc2.png"
                  alt="Ethical Responsability"
                />
                <p class="blq1_ttl ttlr">Ethical Responsability</p>
                <p class="blq1_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </slide>

            <slide>
              <div class="blq1_item">
                <p class="blq1_ttl ttlb">Philanthropic Responsability</p>
                <p class="blq1_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <img
                  src="../assets/social/spc3.png"
                  alt="Philanthropic Responsability"
                />
              </div>
            </slide>
          </carousel>

          <img src="../assets/desliza.svg" alt="deslizar" class="deslz" />
        </div>

        <hr class="hr_blq1_mv" />

        <div class="blq_ent_mv">
          <div class="cont_ent">
            <div class="ent_item" v-for="(item, key) in entradas" :key="key">
              <img class="blq_ent_img" :src="item.image" alt="" />
              <p class="blq_ent_cat">{{ item.category }}</p>
              <p class="blq_ent_title">{{ item.title }}</p>
              <div class="blq_ent_foo">
                <img
                  class="blq_ent_clock"
                  src="../assets/social/Clock.png"
                  alt=""
                />
                <p class="blq_ent_date">{{ item.date }}</p>
              </div>
              <p class="blq_ent_text">{{ limitWords(item.body) }}</p>
              <a href="#" class="blq_ent_read_more">Read more</a>
            </div>
          </div>
        </div>
        <div class="btn-csr">
          <a href="#">
            <img
              class="img-btn-csr"
              src="../assets/social/bntmaspc.png"
              alt=""
            />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>
<script>
import Navigator from "../components/fixed/Navigator.vue";
import Footer from "../components/fixed/Footer.vue";
import { Carousel, Slide } from "vue-carousel";

import imagedefault4 from "../assets/social/spc4.png";
import imagedefault5 from "../assets/social/spc5.png";
import imagedefault6 from "../assets/social/spc6.png";
import imagedefault7 from "../assets/social/spc7.png";
export default {
  name: "social_responsability",
  components: {
    Navigator,
    Footer,
    Carousel,
    Slide,
  },
  data() {
    return {
      entrada: {
        title: "Games Night",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "October 12, 2022",
        category: "CSR",
        image: imagedefault4,
      },
      entradas: [
        {
          title: "Health and Security Conference",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          date: "October 12, 2022",
          category: "CSR",
          image: imagedefault5,
        },

        {
          title: "“Día de Muertos” Celebration",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          date: "October 12, 2022",
          category: "CSR",
          image: imagedefault6,
        },
        {
          title: "Games Night",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          date: "October 12, 2022",
          category: "CSR",
          image: imagedefault7,
        },
        {
          title: "2Health and Security Conference",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          date: "October 12, 2022",
          category: "CSR",
          image: imagedefault5,
        },

        {
          title: "2“Día de Muertos” Celebration",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          date: "October 12, 2022",
          category: "CSR",
          image: imagedefault6,
        },
        {
          title: "2Games Night",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          date: "October 12, 2022",
          category: "CSR",
          image: imagedefault7,
        },
      ],
    };
  },
  metaInfo() {
    return {
      title: "Social Responsability",
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
  methods: {
    limitWords(yourString) {
      let maxLength = 240;
      let trimmedString = yourString.substr(0, maxLength);
      trimmedString = trimmedString.substr(
        0,
        Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
      );
      return trimmedString + "...";
    },
  },
};
</script>
<style >
#sr_view {
  margin-top: 8.281vw;
  overflow: hidden;
}
.sr_blq1 {
  display: flex;
  justify-content: center;
}
.blq1_cnt {
  display: flex;
}
.blq1_item {
  width: 19.531vw;
}
.blq1_item:first-child {
  margin-right: 4.219vw;
}
.blq1_item:last-child {
  margin-left: 4.219vw;
}
.blq1_item img {
  width: 19.531vw;
}
p.blq1_text {
  font-size: 1.302vw;
  color: rgba(183, 183, 183, 1);
  font-family: var(--Inter);
  margin-bottom: 1.51vw;
  font-weight: 400;
  margin-top: 1.406vw;
}

p.blq1_ttl {
  font-size: 2.344vw;
  font-family: var(--Montserrat);
  font-weight: 600;
  margin-top: 0vw;
}
p.ttlr {
  color: rgba(227, 58, 35, 1);
  margin-top: 1.719vw;
}
p.ttlb {
  color: rgba(10, 79, 143, 1);
}

hr.hrbl1 {
  width: 76.927vw;
  margin-bottom: 6.25vw;
  margin-top: 6.25vw;
}
#sr_mv {
  display: none;
}

.blq2_item {
  display: flex;
  width: 63.281vw;
  margin-left: 16.51vw;
}
.blq2_item img {
  margin-right: 2.24vw;
  height: 18.333vw;
  width: 30.417vw;
}
.blq2_item_foo {
  display: flex;
}
p.blq2_cat {
  color: #e33a23;
  font-family: var(--Montserrat);
  font-weight: 600;
  font-size: 0.573vw;
  width: 6.042vw;
  border: 2px solid rgba(227, 58, 35, 1);
  text-align: center;
  height: 1.51vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10vw;
  margin-bottom: 3.333vw;
}
p.blq2_ttl {
  font-family: var(--Montserrat);
  font-weight: 700;
  font-size: 1.302vw;
  margin: 0vw;
}
p.blq2_text {
  font-family: var(--Inter);
  font-size: 1.042vw;
  font-weight: 400;
  margin-bottom: 2.708vw;
  margin-top: 0.469vw;
  height: 7.083vw;
  color: #b7b7b7;
}
img.blq2_clock {
  width: 0.938vw;
  height: 0.938vw;
  margin-right: 0.625vw;
}
.sr_blq2 {
  margin-bottom: 5.885vw;
}
p.blq2_date {
  font-size: 0.729vw;
  font-family: var(--Montserrat);
  color: rgba(217, 217, 217, 1);
  width: 75%;
}
a.a_read_more {
  color: rgba(227, 58, 35, 1);
  font-size: 1.042vw;
  text-decoration: none;
  font-weight: 600;
  font-family: var(--Montserrat);
}

.slider_sr_blq2 {
  width: 60.979vw;
  margin-left: 16.51vw;
  margin-bottom: 3.385vw;
}
p.sldr_blq2_cat {
  color: #e33a23;
  font-family: var(--Montserrat);
  font-weight: 600;
  font-size: 0.573vw;
  width: 6.042vw;
  border: 2px solid rgba(227, 58, 35, 1);
  text-align: center;
  height: 1.51vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10vw;
  margin-bottom: 3.333vw;
}

p.sldr_blq2_ttl {
  color: rgba(0, 0, 0, 1);
  font-weight: 700;
  font-family: var(--Montserrat);
  font-size: 1.302vw;
  margin-top: 1.406vw;
  margin-bottom: 0.885vw;
  width: 80%;
}

p.sldr_blq2_text {
  width: 18.75vw;
  font-size: 0.833vw;
  font-family: var(--Inter);
  color: rgba(217, 217, 217, 1);
  height: 7.083vw;
}
.item_sldr_blq2 {
  width: 18.75vw;
}
img.img_sldr2 {
  width: 100%;
  margin-bottom: 1.458vw;
}
.sldr_blq2_foo {
  display: flex;
}
img.sldr_blq2_clock {
  width: 0.938vw;
  height: 0.938vw;
  margin-right: 0.625vw;
  padding-top: 0.4vw;
}
p.sldr_blq2_date {
  font-size: 0.729vw;
  width: 78%;
  color: rgba(217, 217, 217, 1);
  padding-top: 0.4vw;
}

a.sldr_a_read_more {
  color: rgba(227, 58, 35, 1);
  font-size: 1.042vw;
  text-decoration: none;
  font-weight: 600;
  font-family: var(--Montserrat);
}
.btn-csr {
  display: flex;
  justify-content: center;
  margin-bottom: 6.458vw;
}
img.img-btn-csr {
  width: 3.385vw;
  height: 3.385vw;
}
.serv-hsr {
  background-image: url("../assets/social/banner-sr.png");
  height: 31.927vw;
  background-size: 100%;
  background-repeat: no-repeat;
}
.serv-hsr p {
  font-size: 4.427vw;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  text-align: center;
  color: #ffffff;
  padding-top: 16.5vw;
}
.VueCarousel-pagination {
  display: none;
}
.slider_sr_blq2 {
  cursor: grab;
}
@media (max-width: 768px) {
  .VueCarousel-navigation {
    display: none;
  }
  #sr_view {
    margin-top: 18.599vw;
  }
  #sr_mv {
    display: block;
  }
  #sr_pc {
    display: none;
  }
  .blq1_item {
    width: 75.362vw;
  }

  .serv-hsr {
    background-image: url("../assets/social/banner-sr-mv.png");

    height: 115.7vw;
  }
  .serv-hsr p {
    padding-top: 83vw;
    font-size: 10.87vw;
    line-height: 102.4%;
  }

  .slider_sr_mv {
    margin-left: 12.319vw;
    margin-bottom: 16.184vw;
  }

  .blq1_item:first-child {
    margin-right: 0vw;
  }
  .blq1_item:last-child {
    margin-left: 0vw;
  }

  p.blq1_ttl {
    font-size: 8.454vw;
  }
  p.blq1_text {
    font-size: 4.831vw;
    margin-top: 7.005vw;
    margin-bottom: 10.87vw;
  }
  .blq1_item img {
    width: 75.362vw;
  }
  hr.hr_blq1_mv {
    width: 84.783vw;
  }
  img.img-btn-csr {
    width: 15.7vw;
    height: 15.7vw;
    margin-bottom: 21.014vw;
    margin-top: 21.014vw;
  }
  .blq_ent_mv {
    display: flex;
    justify-content: center;
    margin-top: 18.599vw;
  }
  .cont_ent {
    width: 79.71vw;
  }
  .ent_item {
    width: 100%;
    margin-bottom: 13.043vw;
  }
  img.blq_ent_img {
    margin-bottom: 3.865vw;
    width: 100%;
  }
  p.blq_ent_cat {
    color: #e33a23;
    font-family: var(--Montserrat);
    font-weight: 600;
    font-size: 2.657vw;
    width: 28.019vw;
    border: 2px solid rgba(227, 58, 35, 1);
    text-align: center;
    height: 7.005vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10vw;
    margin-bottom: 4.348vw;
  }
  p.blq_ent_title {
    font-size: 6.039vw;
    font-family: var(--Montserrat);
    font-weight: 700;
    line-height: 8.418vw;
    margin-bottom: 2.174vw;
  }
  .blq_ent_foo {
    display: flex;
    margin-bottom: 2.174vw;
  }
  p.blq_ent_date {
    font-size: 3.382vw;
    font-family: var(--Montserrat);
    color: rgba(217, 217, 217, 1);
  }
  img.blq_ent_clock {
    height: 4.348vw;
    width: 4.348vw;
    margin-right: 2.899vw;
  }
  p.blq_ent_text {
    font-weight: 400;
    font-size: 4.831vw;

    font-family: var(--Inter);
    color: rgba(183, 183, 183, 1);
    margin-bottom: 3.865vw;
  }
  a.blq_ent_read_more {
    color: rgba(227, 58, 35, 1);
    font-size: 4.831vw;
    text-decoration: none;
    font-weight: 600;
    font-family: var(--Montserrat);
  }
  img.deslz {
    width: 24.638vw;
    margin: 6.28vw 25.362vw 0;
    display: flex;
  }
}
</style>