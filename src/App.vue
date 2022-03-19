<template>
  <nav class="nav">
    <div class="logo">
      Hybridx
    </div>
    <div class="nav-links">
      <router-link to="/">Home</router-link> 
      <router-link :to="{ name: 'CreateBlog' }">Add Blog</router-link> 
      <router-link :to="{ name: 'Blogs' }">Blogs</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style lang="scss">
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Red Hat Text';
  }
  nav {
    display: flex;
    justify-content: space-around;
    .logo {
      font-size: 2rem;
      font-weight: bold;
      color: #EE0000;
      padding: 2rem;
    }
    .nav-links {
      padding: 2rem;
      a {
        padding: 1rem;
        font-weight: 500;
        color: #000;
        text-decoration: none;
        &.router-link-exact-active {
          background: #EE0000;
          color: #ffffff;
          padding: 0.5rem;
          border-radius: 5px;
        }
      }
    }
  }
</style>

<script>
export default {
  name: 'App',
  components: {
  },
}
</script>