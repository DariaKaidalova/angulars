import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'croptext'
})
export class СropTextPipe implements PipeTransform {

	transform(value: string, number:any, str:any) : any {
		var limit = 10;
		var trail = '...';

		if(number !== undefined) {
			limit = parseInt(number, 10);
		}
		if(str !== undefined) {
			trail = str;
		}

		var substring = (value.length > limit) ? value.substring(0, limit) + trail : value;

		return substring;
	}
}
