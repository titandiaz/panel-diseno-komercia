<template>
  <div
    class="options"
    :style="`margin-top: ${height + 40}px`"
  >
    <div
      v-for="(item, index) in options"
      :key="index"
      class="section"
    >
      <div class="content">
        <span>{{item.name}}: </span>
        <div
          v-show="item.name == 'Colores'"
          class="colors"
        >
          <el-color-picker
            v-model="item.titleColor"
            size="small"
          ></el-color-picker>
          <el-color-picker
            v-model="item.textColor"
            size="small"
          ></el-color-picker>
          <el-color-picker
            v-model="item.btnColor"
            size="small"
          ></el-color-picker>
          <el-color-picker
            v-model="item.textBtnColor"
            size="small"
          ></el-color-picker>
          <!-- <div
            :style="`background-color: ${item.titleColor}`"
            class="color"
          ></div>
          <div
            :style="`background-color: ${item.textColor}`"
            class="color"
          ></div>
          <div
            :style="`background-color: ${item.btnColor}`"
            class="color"
          ></div>
          <div
            :style="`background-color: ${item.textBtnColor}`"
            class="color"
          ></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["height"],
  data() {
    return {
      color: "#1f0f61",
      options: [
        {
          name: "Colores",
          titleColor: "#1f0f61",
          textColor: "#aaaece",
          btnColor: "#24dac4",
          textBtnColor: "#eee"
        },
        {
          name: "Titulo",
          title: "Get Startup Framerwork"
        },
        {
          name: "Descriptión",
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil quo aliquid ex soluta sint!"
        },
        {
          name: "Texto botón",
          title: "Purchase for $245"
        },
        {
          name: "Botón",
          square: true,
          round: false,
          roundedEdges: false,
          line: false
        },
        {
          name: "Imagen de Fondo",
          source:
            "https://www.fotojet.com/template-imgs-thumb/design/facebook-cover/travel-city-2.jpg"
        }
      ],
      properties: [{}]
    };
  }
};
</script>

<style scoped>
.options {
  display: grid;
  width: 100%;
  text-align: left;
}
.section {
  padding: 0 10px 20px 10px;
}
.content > span {
  font-size: 14px;
  font-weight: 600;
  color: #0b223a;
  flex: 1.2;
}
.content {
  display: flex;
  align-items: center;
}
.colors {
  display: flex;
  flex: 1;
}
.color {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 10px;
  border: 2px solid #fff;
  box-shadow: 0 2px 12px 2px rgba(1, 28, 44, 0.15);
  cursor: pointer;
}
</style>
