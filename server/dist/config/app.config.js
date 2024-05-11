"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOsEnv = exports.appConfig = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.appConfig = {
    mongodbConnectionString: getOsEnv('DB_URL'),
    port: getOsEnv('PORT') || 4000,
    key_id: getOsEnv('RAZORPAY_API_KEY'),
    key_secret: getOsEnv('RAZORPAY_API_SECRET'),
};
function getOsEnv(key) {
    if (typeof process.env[key] === 'undefined') {
        throw Error(`Environment variable ${key} is not set.`);
    }
    return process.env[key] ?? '';
}
exports.getOsEnv = getOsEnv;
//# sourceMappingURL=app.config.js.map