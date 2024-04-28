import React from "react";
import events1 from './assets/images/events1.jpeg';
import events2 from './assets/images/events2.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt,faClock } from '@fortawesome/free-solid-svg-icons';


function Events() {
    return (
      <div className="events container">
      <div className='container d-flex gap-5 ' style={{marginTop:'40px'}}>
        <h2>Events</h2>
        <div class="raw mb-3 " style={{maxWidth:'540px', marginTop:'100px'}}>
        <div class="row ">
          <div class="col-md-4 ">
            <img src={events1} class="img-fluid rounded-start" alt="..." style={{width:'160px',height:'120px'}} />
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
            <img src={events2} class="img-fluid rounded-start" alt="..." style={{width:'160px',height:'120px'}} />
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
            <img src={events1} class="img-fluid rounded-start" alt="..." style={{width:'160px',height:'120px'}} />
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
    )
}

export default Events