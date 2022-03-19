<template>
  <div class="blogs">
    <header>
      <h1>Blogs</h1>
      <div class="search">
        <label for="search"></label>
        <input type="text" name="search" v-model="search" placeholder="Search">
      </div>
    </header>
    <ul class="list-group">
      <li class="list-group-item" v-for="blog in filteredBlogs" :key="blog">
        <router-link :to="{ name: 'Blog', params: { id: blog.id } }">
          <div class="blog-title">
            {{ blog.title }}
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'Blogs',
  setup() {
    const search = ref('');
    const blogs = ref([]);
    fetch("http://localhost:3000/blogs")
    .then(res => res.json())
    .then(data => {
      blogs.value = data;
    })
    const filteredBlogs = computed(() => {
      return blogs.value.filter(blog => {
        return blog.post.toLowerCase().includes(search.value.toLowerCase()) || blog.title.toLowerCase().includes(search.value.toLowerCase());
      });
    });
    return {
      search,
      blogs,
      filteredBlogs
    }
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
 header {
   display: flex;
   justify-content: space-around;
   align-items: center;
 }
 .blogs {
   & > h1 {
     display: grid;
     place-content: center;
   }
   ul {
      display: grid;
      place-content: center;
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        margin: 1.5rem;
        padding: 1rem 2rem;
        border-radius: 5px;
        &:hover {
          box-shadow: 1px 3px 5px #c9c9c9;
        }
        a {
          text-decoration: none;
          color: rgb(51, 51, 51);
          .blog-title {
            font-size: 1.5rem;
            font-weight: 500;
          }
          .blog-post {
            font-size: 1rem;
            font-weight: 300;
          }
        }
      }
   }
 }
 .search {
    display: grid;
    place-items: center;
    label {
      font-size: 1rem;
      font-weight: 300;
    }
    input {
      font-size: 1rem;
      font-weight: 300;
      padding: 0.5rem;
      border-radius: 5px;
      border: 1px solid #ccc;
      widows: 40%;
    }
 }
 .highlight {
   background: yellow;
 }
</style>