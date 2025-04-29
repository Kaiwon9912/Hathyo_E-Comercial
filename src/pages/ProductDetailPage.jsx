import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const ProductDetailPage = () => {
  const location = useLocation();
  const product = location.state?.product;
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null); // Khai báo selectedVariant
  const handleQuantityChange = (type) => {
    if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
    if (type === "increase") {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="bg-primary/95 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 bg-primary border-2 border-secondary p-6 rounded shadow">
        
        {/* Image */}
        <div className="flex justify-center items-start">
          <img
            src={product.image}
            alt={product.name}
            className="rounded w-full max-w-md object-contain"
          />
        </div>

         {/* Product Info */}
         <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-2 text-textPrimary">{product.name}</h1>

          {/* Ratings */}
          <div className="flex items-center mb-2">
            <div className="text-gray-400">★★★★★</div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-red-600 text-2xl font-bold">
              {product.price.sale}
            </span>
            <span className="line-through text-gray-400">{product.price.original}</span>
            <span className="text-red-500 text-sm">-{product.price.discount}%</span>
          </div>

          {/* Description */}
          <p className="text-textSecondary mb-4">{product.description}</p>

          {/* Brand / Unit / Origin */}
          <div className="text-sm grid grid-cols-2 mb-4">
            <div className="space-y-3 text-textPrimary"> 
              <p>Thương hiệu: </p>
              <p>Chọn đơn vị tính: </p>
              <p>Xuất xứ: </p>
            </div>
            <div className="space-y-3 text-textSecondary">

              <p className="font-medium">{product.brand}</p>
              <p className="font-medium">{product.unit}</p>
              <p className="font-medium">{product.origin}</p>
            </div>

          </div>

          {/* Variants */}
          <div className="mb-4 flex space-x-5">
          <p className="font-medium mb-2 text-textSecondary">{product.option.name}</p>
          <div className="flex flex-wrap gap-2">
            {product.option.values.map((variant, idx) => {
              const colorKey = Object.keys(variant)[0]; // Lấy key của mỗi đối tượng trong array (ví dụ: "color1")
              const colorValue = variant[colorKey]; // Lấy giá trị của key (ví dụ: "Hồng (3-6 lb)")

              return (
                <button
                  key={idx}
                  onClick={() => setSelectedVariant(colorKey)}
                  className={`px-4 py-2 rounded border ${
                    selectedVariant === colorKey
                      ? "border-green-500 text-green-600"
                      : "border-secondary text-textPrimary"
                  }`}
                >
                  {colorValue}
                </button>
              );
            })}
          </div>
        </div>


          {/* Quantity */}
          <div className="mb-4 flex space-x-5">
            <p className="font-medium mb-2 text-textSecondary">Chọn số lượng</p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleQuantityChange("decrease")}
                className="border text-textPrimary border-gray-300 px-2 py-1 rounded hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4 text-textPrimary">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("increase")}
                className="border text-textPrimary border-gray-300 px-2 py-1 rounded hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-auto">
            <button className="flex-1 border border-green-600 text-green-600 font-semibold py-3 rounded hover:bg-green-50">
              Thêm vào giỏ
            </button>
            <button className="flex-1 bg-green-600 text-white font-semibold py-3 rounded hover:bg-green-700">
              Mua ngay
            </button>
          </div>
        </div>
      </div>

      {/* --- Merchant Info --- */}
      <div className="container mx-auto mt-8 px-4">
        <div className="bg-primary border-secondary border-2 p-6 rounded shadow flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/src/assets/images/miniLogo.webp" className="w-16 h-16 rounded-full" />
            <div>
              <h2 className="font-bold text-lg text-textPrimary">Hathyo</h2>
              <div className="flex gap-2 mt-2">
                <button className="bg-green-100 text-green-700 font-medium px-3 py-1 rounded">
                  Chat ngay
                </button>
                <button className="bg-green-100 text-green-700 font-medium px-3 py-1 rounded">
                  Ghé shop
                </button>
              </div>
            </div>
          </div>
          <div className="text-sm text-textPrimary space-x-10 text-right flex">
            <p>Sản phẩm: <span className="font-medium">10</span></p>
            <p>Tham gia: <span className="font-medium">4 tháng</span></p>
          </div>
        </div>
      </div>

      {/* --- Product Description --- */}
      <div className="container mx-auto mt-8 px-4 ">
        <div className="bg-primary p-6 rounded border-secondary border shadow text-textPrimary">
          <h2 className="text-xl font-bold mb-4">Mô tả sản phẩm</h2>
          <h3 className="font-semibold mb-2">ĐẶC ĐIỂM NỔI BẬT:</h3>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit illo explicabo ipsum temporibus. Est ad ex sint cupiditate nulla maxime totam voluptatem inventore magni nisi, sequi eos sit voluptatum provident dolor! Ducimus repellendus vitae cumque maxime. Enim consequuntur sit perspiciatis nulla voluptates, corporis facilis, dolorem obcaecati vel velit eaque alias? Rerum quibusdam quia, natus saepe perspiciatis facilis mollitia recusandae ab hic qui eaque et, laudantium similique illum unde. Quidem eius a dignissimos quas, fugit culpa ab impedit deserunt consequuntur blanditiis officiis natus obcaecati reprehenderit voluptates commodi saepe dolor est. Labore maiores quaerat facilis eligendi ullam, optio excepturi suscipit magnam exercitationem animi saepe unde beatae eum voluptas voluptatum, cum a ratione in tempora delectus ducimus cupiditate maxime minima. Vel, inventore exercitationem amet maxime ea tempora.
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;