import {Injectable} from '@angular/core';

@Injectable()
export class Utils {
	constructor() { }

	getDataType(obj: any) {
		return ({}).toString.call(obj).toLowerCase();
	}

	isNullUndefined(val: any, validateZeroNaN?: Boolean) {
		let isNull: Boolean = false,
			type = this.getDataType(val);

		switch (type) {
			case '[object array]':
				if (val.length === 0) {
					isNull = true;
				}
				break;

			case '[object object]':
				if (Object.keys(val).length === 0) {
					isNull = true;
				}
				break;

			default:
				if (typeof (val) === "undefined" || val === null || val === "" || val === "null" || val === "undefined") {
					isNull = true;
				} else if (validateZeroNaN && (val === 0 || isNaN(val))) {
					isNull = true;
				}
		}
		return isNull;
	}

	getObject(obj: Object, key: string) {
		key = key.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
		key = key.replace(/^\./, '');           // strip a leading dot
		var a = key.split('.');
		for (var i = 0, n = a.length; i < n; ++i) {
			var k = a[i];
			if (k in obj) {
				obj = obj[k];
			} else {
				return;
			}
		}
		return obj;
	}

	sortArrayObject(key: string, data: any[], direction?: any) {
		data.sort((a, b) => {
			let aData = this.getObject(a, key),
				bData = this.getObject(b, key);

			if (aData === bData) {
				return 0;
			}
			else if (aData > bData) {
				return direction;
			}
			else {
				return -direction;
			}
		});
	}

	log(...msg: any[]) {
		console.log.apply(console, arguments);
	}
}
