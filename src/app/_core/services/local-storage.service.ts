export class LocalStorageService {

    public static save(name: string, item: any): void {
        try {
            localStorage.setItem(name, JSON.stringify(item));
        } catch (e) {
            console.log(e);
        }
    }

    public static get(name: string): any {
        return JSON.parse(localStorage.getItem(name));
    }

    public static remove(name: string): void {
        localStorage.removeItem(name);
    }

    public static removeAll(): void {
        localStorage.clear();
    }
}
