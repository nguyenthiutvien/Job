import React from 'react';
import '../Css/BlogPost.css';

const BlogPost = ({ post }) => {
    const { title, content, image, avatar } = post;

    return (
        <div className="blog-post">
            <div className="blog-post-header">
                {avatar && <img className="blog-post-avatar" src={avatar} alt="Avatar" />}
                <h2 className="blog-post-title">{title}</h2>
            </div>
            {image && <img className="blog-post-image" src={image} alt="Blog post" />}
            <p className="blog-post-content">{content}</p>
            <div>
                <input type="text" placeholder="Your Comment" />
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <button className='submit' type="submit">Submit </button>
            </div>

        
        </div>
    );
};

export default BlogPost;
