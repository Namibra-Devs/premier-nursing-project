/* eslint-disable jsx-a11y/anchor-is-valid */
import './Home.css';
import admissions from './assets/images/admissions.jpeg';
import welcome from './assets/images/welcome.jpeg';
import programs1 from './assets/images/programs1.jpeg';
import programs2 from './assets/images/programs2.jpeg';
import gallery1 from './assets/images/gallery1.jpeg';
import gallery2 from './assets/images/gallery2.jpeg';
import gallery3 from './assets/images/gallery3.jpeg';
import news3 from './assets/images/news3.jpeg';
import news4 from './assets/images/news4.jpeg';
import events1 from './assets/images/events1.jpeg';
import events2 from './assets/images/events2.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk,faCalendarAlt,faClock,faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';



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
      <img  style={{height:'90vh', objectFit:'cover'}} src={admissions} class="d-block w-100" alt=''/>
        <div class="carousel-caption d-md-block">
          <h3>Admission Requirements</h3>
          <p>Lorem ipsum diolor emet atet  lorem ipsum dilore amet lorem iosum dilor amet lorem ipsum diilor amet ncdnd dnjsdkkdls jdslkdsp;mkldkmmckmm lksdls slddslkksd l</p>
        </div>
      </div>
      <div class="carousel-item h-25">
        <img style={{height:'90vh', objectFit:'cover'}} src={admissions} class="d-block w-100" alt=''/>
        <div class="carousel-caption d-md-block">
          <h3>Admission Requirements</h3>
          <p>Lorem ipsum diolor emet atet  lorem ipsum dilore amet lorem iosum dilor amet lorem ipsum diilor amet ncdnd dnjsdkkdls jdslkdsp;mkldkmmckmm lksdls slddslkksd l</p>
        </div>
      </div>
      <div class="carousel-item h-25">
        <img  style={{height:'90vh', objectFit:'cover'}} src={admissions} class="d-block w-100" alt=''/>
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
                      <img src={welcome}  className='w-100' alt=''/>
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
                        <img className="card-img-top img-fluid" src={programs1} alt="Card-cap" style={{height:'50vh'}} />
                        <div className="card-body">
                          <h5 className="card-title">Bachelor of Science in Nursing (BSN)</h5>
                          <p className="card-text">The BSN program is designed to provide students with a comprehensive education in nursing theory, clinical practice, and healthcare leadership. Graduates are prepared to deliver high-quality care across various healthcare settings.</p>
                          <a href="/Programs" style={{textDecoration:'none',color:'black'}}>Read more<FontAwesomeIcon icon={faLongArrowRight} style={{marginLeft:'5px'}} /></a>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="card" data-aos="fade-down" >
                        <img className="card-img-top img-fluid" src={programs2} alt="Card-cap" style={{height:'50vh'}} />
                        <div className="card-body">
                          <h5 className="card-title">Master of Science in Nursing (MSN)</h5>
                          <p className="card-text">Our MSN program offers advanced training for registered nurses seeking to expand their expertise in specialized areas such as [Specialization]. With a focus on evidence-based practice and leadership, graduates are poised for leadership roles in healthcare.</p>
                          <a href="/Programs" style={{textDecoration:'none',color:'black'}}>Read more<FontAwesomeIcon icon={faLongArrowRight} style={{marginLeft:'5px'}} /></a>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="card" data-aos="fade-left">
                        <img className="card-img-top img-fluid" src={programs1} alt="Card-cap" style={{height:'50vh'}} />
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

        <div className="admissions container">
          <h1 style={{marginTop:'30px'}}>Admission Requirements</h1>
            <div className="requirements">
              <div class="row container " style={{marginTop:'30px'}}>
                  <div className="col-md-4" >
                      <FontAwesomeIcon icon={faAsterisk} style={{color: 'rgba(180, 131, 2, 1)',backgroundColor:'rgba(250, 239, 194, 1)', padding:'10px',borderRadius:'5px'}} />
                      <h3>Bachelor of Science in Nursing (BSN)</h3>
                        <ul>
                          <li>Completion of prerequisite courses in biology, chemistry, and mathematics.</li>
                          <li>Letters of recommendation from teachers or healthcare professionals</li>
                          <li>Personal statement or essay demonstrating passion for nursing and commitment to the field.</li>
                          <li>Successful completion of an entrance examination or standardized test (e.g., SAT, ACT)</li>
                        </ul>
                  </div>
                  <div className="col-md-4">
                    <FontAwesomeIcon icon={faAsterisk} style={{color: 'rgba(37, 22, 111, 1)',backgroundColor:'rgba(233, 230, 248, 1)',padding:'10px',borderRadius:'5px'}}/>
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
                  <div className="col-md-4">
                    <FontAwesomeIcon icon={faAsterisk} style={{color: 'rgba(2, 136, 55, 1)',backgroundColor: 'rgba(223, 242, 231, 1)',padding:'10px',borderRadius:'5px'}}/>
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
                    <a className="d-block mb-4 h-100" href="">
                      <img className="img-fluid img-thumbnail" src={gallery1} alt='' />
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <a className="d-block mb-4 h-100" href="">
                      <img className="img-fluid img-thumbnail" src={gallery2} alt='' />
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <a className="d-block mb-4 h-100" href="">
                      <img className="img-fluid img-thumbnail" src={gallery3} alt='' />
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <a className="d-block mb-4 h-100" href="">
                      <img className="img-fluid img-thumbnail" src={gallery1} alt='' />
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <a className="d-block mb-4 h-100">
                      <img className="img-fluid img-thumbnail" src={gallery1} alt='' />
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <a className="d-block mb-4 h-100" href="">
                      <img className="img-fluid img-thumbnail" src={gallery2} alt='' />
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <a className="d-block mb-4 h-100" href="">
                      <img className="img-fluid img-thumbnail" src={gallery3} alt=''/>
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <a className="d-block mb-4 h-100" href="">
                      <img className="img-fluid img-thumbnail" src={gallery1}alt='' />
                    </a>
                </div>
                <div  className="col-12 text-lg-end">
              <a href="/Gallery"><button type="button" className="btn btn-outline-primary" style={{width:'150px'}}>View All</button></a>
              </div>
            </div>
            
        </div>
        
        <div class="news container">
      <h2>News</h2>
    
      <div class="news-div container h-50">
        <div class="row justify-content-center"data-aos="fade-right">
            <div class="col-lg-6 col-md-6 col-sm-12 mb-4 ">
                <div class="welcome-img" >
                    <img src={news3}  className='w-75' alt='' />
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
     
    
    <div class="news-div container h-50">
        <div class="row justify-content-center"data-aos="fade-left">
            <div class="col-lg-6 col-md-6 col-sm-12 mb-4">
                <div class="welcome-img">
                    <img src={news4} className='w-75' alt='' />
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
   
        <div className="events container">
      <div className='container d-flex gap-5 ' style={{marginTop:'40px'}}>
        <h2>Events</h2>
        <div class="raw mb-3 " style={{maxWidth:'540px', marginTop:'100px'}}>
        <div class="row ">
          <div class="col-md-4 ">
            <img src={events1} class="img-fluid rounded-start" style={{width:'160px',height:'120px'}} alt=''/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Healthcare Innovation Summit</h5>
              <p><FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '5px' }}/>25th February, 2023</p>
              <p><FontAwesomeIcon icon={faClock} style={{ marginRight: '5px' }}/>10:00am</p>
              <p><FontAwesomeIcon icon={faClock} style={{ marginRight: '5px' }}/>School Auditorium, Tamale, Ghana</p>
            
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-4">
            <img src={events2} class="img-fluid rounded-start"  style={{width:'160px',height:'120px'}} alt=''/>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Alumni Networking Mixer</h5>
              <p><FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '5px' }}/>26th February, 2023</p>
              <p><FontAwesomeIcon icon={faClock} style={{ marginRight: '5px' }}/>10:00am</p>
              <p><FontAwesomeIcon icon={faClock} style={{ marginRight: '5px' }}/>School Auditorium, Tamale, Ghana</p>
              
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-4">
            <img src={events1} class="img-fluid rounded-start"  style={{width:'160px',height:'120px'}} alt='' />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">URL Shortner</h5>
              <p><FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '5px' }}/>25th February, 2023</p>
              <p><FontAwesomeIcon icon={faClock} style={{ marginRight: '5px' }}/>10:00am</p>
              <p><FontAwesomeIcon icon={faClock} style={{ marginRight: '5px' }}/>School Auditorium, Tamale, Ghana</p>
            
            </div>
          </div>
        </div>
        </div>
        <div class="row mt-5  ">
        <div class="col-md-8 w-100 d-flex justify-content-center " style={{width: '100vh', height:'40vh'}}>
<div class="card-body text-center" style={{background: "rgba(195, 185, 241, 1)", borderRadius: "8px", width: "50vh "}}>
    <p class="card-text text-center" style={{paddingTop: "50px"}}>Get a copy of the <br /> semester/sessional <br /> calendar</p>
    <button type="button" class="btn btn-primary w-75">Download/View</button>
</div> 
</div>

        </div>
        
      </div>
      <div  className="col-12 text-lg-end">
              <a href="/Events"><button type="button" className="btn btn-outline-primary" style={{width:'150px'}}>View All</button></a>
      </div>
       </div>
     
  </div>
  )
};

export default Home;