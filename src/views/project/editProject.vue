<template >
  <div id="EditBlo">
    <div class="form-content">
      <form
        @submit.prevent="
          submit(added.title, added.descrp, file1, images, added.statusproject)
        "
      >
        <p class="subtitle">Visibilidad</p>
        <div class="dflx">
          <p
            :class="{ statusVisible: added.statusproject == 'VISIBLE' }"
            class="btnStatus"
            @click="added.statusproject = 'VISIBLE'"
          >
            VISIBLE
          </p>
          <p
            :class="{ statusVisible: added.statusproject == 'OCULTO' }"
            class="btnStatus"
            @click="added.statusproject = 'OCULTO'"
          >
            OCULTO
          </p>
        </div>

        <div class="grup-form dflx">
          <div class="boxform">
            <label for="title" class="title">Titulo </label>
            <input
              v-model="added.title"
              type="text"
              id="title"
              name="title"
              required
            />
          </div>
          <div class="boxform">
            <label for="descrp" class="descrp">Descripción </label>
            <input
              v-model="added.descrp"
              type="text"
              id="descrp"
              name="descrp"
              required
            />
          </div>
        </div>

        <div class="grup-form dflx">
          <div class="boxform">
            <label>Portada </label>
            <div class="dflx">
              <label class="filelabel" for="uploadimg">
                <span>Seleccionar Archivo</span></label
              >
              <label class="filelabelname tbl_item" for="uploadimg">
                {{ archivo }}</label
              >
            </div>

            <input
              @change="previewFiles2"
              type="file"
              id="uploadimg"
              name="uploadimg"
              class="fileinput"
            />
          </div>
        </div>

        <div class="grup-form">
          <div class="boxform">
            <label>Imagen actual:</label>
          </div>
          <img
            class="imagen_portada"
            :src="srcImg(added.image)"
            alt="Portada"
          />
        </div>

        <div class="dflx">
          <p @click="wait()" class="btnRegresar">Regresar</p>
          <button class="alta" type="submit">Editar</button>
        </div>
      </form>
    </div>

    <div v-if="viewModal" class="modal_view">
      <div id="modal_edit">
        <div class="body dflx">
          <h3>Proyecto actualizado</h3>
          <img src="../../assets/add.png" alt="icono alerta" />
        </div>

        <div class="modal_edit_btns dflx">
          <p @click="wait()" class="otro">Aceptar</p>
          <!-- <p  @click="back()" class="inicio">Inicio</p>-->
        </div>
      </div>
    </div>

    <div v-if="status != ''" class="status_messages">
      <div v-if="status == 'success'" class="msg msg_success">
        <p>{{ message }}</p>
      </div>
      <div v-if="status == 'error'" class="msg msg_error">
        <p>{{ message }}</p>
      </div>
    </div>
  </div>
