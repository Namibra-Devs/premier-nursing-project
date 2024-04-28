import React from "react";
import gallery1 from './assets/images/gallery1.jpeg';
import gallery2 from './assets/images/gallery2.jpeg';
import gallery3 from './assets/images/gallery3.jpeg';
import gallery4 from './assets/images/gallery4.jpeg';


function Gallery() {
    return(
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
                <div  className="col-12 text-lg-end">
              <a href="/Gallery"><button type="button" className="btn btn-outline-primary" style={{width:'150px'}}>View All</button></a>
              </div>
            </div>
            
        </div>
    )
    
}
export default Gallery