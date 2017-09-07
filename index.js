const r = require('rox-browser');
import Rox from 'rox-browser';
import React from 'react';
import ReactDOM from 'react-dom';
import config from './configPresets';

import DemoContainerView from './demoContainerView';
import DemoContainer from './demoContainer';

Rox.register('DemoApp', DemoContainer);
Rox.register('AnotherContainer', {
  someFlag: new Rox.Flag()
});


const syncHandler = () => {
  document.querySelector('#uitrigger').addEventListener('click', () => Rox.showOverrides('top right'))
  console.log(DemoContainer.disabledFlag.isEnabled())
  if (DemoContainer.sayHello.isEnabled()) {
    ReactDOM.render(
      <div>
        <h1>Hello, ROX!</h1>
        <DemoContainerView />
      </div>,
      document.getElementById('root')
    );
  }
};

const options = {
  version: '3.0.0',
  debugLevel: 'verbose',
  configuration: config.LOCAL,
  syncCompletionHandler:syncHandler
};

Rox.setup('59955c98685136eb6e321087', options);

