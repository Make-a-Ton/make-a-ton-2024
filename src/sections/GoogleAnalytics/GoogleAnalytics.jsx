import React from 'react';
import Script from 'next/script';

const GoogleAnalytics = () => {
  return (
    <React.Fragment>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-6M49GGKGMT"
      />
      <Script id="google-analytics-inline-script" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config',  'G-6M49GGKGMT', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </React.Fragment>
  );
};

export default GoogleAnalytics;
