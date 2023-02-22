import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

export default function Settings() {
  return (
    <>
      <div className="settings">
        <div className="settingWrapper">
          <div className="settingTitle">
            <div className="settingUpdateTitle">Update Your Account</div>
            <div className="settingDeleteTitle">Delete Account</div>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHF-r7E60akrf6yCDPYTA_PdPYhJnFUaWaRg&usqp=CAU"
                alt=""
              />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-regular fa-circle-user"></i>
              </label>
              <input type="file" id="fileInput" style={{ display: "none" }} />
            </div>
            <label>Username</label>
            <input type="text" placeholder="이름을 입력해주세요." />
            <label>Email</label>
            <input type="email" placeholder="이메일을 입력해주세요." />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
          </form>
        </div>
        <Sidebar />
      </div>
      ;
    </>
  );
}
