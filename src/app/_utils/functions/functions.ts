import { HttpParams } from '@angular/common/http';

export const sort = (array: any[], property: string, direction: string): any[] => {
    return direction === 'ASC'
        ? array.sort((a, b) => {
            const A = a[property].toString();
            const B = b[property].toString();
            return A.localeCompare(B);
        })
        : array.sort((a, b) => {
            const A = a[property].toString();
            const B = b[property].toString();
            return B.localeCompare(A);
        });
};

export const filter = (array: any[], properties: string[], value: string): any[] => {
    return array.filter((item) =>
        properties.some(key =>
            item[key].toString().toLowerCase().includes(value.toLowerCase()) && item[key]));

};

export const createHttpParams = (form: any): HttpParams => {
    let httpParams = new HttpParams();
    Object.keys(form).forEach(key => {
        if (form[key]) {
            httpParams = httpParams.append(key, form[key]);
        }
    });
    return httpParams;
};

export const calculateMaxWidth = (classes): number => {
    const Windex = classes.indexOf('w');
    if (Windex) {
        return 100 - parseInt(`${classes[Windex + 2]}${classes[Windex + 3]}`, 10);
    } else {
        return 100;
    }
};
