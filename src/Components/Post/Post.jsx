import { MoreVert } from '@mui/icons-material';
import { Users } from '../../dummyData.js';
import './Post.css'
import { useState } from 'react';

function Post({ post }) {
    console.log(post);
    const [react, setReact] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const addLikeHandler = () => {
        setReact(isLiked ? react - 1 : react + 1)
        setIsLiked(! isLiked)

    }



    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((u) => u.id == post.userId)[0].profilePicture} className='postProfileImage' />
                        <span className="postUsername">{Users.filter((u) => u.id == post.userId)[0].userName}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>

                <div className="postCenter">
                    <div className="postText">{post?.description}</div>
                    <img src={post?.photo} className='postImage' />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" onClick={addLikeHandler} className='postReaction' />

                        <img src="/assets/heart.png" onClick={addLikeHandler} className='postReaction' />

                        <span className="postReactionCounter"> {react} people reacted </span>
                    </div>
                    <div className="postBottomRight">
                        <div className="postCommentText">{post.comment} comment</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Post;