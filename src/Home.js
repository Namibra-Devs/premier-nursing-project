import './Home.css';
import admissions from './assets/images/admissions.jpeg';
import welcome from './assets/images/welcome.jpeg';
import programs1 from './assets/images/programs1.jpeg';
import programs2 from './assets/images/programs2.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk,faCalendarAlt,faClock,faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import News from './News';
import Events from './Events';
import Gallery from './Gallery';
import Admissions from './Admissions';
import React, { Component } from 'react'


const Home = () => {
  AOS.init({ duration : 2000});
  return (
    <div>
           <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" style={{ background: 'linear-gradient(180deg, rgba(103, 103, 103, 0.5) 0%, #25166F 100%)'
}}>
    <div class="carousel-item active h-25">
    <img  style={{height:'90vh', objectFit:'cover'}} src={admissions} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-md-block">
        <h3>Admission Requirements</h3>
        <p>Lorem ipsum diolor emet atet  lorem ipsum dilore amet lorem iosum dilor amet lorem ipsum diilor amet ncdnd dnjsdkkdls jdslkdsp;mkldkmmckmm lksdls slddslkksd l</p>
      </div>
    </div>
    <div class="carousel-item h-25">
      <img style={{height:'90vh', objectFit:'cover'}} src={admissions} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-md-block">
        <h3>Admission Requirements</h3>
        <p>Lorem ipsum diolor emet atet  lorem ipsum dilore amet lorem iosum dilor amet lorem ipsum diilor amet ncdnd dnjsdkkdls jdslkdsp;mkldkmmckmm lksdls slddslkksd l</p>
      </div>
    </div>
    <div class="carousel-item h-25">
      <img  style={{height:'90vh', objectFit:'cover'}} src={admissions} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-md-block">
        <h3>Admission Requirements</h3>
        <p>Lorem ipsum diolor emet atet  lorem ipsum dilore amet lorem iosum dilor amet lorem ipsum diilor amet ncdnd dnjsdkkdls jdslkdsp;mkldkmmckmm lksdls slddslkksd l</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
          </div>

        <div class="welcome-div container">
          <div class="row justify-content-center">
              <div class="col-lg-6 col-md-6 col-sm-12 mb-4">
                  <div class="welcome-img" data-aos="fade-left">
                      <img src={welcome} alt="" className='w-100' />
                  </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 mt-5">
                  <div class="welcome-text" data-aos="fade-right">
                      <h2 className='mt-5'>Welcome to PNC</h2>
                      <p className='mt-5' id='text'>We are a premier institution dedicated to nurturing the next generation of healthcare professionals in Ghana. Established with a commitment to excellence, we take pride in providing top-tier education and practical training in the field of nursing. Our faculty comprises experienced healthcare experts who are passionate about shaping compassionate, skilled, and culturally competent nurses.</p>
                  </div>
              </div>
          </div>
       </div>

        <div className="programs container" style={{marginTop:'30px'}}>
                <h1>Programs</h1>
                <div className="container" style={{marginTop:'30px'}}>
                  <div className="row justify-content-around">
                    <div className="col-md-4">
                      <div className="card" data-aos="fade-right">
                        <img className="card-img-top img-fluid" src={programs1} alt="Card image cap" style={{height:'50vh'}} />
                        <div className="card-body">
                          <h5 className="card-title">Bachelor of Science in Nursing (BSN)</h5>
                          <p className="card-text">The BSN program is designed to provide students with a comprehensive education in nursing theory, clinical practice, and healthcare leadership. Graduates are prepared to deliver high-quality care across various healthcare settings.</p>
                          <a href="/Programs" style={{textDecoration:'none',color:'black'}}>Read more<FontAwesomeIcon icon={faLongArrowRight} style={{marginLeft:'5px'}} /></a>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="card" data-aos="fade-down" >
                        <img className="card-img-top img-fluid" src={programs2} alt="Card image cap" style={{height:'50vh'}} />
                        <div className="card-body">
                          <h5 className="card-title">Master of Science in Nursing (MSN)</h5>
                          <p className="card-text">Our MSN program offers advanced training for registered nurses seeking to expand their expertise in specialized areas such as [Specialization]. With a focus on evidence-based practice and leadership, graduates are poised for leadership roles in healthcare.</p>
                          <a href="/Programs" style={{textDecoration:'none',color:'black'}}>Read more<FontAwesomeIcon icon={faLongArrowRight} style={{marginLeft:'5px'}} /></a>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="card" data-aos="fade-left">
                        <img className="card-img-top img-fluid" src={programs1} alt="Card image cap" style={{height:'50vh'}} />
                        <div className="card-body">
                          <h5 className="card-title">Doctor of Nursing Practice (DNP)</h5>
                          <p className="card-text">The DNP program at [College Name] is designed for experienced nurses aspiring to attain the highest level of clinical expertise and leadership in healthcare. Graduates are prepared to lead in clinical practice, healthcare administration, and policy.</p>
                          <a href="/Programs" style={{textDecoration:'none',color:'black'}}>Read more<FontAwesomeIcon icon={faLongArrowRight} style={{marginLeft:'5px'}} /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
        <Admissions />
       
        <Gallery />
        
        <News />
   
        <Events />
     
  </div>
  )
};

export default Home;