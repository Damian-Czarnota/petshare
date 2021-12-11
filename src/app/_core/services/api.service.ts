import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '@env/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {
    }

    get(path: string, data = {}): Observable<any> {
        return this.http.get(`${environment.API_URL}${path}`, {params: data})
            .pipe(catchError(error => throwError(error)));
    }

    post(path: string, body: object = {}): Observable<any> {
        return this.http.post(
            `${environment.API_URL}${path}`, body
        ).pipe(catchError(error => throwError(error)));
    }

    put(path: string, body: object = {}): Observable<any> {
        return this.http.put(
            `${environment.API_URL}${path}`, body)
            .pipe(catchError(error => throwError(error)));
    }


    delete(path: string, body: object = {}): Observable<any> {
        return this.http.delete(
            `${environment.API_URL}${path}`)
            .pipe(catchError(error => throwError(error)));
    }

    postFormData(path: string, data: object = {}): Observable<any> {
        const formData = new FormData();
        Object.keys(data).forEach(key => {
            formData.append(key, data[key]);
        });
        return this.http.post(
            `${environment.API_URL}${path}`, formData)
            .pipe(catchError(error => throwError(error)));
    }

    patch(path: string, body: object = {}): Observable<any> {
        return this.http.patch(
            `${environment.API_URL}${path}`, body
        ).pipe(catchError(error => throwError(error)));
    }

    getBlob(path: string): Observable<any> {
        return this.http.get(`${environment.API_URL}${path}`, {responseType: 'blob'})
            .pipe(catchError(error => throwError(error)));
    }
}
