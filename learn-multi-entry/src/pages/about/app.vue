<template>
  <div>
    <p class="red">{{ msg }}</p>
    <About></About>
  </div>
</template>

<script>
import About from '@/components/About.vue'
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'About',
    }
  },
  methods: {
    getName(a) {
      return a > 10 ? 'aaaaa' : a > 30 ? 'bccccc' : 'ddddc'
    },
  },
  components: {
    About,
  },
}
</script>
