import React from "react";
import news3 from './assets/images/news3.jpeg';
import news4 from './assets/images/news4.jpeg';

function News() {
    return(
        <div className="news container">
        <h2>News</h2>
            
              <div className="news-items container d-flex">
              <div className="news-img">
                <img src={news3} alt="" />
              </div>
              <div className="news-text">
                <p>03/10/2024</p>
                <h4>Nursing Faculty Awarded Research Grant for Groundbreaking Study</h4>
                <p>Check as we discuss the crucial role of reliable cell tower construction in ensuring seamless connectivity across Africa.</p>
              </div>
              </div>
            
        
              <div className="news-items2 container d-flex">
                    <div className="news-img">
                    <img src={news4} alt="" />
                    </div>
                    <div className="news-text2">
                      <p>03/10/2024</p>
                      <h4>Premier Nursing College Hosts Successful Nursing Symposium</h4>
                      <p>The annual Nursing Symposium brought together healthcare professionals, students, and experts from across the region to discuss emerging trends and best practices in the field of nursing.</p>
                    </div>

                </div>
            
        

      </div>
    )
    
}

export default News