<template >
    <div id="addblog">
       
          <div class="form-content">
            <form @submit.prevent="
                submit(
                    title,
                    descrp,
                    id_category,
                    dateblog,
                    formato,
                    file1,
                    body,
                    images,
                    url
                )
              ">
    

                    <div class="grup-form dflx">
                         <div class="boxform">
                            <label for="title" class="title">Titulo </label>
                            <input v-model="title" type="text" id="title" name="title"   required >
                         </div>
                         <div class="boxform">
                            <label for="descrp" class="descrp">Descripción </label>
                            <input v-model="descrp" type="text" id="descrp" name="descrp"   required >
                        </div>

                          <div class="boxform">
                            <label for="dateblog" class="dateblog">Fecha </label>
                            <input v-model="dateblog" type="date" id="dateblog" name="dateblog"   required >
                        </div>
                       
                       
                    </div>
                     <div class="grup-form dflx">
                            <div class="boxform">
                            <label for="url" class="url">Url </label>
                            <input v-model="url" type="text" id="url" name="url"   required >
                         </div>
                    </div>
                    
                     <div class="grup-form dflx">
                        <div class="boxform">
                            <label >Portada</label>
                          <div class="dflx">
                               <label class="filelabel" for="uploadimg"> <span>Seleccionar Archivo</span></label>  <label class="filelabelname tbl_item" for="uploadimg">   {{archivo}}</label>
                        </div> 
                            
                            <input @change="previewFiles2" type="file" id="uploadimg" name="uploadimg"    required class="fileinput">
                        </div>
                       
                    </div>

                      <div class="grup-form dflx">
         

                         <div class="boxform">
                            <label for="id_category" class="id_category">Categoría </label>
                          
                              <div class="select-container">
                                <input
                                    type="checkbox"
                                    name="select-ch3"
                                    id="select-ch3"
                class="check-box-it"
                                    v-model="active3"
                                    :true-value="true"
                                    :false-value="false"
                                />
                                <label for="select-ch3">
                                    <div id="select-role" :class="{ rounded: active3 }">
                                    {{catname }}
                                    </div>
                                </label>
                                <div  class="options-cont" @click="closeSelect3()">
                                    <div v-for="(cat, key) in categorias" :key='key' class="option-btn" @click="id_category = cat.id, catname =cat.name">{{cat.name}}</div>
                                </div>
                               
                                </div>
                        </div>


                       
         
        </div>


        


     

                   
                   <!-- Añadir bloques -->
                 
        <hr class="hrhd">
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
                   <div class="option-btn" @click="tipo = 'frase_destacada'">Frase destacada</div>
                    <div class="option-btn" @click="tipo = 'frase'">Frase</div>
                    
                     <div class="option-btn" @click="tipo = 'video'">Video</div>
              </div>
            </div>
                        </div>


                <div  @click="guardarBloque(tipo)"  class="btn_añadir dflx mtbtn">
                                <p > agregar bloque</p>  <img src="../../assets/add.png" alt="">
               </div>
            </div>   

                  

             <vue-editor v-if="tipo=='texto'"
                 id="editor"
                 class="quill-editor"
                :editorToolbar="toolbar()"
                v-model="texto"
                >
              </vue-editor> 

                <div v-if="tipo=='video'">
                     <div class="grup-form dflx">
                
                        <div class="boxform">
                          <label for="video" class="video">Insertar iFrame</label>
                            <input v-model="video" type="text" id="video" name="video">
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
              


                    <div class="" v-if="tipo =='imagen'">
                         
                          <div class="dflx">
                               <label class="filelabel" for="uploadimg2"> <span>Seleccionar Archivo</span></label>  <label class="filelabelname tbl_item" for="uploadimg2">   {{name_imagen}}</label>
                        </div> 
                            
                            <input @change="previewFiles" type="file" id="uploadimg2" name="uploadimg2"    required class="fileinput2">
                    </div>

                    <div v-if="tipo=='frase'">
                       <div class="grup-form dflx">
                        <div class="boxform">
                            <label for="frase" class="frase">Frase</label>
                            <input v-model="frase" type="text" id="frase" name="frase">
                        </div>
                        <div class="boxform">
                          <label for="firma" class="firma">Firma</label>
                            <input v-model="firma" type="text" id="firma" name="firma">
                        </div>
                    </div>
                    </div>

                    <div v-if="tipo=='frase_destacada'">
                       <div class="grup-form dflx">
                
                        <div class="boxform">
                          <label for="frase_destacada" class="frase_destacada">Frase destacada</label>
                            <input v-model="frase_destacada" type="text" id="frase_destacada" name="frase_destacada">
                        </div>
                    </div>
                    </div>
                
                <div v-if="tipo == 'caja'">
                     <p class="subtitle">Caja 1</p>
                    
                        <div class="dflx btnsgrp">
                          
                            <p class="btnopciones" :class="{'btnoact':caja1 == 'texto'}" @click="caja1 = 'texto'">Texto</p>
                            <p class="btnopciones" :class="{'btnoact':caja1 == 'imagen'}" @click="caja1 = 'imagen'">Imagen</p>
                            <p class="btnopciones" :class="{'btnoact':caja1 == 'frase_destacada'}" @click="caja1 = 'frase_destacada'">Frase destacada</p>
                            <p class="btnopciones" :class="{'btnoact':caja1 == 'frase'}" @click="caja1 = 'frase'">Frase</p>
                        </div>

                         <vue-editor v-if="caja1=='texto'"
                 id="editor"
                 class="quill-editor"
                :editorToolbar="toolbar()"
                v-model="texto"
                >
              </vue-editor> 

              <div v-if="caja1=='frase_destacada'">
                       <div class="grup-form dflx">
                
                        <div class="boxform">
                          <label for="frase_destacada" class="frase_destacada">Frase destacada</label>
                            <input v-model="frase_destacada" type="text" id="frase_destacada" name="frase_destacada">
                        </div>
                    </div>
                    </div>
                    <div v-if="caja1=='frase'">
                       <div class="grup-form dflx">
                        <div class="boxform">
                            <label for="frase" class="frase">Frase</label>
                            <input v-model="frase" type="text" id="frase" name="frase">
                        </div>
                        <div class="boxform">
                          <label for="firma" class="firma">Firma</label>
                            <input v-model="firma" type="text" id="firma" name="firma">
                        </div>
                    </div>
                    </div>

                    <div class="" v-if="caja1 =='imagen'">
                         
                          <div class="dflx">
                               <label class="filelabel" for="uploadimg2"> <span>Seleccionar Archivo</span></label>  <label class="filelabelname tbl_item" for="uploadimg2">   {{name_imagen}}</label>
                        </div> 
                            
                            <input @change="previewFiles" type="file" id="uploadimg2" name="uploadimg2"    required class="fileinput2">
                    </div>

                    <p class="subtitle">Caja 2</p>

                         <div class="dflx btnsgrp">
                          
                            <p class="btnopciones" :class="{'btnoact':caja2 == 'texto'}" @click="caja2 = 'texto'">Texto</p>
                            <p class="btnopciones" :class="{'btnoact':caja2 == 'imagen'}" @click="caja2 = 'imagen'">Imagen</p>
                            <p class="btnopciones" :class="{'btnoact':caja2 == 'frase_destacada'}" @click="caja2 = 'frase_destacada'">Frase destacada</p>
                            <p class="btnopciones" :class="{'btnoact':caja2 == 'frase'}" @click="caja2 = 'frase'">Frase</p>
                        </div>

                         <vue-editor v-if="caja2=='texto'"
                 id="editor"
                 class="quill-editor"
                :editorToolbar="toolbar()"
                v-model="texto2"
                >
              </vue-editor> 
               <div v-if="caja2=='frase_destacada'">
                       <div class="grup-form dflx">
                
                        <div class="boxform">
                          <label for="frase_destacada2" class="frase_destacada2">Frase destacada</label>
                            <input v-model="frase_destacada2" type="text" id="frase_destacada2" name="frase_destacada2">
                        </div>
                    </div>
                    </div>
                    <div v-if="caja2=='frase'">
                       <div class="grup-form dflx">
                        <div class="boxform">
                            <label for="frase2" class="frase2">Frase</label>
                            <input v-model="frase2" type="text" id="frase2" name="frase2">
                        </div>
                        <div class="boxform">
                          <label for="firma2" class="firma2">Firma</label>
                            <input v-model="firma2" type="text" id="firma2" name="firma2">
                        </div>
                    </div>
                    </div>
                     <div class="" v-if="caja2 =='imagen'">
                         
                          <div class="dflx">
                               <label class="filelabel" for="uploadimg3"> <span>Seleccionar Archivo</span></label>  <label class="filelabelname tbl_item" for="uploadimg3">   {{name_imagen2}}</label>
                        </div> 
                            
                            <input @change="previewFiles3" type="file" id="uploadimg3" name="uploadimg3"    required class="fileinput">
                    </div>



                </div>


               
              

      
      </div>
                   
        <hr class="hrhd">
        <p class="subtitle2">Bloques agregados</p>
        
        <div class="bloques-cont">
                   <div class="dflx header-bc">
                    <div class="col1">
                        <p>ordenar</p>
                    
                    </div>
                    <div class="col2">
                            <p> Tipo</p>
                            
                    </div>
                    <div class="col3 cl3t">
                            <p> Contenido</p>
                            
                    </div>
                    <div class="col4">
                           <p>Eliminar</p>
                    </div>
                   </div>
                <div v-for="(bloq, key) in body" :key="key" class="bloq-item dflx">
                    <div class="col1">
                        
                        <h2 v-if="key !=0" @click="UpItem(bloq, key)" class="cp">	&#9650;</h2>
                        <h2 v-if="key < (body.length-1)" @click="DownItem(bloq,key)" class="cp">	&#9660;</h2>
                    </div>
                    <div class="col2">
                           <p  v-if="bloq.tipo !='frase_destacada'">{{bloq.tipo}}</p>
                            <p  v-else>frase <br> destacada</p>


                            
                    </div>
                    <div class="col3"> <!-- contenido del bloque  -->
                        <div v-if="bloq.tipo =='texto'" v-html="bloq.texto"></div>
                         <div v-if="bloq.tipo =='video'" v-html="bloq.video"></div>
                        <div v-if="bloq.tipo =='frase'">
                            <p>"{{bloq.frase.texto}}" <br> - {{bloq.frase.firma}}</p>
                        </div>
                         <div v-if="bloq.tipo =='frase_destacada'">
                            <p> <strong>"{{bloq.frase_destacada}}"</strong> </p>
                        </div>
                        <img v-if="bloq.tipo =='imagen'" :src="srcImg(bloq.imagen)" alt="imagen bloque">
                        <div v-if="bloq.tipo =='caja'" class="dflx">
                           
                            <div class="caja1">
                                <p v-if="bloq.caja[0].tipo=='texto'" v-html="bloq.caja[0].texto">  </p>
                                  <img v-if="bloq.caja[0].tipo =='imagen'" :src="srcImg(bloq.caja[0].imagen)" alt="imagen bloque">
                                  <div v-if="bloq.caja[0].tipo =='frase'">
                                    <p>"{{bloq.caja[0].frase.texto}}" <br> - {{bloq.caja[0].frase.firma}}</p>
                                </div>
                                 <div v-if="bloq.caja[0].tipo =='frase_destacada'">
                                    <p> <strong>"{{bloq.caja[0].frase_destacada}}"</strong> </p>
                                </div>
                            </div>
                             <h2 class="cp" @click="CambiarOrdenCaja(bloq, key)">	&#11020;</h2>
                            <div class="caja2">
                                <p v-if="bloq.caja[1].tipo=='texto'" v-html="bloq.caja[1].texto">  </p>
                                  <img v-if="bloq.caja[1].tipo =='imagen'" :src="srcImg(bloq.caja[1].imagen)" alt="imagen bloque">
                                    <div v-if="bloq.caja[1].tipo =='frase'">
                                    <p>"{{bloq.caja[1].frase.texto}}" <br> - {{bloq.caja[1].frase.firma}}</p>
                                </div>
                                  <div v-if="bloq.caja[1].tipo =='frase_destacada'">
                                    <p> <strong>"{{bloq.caja[1].frase_destacada}}"</strong> </p>
                                </div>
                            </div>
                        </div>
                            
                    </div>
                    <div class="col4">
                           <h2 class="cp"  @click="DelItem(bloq,key)">&#10006;</h2>
                    </div>
                </div>
                <p class="snu" v-if="body.length ==0">Sin contenido agregado al cuerpo del blog</p>
        </div>



                    
                        <div class="dflx">
                                  <p @click="wait()" class="btnRegresar">Regresar</p>
                                  <button class="alta" type="submit">Guardar </button>
                        </div>
                     

                     
            </form>
     


        <div v-if="viewModal" class="modal_view">
           
            <div id="modal_add">
                <div class="body dflx">
                     
                           <h3>Entrada agregada</h3>
                           <img src="../../assets/add.png" alt="icono alerta">
                </div>
           
            <div class="modal_add_btns dflx">
                <p @click="Add()" class="otro">Aceptar</p> <p  @click="toEdit()" class="editar">Editar</p>  <p  @click="back()" class="inicio">Inicio</p>
            </div>
          </div>
        </div> 

        </div>



         <div v-if="status !=''" class="status_messages">
                            <div v-if="status =='success'" class="msg msg_success">
                                 <p>{{message}}</p>
                            </div>
                            <div  v-if="status =='error'" class="msg msg_error">
                                <p>{{message}}</p>
                            </div>
           </div>
