import { NavLink } from "react-router-dom";

export default function SidebarItem({ Icon, text, to }) {
    return (
        <li className='sidebar_item'>
            <NavLink to={to}>
                <img src={Icon} alt="" />
                <p className='sidebar_text .active'>{text}</p>
            </NavLink>
        </li>
    )
}
