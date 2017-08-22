import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'croptext'
})
export class СropTextPipe implements PipeTransform {

	transform(value: string, args: any[]) : any {
		var limit = 10;
		var trail = '...';

		if(args.length > 0) {
			limit = parseInt(args[0], 10);
		}
		if(args.length > 1) {
			trail = args[1];
		}

		var substring = (value.length > limit) ? value.substring(0, limit) + trail : value;

		console.log(args);
		console.log(limit, trail, substring);

		return substring;
	}
}
