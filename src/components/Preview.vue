<template>
  <div class="preview">
    <div
      class="content"
      :class="device"
    >
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.indexDevice;
  },
  data() {
    return {
      device: "big"
    };
  },
  computed: {
    indexDevice() {
      if (this.$store.state.indexDevice) {
        return this.$store.state.indexDevice;
      } else {
        return 3;
      }
    }
  },
  watch: {
    indexDevice(value) {
      if (value == 1) {
        this.device = "small";
      } else if (value == 2) {
        this.device = "medium";
      } else {
        this.device = "big";
      }
    }
  }
};
</script>

<style scoped>
.preview {
  width: 100%;
  height: auto;
  display: grid;
}
.content {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 15px 46px rgba(151, 154, 194, 0.363);
  border-radius: 8px;
  transition: all 0.3s;
}
.preview .content.small {
  width: 411px;
}
.preview .content.medium {
  width: 768px;
}
.preview .content.big {
  width: 100%;
}
iframe {
  width: 100%;
  height: calc(100% - 4px);
  border: 0;
}
</style>
