<template>
  <div class="backdrop">
    <div class="modal">
      <p>
        Modal Content
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isActive: false,
    }
  },
  watch: {
    show(val) {
      this.isActive = val;
    },
  },
  methods: {
    close() {
      this.isActive = false;
      this.$emit('close');
    },
  },
}
</script>

<style lang="scss" scoped>
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    width: 300px;
    height: 200px;
    border-radius: 5px;
    padding: 20px;
    box-sizing: border-box;
  }
</style>