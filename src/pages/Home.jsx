import Banner from '../components/Banner';
import HealthExperts from '../components/HealthExperts';
import FeedbackForm from '../components/FeedbackForm';


import CategorySection from '../components/CategorySection';
import ProductCard from '../components/ProductCard';
import Promotions from '../components/Promotions';
import { productData } from "../data/productData";

function Home() {
  return (
    <div className="">
      <Banner />
      <div className="container mx-auto px-4">
        <CategorySection />
      <div className='grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
      <div className='col-span-4'>
      <section className="px-4 bg-primary py-8 flex space-around items-start gap-6 justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {productData.map((product, index) => {
          const safeProduct = {
            ...product,
            image: product.image || "https://icons.veryicon.com/png/o/application/applet-1/product-17.png", 
          };
          return (
            <ProductCard
              key={index}
              product={safeProduct}
            />
          );
        })}
      </div>
      
    </section>
      </div>
      <div className='col-span-1'>
        <Promotions />
        <Promotions />
      </div>
      </div>
        <HealthExperts />
        <FeedbackForm />
      </div>
    </div>
  );
}

export default Home;