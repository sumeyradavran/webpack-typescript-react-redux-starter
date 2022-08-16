import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <div>{t('home')}</div>
      <div>
        <Link to='/page'>{t('page')}</Link>
      </div>
    </>
  )
}

export default Home
