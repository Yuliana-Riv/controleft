<template >
  <div id="Services">
    
    <Navigator />
    <div class="serv-b">
      <div class="serv-h">
        <p>Services</p>
      </div>
      <div class="serv-co">
        <div class="scb">
          <div class="serv-item">
            <img src="../assets/serv2.png" alt="serv" class="simg" />
            <div class="txtc">
              <p class="tl">Industrial Automation</p>
              <p class="txt">
                Hardware and software Design, comisioning, startup and stand by
                for:<br />
                • Conveyor systems<br />
                • Tooling systems<br />
                • Process systems<br />
                • Emulation system<br />
                • Panel Build<br />
                • Vision systems<br />
                • Energy managment
              </p>
            </div>
          </div>
          <div class="serv-item">
            <img src="../assets/serv3.png" alt="serv" class="simg" />
            <div class="txtc">
              <p class="tl">Controls Oriented Electrical Wiring</p>
              <p class="txt">
                Electrical Engineering and Field wiring for:<br />
                • Conveyor systems<br />
                • Tooling systems<br />
                • Process systems<br />
                • PLC, HMI, PDP, Power Feeds, MCP, PDP.<br />
                • Task and Inspection Lighting.<br />
                • Spot repair Descks<br />
                • Enet uplinks<br />
                • Paint Both Automation
              </p>
            </div>
          </div>
          <div class="serv-item">
            <img src="../assets/serv4.png" alt="serv" class="simg" />
            <div class="txtc">
              <p class="tl">Industrial Information Technology</p>
              <p class="txt"> 
                • MES Manufacturing Execution Systems<br />
                • Data Collection Monitoring Systems<br />
                • Traceability Systems<br />
                • Software Development<br />
                • Visual Factory 4.0<br />
                • SCADA/MES Systems<br />
                • Warehouse Management<br />
                • Scheduling<br />
                • Operator Advisor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import { url } from "../global/index";
import Navigator from "../components/fixed/Navigator.vue";
import Footer from "../components/fixed/Footer.vue";

export default {
  components: {
    Navigator,
    Footer,
  },
  metaInfo() {
    return {
      title: "Services",
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
<style >
#Services {
  width: 100%;
  overflow: hidden;
}
.serv-b .serv-h {
  background-image: url("../assets/serv1.png");
  background-size: 100%;
  padding: 88.889vw 16.425vw 10.628vw;
}
.serv-b .serv-h p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 15.700vw;
  line-height: 102.4%; 
  text-align: center; 
  color: #ffffff;
}
.serv-b .scb {
    padding: 25.121vw 15.700vw 0;
}
.serv-b .simg {
    width: 100%;
}
.serv-b .serv-item {
    padding-bottom: 32.126vw;
}
.serv-b .txtc .tl {
    padding: 12.478vw 0 10.145vw;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 10.870vw;
    line-height: 13.285vw;
    color: #E33A23;
}
.serv-b .txtc .txt {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 4.831vw;
    line-height: 12.319vw;
    color: #747474;
}
@media (min-width: 768px) {
    .serv-b .serv-h {
    background-image: url('../assets/serv1p.png'); 
    padding: 17.031vw 40.521vw 10.365vw;
}
.serv-b .serv-h p {
    font-size: 4.427vw; 
}
.serv-b .scb {
    padding: 9.115vw 12.292vw 0;
}
.serv-b .simg {
    width: 33.646vw;
}
.serv-b .serv-item {
    padding-bottom: 9.115vw;
    display: flex;
    align-items: flex-start;
}
.serv-b .txtc .tl {
    font-size: 2.344vw;
    line-height: 2.865vw;
    padding: 0 0 4.635vw;
}
.serv-b .txtc {
    margin-left: 6.198vw;
}
.serv-b .txtc .txt {
    font-size: 1.042vw;
    line-height: 2.656vw;
}
.serv-b .serv-item:nth-child(2) {
    flex-direction: row-reverse;
}
.serv-b .serv-item:nth-child(2) .txtc {
    margin-left: 0;
    margin-right: 6.198vw;
}
}
</style>