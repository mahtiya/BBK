import LogoPhoto from './../../assets/images/login_page_photo.png'
import LogoIcon from './../../assets/icons/login_icon.svg'
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { useRef, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import useToken from './store/useToken';
export default function Login() {
    const { setToken } = useToken()
    const elPhoneNumber = useRef()
    const elPassword = useRef()
    const [isVisible, setisVisible] = useState(false)
    const [isError, setIsError] = useState(false)

    const clickVisible = () => {
        setisVisible(!isVisible)
    }

    console.log(setisVisible);


    const handleSubmitForm = (evt) => {
        evt.preventDefault()
        axios.post("https://test.api.bbk.kg/sign-in", {
            phone_number: elPhoneNumber.current.value,
            password: elPassword.current.value,

        }).then((data) => {
            setToken(data.data.data.token);
            toast.success("Вы успешно зашли")

        }).catch(() => {
            setIsError(true)
            setTimeout(() => {
                setIsError(false)
                elPhoneNumber.current.value = ""
                elPassword.current.value = ""
            }, 3000)
        }
        )
    }





    return (
        <section className='login'>
            <img className='login_img' src={LogoPhoto} alt="" />

            <div className='login_bg'>
                <img src={LogoIcon} alt="" />
                <h1 className='logo_title'>Войдите в свою учетную запись</h1>

                <form onSubmit={handleSubmitForm} className='login_form'>
                    <div className="login_inputs">
                        <div className="login_label_input">
                            <label className='login_label'>Номер телефона</label>
                            <input maxLength={9} onInput={(e) => {
                                e.target.value = e.target.value.replace(/\D/g, "").slice(0, 9)
                            }} ref={elPhoneNumber} className='login_input' type="tel" />
                        </div>
                        <div className="login_label_input">
                            <label className='login_label'>Пароль</label>
                            <div className="login_input_eyes">
                                <input ref={elPassword} className={`login_input  ${!isError || "login_input_err"}`} type={isVisible ? "text" : "password"} />
                                {isVisible ? <IoEyeSharp onClick={clickVisible} className={`login_eyes ${!isError || "login_eyes_err"}`} /> :
                                    <IoEyeOffSharp onClick={clickVisible} className={`login_eyes ${!isError || "login_eyes_err"}`} />
                                }
                            </div>
                        </div>
                        {!isError ||
                            <p className={`login_text_error ${!isError || "login_error"}`}>
                                Неправильно ввели логин или пароль
                            </p>
                        }
                    </div>
                    <button type='submit' className='login_btn'>Вход</button>
                </form>
            </div>
        </section>
    )
}
