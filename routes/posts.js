const express=require('express')
const router=express.Router();

const Post=require('../model/Post')

router.get('/',async(req,res)=>{
    try {
        const posts=await Post.find();
        res.json(posts)
    } catch (error) {
        res.json({message:err});
    }
})

router.post('/',async(req,res)=>{
    const post= new Post({
        title:req.body.title,
        desc:req.body.desc, 
    });

   {/*  post.save()
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
       res.json({message:err})
    }); */}

    try{
        const savedPost=await post.save();
        res.json(savedPost);
    } catch (err){
        res.json({message:err});
    }


})

router.get('/:postId',async(req,res)=>{
    try {
        const post=await Post.findById(req.params.postId);
        res.json(post)
    } catch (err) {
        res.json({message:err});
    }
})

router.patch('/:postId',async(req,res)=>{
    try {
        const updatedpost=await Post.updateOne(
            {
              _id:req.params.postId},
              {$set:{
                title:req.body.title,
                desc:req.body.desc,
              },
            }
            )
        res.json(updatedpost)
    } catch (err) {
        res.json({message:err});
    }
})
router.delete('/:postId',async(req,res)=>{
    try {
        const removepost=await Post.remove({_id:req.params.postId})
        res.json(removepost)
    }
    catch (err) {
        res.json({message:err});
    }
})

            

module.exports=router