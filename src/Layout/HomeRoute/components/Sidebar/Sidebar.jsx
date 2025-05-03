import LogoPhoto from '../../../../assets/icons/login_icon.svg';
import Icon1 from './../../../../assets/icons/Sidebar/admin.svg'
import Icon2 from './../../../../assets/icons/Sidebar/settings.svg'
import Icon3 from './../../../../assets/icons/Sidebar/contacts.svg'
import Icon4 from './../../../../assets/icons/Sidebar/delivery.svg'
import Icon5 from './../../../../assets/icons/Sidebar/order.svg'
import SidebarItem from './SidebarItem';

export default function Sidebar() {
  return (
    <nav className='sidebar'>
      <img src={LogoPhoto} alt="" />
      <p className='sidebar_menu'>MENU</p>
      <ul className='sidebar_list'>
        <SidebarItem to="/" Icon={Icon1} text={"Администраторы"} />
        <SidebarItem to="/products" Icon={Icon2} text={"Продукты"} />
        <SidebarItem to="/clients" Icon={Icon3} text={"Клиенты"} />
        <SidebarItem to="/couriers" Icon={Icon4} text={"Курьеры"} />
        <SidebarItem to="/orders" Icon={Icon5} text={"Заказы"} />
      </ul>
    </nav>
  )
}