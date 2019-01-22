'use strict';

const mock = require('egg-mock');

describe('test/plugin-wechat-pay.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/plugin-wechat-pay-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, pluginWechatPay')
      .expect(200);
  });
});
