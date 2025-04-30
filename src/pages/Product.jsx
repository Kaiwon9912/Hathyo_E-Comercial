import { useState } from "react";
import { categories } from "../data/categories";
import { ChevronDown, ChevronRight, ChevronUp, Menu } from "lucide-react";
import { productData } from "../data/productData";
import ProductCard from "../components/ProductCard";
import { useTranslation } from 'react-i18next';
function Product() {
  const [openCategoryId, setOpenCategoryId] = useState(null);
  const [sort, setSort] = useState("Liên quan");
  const { t, i18n } = useTranslation();
  const options = ["product.relevant", "product.newest", "product.best_selling"];
  const toggleCategory = (id) => {
    setOpenCategoryId(openCategoryId === id ? null : id);
  };

  return (
    <div className="min-h-screen">
      <div className="container  mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <div className="col-span-1">
<div className="bg-primary text-textPrimary rounded-lg shadow-md p-1 border-2 border-secondary ">
            <h1 className="font-semibold flex p-1 my-2 items-center ">
              <Menu size={16} className="mr-2" />
            {t('product.all')}
          </h1>
            {categories.map((category) => (
              <div key={category.id} className="mb-4">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className={`flex justify-between items-center text-xs p-2 w-full text-gray-500 text-left font-semibold hover:text-green-600 ${
                    openCategoryId === category.id
                      ? "bg-lime-300/20 text-textSecondary"
                      : "text-textPrimary"
                  }`}
                >
                  {t(category.name)} 
                  {openCategoryId === category.id ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>
                {openCategoryId === category.id && (
                  <ul className="mt-2 ml-4 space-y-1 text-gray-700">
                    {category.subcategories.map((subcategory, index) => (
                      <li
                        key={index}
                        className="flex cursor-pointer text-textPrimary  text-xs items-center justify-between hover:text-green-600 p-2 rounded-md hover:bg-lime-300/20 transition-colors duration-200 "
                      >
                        {t(subcategory)} 
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
</div>
          </div>

          {/* Nội dung bên phải */}
          <div className="col-span-1 md:col-span-5">
            <div className="space-x-2 font-semibold bg-slate-100 p-2 flex text-xs justify-end items-center gap-2 rounded-lg mb-8 ">
          
                <div className="font-semibold">{t("product.sort")}</div>
                {options.map((option) => (
                  <div
                    key={option}
                    onClick={() => setSort(option)}
                    className={`w-28 text-center py-2 rounded-lg cursor-pointer  ${
                      sort === option ? "bg-green-700 text-white" : "bg-white border shadow-sm"
                    }`}
                  >
                   {t(option)}
                  </div>
                ))}
            <div>
              <div className="flex items-center gap-2">
      
                <select className="border border-gray-300 rounded-md p-2 text-xs focus:outline-none focus:ring-2 focus:ring-green-600">
                  <option >{t("product.High_to_low")}</option>
                  <option >{t("product.Low_to_high")}</option>
                </select>
    
              </div>
            </div>






            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {productData.map((product) => (
              <ProductCard product={product} />

            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