</template>
<script> 
import { mapActions } from "vuex";
import { url, endpointCodes } from "../../global/index";
export default {
  name: "EditBlo", 
  data() {
    return {
      status: "",
      message: "",
      active: false,

      title: "",
      descrp: "", 

      file1: null,
      archivo: "No se eligió archivo", 


      images: [], //imagenes agregadas
 
      image: null, 

      viewModal: false,
      viewModal2: false,
      viewModal3: false,
      itemdel: "",
      bloq: "",
      key: "",

      search_value: "",
      updsearchcli: "",
    };
  },
  computed: {
    added() {
      return this.$store.getters["project/getAdded"];
    },
  },
  methods: {
    ...mapActions("project", ["setAddedPrj"]),
    ...mapActions("project", ["setHistoryOptionPrj"]),
    ...mapActions("project", ["getInfoByIdPrj"]),

    wait: function () {
      setTimeout(() => this.$router.go(), 200);
    },

    submit: async function (
      title,
      descrp, 
      file1, 
      images,
      statusproject, 
    ) {
      this.status = "";
      this.message = "";
 

      images = JSON.stringify(images);

      if (file1 == null ) {
        let item = {
          id: this.added.id,
          title: title,
          descrp: descrp, 
          images: images,

          statusproject: statusproject,
        };

        let result = await this.$store.dispatch("project/editItemPrj", {
          option: "project",
          item: item,
        });

        if (result.status == "error") {
          this.status = "error";
          this.message = result.message;
        } else {
          // success
          this.showModal();
        }
      } else {
        var data = new FormData();
        data.append("id", this.added.id);
        data.append("title", title);
        data.append("descrp", descrp); 
        data.append("images", images); 
        data.append("statusproject", statusproject);

        if (file1 != null) {
          data.append("image", file1);
        } 

        data.append("_method", "PUT");

        let result = await this.$store.dispatch("project/editItemPrj", {
          option: "project",
          item: data,
        });

        if (result.status == "error") {
          this.status = "error";
          this.message = result.message;
        } else {
          // success
          this.showModal();
        }
      }
    },
 
    añadirGaleria: async function () {
      if (
        this.name_imagen == undefined ||
        this.name_imagen == "" ||
        this.name_imagen == null
      ) {
        this.status = "error";
        this.message = "No has subido una imagen.";
        this.image = null;
        this.name_imagen = "";
        this.delStatus();
      } else {
        let array = [];
        for (const img of this.galeria) {
          array.push(img);
        }

        //* subir imagen al backend

        var data = new FormData();

        data.append("image", this.image);
        data.append("_method", "POST");

        let result = await this.$store.dispatch("project/addItemPrj", {
          option: "project-image",
          item: data,
        });

        if (result.status == "success") {
          let array2 = [];
          for (const img of this.images) {
            array2.push(img);
          }
          array2.push(result.fileName);
          this.images = array2;

          array.push(result.fileName);
          this.galeria = array;
        } else {
          this.status = "error";
          this.message = result.message;
          //enviar a borrar la imagen
        }

        this.image = null;
        this.name_imagen = "";
        this.name_imagen = "";
      }
    },
    closeSelect() {
      this.active = false;
      document.getElementById("select-ch").checked = false;
    },

    delStatus: function () {
      setTimeout(() => this.delMsgs(), 2000);
    },
    delMsgs: function () {
      this.status = "";
      this.message = "";
      this.status2 = "";
      this.message2 = "";
    },

    showModal: function () {
      this.viewModal = true;
    },
    closeModal: function () {
      this.viewModal = false;
      this.setAddedPrj("");
      this.setHistoryOptionPrj("Default");
    },

    closeModal2: function () {
      this.viewModal2 = false;
      this.itemdel = "";
    },
    closeModal3: function () {
      this.viewModal3 = false;
      this.itemdel = "";
    },

    Edit: function () {
      this.viewModal = false;
    },
    back: function () {
      setTimeout(() => this.$router.go(), 200);
    },

    previewFiles2(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.file1 = files[0];
      this.archivo = this.file1.name;
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
<style scoped>
.mlf {
  margin-left: 1vw;
}
.mtp {
  margin-top: 3vw;
}
.opciones-bloque {
  min-height: 20vw;
}

/* QUILL EDITOR */
.quill-editor,
.quill-editor-imagen,
.quill-editor-video {
  margin-bottom: 3vw;
  margin-top: 1vw;
}
.quill-editor {
  width: 53.65vw;
}
.quill-editor-imagen,
.quill-editor-video {
  width: 27.65vw;
}

.tbl1,
.tbl2 {
  width: 20vw;

  margin-right: 1vw;
}

p.et1 {
  width: 15vw;
  cursor: default;
}
p.elim {
  cursor: pointer;
  color: var(--color-3) !important;
}

.bodytbl {
  height: 10vw;
  overflow: auto;
  padding: 1vw;
  background: var(--color-2);
}
p.etiqueta {
  color: var(--color-5);

  font-size: 0.6vw;
}

.hdreti {
  background: var(--color-1);
  padding: 0.5vw 1vw;
  color: var(--color-5);
  font-weight: 600;
  font-size: 0.8vw;
}

#EditBlo label {
  color: var(--color-2);
  font-weight: 700;
  font-size: 0.7291666666666666vw;
  margin-bottom: 0.3vw;
}

#EditBlo input,
#EditBlo select {
  height: 2.5vw;
  width: 13.716666666666668vw;
  border: 0.052083vw solid var(--color-2);
  border-radius: 0vw 1.5vw 1.5vw 0vw;
  color: var(--color-4);
  font-size: 0.7291666666666666vw;
  font-weight: 500;
  padding-left: 1.09375vw;
  padding-right: 1vw;
  margin-right: 2vw;
}

#select-role {
  height: 2.5vw;
  width: 14.716667vw;
  border: 0.052083vw solid var(--color-2);
  border-radius: 0vw 1.5vw 1.5vw 0vw;
  color: var(--color-4);
  font-size: 0.7291666666666666vw;
  font-weight: 500;
  padding-left: 1.09375vw;
  display: flex;
  align-items: center;
  background-image: url("../../assets/blueflecha.svg");
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 12.6vw;
}
#select-role.rounded {
  border-radius: 0vw 1.5vw 0vw 0vw;
  border-left: 0.052083vw solid var(--color-2);
  border-right: 0.052083vw solid var(--color-2);
  border-top: 0.052083vw solid var(--color-2);
  border-bottom: 0;
}
#select-ch:checked ~ .options-cont {
  display: flex;
  position: absolute;
  padding: 0.573vw 1.25vw;
  flex-direction: column;
  background-color: white;
  width: 12.3vw;
  border-left: 0.052083vw solid var(--color-2);
  border-right: 0.052083vw solid var(--color-2);
  border-top: 0;
  border-bottom: 0.052083vw solid var(--color-2);
}
#select-ch:checked ~ .options-cont,
#select-ch2:checked ~ .options-cont,
#select-ch3:checked ~ .options-cont,
#select-ch4:checked ~ .options-cont,
#select-ch5:checked ~ .options-cont,
#select-ch6:checked ~ .options-cont,
#select-ch7:checked ~ .options-cont {
  display: flex;
  position: absolute;
  padding: 0.573vw 1.25vw;
  flex-direction: column;
  background-color: white;
  width: 13.32vw;
  border-left: 0.052083vw solid var(--color-2);
  border-right: 0.052083vw solid var(--color-2);
  border-top: 0;
  border-bottom: 0.052083vw solid var(--color-2);
}

