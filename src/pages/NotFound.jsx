import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="w-full bg-[#6821C2] flex flex-col items-center justify-center text-white py-32">
      <h2 className="font-bold text-9xl">404</h2>
      <p className="text-xl mt-4">Đường dẫn không chính xác hoặc có lỗi xảy ra</p>
      <Link to="/" className="mt-4 text-white underline">
        Quay về trang chủ
      </Link>
    </div>
  );
}

export default NotFound;