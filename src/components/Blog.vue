<template>
  <div class="blog-actions">
    <span>Blog id: {{ id }}</span>
    <div class="actions">
      <button v-if="!doEdit" @click="edit">Edit</button>
      <button @click="deleteBlog">Delete</button>
  </div>
  </div>
  <div class="blog">
    <h1 v-if="!doEdit">
      {{ blog.title }}
    </h1>
    <input v-if="doEdit" type="text" v-model="blog.title">

    <p v-if="!doEdit" @dblclick.self="highlight" v-html=" blog.post "></p>
    <textarea v-if="doEdit" v-model="blog.post"></textarea>
    <div class="blog-edit-actions">
      <button class="btn green" v-if="doEdit" @click="saveBlog">Save</button>
      <button class="btn secondary" v-if="doEdit" @click="doEdit = !doEdit">Cancel</button>
    </div>

  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import fetchBlog from '@/service/fetchBlog';

export default {
  name: 'Blog',
  setup() {
    const id = useRoute().params.id;
    const { blog, error, load } = fetchBlog(id);
    load();

    const highlight = () => {
      const highlightedText = window.getSelection().toString();
      blog.value.post= blog.value.post.replace(highlightedText, `<mark>${highlightedText}</mark>`);
      console.log(JSON.stringify(highlightedText));
      fetch('http://localhost:3000/highlights/', {
        method: 'POST',
        body: JSON.stringify(highlightedText)
      })
    }
    return {
      blog,
      error,
      highlight
    }
  },
  data() {
    return {
      id: this.$route.params.id,
      doEdit: false,
    }
  },
  methods: {
    deleteBlog() {
      fetch(`http://localhost:3000/blogs/${this.id}`, {
        method: 'DELETE',
      })
      .then(() => {
        this.$router.push({ name: 'Blogs' });
      });
    },
    edit() {
      this.doEdit = true;
    },
    saveBlog() {
      fetch(`http://localhost:3000/blogs/${this.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.blog)
      })
      .then(() => {
        this.doEdit = false;
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  @mixin btn {
    margin: 0 1rem;
    padding: .5rem 1rem;
    border: none;
    background: none;
    border-radius: 5px;
  }
  input {
    border: 1px solid #ccc;
    padding: .5rem;
    border-radius: 5px;
    font-size: 2rem;
    width: 40%;
    margin-top: 2rem;
  }
  textarea {
    border: 1px solid #ccc;
    padding: .5rem;
    border-radius: 5px;
    font-size: 1rem;
    width: 40%;
    margin-top: 2rem;
  }
  .blog-edit-actions {
    margin-top: 2rem;
  }
  .btn {
    @include btn;
    &.green {
      background: forestgreen;
      color: white;
      &:hover {
        background: green;
      }
    }
    &.secondary {
      background: #ccc;
      color: white;
      &:hover {
        background: #999;
      }
    }
  }
  .blog {
    display: grid;
    place-items: center;
  }
  .blog-actions {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .actions {
      button {
        @include btn;
        &:first-of-type {
          background: #007bff;
          color: #fff;
          font-size: 1rem;
          &:hover {
            background: #0069d9;
            color: #fff;
          }
        }
        &:last-of-type {
          background: #ee0000;
          color: #fff;
          font-size: 1rem;
          &:hover {
            background: #c82333;
            color: #fff;
          }
        }
      }
    }
  }
</style>
