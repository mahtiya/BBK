import { useTranslation } from 'react-i18next';

import { Header } from "../../components";
import ProfileBg from './ProfileBg';

export default function Profile() {
  const { t } = useTranslation()

  return (
    <>
      <Header title={t('profile')} />
      <ProfileBg />
    </>
  )
}
