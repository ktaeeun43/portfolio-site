import "./sidebar.css"

export default function Sidebar() {
  return (
    <>
    <div className="sidebar">
        <div className="sidebarItem">
            
        <span className="sidebarTitle">
            ABOUT ME
        </span>
        <img src="https://i.stack.imgur.com/P0Re3.png?s=256&g=1" alt="" />
        <p>
            성장형 개발자👩‍💻
        </p>
    </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">
            CATEGORIES
        </span>
        <ul className="sidebarList">
            <li className="sidebarListItem">
                Life
            </li>
            <li className="sidebarListItem">
                Music
            </li>
            <li className="sidebarListItem">
                Tech
            </li>
            <li className="sidebarListItem">
                CAT
            </li>
        </ul>
    </div>
    <div className="sidebarItem">
    <span className="sidebarTitle">
            FOLLOW ME
        </span>
        <div className="sidebarSocial">
        <i class="sidebarIcon fa-brands fa-instagram"></i>
        <i class="sidebarIcon fa-solid fa-blog"></i>
        <i class="sidebarIcon fa-brands fa-github"></i>
        <i class="sidebarIcon fa-regular fa-file"></i>
        </div>
    </div>
    </div>
    </>
  )
}
