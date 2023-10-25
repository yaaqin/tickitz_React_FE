import React from 'react'

import "../style/App.css";
import "../style/App.mobile.css";

import Nav from '../component/nav'
import BodyDetail from '../component/bodyDetail';
import Footer from '../component/footer'


export default function detail() {
  return (
    <div>
        <div className='container pt-4'>
            <Nav />

       <BodyDetail />
        </div>
        
      < Footer />
        
    </div>
  )
}
