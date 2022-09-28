const validateBlogData = (blogPost) => {

if (blogPost.title === undefined || typeof (blogPost.title) !== "string" || blogPost.title.length > 30){
    return{
        isValid: false,
        message: "Title is required and must be a string and less than 30 characters"
    }
}

if (blogPost.text === undefined || typeof(blogPost.text) !== "string"){
    return{
        isValid: false,
            message: 'Text is required and must be a string'
    }
}

if(blogPost.author === undefined || typeof (blogPost.author) !== "string"){
    return {
        isValid: false,
        message: 'Author is required and must be a string'
    }
}

// if(blogPost.email === undefined || typeof (blogData.email) !== "string") || blogdata.email.includes("@") === false) {
// return {
//     isValid: false,
//     message: "Email is undefined, needs to be a string and needs to have an @ in it"
// }
// }

return{ isValid: true}

}

module.exports = {validateBlogData}