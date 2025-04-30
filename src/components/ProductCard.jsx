import React from "react";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/detail", { state: { product } });
  };
  return (
    <div onClick={handleClick} className="bg-primary relative rounded-xl w-auto shadow-md border-secondary border-2 group flex flex-col gap-1 cursor-pointer">
      {/* Sale Label */}
      <div className="absolute -top-3 -left-1 w-28 h-20 z-10 flex items-start justify-start"
        style={{
          backgroundImage: 'url("/images/ribbon.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      >
        <div className="text-white mt-7 ml-4 text-xs flex items-center font-semibold gap-1">
          <svg className="inline-block" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 4.83377C10 5.83377 9.66667 7.1671 8.06667 7.70043C8.53333 6.5671 8.6 5.43377 8.26667 4.3671C7.8 2.9671 6.26667 1.90043 5.2 1.30043C4.93333 1.10043 4.46667 1.3671 4.53333 1.7671C4.53333 2.50043 4.33333 3.5671 3.2 4.70043C1.73333 6.1671 1 7.70043 1 9.1671C1 11.1004 2.33333 13.5004 5 13.5004C2.33333 10.8338 4.33333 8.50043 4.33333 8.50043C4.86667 12.4338 7.66667 13.5004 9 13.5004C10.1333 13.5004 12.3333 12.7004 12.3333 9.23377C12.3333 7.1671 11.4667 5.5671 10.7333 4.63377C10.5333 4.30043 10.0667 4.50043 10 4.83377Z" stroke="#FEFEFE"></path></svg>
          {product.price.discount}
        </div>
      </div>

      {/* Image */}
      <div className="w-auto overflow-hidden aspect-square relative rounded-t-xl bg-green-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="group-hover:scale-110 transition-transform duration-300 ease-in-out absolute object-cover w-auto"
        />
      </div>

      {/* Info */}
      <div className="px-3 py-4 flex flex-col gap-1">
        <div className="text-textSecondary font-bold line-clamp-2 min-h-[48px] group-hover:text-green-600">
          {product.name}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-orange-500 font-semibold">{product.price.sale}</span>
          {product.price.original && (
            <span className="text-gray-400 line-through text-sm">
              {product.price.original}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
