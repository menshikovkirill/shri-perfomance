import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app'

import '../public/clear.scss';
import Counter from './components/send'

ReactDOM.render(<App />, document.getElementById('root'));

const counter = new Counter();
counter.init('e619695c-f615-410c-95c7-3fb1e50161c2', String(Math.random()).substr(2, 12), 'send test');
counter.setAdditionalParams({
    env: 'production',
    pointer: 'ontouchstart' in window ? 'touch' : 'cursor',
});
counter.send('connect', performance.timing.connectEnd - performance.timing.connectStart);
counter.send('ttfb', performance.timing.responseEnd - performance.timing.requestStart);

let lcp;
const po = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    lcp = lastEntry.renderTime || lastEntry.loadTime;
});
po.observe({type: 'largest-contentful-paint', buffered: true});
addEventListener('visibilitychange', function fn() {
    if (lcp && document.visibilityState === 'hidden') {
    counter.send('lcp', lcp);
    removeEventListener('visibilitychange', fn, true);
    }
}, true);

new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      const delay = entry.processingStart - entry.startTime;
      counter.send('fcp', delay);
    }
  }).observe({type: 'first-input', buffered: true});

  export default counter;