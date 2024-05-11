"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RazorPayModule = void 0;
const common_1 = require("@nestjs/common");
const razorpay_service_1 = require("./razorpay.service");
const razorpay_controller_1 = require("./razorpay.controller");
const mongoose_1 = require("@nestjs/mongoose");
const razorpay_model_1 = require("./razorpay.model");
let RazorPayModule = class RazorPayModule {
};
exports.RazorPayModule = RazorPayModule;
exports.RazorPayModule = RazorPayModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Payment', schema: razorpay_model_1.PaymentSchema }]),
        ],
        providers: [razorpay_service_1.RazorPayService],
        controllers: [razorpay_controller_1.RazorPayController],
    })
], RazorPayModule);
//# sourceMappingURL=razorpay.module.js.map