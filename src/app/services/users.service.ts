import {User} from '../models/User.models';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',

    })
};
@Injectable({providedIn: 'root'})
export class UserService {

    private headers = new HttpHeaders(
        {
            'Content-Type':  'application/x-www-form-urlencoded',
            Accept: '*/*',
        }
    );

constructor(private httpClient: HttpClient) {
}
  registerUser( user: any) {
    return  this.httpClient.post('http://localhost:3000/users/', user , httpOptions )

  }

    signInUser( user: any) {
        return  this.httpClient.post('http://localhost:3000/users/login', user , httpOptions )
    }
    getUidUser(user: any) {
        return  this.httpClient.get('http://localhost:3000/users/Uid/' + user)
    }
    getUsers() {
        return  this.httpClient.get('http://localhost:3000/users/' )
    }
    getSetupIds(user: any) {

        return this.httpClient.get('http://localhost:3000/getIds/' + user )
    }
    getCordinats(user: any) {
    return this.httpClient.get('http://localhost:3000/getlatlen/' + user)
    }

    getCordinatss(user: any) {
        return this.httpClient.get('http://localhost:3000/getflooretts/' + user)
    }
}
