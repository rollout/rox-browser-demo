import React from 'react';
import DemoContainer from './demoContainer';

export default function RoxConfig() {
  return (
    <div>
      <ul>
        <li
          style={{
            color: DemoContainer.textColor.getValue()
          }}
        >
          This text color is controlled by "somenamespace.textColor" remote config
        </li>
        <li
          style={{
            color: DemoContainer.colorsVariant.getValue()
          }}
        >
          This text color is controlled by "DemoApp.colorsVariant" variant
        </li>
      </ul>
    </div>
  );
}