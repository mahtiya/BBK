
export function ButtonOrange({ onClick, icon, text }) {
    return (
        <button className="btn_orange" onClick={onClick}>
            <img src={icon} alt="" />
            {text}
        </button>
    )
}

export function ButtonGray({ onClick, icon, text }) {
    return (
        <button className="btn_gray" onClick={onClick}>
            <img src={icon} alt="" />
            {text}
        </button>
    )
}
