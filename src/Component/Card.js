import React from 'react'
import './Card.css'
const Card = () => {
  return (
    <div className="container">
      <div className="main">
        <div className="spend-container gutter">
          Your total spend
          <span className="drop">
            <select className="drop-down">
              <option value="this week">this week</option>
            </select>
          </span>
        </div>
        <div className="sar gutter">
          SAR
          <span className="number">50.8</span>
        </div>
        <div className="range gutter">
          <div className="three-chart-bar gutter"></div>
          <div className="bars">
            <span>
              <div class="circle-food"></div>
              <span className="text">Food</span>
            </span>
            <span>
              <div class="circle-shopping"></div>
              <span className="text">Shopping</span>
            </span>
            <span>
              <span class="circle-movie"></span>
              <span className="text">Movie</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
