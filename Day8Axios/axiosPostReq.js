const axios=require('axios');
const newPost={ title: 'Learning Axios', body: 'Axios makes HTTP requests easy!', userId: 1 };

axios.post('https://jsonplaceholder.typicode.com/posts',
newPost)
  .then(response=>console.log('Post created',response.data))
  .catch(error=>console.log('Error:',error.msg));