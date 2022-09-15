import React from 'react'
import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'
import './SpecialSubjects.scss'

export default function SpecialSubjects() {
  return (
    <div className="s">
      <div className="s-wrapper">
        <Header />
        <Content/>
        <Footer />
      </div>
    </div>
  );
}
