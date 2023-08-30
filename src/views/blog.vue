<template>
    <div id="blog">
        <Navigator />

        <div>
            <div>

                <div class="B1"></div>
                <div class="GB1">
                                <img class="showMV" src="../assets/blog/newsMV.png">
                                <img class="showDK" src="../assets/blog/News.png">
                                <p>News</p>
                            </div>
                <div class="Content">

                    <div class="General" v-if="SubCat=='general' && search_value.length==0">
                       <div class="GF1">
                            
                            <div class="GB2">
                                <img class="GB1_img" src="../assets/blog/Photo.png">
                                <div class="GB2_C0">
                                    <p class="GB2_T1">Projects</p>
                                    <p class="GB2_T2">Ford Cuautitlan B299 Body Secuencer System for Deck Lid, Lift Gate, Rear Door.</p>
                                    <div class="showMV GB2_dates">
                                        <img src="../assets/blog/ClockMV.svg">
                                        <p class="GB2_T3">October 12, 2022</p>
                                    </div>
                                    <p class="GB2_T4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div class="GB2_Date">
                                        <div class="GB2_F4B1">
                                            <img class="showDK" src="../assets/blog/ClockMV.svg">
                                            <p class="showDK">October 12, 2022</p>
                                        </div>
                                        <p class="GB2_F4B2 showDK">Read more</p>
                                    </div>
                                    <p class="showMV GB2_T5">Read more</p>
                                </div>
                            </div>
                       </div>

                       <div class="GF2" v-if="MostRecent.length > 0">
                           <p class="GB2_text">Most recent</p>
                           <img class="GB2_img1 showMV" src="../assets/blog/mostMV.png">
                           <img class="GB2_img1 showDK" src="../assets/blog/mostDK.png">
                           
                           <div class="GF2_Content">
                               <div class="GF2_B" v-for="(item, key) in MostRecent" :key="key">
                                    <img class="GB2_img" src="../assets/blog/most.png">
                                    <div class="GB2_Date">
                                        <div class="GF2_F2">
                                            <img class="showDK" src="../assets/blog/ClockMV.svg">
                                            <p class="showDK">October 12, 2022</p>
                                        </div>
                                        <p class="GF2_F3 showDK">{{item.category_name}}</p>
                                    </div>
                                    <p class="showMV GF2_F4">{{item.category_name}}</p>
                                    <p class="GF2_F5">{{item.title}}</p>
                                    <div class="showMV GF2_F6">
                                        <img src="../assets/blog/ClockMV.svg">
                                        <p>October 12, 2022</p>
                                    </div>
                                    <p class="GF2_F7">{{item.descrp}}</p>
                                    <p class="GF2_F8">Read more</p>
                                </div>

                           </div>

                       </div>

                       <div class="GF3" v-if="Projects !== 'No se encontraron coincidencias.'">
                           <p class="GF3_text">Projects</p>
                           <img class="GF3_img showMV" src="../assets/blog/genMV.png">
                           <img class="GF3_img showDK" src="../assets/blog/gen.png">
                           <carousel
                            :per-page="1"
                            :mouse-drag="true" 
                            :navigation-enabled="true"
                            :navigationNextLabel="nextB"
                            :navigationPrevLabel="nextA"
                            :loop="false"
                            :paginationEnabled="false"
                            class="showMV"
                           >
                               <slide v-for="(item, key) in Projects" :key="key">
                                   <div class="GF3_Content">
                                       <p class="GF3_T1">{{item.category_name}}</p>
                                       <div class="GF3_F2">
                                           <img src="../assets/blog/ClockMV.svg">
                                           <p>October 12, 2022</p>
                                       </div>
                                       <p class="GF3_T3">{{item.descrp}}</p>
                                       <p class="GF3_T4">Read more</p>
                                   </div>
                               </slide>
                           </carousel>
                           <carousel
                            :per-page="3"
                            :mouse-drag="true" 
                            :navigation-enabled="true"
                            :navigationNextLabel="nextB"
                            :navigationPrevLabel="nextA"
                            :loop="false"
                            :paginationEnabled="false"
                            class="showDK"
                           >
                               <slide v-for="(item, key) in Projects" :key="key">
                                   <div class="GF3_Content">
                                       <p class="GF3_T1">{{item.category_name}}</p>
                                       <div class="GF3_F2">
                                           <img src="../assets/blog/ClockMV.svg">
                                           <p>October 12, 2022</p>
                                       </div>
                                       <p class="GF3_T3">{{item.descrp}}</p>
                                       <p class="GF3_T4">Read more</p>
                                   </div>
                               </slide>
                           </carousel>
                       </div>

                    </div>
                    
                    <div class="Projects" v-if="SubCat!='general' || search_value.length>0">

                        <div class="PF2">
                            <p class="PB2_text">Projects</p>
                            <img class="PB2_img1 showMV" src="../assets/blog/proyectsDK.png">
                            <img class="PB2_img1 showDK" src="../assets/blog/proyectsDK.png">
                           
                            <div class="PF2_Content" v-if="arrayFiltred != 'No se encontraron coincidencias.'">

                                <div class="PF2_B" v-for="(item, key) in arrayFiltred" :key="key">
                                    <div v-if="key < limitarray">
                                        <img class="PB2_img" src="../assets/blog/chair.png">
                                        <div class="PB2_Date">
                                            <div class="PF2_F2">
                                                <img class="showDK" src="../assets/blog/ClockMV.svg">
                                                <p class="showDK">October 12, 2022</p>
                                            </div>
                                            <p class="PF2_F3 showDK">Projects</p>
                                        </div>
                                        <p class="showMV PF2_F4">Projects</p>
                                        <p class="PF2_F5">{{item.title}}</p>
                                        <div class="showMV PF2_F6">
                                            <img src="../assets/blog/ClockMV.svg">
                                            <p>October 12, 2022</p>
                                        </div>
                                        <p class="PF2_F7">{{item.descrp}}</p>
                                        <p class="PF2_F8">Read more</p>
                                    </div>
                                </div>

                           </div>
                           <div class="PF2_Content" v-else>
                               <p class="PF2_F8">No se encontraron coincidencias.</p>
                           </div>

                            <img class="plusSC" src="../assets/blog/plus.png" v-on:click="limitarray<18 ? limitarray=limitarray + 6 : limitarray = limitarray">
                        </div>

                    </div>



                    <div class="SubCat">

                        <div class="showDK ContentSC">
                            <div v-on:click="SubCat='general'" class="SCont" :class="{colorRed: SubCat=='general'}">
                                <a>GENERAL</a>
                                <div class="lineCatV" :class="{lineCat: SubCat=='general'}"></div>
                            </div>

                            <div v-for="(item, key) in category" :key="key" v-on:click="SubCat=item.name, filtroBySubCat(item.name)" class="SCont" :class="{colorRed: SubCat==item.name}">
                                <a>{{item.name}}</a>
                                <div class="lineCatV" :class="{lineCat: SubCat==item.name}"></div>
                            </div>
                            
                            <div v-on:click="SubCat='all', filtroBySubCat('all')" class="SCont" :class="{colorRed: SubCat=='all'}">
                                <a>ALL</a>
                                <div class="lineCatV" :class="{lineCat: SubCat=='all'}"></div>
                            </div>
                        </div>

                        <select id="selectSubCat" class="showMV" @change="filtroBySubCatSel(SubCat)">
                            <option class="optSubCat" v-on:click="SubCat='general'">GENERAL</option>
                            <option class="optSubCat" v-for="(item, key) in category" :key="key" v-on:click="SubCat=item.name, filtroBySubCatSel(item.name)" :value="item.name">{{item.name}}</option>
                            <option class="optSubCat" v-on:click="SubCat='all', filtroBySubCatSel('all')" value="all">ALL</option>
                        </select>
                        
                        <div class="Ssearch">
                            <input v-model="search_value" type="search" placeholder="Search">
                            <img src="../assets/blog/search.svg">
                        </div>
                        
                    </div>



                </div>

            </div>
        </div>
        
        <Footer />
    </div>
