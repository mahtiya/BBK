import { Header } from "../../components";
import Search from "../../components/Search/Search";

export default function index() {
    return (
        <>
            <Header title={"Администраторы"} />
            <Search>
                <input type="text" />
                <button>Filter</button>
            </Search>
        </>
    )
}
