<template>
  <div class="settings-box">
    <img
      class="left"
      src="../assets/Icons/left.png"
      @click="reset"
    >
    <div class="thumbnails grid">
      <!-- :class="indexImg == index ? 'select' : ''" -->
      <img
        v-for="(element, index) in thumbnails"
        :id="index"
        :key="element.id"
        class="thumb"
        :src="element.source"
        :class="`select${index}`"
        @click="filter(element, index)"
      >
      <Options
        v-if="toggle"
        :height="height"
      />
    </div>
  </div>
</template>

<script>
import Options from "./Options";
import isotope from "isotope-layout";
import { setTimeout } from "timers";

export default {
  components: {
    Options
  },
  created() {
    this.relayoutTheGrid();
  },
  data() {
    return {
      isotope: null,
      height: 0,
      indexImg: -1,
      toggle: false,
      thumbnails: [
        {
          id: 1,
          source: require("../assets/Icons/Img_separator.png")
        },
        {
          id: 2,
          source:
            "https://www.fotojet.com/template-imgs-thumb/design/facebook-cover/travel-city-2.jpg"
        },
        {
          id: 3,
          source:
            "https://i.pinimg.com/originals/b4/f9/cb/b4f9cbc1f18d9d5ce7ea05f1a64d8f22.png"
        },
        {
          id: 4,
          source:
            "https://i0.wp.com/perfectaseduccion.com/wp-content/uploads/2018/11/luna-llena-portadas-para-facebook-Fotosparafacebook.es-8.jpg?fit=770%2C285&ssl=1"
        },
        {
          id: 5,
          source: require("../assets/Icons/Img_separator.png")
        },
        {
          id: 6,
          source:
            "https://www.fotojet.com/template-imgs-thumb/design/facebook-cover/travel-city-2.jpg"
        },
        {
          id: 7,
          source:
            "https://i.pinimg.com/originals/b4/f9/cb/b4f9cbc1f18d9d5ce7ea05f1a64d8f22.png"
        },
        {
          id: 8,
          source:
            "https://i0.wp.com/perfectaseduccion.com/wp-content/uploads/2018/11/luna-llena-portadas-para-facebook-Fotosparafacebook.es-8.jpg?fit=770%2C285&ssl=1"
        },
        {
          id: 9,
          source:
            "https://webdeimagenes.com/wp-content/uploads/2018/02/9-22.jpg"
        }
      ]
    };
  },
  methods: {
    relayoutTheGrid() {
      setTimeout(() => {
        var elem = document.querySelector(".grid");
        this.isotope = new isotope(elem, {
          itemSelector: ".thumb",
          layoutMode: "masonry"
        });
      }, 1);
    },
    filter: function(itemElem, n) {
      let select = document.querySelector(`.select${n}`);
      this.height = select.clientHeight;
      console.log(this.height);
      this.toggle = true;
      this.indexImg = n;
      this.isotope.arrange({ filter: `.select${n}` });
    },
    select(n, index) {
      this.indexImg = index;
    },
    reset() {
      this.toggle = false;
      this.isotope.arrange({ filter: ".thumb" });
    }
  }
};
</script>

<style scoped>
.settings-box {
  max-width: 345px;
  width: 100%;
  height: calc(100vh - 120px);
  background-color: #fff;
  box-shadow: 0 15px 46px rgba(151, 154, 194, 0.363);
  border-radius: 8px;
  position: relative;
}
.thumbnails {
  /* display: grid; */
  padding: 10px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  /* transition: all ease 0.3s; */
}
.thumb {
  opacity: 1;
  width: 94%;
  border-radius: 4px;
  box-shadow: 0 15px 46px rgba(151, 154, 194, 0.363);
  margin-bottom: 10px !important;
  cursor: pointer;
}
.thumb:hover {
  /* transition: transform ease 0.3s, filter ease 0.3s; */
  transform: scale(1.02);
  filter: blur(0.5px);
}
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 6px;
}
::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background: rgba(74, 88, 245, 0.733);
}
::-webkit-scrollbar-thumb:hover {
  background: #4a59f5;
}
.left {
  position: absolute;
  top: 20px;
  left: -25px;
  height: 35px;
  cursor: pointer;
  opacity: 0.5;
}
.left:hover {
  opacity: 1;
  transition: all ease 0.3s;
}
.grid {
  height: 100% !important;
}
</style>
