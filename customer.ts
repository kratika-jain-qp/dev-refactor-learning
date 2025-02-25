import { CustomerEnum } from "./enums/customer.enum";

export class Customer {
    name: string;
    type: CustomerEnum;
    discount: number;

    constructor(name: string, type: CustomerEnum) {
        this.name = name;
        this.type = type;
        this.setDiscount();
    }

    setDiscount(): void {
        if (this.type === CustomerEnum.Regular) {
            this.discount = 0.05;
        } else if (this.type === CustomerEnum.Premium) {
            this.discount = 0.1;
        } else if (this.type === CustomerEnum.VIP) {
            this.discount = 0.2;
        } else {
            this.discount = 0;
        }
    }
}
