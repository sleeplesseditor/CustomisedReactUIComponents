import React from 'react';
import OrientationButton from '../components/OrientationButton/OrientationButton';

function DatePickerPage() {

  return (
    <React.Fragment>
        <div className="App">
            <h2>Orientation Change Button</h2>
            <OrientationButton />
        </div>
    </React.Fragment>
  );
}

export default DatePickerPage;