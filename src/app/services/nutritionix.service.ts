import {Injectable} from '@angular/core';
import {catchError, flatMap, interval, map, Observable, of, retryWhen, throwError} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NutritionixService {
  url: string = 'https://nutritionix-api.p.rapidapi.com/v1_1/';
  key: string = '9724afe9e7mshc592bc727615619p12974cjsn555bb3a2dcf1';
  host: string = 'nutritionix-api.p.rapidapi.com';


  constructor(private httpClient: HttpClient) {
  }


  getUPCScan(barcode: string): Observable<any> {
    const params = new HttpParams().set('upc', barcode);
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.key,
      'X-RapidAPI-Host': this.host
    });
    return this.httpClient.get(this.url + 'item', {headers, params})
/*      .pipe(retryWhen(_ => {
        return interval(5000).pipe(
          flatMap(count => count == 2 ? throwError("Request time out") : of(count))
        )
      }))*/
      .pipe(
        map((report: any) => {
          return report
        }),
        catchError((err: Error) => {
            return throwError(err);
          }
        ));
  }
}
