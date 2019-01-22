'use strict';

const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const cc = require('change-case');
const payBase = require('wechatpay-private-sdk');

const PAY_CLASS_NAMES = [
  'AppPay', // APP 支付
  'LitePay', // 小程序支付
  'PubPay', // 公众号支付
  'PubQrPay', // 扫码支付
  'PubScanPay', // 刷卡支付
  'WapPay', // H5 支付
];

module.exports = app => {

  app.beforeStart(async () => {
    const { wechatPay } = app.config || {};
    const payClassNamesSet = new Set(PAY_CLASS_NAMES);
    if (wechatPay.pfx && typeof wechatPay.pfx === 'string') { wechatPay.pfx = fs.readFileSync(path.resolve(__dirname, wechatPay.pfx)); }
    Object.keys(wechatPay).map(key => {
      const className = cc.upperCaseFirst(key);
      if (payClassNamesSet.has(className) && wechatPay[key]) {
        app[key] = new payBase[className](_.pick(wechatPay, [ 'appId', 'key', 'mchId', 'pfx' ]));
      }
    });
  });
};
