import React, { useState } from "react";
import "./TradingCardStorePage.css";

function ProductCard({ product }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3>{product.title}</h3>
          <span className={`badge ${product.category.toLowerCase()}`}>
            {product.category}
          </span>
        </div>
        <p className="description">{product.description}</p>
        <div className="price">฿{product.price.toFixed(2)}</div>
        <p className="stock">Stock: {product.stock}</p>
        <div className="card-actions">
          <button className="btn detail">ดูรายละเอียด</button>
          <button className="btn contact">ติดต่อซื้อขาย</button>
        </div>
      </div>
    </div>
  );
}

export default function TradingCardStorePage() {
  const [products] = useState([
    {
      id: 1,
      title: "Crimson Dragon",
      category: "Legendary",
      price: 129,
      stock: 3,
      description:
        "A powerful dragon card with fire-based attacks. Great for high-risk high-reward decks.",
      img: "https://picsum.photos/seed/dragon/400/300",
    },
    {
      id: 2,
      title: "Azure Mage",
      category: "Epic",
      price: 49.5,
      stock: 12,
      description:
        "A master of water magic — great control and defense abilities.",
      img: "https://picsum.photos/seed/mage/400/300",
    },
    {
      id: 3,
      title: "Forest Sentinel",
      category: "Rare",
      price: 19.99,
      stock: 30,
      description:
        "Sturdy protector — buffs allies and soaks small hits.",
      img: "https://picsum.photos/seed/forest/400/300",
    },
  ]);

  return (
    <div className="page">
      <header className="header">
        <div>
          <h1>Trading Game Card Marketplace</h1>
        
        </div>
        <div className="search-bar">
          <input type="text" placeholder="ค้นหาชื่อการ์ดหรือดีไซน์..." />
          <select>
            <option>All</option>
            <option>Legendary</option>
            <option>Epic</option>
            <option>Rare</option>
            <option>Common</option>
          </select>
          <button className="cart-btn">🛒</button>
        </div>
      </header>

      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
