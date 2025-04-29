import { useState } from "react";
import { categories } from "../data/categories";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import { productData } from "../data/productData";
import ProductCard from "../components/ProductCard";
function Product() {
  const [openCategoryId, setOpenCategoryId] = useState(null);
  const [sort, setSort] = useState("Liên quan");

  const options = ["Liên quan", "Mới nhất", "Bán chạy"];
  const toggleCategory = (id) => {
    setOpenCategoryId(openCategoryId === id ? null : id);
  };

  return (
    <div className="min-h-screen">
      <div className="container  mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <div className="col-span-1">
<div className="bg-primary text-textPrimary rounded-lg shadow-md p-1 border-2 border-secondary ">
            <h1 className="font-semibold flex p-1 my-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class=""><path fill="#000" d="M8 9a.97.97 0 0 1-.712-.288A.97.97 0 0 1 7 8q0-.424.288-.712A.97.97 0 0 1 8 7h12q.425 0 .713.288.288.289.287.712 0 .424-.288.713A.96.96 0 0 1 20 9zm0 4a.97.97 0 0 1-.712-.288A.97.97 0 0 1 7 12q0-.424.288-.712A.97.97 0 0 1 8 11h12q.425 0 .713.288T21 12q0 .424-.288.713A.96.96 0 0 1 20 13zm0 4a.97.97 0 0 1-.712-.288A.97.97 0 0 1 7 16q0-.424.288-.712A.97.97 0 0 1 8 15h12q.425 0 .713.288T21 16q0 .424-.288.713A.96.96 0 0 1 20 17zM4 9a.97.97 0 0 1-.712-.288A.97.97 0 0 1 3 8q0-.424.288-.712A.97.97 0 0 1 4 7q.423 0 .713.288.29.289.287.712a.99.99 0 0 1-.288.713A.95.95 0 0 1 4 9m0 4a.97.97 0 0 1-.712-.288A.97.97 0 0 1 3 12q0-.424.288-.712A.97.97 0 0 1 4 11q.423 0 .713.288T5 12a.99.99 0 0 1-.288.713A.95.95 0 0 1 4 13m0 4a.97.97 0 0 1-.712-.288A.97.97 0 0 1 3 16q0-.424.288-.712A.97.97 0 0 1 4 15q.423 0 .713.288T5 16a.99.99 0 0 1-.288.713A.95.95 0 0 1 4 17"></path></svg>
            Tất cả sản phẩm
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
                  {category.name}
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
                        {subcategory} 
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
          
                <div className="font-semibold">Sắp xếp theo</div>
                {options.map((option) => (
                  <div
                    key={option}
                    onClick={() => setSort(option)}
                    className={`w-28 text-center py-2 rounded-lg cursor-pointer  ${
                      sort === option ? "bg-green-700 text-white" : "bg-white border shadow-sm"
                    }`}
                  >
                    {option}
                  </div>
                ))}
            <div>
              <div className="flex items-center gap-2">
      
                <select className="border border-gray-300 rounded-md p-2 text-xs focus:outline-none focus:ring-2 focus:ring-green-600">
                  <option value="12">Giá: Thấp đến cao</option>
                  <option value="24">Giá: Cao đến thấp</option>
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
