import { Component } from '@angular/core';

import * as X2JS from 'x2js';

@Component({
  selector: 'sample-component',
  template: `<h1>Sample component</h1>
  json : 
  <pre>{{json | json}}</pre>

  xml :
  <pre>{{xml}}</pre>
  `
})
export class SampleComponent {

  public json = {
    test: 1,
  };

  public xml;

  constructor() {
    const x2js = new X2JS();

    this.xml = x2js.js2xml(this.json);
  }

}
