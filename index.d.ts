
declare class Type {
	defined(a: any): boolean;
	int(a: any): boolean;
	number(a: any): boolean;
	float(a: any): boolean;
	string(a: any): boolean;
	object(a: any): boolean;
	bool(a: any): boolean;
	array(a: any): boolean;
	buffer(a: any): boolean;
	func(a: any): boolean;
	function(a: any): boolean;
	instance(a: any, b: any): boolean;
	not(a: any, b: any): boolean
	got(a: any, b: any): boolean;
	default(a: any, b: any): any;
}

declare const _default: Type;
export = _default;