<!--
  <p> {{name_imagen}}</p>
     <p>   {{image}}</p>

       <p>{{tipo}}</p>
       <p> {{body}}</p>
    

      <p> {{images}}</p>
-->

  
    </div>
</template>
<script>


import { VueEditor } from "vue2-editor";
import {mapActions} from 'vuex';
import {url, endpointCodes} from '../../global/index'; 

export default {
 components: {
    VueEditor,
    
  },
    data(){
        return{
            title:"", 
            descrp:"", 
            url: '',
            url2: url,
            id_category:"", 
            catname:"",
            file1:null,
            archivo:'No se eligió archivo',
            colname:"",
            dateblog:"", 
            formato:"", 
            images:[], //imagenes agregadas
 
            //bloques
            body:[],
            tipo:'texto',
            caja1:'texto',
            caja2:'texto',
            image:null,
            name_imagen:'',
            frase_destacada:'',
            video:'',
            frase:'',
            firma:'',
            texto: "",

            image2:null,
            name_imagen2:'',
            frase_destacada2:'',
            video2:'',
            frase2:'',
            firma2:'',
            texto2: "",


            editorOption: { 
                modules: {
                           
                        },
                        
                        theme: 'snow'
                },

           status:'',
           message:'',


           //selects

            active: false,
            active2: false,
            active3: false,
            active4: false,
            active5: false,
            active6: false,
            active7: false,

            viewModal:false,


            search_value:'',
            updsearchcli:'',

        }
    },
    created(){
         this.getAllInfoCat('category')
    },
    computed:{
       categorias() {
      let array = this.$store.getters["category/data"];
      
      return array;
      },
    },
    methods:{
         ...mapActions('category', ['getAllInfoCat']),
        ...mapActions('blog', ['setAddedBlo']),
         ...mapActions('blog', ['setHistoryOptionBlo']),
         UpItem: function(item, key){
        let bloques =this.body;
      
        let anterior = key-1
        let actual = key
        let item_actual =item
        let item_anterior = bloques[key-1]

        let array = []
        
        for(var i=0; i<bloques.length;i++){
          if(i == actual){
            array.push(item_anterior)
          }else if(i==anterior){
            array.push(item_actual)
          }else{
            array.push(bloques[i])
          }
        }

        this.body =array
    },
    DownItem: function(item, key){
      let bloques =this.body;
      
      let siguiente = key+1
      let actual = key
      let item_actual =item
      let item_siguiente = bloques[key+1]

       let array = []
      
      for(var i=0; i<bloques.length;i++){
        if(i == actual){
          array.push(item_siguiente)
        }else if(i==siguiente){
          array.push(item_actual)
        }else{
          array.push(bloques[i])
        }
      }

      this.body =array

    },
    DelItem: async function(bloq, key){
      let bloques =this.body;
      

      
       let array = []
      
      for(var i=0; i<bloques.length;i++){
        if(i != key){
          array.push(bloques[i])
        }
      }

      this.body =array

      //! eliminar la imagen si es de tipo imagen.
      if(bloq.tipo=='imagen'){
       
          let result = await this.$store.dispatch("blog/deleteItemBlo", {option: 'blogimage', id:bloq.imagen});
      }
      if(bloq.tipo =='caja'){
          if(bloq.caja[0].tipo =='imagen'){
         
          let result = await this.$store.dispatch("blog/deleteItemBlo", {option: 'blogimage', id:bloq.caja[0].imagen});
         }

          if(bloq.caja[1].tipo =='imagen'){
         
          let result = await this.$store.dispatch("blog/deleteItemBlo", {option: 'blogimage', id:bloq.caja[1].imagen});
         }
      }

    },
    CambiarOrdenCaja: function(bloq, key){
        let bloques =this.body;
      

      
       let array = []
      
      for(var i=0; i<bloques.length;i++){
        if(i != key){
          array.push(bloques[i])
        }else{
          let model  ={ 'caja': [bloq.caja[1], bloq.caja[0]] , 'tipo': 'caja'}
          array.push(model)
        }
      }

      this.body =array
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


          wait: function(){
            setTimeout(() => this.$router.go(), 200);
        },
        submit: async function( title, descrp, id_category, dateblog, formato,  file1, body, images , url){
                 this.status =''
                 this.message =''
                
                //todo validar body almenos 1 bloque.
    
                formato = 'F1'
            
                body = JSON.stringify(body)
               images = JSON.stringify(images)
               


                   var data = new  FormData();
                    data.append('title', title);
                      data.append('url', url);
                    data.append('descrp', descrp);
                    data.append('id_category', id_category);
                    data.append('dateblog', dateblog);
                    data.append('formato', formato);
                    data.append('body', body);
                    data.append('imagenes', images);
                    data.append('image', file1);
                    data.append('_method', 'POST');

                  

                   let result = await this.$store.dispatch("blog/addItemBlo",  {option:'blog', item: data});
                   
                    if(result.status=='error'){
                        this.status='error'
                        this.message= result.message
                    }else{ // success
                         this.setAddedBlo(result.added )
                       this.showModal()
                        
                       
                    } 
                    

            
        },
        
     delStatus: function () {
            setTimeout(() => this.delMsgs()
            ,2000); 
        },
    closeSelect() {
        this.active = false;
        document.getElementById("select-ch").checked = false;
        },

        showModal: function(){
            this.viewModal=true
        },
        closeModal:function(){
            this.viewModal=false;
            this.setAddedBlo('')
            this.setHistoryOptionBlo('Default')
        },
        Add:function(){
            this.status='';
            this.message='';
            this.title=''; 
               this.url=''; 
            this.descrp=''; 
            this.id_category=''; 
            this.catname='';
            this.file1=null;
            this.archivo='No se eligió archivo';
            this.dateblog=''; 
            this.formato=''; 
            this.images=[]; 
           
           //!resetear bloques
            this.body=[];
            this.tipo='texto';
            this.caja1='texto';
            this.caja2='texto';
            this.image=null;
            this.name_imagen='';
            this.frase_destacada='';
            this.video='';
            this.frase='';
            this.firma='';
            this.texto= "";

            this.image2=null;
            this.name_imagen2='';
            this.frase_destacada2='';
            this.video2='';
            this.frase2='';
            this.firma2='';
            this.texto2= "";
            
            
            this.viewModal=false;
            this.setAddedBlo('');
        },
        toEdit:function(){
            
            
            this.setHistoryOptionBlo('Edit')
            this.viewModal=false;
        },
        back:function(){
            setTimeout(() => this.$router.go(), 200);
        },


        // bloques
        async guardarBloque(tipo){
            if(tipo=='texto'){
                if(this.texto==undefined || this.texto=='' || this.texto==null){
                    this.status='error'
                    this.message='Texto vacio.'
                    this.delStatus()
                }else{
                    let array =[];
                    for(const bloque of this.body){
                        array.push(bloque)
                    }

                    let model ={'texto': this.texto, 'tipo': tipo}
                    array.push(model)
                    this.body = array
                    this.texto =""
                }


            }else if(tipo=='video'){
                if(this.video==undefined || this.video=='' || this.video==null){
                    this.status='error'
                    this.message='Agrega un video.'
                    this.delStatus()
                }else{
                    let array =[];
                    for(const bloque of this.body){
                        array.push(bloque)
                    }

                    let model ={'video': this.video, 'tipo': tipo}
                    array.push(model)
                    this.body = array
                    this.video =""
                }


            }else if(tipo=='imagen'){
               if(this.name_imagen==undefined || this.name_imagen=='' || this.name_imagen==null){
                    this.status='error'
                    this.message='No has subido una imagen.'
                    this.image=null
                        this.name_imagen =''
                    this.delStatus()
                }else{
                    let array =[];
                    for(const bloque of this.body){
                        array.push(bloque)
                    }

                   

                    //* subir imagen al backend
                   
                     var data = new  FormData();
                   
                
                    data.append('image', this.image);
                    data.append('_method', 'POST');

                  

                    let result = await this.$store.dispatch("blog/addItemBlo",  {option:'blog-image', item: data});
                   
                  
                   
                    if(result.status=='success'){
                        
                         let array2 =[]
                         for (const img of this.images) {
                            array2.push(img)
                         }
                         array2.push(result.fileName)
                        this.images = array2

                         let model ={'imagen': result.fileName, 'tipo': tipo}
                            array.push(model)
                            this.body = array
                        
                       
                    }else{
                         this.status='error'
                        this.message= result.message
                        //enviar a borrar la imagen
                        
                    }
                    
                        this.image=null
                        this.name_imagen =''
                        this.name_imagen =""

                }
            }else if(tipo=='frase'){
               if(this.frase==undefined || this.frase=='' || this.frase==null || this.firma==null || this.firma==null || this.firma==null){
                    this.status='error'
                    this.message='Frase o firma vacia.'
                    this.delStatus()
                }else{
                    let array =[];
                    for(const bloque of this.body){
                        array.push(bloque)
                    }

                    let model ={'frase': {'texto':this.frase, 'firma':this.firma}, 'tipo': tipo}
                    array.push(model)
                    this.body = array
                    this.frase =""
                    this.firma =""
                }
            }else if(tipo=='frase_destacada'){
               if(this.frase_destacada==undefined || this.frase_destacada=='' || this.frase_destacada==null ){
                    this.status='error'
                    this.message='Frase destacada vacio.'
                    this.delStatus()
                }else{
                    let array =[];
                    for(const bloque of this.body){
                        array.push(bloque)
                    }

                    let model ={'frase_destacada': this.frase_destacada, 'tipo': tipo}
                    array.push(model)
                    this.body = array
                    this.frase_destacada =""
                    
                }
            }else if(tipo=='caja'){
                let item1;
                let item2;
                let statusC1='success'
                let statusC2='success'
                if(this.caja1=='texto'){

                    if(this.texto==undefined || this.texto=='' || this.texto==null){
                    this.status='error'
                    this.message='Texto vacio.'
                    statusC1='error'
                    this.delStatus()
                    }else{
                       

                        item1 ={'texto': this.texto, 'tipo': this.caja1}

                       
                       
                    }
                }else if(this.caja1=='frase_destacada'){
                    if(this.frase_destacada==undefined || this.frase_destacada=='' || this.frase_destacada==null ){
                    this.status='error'
                    this.message='Frase destacada vacia.'
                      statusC1='error'
                    this.delStatus()
                        }else{
                        

                            item1 ={'frase_destacada': this.frase_destacada, 'tipo': this.caja1}
                        
                            
                        }

                }else if(this.caja1=='frase'){
                            if(this.frase==undefined || this.frase=='' || this.frase==null || this.firma==null || this.firma==null || this.firma==null){
                            this.status='error'
                            this.message='Frase o firma vacia.'
                            statusC1='error'
                            this.delStatus()
                        }else{
                        
                         item1 ={'frase': {'texto':this.frase, 'firma':this.firma}, 'tipo': this.caja1}
                        
                        }
                }else if(this.caja1 =='imagen'){
                          if(this.name_imagen==undefined || this.name_imagen=='' || this.name_imagen==null){
                    this.status='error'
                    this.message='No has subido una imagen.'
                     statusC1='error'
                    this.delStatus()
                }else{
                  

                    
                   

                    //* subir imagen al backend
                   
                     var data = new  FormData();
                     
                console.log(this.image)
                    data.append('image', this.image);
                    data.append('_method', 'POST');

                  

                    let result = await this.$store.dispatch("blog/addItemBlo",  {option:'blog-image', item: data});
                   
                  
                   
                    if(result.status=='success'){
                        
                         let array =[]
                         for (const img of this.images) {
                            array.push(img)
                         }
                         array.push(result.fileName)
                        this.images = array
                        item1 ={'imagen':result.fileName, 'tipo': this.caja1}
                       
                    }else{
                         this.status='error'
                        this.message= result.message
                          statusC1='error'
                        //enviar a borrar la imagen
                        
                    }
                    



                }
                }else{
                    statusC1='error'
                }

                if(this.caja2=='texto'){
                    if(this.texto2==undefined || this.texto2=='' || this.texto2==null){
                    this.status='error'
                    this.message='Texto vacio.'
                    statusC2='error'
                    this.delStatus()
                    }else{
                       

                        item2 ={'texto': this.texto2, 'tipo': this.caja2}
                       
                       
                    }
                }else if(this.caja2=='frase_destacada'){
                    if(this.frase_destacada2==undefined || this.frase_destacada2=='' || this.frase_destacada2==null ){
                        this.status='error'
                        this.message='Frase destacada vacia.'
                        statusC2='error'
                        this.delStatus()
                        }else{
                        

                            item2 ={'frase_destacada': this.frase_destacada2, 'tipo': this.caja2}
                        }
                        
                            
                }else if(this.caja2=='frase'){
                            if(this.frase2==undefined || this.frase2=='' || this.frase2==null || this.firma2==null || this.firma2==null || this.firma2==null){
                            this.status='error'
                            this.message='Frase o firma vacia.'
                            statusC2='error'
                            this.delStatus()
                        }else{
                        
                         item2 ={'frase': {'texto':this.frase2, 'firma':this.firma2}, 'tipo': this.caja2}
                        
                        }
                }else if(this.caja2 =='imagen'){
                          if(this.name_imagen2==undefined || this.name_imagen2=='' || this.name_imagen2==null){
                    this.status='error'
                    this.message='No has subido una imagen.'
                     statusC2='error'
                    this.delStatus()
                }else{
                  

                    
                   

                    //* subir imagen al backend
                   
                     var data = new  FormData();
                     
                
                    data.append('image', this.image2);
                    data.append('_method', 'POST');

                  

                    let result = await this.$store.dispatch("blog/addItemBlo",  {option:'blog-image', item: data});
                 
                  
                   
                    if(result.status=='success'){
                        
                         let array =[]
                         for (const img of this.images) {
                            array.push(img)
                         }
                         array.push(result.fileName)
                        this.images = array

                        item2 ={'imagen': result.fileName, 'tipo': this.caja2}
                       
                    }else{
                         this.status='error'
                        this.message= result.message
                        statusC2='error'
                        //enviar a borrar la imagen
                        
                    }
                    



                }
                }else{
                    statusC2='error'
                }

                if(statusC1 == 'success' && statusC2 =='success'){
                    let model  ={ 'caja': [item1, item2] , 'tipo': tipo}


                     let array =[];
                    for(const bloque of this.body){
                        array.push(bloque)
                    }

                   
                    array.push(model)
                    this.body = array
                    this.texto=""
                     this.texto2=""
                    this.frase_destacada =""
                     this.frase_destacada2 =""
                      this.frase =""
                     this.frase2 =""
                     this.firma =""
                     this.firma2 =""
                     this.image=""
                     this.name_imagen=""
                      this.image2=""
                     this.name_imagen2=""
                }else{
                      this.status='error'
                    this.message='Una de las cajas esta vacia.'
                   
                    this.delStatus()
                }


            }else{
                this.status='error'
                this.message='Selecciona un tipo de bloque.'
                this.delStatus()
            }
        },



           
          delStatus: function () {
            setTimeout(() => this.delMsgs(), 2000);
            
            },
            delMsgs: function () {
            this.status = "";
            this.message = "";
            },

        toolbar:function(){
             if(this.tipo == 'video'){
                  return  [
                        [  'video' ], 
                    ];
             }else if(this.tipo =='imagen'){
                  return  [
                        [  'image' ], 
                    ];
             }else{
                 return  [
                ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                ['blockquote', 'code-block'],

                [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
                [{ 'direction': 'rtl' }],                         // text direction

                [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
               // [ 'link','image' ,'video' ],          // add's image support
                [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                [{ 'font': [] }],
                [{ 'align': [] }],

                ['clean']                                         // remove formatting button
            ];
             }
            },
             previewFiles(e) {
              
     
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.image= files[0];
              
            this.name_imagen = this.image.name
        },

           previewFiles3(e) {
     
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.image2= files[0];
           
            this.name_imagen2 = this.image2.name
        },


        previewFiles2(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.file1= files[0];
            this.archivo = this.file1.name
        },

           srcImg:function (img){
                let src = `${this.url2}/${endpointCodes.get}/blog-img/${img}`;

                this.status_img(img);

                return src;
        },
           status_img:async  function (img){
                 let payload ={
                    option:'colaboradores',
                    image:img
                }
                let response  =''

                try{
                     response =  await this.$store.dispatch("main/getStatusImage", payload);
                    if(response.data.status=='error'){
                        this.statusimg='error'
                    }else{
                        this.statusimg='success'
                    }
                }catch(err){
                    this.statusimg='error'
                }

               
               
    },
    }
}
</script>
<style >
.opciones-bloque{
    min-height: 20vw;
}

/* QUILL EDITOR */
.quill-editor , .quill-editor-imagen , .quill-editor-video {
  margin-bottom: 3vw;
  margin-top: 1vw;
  
}
.quill-editor{
  width: 53.65vw;
}
.quill-editor-imagen, .quill-editor-video{
    width: 27.65vw;
}

.tbl1, .tbl2{
    width: 20vw;
   
    margin-right: 1vw;
}

p.et1{
    width: 15vw;
    cursor: default;
}
p.elim{
     cursor: pointer;
     color: var(--color-3) !important;
 
    
}

.bodytbl{
    height: 10vw;
    overflow: auto;
    padding: 1vw;
     background: var(--color-2);
}
p.etiqueta{
    color: var(--color-5);
   
    font-size: 0.6VW;
}

.hdreti{
    background:  var(--color-1);
    padding: .5vw 1vw;
    color:  var(--color-5);
    font-weight: 600;
    font-size: 0.8VW;
}


    
    #AddBlo label{
        color: var(--color-2);
        font-weight: 700;
        font-size: 0.7291666666666666VW;
        margin-bottom: .3vw;
    }

    #AddBlo input, #AddBlo select{
        height: 2.5VW;
        width: 13.716666666666668VW;
        border: 0.052083vw solid var(--color-2);
        border-radius: 0vw 1.5vw 1.5vw 0vw;
        color: var(--color-4);
        font-size: 0.7291666666666666VW;
        font-weight: 500;
        padding-left: 1.09375VW;
        padding-right: 1vw;
        margin-right:2vw;
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
}#select-ch:checked ~ .options-cont {
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
}#select-ch:checked ~ .options-cont , #select-ch2:checked ~ .options-cont, #select-ch3:checked ~ .options-cont , #select-ch4:checked ~ .options-cont , #select-ch5:checked ~ .options-cont  , #select-ch6:checked ~ .options-cont , #select-ch7:checked ~ .options-cont{
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
    width: 15.312500000000002VW;
    border: none !important;
    border-radius: none !important;
    height: 1.5625VW !important;
    color: #8D8D8D;
}
.mtbtn{
    margin-left: 16vw  !important;
    margin-top: 1.4vw;
    margin-left: 16vw;
}

.optionsbl{
    margin-top: 1vw;
}

.col1{
 
     
    width: 5vw;
    text-align: center;
   
}
.col2{

     
      width: 5vw;
    text-align: center;
}
.col3{
   
        overflow: auto;
    width: 56vw;
    
}
.cl3t{
    text-align: center;
}

.col3 p{
    padding-left: 1vw;
}
.col4{
   
    
      width: 5vw;
    text-align: center;
}


.header-bc p{
    margin-right: 1px ;
     color: aliceblue;
    background: var(--color-2);
    margin-bottom: 0vw;
    font-weight: 600;
    padding: 0.5vw 0vw;
    
}

.bloq-item{
  border-bottom: .2vw solid var(--color-4);
   color: var(--color-4);
  
}

.bloq-item h2:hover{
    color: var(--color-1);
}

.bloques-cont{
    width: 71vw;
    margin-bottom: 5vw;
}

h2.cp{
    cursor: pointer;
}
.caja1, .caja2{
    width: 50%;
}

.col3 img{
        width: 72%;
    padding: 0.5vw 3.5vw;
}

.col3 iframe{
    padding: 0.5vw 3.5vw;
}
 
</style>



