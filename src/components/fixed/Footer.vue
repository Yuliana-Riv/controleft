<template>
  <div id="Footer">
    <div class="foo-c">
      <div class="row1">
        <div class="rowco">
          <div class="form-c">
            <p class="tl w1">Send us a message</p>
            <p class="descr w1">
              Need more information?<br />
              Send us a message and we will contact you as soon as possible.
            </p>
            <form class="formc">
              <div class="txtc">
                <label for="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div class="txtdbl">
                <div class="txtc w1e">
                  <label for="email">Your Email</label>
                  <input type="text" name="email" id="email" />
                </div>
                <div class="txtc w1p">
                  <label for="email">Your Phone</label>
                  <input type="text" name="email" id="email" />
                </div>
              </div>
              <div class="txtc msgc">
                <label for="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <div class="btn-send">Send</div>
            </form>
          </div>
          <div class="address-c">
            <div class="add-c">
              <img src="../../assets/maps.svg" alt="img" />
              <p>
                Bulevar Paseo Río Sonora 110 Edificio 2 Local A, Proyecto Rio
                Sonora, 83288 Hermosillo, Son.
              </p>
            </div>
            <div class="add-c">
              <img src="../../assets/phone.svg" alt="img" />
              <a href="tel:+52662136415">Tels: (52) (662) 213 6415, </a
              ><a href="tel:+52662136416">213 6416, </a
              ><a href="tel:+52662136417">213 6417</a>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1743.6223785391833!2d-110.94533819020275!3d29.068911560141217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce85a9664f3f4b%3A0xb4a598b8deb885ea!2sControl%20e%20Ingenier%C3%ADa%20SA%20de%20CV!5e0!3m2!1sen!2smx!4v1668717832913!5m2!1sen!2smx"
              width="620"
              height="493"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div class="row2">
        <div class="rowco">
          <a href="/" class="logo-i">
            <img src="../../assets/logo2.svg" alt="" />
          </a>
          <div class="foo-m">
            <div class="r1">
              <a href="/">HOME</a>
              <a href="/">ABOUT</a>
              <a href="/projects">PROJECT</a>
              <a href="/services">SERVICES</a>
              <a href="/">NEWS</a>
              <a href="/social-responsability">SOCIAL RESPONSABILITY</a>
            </div>
          </div>
          <div class="sm-c">
            <p>FOLLOW US</p>
            <div class="sm-f">
              <a href="" target="_blank" rel="noopener noreferrer"
                ><img src="../../assets/sm1.svg" alt="fb"
              /></a>
              <a href="" target="_blank" rel="noopener noreferrer"
                ><img src="../../assets/sm2.svg" alt="ig"
              /></a>
              <a href="" target="_blank" rel="noopener noreferrer"
                ><img src="../../assets/sm3.svg" alt="tw"
              /></a>
              <a href="" target="_blank" rel="noopener noreferrer"
                ><img src="../../assets/sm4.svg" alt="in"
              /></a>
            </div>
          </div>
        </div>
        <div class="r2">© Control-E 2022. All Rights Reserved.</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
#Footer {
  background-image: url("../../assets/bkfoo.png");
  background-size: cover;
  background-repeat: no-repeat;
}
#Footer p {
  margin: 0;
}
#Footer .foo-c {
  padding: 7.135vw 4.01vw 1.927vw;
}
#Footer .foo-c .rowco {
  padding: 0 4.792vw;
  display: flex;
  justify-content: space-between;
}
#Footer .foo-c .row1 .rowco {
  display: flex;
}
#Footer .w1 {
  width: 26.823vw;
}
#Footer .foo-c .tl {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 2.344vw;
  line-height: 2.865vw;
  color: #ffffff;
}
#Footer .foo-c .descr {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.042vw;
  line-height: 154.02%;
  color: #ffffff;
  margin: 1.771vw 0 2.69vw;
}
#Footer .foo-c .descr br {
  display: none;
}
#Footer .txtc {
  display: flex;
  flex-direction: column;
  margin-bottom: 2.604vw;
}
#Footer .txtc.msgc {
  margin-bottom: 0;
}
#Footer .txtc label {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 0.938vw;
  line-height: 1.146vw;
  color: #ffffff;
  margin-bottom: 0.677vw;
}
#Footer .txtc input {
  height: 3.594vw;
  width: 42.135vw;
  background-color: transparent;
  border: 0.01vw solid white;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 0.938vw;
  line-height: 1.146vw;
  color: #ffffff;
  margin-bottom: 0.677vw;
}
#Footer .txtc.w1e input {
  width: 24.115vw;
}
#Footer .txtc.w1p input {
  width: 16.51vw;
}
#Footer .txtc textarea {
  resize: none;
  width: 42.135vw;
  height: 9.688vw;
  background-color: transparent;
  border: 0.01vw solid white;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 0.938vw;
  line-height: 1.146vw;
  color: #ffffff;
  margin-bottom: 0.677vw;
}
#Footer .txtdbl {
  display: flex;
  justify-content: space-between;
}
#Footer .btn-send {
  margin-top: 3.333vw;
  width: 14.115vw;
  height: 4.115vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e33a23;
  border-radius: 2.604vw;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 0.938vw;
  line-height: 1.146vw;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  transition: 0.5s;
}
#Footer .btn-send:hover {
  background: #ffffff;
  color: #e33a23;
}
#Footer .form-c {
  padding-right: 3.854vw;
  margin-right: 3.854vw;
  border-right: 0.01vw solid white;
}
#Footer .address-c {
  padding-top: 2.708vw;
}
#Footer .add-c {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2.135vw;
  width: 32vw;
}
#Footer .add-c img {
  width: 1.042vw;
  margin-right: 1.094vw;
  margin-top: 0.313vw;
}
#Footer .add-c p,
#Footer .add-c a {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.042vw;
  line-height: 168.02%;
  color: #ffffff;
  text-decoration-color: transparent;
}
#Footer iframe {
  width: 32.292vw;
  height: 33.49vw;
}
#Footer a.logo-i img {
  width: 3.49vw;
}
#Footer .row2 {
  padding-top: 1.406vw;
  margin-top: 8.281vw;
  border-top: 0.01vw solid white;
}
#Footer .foo-m .r1 a {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 0.781vw;
  line-height: 0.938vw;
  text-transform: uppercase;
  color: #ffffff;
  text-decoration-color: transparent;
  margin-right: 3.646vw;
  transition: 0.5s;
}
#Footer .foo-m .r1 a:hover {
  color: #e33a23;
}
#Footer .foo-m .r1 {
  margin-top: 0.833vw;
}
#Footer .foo-m .r1 a:last-child {
  margin-right: 0;
}
#Footer .sm-c p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 0.781vw;
  line-height: 0.938vw;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 0.938vw;
}
#Footer .sm-f {
  margin-top: 0.938vw;
}
#Footer .sm-f img {
  width: 1.325vw;
  height: 1.325vw;
  margin-right: 0.583vw;
}

