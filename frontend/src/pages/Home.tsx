import { Link } from "react-router-dom";
import '../i18n/config';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <Link to="/about">About</Link>
      <p>{t('title', { name: 'John' })}</p>
      <p>{t('description.part1')}</p>
      <p>{t('description.part2')}</p>
    </div>
  )
}

export default Home