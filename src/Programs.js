import React from "react";
import programs1 from './assets/images/programs1.jpeg';
import programs2 from './assets/images/programs2.jpeg';
import programs3 from './assets/images/programs3.jpeg';

function Programs() {
    return(
        <div className="programs container">
        <h1 style={{marginTop:'30px'}}>Programs</h1>
        <div className="container" style={{marginTop:'30px'}}>
          <div className="row justify-content-around">
            <div className="col-md-4">
              <div className="card">
                <img className="card-img-top" src={programs1} alt="Card image cap" style={{width:'340',height:'275px'}} />
                <div className="card-body">
                  <h5 className="card-title">Bachelor of Science in Nursing (BSN)</h5>
                  <p className="card-text">The BSN program is designed to provide students with a comprehensive education in nursing theory, clinical practice, and healthcare leadership. Graduates are prepared to deliver high-quality care across various healthcare settings.</p>
                  <a href="#">Read more</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img className="card-img-top" src={programs2} alt="Card image cap" style={{width:'340',height:'275px'}} />
                <div className="card-body">
                  <h5 className="card-title">Master of Science in Nursing (MSN)</h5>
                  <p className="card-text">Our MSN program offers advanced training for registered nurses seeking to expand their expertise in specialized areas such as [Specialization]. With a focus on evidence-based practice and leadership, graduates are poised for leadership roles in healthcare.</p>
                  <a href="#">Read more</a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img className="card-img-top" src={programs1} alt="Card image cap" style={{width:'340',height:'275px'}} />
                <div className="card-body">
                  <h5 className="card-title">Doctor of Nursing Practice (DNP)</h5>
                  <p className="card-text">The DNP program at [College Name] is designed for experienced nurses aspiring to attain the highest level of clinical expertise and leadership in healthcare. Graduates are prepared to lead in clinical practice, healthcare administration, and policy.</p>
                  <a href="#">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
</div>
    )
    
}

export default Programs