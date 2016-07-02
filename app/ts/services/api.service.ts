import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class api {
	constructor(private http: Http) { }

	getData(url: string) {
		return this.http.get(url).map(response => { return response.json() });
	}
}
