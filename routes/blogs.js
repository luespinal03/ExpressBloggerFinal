const { uuid } = require('uuidv4');
var express = require('express');
var router = express.Router();

const {db} = require("../mongo")



// GET ONE EXAMPLE
try {
    router.get('/get-one-example', async function(req, res, next) {
        const blogPost = await db().collection("BlogsDB").findOne({
            id: {
                $exists: true
                }
            })
            res.json({
                success: true,
                post: blogPost
            })
        });
} catch (err) {
    console.log(err.name)
				res.json({
					success: false,
					error: err.toString()
				})
}


// GET ONE ID

router.get('/get-one/:id', async function(req, res, next) {
try {
        const blogId = req.params.id
        const blogPost = await db().collection("BlogsDB").findOne({
            id: blogId
        })
        res.json({
            success: true,
            post: blogPost
        })
            
} catch (err) {
    console.log(err.name)
				res.json({
					success: false,
					error: err.toString()
				})
}
});
	module.exports = router;



    // POST One

    router.post('/create-one', async function(req, res, next){
        try {
        // This needs to be here because we are adding values through the body on Postman
        const title = req.body.title
        const text = req.body.text
        const author = req.body.author
        const email = req.body.email
        const categories = req.body.categories
        const starRating = req.body.starRating
        const id = uuid()
         
 // This is the object thats being created
        const blogData = {
         title,
         text,
         author,
         email,
         categories,
         starRating,
         id: id,
         createdAt: new Date(),
         lastModified: new Date()
        }
        } 
        catch (err) {
            console.log(err.name)
                        res.json({
                            success: false,
                            error: err.toString()
                        })
        }


    //    Blog post is inserting 'blogData' that has to be found from on top into the data base collection
       const blogPost = await db().collection("BlogsDB").insert(blogData)
       res.json({
        success: true,
        post: blogPost
    })
    })





    // PUT one 
    router.put('/update-one/:id', async function(req, res, next){
        const starRating = req.body.starRating
        const lastModified: new Date()
    
        const originalBlogIndex = 








    })
