import React from 'react'
import { ButtonGray, ButtonOrange } from '../../ui/Button'
import BackIcon from './../../assets/icons/back_icon.svg'
import { useNavigate } from 'react-router-dom'
import AddIcon from './../../assets/icons/add_icons.svg'
import FotoUi from '../../ui/FotoUi'
import BackBtns from '../../ui/BackBtns'


export default function ProfileBg() {
    const navigate = useNavigate();
    return (
        <section>
            <div className="container">
                <div className="profile_bg">
                    <BackBtns>
                        <ButtonGray icon={BackIcon} text={"Назад"} onClick={() => navigate(-1)} />
                        <ButtonOrange icon={AddIcon} text={"Изменить и сохранить"} />
                    </BackBtns>

                    <form className='profile_form'>
                        <FotoUi text={"изменить"} />

                        <div>
                            <div className='profile_form_wrapper'>
                                <h2>Данные профиля</h2>
                                <div>
                                    <div className="profile_input_wrapper">
                                        <div className="profile_input_label">
                                            <label>Ф.И.О</label>
                                            <input type="text" />
                                        </div>
                                        <div className="profile_input_label">
                                            <label>Ф.И.О</label>
                                            <input type="text" />
                                        </div>
                                        <div className="profile_input_label">
                                            <label>Ф.И.О</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hr"></div>

                            <div className='profile_form_wrapper'>
                                <h2>Роль для доступа</h2>
                                <div>
                                    <div className="profile_input_wrapper">
                                        <div className="profile_input_label">
                                            <label>Ф.И.О</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
