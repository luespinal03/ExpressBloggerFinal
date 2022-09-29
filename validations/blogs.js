const validateBlogData = (blogPost) => {

    if (blogPost.title === undefined || typeof (blogPost.title) !== "string" || blogPost.title.length > 30) {
        return {
            isValid: false,
            message: "Title is required and must be a string and less than 30 characters"
        }
    }

    if (blogPost.text === undefined || typeof (blogPost.text) !== "string") {
        return {
            isValid: false,
            message: 'Text is required and must be a string'
        }
    }

    if (blogPost.author === undefined || typeof (blogPost.author) !== "string") {
        return {
            isValid: false,
            message: 'Author is required and must be a string'
        }
    }

    if (blogPost.email !== undefined) {
        if (typeof (blogPost.email) !== "string") {
            return {
                isValid: false,
                message: 'Email must be a string'
            }
        }
        if (blogPost.email.includes("@") === false) {
            return {
                isValid: false,
                message: 'Email must be formatted correctly'
            }
        }
    }

    if (blogPost.starRating !== undefined && blogPost.starRating < 1 || blogPost.starRating > 10) {
            return {
                isValid: false,
                message: 'starRating must be between 1 - 10'
            }
    }

    if (blogPost.categories === undefined) {
        return {
            isValid: false,
            message: 'categories must be defined'
        }
    }
    if (blogPost.categories.length < 1 || blogPost.categories.length > 10 ) {
        return {
            isValid: false,
            message: 'categories must be between 1 - 10'
        }
    }

    if (Array.isArray(blogPost.categories) === false) {
        return {
            isValid: false,
            message: 'categories must be in array form'
        }
    }


    return {
        isValid: true
    }

}

module.exports = {
    validateBlogData
}



// categories .length cant be less than 1 and has to be an array and has to be mandatory && everything has to be string