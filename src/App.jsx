import { useState } from "react";
import Button from "./components/button/Button";
import Banner from "./components/Banner/Banner";
import ServiceCard from "./components/ServiceCard/ServiceCard";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import USP from "./components/USP/USP";
import SuccessStories from "./components/SuccessStories/SuccessStories";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Button btnText="Contact Us"/> */}
      <Banner />
      <div className="services-section">
        <h4>Services</h4>
        <div className="services-grid">
          <ServiceCard imagePath = "ServiceImages/1.png" heading="Big Data & Analytics" text="" />
          <ServiceCard imagePath = "ServiceImages/2.png" heading="Consulting" text="" />
          <ServiceCard imagePath = "ServiceImages/3.png" heading="HR & staffing" text="" />
          <ServiceCard imagePath = "ServiceImages/4.png" heading="Cybersecurity" text="" />
          <ServiceCard imagePath = "ServiceImages/5.png" heading="Consultancy" text="" />
          <ServiceCard imagePath = "ServiceImages/6.png" heading="Sustainability" text="" />
          <ServiceCard imagePath = "ServiceImages/7.png" heading="Cloud" text="" />
          <ServiceCard imagePath = "ServiceImages/8.png" heading="Metaverse" text="" />
        </div>
      </div>
      <div className="about-us-section">
        <h4>The reason why Blackcoffer stands out</h4>
        <h3>Blackcoffer Unfolds Solutions To Everything</h3>
        <AboutUs />
      </div>
      {/* <br /><br /><br /> */}
      <div className="usp-section">
        <h2>What Makes Us Different</h2>
        <USP />
      </div>
      <SuccessStories />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
