/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// @flow

import * as React from 'react';
import {Tab, Tabs} from '../index.js';

export default function Scenario() {
  const [activeTabKey, setActiveTabKey] = React.useState(1);
  return (
    <React.Fragment>
      <input id="first-focus" type="text" />
      <Tabs
        activeTabKey={activeTabKey}
        onSelect={({selectedTabKey}) => setActiveTabKey(selectedTabKey)}
      >
        <Tab title="Robot">nada</Tab>
        <Tab title="Monster">
          <input id="tab-content" type="text" />
        </Tab>
        <Tab title="Watermelon">nada</Tab>
      </Tabs>
    </React.Fragment>
  );
}
