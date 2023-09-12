import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3  bg-[#1111110C] ml-4 p-8 mt-4">
            <h3 className='text-3xl font-bold'>Bookmarked Blogs:{bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array.isRequired
}

export default Bookmarks;