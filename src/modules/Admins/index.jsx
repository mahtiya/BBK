import { Header } from "../../components";
import Search from "../../components/Search/Search";
import { ButtonGray } from "../../ui/Button";
import SearchInput from "../../ui/SearchInput";
import FilterIcon from "./../../assets/icons/filter.svg";

export default function index() {
    return (
        <>
            <Header title={"Администраторы"} />
            <Search>
                <SearchInput />
                <ButtonGray text="Фильтр" icon={FilterIcon} />
            </Search>
        </>
    )
}
