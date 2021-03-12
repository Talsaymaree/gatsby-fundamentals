import React from "react"
import Blogpost from "../components/blog-post"

const SampleBlogPostPage = () => {
    const author ={
        firstName: "Talal",
        lastName: "Al-Saymaree"
    }
    return(
        <Blogpost 
        title="Gatsby Components 101"
        // author={{firstName: "Talal", lastName:"Al-Saymaree"}}
        // author={author}
        abstract={{__html: "Blog bost about <strong>gatsby</strong>"}}
        >
            <div>
                Types of Gatsby Components
                <ul>
                    <li>layout</li>
                    <li>Page</li>
                    <li>Template</li>
                    <li>non-page</li>
                </ul>
            </div>


        </Blogpost>
    )
}

export default SampleBlogPostPage