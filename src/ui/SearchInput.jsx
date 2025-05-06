import { CiSearch } from "react-icons/ci";
export default function SearchInput() {
    return (
        <div className='search_input_icon'>
            <CiSearch className="search_icon" />
            <input className='search_input' type="text" placeholder="Поиск" />
        </div>
    )
}
