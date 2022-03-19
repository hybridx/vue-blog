import { ref } from 'vue';

const addHighlightedText = (highlightedText, id) => {
  const error = ref(null);
  try {
    const load = async () => {
      const res = await fetch('http://localhost:3000/highlights/');
      const data = await res.json();
      const filterData = data.filter(text => ( text.highlightedText.toLowerCase().includes(highlightedText.toLowerCase())) );
      if (data.length > 0 && filterData.length === 0) {
          fetch('http://localhost:3000/highlights/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              blogId: id,
              highlightedText
            }),
          });
        }
    }
    load();
  } catch(e) {
    error.value = e.message;
    console.error(e);
  }
  return {
    error,
  }
};

export default addHighlightedText;
