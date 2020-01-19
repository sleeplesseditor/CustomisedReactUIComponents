import React, { useState } from 'react';
import CollapsibleContent from '../components/CollapsibleContent/CollapsibleContent';

function CollapsibleContentPage() {
  const [content, contentSetter] = useState([]);  

  const loadData = () => {
      const elements = [];
      for(let i =0; i < Math.random()*30; i++) {
        elements.push(<div key={i} className="collapsible-container__element">Hidden Element</div>);
      }
      contentSetter(elements);
  }

  return (
    <React.Fragment>
        <div className="App">
            <h2>Collapsible Content</h2>
            <button 
              onClick={() => loadData()}
              className="collapsible-container__button"
          >
              Load Data
          </button>
            <CollapsibleContent 
              content={content}
            />
        </div>
    </React.Fragment>
  );
}

export default CollapsibleContentPage;