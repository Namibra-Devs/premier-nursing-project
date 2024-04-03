import './Body.css';
import admissions from './assets/images/admissions.jpeg';

const Body = () => {
  return (
    <div className="body">
      <div className="container-fluid bg">
        <div className="overlay" style={{
          backgroundImage: `url(${admissions})`,
        }}></div>
        <div className="content">
          <h1>Admissions Requirements</h1>
        </div>
      </div>
    </div>
  );
}

export default Body;




   



      
