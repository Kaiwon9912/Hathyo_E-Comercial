import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Hathyo</h3>
            <p className="text-gray-300">
              Cùng bạn vui khỏe hơn với các sản phẩm lành mạnh và khoa học.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-gray-300 hover:text-white">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <p className="text-gray-300">Email: support@hathyo.vn</p>
            <p className="text-gray-300">Hotline: 1800-123-456</p>
            <p className="text-gray-300">Địa chỉ: TP. Hồ Chí Minh, Việt Nam</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-300">
            &copy; 2025 Hathyo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;