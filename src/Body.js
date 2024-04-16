import './Body.css';
import admissions from './assets/images/admissions.jpeg';
import welcome from './assets/images/welcome.jpeg';
import programs1 from './assets/images/programs1.jpeg';
import programs2 from './assets/images/programs2.jpeg';
import programs3 from './assets/images/programs3.jpeg';
import gallery1 from './assets/images/gallery1.jpeg';
import gallery2 from './assets/images/gallery2.jpeg';
import gallery3 from './assets/images/gallery3.jpeg';
import gallery4 from './assets/images/gallery4.jpeg';
import news3 from './assets/images/news3.jpeg';
import news4 from './assets/images/news4.jpeg';
import events1 from './assets/images/events1.jpeg';
import events2 from './assets/images/events2.jpeg';




const Body = () => {
  return (
    <div>
        <div className="container-fluid bg">
            <div className="overlay" style={{
              backgroundImage: `linear-gradient(180deg, rgba(103, 103, 103, 0.5) 0%, #25166F 100%), url(${admissions})`,
            }}>
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
                <div className="container">
                  <div className="row justify-content-around">
                    <div className="col-md-4">
                      <div className="card">
                        <img className="card-img-top" src={programs1} alt="Card image cap" />
                        <div className="card-body">
                          <h5 className="card-title">Bachelor of Science in Nursing (BSN)</h5>
                          <p className="card-text">The BSN program is designed to provide students with a comprehensive education in nursing theory, clinical practice, and healthcare leadership. Graduates are prepared to deliver high-quality care across various healthcare settings.</p>
                          <a href="#">Read more</a>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="card">
                        <img className="card-img-top" src={programs2} alt="Card image cap" />
                        <div className="card-body">
                          <h5 className="card-title">Master of Science in Nursing (MSN)</h5>
                          <p className="card-text">Our MSN program offers advanced training for registered nurses seeking to expand their expertise in specialized areas such as [Specialization]. With a focus on evidence-based practice and leadership, graduates are poised for leadership roles in healthcare.</p>
                          <a href="#">Read more</a>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="card">
                        <img className="card-img-top" src={programs1} alt="Card image cap" />
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
        
        <div className="admissions container">
              <h1>Admission Requirements</h1>
                <div className="requirements">
                <div class="row container">
                      <div className="col" >
                          <h3>Bachelor of Science in Nursing (BSN)</h3>
                            <ul>
                              <li>Completion of prerequisite courses in biology, chemistry, and mathematics.</li>
                              <li>Letters of recommendation from teachers or healthcare professionals</li>
                              <li>Personal statement or essay demonstrating passion for nursing and commitment to the field.</li>
                              <li>Successful completion of an entrance examination or standardized test (e.g., SAT, ACT)</li>
                            </ul>
                      </div>
                      <div className="col">
                        
                        <h3>Master of Science in Nursing (MSN)</h3>
                        <ul>
                          <li>Bachelor's degree in nursing or a related field from an accredited institution.</li>
                          <li>Minimum GPA in undergraduate coursework (e.g., 3.0 on a 4.0 scale).</li>
                          <li>Current, active nursing license.</li>
                          <li>Professional resume or curriculum vitae (CV) detailing relevant work experience.</li>
                          <li>Letters of recommendation from nursing professors or professional supervisors</li>
                          <li>Personal statement or essay outlining career goals and objectives in nursing</li>
                        </ul>
                      </div>
                      <div className="col">
                        <h3>Doctor of Nursing Practice (DNP)</h3>
                        <ul>
                          <li>Master's degree in nursing or a related field from an accredited institution.</li>
                          <li>Minimum GPA in graduate coursework (e.g., 3.5 on a 4.0 scale).</li>
                          <li>Current, active nursing license</li>
                          <li>Professional resume or curriculum vitae (CV) highlighting advanced practice experience.</li>
                          <li>Letters of recommendation from healthcare professionals or academic advisors.</li>
                          <li>A written statement of purpose detailing career aspirations and how the DNP program aligns with those goals.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
        </div>

        <div className="gallery container">
            <h1 className="fw-light text-center text-lg-start mt-4 mb-0 container">Gallery</h1>
            <hr className="mt-2 mb-5"/>
            <div className="row text-center text-lg-start">
                <div className="col-lg-3 col-md-4 col-6">
                    <a href="#" className="d-block mb-4 h-100">
                      <img className="img-fluid img-thumbnail" src={gallery1} alt=""/>
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <a href="#" className="d-block mb-4 h-100">
                      <img className="img-fluid img-thumbnail" src={gallery2} alt=""/>
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <a href="#" className="d-block mb-4 h-100">
                      <img className="img-fluid img-thumbnail" src={gallery3} alt=""/>
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <a href="#" className="d-block mb-4 h-100">
                      <img className="img-fluid img-thumbnail" src={gallery1} alt=""/>
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <a href="#" className="d-block mb-4 h-100">
                      <img className="img-fluid img-thumbnail" src={gallery1} alt=""/>
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <a href="#" className="d-block mb-4 h-100">
                      <img className="img-fluid img-thumbnail" src={gallery2} alt=""/>
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <a href="#" className="d-block mb-4 h-100">
                      <img className="img-fluid img-thumbnail" src={gallery3} alt=""/>
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <a href="#" className="d-block mb-4 h-100">
                      <img className="img-fluid img-thumbnail" src={gallery1} alt=""/>
                    </a>
                </div>
                <button type="button" className="btn btn-outline-primary">View All</button>
            </div>
            
        </div>

        <div className="news container">
          <h2>News</h2>
           <div className="news-items container">
              <div className="news-img">
                <img src={news3} alt="" />
              </div>
              <div className="news-text">
                <p>03/10/2024</p>
                <h4>Nursing Faculty Awarded Research Grant for Groundbreaking Study</h4>
                <p>Check as we discuss the crucial role of reliable cell tower construction in ensuring seamless connectivity across Africa.</p>
              </div>
            </div>

          <div className="news-items2 container">
               <div className="news-img">
               <img src={news4} alt="" />
               </div>
               <div className="news-text2">
                <p>03/10/2024</p>
                <h4>Premier Nursing College Hosts Successful Nursing Symposium</h4>
                <p>The annual Nursing Symposium brought together healthcare professionals, students, and experts from across the region to discuss emerging trends and best practices in the field of nursing.</p>
               </div>

          </div>
              <div className="container" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button className="btn btn-outline-primary">View All</button>
            </div>

        </div>

      <div className=' events container'>
        <h2>Events</h2>
        {/* <div className="container" style={{display: 'flex', flexWrap: 'wrap'}}>
    <div className="card" style={{width: '18rem', marginRight: '100px'}}>
        <div className="card-body">
            <h5 className="card-title">Special title treatment1</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
    </div>

    <div className="spacer" style={{flexGrow: '1'}}></div>

    <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
            <h5 className="card-title">Special title treatment2</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
    </div>

    <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
            <h5 className="card-title">Special title treatment3</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
    </div>

    <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
            <h5 className="card-title">Special title treatment4</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        </div>
    </div>
        </div> */}
      </div>


      

       




   </div>
  )
};

export default Body;
