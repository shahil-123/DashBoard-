import React from 'react'
import ImageSlider from './ImageSlider';
import './sidebar.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HoverButtonPage from './HoverButtonPage';


const SidebarNew = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <ul className="col-md-2 sidebar d-inline   py-5">
            <li> <a href="/" className='bg-white py-2 my-2'> <b> Channels</b></a></li>
            <li> <a href="/" className='bg-white py-2 my-2'> <b> Languages</b></a></li>
            <li> <a href="/" className='bg-white py-2 my-2'> <b> Geners </b> </a></li>
          </ul>
          <div className="col-md-10 py-5 bg-dark">
            <ImageSlider />
            <div className='d-flex text-center mx-4'>
              <HoverButtonPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarNew
