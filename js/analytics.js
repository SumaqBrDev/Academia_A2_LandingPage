/**
 * Basic GA4 / Google Tag Manager Boilerplate
 * Add your tracking ID below and load this script asynchronously.
 */
(function() {
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with actual ID

  // Avoid loading if ID is not set
  if (GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') return;

  // Create script element
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
})();
