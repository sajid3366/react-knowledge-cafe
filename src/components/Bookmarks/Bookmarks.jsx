import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className='md:w-1/3 ml-4 mt-4'>
            <div className='px-12 py-5 mb-4 rounded-lg bg-[#3C47EC19] border-solid border-2 border-[#6047EC]'>
                <h3 className='text-2xl font-bold text-[#6047EC]'>Spent time on read : {readingTime} min</h3>
            </div>
            <div className="bg-[#1111110C] p-8  rounded-lg">
                <h3 className='text-3xl font-bold'>Bookmarked Blogs:{bookmarks.length}</h3>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }

            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;