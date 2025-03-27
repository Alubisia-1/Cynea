// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CapabilityCard from './components/CapabilityCard';
import Partners from './components/Partners';
import Footer from './components/Footer';

const App = () => {
  const products = [
    {
      icon: 'fa-cog', // Asset Performance Management
      title: 'Asset Performance Management',
      target: 'for Manufacturing',
      description: 'Monitor equipment performance and reduce costs.',
    },
    {
      icon: 'fa-arrows-rotate', // ERP Systems
      title: 'ERP Systems',
      target: 'for Mid-Market Companies',
      description: 'Unified business processes with integrated solutions.',
    },
    {
      icon: 'fa-bar-chart', // Financial Analytics
      title: 'Financial Analytics',
      target: 'for Financial Institutions',
      description: 'Transform financial data into actionable insights.',
    },
    {
      icon: 'fa-link', // Supply Chain Intelligence
      title: 'Supply Chain Intelligence',
      target: 'for Retail & FMCG',
      description: 'Optimize inventory and distribution.',
    },
    {
      icon: 'fas fa-landmark', // Public Sector Analytics
      title: 'Public Sector Analytics',
      target: 'for Government Agencies',
      description: 'Improve efficiency with data insights.',
    },
  ];

  const capabilities = [
    {
      icon: 'fa-chart-bar', // Enterprise Data Analytics
      title: 'Enterprise Data Analytics',
      description: 'Transform raw data into insights.',
    },
    {
      icon: 'fa-database', // Data Engineering
      title: 'Data Engineering',
      description: 'Build robust, scalable pipelines.',
    },
    {
      icon: 'fa-cog', // Process Automation
      title: 'Process Automation',
      description: 'Streamline workflows efficiently.',
    },
    {
      icon: 'fa-tools', // Asset Management
      title: 'Asset Management',
      description: 'Optimize asset performance.',
    },
    {
      icon: 'fa-arrows-rotate', // ERP Systems
      title: 'ERP Systems',
      description: 'Integrate core business processes.',
    },
  ];

  return (
    <div className="App">
      <Header />
      <Hero />
      <section className="products">
        <h2>Who Can We Help</h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              icon={product.icon}
              title={product.title}
              target={product.target}
              description={product.description}
            />
          ))}
        </div>
      </section>
      <section className="capabilities">
        <h2>Our Core Capabilities</h2>
        <div className="capability-grid">
          {capabilities.map((capability, index) => (
            <CapabilityCard
              key={index}
              icon={capability.icon}
              title={capability.title}
              description={capability.description}
            />
          ))}
        </div>
      </section>
      <Partners />
      <Footer />
    </div>
  );
};

export default App;