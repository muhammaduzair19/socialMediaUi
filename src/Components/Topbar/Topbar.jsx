import { Chat, Person, Notifications } from "@mui/icons-material";
import "./Topbar.css"
import SearchIcon from '@mui/icons-material/Search';


function Topbar() {
    return (
        <>
            <div className="topbarContainer">
                <div id="leftTopbar">
                    <span className="logo">
                        SocialMediaApp
                    </span>
                </div>


                <div id="centerTopbar">
                    <div className="searchBar">
                        <SearchIcon className="searchIcon" />
                        <input type="text" placeholder="Search here" />
                    </div>
                </div>



                <div id="rightTopbar">
                    <div className="topbarLinks">
                        <div className="topbarlinkitem">Hompage</div>
                        <div className="topbarlinkitem">Timeline</div>
                    </div>
                    <div className="topbarIcons">
                        <div className="topbarIconItem">
                            <Person />
                            <div className="topbarIconBadge">1</div>
                        </div>
                        <div className="topbarIconItem">
                            <Chat />
                            <div className="topbarIconBadge">1</div>
                        </div>
                        <div className="topbarIconItem">
                            <Notifications />
                            <div className="topbarIconBadge">1</div>
                        </div>
                    </div>
                        <img src="/assets/Users/1.jpeg" alt="" className="topbarImage" />

                </div>
            </div>
        </>
    )
}

export default Topbar;