#Footer .r2 {
  margin-top: 0;
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 0.729vw;
  line-height: 0.885vw;
  color: #ffffff;
}
@media (min-width: 768px) {
  #Footer .r2 {
    position: relative;
    top: -1.5vw;
  }
}
@media (max-width: 768px) {
  #Footer .foo-c .row1 .rowco {
    flex-direction: column;
  }
  #Footer .foo-c {
    padding: 36.473vw 9.42vw 15.942vw;
  }
  #Footer .txtdbl {
    flex-direction: column;
  }
  #Footer .form-c {
    padding-right: 0;
    margin-right: 0;
    border-right: 0;
    padding-bottom: 27.295vw;
    margin-bottom: 12.319vw;
    border-bottom: 0.01vw solid white;
  }
  #Footer .foo-c .tl {
    font-size: 10.87vw;
    line-height: 13.285vw;
  }
  #Footer .w1 {
    width: 100%;
  }
  #Footer .foo-c .descr {
    font-size: 4.831vw;
    margin: 12.077vw 0 16.425vw;
  }
  #Footer .foo-c .descr {
    font-size: 4.831vw;
    margin: 12.077vw 0 16.425vw;
  }
  #Footer .foo-c .rowco {
    padding: 0;
  }
  #Footer .foo-c .descr br {
    display: block;
  }
  #Footer .txtc label {
    font-size: 4.348vw;
    line-height: 5.314vw;
    margin-bottom: 3.865vw;
  }
  #Footer .txtc input,
  #Footer .txtc.w1e input,
  #Footer .txtc.w1p input {
    width: 100%;
    height: 16.667vw;
    font-size: 4.348vw;
    line-height: 5.314vw;
  }
  #Footer .txtc textarea {
    width: 100%;
    height: 44.928vw;
    font-size: 4.348vw;
    line-height: 5.314vw;
  }
  #Footer .txtc {
    margin-bottom: 6.039vw;
  }
  #Footer .btn-send {
    width: 65.459vw;
    height: 19.082vw;
    border-radius: 100vw;
    margin-top: 11.594vw;
    margin: 11.594vw auto 0;
    font-size: 4.348vw;
    line-height: 5.314vw;
  }
  #Footer .add-c {
    margin-bottom: 8.937vw;
    width: 100%;
  }
  #Footer .add-c p,
  #Footer .add-c a {
    font-size: 4.831vw;
  }
  #Footer .add-c img {
    width: 4.831vw;
    margin-right: 4.831vw;
    margin-top: 1.813vw;
  }
  #Footer iframe {
    width: 100%;
    height: 91.304vw;
  }
  #Footer .row2 {
    padding-top: 27.295vw;
    margin-top: 12.319vw;
    border-top: 0.01vw solid white;
  }
  #Footer .foo-c .rowco {
    padding: 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
  #Footer a.logo-i img {
    width: 24.396vw;
  }
  #Footer .foo-m {
    margin: 17.15vw 0;
  }
  #Footer .foo-m .r1 {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #Footer .foo-m .r1 a {
    margin-right: 0;
    font-size: 4.831vw;
    line-height: 257.4%;
  }
  #Footer .sm-c p {
    font-size: 4.831vw;
    line-height: 5.797vw;
    text-align: center;
  }
  #Footer .sm-f {
    margin-top: 6.763vw;
    width: 42.271vw;
    height: 42.271vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
  }
  #Footer .sm-f img {
    width: 17.15vw;
    height: 17.15vw;
    margin-right: 0;
  }
  #Footer .r2 {
    margin-top: 12.56vw; 
font-size: 4.348vw;
line-height: 5.314vw;
    padding-top: 14.734vw;
    border-top: 0.01vw solid white;
}
}
</style>