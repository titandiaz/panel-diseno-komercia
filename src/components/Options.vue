<template>
  <div
    class="options"
    :style="`margin-top: ${height + 40}px`"
  >

    <div
      v-for="(item, index) in options"
      :key="index"
      class="content"
      :class="item.block ? 'flex' : ''"
    >
      <span :class="item.block ? 'padding' : ''">{{item.name}}: </span>
      <div
        v-if="item.name == 'Colores'"
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
      </div>
      <div v-if="item.name == 'Titulo'">
        <el-input
          size="small"
          placeholder="Escribe aquí el Titulo"
          v-model="title"
        ></el-input>
      </div>
      <div
        class="description"
        v-if="item.name == 'Descripción'"
      >
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="Escribe aquí la Descripción"
          v-model="description"
        >
        </el-input>
      </div>
      <div v-if="item.name == 'Texto botón'">
        <el-input
          size="small"
          placeholder="Escribe aquí el Texto"
          v-model="buttonText"
        ></el-input>
      </div>
      <div
        class="buttons"
        v-if="item.name == 'Botón'"
      >
        <div class="wrapper-square">
          <div class="button-square"></div>
        </div>
        <div class="wrapper-roundedEdges roundedEdges">
          <div class="button-roundedEdges"></div>
        </div>
        <div class="wrapper-round round">
          <div class="button-round"></div>
        </div>
        <div class="wrapper-line-square">
          <div class="button-line-square line"></div>
        </div>
        <div class="wrapper-line-roundedEdges roundedEdges">
          <div class="button-line-roundedEdges line"></div>
        </div>
        <div class="wrapper-line-round round">
          <div class="button-line-round line"></div>
        </div>
      </div>
      <div
        class="upload"
        v-if="item.name == 'Imagen de fondo'"
      >
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          list-type="picture"
        >
          <el-button
            size="small"
            type="primary"
          >Cargar</el-button>
        </el-upload>
        <!-- <div class="btn-upload">
          <i class="el-icon-arrow-up"></i>Cargar
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["height"],
  data() {
    return {
      title: "",
      description: "",
      buttonText: "",
      options: [
        {
          name: "Colores",
          titleColor: "#1f0f61",
          textColor: "#aaaece",
          btnColor: "#24dac4",
          textBtnColor: "#eee",
          block: false
        },
        {
          block: false,
          name: "Titulo",
          title: "Get Startup Framerwork"
        },
        {
          block: true,
          name: "Descripción",
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil quo aliquid ex soluta sint!"
        },
        {
          block: false,
          name: "Texto botón",
          title: "Purchase for $245"
        },
        {
          block: false,
          name: "Botón",
          square: true,
          round: false,
          roundedEdges: false,
          line: false
        },
        {
          block: true,
          name: "Imagen de fondo",
          source:
            "https://www.fotojet.com/template-imgs-thumb/design/facebook-cover/travel-city-2.jpg"
        }
      ],
      properties: [
        {
          id: 1,
          key: "titleColor",
          type: "colorPicker"
        },
        {
          id: 2,
          key: "textColor",
          type: "colorPicker"
        },
        {
          id: 3,
          key: "btnColor",
          type: "colorPicker"
        },
        {
          id: 4,
          key: "textBtnColor",
          type: "colorPicker"
        }
      ]
    };
  },
  methods: {
    handleRemove(file) {
      console.log(file);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
};
</script>

<style scoped>
.options {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 100%;
  /* width: 100%; */
  text-align: left;
}
.section {
  padding: 0 10px 20px 10px;
}
.content > span {
  font-size: 14px;
  font-weight: 600;
  color: #0b223a;
  flex: 1;
}
.content > div {
  /* flex: 1; */
}
.content {
  display: flex;
  align-items: center;
  padding: 0 10px;
  /* width: 300px; */
}
.colors,
.buttons {
  display: flex;
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
.flex {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
}
.description {
  width: 100%;
  margin-top: 10px;
}
/* .padding {
  margin-bottom: 10px;
} */
div[class|="button"] {
  width: 20px;
  height: 20px;
  /* border: 2px solid #fff; */
  /* margin-right: 8px; */
  background-color: #24dac4;
  box-shadow: 0 2px 10px 2px rgba(151, 154, 194, 0.239);
  cursor: pointer;
}
div[class|="button-line"] {
  background-color: transparent;
}
.button-round,
.button-line-round {
  border-radius: 50%;
}
.button-roundedEdges,
.button-line-roundedEdges {
  border-radius: 5px;
}
div[class|="wrapper"] {
  border: 2px solid #fff;
  margin-right: 8px;
  box-shadow: 0 2px 8px 2px rgba(151, 154, 194, 0.15);
  transition: all ease 0.3s;
}
div[class|="wrapper"]:hover {
  box-shadow: 0 2px 8px 2px rgba(151, 154, 194, 0.25);
}
.roundedEdges {
  border-radius: 5px;
}
.round {
  border-radius: 50%;
}
.line {
  border: 2px solid #24dac4;
}
.btn-upload {
  border: 2px solid #e1e3fd;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: #fafafe;
  color: #4a59f5;
  line-height: 1;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 2px 8px 2px rgba(151, 154, 194, 0.15);
  transition: all ease 0.3s;
}
.btn-upload > i {
  margin-right: 5px;
  font-weight: 600;
}
.btn-upload:hover {
  background-color: #fff;
  box-shadow: 0 2px 8px 2px rgba(151, 154, 194, 0.25);
}
.upload {
  width: 100%;
  margin-top: 10px;
}
</style>
