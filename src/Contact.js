import map from './assets/images/map.png';

const Contact = () => {
    return (
      <div className="contacts container">
      <h2 className="text-center" style={{ paddingTop: '20px' }}>Contact Us</h2>
      <div className="row justify-content-center d-flex ">
          <div className="col-md-6 d-flex justify-content-center align-items-center ">
              <div className="form w-100" style={{ paddingTop: '50px' }}>
                  <form action="" className='w-100'>
                      <div className="mb-3">
                          <label htmlFor="name" className="form-label">Name</label>
                          <input type="text" className="form-control" id="name" style={{ borderRadius: '5px' }} />
                      </div>
                      <div className="mb-3">
                          <label htmlFor="email" className="form-label">Email</label>
                          <input type="email" className="form-control" id="email" style={{ borderRadius: '5px' }} />
                      </div>
                      <div className="mb-3">
                          <label htmlFor="message" className="form-label">Message</label>
                          <textarea className="form-control" id="message" rows="5" style={{ borderRadius: '5px' }}></textarea>
                      </div>
                      <button type="button" className="btn btn-primary btn-sm" style={{ width: '100%' }}>Send Message</button>
                  </form>
              </div>
          </div>
          <div className="col-md-6  d-flex justify-content-center align-items-center ">
              <div className="map w-100" style={{ background: 'rgba(243, 213, 93, 1)', position: 'relative', width: '230px', height: '400px',left: '80px', marginRight:'100px', top: '45px', }}>
                  <div style={{ position: 'absolute', right: '80px', top: '45px', width: '100%' }}>
                      <img src={map} alt="" style={{ height: '320px' }} />
                  </div>
              </div>
          </div>
      </div>
      </div>
  
  
    
    );
  }
  
  export default Contact;