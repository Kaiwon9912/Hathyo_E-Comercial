import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { categories, postsByCategory } from "../data/topicData";
import { useTranslation } from 'react-i18next';
export default function TopicPage() {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    if (category && categories.includes(category)) {
      setSelectedCategory(category);
      setPosts(postsByCategory[category] || []);
      setLoading(false);
    } else {

      setSelectedCategory(categories[0]);
      setPosts(postsByCategory[categories[0]] || []);
      setLoading(false);
    }
  }, [category]);

  const handleCategoryChange = (cat) => {
    if (cat === selectedCategory) return;
    setLoading(true);
    setTimeout(() => {
      setSelectedCategory(cat);
      setPosts(postsByCategory[cat] || []);
      setLoading(false);
    }, 300);
  };

  return (
    <div className="container mx-auto flex flex-col xl:flex-row gap-6 p-4">
      {/* Sidebar */}
      <div className="bg-primary rounded-xl shadow w-full xl:w-72 p-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`block w-full text-textSecondary text-gray-700 text-left py-3 px-4 mb-2 font-semibold hover:text-green-700 hover:border-l-green-700 hover:border-l-4 ${
              selectedCategory === cat
                ? "bg-lime-200/20 text-textPrimary border-l-green-700 border-l-4"
                : " hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-6">
        {loading ? (
          <div className="flex flex-col xl:flex-row gap-6 animate-pulse">
            <div className="bg-gray-200 rounded-xl h-64 xl:h-[400px] w-full xl:w-3/5" />
            <div className="flex flex-col gap-4 xl:w-1/3">
              <div className="bg-gray-200 h-24 rounded-xl" />
              <div className="bg-gray-200 h-24 rounded-xl" />
              <div className="bg-gray-200 h-24 rounded-xl" />
            </div>
          </div>
        ) : (
          <div className="flex flex-col xl:flex-row gap-6">
            {/* Featured post */}
            <div className="relative overflow-hidden rounded-xl shadow-lg xl:w-2/5">
              <img
                src={posts[0]?.image}
                alt={posts[0]?.title}
                className="w-full h-64 xl:h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <span className="bg-yellow-300 text-black text-xs px-2 py-1 rounded">
                  {posts[0]?.type}
                </span>
                <h2 className="font-bold text-lg mt-2">{posts[0]?.title}</h2>
                <p className="text-sm mt-1">Admin VuiKhoẻ - {posts[0]?.time}</p>
              </div>
            </div>

            {/* List of Small posts */}
            <div className="flex flex-col gap-4 xl:w-3/5">
              {posts.slice(1).map((post, index) => (
                <div
                  key={index}
                  className="flex bg-primary border-secondary border rounded-xl shadow p-3 gap-4 items-center"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-24 bg-orange-100 text-orange-400 text-xs font-semibold px-2 py-1 rounded-lg mb-1 text-center">
                        {post.type}
                      </span>
                      <p className="text-gray-500 text-xs">{post.time}</p>
                    </div>
                    <h3 className="text-xs text-textPrimary my-1">Admin vui khoe</h3>
                    <h3 className="font-semibold text-sm text-textPrimary">{post.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
