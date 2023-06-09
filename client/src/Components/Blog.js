import React, { useState } from 'react';
import BlogPost from './Blogpost';
import '../Css/Blog.css';

const Blog = () => {
    const blogPostsData = [
        {
            title: 'Nguyễn Thị Út Viên',
            content: 'Hướng dẫn tìm việc làm lập trình viên...',
            image: 'blog3.jpg',
            avatar: 'avatar1.jpg',
        },
        {
            title: 'Phan Thanh Lực',
            content: 'Một hồ sơ cá nhân chuyên nghiệp...',
            image: 'blog2.jpg',
            avatar: 'avatar2.jpg',
        },
        // Add more blog post data here
    ];

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [submittedComments, setSubmittedComments] = useState([]);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmitComment = (e, postIndex) => {
        e.preventDefault();

        if (name && email && comment) {
            const newComment = {
                name,
                email,
                comment,
            };

            const updatedComments = [...submittedComments];
            updatedComments[postIndex] = updatedComments[postIndex]
                ? [...updatedComments[postIndex], newComment]
                : [newComment];

            setSubmittedComments(updatedComments);

            // Reset the form fields
            setName('');
            setEmail('');
            setComment('');
        }
    };

    return (
        <div className="blog">
            <h1 className="blog-title">Blog tìm việc làm</h1>
            <div className="blog-posts">
                {blogPostsData.map((post, index) => (
                    <div key={index} className="blog-post-container">
                        <BlogPost post={post} />
                        
                    </div>

                ))}
                <div className="comment-section">
                    <h3>Comments</h3>
                    <form
                        className="comment-form"
                        onSubmit={(e) => handleSubmitComment(e)}

                    >   <textarea
                        placeholder="Your Comment"
                        value={comment}
                        onChange={handleCommentChange}
                        required
                    ></textarea>
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={handleNameChange}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />

                        <button className='submit' type="submit">Submit </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Blog;
