export abstract class BaseResponse {

    constructor() { }

    public async request(method: string, key?: string, value?: any) {
        if (method === 'set') {
            return localStorage.setItem(key, value);
        } else if (method === 'get') {
            return localStorage.getItem(key);
        } else if (method === 'remove') {
            return localStorage.removeItem(key);
        } else if (method === 'clear') {
            return localStorage.clear();
        }
    }
}
