
Vue.createApp({
  data: function () {
    return {

      Header: {

        title: "天氣晴朗的小鎮上Sunny Town",

        aboutCN:
          "「天氣晴朗的小鎮上」透過教育典藏兒童畫中的元素，結合創客的「交流共創」精神與新媒體「擴增實境AR」的應用，使繪畫創意不只在平面紙張上，更跳躍於空間、虛實中，跨越不同畫作，在這座天氣晴朗的小鎮上。",
        aboutEN:
          "\"Sunny Town\" features elements from educational children's art, combined with the creative spirit of creative entrepreneurs and the application of augmented reality (AR) through new media, making the artistic creativity not only limited to paper, but also spreading across space, virtual reality, and different artworks, in this warm and sunny town.",

        cvGRed: {

          name: "林俊遑 ｜ Chun-Huang, Lin",
          aboutCN:
            "國立清華大學　科技藝術研究所碩士班\n2001年出生於台灣，現就讀清華大學藝術學院科技藝術研究所。擅長互動裝置與網路藝術，關注於社會與科技工具之間的關係，尋找我們在科技環境中自身的定位。應用方面，專注於人機介面的開發與其互動實驗，透過深入技術研究去找尋其中藝術的可能。",
          aboutEN:
            "Graduate Institute of Art and Technology, National Tsing Hua University\nSpecializes in interactive installations, net art, and exploring society-technology relationship. Seeks artistic possibilities through technical.",

        },
        cvJH: {

          name: "黃紀虹 ｜ Chi-Hung, HUANG",
          aboutCN: "國立清華大學　科技藝術研究所碩士班\n2000年出生於台灣，現就讀清華大學藝術學院科技藝術研究所。創作類型尚未定位，目前仍在學習以不同媒材呈現思維，不侷限於實體或數位方式。由於語言能力較差，將創作視為溝通語言的一種，以個人價值觀提出對現今社會現象的觀察。",
          aboutEN: "Graduate Institute of Art and Technology, National Tsing Hua University\nExploring different media, beyond physical or virtual methods. Using art as a communication language to observe social phenomena with personal values.",

        },
        picture: {
          img01:"painting/1.jpg",
          intro01:"我家對面 | 謝昊恩",

          img02:"painting/2.jpg",
          intro02:"士兵的軍團 | 洪景睿",

          img03:"painting/3.jpg",
          intro03:"達悟族飛魚祭 | 簡梃勳",

          img04:"painting/4.jpg",
          intro04:"夜市小吃 | 何云希",

          img05:"painting/5.jpg",
          intro05:"機器人的家 | 陳科逸",

          img06:"painting/6.jpg",
          intro06:"我和親愛的阿公 | 王苡霓",

          img07:"painting/7.jpg",
          intro07:"我的美麗媽媽 | 許彤瑋",

          img08:"painting/8.jpg",
          intro08:"坐電動公車遊嘉義 | 方譽程",

          img09:"painting/9.jpg",
          intro09:"阿美族豐年祭 | 蔡子琦",

          img10:"painting/10.jpg",
          intro10:"幻想貓星球 | 林承勳",
        },
      },
    }
  },
  methods: {

  },
  mounted: function () {

  },
}).mount('.container-fluid')

function IntroFunction() {
  var x = document.getElementById("intro");
  var y = document.getElementById("picture");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    // document.querySelector('.pictureCard').style.display = "none";
  } else {
    x.style.display = "none";
  }
}

function PictureFunction() {
  var x = document.getElementById("picture");
  var y = document.getElementById("intro");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    // document.querySelector('.pictureCard').style.display = "none";
  } else {
    x.style.display = "none";
  }
}


// function IntroHide() {
//   var x = document.getElementById("intro");
//   x.style.display = "none";
//   document.querySelector('.pictureCard').style.display = "block";
// }


//判斷是哪一個marker被掃瞄到
// var marker01 = document.querySelector(".draw01");
// var marker02 = document.querySelector(".draw02");
// var marker03 = document.querySelector(".draw03");
// var marker04 = document.querySelector(".draw04");
// var marker05 = document.querySelector(".draw05");
// var marker06 = document.querySelector(".draw06");

// marker01.addEventListener("markerFound", (e) => {
//   console.log("found 01");
//   pictureCard(1, true);
// })
// marker01.addEventListener("markerLost", (e) => {
//   console.log("lost 01");
//   pictureCard(1, false);
// })

// marker02.addEventListener("markerFound", (e) => {
//   console.log("found 02");
//   pictureCard(2, true);
// })
// marker02.addEventListener("markerLost", (e) => {
//   console.log("lost 02");
//   pictureCard(2, false);
// })

// marker03.addEventListener("markerFound", (e) => {
//   console.log("found 03");
//   pictureCard(3, true);
// })
// marker03.addEventListener("markerLost", (e) => {
//   console.log("lost 03");
//   pictureCard(3, false);
// })

// marker04.addEventListener("markerFound", (e) => {
//   console.log("found 04");
//   pictureCard(4, true);
// })
// marker04.addEventListener("markerLost", (e) => {
//   console.log("lost 04");
//   pictureCard(4, false);
// })

// marker05.addEventListener("markerFound", (e) => {
//   console.log("found 05");
//   pictureCard(5, true);
// })
// marker05.addEventListener("markerLost", (e) => {
//   console.log("lost 05");
//   pictureCard(5, false);
// })

// marker06.addEventListener("markerFound", (e) => {
//   console.log("found 06");
//   pictureCard(6, true);
// })
// marker06.addEventListener("markerLost", (e) => {
//   console.log("lost 06");
//   pictureCard(6, false);
// })




//picture card fade in & fade out 動畫
// pictureCard("", false);
// function pictureCard(index = "", status = false) {
//   if(document.getElementById("picture").style.display == "none" &&
//       document.getElementById("intro").style.display == "none"){
//     document.querySelector('.pictureCard').style.display = "block";
//   }
//   const element = document.querySelector('.pictureCard');
//   const picture = document.querySelector('.painting');
//   picture.src = "painting/" + index + ".jpg";
//   if (status) {
//     setTimeout(function () {
//       element.classList.remove('fadeOutLeft');
//     }, 0);
//     element.classList.add('animated', 'fadeInLeft');
//     setTimeout(function () {
//       element.classList.remove('fadeInLeft');
//     }, 1000);
//   }
//   else {
//     element.classList.add('animated', 'fadeOutLeft');
//   }
// }


// AFRAME.registerComponent('registerevents', {
//   init: function () {
//       var marker = this.el;
//       marker.addEventListener('markerFound', function() {
//           var markerId = marker.id;
//           console.log('! markerFound' + markerId);
//           // do additional things you want to do
//       });
//       marker.addEventListener('markerLost', function() {
//           var markerId = marker.id;
//           console.log('! markerLost', markerId);
//           // do additional things you want to do
//       });
//   }
// });