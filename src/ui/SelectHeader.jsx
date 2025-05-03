import { RiArrowDownWideLine } from "react-icons/ri";
export default function SelectHeader({ children, onClick }) {
    return (
        <div className='select_header' onClick={onClick}>
            {children}
            <RiArrowDownWideLine className="select_header_arrow" />
        </div>
    )
}
