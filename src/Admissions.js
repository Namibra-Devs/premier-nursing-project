import React from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk} from '@fortawesome/free-solid-svg-icons';


function Admissions() {
  return (
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
  )
}

export default Admissions