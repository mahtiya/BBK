import { ButtonOrange } from "../../ui/Button";
import AddIcons from "../../assets/icons/add_icons.svg"
export default function Search({ children }) {
    return (
        <section>
            <div className="container">
                <div className="search">
                    <div className="search_input_btn">
                        {children}
                    </div>
                    <ButtonOrange icon={AddIcons} text="Добавить" />
                </div>
            </div>
        </section>
    )
}
