<template >
  <div id="Projects">
    <div class="modal-b" v-if="modal == true" @click="modal = false">
      <div class="modal-cont" @click.stop>
        <div class="mc-c"></div>
      </div>
    </div>
    <Navigator />
    <div class="proj-b">
      <div class="proj-h">
        <p>Projects</p>
      </div>
      <div class="pbc">
        <section
          v-for="(s, i) in data"
          :key="i"
          class="pb-item"
          @click="modal = true"
        >
          <div
            class="cont"
            :style="{ 'background-image': 'url(' + srcImg(s.image) + ')' }"
          >
            <section class="text-c">
              <p class="t1">{{ s.title }}</p>
              <p class="descr">{{ s.descr }}</p>
              <p class="seemore">Ver más</p>
            </section>
          </div>
        </section>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navigator from "../components/fixed/Navigator.vue";
import Footer from "../components/fixed/Footer.vue";
import { mapActions } from "vuex";
import { url, endpointCodes } from "../global/index";

export default {
  components: {
    Navigator,
    Footer,
  },
  data() {
    return {
      modal: false,
      projects: [
        {
          title: "Ford Cuautitlán",
          descr: "GA Modification",
          image: require("../assets/proj2.png"),
        },
        {
          title: "Ford Cuautitlán",
          descr: "GA Modification",
          image: require("../assets/proj2.png"),
        },
        {
          title: "Ford Cuautitlán",
          descr: "GA Modification",
          image: require("../assets/proj2.png"),
        },
        {
          title: "Ford Cuautitlán",
          descr: "GA Modification",
          image: require("../assets/proj2.png"),
        },
        {
          title: "Ford Cuautitlán",
          descr: "GA Modification",
          image: require("../assets/proj2.png"),
        },
      ],
    };
  },
  metaInfo() {
    return {
      title: "Projects",
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
    data() {
      let arr = this.$store.getters["project/data"];
      let narr = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].statusproject == 'VISIBLE') {
          narr.push(arr[i])
        }
      }
      return narr;
    },
  },
  methods: {
    ...mapActions("project", ["getAllInfoPrj"]),
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
.proj-b .proj-h {
  background-image: url("../assets/proj1.png");
  background-size: 100%;
  padding: 88.889vw 16.425vw 10.628vw;
}
.proj-b .proj-h p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 15.7vw;
  line-height: 102.4%;
  text-align: center;
  color: #ffffff;
}
.proj-b .pbc {
  padding: 16.908vw 8.213vw;
}
.proj-b .pb-item .text-c {
  padding: 4.106vw 5.797vw;
  background-color: #00000096;
  transition: 0.5s;
  height: 91%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.proj-b .pb-item:hover .text-c {
  background-color: #00000000;
}
.proj-b .pb-item {
  width: 83.575vw;
  height: 84.783vw;
  margin-bottom: 9.903vw;
  overflow: hidden;
}
.proj-b .pb-item .cont {
  background-size: cover;
  background-repeat: no-repeat;
  width: 83.575vw;
  height: 84.783vw;
  cursor: pointer;
}
.proj-b .pb-item .t1 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 8.454vw;
  line-height: 10.386vw;
  color: #ffffff;
}
.proj-b .pb-item .descr {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 4.831vw;
  line-height: 5.797vw;
  margin-bottom: 4.831vw;
  color: #ffffff;
}
.proj-b .pb-item .seemore {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 4.831vw;
  line-height: 5.797vw;
  color: #e33a23;
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
@media (min-width: 768px) {
  .proj-b .proj-h {
    background-image: url("../assets/proj1p.png");

    padding: 17.031vw 40.521vw 10.365vw;
  }
  .proj-b .proj-h p {
    font-size: 4.427vw;
    color: white;
  }
  .proj-b .pbc {
    padding: 6.094vw 6.979vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .proj-b .pb-item {
    width: 41.823vw;
    height: 37.135vw;
    margin-bottom: 2.135vw;
  }
  .proj-b .pb-item .cont {
    width: 41.823vw;
    height: 37.135vw;
  }
  .proj-b .pb-item .text-c {
    padding: 2.24vw 4.583vw;
    height: 88%;
  }
  .proj-b .pb-item .t1 {
    font-size: 1.823vw;
    line-height: 2.24vw;
  }
  .proj-b .pb-item .descr {
    font-size: 1.302vw;
    line-height: 1.563vw;
    margin-bottom: 1.831vw;
  }
  .proj-b .pb-item .seemore {
    font-size: 1.302vw;
    line-height: 1.563vw;
  }
}
</style>