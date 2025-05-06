import ProfileImg from './../assets/images/profile_photo.png'

export default function FotoUi({ text }) {
    return (
        <div className='foto_ui_wrapper'>
            <img className="" src={ProfileImg} alt="" />
            <h4>{text}</h4>
        </div>
    )
}
