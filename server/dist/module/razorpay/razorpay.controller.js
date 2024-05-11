"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RazorPayController = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const razorpay_utils_1 = require("razorpay/dist/utils/razorpay-utils");
const app_config_1 = require("../../config/app.config");
const main_1 = require("../../main");
let RazorPayController = class RazorPayController {
    async checkout(res, req) {
        var options = {
            amount: req.body.amount * 100,
            currency: 'INR',
            receipt: 'order_rcptid_11',
        };
        const order = await main_1.instance.orders.create(options);
        console.log(order);
        res.send(order);
    }
    async getKey(res) {
        res.json(app_config_1.appConfig.key_id);
    }
    async verification(res, req) {
        const { razorpay_signature, razorpay_order_id, razorpay_payment_id } = req.body;
        const isPaymentValid = await (0, razorpay_utils_1.validatePaymentVerification)({ order_id: razorpay_order_id, payment_id: razorpay_payment_id }, razorpay_signature, app_config_1.appConfig.key_secret);
        console.log(isPaymentValid);
        if (isPaymentValid) {
            await this.paymentModel.create({
                razorpay_signature,
                razorpay_order_id,
                razorpay_payment_id,
            });
        }
        else {
            throw new common_1.BadRequestException('Payment Failed!');
        }
        res.redirect(`http://localhost:5173/success/${razorpay_payment_id}`);
    }
};
exports.RazorPayController = RazorPayController;
__decorate([
    (0, mongoose_1.InjectModel)('Payment'),
    __metadata("design:type", mongoose_2.Model)
], RazorPayController.prototype, "paymentModel", void 0);
__decorate([
    (0, common_1.Post)('checkout'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RazorPayController.prototype, "checkout", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RazorPayController.prototype, "getKey", null);
__decorate([
    (0, common_1.Post)('verification'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RazorPayController.prototype, "verification", null);
exports.RazorPayController = RazorPayController = __decorate([
    (0, common_1.Controller)('razorpay')
], RazorPayController);
//# sourceMappingURL=razorpay.controller.js.map