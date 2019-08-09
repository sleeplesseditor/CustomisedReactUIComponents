import React from 'react';
// import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll';
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScrollHooks';
import MY_ENDLESS_LIST from '../components/InfiniteScroll/Constants';

function InfiniteScrollPage() {

  return (
    <React.Fragment>
        <div className="infinite-scroll-container">
            <h2>Infinite Scroll</h2>
              <InfiniteScroll 
                  list={MY_ENDLESS_LIST} 
                  height={195}
              />
        </div>
    </React.Fragment>
  );
}

export default InfiniteScrollPage;