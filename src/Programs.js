import React from "react";
import programs1 from './assets/images/programs1.jpeg';
import programs2 from './assets/images/programs2.jpeg';
import programs3 from './assets/images/programs3.jpeg';

function Programs() {
  return (

    <div className="programs container">
      <h1 style={{ marginTop: '30px' }}>Programs</h1>
      <div className="container" style={{ marginTop: '30px' }}>
        <div className="container programs">
          <div className="programs1 d-flex" style={{ background: 'rgba(244, 216, 103, 1)', width: '1140px', height: '440px', borderRadius: '8px' }}>
            <div style={{ marginRight: '300px', margin: '100px', }}>
            <img src={programs1} alt="" style={{ width: '350px', objectFit: "cover", height: '40vh', borderRadius: '8px', objectPosition: 'center Top' }} />
            </div>
            <div style={{ flex: 1,margin:"50px", fontSize:'15px'  }}>
              <h3>Bachelor of Science in Nursing (BSN)</h3>
              <p  style={{ maxWidth:'600px',maxHeight:"600px"}}>Lorem ipsum diolor emet atet  lorem ipsum dilore amet lorem iosum dilor amet lorem ipsum diilor amet ncdnd dnjsdkkdls jdslkdsp;mkldkmmckmm lksdls slddslkksd lLorem ipsum diolor emet atet  lorem ipsum dilore amet lorem iosum dilor amet lorem ipsumLorem ipsum diolor emet atet  lorem ipsum dilore amet lorem iosum dilor amet lorem ipsum diilor amet ncdnd dnjsdkkdls jdslkdsp;mkldkmmckmm lksdls slddslkksd lLorem ipsum diolor emet atet  lorem ipsum dilore amet lorem iosum dilor amet lorem ipsum diilor amet ncdnd dnjsdkkdls jdslkdsp;mkldkmmckmm lksdls slddslkksd lLorem ipsum diolor emet atet  lorem ipsum dilore amet lorem iosum dilor amet lorem ipsum diilor amet ncdnd dnjsdkkdls jdslkdsp;mkldkmmckmm lksdls slddslkksd l diilor amet ncdnd
                dnjsdkkdls jdslkdsp;mkldkmmckmm lksdls slddslkksd l</p>
            </div>
          </div>

          <div className="programs2 d-flex" style={{ background: 'rgba(225, 220, 248, 1)', width: '1140px', height: '440px', borderRadius: '8px' }}>
             <div style={{ flex: 1,margin:"50px", fontSize:'15px'  }}>
              <h3>Master of Science in Nursing (MSN)</h3>
              <p  style={{ maxWidth:'600px',maxHeight:"600px"}}>Lorem ipsum diolor emet atet  lorem ipsum dilore amet lorem iosum dilor amet lorem ipsum diilor amet ncdnd dnjsdkkdls jdslkdsp;mkldkmmckmm lksdls slddslkksd lLorem ipsum diolor emet atet  lorem ipsum dilore amet lorem iosum dilor amet lorem ipsumLorem ipsum diolor emet atet  lorem ipsum dilore amet lorem iosum dilor amet lorem ipsum diilor amet ncdnd dnjsdkkdls jdslkdsp;mkldkmmckmm lksdls slddslkksd lLorem ipsum diolor emet atet  lorem ipsum dilore amet lorem iosum dilor amet lorem ipsum diilor amet ncdnd dnjsdkkdls jdslkdsp;mkldkmmckmm lksdls slddslkksd lLorem ipsum diolor emet atet  
               lorem ipsum dilore amet lorem iosum dilor amet lorem ipsum diilor amet ncdnd dnjsdkkdls jdslkdsp;mkldkmmckmm lksdls slddslkksd l diilor amet ncdnd dnjsdkkdls jdslkdsp;mkldkmmckmm lksdls slddslkksd l</p>
             </div>
             <div style={{ marginRight: '300px', margin: '100px', }}>
            <img src={programs2} alt="" style={{ width: '350px', objectFit: "cover", height: '40vh', borderRadius: '8px', objectPosition: 'center Top' }} />
            </div>
          </div>

          <div className="programs3 d-flex" style={{ background: 'rgba(51, 51, 51, 1)', width: '1140px', height: '440px', borderRadius: '8px' }}>
            <div style={{ marginRight: '300px', margin: '100px', }}>
            <img src={programs3} alt="" style={{ width: '350px', objectFit: "cover", height: '40vh', borderRadius: '8px', objectPosition: 'center Top' }} />
            </div>
            <div style={{ flex: 1,margin:"50px", fontSize:'15px', color:'white'  }}>
              <h3>Doctor of Nursing Practice (DNP)</h3>
              <p  style={{ maxWidth:'600px',maxHeight:"600px"}}>Lorem ipsum diolor emet atet  lorem ipsum dilore amet lorem iosum dilor amet lorem ipsum diilor amet ncdnd dnjsdkkdls jdslkdsp;mkldkmmckmm lksdls slddslkksd lLorem ipsum diolor emet atet  lorem ipsum dilore amet lorem iosum dilor amet lorem ipsumLorem ipsum diolor emet atet  lorem ipsum dilore amet lorem iosum dilor amet lorem ipsum diilor amet ncdnd dnjsdkkdls jdslkdsp;mkldkmmckmm lksdls slddslkksd lLorem ipsum diolor emet atet  lorem ipsum dilore amet lorem iosum dilor amet lorem ipsum diilor amet ncdnd dnjsdkkdls jdslkdsp;mkldkmmckmm lksdls slddslkksd lLorem ipsum diolor emet atet  lorem ipsum dilore amet lorem iosum dilor amet lorem ipsum diilor amet ncdnd dnjsdkkdls jdslkdsp;mkldkmmckmm lksdls slddslkksd l diilor amet ncdnd
                dnjsdkkdls jdslkdsp;mkldkmmckmm lksdls slddslkksd l</p>
            </div>
          </div>


        </div>
      </div>
    </div>

  )

}

export default Programs