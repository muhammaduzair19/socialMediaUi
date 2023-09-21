import './CloseFriend.css'


function CloseFriend({user}) {
    return (
        <li className='sidebarFriendListItem' >
            <img src={user.profilePicture} alt="" className='sidebarFriendImage' />
            <span className="sidebarFriendName">{user.userName}</span>
        </li>
    )
}

export default CloseFriend;