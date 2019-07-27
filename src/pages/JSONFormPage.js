import React from 'react';
import JSONForm from '../components/JSONForm/JSONForm';
import JSONFormTable from '../components/JSONForm/JSONFormTable';

function JSONFormPage() {

  return (
    <React.Fragment>
        <div className="App">
            <h2>Dynamic JSON Generated Form</h2>
            <JSONForm />
            <br />
            <JSONFormTable />
        </div>
    </React.Fragment>
  );
}

export default JSONFormPage;