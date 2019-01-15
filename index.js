
class Type {

	defined(a) {
		return typeof (a) !== 'undefined' && a !== null;
	}

	int(a) {
		return !isNaN(a) && a !== '' && (typeof (a) === 'number' || typeof (a) === 'string') && Number(a) === a;
	}

	number(a) {
		return this.int(a);
	}

	float(a) {
		return this.int(a);
	}

	string(a) {
		return typeof (a) === 'string';
	}

	object(a) {
		return typeof (a) === 'object' && a !== null;
	}

	bool(a) {
		return typeof (a) === 'boolean';
	}

	array(a) {
		return typeof (a) === 'object' && Array.isArray(a);
	}

	func(a) {
		return typeof (a) === 'function';
	}

	function(a) {
		return this.func(a);
	}

	instance(a, b) {
		if (this.object(a) && this.func(b)) {
			try {
				return (a instanceof b);
			} catch(e) {
				return false;
			}
		}
		return false;
	}

	not(a, b) {
		if (this.array(b)) {
			for (let i in b) {
				if (b[i] === a) {
					return false;
				}
			}
			return true;
		}
		return a !== b;
	}

	got(a, b) {
		if (this.object(a)) {
			let c = 0, found = [];
			for (let i in a) {
				if (!this.not((this.array(a)) ? a[i] : i, b)) {
					c += 1;
					found.push((this.array(a)) ? a[i] : i);
				}
			}
			return c === b.length;
		}
		return !this.not(a, b);
	}

	default(a, b) {
		return this.defined(a) ? a : b;
	}

}

module.exports = new Type();
