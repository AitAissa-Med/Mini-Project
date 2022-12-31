const express=require("express")
const {getPosts,getPost,addPost,updatePost,editPost,deletePost }=require("../controllers/postsController")

const router=express.Router();

// les routes post

// GET /posts - get a list of all posts
router.get('/', getPosts);

// GET /posts/:id - get a specific post by id
router.get('/:id', getPost);

// POST /posts - create a new post
router.post('/', addPost);

// GET /posts/edit/:id - get the form for editing a post
router.get('/edit/:id', editPost);

// POST /posts/update - update a post
router.post('/update', updatePost);

// POST /posts/delete - delete a post
router.post('/delete', deletePost);

module.exports=router