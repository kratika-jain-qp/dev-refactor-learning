import { Customer } from "./customer";
import { CustomerEnum } from "./customer.enum";
import { ItemEnums } from "./item.enum";
import { Order } from "./order";

export class OrderManagementSystem {
    static main(): void {
        const customer = new Customer("John Doe", CustomerEnum.VIP);
        const order = new Order(customer);

        order.addItem(ItemEnums.Laptop, 1000);
        order.addItem(ItemEnums.Mouse, 50);
        order.addItem(ItemEnums.Keyboard, 80);

        order.printOrder();

        OrderManagementSystem.generateInvoice(order);
    }

    static generateInvoice(order: Order): void {
        console.log("Generating Invoice...");
        console.log(`Customer: ${order.customer.name}`);
        console.log(`Total: $${order.totalPrice}`);
        console.log(`Discounted Total: $${order.discountedPrice}`);
        console.log(`Items: ${order.items.join(", ")}`);
        console.log("Thank you for shopping with us!");
    }
}
