import "./serviceCard.scss";
import React from 'react'

const ServiceCard = ({heading, text}) => {
  return (
    <div className="service-card">
        <h3>{heading}</h3>
        {/* <p>{text}</p> */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laborum nisi blanditiis omnis at libero repudiandae laudantium exercitationem beatae odio. </p>
        <br />
        <br />
        <br />
        <p className="action-text">Expand &gt;</p>
    </div>
  )
}

export default ServiceCard