import map from './assets/images/map.png';

const Contact = () => {
    return (
        <div className="contacts container">
        <h2>Contact Us</h2>
        <div className="container" style={{display:'flex'}}>
           <div className="form">
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
           <div className="map" >
             <img src={map} alt="" style={{width:'200px',height:'300px'}} />
           </div>
        </div>

    </div>
    );
  }
  
  export default Contact;