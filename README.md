# egg-plugin-wechat-pay

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-plugin-wechat-pay.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-plugin-wechat-pay
[travis-image]: https://img.shields.io/travis/eggjs/egg-plugin-wechat-pay.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-plugin-wechat-pay
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-plugin-wechat-pay.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-plugin-wechat-pay?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-plugin-wechat-pay.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-plugin-wechat-pay
[snyk-image]: https://snyk.io/test/npm/egg-plugin-wechat-pay/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-plugin-wechat-pay
[download-image]: https://img.shields.io/npm/dm/egg-plugin-wechat-pay.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-plugin-wechat-pay

<!--
Description here.
-->

## Install

```bash
$ npm i egg-plugin-wechat-pay --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.eggPluginWechatPay = {
  enable: true,
  package: 'egg-plugin-wechat-pay',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.eggPluginWechatPay = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->
### 使用方式

- 在config/config.default.js中增加配置

```js
{
    "wechatPay": {
        'key': '',
        'mchId': '',
        'pfx': '', // 允许传Buffer或者证书的本地路径

        // 是否实例化支付业务类 默认false, 只有为true，该实例才能出现在应用类中
        'appPay': {
            appId: ''
        }, // APP 支付
        'litePay': {
            appId: ''
        }, // 小程序支付
        'pubPay': {
            appId: ''
        }, // 公众号支付
        'pubQrPay': {
            appId: ''
        }, // 扫码支付
        'pubScanPay': {
            appId: ''
        }, // 刷卡支付
        'wapPay': {
            appId: ''
        }, // H5 支付
    }
}
```

- 就可以使用 类似 app.appPay 调用实例

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
