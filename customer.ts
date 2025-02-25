import { CustomerEnum } from "./enums/customer.enum";

export class Customer {
    private readonly name: string;
    private readonly type: CustomerEnum;
    discount: number;

    constructor(name: string, type: CustomerEnum) {
        this.name = name;
        this.type = type;
        this.setDiscount();
    }

    getName(): string {
        return this.name;
    }
        
    setDiscount(): void {
        switch (this.type) {
            case CustomerEnum.REGULAR:
                this.discount = 0.05;
            case CustomerEnum.PREMIUM:
                this.discount = 0.1;
            case CustomerEnum.VIP:
                this.discount = 0.2;
            default:
                this.discount = 0;
        }
    }
}
