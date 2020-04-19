import {Http, Headers, RequestMethod, RequestOptions,  RequestOptionsArgs, Response,URLSearchParams} from '@angular/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import * as models from '../../model/models';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class UserResourceApiService {

  protected basePath = 'http://localhost:8080/services';
  public defaultHeaders : Headers = new Headers();
  public url : string = '/users/';

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(protected http: Http, public httpClient: HttpClient) { }


  public searchUsers() : Observable<any> {

      const path = this.basePath + '/users/all-users';

       return this.httpClient.get(path);

  }

  public createUser(userDto: any): Observable<any>{
        let json = JSON.stringify(userDto);

        let params = json;

        const httpOptions = {
              headers: new HttpHeaders({
                'Content-Type':  'application/json'
              })
            };

        return this.httpClient.post(this.basePath + this.url+'add-user', params, httpOptions);
  }

  public getUser(id:number) : Observable<any> {

      const path = this.basePath + '/users/get-user/${id}'
          .replace('${' + 'id' + '}', String(id));

       return this.httpClient.get(path);

  }

  public deleteUser(id:number) : Observable<any> {

      const path = this.basePath + '/users/delete-user/${id}'
          .replace('${' + 'id' + '}', String(id));

       return this.httpClient.delete(path);

  }

  public update(userDto: any): Observable<any>{
        let json = JSON.stringify(userDto);

        let params = json;

        const httpOptions = {
              headers: new HttpHeaders({
                'Content-Type':  'application/json'
              })
            };

        return this.httpClient.post(this.basePath + this.url + 'update', params, httpOptions);
  }

  public getUserForSocialNetwork(userDto:any): Observable<any>{
    let json = JSON.stringify(userDto);

    var params = json;


    const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json'
          })
        };

    return this.httpClient.post(this.basePath + this.url+'social-network',
      params,httpOptions
    );

  }

  public offerVehicle(vehicleDto:any, id:number): Observable<any>{
    let json = JSON.stringify(vehicleDto);

    const path = this.basePath + '/users/offer-vehicle/{id}'
        .replace('${' + 'id' + '}', String(id));

    var params = json;


    const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json'
          })
        };

    return this.httpClient.post(path, params, httpOptions);

  }

  /*
    @POST
    @Path("/offer-vehicle/{id}")
    public UserDto offerVehicle (@PathParam("id") final Long id);
  */

}
