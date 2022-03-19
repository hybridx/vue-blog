<template>
  <div class="home">
    <div class="container">
      <div class="robot-head">
        <div class="eye"></div>
        <div class="eye"></div>
      </div>
      <div class="robot-middle">
        <div class="arm-left"></div>
        <div class="torso"></div>
        <div class="arm-right"></div>
      </div>
      <div class="robot-legs">
        <div class="arm-left"></div>
        <div class="arm-right"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  methods: {
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.robot-head {
  background: black;
  height: 100px;
  width: 150px;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  transition: all 320ms ease-in-out;
}

.robot-head:hover {
  transform: scale(1.2);
}

.eye {
  background: white;
  height: 10px;
  width:10px;
  border-radius: 100%;
  margin-bottom: 1.5rem;
}

.torso {
  background: black;
  height: 160px;
  width: 150px;
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
}

.robot-middle {
  margin-top: 1rem;
  display: flex;
}

.arm-left, .arm-right {
  height: 80px;
  width: 25px;
  background: black;
  margin: 0 10px;
  border-radius: 20px;
  transition: all 320ms ease-in-out;
}

.arm-left:hover {
  transform: rotate(25deg);
}

.arm-right:hover {
  transform: rotate(-25deg);
}

.robot-legs {
  display: flex;
  margin-top: -1.5rem;
}
</style>
