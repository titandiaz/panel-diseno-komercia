<template>
  <div class="settings-box">
    <div
      :class="selectImagen ? 'padding' : ''"
      class="thumbnails"
    >
      <img
        class="left"
        src="../assets/Icons/left.png"
        @click="reset"
      >
      <transition-group
        name="staggered-fade"
        v-bind:css="false"
        v-on:leave="leave"
      >
        <img
          class="thumb"
          v-for="(item, index) in thumbnails2"
          :key="item.id"
          :src="item.source"
          @click="select(item)"
          v-bind:data-index="index"
        >
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.thumbnails2 = this.thumbnails.slice();
  },
  data() {
    return {
      otro: -1,
      selectImagen: false,
      thumbnails2: null,
      thumbnails: [
        {
          id: 1,
          source: require("../assets/Icons/Img_separator.png")
        },
        {
          id: 2,
          source: require("../assets/Icons/Img_separator.png")
        },
        {
          id: 3,
          source: require("../assets/Icons/Img_separator.png")
        },
        {
          id: 4,
          source: require("../assets/Icons/Img_separator.png")
        },
        // {
        //   id: 2,
        //   source:
        //     "https://www.fotojet.com/template-imgs-thumb/design/facebook-cover/travel-city-2.jpg"
        // },
        // {
        //   id: 3,
        //   source:
        //     "https://i.pinimg.com/originals/b4/f9/cb/b4f9cbc1f18d9d5ce7ea05f1a64d8f22.png"
        // },
        // {
        //   id: 4,
        //   source:
        //     "https://i0.wp.com/perfectaseduccion.com/wp-content/uploads/2018/11/luna-llena-portadas-para-facebook-Fotosparafacebook.es-8.jpg?fit=770%2C285&ssl=1"
        // },
        {
          id: 5,
          source: require("../assets/Icons/Img_separator.png")
        }
        // {
        //   id: 6,
        //   source:
        //     "https://www.fotojet.com/template-imgs-thumb/design/facebook-cover/travel-city-2.jpg"
        // },
        // {
        //   id: 7,
        //   source:
        //     "https://i.pinimg.com/originals/b4/f9/cb/b4f9cbc1f18d9d5ce7ea05f1a64d8f22.png"
        // },
        // {
        //   id: 8,
        //   source:
        //     "https://i0.wp.com/perfectaseduccion.com/wp-content/uploads/2018/11/luna-llena-portadas-para-facebook-Fotosparafacebook.es-8.jpg?fit=770%2C285&ssl=1"
        // },
        // {
        //   id: 9,
        //   source:
        //     "https://webdeimagenes.com/wp-content/uploads/2018/02/9-22.jpg"
        // }
      ]
    };
  },
  methods: {
    // beforeEnter: function(el) {
    //   el.style.opacity = 0;
    //   el.style.height = 0;
    // },
    // enter: function(el, done) {
    //   var delay = 70;
    //   setTimeout(function() {
    //     Velocity(el, {}, { complete: done });
    //   }, delay);
    // },
    leave: function(el, done) {
      var delay = 70;
      setTimeout(function() {
        Velocity(el, { height: -150 }, { complete: done });
      }, delay);
    },
    select(n) {
      this.thumbnails2 = [n];
      this.selectImagen = true;
    },
    reset() {
      this.thumbnails2 = this.thumbnails;
      this.selectImagen = false;
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
  display: grid;
  padding: 10px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  transition: all ease 0.3s;
}
.thumb {
  opacity: 1;
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 15px 46px rgba(151, 154, 194, 0.363);
  margin-bottom: 5px;
  cursor: pointer;
  transition: all ease 0.3s;
}
.thumb:hover {
  transform: scale(1.02);
}
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 6px;
  /* box-shadow: inset 0 0 3px rgba(151, 154, 194, 0.733); */
}
::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background: rgba(74, 88, 245, 0.733);
}
::-webkit-scrollbar-thumb:hover {
  background: #4a59f5;
}
.hide {
  display: none;
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
.opacity {
  opacity: 0;
  border: 2px solid red;
}
</style>
