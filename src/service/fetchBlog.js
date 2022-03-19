import { ref } from 'vue';

const fetchBlog = (blogId) => {
  const blog = ref(
    {
      title: '',
      post:  '',
    }
  );
  const error = ref(null);

  const load = async () => {
    try {
      const res = await fetch(`http://localhost:3000/blogs/${blogId}`);
      const data = await res.json();
      blog.value = data;
    } catch(e) {
      error.value = e.message;
    }
  };

  return {
    blog,
    error,
    load,
  }
};

export default fetchBlog;
