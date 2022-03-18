<template>
  <div class="home">
    Hello
    <Blog />
    <Modal />
    <input type="text" ref="name">
    <button @click="handleClick">Click Me</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Blog from '@/components/Blog.vue'
import Modal from '@/components/Modal.vue'

export default {
  name: 'Home',
  components: {
    Blog,
    Modal,
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.style = 'padding: 2rem';
    }
  }
}
</script>
