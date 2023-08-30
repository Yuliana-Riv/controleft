<template >
  <div id="EditBlo">
    <div class="form-content">
      <form
        @submit.prevent="
          submit(
            added.title,
            added.descrp,
            added.id_category,
            added.dateblog,
            added.formato,
            file1,
            added.body,
            images,
            added.orden,
            added.statusblog,
            added.url
          )
        "
      >
        <p class="subtitle">Visibilidad</p>
        <div class="dflx">
          <p
            :class="{ statusVisible: added.statusblog == 'VISIBLE' }"
            class="btnStatus"
            @click="added.statusblog = 'VISIBLE'"
          >
            VISIBLE
          </p>
          <p
            :class="{ statusVisible: added.statusblog == 'OCULTO' }"
            class="btnStatus"
            @click="added.statusblog = 'OCULTO'"
          >
            OCULTO
          </p>
        </div>

        <p class="subtitle">Destacado</p>
        <div class="dflx btnorden">
          <p
            :class="{ statusVisible: added.orden == '1' }"
            @click="added.orden = '1'"
          >
            1
          </p>
          <p
            :class="{ statusVisible: added.orden == '2' }"
            @click="added.orden = '2'"
          >
            2
          </p>
          <p
            :class="{ statusVisible: added.orden == '3' }"
            @click="added.orden = '3'"
          >
            3
          </p>
          <p
            :class="{ statusVisible: added.orden == '4' }"
            @click="added.orden = '4'"
          >
            4
          </p>
          <p
            :class="{ statusVisible: added.orden == '5' }"
            @click="added.orden = '5'"
          >
            5
          </p>
          <p
            :class="{ statusVisible: added.orden == 'NA' }"
            @click="added.orden = 'NA'"
          >
            NA
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

          <div class="boxform">
            <label for="dateblog" class="dateblog">Fecha </label>
            <input
              v-model="added.dateblog"
              type="date"
              id="dateblog"
              name="dateblog"
              required
            />
          </div>
        </div>
        <div class="grup-form dflx">
          <div class="boxform">
            <label for="url" class="url">Url </label>
            <input
              v-model="added.url"
              type="text"
              id="url"
              name="url"
              required
            />
          </div>
        </div>

        <div class="grup-form dflx">
          <div class="boxform">
            <label>Portada</label>
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

        <div class="grup-form dflx">
          

          <div class="boxform">
            <label for="id_category" class="id_category">Categoría </label>

            <div class="select-container">
              <input
                type="checkbox"
                name="select-ch3"
                class="check-box-it"
                id="select-ch3"
                v-model="active3"
                :true-value="true"
                :false-value="false"
              />
              <label for="select-ch3">
                <div id="select-role" :class="{ rounded: active3 }">
                  {{ added.category_name }}
                </div>
              </label>
              <div class="options-cont" @click="closeSelect3()">
                <div
                  v-for="(cat, key) in categorias"
                  :key="key"
                  class="option-btn"
                  @click="
                    (added.id_category = cat.id),
                      (added.category_name = cat.name)
                  "
                >
                  {{ cat.name }}
                </div>
              </div>
            </div>
          </div>

          
        </div>

        <p class="subtitle2">Agregar más categorías</p>
        <hr />

        <div class="grup-form dflx">
          <!--categoría-->
          <div class="boxform">
            <label for="role" class="role">Categoría</label>

            <input
              v-model="added.category_name"
              type="text"
              id="tipos"
              name="tipos"
              disabled
              required
            />

            <div class="content-tbl-items">
              <div class="tblitems">
                <div class="bodytbl-items tbl_item">
                  <div v-if="categorias == 'No se encontraron coincidencias'">
                    <p class="item cp">No se encontraron coincidencias.</p>
                  </div>
                  <div v-else>
                    <div v-for="(prm, key) in categorias" :key="key">
                      <p
                        v-if="includesItem(value1, prm.name)"
                        class="itemp cp"
                        @click="addprocat(added.id, prm.id)"
                      >
                        <!--parent_cat_name-->
                        {{ prm.name }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="buscador-items dflx">
                <input
                  v-model="value1"
                  type="search"
                  id="inputbusqueda"
                  class="form-control searching-it"
                  :placeholder="'Búsqueda'"
                />
                <div class="icon_buscar">
                  <img src="../../assets/Search.png" alt="icono buscar" />
                </div>
              </div>
              <div class="tblitems">
                <div class="bodytbl-items tbl_item">
                  <div
                    v-if="
                      added.blog_categories != 'No se encontraron coincidencias.' &&
                      added.blog_categories != 'error'
                    "
                  >
                    <div
                      v-for="(prm, key) in added.blog_categories"
                      :key="key"
                      class="dflx sp"
                    >
                      <p v-if="includesItem(value1, prm.name)" class="itemp cp">
                        <!--parent_cat_name-->
                        {{ prm.category_name }}
                      </p>
                      <p @click="deleteprocat(prm.id)">X</p>
                    </div>
                  </div>
                  <div v-else>
                    <p>No se encontraron coincidencias.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- bloques -->

        <hr class="hrhd" />
        <p class="subtitle2">Bloques agregados</p>

        <div class="bloques-cont">
          <div class="dflx header-bc">
            <div class="col1">
              <p>ordenar</p>
            </div>
            <div class="col2">
              <p>Tipo</p>
            </div>
            <div class="col3 cl3t">
              <p>Contenido</p>
            </div>
            <div class="col4">
              <p>Eliminar</p>
            </div>
          </div>
          <div
            v-for="(bloq, key) in added.body"
            :key="key"
            class="bloq-item dflx"
          >
            <div class="col1">
              <h2 v-if="key != 0" @click="UpItem(bloq, key)" class="cp">
                &#9650;
              </h2>
              <h2
                v-if="key < added.body.length - 1"
                @click="DownItem(bloq, key)"
                class="cp"
              >
                &#9660;
              </h2>
            </div>
            <div class="col2">
              <p v-if="bloq.tipo != 'frase_destacada'">{{ bloq.tipo }}</p>
              <p v-else>
                frase <br />
                destacada
              </p>
            </div>
            <div class="col3">
              <!-- contenido del bloque  -->
              <div v-if="bloq.tipo == 'texto'" v-html="bloq.texto"></div>
              <div v-if="bloq.tipo == 'video'" v-html="bloq.video"></div>
              <div v-if="bloq.tipo == 'frase'">
                <p>
                  "{{ bloq.frase.texto }}" <br />
                  - {{ bloq.frase.firma }}
                </p>
              </div>
              <div v-if="bloq.tipo == 'frase_destacada'">
                <p>
                  <strong>"{{ bloq.frase_destacada }}"</strong>
                </p>
              </div>
              <img
                v-if="bloq.tipo == 'imagen'"
                :src="srcImg(bloq.imagen)"
                alt="imagen bloque"
              />
              <div v-if="bloq.tipo == 'caja'" class="dflx">
                <div class="caja1">
                  <p
                    v-if="bloq.caja[0].tipo == 'texto'"
                    v-html="bloq.caja[0].texto"
                  ></p>
                  <img
                    v-if="bloq.caja[0].tipo == 'imagen'"
                    :src="srcImg(bloq.caja[0].imagen)"
                    alt="imagen bloque"
                  />
                  <div v-if="bloq.caja[0].tipo == 'frase'">
                    <p>
                      "{{ bloq.caja[0].frase.texto }}" <br />
                      - {{ bloq.caja[0].frase.firma }}
                    </p>
                  </div>
                  <div v-if="bloq.caja[0].tipo == 'frase_destacada'">
                    <p>
                      <strong>"{{ bloq.caja[0].frase_destacada }}"</strong>
                    </p>
                  </div>
                </div>
                <h2 class="cp" @click="CambiarOrdenCaja(bloq, key)">
                  &#11020;
                </h2>
                <div class="caja2">
                  <p
                    v-if="bloq.caja[1].tipo == 'texto'"
                    v-html="bloq.caja[1].texto"
                  ></p>
                  <img
                    v-if="bloq.caja[1].tipo == 'imagen'"
                    :src="srcImg(bloq.caja[1].imagen)"
                    alt="imagen bloque"
                  />
                  <div v-if="bloq.caja[1].tipo == 'frase'">
                    <p>
                      "{{ bloq.caja[1].frase.texto }}" <br />
                      - {{ bloq.caja[1].frase.firma }}
                    </p>
                  </div>
                  <div v-if="bloq.caja[1].tipo == 'frase_destacada'">
                    <p>
                      <strong>"{{ bloq.caja[1].frase_destacada }}"</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col4">
              <h2 class="cp" @click="showModalDelete2(bloq, key)">&#10006;</h2>
            </div>
          </div>
          <p class="snu" v-if="added.body.length == 0">
            Sin contenido agregado al cuerpo del blog
          </p>
        </div>
        <!-- fin bloques -->

        <!-- Añadir bloques -->

        <hr class="hrhd" />
        <p class="subtitle2">Cuerpo de la entrada</p>

        <div class="opciones-bloque">
          <div class="dflx optionsbl">
            <div class="boxform">
              <label for="role" class="role">Tipo de bloque </label>
              <div class="select-container">
                <input
                  type="checkbox"
                  name="select-ch"
                  id="select-ch"
                  v-model="active"
                  :true-value="true"
                  :false-value="false"
                />
                <label for="select-ch">
                  <div id="select-role" :class="{ rounded: active }">
                    {{ tipo }}
                  </div>
                </label>
                <div class="options-cont" @click="closeSelect()">
                  <div class="option-btn" @click="tipo = 'texto'">Texto</div>
                  <div class="option-btn" @click="tipo = 'imagen'">Imagen</div>
                  <div class="option-btn" @click="tipo = 'caja'">Caja</div>
                  <div class="option-btn" @click="tipo = 'frase_destacada'">
                    Frase destacada
                  </div>
                  <div class="option-btn" @click="tipo = 'frase'">Frase</div>
                  <div class="option-btn" @click="tipo = 'video'">Video</div>
                </div>
              </div>
            </div>

            <div @click="guardarBloque(tipo)" class="btn_añadir dflx mtbtn">
              <p>agregar bloque</p>
              <img src="../../assets/add.png" alt="" />
            </div>
          </div>

          <vue-editor
            v-if="tipo == 'texto'"
            id="editor"
            class="quill-editor"
            :editorToolbar="toolbar()"
            v-model="texto"
          >
          </vue-editor>

          <div v-if="tipo == 'video'">
            <div class="grup-form dflx">
              <div class="boxform">
                <label for="video" class="video">Insertar iFrame</label>
                <input v-model="video" type="text" id="video" name="video" />
              </div>
            </div>

            <vue-editor
              id="editor"
              class="quill-editor"
              :editorToolbar="toolbar()"
              v-model="video"
            >
            </vue-editor>
          </div>

          <div class="" v-if="tipo == 'imagen'">
            <div class="dflx">
              <label class="filelabel" for="uploadimg2">
                <span>Seleccionar Archivo</span></label
              >
              <label class="filelabelname tbl_item" for="uploadimg2">
                {{ name_imagen }}</label
              >
            </div>

            <input
              @change="previewFiles"
              type="file"
              id="uploadimg2"
              name="uploadimg2"
              required
              class="fileinput2"
            />
          </div>

          <div v-if="tipo == 'frase'">
            <div class="grup-form dflx">
              <div class="boxform">
                <label for="frase" class="frase">Frase</label>
                <input v-model="frase" type="text" id="frase" name="frase" />
              </div>
              <div class="boxform">
                <label for="firma" class="firma">Firma</label>
                <input v-model="firma" type="text" id="firma" name="firma" />
              </div>
            </div>
          </div>

          <div v-if="tipo == 'frase_destacada'">
            <div class="grup-form dflx">
              <div class="boxform">
                <label for="frase_destacada" class="frase_destacada"
                  >Frase destacada</label
                >
                <input
                  v-model="frase_destacada"
                  type="text"
                  id="frase_destacada"
                  name="frase_destacada"
                />
              </div>
            </div>
          </div>

          <div v-if="tipo == 'caja'">
            <p class="subtitle">Caja 1</p>

            <div class="dflx btnsgrp">
              <p class="btnopciones" @click="caja1 = 'texto'">Texto</p>
              <p class="btnopciones" @click="caja1 = 'imagen'">Imagen</p>
              <p class="btnopciones" @click="caja1 = 'frase_destacada'">
                Frase destacada
              </p>
              <p class="btnopciones" @click="caja1 = 'frase'">Frase</p>
            </div>

            <vue-editor
              v-if="caja1 == 'texto'"
              id="editor"
              class="quill-editor"
              :editorToolbar="toolbar()"
              v-model="texto"
            >
            </vue-editor>

            <div v-if="caja1 == 'frase_destacada'">
              <div class="grup-form dflx">
                <div class="boxform">
                  <label for="frase_destacada" class="frase_destacada"
                    >Frase destacada</label
                  >
                  <input
                    v-model="frase_destacada"
                    type="text"
                    id="frase_destacada"
                    name="frase_destacada"
                  />
                </div>
              </div>
            </div>
            <div v-if="caja1 == 'frase'">
              <div class="grup-form dflx">
                <div class="boxform">
                  <label for="frase" class="frase">Frase</label>
                  <input v-model="frase" type="text" id="frase" name="frase" />
                </div>
                <div class="boxform">
                  <label for="firma" class="firma">Firma</label>
                  <input v-model="firma" type="text" id="firma" name="firma" />
                </div>
              </div>
            </div>

            <div class="" v-if="caja1 == 'imagen'">
              <div class="dflx">
                <label class="filelabel" for="uploadimg2">
                  <span>Seleccionar Archivo</span></label
                >
                <label class="filelabelname tbl_item" for="uploadimg2">
                  {{ name_imagen }}</label
                >
              </div>

              <input
                @change="previewFiles"
                type="file"
                id="uploadimg2"
                name="uploadimg2"
                required
                class="fileinput2"
              />
            </div>

            <p class="subtitle">Caja 2</p>

            <div class="dflx btnsgrp">
              <p class="btnopciones" @click="caja2 = 'texto'">Texto</p>
              <p class="btnopciones" @click="caja2 = 'imagen'">Imagen</p>
              <p class="btnopciones" @click="caja2 = 'frase_destacada'">
                Frase destacada
              </p>
              <p class="btnopciones" @click="caja2 = 'frase'">Frase</p>
            </div>

            <vue-editor
              v-if="caja2 == 'texto'"
              id="editor"
              class="quill-editor"
              :editorToolbar="toolbar()"
              v-model="texto2"
            >
            </vue-editor>
            <div v-if="caja2 == 'frase_destacada'">
              <div class="grup-form dflx">
                <div class="boxform">
                  <label for="frase_destacada2" class="frase_destacada2"
                    >Frase destacada</label
                  >
                  <input
                    v-model="frase_destacada2"
                    type="text"
                    id="frase_destacada2"
                    name="frase_destacada2"
                  />
                </div>
              </div>
            </div>
            <div v-if="caja2 == 'frase'">
              <div class="grup-form dflx">
                <div class="boxform">
                  <label for="frase2" class="frase2">Frase</label>
                  <input
                    v-model="frase2"
                    type="text"
                    id="frase2"
                    name="frase2"
                  />
                </div>
                <div class="boxform">
                  <label for="firma2" class="firma2">Firma</label>
                  <input
                    v-model="firma2"
                    type="text"
                    id="firma2"
                    name="firma2"
                  />
                </div>
              </div>
            </div>
            <div class="" v-if="caja2 == 'imagen'">
              <div class="dflx">
                <label class="filelabel" for="uploadimg3">
                  <span>Seleccionar Archivo</span></label
                >
                <label class="filelabelname tbl_item" for="uploadimg3">
                  {{ name_imagen2 }}</label
                >
              </div>

              <input
                @change="previewFiles3"
                type="file"
                id="uploadimg3"
                name="uploadimg3"
                required
                class="fileinput"
              />
            </div>
          </div>
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
          <h3>Blog actualizado</h3>
          <img src="../../assets/add.png" alt="icono alerta" />
        </div>

        <div class="modal_edit_btns dflx">
          <p @click="wait()" class="otro">Aceptar</p>
          <!-- <p  @click="back()" class="inicio">Inicio</p>-->
        </div>
      </div>
    </div>


    <div v-if="viewModal3" class="modal_view">
      <div id="modal_delete">
        <div class="body">
          <img src="../../assets/alert.png" alt="icono alerta" />
          <h3>
            ¿Estás seguro de
            <span
              >eliminar <br />
              este bloque?</span
            >
          </h3>
        </div>

        <div class="modal_del_btns dflx">
          <p @click="DelBloq()">Aceptar</p>
          <p @click="closeModal3()">Cancelar</p>
        </div>
      </div>
    </div>

    <div v-if="viewModal4" class="modal_view">
      <div id="modal_edit">
        <div class="body dflx">
          <h3>Categoría agregada</h3>
          <img src="../../assets/add.png" alt="icono alerta" />
        </div>

        <div class="modal_edit_btns dflx">
          <p @click="viewModal4 = false" class="otro">Aceptar</p>
          <!-- <p  @click="back()" class="inicio">Inicio</p>-->
        </div>
      </div>
    </div>

    <div v-if="viewModal5" class="modal_view">
      <div id="modal_edit">
        <div class="body dflx">
          <h3>Categoría eliminada</h3>
          <img src="../../assets/add.png" alt="icono alerta" />
        </div>

        <div class="modal_edit_btns dflx">
          <p @click="viewModal5 = false" class="otro">Aceptar</p>
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
import { VueEditor } from "vue2-editor";
import { mapActions } from "vuex";
import {url, endpointCodes} from '../../global/index'; 
export default {
  name: "EditBlo",
  components: {
    VueEditor,
  },
  data() {
    return {
      status: "",
      message: "",
      status2: "",
      message2: "",
      active: false,

      dataCat: [],

        url2: url,

      title: "",
      descrp: "",
      id_category: "",
      catname: "",

      file1: null,
      archivo: "No se eligió archivo",
      dateblog: "",
      formato: "",
      images: [], //imagenes agregadas

      //bloques
      body: [],
      tipo: "texto",
      caja1: "texto",
      caja2: "texto",
      image: null,
      name_imagen: "",
      frase_destacada: "",
      video: "",
      frase: "",
      firma: "",
      texto: "",

      image2: null,
      name_imagen2: "",
      frase_destacada2: "",
      video2: "",
      frase2: "",
      firma2: "",
      texto2: "",
      value1: "",

      editorOption: {
        modules: {},

        theme: "snow",
      },

      //selects

      active: false,
      active2: false,
      active3: false,
      active4: false,
      active5: false,
      active6: false,
      active7: false,

      viewModal: false,
      viewModal2: false,
      viewModal3: false,
      viewModal4: false,
      viewModal5: false,
      itemdel: "",
      bloq: "",
      key: "",

      search_value: "",
      updsearchcli: "",
    };
  },
  created() {
    this.getAllInfoCat("category");
    //this.getAllInfoBct('category')
    this.getAllInfoUsr("usuarios");
  },

  computed: {
    added() {
      return this.$store.getters["blog/getAdded"];
    },
    usuarios() {
        let arr = this.$store.getters["usuarios/data"];
  

        let filter = [];
        if(Array.isArray(arr)){
          for (const user of arr) {
              if(user.role =='admin'){
                filter.push(user)
              }
          }
        }

        return filter
       
    },
    categorias() {
      let array = this.$store.getters["category/data"];
      let arr = [];
      for (let i = 0; i < array.length; i++) {
        if (array[i].parent_name == "BLOG") {
          arr.push(array[i]);
        }
      }
      return arr;
    },
  },
  methods: {
    ...mapActions("category", ["getAllInfoCat"]),
    ...mapActions("usuarios", ["getAllInfoUsr"]),
    ...mapActions("blog", ["setAddedBlo"]),
    ...mapActions("blog", ["setHistoryOptionBlo"]),
    ...mapActions("blog", ["getInfoByIdBlo"]),

    wait: function () {
      setTimeout(() => this.$router.go(), 200);
    },

    includesItem(search, name) {
      if (search == "") {
        return true;
      }
      name = name.toLowerCase();
      search = search.toLowerCase();
      if (search == "") {
        return false;
      }
      return name.includes(search);
    },

    addprocat: async function (id_blog, id_category) {
      this.status = "";
      this.message = "";
      let data = [];
      let result;
      let id_pro = parseInt(id_blog);
      let id_cat = parseInt(id_category);

      data = {
        id_blog: id_pro,
        id_category: id_cat,
      };

      result = await this.$store.dispatch("blog_category/addItemBct", {
        option: "blog_category",
        item: data,
      });

      this.dataCat = data;

      if (result.status == "error") {
        this.status2 = "error";
        this.message2 = result.message;
        this.delStatus();
      } else {
        this.showModal4();
        const payload = {
          option: "blog",
          id: this.added.id,
        };

        const res = await this.getInfoByIdBlo(payload);
        this.setAddedBlo(res);
        this.delStatus();
      }
    },

    deleteprocat: async function (id) {
      let option = "blog_category";
      let result = await this.$store.dispatch("blog_category/deleteItemBct", {
        option: option,
        id: id,
      });

      if (result.status == "error") {
        this.message2 =
          "Ha ocurrido un error al intentar eliminar la categoria.";
      } else {
        this.message2 = "";

        const payload = {
          option: "blog",
          id: this.added.id,
        };

        const res = await this.getInfoByIdBlo(payload);
        this.setAddedBlo(res);
        this.showModal5();
        this.delStatus();
        //this.wait();
      }
    },

    showModal4: function () {
      this.viewModal4 = true;
    },

    showModal5: function () {
      this.viewModal5 = true;
    },

    submit: async function (
      title,
      descrp,
      id_category,
      dateblog,
      formato,
      file1,
      body,
      images,
      orden,
      statusblog,
      url
    ) {
      this.status = "";
      this.message = "";

      body = JSON.stringify(body);
      images = JSON.stringify(images);

      if (file1 != null) {
        var data = new FormData();
        data.append("id", this.added.id);
        data.append("title", title);
        data.append("url", url);
        data.append("descrp", descrp);
        data.append("id_category", id_category);
        data.append("dateblog", dateblog);
        data.append("formato", formato);
        data.append("body", body);
        data.append("images", images);
        data.append("image", file1);
        data.append("orden", orden);
        data.append("statusblog", statusblog);
        data.append("_method", "PUT");

        let result = await this.$store.dispatch("blog/editItemBlo", {
          option: "blog",
          item: data,
        });

        if (result.status == "error") {
          this.status = "error";
          this.message = result.message;
        } else {
          // success
          this.showModal();
        }
      } else {
        let item = {
          id: this.added.id,
          title: title,
          url: url,
          descrp: descrp,
          id_category: id_category,
          dateblog: dateblog,
          formato: formato,
          body: body,
          images: images,
          orden: orden,
          statusblog: statusblog,
        };

        let result = await this.$store.dispatch("blog/editItemBlo", {
          option: "blog",
          item: item,
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
      this.setAddedBlo("");
      this.setHistoryOptionBlo("Default");
    },

    closeModal2: function () {
      this.viewModal2 = false;
      this.itemdel = "";
    },
    closeModal3: function () {
      this.viewModal3 = false;
      this.itemdel = "";
    },

    showModalDelete(id) {
      this.itemdel = id;
      this.viewModal2 = true;
    },

    showModalDelete2(bloq, key) {
      this.bloq = bloq;
      this.key = key;
      this.viewModal3 = true;
    },


    Edit: function () {
      this.viewModal = false;
    },
    back: function () {
      setTimeout(() => this.$router.go(), 200);
    },

    //inputs imagen y toolbars
    toolbar: function () {
      if (this.tipo == "video") {
        return [["video"]];
      } else if (this.tipo == "imagen") {
        return [["image"]];
      } else {
        return [
          ["bold", "italic", "underline", "strike"], // toggled buttons
          ["blockquote", "code-block"],

          [{ header: 1 }, { header: 2 }], // custom button values
          [{ list: "ordered" }, { list: "bullet" }],
          [{ script: "sub" }, { script: "super" }], // superscript/subscript
          [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
          [{ direction: "rtl" }], // text direction

          [{ size: ["small", false, "large", "huge"] }], // custom dropdown
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          // [ 'link','image' ,'video' ],          // add's image support
          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          [{ font: [] }],
          [{ align: [] }],

          ["clean"], // remove formatting button
        ];
      }
    },
    previewFiles(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.image = files[0];

      this.name_imagen = this.image.name;
    },

    previewFiles3(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.image2 = files[0];

      this.name_imagen2 = this.image2.name;
    },

    previewFiles2(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.file1 = files[0];
      this.archivo = this.file1.name;
    },

    srcImg: function (img) {
        let src = `${this.url2}/${endpointCodes.get}/blog-img/${img}`;

        this.status_img(img);

        return src;
    },
    status_img: async function (img) {
      let payload = {
        option: "colaboradores",
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

    //edit cuerpo blog
    UpItem: function (item, key) {
      let bloques = this.added.body;

      let anterior = key - 1;
      let actual = key;
      let item_actual = item;
      let item_anterior = bloques[key - 1];

      let array = [];

      for (var i = 0; i < bloques.length; i++) {
        if (i == actual) {
          array.push(item_anterior);
        } else if (i == anterior) {
          array.push(item_actual);
        } else {
          array.push(bloques[i]);
        }
      }

      this.added.body = array;
    },
    DownItem: function (item, key) {
      let bloques = this.added.body;

      let siguiente = key + 1;
      let actual = key;
      let item_actual = item;
      let item_siguiente = bloques[key + 1];

      let array = [];

      for (var i = 0; i < bloques.length; i++) {
        if (i == actual) {
          array.push(item_siguiente);
        } else if (i == siguiente) {
          array.push(item_actual);
        } else {
          array.push(bloques[i]);
        }
      }

      this.added.body = array;
    },
    DelBloq: async function () {
      let bloq = this.bloq;
      let key = this.key;
      let bloques = this.added.body;

      let array = [];

      for (var i = 0; i < bloques.length; i++) {
        if (i != key) {
          array.push(bloques[i]);
        }
      }

      this.added.body = array;

      //! eliminar la imagen si es de tipo imagen.
      if (bloq.tipo == "imagen") {
        let result = await this.$store.dispatch("blog/deleteItemBlo", {
          option: "blogimage",
          id: bloq.imagen,
        });
      }
      if (bloq.tipo == "caja") {
        if (bloq.caja[0].tipo == "imagen") {
          let result = await this.$store.dispatch("blog/deleteItemBlo", {
            option: "blogimage",
            id: bloq.caja[0].imagen,
          });
        }

        if (bloq.caja[1].tipo == "imagen") {
          let result = await this.$store.dispatch("blog/deleteItemBlo", {
            option: "blogimage",
            id: bloq.caja[1].imagen,
          });
        }
      }

      this.viewModal3 = false;
      this.bloq = "";
      this.key = "";
    },
    CambiarOrdenCaja: function (bloq, key) {
      let bloques = this.added.body;

      let array = [];

      for (var i = 0; i < bloques.length; i++) {
        if (i != key) {
          array.push(bloques[i]);
        } else {
          let model = { caja: [bloq.caja[1], bloq.caja[0]], tipo: "caja" };
          array.push(model);
        }
      }

      this.added.body = array;
    },

    closeSelect() {
      this.active = false;
      document.getElementById("select-ch").checked = false;
    },
    closeSelect2() {
      this.active2 = false;
      document.getElementById("select-ch2").checked = false;
    },
    closeSelect3() {
      this.active3 = false;
      document.getElementById("select-ch3").checked = false;
    },
    closeSelect4() {
      this.active4 = false;
      document.getElementById("select-ch4").checked = false;
    },
    closeSelect5() {
      this.active5 = false;
      document.getElementById("select-ch5").checked = false;
    },
    closeSelect6() {
      this.active6 = false;
      document.getElementById("select-ch6").checked = false;
    },
    closeSelect7() {
      this.active7 = false;
      document.getElementById("select-ch7").checked = false;
    },

    // bloques
    async guardarBloque(tipo) {
      if (tipo == "texto") {
        if (this.texto == undefined || this.texto == "" || this.texto == null) {
          this.status = "error";
          this.message = "Texto vacio.";
          this.delStatus();
        } else {
          let array = [];
          for (const bloque of this.added.body) {
            array.push(bloque);
          }

          let model = { texto: this.texto, tipo: tipo };
          array.push(model);
          this.added.body = array;
          this.texto = "";
        }
      } else if (tipo == "video") {
        if (this.video == undefined || this.video == "" || this.video == null) {
          this.status = "error";
          this.message = "Agrega un video.";
          this.delStatus();
        } else {
          let array = [];
          for (const bloque of this.added.body) {
            array.push(bloque);
          }

          let model = { video: this.video, tipo: tipo };
          array.push(model);
          this.added.body = array;
          this.video = "";
        }
      } else if (tipo == "imagen") {
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
          for (const bloque of this.added.body) {
            array.push(bloque);
          }

          //* subir imagen al backend

          var data = new FormData();

          data.append("image", this.image);
          data.append("_method", "POST");

          let result = await this.$store.dispatch("blog/addItemBlo", {
            option: "blog-image",
            item: data,
          });

          if (result.status == "success") {
            let array2 = [];
            for (const img of this.images) {
              array2.push(img);
            }
            array2.push(result.fileName);
            this.images = array2;

            let model = { imagen: result.fileName, tipo: tipo };
            array.push(model);
            this.added.body = array;
          } else {
            this.status = "error";
            this.message = result.message;
            //enviar a borrar la imagen
          }

          this.image = null;
          this.name_imagen = "";
          this.name_imagen = "";
        }
      } else if (tipo == "frase") {
        if (
          this.frase == undefined ||
          this.frase == "" ||
          this.frase == null ||
          this.firma == null ||
          this.firma == null ||
          this.firma == null
        ) {
          this.status = "error";
          this.message = "Frase o firma vacia.";
          this.delStatus();
        } else {
          let array = [];
          for (const bloque of this.added.body) {
            array.push(bloque);
          }

          let model = {
            frase: { texto: this.frase, firma: this.firma },
            tipo: tipo,
          };
          array.push(model);
          this.added.body = array;
          this.frase = "";
          this.firma = "";
        }
      } else if (tipo == "frase_destacada") {
        if (
          this.frase_destacada == undefined ||
          this.frase_destacada == "" ||
          this.frase_destacada == null
        ) {
          this.status = "error";
          this.message = "Frase destacada vacio.";
          this.delStatus();
        } else {
          let array = [];
          for (const bloque of this.added.body) {
            array.push(bloque);
          }

          let model = { frase_destacada: this.frase_destacada, tipo: tipo };
          array.push(model);
          this.added.body = array;
          this.frase_destacada = "";
        }
      } else if (tipo == "caja") {
        let item1;
        let item2;
        let statusC1 = "success";
        let statusC2 = "success";
        if (this.caja1 == "texto") {
          if (
            this.texto == undefined ||
            this.texto == "" ||
            this.texto == null
          ) {
            this.status = "error";
            this.message = "Texto vacio.";
            statusC1 = "error";
            this.delStatus();
          } else {
            item1 = { texto: this.texto, tipo: this.caja1 };
          }
        } else if (this.caja1 == "frase_destacada") {
          if (
            this.frase_destacada == undefined ||
            this.frase_destacada == "" ||
            this.frase_destacada == null
          ) {
            this.status = "error";
            this.message = "Frase destacada vacia.";
            statusC1 = "error";
            this.delStatus();
          } else {
            item1 = { frase_destacada: this.frase_destacada, tipo: this.caja1 };
          }
        } else if (this.caja1 == "frase") {
          if (
            this.frase == undefined ||
            this.frase == "" ||
            this.frase == null ||
            this.firma == null ||
            this.firma == null ||
            this.firma == null
          ) {
            this.status = "error";
            this.message = "Frase o firma vacia.";
            statusC1 = "error";
            this.delStatus();
          } else {
            item1 = {
              frase: { texto: this.frase, firma: this.firma },
              tipo: this.caja1,
            };
          }
        } else if (this.caja1 == "imagen") {
          if (
            this.name_imagen == undefined ||
            this.name_imagen == "" ||
            this.name_imagen == null
          ) {
            this.status = "error";
            this.message = "No has subido una imagen.";
            statusC1 = "error";
            this.delStatus();
          } else {
            //* subir imagen al backend

            var data = new FormData();

            data.append("image", this.image);
            data.append("_method", "POST");

            let result = await this.$store.dispatch("blog/addItemBlo", {
              option: "blog-image",
              item: data,
            });

            if (result.status == "success") {
              let array = [];
              for (const img of this.images) {
                array.push(img);
              }
              array.push(result.fileName);
              this.images = array;
              item1 = { imagen: result.fileName, tipo: this.caja1 };
            } else {
              this.status = "error";
              this.message = result.message;
              statusC1 = "error";
              //enviar a borrar la imagen
            }
          }
        } else {
          statusC1 = "error";
        }

        if (this.caja2 == "texto") {
          if (
            this.texto2 == undefined ||
            this.texto2 == "" ||
            this.texto2 == null
          ) {
            this.status = "error";
            this.message = "Texto vacio.";
            statusC2 = "error";
            this.delStatus();
          } else {
            item2 = { texto: this.texto2, tipo: this.caja2 };
          }
        } else if (this.caja2 == "frase_destacada") {
          if (
            this.frase_destacada2 == undefined ||
            this.frase_destacada2 == "" ||
            this.frase_destacada2 == null
          ) {
            this.status = "error";
            this.message = "Frase destacada vacia.";
            statusC2 = "error";
            this.delStatus();
          } else {
            item2 = {
              frase_destacada: this.frase_destacada2,
              tipo: this.caja2,
            };
          }
        } else if (this.caja2 == "frase") {
          if (
            this.frase2 == undefined ||
            this.frase2 == "" ||
            this.frase2 == null ||
            this.firma2 == null ||
            this.firma2 == null ||
            this.firma2 == null
          ) {
            this.status = "error";
            this.message = "Frase o firma vacia.";
            statusC2 = "error";
            this.delStatus();
          } else {
            item2 = {
              frase: { texto: this.frase2, firma: this.firma2 },
              tipo: this.caja2,
            };
          }
        } else if (this.caja2 == "imagen") {
          if (
            this.name_imagen2 == undefined ||
            this.name_imagen2 == "" ||
            this.name_imagen2 == null
          ) {
            this.status = "error";
            this.message = "No has subido una imagen.";
            statusC2 = "error";
            this.delStatus();
          } else {
            //* subir imagen al backend

            var data = new FormData();

            data.append("image", this.image2);
            data.append("_method", "POST");

            let result = await this.$store.dispatch("blog/addItemBlo", {
              option: "blog-image",
              item: data,
            });

            if (result.status == "success") {
              let array = [];
              for (const img of this.images) {
                array.push(img);
              }
              array.push(result.fileName);
              this.images = array;

              item2 = { imagen: result.fileName, tipo: this.caja2 };
            } else {
              this.status = "error";
              this.message = result.message;
              statusC2 = "error";
              //enviar a borrar la imagen
            }
          }
        } else {
          statusC2 = "error";
        }

        if (statusC1 == "success" && statusC2 == "success") {
          let model = { caja: [item1, item2], tipo: tipo };

          let array = [];
          for (const bloque of this.added.body) {
            array.push(bloque);
          }

          array.push(model);
          this.added.body = array;
          this.texto = "";
          this.texto2 = "";
          this.frase_destacada = "";
          this.frase_destacada2 = "";
          this.frase = "";
          this.frase2 = "";
          this.firma = "";
          this.firma2 = "";
          this.image = "";
          this.name_imagen = "";
          this.image2 = "";
          this.name_imagen2 = "";
        } else {
          this.status = "error";
          this.message = "Una de las cajas esta vacia.";

          this.delStatus();
        }
      } else {
        this.status = "error";
        this.message = "Selecciona un tipo de bloque.";
        this.delStatus();
      }
    },
  },
};
</script>
<style scoped>
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