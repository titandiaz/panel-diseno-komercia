<template>
  <div class="device">
    <img
      :class="index == 1 ? 'opacity' : ''"
      @click="selectDevice(1)"
      src="../assets/Icons/Phone2x.png"
      alt="Phone"
    >
    <img
      :class="index == 2 ? 'opacity' : ''"
      @click="selectDevice(2)"
      src="../assets/Icons/Table2x.png"
      alt="Table"
    >
    <img
      :class="index == 3 ? 'opacity' : ''"
      @click="selectDevice(3)"
      src="../assets/Icons/Computer2x.png"
      alt="Computer"
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 3
    };
  },
  methods: {
    selectDevice(n) {
      this.index = n;
      this.$store.commit("SET_INDEXDEVICE", n);
    }
  }
};
</script>

<style scoped>
.device > img {
  height: 40px;
  margin: 20px 30px 0;
  cursor: pointer;
  opacity: 0.5;
  transition: all ease 0.3s;
}
.device {
  display: flex;
  justify-content: flex-end;
}
.opacity {
  opacity: 1 !important;
}
</style>
