<template>
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <form class="create-blog" @submit.prevent="createBlog">
    <div class="form-group">
      <label for="title">Title</label>
      <input placeholder="Enter blog title" type="text" class="form-control" id="title" v-model="title" required>
    </div>
    <div class="form-group">
      <label for="post">Post</label>
      <textarea class="form-control" id="post" placeholder="Enter blog content" v-model="post" required></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Create</button>
  </form>
</template>

<script>
export default {
  name: 'CreateBlog',
  components: {
  },
  methods: {
    createBlog() {
      console.log('create blog');
      fetch(`${process.env.VUE_APP_JSON_SERVER}/blogs` , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: this.title,
          post: this.post,
        }),
      })
      .then(() => {
        this.$router.push({ name: 'Blogs'});
      });
    },
  },
  data() {
    return {
      title: '',
      post: '',
      tempTags: '',
      tags: [],
    }
  },
}
</script>

<style lang="scss" scoped>
  .create-blog {
    display: grid;
    place-items: center;
    .form-group {
      margin-bottom: 1rem;
      width: 40%;
    }
  }
</style>