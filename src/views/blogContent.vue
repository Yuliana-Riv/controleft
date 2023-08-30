<template >
  <div id="BlogC">
    <Navigator />
    <div class="news-h">
      <p>News</p>
    </div>
    <div class="blog-c">
      <div class="blog-body">
        <div class="principal-header">
          <div class="box-txt">
            <img src="../assets/return.svg" alt="return" class="return" />
            <p class="date">
              <img src="../assets/clock.svg" alt="clock" /> October 12, 2022
            </p>
            <p class="title">
              Ford Cuautitlan B299 Body Secuencer System for Deck Lid, Lift
              Gate, Rear Door.
            </p>
            <p class="cat">Projects</p>
          </div>
          <img src="../assets/b1.png" alt="img" class="principal-img" />
        </div>
        <div class="box-txt">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            tincidunt lobortis tincidunt. Duis sed mollis arcu. Fusce
            pellentesque ipsum eget ipsum hendrerit, vel laoreet velit vehicula.
            In congue consectetur fermentum. Donec vitae tortor est. Vivamus ut
            quam bibendum, elementum est eu, interdum nunc. Etiam finibus luctus
            magna, ut feugiat justo blandit vel. Nunc fermentum egestas maximus.
            In semper metus sem, a pulvinar urna interdum non. Curabitur
            eleifend eget dui id rutrum.
          </p>
          <p>
            Suspendisse quis dictum diam. Fusce mattis ornare tellus, eget
            gravida nibh convallis quis. Nulla posuere lorem quis rhoncus
            condimentum. Maecenas efficitur lorem in consequat pharetra. Aliquam
            feugiat vel tortor sit amet placerat. Sed accumsan turpis ut ante
            mattis tristique. In a pharetra eros.
          </p>
          <p>
            Pellentesque urna mauris, vulputate vel rutrum sed, euismod a sem.
            Maecenas non est a eros iaculis suscipit. Ut feugiat pretium elit,
            eget consequat neque ultricies sit amet. Curabitur vehicula tellus
            ac venenatis congue. Quisque sodales et lectus sed convallis. In
            pharetra arcu nulla, nec elementum velit condimentum vitae. Cras
            condimentum scelerisque diam. Quisque velit diam, venenatis a
            consectetur eget, molestie a elit. Praesent eleifend nisi sit amet
            massa tincidunt lacinia. Sed efficitur nulla et felis rutrum, nec
            cursus nisl maximus. Nulla sed eleifend ipsum. In euismod aliquam
            velit vitae euismod. Vestibulum volutpat placerat lacus, eu maximus
            nunc bibendum nec. Ut id sollicitudin orci.
          </p>
        </div>
        <div class="two-items-box">
          <img src="../assets/b2.png" alt="img" class="img-c" />
          <div class="quote-box">
            <p class="qt">
              “Quisque velit diam, venenatis a consectetur eget, molestie a
              elit.”
            </p>
            <p class="author">Lorem Ipsum</p>
          </div>
        </div>
        <div class="box-txt">
          <p><b>Maecenas eu vestibulum enim.</b></p>
          <p>
            Aenean non hendrerit lectus, eget porttitor quam. Integer id quam
            fringilla, tincidunt nibh at, congue felis. Nunc posuere vel ex eu
            viverra. Etiam rutrum neque quis mi porttitor, in ornare purus
            consequat. In lobortis lorem et vehicula placerat. Vivamus leo urna,
            feugiat quis faucibus et, ullamcorper vel sem. Etiam bibendum at
            nunc id blandit. Donec ac quam dignissim, interdum diam a, blandit
            nunc. Donec nec efficitur lectus. Pellentesque dictum vestibulum
            enim, vel accumsan magna pretium at. Donec semper ut sapien commodo
            posuere. Curabitur egestas nisl risus, sed scelerisque ex
            ullamcorper nec. Mauris quis metus ex. Nulla auctor ante vitae
            mauris fermentum, sed convallis ligula hendrerit. Sed commodo odio
            id est ultricies eleifend.
          </p>
        </div>
        <div class="two-items-box reverse">
          <div class="quote-box">
            <p class="qt">
              “Quisque velit diam, venenatis a consectetur eget, molestie a
              elit.”
            </p>
            <p class="author">Lorem Ipsum</p>
          </div>
          <img src="../assets/b3.png" alt="img" class="img-c" />
        </div>
        <div class="box-txt">
          <p>
            Integer non quam et augue finibus egestas. Ut bibendum id mauris sed
            vehicula. Sed sit amet odio nibh. Curabitur non nunc dictum, cursus
            quam ac, mattis justo. Curabitur fermentum diam vitae leo
            pellentesque, ut laoreet erat viverra. Nulla facilisi. Duis
            fringilla leo sit amet ullamcorper vehicula. Integer luctus interdum
            vulputate. Curabitur eget dolor interdum, viverra diam in, efficitur
            sapien. Mauris non nunc aliquet, pretium ante nec, vulputate ligula.
            Integer cursus odio ac odio varius, ac scelerisque tortor tempus.
            Quisque vel rhoncus purus, non iaculis libero. Quisque finibus nibh
            id urna semper congue in at sapien. Curabitur ligula erat, rhoncus
            ut mi sit amet, mollis convallis felis.
          </p>
        </div>
      </div>
      <div class="sm-c ">
        <p>Share this post</p>
        <div class="sm-c-b">
          <img src="../assets/ism1.svg" alt="fb" class="sm-i" />
          <img src="../assets/ism2.svg" alt="tw" class="sm-i" />
          <img src="../assets/ism3.svg" alt="in" class="sm-i" />
          <img src="../assets/ism4.svg" alt="pr" class="sm-i" />          
        </div> 
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navigator from "../components/fixed/Navigator.vue";
import Footer from "../components/fixed/Footer.vue";
export default {
  components: {
    Navigator,
    Footer,
  },
  metaInfo() {
    return {
      title: "Ford Cuautitlan B299 Body Secuencer System for Deck Lid, Lift Gate, Rear Door.",
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
};
</script>
<style>
#BlogC .news-h{
    width: 100%;
    background-image: url('../assets/nws1mo.png');
    background-size: cover;
    background-repeat: no-repeat;
}
#BlogC .news-h p {
    padding: 88.889vw 27.536vw 10.628vw;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 15.700vw;
    line-height: 102.4%;
    text-align: center;
    color: #FFFFFF;
}
#BlogC .return {
    width: 15.700vw;
    height: 15.700vw;
    margin-bottom: 14.734vw;
}
#BlogC .blog-body {
    padding: 14.734vw 7.729vw 16.667vw;
}
#BlogC .box-txt .date {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 3.382vw;
    line-height: 139.4%;
    display: flex;
    align-items: center;
    color: #D9D9D9;
}
#BlogC .box-txt .date img {
    width: 4.348vw;
    height: 4.348vw;
    margin-right: 2.899vw;
}
#BlogC .box-txt .title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 6.039vw;
    line-height: 139.4%;
    color: #000000;
    margin: 3.382vw 0;
}
#BlogC .box-txt .cat {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 2.657vw;
    line-height: 3.140vw;
    color: #E33A23;
    border: 0.483vw solid #E33A23;
    border-radius: 4.831vw;
    width: fit-content;
    padding: 2.174vw 7.729vw;
}
#BlogC .box-txt {
    margin-bottom: 9.903vw;
}
#BlogC .box-txt p {
    font-family: 'Inter';
    font-style: normal;
    font-size: 4.831vw;
    line-height: 178%;
    color: #B7B7B7;
}
#BlogC .principal-img {
    width: 100%;
}
#BlogC .principal-header {
    margin-bottom: 9.903vw;
}
#BlogC .two-items-box .img-c {
    width: 100%;
}
#BlogC .quote-box{
    margin-top: 4.348vw;
}
#BlogC .quote-box .qt {
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 600;
    font-size: 4.831vw;
    line-height: 178%;
    color: #E33A23;
}
#BlogC .quote-box .author {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 4.831vw;
    line-height: 178%;
    color: #747474;
}
#BlogC .two-items-box {
    margin-bottom: 15.459vw;
}
#BlogC .quote-box {
    width: 72.947vw;
}
#BlogC .sm-c p {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 4.831vw;
    line-height: 7.246vw;
    color: #B7B7B7;
}
#BlogC .sm-c {
    width: 84.783vw;
    margin: auto;
    border-top: 0.1vw solid gainsboro;
    padding-top: 15.459vw;
    padding-bottom: 19.082vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#BlogC .sm-c-b {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 5.072vw;
}
#BlogC .sm-i {
    width: 12.966vw;
}
@media (max-width:768px) {
#BlogC .two-items-box.reverse {
    display: flex;
    flex-direction: column-reverse;
}
#BlogC .two-items-box.reverse .quote-box {
    margin-left: auto;
}
#BlogC .two-items-box.reverse .quote-box .qt,#BlogC .two-items-box.reverse .quote-box .author {
    text-align: right;
}
}
@media (min-width:768px) { 
#BlogC .news-h{ 
    background-image: url('../assets/nws1pc.png');
}
#BlogC .news-h p {
  padding: 17.031vw 43.698vw 10.365vw;
