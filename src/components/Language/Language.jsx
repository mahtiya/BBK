import { useState } from 'react';
import Russian from './../../assets/icons/Flags/flags.svg';
import English from './../../assets/icons/Flags/uk_flag.png';
import i18next from 'i18next';


export default function Language({ isOpen }) {

  const languages = [
    { code: "ru", label: "Ру", flags: Russian },
    { code: "en", label: "En", flags: English },
  ]

  const [SelectLang, setSelectLang] = useState(find(lang => lang.code === i18n.language) || languages[0]);
  const othersLAnguages = languages.filter(lang => lang.code !== SelectLang.code)

  const changeLange = (lang) => {
    setSelectLang(lang.code)
    i18next.changeLanguage(lang.code)
  }
  return (
    <>
      <img className='language_flags_icons' src={SelectLang.flags} alt="Flag" />
      <p className='language_text'>{SelectLang.label}</p>

      {isOpen && (
        <ul className='language_modal'>
          {othersLAnguages.map((item) => (
            <li key={item.code} onClick={() => changeLange(item)}>
              <img className='language_modal_flags' src={English} alt="" />
              <p className='language_text'>{item.label}</p>
            </li>
          ))}

        </ul>
      )}
    </>
  )
}
