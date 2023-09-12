import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmarks}) => {
    const {title,cover,author_img,author,posted_date,reading_time,hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full' src={cover} alt={`The cover of the title is ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center mt-8'>
                    <img className='h-14' src={author_img} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() =>handleAddToBookmarks(blog)} className='ml-4'><FaRegBookmark></FaRegBookmark></button>

                </div>
            </div>
            <h2 className="text-4xl font-bold mt-4 mb-4">{title}</h2>
            <p className='mb-5'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired
}

export default Blog;