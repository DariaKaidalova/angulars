import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'; // Import RxJs required methods: map and catch
import 'rxjs/add/operator/catch';

import { Exercise } from '../exercises-blocks/exercise.interface';

@Injectable()
export class ExercisesRestService {

  constructor(private _http: Http) { }

  private _exerciseUrl = '/api/v1/exercises';

	get(): Observable<Exercise[]> {
		return this._http.get(this._exerciseUrl)
			.map((res: Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	add(data: Object): Observable<Exercise[]> {
		let dataString = JSON.stringify(data);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers }); 
		console.log('dataString:');
		console.log(dataString);

		return this._http.post(this._exerciseUrl, dataString, options) 
			.map((res:Response) => {res.json()}) 
			.catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
	}

	remove(id:string): Observable<Exercise[]> {
    return this._http.delete(`${this._exerciseUrl}/${id}`) 
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }    
}