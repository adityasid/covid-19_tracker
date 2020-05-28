import React from 'react';
import ReactGA from 'react-ga';


function initializeAnalytics(){
    ReactGA.initialize('UA-153534628-4', {
      gaOptions: {
        siteSpeedSampleRate: 100
      }
    });
    ReactGA.pageview(window.location.pathname + window.location.search);
}


function GoogleAnalytics(props) {
    return (
		<div>
			{initializeAnalytics()}
		</div>
    );
  }

export default GoogleAnalytics;