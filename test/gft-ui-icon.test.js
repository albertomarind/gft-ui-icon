import {
  html,
  fixture,
  expect
} from '@open-wc/testing';

import '../gft-ui-icon.js';

describe('GftUiIcon', () => {

  it('sets src attribute', async () => {
    const el = await fixture(html `<gft-ui-icon src="imagePath"></gft-ui-icon>`);
    expect(el.src).to.equal('imagePath');
  });

  it('if src attribute is not setted ', async () => {
    const el = await fixture(html `<gft-ui-icon></gft-ui-icon>`);
    expect(el.src).to.be.an('undefined');
  });

  it('veryfy icon string showed inside lightdom', async () => {
    const el = await fixture(html `<gft-ui-icon>
      accessible_forward
    </gft-ui-icon>`);
    expect(el).lightDom.to.equal('accessible_forward');
  });

});
