import { Users } from '../../dummyData';
import CloseFriend from '../CloseFriend/CloseFriend';
import './Sidebar.css'
import { Bookmark, BookmarkOutlined, Chat, Event, Group, Groups, HelpOutline, PlayCircleFilledOutlined, RssFeed, SchoolOutlined, WorkOutline } from "@mui/icons-material";


function Sidebar() {
    return (
        <div id='sidebar'>
            <div className="siderbarWrapper" >

                <ul className="sidebarList">

                    <li className="sidebarListItem">
                        <RssFeed className='siderbarIcon' />
                        <span className="sidebarListItemText">Feed</span>
                    </li>

                    <li className="sidebarListItem">
                        <Chat className='siderbarIcon' />
                        <span className="sidebarListItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className='siderbarIcon' />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Groups className='siderbarIcon' />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className='siderbarIcon' />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className='siderbarIcon' />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className='siderbarIcon' />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <SchoolOutlined className='siderbarIcon' />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                    <li className="sidebarListItem">
                        <BookmarkOutlined className='siderbarIcon' />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                </ul>
                <button className="showmoreBtn">
                    Show More
                </button>
                <hr className='sidebarHr' />
                <ul className="sidebarFriendList">
                    {
                        Users.map((u) => (
                            <CloseFriend key={u.id} user={u} />
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;