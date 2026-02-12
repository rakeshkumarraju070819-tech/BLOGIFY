const express = require('express');
const { getAllPosts, getPostById } = require('./src/controllers/posts.controller');

const app = express();
app.use(express.json());

app.get('/api/v1/posts', getAllPosts);
app.get('/api/v1/posts/:id', getPostById);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Blogify API listening on port ${PORT}`);
});

