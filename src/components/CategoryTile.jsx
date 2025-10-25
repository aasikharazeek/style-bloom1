import React from "react";
import { Link } from "react-router-dom";
import "../styles/category-tile.css"; // CSS for tile styling

export default function CategoryTile({ title, link, className }) {
  return (
    <Link to={link}>
      <div className={`category-tile ${className}`}>
        <h2>{title}</h2>
      </div>
    </Link>
  );
}
