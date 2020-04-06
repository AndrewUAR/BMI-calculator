import React, { Fragment, useState } from 'react';
import BmiCalculator from './BmiCalculator';

const BMI = () => {
  const [bmiValue, setBmiValue] = useState(0);

  return (
    <Fragment>
      <div className="calculator">
        <h3>Body Mass Index Calculator</h3>
        <div className="bmi-results-container">
          <div className="bmi-results">
            <div className="bmi-results-number">
              Body Mass Index (BMI) = {bmiValue}
            </div>
            <div className={`bmi-category`}>
              Underweight
            </div>
          </div>
        </div>
        <BmiCalculator getBmiValue={setBmiValue}/>
      </div>
    </Fragment>
  )
}

export default BMI;