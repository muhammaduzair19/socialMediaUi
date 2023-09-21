import Topbar from "../../Components/Topbar/Topbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";
import Rightbar from "../../Components/Rightbar/Rightbar";
import './Profile.css'



function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileTopRight">
                        <div className="profileCover">
                            <img src="/assets/post/9.jpeg" alt="" className="coverPhoto" />
                            <img src="/assets/users/1.jpeg" alt="" className="profilePicture" />
                        </div>
                        <div className="profileInfo">
                            <h3 className="profileInfoName">
                                Uzair
                            </h3>
                            <span className="profileInfoDescription">
                                Hum Aik Muaasharay Mein Rehte Hain
                            </span>
                        </div>
                    </div>
                    <div className="profileBottomRight">
                        <Feed />
                        <Rightbar profile />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Profile;