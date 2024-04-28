import React from "react";
import news3 from './assets/images/news3.jpeg';
import news4 from './assets/images/news4.jpeg';

function News() {
    return(
     
      <div class="news container">
      <h2>News</h2>
    
      <div class="news-div container">
        <div class="row justify-content-center"data-aos="fade-right">
            <div class="col-lg-6 col-md-6 col-sm-12 mb-4 ">
                <div class="welcome-img" >
                    <img src={news3} alt="" className='w-100' />
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 mt-5">
                <div class="welcome-text">
                  <p>03/10/2022</p>
                    <h3 className='mt-5'>Nursing Faculty Awarded Research Grant for Groundbreaking Study</h3>
                    <p className='mt-5' id='text'>Check as we discuss the crucial role of reliable cell tower construction in ensuring seamless connectivity across Africa.</p>
                </div>
            </div>
        </div>
    </div>
     
    
    <div class="news-div container">
        <div class="row justify-content-center"data-aos="fade-left">
            <div class="col-lg-6 col-md-6 col-sm-12 mb-4">
                <div class="welcome-img">
                    <img src={news4} alt="" className='w-100' />
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 mt-5">
                <div class="welcome-text">
                  <p>03/10/2022</p>
                    <h3 className='mt-5'>Premier Nursing College Hosts Successful Nursing Symposium</h3>
                    <p className='mt-5' id='text'>The annual Nursing Symposium brought together healthcare professionals, students, and experts from across the region to discuss emerging trends and best practices in the field of nursing.</p>
                </div>
            </div>
        </div>
    </div>
    
     <div  className="col-12 text-lg-end">
              <a href="/Events"><button type="button" className="btn btn-outline-primary" style={{width:'150px'}}>View All</button></a>
      </div>
            </div>
    
    )
    
}

export default News