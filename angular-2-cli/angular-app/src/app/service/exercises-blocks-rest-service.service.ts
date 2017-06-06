import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Exercise } from '../exercises-blocks/exercise.interface';
import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ExercisesRestService {

  constructor(private _http: Http) { }

  private _exerciseUrl = '/api/v1/exercises';

	get() : Observable<Exercise[]> {
		return this._http.get(this._exerciseUrl)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
}
