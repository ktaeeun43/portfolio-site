import "./topbar.css"

export default function TopBar() {
  return (
    <div className='top'>
        <div className="topLeft">
        <i class="topIcon fa-brands fa-instagram"></i>
        <i class="topIcon fa-solid fa-blog"></i>
        <i class="topIcon fa-brands fa-github"></i>
        <i class="topIcon fa-regular fa-file"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>

            </ul>
            </div>
        <div className="topRight">
            <img 
            className="topImg"
            src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4c35666c-7aa7-4bd9-9700-cb858a3afcde%2FKakaoTalk_20220105_201459281.jpg?id=d06e5deb-4230-4fc9-aa09-af5b572bee62&table=block&spaceId=ecfac3d5-2e4f-41b7-bf75-67bfc467a88b&width=1880&userId=96ff7cdb-c4a2-4162-926f-840fe4b00ae0&cache=v2" alt="" />
            <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
