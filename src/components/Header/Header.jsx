import { useEffect, useRef, useState } from "react";
import SelectHeader from "../../ui/SelectHeader";
import Language from "../Language/Language";
import MenuProfile from "../MenuProfile/MenuProfile";

export function Header({ title }) {

    const [activeModal, setActiveModal] = useState(null)

    const elSelects = useRef(null)

    const toggleModal = (modalName) => {
        setActiveModal(prev => (prev === modalName ? null : modalName));
    }

    useEffect(() => {   
        const handleClickOutside = (event) => {
            if (elSelects.current && !elSelects.current.contains(event.target)) {
                setActiveModal(null)
            }
        };
        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])
    return (
        <header className="header">
            <div className="container">
                <div className="header_wrapper">
                    <h1 className="header_title">{title}</h1>
                    <div ref={elSelects} className="header_our_selects">
                        <SelectHeader onClick={() => toggleModal("language")}>
                            <Language isOpen={activeModal === 'language'} />
                        </SelectHeader>
                        <SelectHeader onClick={() => toggleModal("menu")}>
                            <MenuProfile isOpen={activeModal === 'menu'} />
                        </SelectHeader>
                    </div>
                </div>
            </div>
        </header>
    )
}
