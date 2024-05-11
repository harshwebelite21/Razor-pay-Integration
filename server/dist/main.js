"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = void 0;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const app_config_1 = require("./config/app.config");
const razorpay_1 = __importDefault(require("razorpay"));
const cors_1 = __importDefault(require("cors"));
exports.instance = new razorpay_1.default({
    key_id: app_config_1.appConfig.key_id,
    key_secret: app_config_1.appConfig.key_secret,
});
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, cors_1.default)());
    await app.listen(app_config_1.appConfig.port);
    console.log(`Server is running on port ${app_config_1.appConfig.port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map