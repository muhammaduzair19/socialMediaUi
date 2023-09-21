import Post from '../Post/Post';
import Share from '../Share/Share';
import './Feed.css'
import { Posts } from '../../dummyData.js';


function Feed() {
    return (
        <div id='feed'>
            <div className="feedWrapper">
                <Share />
                {
                    Posts.map((p) => (
                        <Post key={p.id} post={p} />
                    ))
                }

            </div>
        </div>
    );
}

export default Feed;