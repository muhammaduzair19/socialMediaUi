import './Online.css'

function Online({user}) {
    return (
        <li className="rightbarFriend">
            <div className="rightbarImageContainer">
                <img src={user.profilePicture} alt="" className="rightbarFriendImage" />
                <span className="rightbarOnlineBadge"></span>
            </div>
            <div className="rightbarFriendName">{user.userName}</div>
        </li>
    )
}

export default Online;