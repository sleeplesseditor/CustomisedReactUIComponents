import React from 'react';
import DatePicker from '../components/UpdatedDatePicker/UpdatedDatePicker';

function DatePickerPage() {

  return (
    <React.Fragment>
        <div className="App">
            <h2>Updated React DatePicker</h2>
            <DatePicker />
        </div>
    </React.Fragment>
  );
}

export default DatePickerPage;