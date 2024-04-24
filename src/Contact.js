import map from './assets/images/map.png';

const Contact = () => {
    return (
        <div className="contacts container">
        <h2 style={{paddingTop:'20px'}}>Contact Us</h2>
        <div className="container" style={{display:'flex'}}>
           <div className="form" style={{paddingTop:'50px'}}>
             <form action="">
               <label>Name</label><br />
               <input type="text" style={{width:'400px',height:'40px',borderRadius:'5px'}}/><br />
               <label>Email</label><br />
               <input type="text" style={{width:'400px',height:'40px',borderRadius:'5px'}} /><br />
               <label>Message</label><br />
               <input type="text" style={{width:'400px',height:'150px',borderRadius:'5px'}} /><br />
               <button type="button" class="btn btn-primary btn-sm" style={{width:'400px',height:'40px',borderRadius:'5px'}}>Send Message</button>
           
             </form>
           </div>
           <div className='d-flex'>
           <div className="map" style={{ background: 'rgba(243, 213, 93, 1)', position: 'relative', width: '230px', height: '400px', left:'400px' }}>
            <div className='' style={{position: 'absolute', right:'100px' ,top:'45px'}}>
            <img src={map} alt="" style={{  width: '270px', height: '320px', }} />
            </div>
           </div>

           </div>

        </div>

        </div>
    
    );
  }
  
  export default Contact;