font-size: 4.427vw;
line-height: 102.4%;
}
#BlogC .blog-body {
    padding: 14.734vw 11.510vw 3.958vw;
}
#BlogC .return {
    width: 3.385vw;
    height: 3.385vw;
    margin-bottom: 8.333vw;
}
#BlogC .principal-header, #BlogC .box-txt {
    margin-bottom: 5.104vw;
}
 #BlogC .box-txt {
    margin: 0 auto 5.104vw;
    width: 50.573vw;
}
#BlogC .box-txt .date img {
    width: 0.938vw;
    height: 0.938vw;
    margin-right: 0.625vw;
}
#BlogC .box-txt .date{
font-size: 0.729vw;
line-height: 139.4%;
}
#BlogC .principal-header .box-txt .title {
    font-size: 1.823vw;
    line-height: 139.4%;
    margin: 2.24vw 0;
}
#BlogC .principal-header .box-txt .cat {
    padding: 0.483vw 2.729vw;
    border: 0.183vw solid #E33A23;
    font-size: 0.573vw;
    line-height: 0.677vw;
}
#BlogC .principal-header {
    display: flex;
    justify-content: space-between;
}
#BlogC .principal-header .box-txt {
    margin-bottom: 5.104vw;
    width: 34.375vw;
}
#BlogC .principal-img {
    width: 39.010vw;
}
#BlogC .box-txt p {
    font-size: 1.042vw;
    line-height: 178%;
    margin-bottom: 1.042vw;
}
#BlogC .two-items-box {
    margin-bottom: 3.281vw;
    display: flex; 
}
#BlogC .two-items-box .img-c {
    width: 32.5vw;
    height: fit-content;
}
#BlogC .quote-box .qt {
    font-size: 1.563vw;
}
#BlogC .quote-box .author {
    font-size: 1.042vw;
}
#BlogC .quote-box {
    width: 27.188vw;
    margin-left: 3.698vw;
}
#BlogC .two-items-box.reverse {
    justify-content: flex-end;
} 
#BlogC .quote-box { 
    margin-left: 3.698vw;
}
#BlogC .two-items-box.reverse .quote-box {
    margin-right: 4.635vw;
    margin-left: 0;
}
#BlogC .sm-c { 
    width: 50.783vw;
    border-top: 0.1vw solid gainsboro;
    padding: 3.854vw 12.604vw 6.927vw;
    flex-direction: row;
}
#BlogC .sm-c p {
    font-size: 1.042vw;
    line-height: 1.563vw;
}
#BlogC .sm-i {
    width: 1.615vw;
}
#BlogC .sm-c-b { 
    width: 7.813vw;
    margin-top: 0;
    margin-left: 1.458vw;
}
}
</style>