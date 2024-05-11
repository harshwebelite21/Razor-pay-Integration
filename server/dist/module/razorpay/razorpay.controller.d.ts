import { Response, Request } from 'express';
export declare class RazorPayController {
    private readonly paymentModel;
    checkout(res: Response, req: Request): Promise<void>;
    getKey(res: Response): Promise<void>;
    verification(res: Response, req: Request): Promise<void>;
}
