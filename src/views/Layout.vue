<template>
  <div
    id="layout"
    class="layout"
  >
    <Sidebar />
    <Device />
    <Settings />
    <Preview />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Settings from "@/components/Settings-box";
import Preview from "@/components/Preview";
import Device from "@/components/Device-tabs";
export default {
  components: {
    Sidebar,
    Settings,
    Preview,
    Device
  }
};
</script>

<style scoped>
.layout {
  background-color: #f6f9fc;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 80px 345px 1fr 0px;
  grid-template-rows: 40px auto 0px;
  grid-gap: 40px;
}
.layout > .sidebar {
  grid-row-start: 1;
  grid-row-end: 4;
}
.layout > .settings-box {
  grid-row-start: 2;
  grid-row-end: 3;
}
.layout > .preview {
  grid-row-start: 2;
  grid-row-end: 4;
  transition: all ease 0.3s;
}
.layout > .device {
  grid-column-start: 3;
  grid-column-end: 4;
}
</style>