</template>

<script>

import { mapActions } from "vuex";
import Navigator from "../components/fixed/Navigator.vue";
import Footer from "../components/fixed/Footer.vue";
import { Carousel, Slide } from "vue-carousel";


export default {
    name: 'blog',
    data(){
        return{
            nextA:'<div class="divPrev0"><p class="NButton">&#10094;</p></div>',
            nextB:'<div class="divPrev0"><p class="NButton">&#10094;</p></div>',
            SubCat:'general',
            search_value: '',
            MostRecent: [],
            Projects: [],
            arrayFiltred: [],
            limitarray: 6
        }
    },
    
  metaInfo() {
    return {
      title: "News",
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
    components:{
        Navigator,
        Footer,
        Carousel
    },
    async created() {
        
        await this.getAllInfoCat("category");
        
        let arreglo = await this.getAllInfoBlo("blog");
        arreglo = arreglo.result
        
        for(let i=0; i< arreglo.length; i++){

            if(arreglo[i].category_name == 'PROJECTS') {
                this.Projects.push(arreglo[i])
            }
        }

        
        if(this.Projects.length == 0){
            this.Projects = 'No se encontraron coincidencias.'
        }


        let arregloForDates = arreglo
        for(let i=0; i< arregloForDates.length; i++){
            arregloForDates[i].dateblog = new Date(arregloForDates[i].dateblog)
        }

                

        arregloForDates.sort(function(a, b) {
            return b.dateblog - a.dateblog
        })

        if(arreglo.length == 0){
            this.MostRecent = 'No se encontraron coincidencias.'
        }else {
            this.MostRecent.push(arreglo[0])
            this.MostRecent.push(arreglo[1])
        }
            
        

        //console.log(this.MostRecent)

    },
    watch: {
        search_value: function(value) {

            this.arrayFiltred=[]

            let arreglo = this.blog

            value= value.trim()
            value= value.toLowerCase()

            let arrayofwords=[]

            if(value==''){
                this.arrayFiltred=[]
            }else{

                for(let i=0; i<arreglo.length; i++) {
                    let finded = '', word=arreglo[i].title
                    word = word.toLowerCase()
                    finded = word.search(value)

                    if(finded != -1){
                        arrayofwords.push(arreglo[i])
                    }
                }
                this.arrayFiltred = arrayofwords

            }
            console.log(this.arrayFiltred)
            
            
        }
    },
    computed: {
        blog() {
            let array = this.$store.getters["blog/data"];
            return array;
        },
        category() {
            let array = this.$store.getters["category/data"];
            return array;
        }
    },
    methods: {
        ...mapActions("blog", ["getAllInfoBlo"]),
        ...mapActions("category", ["getAllInfoCat"]),

        filtroBySubCat: async function(subC) {
            
            
            
            this.arrayFiltred=[]

            let arreglo = this.blog
            if(subC == 'all'){
                this.arrayFiltred = arreglo
            }else {
                for(let i=0; i< arreglo.length; i++){
                    if(arreglo[i].category_name == subC) {
                        this.arrayFiltred.push(arreglo[i])
                    }
                }
            }
            if(this.arrayFiltred.length == 0){
                this.arrayFiltred = 'No se encontraron coincidencias.'
            }
            
        },
        
        filtroBySubCatSel: async function(subC) {
            

            this.SubCat = document.getElementById('selectSubCat').value
            subC = document.getElementById('selectSubCat').value
            
            this.arrayFiltred=[]

            let arreglo = this.blog
            if(subC == 'GENERAL') {
                this.SubCat='general'
            }
            else if(subC == 'all'){
                this.arrayFiltred = arreglo
            }else {
                for(let i=0; i< arreglo.length; i++){
                    if(arreglo[i].category_name == subC) {
                        this.arrayFiltred.push(arreglo[i])
                    }
                }
                if(this.arrayFiltred.length == 0){
                    this.arrayFiltred = 'No se encontraron coincidencias.'
                }
            }
            
        }

    }
    
}
</script>

<style scoped>


.GB1 {
    width: 100%;
    height: 115.70048309178745VW;
    background-image: url('../assets/blog/headerMV.png');
    background-repeat: no-repeat;
    text-align: center;
    background-size: cover;
    margin-bottom: 14.251207729468598VW;
}
    .GB1 img {
        /*display: flex;*/
        margin-left: 31.2vw;
        padding-top: 75%;
    }
    .GB1 p {
        font-size: 15.70048309178744VW;
        font-weight: 600;
        color: var(--color-5);
        margin: 0vw;
        font-family: 'Montserrat';
        z-index: 2;
        margin-top: -10vw;
    }
    img.GB1_img {
        width: 79.71014492753623VW;
        height: 59.42028985507246VW;
        margin-bottom: 3.864734299516908VW;
        margin-top: 17.391304347826086VW;
    }


.GB2 {
    width: 79.71014492753623VW;
    margin: auto;
}
    p.GB2_T1 {
        width: fit-content;
        font-size: 2.657004830917874VW;
        font-weight: 600;
        font-family: 'Montserrat';
        color: #E33A23;
        border: 0.1vw solid #E33A23;
        padding: 1.5vw 6vw;
        border-radius: 6vw;
        margin-bottom: 4.3478260869565215VW;
    }
    p.GB2_T2 {
        font-size: 6.038647342995169VW;
        line-height: 8.417874396135266VW;
        font-weight: 700;
        font-family: 'Montserrat';
        margin-bottom: 2.1739130434782608VW;
        max-height: 33.81642512077295VW;
        overflow: auto;
    }
.GB2_dates {
    display: flex;
    margin-bottom: 2.657004830917874VW;
}
    .GB2_dates img {
        width: 4.3478260869565215VW;
        height: 4.3478260869565215VW;
        margin-right: 2.898550724637681VW;
    }
    p.GB2_T3 {
        font-size: 3.3816425120772946VW;
        line-height: 4.714975845410628VW;
        font-weight: 600;
        font-family: 'Montserrat';
        color: var(--color-6);
    }
p.GB2_T4 {
    font-size: 4.830917874396135VW;
    font-weight: 400;
    line-height: 5.845410628019324VW;
    color: #B7B7B7;
    font-family: 'Inter';
    margin-bottom: 3.864734299516908VW;
    max-height: 46.85990338164252VW;
    overflow: auto;
}
p.GB2_T5 {
    font-size: 4.830917874396135VW;
    color: #E33A23;
    font-family: 'Montserrat';
    font-weight: 600;
    margin-bottom: 25.36231884057971VW;
}

.GF2 {
    margin-bottom: 27.053140096618357VW;
}
p.GB2_text {
    font-size: 10.869565217391305VW;
    color: #E33A23;
    font-family: 'Montserrat';
    font-weight: 600;
    margin-left: 7.004830917874397VW;
    z-index: 2;
    position: absolute;
    margin-top: -4.2vw;
}
img.GB2_img1 {
    width: 100vw;
    height: auto;
    margin-bottom: 9.178743961352657VW;
}




img.GB2_img {
    width: 79.71014492753623VW;
    height: 59.42028985507246VW;
    margin-bottom: 3.864734299516908VW;
}
.GF2_B {
    width: 79.71014492753623VW;
    margin: auto;
}
    p.GF2_F4 {
        width: fit-content;
        font-size: 2.657004830917874VW;
        font-weight: 600;
        font-family: 'Montserrat';
        color: #E33A23;
        border: 0.1vw solid #E33A23;
        padding: 1.5vw 6vw;
        border-radius: 6vw;
        margin-bottom: 4.3478260869565215VW;
    }
    p.GF2_F5 {
        font-size: 6.038647342995169VW;
        line-height: 8.417874396135266VW;
        font-weight: 700;
        font-family: 'Montserrat';
        margin-bottom: 2.1739130434782608VW;
        max-height: 33.81642512077295VW;
        overflow: auto;
    }
.GF2_F6 {
    display: flex;
    margin-bottom: 2.657004830917874VW;
}
    .GF2_F6 img {
        width: 4.3478260869565215VW;
        height: 4.3478260869565215VW;
        margin-right: 2.898550724637681VW;
    }
    .GF2_F6 p {
        font-size: 3.3816425120772946VW;
        line-height: 4.714975845410628VW;
        font-weight: 600;
        font-family: 'Montserrat';
        color: var(--color-6);
    }
    p.GF2_F7 {
        font-size: 4.830917874396135VW;
        font-weight: 400;
        line-height: 5.845410628019324VW;
        color: #B7B7B7;
        font-family: 'Inter';
        margin-bottom: 3.864734299516908VW;
        max-height: 46.85990338164252VW;
        overflow: auto;
    }
    p.GF2_F8 {
        font-size: 4.830917874396135VW;
        color: #E33A23;
        font-family: 'Montserrat';
        font-weight: 600;
        margin-bottom: 9.260869565217392VW;
    }





p.GF3_text {
    font-size: 10.869565217391305VW;
    color: #E33A23;
    font-family: 'Montserrat';
    font-weight: 600;
    margin-left: 7.004830917874397VW;
    z-index: 2;
    position: absolute;
    margin-top: -1vw;
}

.GF3_Content {
    background-image: url('../assets/blog/projects.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 72.22222222222221VW;
    height: 119.745411VW;
    text-align: center;
    padding-top: 6.038647342995169VW;
}
p.GF3_T1 {
    width: fit-content;
    font-size: 2.657004830917874VW;
    font-weight: 600;
    font-family: 'Montserrat';
    color: #E33A23;
    border: 0.1vw solid #E33A23;
    padding: 1.5vw 6vw;
    border-radius: 6vw;
    margin-bottom: 4.3478260869565215VW;
    margin-left: auto;
    margin-right: 4.1062801932367154VW;
}

.GF3_F2 {
    display: flex;
    margin-bottom: 2.657004830917874VW;
    margin-top: 85%;
    margin-left: 5.797101449275362VW;
}
    .GF3_F2 img {
        width: 4.3478260869565215VW;
        height: 4.3478260869565215VW;
        margin-right: 2.898550724637681VW;
    }
    .GF3_F2 p {
        font-size: 3.3816425120772946VW;
        line-height: 4.714975845410628VW;
        font-weight: 600;
        font-family: 'Montserrat';
        color: var(--color-5);
    }
    
    p.GF3_T3 {
        text-align: left;
        font-size: 5.314009661835748VW;
        line-height: 7.408212560386474VW;
        font-weight: 700;
        font-family: 'Montserrat';
        color: var(--color-5);
        margin-bottom: 2.657004830917874VW;
        margin-left: 5.797101449275362VW;
    }
    p.GF3_T4 {
        font-size: 4.830917874396135VW;
        color: #E33A23;
        font-family: 'Montserrat';
        font-weight: 600;
        width: fit-content;
        margin-left: 5.797101449275362VW;
    }

img.GF3_img {
    width: 100vw;
}









/* INICIO CSS SECCION DE PROJECTS Y GENERAL */


.PB2 {
    width: 79.71014492753623VW;
    margin: auto;
}
    p.PB2_T1 {
        width: fit-content;
        font-size: 2.657004830917874VW;
        font-weight: 600;
        font-family: 'Montserrat';
        color: #E33A23;
        border: 0.1vw solid #E33A23;
        padding: 1.5vw 6vw;
        border-radius: 6vw;
        margin-bottom: 4.3478260869565215VW;
    }
    p.PB2_T2 {
        font-size: 6.038647342995169VW;
        line-height: 8.417874396135266VW;
        font-weight: 700;
        font-family: 'Montserrat';
        margin-bottom: 2.1739130434782608VW;
    }
.PB2_dates {
    display: flex;
    margin-bottom: 2.657004830917874VW;
}
    .PB2_dates img {
        width: 4.3478260869565215VW;
        height: 4.3478260869565215VW;
        margin-right: 2.898550724637681VW;
    }
    p.PB2_T3 {
        font-size: 3.3816425120772946VW;
        line-height: 4.714975845410628VW;
        font-weight: 600;
        font-family: 'Montserrat';
        color: var(--color-6);
    }
p.PB2_T4 {
    font-size: 4.830917874396135VW;
    font-weight: 400;
    line-height: 5.845410628019324VW;
    color: #B7B7B7;
    font-family: 'Inter';
    margin-bottom: 3.864734299516908VW;
}
p.PB2_T5 {
    font-size: 4.830917874396135VW;
    color: #E33A23;
    font-family: 'Montserrat';
    font-weight: 600;
    margin-bottom: 25.36231884057971VW;
}

.PF2 {
    margin-bottom: 27.053140096618357VW;
}
p.PB2_text {
    font-size: 10.869565217391305VW;
    color: #E33A23;
    font-family: 'Montserrat';
    font-weight: 600;
    margin-left: 7.004830917874397VW;
    z-index: 2;
    position: absolute;
    margin-top: -4.9vw;
}
img.PB2_img1 {
    width: 89vw;
    height: auto;
    margin-bottom: 9.178743961352657VW;
}




img.PB2_img {
    width: 79.71014492753623VW;
    height: 59.42028985507246VW;
    margin-bottom: 3.864734299516908VW;
}
.PF2_B {
    width: 79.71014492753623VW;
    margin: auto;
}
    p.PF2_F4 {
        width: fit-content;
        font-size: 2.657004830917874VW;
        font-weight: 600;
        font-family: 'Montserrat';
        color: #E33A23;
        border: 0.1vw solid #E33A23;
        padding: 1.5vw 6vw;
        border-radius: 6vw;
        margin-bottom: 4.3478260869565215VW;
    }
    p.PF2_F5 {
        font-size: 6.038647342995169VW;
        line-height: 8.417874396135266VW;
        font-weight: 700;
        font-family: 'Montserrat';
        margin-bottom: 2.1739130434782608VW;
    }
.PF2_F6 {
    display: flex;
    margin-bottom: 2.657004830917874VW;
}
    .PF2_F6 img {
        width: 4.3478260869565215VW;
        height: 4.3478260869565215VW;
        margin-right: 2.898550724637681VW;
    }
    .PF2_F6 p {
        font-size: 3.3816425120772946VW;
        line-height: 4.714975845410628VW;
        font-weight: 600;
        font-family: 'Montserrat';
        color: var(--color-6);
    }
    p.PF2_F7 {
        font-size: 4.830917874396135VW;
        font-weight: 400;
        line-height: 5.845410628019324VW;
        color: #B7B7B7;
        font-family: 'Inter';
        margin-bottom: 3.864734299516908VW;
    }
    p.PF2_F8 {
        font-size: 4.830917874396135VW;
        color: #E33A23;
        font-family: 'Montserrat';
        font-weight: 600;
        margin-bottom: 9.260869565217392VW;
    }


/* FIN CSS SECCION DE PROJECTS Y GENERAL */


.SubCat {
    text-align: center;
    margin-bottom: 17.391304347826086VW;
}
.Ssearch {
    display: flex;
    align-items: center;
    justify-content: center;
}
.Ssearch input {
    width: 70.193237VW;
    height: 14.251207729468598VW;
    border: 0.1vw solid #B7B7B7;
    font-size: 6.038647342995169VW;
    font-weight: 300;
    padding: 0vw 5.797101449275362VW;
    color: #B7B7B7;
    font-family: var(--Inter);
    margin-left: -1.95vw;
}
.Ssearch img {
    width: 7.004830917874397VW;
    height: 7.004830917874397VW;
    margin-left: -9vw;
}


.showDK {
    display: none;
}

.Content {
    display: flex;
    flex-direction: column-reverse;
}


select#selectSubCat {
    width: 70.193237VW;
    height: 14.251207729468598VW;
    background-color: #E33A23;
    font-size: 6.038647342995169VW;
    color: var(--color-5);
    font-family: 'Montserrat';
    font-weight: 700;
    margin-bottom: 4.1062801932367154VW;
}
option.optSubCat {
    background-color: white;
    color: var(--color-2);
    font-weight: 700;
}


.plusSC {
    width: 15.70048309178744VW;
    height: 15.70048309178744VW;
    cursor: pointer;
    display: flex;
    margin: auto;
}


@media (min-width: 768px) {

.showMV {
    display: none !important;
}
.showDK {
    display: block;
}

.Content {
    display: block;
    flex-direction: initial;
}


.GB1 {
    height: 31.927083333333332VW;
    background-image: url('../assets/blog/header.png');
    margin-bottom: 7.291666666666667VW;
}
.GB1 img {
    margin-left: 11.833333333333334VW;
    padding-top: 13%;
}
.GB1 p {
    font-size: 4.427083333333334VW;
    z-index: 0;
}

img.GB1_img {
    width: 30.416666666666664VW;
    height: 18.333333333333332VW;
    margin-bottom: 0vw;
    margin-top: 0vw;
    margin-right: 2.2395833333333335VW;
}

.GB2 {
    display: flex;
    width: 79.71014492753623VW;
    margin-bottom: 7.968333333333334VW;
}
p.GB2_T1 {
    width: fit-content;
    font-size: 0.5729166666666666VW;
    padding: 0.3vw 1.7vw;
    border-radius: 6vw;
    margin-bottom: 3.3333333333333335VW;
}
p.GB2_T2 {
    width: 30.416666666666664VW;
    font-size: 1.3020833333333335VW;
    line-height: 1.8151041666666665VW;
    margin-bottom: 0.46875VW;
}
p.GB2_T4 {
    width: 30.416666666666664VW;
    font-size: 1.0416666666666665VW;
    line-height: 1.2604166666666665VW;
    margin-bottom: 0.8333333333333334VW;
    max-height: 7.083333333333333VW;
    overflow: auto;
}
.GB2_Date {
    display: flex;
    width: 30.416666666666664VW;
    justify-content: space-between;
    align-items: center;
}
.GB2_F4B1 {
    display: flex;
}

.GB2_F4B1 p{
    font-size: 0.7291666666666666VW;
    color: var(--color-6);
    font-weight: 600;
    font-family: 'Montserrat';
}
.GB2_F4B1 img{
    width: 0.9375VW;
    height: 0.9375VW;
    margin-right: 0.625VW;
}
p.GB2_F4B2 {
    font-size: 1.0416666666666665VW;
    color: #E33A23;
    font-weight: 600;
    font-family: 'Montserrat';
}




p.GB2_text {
    font-size: 2.34375VW;
    margin-left: 7.5VW;
    margin-top: 0.5vw;
}
img.GB2_img1 {
    width: 59.42708333333333VW;
    margin-bottom: -1.9VW;
}

img.GB2_img {
    width: 30.416666666666664VW;
    height: 18.333333333333332VW;
    margin-bottom: 0.8854166666666666VW;
}

.GF2 {
    margin-bottom: 5.208333333333334VW;
}
.GF2_F2 {
    display: flex;
}
.GF2_F2 p {
    font-size: 0.7291666666666666VW;
    color: var(--color-6);
    font-weight: 600;
    font-family: 'Montserrat';
}
.GF2_F2 img {
    width: 0.9375VW;
    height: 0.9375VW;
    margin-right: 0.625VW;
}
p.GF2_F3 {
    width: fit-content;
    font-weight: 600;
    font-family: 'Montserrat';
    color: #E33A23;
    border: 0.1vw solid #E33A23;
    border-radius: 6vw;
    font-size: 0.5729166666666666VW;
    padding: 0.3vw 1.7vw;
}
p.GF2_F5 {
    width: 30.416666666666664VW;
    font-size: 1.3020833333333335VW;
    line-height: 1.8151041666666665VW;
    margin-bottom: 0.46875VW;
}
p.GF2_F7 {
    width: 30.416666666666664VW;
    font-size: 1.0416666666666665VW;
    line-height: 1.2604166666666665VW;
    margin-bottom: 0.8333333333333334VW;
    max-height: 7.083333333333333VW;
    overflow: auto;
}
p.GF2_F8 {
    font-size: 1.0416666666666665VW;
    margin-bottom: 0VW;
}
.GF2_Content {
    display: flex;
    margin-left: 7.5VW;
}

.GF2_B {
    width: 30.4VW;
    margin: 0vw;
    margin-right: 2.4479166666666665VW;
}


.GF3 {
    margin-bottom: 9.21875VW;
}
p.GF3_text {
    font-size: 2.34375VW;
    margin-left: 7.5VW;
    margin-top: 0.5vw;
}
img.GF3_img {
    width: 36.145833333333336VW;
}

.GF3_Content {
    width: 19.895833333333332VW;
    height: 30.677083333333332VW;
    padding-top: 1.3020833333333335VW;
    margin: 0vw 0.9114583333333334VW;
}
p.GF3_T1 {
    font-size: 0.5729166666666666VW;
    padding: 0.3vw 1.7vw;
    border-radius: 6vw;
    margin-right: 1.25VW;
}



.GF3_F2 {
    margin-left: 1.6666666666666667VW;
    margin-bottom: 0.8854166666666666VW;
    margin-top: 78%;
}
    .GF3_F2 img {
        width: 0.9375VW;
        height: 0.9375VW;
        margin-right: 0.625VW;
    }
    .GF3_F2 p {
        font-size: 0.7291666666666666VW;
        font-weight: 600;
        font-family: 'Montserrat';
        line-height: 1vw;
    }
p.GF3_T3 {
    width: 16.510416666666668VW;
    font-size: 1.3020833333333335VW;
    line-height: 1.8151041666666665VW;
    margin-bottom: 0.78125VW;
    margin-left: 1.6666666666666667VW;
    max-height: 7.291666666666667VW;
    overflow: auto;
}
p.GF3_T4 {
    font-size: 1.0416666666666665VW;
    margin-left: 1.6666666666666667VW;
}










/* INICIO CSS SECCION DE PROJECTS Y GENERAL */

    .PF2_Content {
        display: flex;
        flex-flow: wrap;
        width: 64.3vw;
        margin-left: 7.760416666666667VW;
        justify-content: space-between;
    }
    .PF2_B {
        width: 18.75VW;
        margin: 0vw;
        margin-bottom: 3.75VW;
    }
    p.PB2_text {
        font-size: 2.34375VW;
        margin-top: 1vw;
        margin-left: 7.5VW;
    }
    img.PB2_img1 {
        width: 39.166666666666664VW;
        height: auto;
        margin-bottom: -4.4vw;
    }
    img.PB2_img {
        width: 18.75VW;
        height: 13.4375VW;
        margin-bottom: 1.1979166666666667VW;
    }
    .PB2_Date {
        display: flex;
        width: 18.75VW;
        justify-content: space-between;
        align-items: center;
    }
    .PF2_F2 {
        display: flex;
    }
    .PF2_F2 img {
        width: 0.9375VW;
        height: 0.9375VW;
        margin-right: 0.625VW;
    }
    .PF2_F2 p {
        font-size: 0.7291666666666666VW;
        color: var(--color-6);
        font-family: 'Montserrat';
        font-weight: 600;
    }
    p.PF2_F3 {
        width: fit-content;
        font-weight: 600;
        font-family: 'Montserrat';
        color: #E33A23;
        border: 0.1vw solid #E33A23;
        border-radius: 6vw;
        font-size: 0.5729166666666666VW;
        padding: 0.3vw 1.7vw;
    }
    p.PF2_F5 {
        font-size: 1.3020833333333335VW;
        line-height: 1.8151041666666665VW;
        margin-bottom: 0.78125VW;
        height: 3.5vw;
        overflow: auto;
    }
    p.PF2_F7 {
        font-size: 0.8333333333333334VW;
        line-height: 1.0083333333333333VW;
        margin-bottom: 0.3645833333333333VW;
        height: 6.770833333333333VW;
        overflow: auto;
    }
    p.PF2_F8 {
        font-size: 0.9375VW;
        margin-bottom: 0vw;
    }
.GF1 {
    margin-left: 7.5VW;
}
/* FIN CSS SECCION DE PROJECTS Y GENERAL */


.SubCat {
    width: fit-content;
    margin-left: auto;
    margin-right: 9.375VW;
}

.SCont {
    width: 11vw;
    margin-bottom: 3.177083333333333VW;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: right;
}
.SCont a {
    font-size: 1.0416666666666665VW;
    font-weight: 700;
    font-family: 'Montserrat';
}

.lineCat {
    height: 0.15625VW;
    background-color: #E33A23;
}
.lineCatV {
    width: 1.9791666666666665VW;
    margin-left: 1.1458333333333333VW;
}

.colorRed {
    color: #E33A23 !important;
}

.General {
    width: 75vw;
}
.Content {
    display: flex;
}

.Ssearch {
    display: flex;
    align-items: center;
    margin-top: 3.802083333333333VW;
}
.Ssearch input {
    width: 10.77083VW;
    height: 3.0729166666666665VW;
    border: 0.1vw solid #B7B7B7;
    font-size: 0.9375VW;
    font-weight: 300;
    padding: 0vw 1.7708333333333333VW;
    color: #B7B7B7;
    font-family: var(--Inter);
    margin-left: 0vw;
}
.Ssearch::placeholder{
    color: #B7B7B7;
    font-size: 0.9375VW;
    font-weight: 300;
    font-family: var(--Inter);
}
.Ssearch img {
    width: 1.5104166666666667VW;
    height: 1.5104166666666667VW;
    margin-left: -2vw;
}



.plusSC {
    width: 3.3854166666666665VW;
    height: 3.3854166666666665VW;
    cursor: pointer;
    display: flex;
    margin: auto;
    margin-right: 32vw;
}

.ContentSC {
    border-bottom: 0.1vw solid #B7B7B7;
    padding-bottom: 2vw;
}


}

</style>