import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from './navbar';

export default function Sidebar() {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    await fetch('/api/categories')
      .then((res) => res.json())
      .then((result) => setCategories(result.category));
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="lists">
      {categories &&
        categories.map((item, index) => {
          return (
            <div className="lists-item" key={index}>
              <Link href={`../category/${item}`}>{item}</Link>
            </div>
          );
        })}
    </div>
  );
}
