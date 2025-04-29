import Banner from '../components/Banner';
import HealthExperts from '../components/HealthExperts';
import FeedbackForm from '../components/FeedbackForm';


import CategorySection from '../components/CategorySection';
import ProductSection from '../components/ProductSection';
import Promotions from '../components/Promotions';

function Home() {
  return (
    <div className="bg-primary">
      <Banner />
      <div className="container mx-auto px-4">
        <CategorySection />
      <div className='grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
      <div className='col-span-4'>
        <ProductSection />
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