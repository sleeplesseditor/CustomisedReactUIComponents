import React from 'react';
import JSONForm from '../components/JSONForm/JSONForm';

function JSONFormPage() {

  return (
    <React.Fragment>
        <div className="App">
            <h2>Dynamic JSON Generated Form</h2>
            <JSONForm />
        </div>
    </React.Fragment>
  );
}

export default JSONFormPage;