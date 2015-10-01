/** @jsx hJSX */

import "babelify/polyfill";

import Cycle from '@cycle/core';
import {makeDOMDriver, hJSX} from '@cycle/dom';

function main(drivers) {
  return {
    DOM: drivers.DOM
      .select('input')
      .events('click')
      .map(e => e.target.checked)
      .startWith(false)
      .map(toggled =>
        <div>
          <input type="checkbox" /> Toggle me yo
          <p>{toggled ? 'ON' : 'off'}</p>
        </div>
      )
  };
}

let drivers = {
  DOM: makeDOMDriver('#app')
}

Cycle.run(main, drivers);
