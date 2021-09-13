import React from 'react';
import PropTypes from 'prop-types';

function QuestionInput({moduleName, setStateFunction, stateValueToUpdate, apiObject, confirmChoiceFunction, toggleValue, prevToggle}) {

  const MODULE_NAME = moduleName;
    
    const mappedOptions = apiObject.map(option => {
      return <option key={option.name} value={option.name} >{option.name}</option>;
    });

  // ------ console logs --------
  // console.log(MODULE_NAME, 'dropdown selected with a value of', stateValueToUpdate);
  // stateValueToUpdate ? console.log(moduleName, 'has been updated with ', stateValueToUpdate): console.log(moduleName, 'awaiting selection');
  // console.log('apiObject for ', moduleName, apiObject);
  // console.log('toggleValue for ', moduleName, toggleValue);
  // console.log(moduleName, 'toggleValue.prevQuestion', toggleValue);

  return (
    <div className={prevToggle ? `${MODULE_NAME} questionSelector` : `${MODULE_NAME} hidden`}>
      <label htmlFor={MODULE_NAME}>Select a {MODULE_NAME}</label>
      <select name={MODULE_NAME} id={MODULE_NAME} onChange={e => setStateFunction(e.target.value)} disabled={toggleValue ? true : false} >
        {MODULE_NAME}
        <option key="default" value="" >select</option>
        {mappedOptions}
      </select>
      <button onClick={() => confirmChoiceFunction(stateValueToUpdate)} disabled={toggleValue ? true : false} >Confirm</button>
    </div>
  )
};

QuestionInput.propTypes = {
  moduleName: PropTypes.string.isRequired,
  setStateFunction: PropTypes.func.isRequired,
  stateValueToUpdate: PropTypes.string.isRequired,
  confirmChoiceFunction: PropTypes.func.isRequired,
  toggleValue: PropTypes.bool,
  prevToggle: PropTypes.bool,
};

QuestionInput.defaultProps = {
  prevToggle: true,
};

export default QuestionInput;