.buscador input {
  width: 15.312500000000002vw;
  border: none !important;
  border-radius: none !important;
  height: 1.5625vw !important;
  color: #8d8d8d;
}
.mtbtn {
  margin-left: 1vw;
  margin-top: 1.4vw;
}

.optionsbl {
  margin-top: 1vw;
}

.col1 {
  width: 5vw;
  text-align: center;
}
.col2 {
  width: 5vw;
  text-align: center;
}
.col3 {
  overflow: auto;
  width: 56vw;
}
.cl3t {
  text-align: center;
}

.col3 p {
  padding-left: 1vw;
}
.col4 {
  width: 5vw;
  text-align: center;
}

.header-bc p {
  margin-right: 1px;
  color: aliceblue;
  background: var(--color-2);
  margin-bottom: 0vw;
  font-weight: 600;
  padding: 0.5vw 0vw;
}

.bloq-item {
  border-bottom: 0.2vw solid var(--color-4);
  color: var(--color-4);
}

.bloq-item h2:hover {
  color: var(--color-1);
}

.bloques-cont {
  width: 71vw;
  margin-bottom: 5vw;
}

h2.cp {
  cursor: pointer;
}
.caja1,
.caja2 {
  width: 50%;
}

.col3 img {
  width: 72%;
  padding: 0.5vw 3.5vw;
}

img.imagen_portada {
  width: 20vw;
}

p.btnStatus {
  cursor: pointer;
  border: none;
  background: var(--color-4);
  color: var(--color-5);
  width: 6vw;
  text-align: center;
  padding: 0.5vw 0vw;
  margin-right: 1vw;
  border-radius: 1.5vw;
  margin-top: 0.7291666666666666vw;
  font-weight: 600;
  font-size: 0.7291666666666666vw;
}

.statusVisible {
  background: var(--color-1) !important;
}
.btnorden p {
  cursor: pointer;
  border: none;
  background: var(--color-4);
  color: var(--color-5);
  width: 4vw;
  text-align: center;
  transition: all 300ms;
  margin-right: 0.1vw;
  font-weight: 500;
  font-size: 0.7291666666666666vw;
  padding-bottom: 0.2vw;
  padding-top: 0.2vw;
}

.btnorden p:first-child {
  border-radius: 1.5vw 0vw 0vw 1.5vw;
}
.btnorden p:last-child {
  border-radius: 0vw 1.5vw 1.5vw 0vw;
}
.btnorden p:hover {
  background: var(--color-2);
}

.col3 iframe {
  padding: 0.5vw 3.5vw;
}
</style>