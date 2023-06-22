
Vue.createApp({
    data: function(){
        return{

            Header:{

                title: "天氣晴朗的小鎮上Sunny Town",

                aboutCN:
                "「天氣晴朗的小鎮上」透過教育典藏兒童畫中的元素，結合創客的「交流共創」精神與新媒體「擴增實境AR」的應用，使繪畫創意不只在平面紙張上，更跳躍於空間、虛實中，跨越不同畫作，在這座天氣晴朗的小鎮上。",
                aboutEN:
                "\"Sunny Town\" features elements from educational children's art, combined with the creative spirit of creative entrepreneurs and the application of augmented reality (AR) through new media, making the artistic creativity not only limited to paper, but also spreading across space, virtual reality, and different artworks, in this warm and sunny town.",

                cvGRed:{
                    
                    name: "林俊遑 ｜ Chun-Huang, Lin",
                    aboutCN: 
                    "國立清華大學　科技藝術研究所碩士班\n2001年出生於台灣，現就讀清華大學藝術學院科技藝術研究所。擅長互動裝置與網路藝術，關注於社會與科技工具之間的關係，尋找我們在科技環境中自身的定位。應用方面，專注於人機介面的開發與其互動實驗，透過深入技術研究去找尋其中藝術的可能。",
                    aboutEN: 
                    "Graduate Institute of Art and Technology, National Tsing Hua University\nSpecializes in interactive installations, net art, and exploring society-technology relationship. Seeks artistic possibilities through technical.",
                    
                },
                cvJH:{
                    
                    name: "黃紀虹 ｜ Chi-Hung, HUANG",
                    aboutCN: "國立清華大學　科技藝術研究所碩士班\n2000年出生於台灣，現就讀清華大學藝術學院科技藝術研究所。創作類型尚未定位，目前仍在學習以不同媒材呈現思維，不侷限於實體或數位方式。由於語言能力較差，將創作視為溝通語言的一種，以個人價值觀提出對現今社會現象的觀察。",
                    aboutEN: "Graduate Institute of Art and Technology, National Tsing Hua University\nExploring different media, beyond physical or virtual methods. Using art as a communication language to observe social phenomena with personal values.",
                    
                },
            },
        }
    },
    methods: {

    },
    mounted: function(){

    },
}).mount('.container-fluid')


function IntroFunction() {
    var x = document.getElementById("intro");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function IntroHide() {
    var x = document.getElementById("intro");
    x.style.display = "none";
  }