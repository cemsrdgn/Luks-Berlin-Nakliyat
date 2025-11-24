import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

const SiteLayout = () => (
  <div className="site-shell">
    <TopBar />
    <Header />
    <main className="site-main">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default SiteLayout;

