<template>
  <div id="Sections">
    <HeaderSec />
    <div v-if="historyOption == 'Usuarios'">
      <Usuarios />
    </div>
    <div v-if="historyOption == 'Personalizacion'">
      <Perfil />
    </div>
    <div v-if="historyOption == 'Project'">
      <Project />
    </div>
    <div v-if="historyOption == 'Blog'">
      <Blog />
    </div>
    <div v-if="historyOption == 'Category'">
      <Categorias />
    </div>
   
  </div>
</template>
<script>
import { mapActions } from "vuex";

import HeaderSec from "../components/HeaderSec.vue";
import Usuarios from "../views/usuarios/usuarios.vue";
import Perfil from "../views/profile/profile.vue";
import Project from "../views/project/project.vue";
import Blog from "../views/blog/blog.vue";
import Categorias from "../views/categorias/categorias.vue";


export default {
  name: "Sections",
  components: {
    HeaderSec,
    Usuarios,
    Perfil,
    Project,
    Blog,
    Categorias
  },

  data() {
    return {
      search_value: "",
      status: "",
      message: "",
      option: "Default",
    };
  },
  computed: {
    historyOption() {
      return this.$store.getters["main/getHistoryOption"];
    },
  },
  created() {
    let option = localStorage.getItem("nav");
    if (option != undefined && option != null && option != "") {
      this.option = option;
      this.setHistoryOptionMain(option);
    }
  },
  methods: {
    ...mapActions("main", ["setHistoryOptionMain"]),
    ...mapActions("main", ["getHistoryOption"]),
  },
};
</script>
<style scoped>
#Sections {
  background: var(--color-5);
  min-height: 59.25vw;
  width: 73.177083vw;
  margin-left: 4.166666666666666vw;
}

.proximamente p {
  color: var(--color-1);
  font-weight: 700;
  font-size: 5vw;
  margin-top: 11.5vw;
  margin-left: 15vw;
}
</style>
