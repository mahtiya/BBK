import { Link } from 'react-router-dom';
import ProfilePhoto from './../../assets/images/profile_photo.png';
import useToken from "./../../Layout/Login/store/useToken"
export default function MenuProfile({ isOpen }) {
    const {removeToken} = useToken()
    const handleRemove = () => {
        removeToken()
    }
    return (
        <>
            <img className='menu_profile_avatar' src={ProfilePhoto} alt="" />
            <div>
                <p className='menu_profile_name'>Janibek Maxatov</p>
                <p className='menu_profile_role'>Admin</p>
                {isOpen && (
                    <ul className="menu_profile_modal">
                        <li><Link to={"/profile"}>Профиль</Link></li>
                        <li onClick={() => handleRemove()}>Выйти</li>
                    </ul>
                )}
            </div>
        </>
    )
}
