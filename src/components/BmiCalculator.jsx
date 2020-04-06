import React, { Fragment } from 'react';
import FormInput from './FormInput';

const BmiCalculator = () => {

  const onChangeInput = e => {

  }


  return (
    <Fragment>
      <div className="bmi-inputs">
        <div className="inputs-fields">
          <div>
            <span className="label-unit">Unit</span>
            <div className="unit">
              <select 
                name="unit" 
                value=""
                className="form-control form-control-sm"
              >
                <option value="Metric">Metric</option>
                <option value="Imperial">Imperial</option>
              </select>
            </div>
          </div>
          <FormInput 
            type="text" 
            name="heightCount" 
            title={`Height (cm)`} 
            value="" 
            onChange={onChangeInput}
          />
          <FormInput 
            type="text" 
            name="inchesCount" 
            title={` (in)`} 
            value="" 
            onChange={onChangeInput}
          />
          <FormInput 
            type="text" 
            name="weightCount" 
            title={`Weight (kg)`} 
            value="" 
            onChange={onChangeInput}
          />
        </div>
        <button className="button" type="submit">Reset</button>
      </div>
    </Fragment>
  )
}

export default BmiCalculator;


