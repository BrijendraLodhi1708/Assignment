import { createElement } from 'lwc';
import Assignment from 'c/assignment';

describe('c-assignment', () => {
    afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });
    
    beforeEach(() => {
    const element = createElement('c-assignment', {
      is: Assignment
    });
    document.body.appendChild(element);
  });

});