import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import './index.css';
import './styles/nprogress.css';
import ProductDetail from './pages/ProductDetailPage';
import TopicPage from './pages/Topic';
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import AuthPage from './pages/AuthPage';
import { ThemeProvider } from './contexts/ThemeContext';  
function App() {
  return (
    
    <Router>
       <ThemeProvider>
      <div className="flex flex-col min-h-screen">
     
        <Header />
        <main className="flex-grow bg-primary/90">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/detail" element={<ProductDetail />} />
            <Route path="/topic/:category" element={<TopicPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<AuthPage/>} />
          </Routes>
        </main>
        <Footer />
      </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;