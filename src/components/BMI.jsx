import React, { Fragment } from 'react';
import BmiCalculator from './BmiCalculator';

const BMI = () => {
  return (
    <Fragment>
      <div className="calculator">
        <h3>Body Mass Index Calculator</h3>
        <div className="bmi-results-container">
          <div className="bmi-results">
            <div className="bmi-results-number">
              Body Mass Index (BMI) = 25
            </div>
            <div className={`bmi-category`}>
              Underweight
            </div>
          </div>
        </div>
        <BmiCalculator />
      </div>
    </Fragment>
  )
}

export default BMI;