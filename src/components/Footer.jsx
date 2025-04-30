import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-green-950 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.title')}</h3>
            <p className="text-gray-300">{t('footer.desc')}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.about')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  {t('footer.intro')}
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-gray-300 hover:text-white">
                  {t('footer.tools')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  {t('footer.career')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.user')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  {t('footer.intro')}
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-gray-300 hover:text-white">
                  {t('footer.tools')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  {t('footer.career')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-300">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
