<template>
  <div>
    <comB></comB>
  </div>
</template>

<script>
import comB from "./ComB";
export default {
  name: "A",
  provide: {
    for: "Parent Data provide",
    Parent: this
  },
  mounted() {
    console.log(this); // eslint-disable-line
  },
  components: {
    comB
  }
};
</script>
