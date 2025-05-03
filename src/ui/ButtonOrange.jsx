
export default function ButtonOrange({ icon, text, onClick }) {
    return (
        <button className="btn_orange" onClick={onClick}>
            <img src={icon} alt="" />
            {text}
        </button>
    )
}
