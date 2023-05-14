import Navbar from './navbar';
import { useState, useEffect } from 'react';
export default function Widgets({ title, type, lists }) {
  return (
    <div className="rightpane">
      <h4>{title}</h4>
      <div className="lists">
        {lists &&
          lists.map((item, index) => {
            return (
              <div className="lists-item" key={index}>
                {item.name}
              </div>
            );
          })}
      </div>
    </div>
  );
}
