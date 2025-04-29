import { Link } from 'react-router-dom';
import { User, ShoppingCart, Bell, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import logo from '../assets/images/logo.svg';
import AuthModal from './AuthModal'; // Thêm dòng này
import { useTheme } from '../contexts/ThemeContext'; // Thêm dòng này
import { Sun, Moon } from 'lucide-react'; 
import { useTranslation } from 'react-i18next';
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false); // Thêm state này
  const { isDarkMode, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

 const handleChangeLanguage = (lang) => {
   i18n.changeLanguage(lang);
 };
    useEffect(() => {
      const auth = getAuth();
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
      return () => unsubscribe();
    }, []);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log("Signed out successfully");
    }).catch((error) => {
      console.error("Error signing out:", error);
    });
  };

  return (
    <header className="bg-primary shadow-md sticky top-0 z-50">
      <div className=' justify-end flex space-x-3 px-5 h-2 text-xs text-textPrimary'>
      <button onClick={() => handleChangeLanguage('vi')}>vi</button>
      <button onClick={() => handleChangeLanguage('en')}>en</button>
      </div>
      <div className="container mx-auto flex items-center justify-between py-2 px-6">
        
        <Link to="/" className="">
          <img src={logo} width={167} height={62} alt="Logo" />
        </Link>

        {/* Mobile Icons and Menu Button */}
        <div className="flex items-center space-x-4 lg:hidden">
          <div className="relative">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <ShoppingCart className="text-gray-600" size={24} />
              <span className="absolute -top-1 -right-1 bg-green-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
          </div>



          <button 
            className="p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center w-full">
          <div className="flex items-center justify-around w-full uppercase font-semibold text-sm text-textPrimary">
            <Link to="/product" className="hover:text-green-700">{t('header.store')}</Link>
            <Link to="/topic/Dinh%20dưỡng" className="hover:text-green-700">{t('header.nutrients')}</Link>
            <Link to="/topic/Vận%20động" className="hover:text-green-700">{t('header.workout')}</Link>
            <Link to="/topic/Tinh%20thần" className="hover:text-green-700">{t('header.mental')}</Link>
            <Link to="/topic/Vấn%20đề" className="hover:text-green-700">{t('header.problem')}</Link>
            
          </div>
          
          <div className="flex items-center space-x-6 w-auto">
            <div className="flex items-center space-x-4">
              <div className="relative bg-lime-50 rounded-xl">
                <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <ShoppingCart className="text-gray-600" size={16} />
                </button>
              </div>

    
            </div>
            <button onClick={toggleTheme} className="p-2 rounded-full  bg-lime-50 ">
              {isDarkMode ? (
                <Sun size={16} className="text-yellow-500" />
              ) : (
                <Moon size={16} className="text-gray-600" />
              )}
             </button>
            {/* Check login */}
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2">
                  <User size={24} className="text-green-700" />
            
                </button>
                <div className="absolute right-0 mt-2 w-48 top-0 bg-white rounded-md shadow-lg hidden group-hover:block">
                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Thông tin cá nhân</Link>
                  <Link to="/orders" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Đơn hàng</Link>
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                  >
                    Đăng xuất
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="w-44 items-center bg-bgPrimary border-green-400 border hover:bg-green-800 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span className="font-semibold">{t('header.signin')}</span>
              </button>
            )}
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-primary shadow-lg lg:hidden">
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-4 text-center text-textPrimary font-semibold text-sm">
              <Link to="/product" className="hover:text-green-700">{t('header.store')}</Link>
              <Link to="/topic/Dinh%20dưỡng" className="hover:text-green-700">{t('header.nutrients')}</Link>
              <Link to="/topic/Vận%20động" className="hover:text-green-700">{t('header.workout')}</Link>
              <Link to="/topic/Tinh%20thần" className="hover:text-green-700">{t('header.mental')}</Link>
              <Link to="/topic/Vấn%20đề" className="hover:text-green-700">{t('header.problem')}</Link>

                <div className="flex items-center space-x-4 pt-4">
                  {user ? (
                    <div className="flex flex-col space-y-2 w-full">
                      <Link to="/profile" className="block w-full text-center bg-green-700 text-white px-4 py-2 rounded-lg">Thông tin cá nhân</Link>
                      <button 
                        onClick={handleLogout}
                        className="block w-full text-center bg-red-500 text-white px-4 py-2 rounded-lg"
                      >
                        Đăng xuất
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsAuthModalOpen(true);
                      }}
                      className="flex justify-center items-center gap-2 bg-green-700 hover:bg-green-800 w-full text-white px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <User size={20} />
                      <span className="font-semibold text-center">{t('header.signin')}</span>
                    </button>
                  )}
                </div>

              </div>
            </div>
          </div>
        )}
      </div>

      {/* Popup Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </header>
  );
}

export default Header;