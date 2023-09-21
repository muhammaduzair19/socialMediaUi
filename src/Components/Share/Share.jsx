import './Share.css'
import { Label, PermMedia, AddLocation, Room, EmojiEmotions } from '@mui/icons-material'


function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="assets/Users/1.jpeg" className='shareProfileImage' />
                    <input type="text" placeholder="What's in your mind" className='shareInput' />
                </div>
                <hr className='shareHr' />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor='tomato' className='shareOptionIcon' />
                            <div className="shareOptionText">Photos or Videos</div>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor='blue' className='shareOptionIcon' />
                            <div className="shareOptionText">Tag</div>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor='green' className='shareOptionIcon' />
                            <div className="shareOptionText">Location</div>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor='goldenrod' className='shareOptionIcon' />
                            <div className="shareOptionText">Feeling/Activity</div>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share;