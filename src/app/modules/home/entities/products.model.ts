export class Product {
    id: number;
    title: string;
    price: string;
    url: string
    description: string;
    isDisplay: boolean;
    constructor(data?: Product) {
        if (data)  {
            this.id = data.id || null;
            this.title = data.title || null;
            this.price = data.price || null;
            this.url = data.url || null;
            this.description = data.description || null;
            this.isDisplay = data.isDisplay || null;
        }
    }
}