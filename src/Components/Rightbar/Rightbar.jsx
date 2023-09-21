import './Rightbar.css'
import Online from '../Online/Online';
import { Users } from '../../dummyData.js';


function Rightbar({ profile }) {

    const HomeRightbar = () => {


        return (
            <>
                <div className="birthdayContainer">
                    <img src="assets/gift.png" alt="" className="birthdayIcon" />
                    <span className="birthdayText">
                        <b>Muhaimin Asif</b> and <b>5 other friend</b> have a birthday today.
                    </span>
                </div>
                <img src="assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="onlineFriend">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {
                        Users.map((u) => (
                            <Online key={u.id} user={u} />
                        ))
                    }
                </ul>
            </>
        )

    }

    const ProfileRightbar = () => {


        return (
            <>
                <h4 className="userInformation">
                    User Information
                </h4>
                <div className="rightbarUserInfo">
                    <div className="rightbarUserInfoItem">
                        <div className="rightbarUserInfoKey">Highschool</div>
                        <div className="rightbarUserInfoValue">Fedral Urdu University</div>
                    </div>
                    <div className="rightbarUserInfoItem">
                        <div className="rightbarUserInfoKey">Work</div>
                        <div className="rightbarUserInfoValue">Not yet workings</div>
                    </div>
                    <div className="rightbarUserInfoItem">
                        <div className="rightbarUserInfoKey">Lives in</div>
                        <div className="rightbarUserInfoValue">Karachi</div>
                    </div>
                    <div className="rightbarUserInfoItem">
                        <div className="rightbarUserInfoKey">From</div>
                        <div className="rightbarUserInfoValue">Karachi</div>
                    </div>
                    <div className="rightbarUserInfoItem">
                        <div className="rightbarUserInfoKey">Relationship</div>
                        <div className="rightbarUserInfoValue">Single</div>
                    </div>
                </div>
                <h4 className="userFriends">Friends</h4>
                <div className="rightbarUserFriends">
                    <div className="rightbarUserFriend">
                        <img src="/assets/users/5.jpeg" alt="" className="rightbarUserFriendImg" />
                        <span className="rightbarUserFriendName">Anas Khan</span>
                    </div>
                    <div className="rightbarUserFriend">
                        <img src="/assets/users/5.jpeg" alt="" className="rightbarUserFriendImg" />
                        <span className="rightbarUserFriendName">Anas Khan</span>
                    </div>
                    <div className="rightbarUserFriend">
                        <img src="/assets/users/5.jpeg" alt="" className="rightbarUserFriendImg" />
                        <span className="rightbarUserFriendName">Anas Khan</span>
                    </div>
                    <div className="rightbarUserFriend">
                        <img src="/assets/users/5.jpeg" alt="" className="rightbarUserFriendImg" />
                        <span className="rightbarUserFriendName">Anas Khan</span>
                    </div>
                    <div className="rightbarUserFriend">
                        <img src="/assets/users/5.jpeg" alt="" className="rightbarUserFriendImg" />
                        <span className="rightbarUserFriendName">Anas Khan</span>
                    </div>
                    <div className="rightbarUserFriend">
                        <img src="/assets/users/5.jpeg" alt="" className="rightbarUserFriendImg" />
                        <span className="rightbarUserFriendName">Anas Khan</span>
                    </div>
                </div>
                <img src="assets/ad.png" alt="" className="rightbarAd" />

            </>
        )

    }








    return (
        <div id='rightbar'>
            <div className="rightbarWrapper">

                {
                    profile ? <ProfileRightbar /> : <HomeRightbar />
                }
            </div>
        </div>
    );
}

export default Rightbar;