import React from 'react';

function BrowserDetectionPage() {
    // Opera 8.0+
    // const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    const isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    // const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

    // Internet Explorer 6-11
    const isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    const isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1 - 71
    const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

    // Blink engine detection
    // const isBlink = (isChrome || isOpera) && !!window.CSS;

    const content = () => {
        if(isChrome){
            return (
                <div>Chrome</div>
            )
        } else if(isIE) {
            return (
                <div>Internet Explorer Not Supported</div>
            )
        } else if(isFirefox) {
            return (
                <div>Firefox</div>
            )
        } else if(isEdge) {
            return (
                <div>Edge</div>
            )
        }
    }

  return (
    <React.Fragment>
        <div className="App">
            <h2>Browser Detection</h2>
            <b>Browser Detected:</b> {content()}
        </div>
    </React.Fragment>
  );
}

export default BrowserDetectionPage;