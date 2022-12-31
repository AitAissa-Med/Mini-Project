const pug = require('pug');
const Post=require("../models/postModel")

async function getPosts(req,res){
   //Recupérer tous les posts dans myBlogdb et envoyer index.pug au client
   const posts = await Post.find();
   res.render('index', { posts: posts });
}

async function getPost(req,res){
    //Recupérer un post definie par son _id dans myBlogdb et envoyer post.pug au client
    const post = await Post.findById(req.params.id);
    res.render('post', { post: post });
}

async function addPost(req,res){
   //Créer un nouveau post dans myBlogdb et rediriger le client vers /
   const post = await Post.create(req.body);
   res.redirect('/');
}

async function editPost(req,res){
    //Recupérer un post definie par son _id et renvoyer au client editPost.pug avec les donnée de ce post
    const post = await Post.findById(req.params.id);
    res.render('editPost', { post: post });
}
async function updatePost(req,res){
    //metre à jour un post et rediriger le client vers ce post
    await Post.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/posts/${req.params.id}`);
}

async function deletePost(req,res){
    //Suprimer un post et rediriger le client vers /
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/');
}

module.exports={getPosts,getPost,addPost,updatePost,editPost,deletePost}