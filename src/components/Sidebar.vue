<template>
  <div class="sidebar">
    <img
      src="../assets/Icons/Grupo 13@2x.png"
      alt=""
      class="icon-komercia"
    >
    <div class="wrapper-icons">
      <img
        v-for="(icon, index) in icons"
        :key="index"
        :src="icon.icon"
        @click="selectType(index + 1)"
        :class="indexType == (index + 1) ? 'opacity' : ''"
      >
    </div>
    <img
      src="../assets/Icons/Setting2x.png"
      alt=""
      class="icon-setting"
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {
          icon: require("../assets/Icons/Header2x.png"),
          redirect: ""
        },
        {
          icon: require("../assets/Icons/Banner2x.png"),
          redirect: ""
        },
        {
          icon: require("../assets/Icons/Grid2x.png"),
          redirect: ""
        },
        {
          icon: require("../assets/Icons/Separator2x.png"),
          redirect: ""
        },
        {
          icon: require("../assets/Icons/Video2x.png"),
          redirect: ""
        },
        {
          icon: require("../assets/Icons/Footer2x.png"),
          redirect: ""
        },
        {
          icon: require("../assets/Icons/Contact2x.png"),
          redirect: ""
        }
      ],
      indexType: 1
    };
  },
  methods: {
    selectType(n) {
      this.indexType = n;
      this.$store.commit("SET_INDEXTYPE", n);
    }
  }
};
</script>

<style scoped>
.sidebar {
  width: 60px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0 0 46px rgba(151, 154, 194, 0.363);
  display: grid;
  grid-template-rows: 80px 400px 80px;
  align-content: space-between;
}
.icon-komercia {
  width: 75%;
  margin: 15px auto 0;
  cursor: pointer;
}
.icon-setting {
  width: 60%;
  margin: 15px auto;
}
.wrapper-icons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
}
.wrapper-icons > img {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  cursor: pointer;
  opacity: 0.3;
  transition: all ease 0.3s;
}
.wrapper-icons > img:hover {
  opacity: 1;
}
.opacity {
  opacity: 1 !important;
}
</style>
