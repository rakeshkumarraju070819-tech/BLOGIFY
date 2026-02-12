// src/controllers/posts.controller.js
// Minimal posts controller implementing standardized JSON responses

const getAllPosts = (req, res) => {
  // In a real app you'd fetch posts from DB. Here we return a placeholder.
  const posts = [
    { id: '1', title: 'First post', body: 'Hello world' },
    { id: '2', title: 'Second post', body: 'Another post' }
  ];

  return res.status(200).json({
    success: true,
    data: { posts }
  });
};

const getPostById = (req, res) => {
  const { id } = req.params;

  // Placeholder lookup
  const post = { id, title: `Post ${id}`, body: `Content for post ${id}` };

  return res.status(200).json({
    success: true,
    data: { post }
  });
};

module.exports = { getAllPosts, getPostById };
