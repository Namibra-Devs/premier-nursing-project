

import './Body.css';
import admissions from './assets/images/admissions.jpeg';
import welcome from './assets/images/welcome.jpeg';
import programs1 from './assets/images/programs1.jpeg';
import programs2 from './assets/images/programs2.jpeg';
import programs3 from './assets/images/programs3.jpeg';

const Body = () => {
  return (
    <div>
      <div className="container-fluid bg">
        <div className="overlay" style={{
          backgroundImage: `linear-gradient(180deg, rgba(103, 103, 103, 0.5) 0%, #25166F 100%), url(${admissions})`,
        }}>
          {/* Add content inside overlay if needed */}
        </div>

        <div className="content">
          <h1>Admissions Requirements</h1>
          <p>Lorem ipsum diolor emet atet  lorem ipsum dilore amet loremb <br /> iosum dilor amet lorem ipsum diilor amet ncdnd dnjsdkkdls <br /> jdslkdsp;mkldkmmckmm lksdls slddslkksd l</p>
        </div>
      </div>

      <div className="welcome-div container">
        <div className="welcome-img">
          <img src={welcome} alt="" />
        </div>
        <div className="welcome-text">
          <h2>Welcome to PNC</h2>
          <p id='text'>We are a premier institution dedicated to nurturing the next generation of healthcare professionals in Ghana. Established with a commitment to excellence, we take pride in providing top-tier education and practical training in the field of nursing. Our faculty comprises experienced healthcare experts who are passionate about shaping compassionate, skilled, and culturally competent nurses.</p>
        </div>
      </div>

      <div className="programs container">
        <h1>Programs</h1>
        <div className="row" style={{marginLeft:'35px'}}>
          <div className="col-md-4">
            <div className="card" style={{width:'350px',height:'275px',borderRadius:'8px'}}>
              <img className="card-img-top" src={programs1} alt="Card-image-cap"  style={{width:'350px',height:'275px'}} />
              <div className="card-body">
                <h5 className="card-title mt-3">Bachelor of Science in Nursing (BSN)</h5>
                <p className="card-text">The BSN program is designed to provide students with a comprehensive education in nursing theory, clinical practice, and healthcare leadership. Graduates are prepared to deliver high-quality care across various healthcare settings..</p>
                <a href="#">Read more <span className="arrow">&rarr;</span></a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" style={{width:'350px',height:'275px',borderRadius:'8px'}}>
              <img className="card-img-top" src={programs2} alt="Card image cap" style={{width:'350px',height:'275px'}}/>
              <div className="card-body">
                <h5 className="card-title mt-3">Master of Science in Nursing (MSN)</h5>
                <p className="card-text">Our MSN program offers advanced training for registered nurses seeking to expand their expertise in specialized areas such as [Specialization]. With a focus on evidence-based practice and leadership, graduates are poised for leadership roles in healthcare.</p>
                <a href="#">Read more <span className="arrow">&rarr;</span></a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" style={{width:'350px',height:'275px',borderRadius:'8px',}}>
                <img className="card-img-top" src={programs2} alt="Card image cap"  style={{width:'350px',height:'275px'}} />          
              <div className="card-body">
                <h5 className="card-title mt-3">Master of Science in Nursing (MSN)</h5>
                <p className="card-text">The DNP program at [College Name] is designed for experienced nurses aspiring to attain the highest level of clinical expertise and leadership in healthcare. Graduates are prepared to lead in clinical practice, healthcare administration, and policy.</p>
                <a href="#">Read more <span className="arrow">&rarr;</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  )
};

export default Body;
