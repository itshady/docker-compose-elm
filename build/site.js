(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}




var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log = F2(function(tag, value)
{
	return value;
});

var _Debug_log_UNUSED = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString(value)
{
	return '<internals>';
}

function _Debug_toString_UNUSED(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File === 'function' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.cP.aE === region.c4.aE)
	{
		return 'on line ' + region.cP.aE;
	}
	return 'on lines ' + region.cP.aE + ' through ' + region.c4.aE;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**_UNUSED/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (typeof x.$ === 'undefined')
	//*/
	/**_UNUSED/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0 = 0;
var _Utils_Tuple0_UNUSED = { $: '#0' };

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2_UNUSED(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3_UNUSED(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr(c) { return c; }
function _Utils_chr_UNUSED(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil = { $: 0 };
var _List_Nil_UNUSED = { $: '[]' };

function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons_UNUSED(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**_UNUSED/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList === 'function' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
function _Json_unwrap_UNUSED(value) { return value.a; }

function _Json_wrap(value) { return value; }
function _Json_unwrap(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.dU,
		impl.d4,
		impl.d0,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**/
	var node = args['node'];
	//*/
	/**_UNUSED/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		L: func(record.L),
		cR: record.cR,
		cK: record.cK
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.L;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.cR;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.cK) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.dU,
		impl.d4,
		impl.d0,
		function(sendToApp, initialModel) {
			var view = impl.d5;
			/**/
			var domNode = args['node'];
			//*/
			/**_UNUSED/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.dU,
		impl.d4,
		impl.d0,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.cN && impl.cN(sendToApp)
			var view = impl.d5;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.dE);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.d3) && (_VirtualDom_doc.title = title = doc.d3);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.dV;
	var onUrlRequest = impl.dW;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		cN: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.dp === next.dp
							&& curr.c7 === next.c7
							&& curr.dl.a === next.dl.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		dU: function(flags)
		{
			return A3(impl.dU, flags, _Browser_getUrl(), key);
		},
		d5: impl.d5,
		d4: impl.d4,
		d0: impl.d0
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { dR: 'hidden', dF: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { dR: 'mozHidden', dF: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { dR: 'msHidden', dF: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { dR: 'webkitHidden', dF: 'webkitvisibilitychange' }
		: { dR: 'hidden', dF: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		du: _Browser_getScene(),
		dC: {
			cq: _Browser_window.pageXOffset,
			cr: _Browser_window.pageYOffset,
			d6: _Browser_doc.documentElement.clientWidth,
			dP: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		d6: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		dP: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			du: {
				d6: node.scrollWidth,
				dP: node.scrollHeight
			},
			dC: {
				cq: node.scrollLeft,
				cr: node.scrollTop,
				d6: node.clientWidth,
				dP: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			du: _Browser_getScene(),
			dC: {
				cq: x,
				cr: y,
				d6: _Browser_doc.documentElement.clientWidth,
				dP: _Browser_doc.documentElement.clientHeight
			},
			dI: {
				cq: x + rect.left,
				cr: y + rect.top,
				d6: rect.width,
				dP: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}


function _Url_percentEncode(string)
{
	return encodeURIComponent(string);
}

function _Url_percentDecode(string)
{
	try
	{
		return $elm$core$Maybe$Just(decodeURIComponent(string));
	}
	catch (e)
	{
		return $elm$core$Maybe$Nothing;
	}
}


function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2($elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = $elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = $elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}
var $author$project$Model$ClickedLink = function (a) {
	return {$: 1, a: a};
};
var $author$project$Model$UrlChange = function (a) {
	return {$: 0, a: a};
};
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === -2) {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = 1;
var $elm$core$Basics$GT = 2;
var $elm$core$Basics$LT = 0;
var $elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var $elm$core$Basics$False = 1;
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Maybe$Nothing = {$: 1};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 1) {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 2:
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.c) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.e),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.e);
		} else {
			var treeLen = builder.c * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.f) : builder.f;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.c);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.e) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.e);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{f: nodeList, c: (len / $elm$core$Array$branchFactor) | 0, e: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = 0;
var $elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 0:
			return 0;
		case 1:
			return 1;
		case 2:
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 1, a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = $elm$core$Basics$identity;
var $elm$url$Url$Http = 0;
var $elm$url$Url$Https = 1;
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {c6: fragment, c7: host, dZ: path, dl: port_, dp: protocol, dq: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 1) {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		0,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		1,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = $elm$core$Basics$identity;
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return 0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0;
		return A2($elm$core$Task$map, tagger, task);
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			A2($elm$core$Task$map, toMessage, task));
	});
var $elm$browser$Browser$application = _Browser_application;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $author$project$Model$CalendarMsg = function (a) {
	return {$: 4, a: a};
};
var $author$project$Model$CampsMsg = function (a) {
	return {$: 3, a: a};
};
var $author$project$Model$Home = {$: 0};
var $author$project$Model$LessonsMsg = function (a) {
	return {$: 5, a: a};
};
var $author$project$Model$NavMsg = function (a) {
	return {$: 2, a: a};
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $rundis$elm_bootstrap$Bootstrap$Modal$Hide = 3;
var $rundis$elm_bootstrap$Bootstrap$Modal$hidden = 3;
var $author$project$CalendarGSVG$WidgetMsg = function (a) {
	return {$: 0, a: a};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$Widget$WidgetResize = $elm$core$Basics$identity;
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$core$Task$onError = _Scheduler_onError;
var $elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return $elm$core$Task$command(
			A2(
				$elm$core$Task$onError,
				A2(
					$elm$core$Basics$composeL,
					A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
					$elm$core$Result$Err),
				A2(
					$elm$core$Task$andThen,
					A2(
						$elm$core$Basics$composeL,
						A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
						$elm$core$Result$Ok),
					task)));
	});
var $elm$browser$Browser$Dom$getViewportOf = _Browser_getViewportOf;
var $MacCASOutreach$graphicsvg$GraphicSVG$Widget$getContainerSize = function (id) {
	return A2(
		$elm$core$Task$attempt,
		function (rvp) {
			if (!rvp.$) {
				var vp = rvp.a;
				return $elm$core$Maybe$Just(
					_Utils_Tuple2(vp.dC.d6, vp.dC.dP));
			} else {
				return $elm$core$Maybe$Just(
					_Utils_Tuple2(0, 0));
			}
		},
		$elm$browser$Browser$Dom$getViewportOf(id));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$Widget$init = F3(
	function (w, h, id) {
		return _Utils_Tuple2(
			{ad: h, ae: w, bq: id, co: 0, cp: 0},
			$MacCASOutreach$graphicsvg$GraphicSVG$Widget$getContainerSize(id));
	});
var $elm$core$Platform$Cmd$map = _Platform_map;
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $author$project$CalendarGSVG$days = $elm$core$List$concat(
	_List_fromArray(
		[
			A2($elm$core$List$range, 9, 31),
			A2($elm$core$List$range, 1, 30),
			A2($elm$core$List$range, 1, 31),
			A2($elm$core$List$range, 1, 27)
		]));
var $author$project$CalendarGSVG$days2Weeks = function (ds) {
	if ((((((ds.b && ds.b.b) && ds.b.b.b) && ds.b.b.b.b) && ds.b.b.b.b.b) && ds.b.b.b.b.b.b) && ds.b.b.b.b.b.b.b) {
		var d1 = ds.a;
		var _v1 = ds.b;
		var d2 = _v1.a;
		var _v2 = _v1.b;
		var d3 = _v2.a;
		var _v3 = _v2.b;
		var d4 = _v3.a;
		var _v4 = _v3.b;
		var d5 = _v4.a;
		var _v5 = _v4.b;
		var d6 = _v5.a;
		var _v6 = _v5.b;
		var d7 = _v6.a;
		var rest = _v6.b;
		return A2(
			$elm$core$List$cons,
			A2(
				$elm$core$List$cons,
				d1,
				A2(
					$elm$core$List$cons,
					d2,
					A2(
						$elm$core$List$cons,
						d3,
						A2(
							$elm$core$List$cons,
							d4,
							A2(
								$elm$core$List$cons,
								d5,
								A2(
									$elm$core$List$cons,
									d6,
									A2($elm$core$List$cons, d7, _List_Nil))))))),
			$author$project$CalendarGSVG$days2Weeks(rest));
	} else {
		var leftovers = ds;
		return _List_fromArray(
			[leftovers]);
	}
};
var $author$project$CalendarGSVG$weeks = $author$project$CalendarGSVG$days2Weeks($author$project$CalendarGSVG$days);
var $author$project$CalendarGSVG$widgetHeight = ($elm$core$List$length($author$project$CalendarGSVG$weeks) * 20) + 20;
var $author$project$CalendarGSVG$widgetWidth = 192;
var $author$project$CalendarGSVG$init = function () {
	var _v0 = A3($MacCASOutreach$graphicsvg$GraphicSVG$Widget$init, $author$project$CalendarGSVG$widgetWidth, $author$project$CalendarGSVG$widgetHeight, 'calendar');
	var wState = _v0.a;
	var wCmd = _v0.b;
	return _Utils_Tuple2(
		{av: $elm$core$Maybe$Nothing, aD: $elm$core$Maybe$Nothing, aN: $elm$core$Maybe$Nothing, aO: wState},
		A2($elm$core$Platform$Cmd$map, $author$project$CalendarGSVG$WidgetMsg, wCmd));
}();
var $author$project$Calendar$init = $author$project$CalendarGSVG$init;
var $author$project$Parameters$Animation = 0;
var $author$project$Camps$WidgetMsg = function (a) {
	return {$: 0, a: a};
};
var $author$project$Camps$widgetHeight = 30;
var $author$project$Parameters$Adventure = 2;
var $author$project$Parameters$Beethoven = 8;
var $author$project$Parameters$Comics = 1;
var $author$project$Parameters$Escher = 7;
var $author$project$Parameters$Mini = 3;
var $author$project$Parameters$MiniSaturdays = 10;
var $author$project$Parameters$Picasso = 6;
var $author$project$Parameters$ThreeD = 4;
var $author$project$Parameters$Vaccine = 9;
var $author$project$Parameters$allCamps = _List_fromArray(
	[0, 1, 2, 3, 4, 9, 6, 7, 8, 10]);
var $author$project$Camps$tabWidth = 15;
var $author$project$Camps$widgetWidth = $author$project$Camps$tabWidth * (2 + $elm$core$List$length($author$project$Parameters$allCamps));
var $author$project$Camps$init = function () {
	var _v0 = A3($MacCASOutreach$graphicsvg$GraphicSVG$Widget$init, $author$project$Camps$widgetWidth, $author$project$Camps$widgetHeight, 'tabBar');
	var wState = _v0.a;
	var wCmd = _v0.b;
	return _Utils_Tuple2(
		{a: 0, aO: wState},
		A2($elm$core$Platform$Cmd$map, $author$project$Camps$WidgetMsg, wCmd));
}();
var $author$project$Lessons$WidgetMsg = function (a) {
	return {$: 0, a: a};
};
var $author$project$Lessons$widgetHeight = 30;
var $author$project$Parameters$allLessons = _List_fromArray(
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13]);
var $author$project$Lessons$tabWidth = 15;
var $author$project$Lessons$widgetWidth = $author$project$Lessons$tabWidth * (2 + $elm$core$List$length($author$project$Parameters$allLessons));
var $author$project$Lessons$init = function () {
	var _v0 = A3($MacCASOutreach$graphicsvg$GraphicSVG$Widget$init, $author$project$Lessons$widgetWidth, $author$project$Lessons$widgetHeight, 'tabBar');
	var wState = _v0.a;
	var wCmd = _v0.b;
	return _Utils_Tuple2(
		{a: 1, aO: wState},
		A2($elm$core$Platform$Cmd$map, $author$project$Lessons$WidgetMsg, wCmd));
}();
var $rundis$elm_bootstrap$Bootstrap$Navbar$Hidden = 0;
var $rundis$elm_bootstrap$Bootstrap$Navbar$State = $elm$core$Basics$identity;
var $elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$browser$Browser$Dom$getViewport = _Browser_withWindow(_Browser_getViewport);
var $rundis$elm_bootstrap$Bootstrap$Navbar$mapState = F2(
	function (mapper, _v0) {
		var state = _v0;
		return mapper(state);
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$initWindowSize = F2(
	function (toMsg, state) {
		return A2(
			$elm$core$Task$perform,
			function (vp) {
				return toMsg(
					A2(
						$rundis$elm_bootstrap$Bootstrap$Navbar$mapState,
						function (s) {
							return _Utils_update(
								s,
								{
									aU: $elm$core$Maybe$Just(vp.dC.d6)
								});
						},
						state));
			},
			$elm$browser$Browser$Dom$getViewport);
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$initialState = function (toMsg) {
	var state = {S: $elm$core$Dict$empty, dP: $elm$core$Maybe$Nothing, i: 0, aU: $elm$core$Maybe$Nothing};
	return _Utils_Tuple2(
		state,
		A2($rundis$elm_bootstrap$Bootstrap$Navbar$initWindowSize, toMsg, state));
};
var $elm$time$Time$Posix = $elm$core$Basics$identity;
var $elm$time$Time$millisToPosix = $elm$core$Basics$identity;
var $author$project$Model$NotFound = {$: 13};
var $elm$url$Url$Parser$State = F5(
	function (visited, unvisited, params, frag, value) {
		return {T: frag, W: params, O: unvisited, G: value, Y: visited};
	});
var $elm$url$Url$Parser$getFirstMatch = function (states) {
	getFirstMatch:
	while (true) {
		if (!states.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var state = states.a;
			var rest = states.b;
			var _v1 = state.O;
			if (!_v1.b) {
				return $elm$core$Maybe$Just(state.G);
			} else {
				if ((_v1.a === '') && (!_v1.b.b)) {
					return $elm$core$Maybe$Just(state.G);
				} else {
					var $temp$states = rest;
					states = $temp$states;
					continue getFirstMatch;
				}
			}
		}
	}
};
var $elm$url$Url$Parser$removeFinalEmpty = function (segments) {
	if (!segments.b) {
		return _List_Nil;
	} else {
		if ((segments.a === '') && (!segments.b.b)) {
			return _List_Nil;
		} else {
			var segment = segments.a;
			var rest = segments.b;
			return A2(
				$elm$core$List$cons,
				segment,
				$elm$url$Url$Parser$removeFinalEmpty(rest));
		}
	}
};
var $elm$url$Url$Parser$preparePath = function (path) {
	var _v0 = A2($elm$core$String$split, '/', path);
	if (_v0.b && (_v0.a === '')) {
		var segments = _v0.b;
		return $elm$url$Url$Parser$removeFinalEmpty(segments);
	} else {
		var segments = _v0;
		return $elm$url$Url$Parser$removeFinalEmpty(segments);
	}
};
var $elm$url$Url$Parser$addToParametersHelp = F2(
	function (value, maybeList) {
		if (maybeList.$ === 1) {
			return $elm$core$Maybe$Just(
				_List_fromArray(
					[value]));
		} else {
			var list = maybeList.a;
			return $elm$core$Maybe$Just(
				A2($elm$core$List$cons, value, list));
		}
	});
var $elm$url$Url$percentDecode = _Url_percentDecode;
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === -2) {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1) {
					case 0:
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 1:
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$Black = 1;
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = 0;
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1) {
				case 0:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === -1) && (dict.d.$ === -1)) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				0,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				0,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === -1) && (!left.a)) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === -1) && (right.a === 1)) {
					if (right.d.$ === -1) {
						if (right.d.a === 1) {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === -1) && (dict.d.$ === -1)) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor === 1) {
			if ((lLeft.$ === -1) && (!lLeft.a)) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === -1) {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === -2) {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === -1) && (left.a === 1)) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === -1) && (!lLeft.a)) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === -1) {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === -1) {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === -1) {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (!_v0.$) {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$url$Url$Parser$addParam = F2(
	function (segment, dict) {
		var _v0 = A2($elm$core$String$split, '=', segment);
		if ((_v0.b && _v0.b.b) && (!_v0.b.b.b)) {
			var rawKey = _v0.a;
			var _v1 = _v0.b;
			var rawValue = _v1.a;
			var _v2 = $elm$url$Url$percentDecode(rawKey);
			if (_v2.$ === 1) {
				return dict;
			} else {
				var key = _v2.a;
				var _v3 = $elm$url$Url$percentDecode(rawValue);
				if (_v3.$ === 1) {
					return dict;
				} else {
					var value = _v3.a;
					return A3(
						$elm$core$Dict$update,
						key,
						$elm$url$Url$Parser$addToParametersHelp(value),
						dict);
				}
			}
		} else {
			return dict;
		}
	});
var $elm$url$Url$Parser$prepareQuery = function (maybeQuery) {
	if (maybeQuery.$ === 1) {
		return $elm$core$Dict$empty;
	} else {
		var qry = maybeQuery.a;
		return A3(
			$elm$core$List$foldr,
			$elm$url$Url$Parser$addParam,
			$elm$core$Dict$empty,
			A2($elm$core$String$split, '&', qry));
	}
};
var $elm$url$Url$Parser$parse = F2(
	function (_v0, url) {
		var parser = _v0;
		return $elm$url$Url$Parser$getFirstMatch(
			parser(
				A5(
					$elm$url$Url$Parser$State,
					_List_Nil,
					$elm$url$Url$Parser$preparePath(url.dZ),
					$elm$url$Url$Parser$prepareQuery(url.dq),
					url.c6,
					$elm$core$Basics$identity)));
	});
var $author$project$Model$Board = {$: 19};
var $author$project$Model$Calendar = {$: 16};
var $author$project$Model$Camps = function (a) {
	return {$: 21, a: a};
};
var $author$project$Model$ClassVisits = {$: 1};
var $author$project$Model$Club = {$: 2};
var $author$project$Model$CodingTools = {$: 9};
var $author$project$Model$Comics2019 = {$: 14};
var $author$project$Model$Contact = {$: 11};
var $author$project$Model$Donate = {$: 24};
var $author$project$Model$Examples = {$: 10};
var $author$project$Model$Execs = {$: 18};
var $author$project$Model$FAQ = {$: 7};
var $author$project$Model$Hackathon = {$: 23};
var $author$project$Model$Jr = {$: 3};
var $author$project$Model$Lessons = function (a) {
	return {$: 22, a: a};
};
var $author$project$Model$NewYouthHack = {$: 6};
var $author$project$Model$Research = {$: 12};
var $author$project$Model$SciLit2019 = {$: 5};
var $author$project$Model$SciOd = {$: 4};
var $author$project$Model$Showcase = {$: 8};
var $author$project$Model$Team = {$: 17};
var $author$project$Model$Tutoring = {$: 20};
var $author$project$Model$Wordathon2019 = {$: 15};
var $elm$url$Url$Parser$Parser = $elm$core$Basics$identity;
var $elm$url$Url$Parser$mapState = F2(
	function (func, _v0) {
		var visited = _v0.Y;
		var unvisited = _v0.O;
		var params = _v0.W;
		var frag = _v0.T;
		var value = _v0.G;
		return A5(
			$elm$url$Url$Parser$State,
			visited,
			unvisited,
			params,
			frag,
			func(value));
	});
var $elm$url$Url$Parser$map = F2(
	function (subValue, _v0) {
		var parseArg = _v0;
		return function (_v1) {
			var visited = _v1.Y;
			var unvisited = _v1.O;
			var params = _v1.W;
			var frag = _v1.T;
			var value = _v1.G;
			return A2(
				$elm$core$List$map,
				$elm$url$Url$Parser$mapState(value),
				parseArg(
					A5($elm$url$Url$Parser$State, visited, unvisited, params, frag, subValue)));
		};
	});
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $elm$url$Url$Parser$oneOf = function (parsers) {
	return function (state) {
		return A2(
			$elm$core$List$concatMap,
			function (_v0) {
				var parser = _v0;
				return parser(state);
			},
			parsers);
	};
};
var $elm$url$Url$Parser$s = function (str) {
	return function (_v0) {
		var visited = _v0.Y;
		var unvisited = _v0.O;
		var params = _v0.W;
		var frag = _v0.T;
		var value = _v0.G;
		if (!unvisited.b) {
			return _List_Nil;
		} else {
			var next = unvisited.a;
			var rest = unvisited.b;
			return _Utils_eq(next, str) ? _List_fromArray(
				[
					A5(
					$elm$url$Url$Parser$State,
					A2($elm$core$List$cons, next, visited),
					rest,
					params,
					frag,
					value)
				]) : _List_Nil;
		}
	};
};
var $elm$url$Url$Parser$top = function (state) {
	return _List_fromArray(
		[state]);
};
var $author$project$Main$routeParser = function (model) {
	return $elm$url$Url$Parser$oneOf(
		_List_fromArray(
			[
				A2($elm$url$Url$Parser$map, $author$project$Model$Home, $elm$url$Url$Parser$top),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Home,
				$elm$url$Url$Parser$s('home')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Club,
				$elm$url$Url$Parser$s('club')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$ClassVisits,
				$elm$url$Url$Parser$s('classvisits')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$SciOd,
				$elm$url$Url$Parser$s('sci-od')),
				A2(
				$elm$url$Url$Parser$map,
				model.an,
				$elm$url$Url$Parser$s('whereyouare')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$SciLit2019,
				$elm$url$Url$Parser$s('scilit2019')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$NewYouthHack,
				$elm$url$Url$Parser$s('nyh')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Showcase,
				$elm$url$Url$Parser$s('showcase')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Jr,
				$elm$url$Url$Parser$s('jr')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$CodingTools,
				$elm$url$Url$Parser$s('coding-tools')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Examples,
				$elm$url$Url$Parser$s('examples')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Contact,
				$elm$url$Url$Parser$s('contact')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$FAQ,
				$elm$url$Url$Parser$s('faq')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Research,
				$elm$url$Url$Parser$s('research')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Lessons(1),
				$elm$url$Url$Parser$s('lessons')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Lessons(1),
				$elm$url$Url$Parser$s('lesson1')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Lessons(2),
				$elm$url$Url$Parser$s('lesson2')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Lessons(3),
				$elm$url$Url$Parser$s('lesson3')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Lessons(4),
				$elm$url$Url$Parser$s('lesson4')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Lessons(5),
				$elm$url$Url$Parser$s('lesson5')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Lessons(6),
				$elm$url$Url$Parser$s('lesson6')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Lessons(7),
				$elm$url$Url$Parser$s('lesson7')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Lessons(8),
				$elm$url$Url$Parser$s('lesson8')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Lessons(9),
				$elm$url$Url$Parser$s('lesson9')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Lessons(10),
				$elm$url$Url$Parser$s('lesson10')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Lessons(11),
				$elm$url$Url$Parser$s('lesson11')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Lessons(12),
				$elm$url$Url$Parser$s('lesson12')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Lessons(13),
				$elm$url$Url$Parser$s('lesson13')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Hackathon,
				$elm$url$Url$Parser$s('hackathon')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Camps(0),
				$elm$url$Url$Parser$s('camps')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Camps(0),
				$elm$url$Url$Parser$s('animation')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Camps(1),
				$elm$url$Url$Parser$s('comics')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Camps(2),
				$elm$url$Url$Parser$s('adventure')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Camps(3),
				$elm$url$Url$Parser$s('minigames')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Camps(10),
				$elm$url$Url$Parser$s('minigames-saturdays')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Camps(4),
				$elm$url$Url$Parser$s('3d')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Camps(9),
				$elm$url$Url$Parser$s('dtcamp')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Camps(6),
				$elm$url$Url$Parser$s('picasso')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Camps(7),
				$elm$url$Url$Parser$s('escher')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Camps(8),
				$elm$url$Url$Parser$s('beethoven')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Tutoring,
				$elm$url$Url$Parser$s('tutoring')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Comics2019,
				$elm$url$Url$Parser$s('comics2019')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Wordathon2019,
				$elm$url$Url$Parser$s('wordathon2019')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Calendar,
				$elm$url$Url$Parser$s('calendar')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Board,
				$elm$url$Url$Parser$s('board')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Execs,
				$elm$url$Url$Parser$s('execs')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Team,
				$elm$url$Url$Parser$s('team')),
				A2(
				$elm$url$Url$Parser$map,
				$author$project$Model$Donate,
				$elm$url$Url$Parser$s('donate'))
			]));
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$Main$decode = F2(
	function (model, url) {
		return A2(
			$elm$url$Url$Parser$parse,
			$author$project$Main$routeParser(model),
			_Utils_update(
				url,
				{
					c6: $elm$core$Maybe$Nothing,
					dZ: A2($elm$core$Maybe$withDefault, '', url.c6)
				}));
	});
var $author$project$Model$NoOp = {$: 10};
var $elm$browser$Browser$Dom$setViewport = _Browser_setViewport;
var $author$project$Main$resetViewport = A2(
	$elm$core$Task$perform,
	function (_v0) {
		return $author$project$Model$NoOp;
	},
	A2($elm$browser$Browser$Dom$setViewport, 0, 0));
var $author$project$Camps$setTab = F2(
	function (model, tab) {
		return _Utils_update(
			model,
			{a: tab});
	});
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $author$project$Lessons$setTab = F2(
	function (model, tab) {
		return _Utils_update(
			model,
			{
				a: A2($elm$core$List$member, tab, $author$project$Parameters$allLessons) ? tab : 1
			});
	});
var $author$project$Main$urlUpdate = F2(
	function (url, model) {
		var _v0 = A2($author$project$Main$decode, model, url);
		if (_v0.$ === 1) {
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{an: $author$project$Model$NotFound}),
				$author$project$Main$resetViewport);
		} else {
			var route = _v0.a;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						P: function () {
							if (route.$ === 21) {
								var tab = route.a;
								return A2($author$project$Camps$setTab, model.P, tab);
							} else {
								return model.P;
							}
						}(),
						V: function () {
							if (route.$ === 22) {
								var tab = route.a;
								return A2($author$project$Lessons$setTab, model.V, tab);
							} else {
								return model.V;
							}
						}(),
						an: route
					}),
				$author$project$Main$resetViewport);
		}
	});
var $elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$time$Time$utc = A2($elm$time$Time$Zone, 0, _List_Nil);
var $author$project$Main$init = F3(
	function (flags, url, key) {
		var _v0 = $rundis$elm_bootstrap$Bootstrap$Navbar$initialState($author$project$Model$NavMsg);
		var navState = _v0.a;
		var navCmd = _v0.b;
		var _v1 = $author$project$Lessons$init;
		var lessonsState = _v1.a;
		var lessonsCmd = _v1.b;
		var _v2 = $author$project$Camps$init;
		var campState = _v2.a;
		var campCmd = _v2.b;
		var _v3 = $author$project$Calendar$init;
		var calState = _v3.a;
		var calCmd = _v3.b;
		var _v4 = A2(
			$author$project$Main$urlUpdate,
			url,
			{
				a6: calState,
				P: campState,
				V: lessonsState,
				dg: key,
				bC: navState,
				an: $author$project$Model$Home,
				b: $elm$time$Time$millisToPosix(flags.b),
				cV: $rundis$elm_bootstrap$Bootstrap$Modal$hidden,
				_: $elm$time$Time$utc
			});
		var model = _v4.a;
		var urlCmd = _v4.b;
		return _Utils_Tuple2(
			model,
			$elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[
						urlCmd,
						navCmd,
						A2($elm$core$Platform$Cmd$map, $author$project$Model$CalendarMsg, calCmd),
						A2($elm$core$Platform$Cmd$map, $author$project$Model$CampsMsg, campCmd),
						A2($elm$core$Platform$Cmd$map, $author$project$Model$LessonsMsg, lessonsCmd)
					])));
	});
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $author$project$Model$Tick = function (a) {
	return {$: 8, a: a};
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$time$Time$Every = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$time$Time$State = F2(
	function (taggers, processes) {
		return {$7: processes, dx: taggers};
	});
var $elm$time$Time$init = $elm$core$Task$succeed(
	A2($elm$time$Time$State, $elm$core$Dict$empty, $elm$core$Dict$empty));
var $elm$time$Time$addMySub = F2(
	function (_v0, state) {
		var interval = _v0.a;
		var tagger = _v0.b;
		var _v1 = A2($elm$core$Dict$get, interval, state);
		if (_v1.$ === 1) {
			return A3(
				$elm$core$Dict$insert,
				interval,
				_List_fromArray(
					[tagger]),
				state);
		} else {
			var taggers = _v1.a;
			return A3(
				$elm$core$Dict$insert,
				interval,
				A2($elm$core$List$cons, tagger, taggers),
				state);
		}
	});
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === -2) {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$time$Time$Name = function (a) {
	return {$: 0, a: a};
};
var $elm$time$Time$Offset = function (a) {
	return {$: 1, a: a};
};
var $elm$time$Time$customZone = $elm$time$Time$Zone;
var $elm$time$Time$setInterval = _Time_setInterval;
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$time$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		if (!intervals.b) {
			return $elm$core$Task$succeed(processes);
		} else {
			var interval = intervals.a;
			var rest = intervals.b;
			var spawnTimer = $elm$core$Process$spawn(
				A2(
					$elm$time$Time$setInterval,
					interval,
					A2($elm$core$Platform$sendToSelf, router, interval)));
			var spawnRest = function (id) {
				return A3(
					$elm$time$Time$spawnHelp,
					router,
					rest,
					A3($elm$core$Dict$insert, interval, id, processes));
			};
			return A2($elm$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var $elm$time$Time$onEffects = F3(
	function (router, subs, _v0) {
		var processes = _v0.$7;
		var rightStep = F3(
			function (_v6, id, _v7) {
				var spawns = _v7.a;
				var existing = _v7.b;
				var kills = _v7.c;
				return _Utils_Tuple3(
					spawns,
					existing,
					A2(
						$elm$core$Task$andThen,
						function (_v5) {
							return kills;
						},
						$elm$core$Process$kill(id)));
			});
		var newTaggers = A3($elm$core$List$foldl, $elm$time$Time$addMySub, $elm$core$Dict$empty, subs);
		var leftStep = F3(
			function (interval, taggers, _v4) {
				var spawns = _v4.a;
				var existing = _v4.b;
				var kills = _v4.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, interval, spawns),
					existing,
					kills);
			});
		var bothStep = F4(
			function (interval, taggers, id, _v3) {
				var spawns = _v3.a;
				var existing = _v3.b;
				var kills = _v3.c;
				return _Utils_Tuple3(
					spawns,
					A3($elm$core$Dict$insert, interval, id, existing),
					kills);
			});
		var _v1 = A6(
			$elm$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			processes,
			_Utils_Tuple3(
				_List_Nil,
				$elm$core$Dict$empty,
				$elm$core$Task$succeed(0)));
		var spawnList = _v1.a;
		var existingDict = _v1.b;
		var killTask = _v1.c;
		return A2(
			$elm$core$Task$andThen,
			function (newProcesses) {
				return $elm$core$Task$succeed(
					A2($elm$time$Time$State, newTaggers, newProcesses));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v2) {
					return A3($elm$time$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var $elm$time$Time$now = _Time_now($elm$time$Time$millisToPosix);
var $elm$time$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _v0 = A2($elm$core$Dict$get, interval, state.dx);
		if (_v0.$ === 1) {
			return $elm$core$Task$succeed(state);
		} else {
			var taggers = _v0.a;
			var tellTaggers = function (time) {
				return $elm$core$Task$sequence(
					A2(
						$elm$core$List$map,
						function (tagger) {
							return A2(
								$elm$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						taggers));
			};
			return A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$succeed(state);
				},
				A2($elm$core$Task$andThen, tellTaggers, $elm$time$Time$now));
		}
	});
var $elm$time$Time$subMap = F2(
	function (f, _v0) {
		var interval = _v0.a;
		var tagger = _v0.b;
		return A2(
			$elm$time$Time$Every,
			interval,
			A2($elm$core$Basics$composeL, f, tagger));
	});
_Platform_effectManagers['Time'] = _Platform_createManager($elm$time$Time$init, $elm$time$Time$onEffects, $elm$time$Time$onSelfMsg, 0, $elm$time$Time$subMap);
var $elm$time$Time$subscription = _Platform_leaf('Time');
var $elm$time$Time$every = F2(
	function (interval, tagger) {
		return $elm$time$Time$subscription(
			A2($elm$time$Time$Every, interval, tagger));
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$AnimatingDown = 2;
var $rundis$elm_bootstrap$Bootstrap$Navbar$AnimatingUp = 4;
var $rundis$elm_bootstrap$Bootstrap$Navbar$Closed = 2;
var $rundis$elm_bootstrap$Bootstrap$Navbar$ListenClicks = 1;
var $rundis$elm_bootstrap$Bootstrap$Navbar$Open = 0;
var $elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === -2) {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				A2(func, key, value),
				A2($elm$core$Dict$map, func, left),
				A2($elm$core$Dict$map, func, right));
		}
	});
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $elm$browser$Browser$AnimationManager$Time = function (a) {
	return {$: 0, a: a};
};
var $elm$browser$Browser$AnimationManager$State = F3(
	function (subs, request, oldTime) {
		return {cG: oldTime, ds: request, dw: subs};
	});
var $elm$browser$Browser$AnimationManager$init = $elm$core$Task$succeed(
	A3($elm$browser$Browser$AnimationManager$State, _List_Nil, $elm$core$Maybe$Nothing, 0));
var $elm$browser$Browser$AnimationManager$now = _Browser_now(0);
var $elm$browser$Browser$AnimationManager$rAF = _Browser_rAF(0);
var $elm$browser$Browser$AnimationManager$onEffects = F3(
	function (router, subs, _v0) {
		var request = _v0.ds;
		var oldTime = _v0.cG;
		var _v1 = _Utils_Tuple2(request, subs);
		if (_v1.a.$ === 1) {
			if (!_v1.b.b) {
				var _v2 = _v1.a;
				return $elm$browser$Browser$AnimationManager$init;
			} else {
				var _v4 = _v1.a;
				return A2(
					$elm$core$Task$andThen,
					function (pid) {
						return A2(
							$elm$core$Task$andThen,
							function (time) {
								return $elm$core$Task$succeed(
									A3(
										$elm$browser$Browser$AnimationManager$State,
										subs,
										$elm$core$Maybe$Just(pid),
										time));
							},
							$elm$browser$Browser$AnimationManager$now);
					},
					$elm$core$Process$spawn(
						A2(
							$elm$core$Task$andThen,
							$elm$core$Platform$sendToSelf(router),
							$elm$browser$Browser$AnimationManager$rAF)));
			}
		} else {
			if (!_v1.b.b) {
				var pid = _v1.a.a;
				return A2(
					$elm$core$Task$andThen,
					function (_v3) {
						return $elm$browser$Browser$AnimationManager$init;
					},
					$elm$core$Process$kill(pid));
			} else {
				return $elm$core$Task$succeed(
					A3($elm$browser$Browser$AnimationManager$State, subs, request, oldTime));
			}
		}
	});
var $elm$browser$Browser$AnimationManager$onSelfMsg = F3(
	function (router, newTime, _v0) {
		var subs = _v0.dw;
		var oldTime = _v0.cG;
		var send = function (sub) {
			if (!sub.$) {
				var tagger = sub.a;
				return A2(
					$elm$core$Platform$sendToApp,
					router,
					tagger(
						$elm$time$Time$millisToPosix(newTime)));
			} else {
				var tagger = sub.a;
				return A2(
					$elm$core$Platform$sendToApp,
					router,
					tagger(newTime - oldTime));
			}
		};
		return A2(
			$elm$core$Task$andThen,
			function (pid) {
				return A2(
					$elm$core$Task$andThen,
					function (_v1) {
						return $elm$core$Task$succeed(
							A3(
								$elm$browser$Browser$AnimationManager$State,
								subs,
								$elm$core$Maybe$Just(pid),
								newTime));
					},
					$elm$core$Task$sequence(
						A2($elm$core$List$map, send, subs)));
			},
			$elm$core$Process$spawn(
				A2(
					$elm$core$Task$andThen,
					$elm$core$Platform$sendToSelf(router),
					$elm$browser$Browser$AnimationManager$rAF)));
	});
var $elm$browser$Browser$AnimationManager$Delta = function (a) {
	return {$: 1, a: a};
};
var $elm$browser$Browser$AnimationManager$subMap = F2(
	function (func, sub) {
		if (!sub.$) {
			var tagger = sub.a;
			return $elm$browser$Browser$AnimationManager$Time(
				A2($elm$core$Basics$composeL, func, tagger));
		} else {
			var tagger = sub.a;
			return $elm$browser$Browser$AnimationManager$Delta(
				A2($elm$core$Basics$composeL, func, tagger));
		}
	});
_Platform_effectManagers['Browser.AnimationManager'] = _Platform_createManager($elm$browser$Browser$AnimationManager$init, $elm$browser$Browser$AnimationManager$onEffects, $elm$browser$Browser$AnimationManager$onSelfMsg, 0, $elm$browser$Browser$AnimationManager$subMap);
var $elm$browser$Browser$AnimationManager$subscription = _Platform_leaf('Browser.AnimationManager');
var $elm$browser$Browser$AnimationManager$onAnimationFrame = function (tagger) {
	return $elm$browser$Browser$AnimationManager$subscription(
		$elm$browser$Browser$AnimationManager$Time(tagger));
};
var $elm$browser$Browser$Events$onAnimationFrame = $elm$browser$Browser$AnimationManager$onAnimationFrame;
var $elm$browser$Browser$Events$Document = 0;
var $elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {dk: pids, dw: subs};
	});
var $elm$browser$Browser$Events$init = $elm$core$Task$succeed(
	A2($elm$browser$Browser$Events$State, _List_Nil, $elm$core$Dict$empty));
var $elm$browser$Browser$Events$nodeToKey = function (node) {
	if (!node) {
		return 'd_';
	} else {
		return 'w_';
	}
};
var $elm$browser$Browser$Events$addKey = function (sub) {
	var node = sub.a;
	var name = sub.b;
	return _Utils_Tuple2(
		_Utils_ap(
			$elm$browser$Browser$Events$nodeToKey(node),
			name),
		sub);
};
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {c5: event, dc: key};
	});
var $elm$browser$Browser$Events$spawn = F3(
	function (router, key, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var actualNode = function () {
			if (!node) {
				return _Browser_doc;
			} else {
				return _Browser_window;
			}
		}();
		return A2(
			$elm$core$Task$map,
			function (value) {
				return _Utils_Tuple2(key, value);
			},
			A3(
				_Browser_on,
				actualNode,
				name,
				function (event) {
					return A2(
						$elm$core$Platform$sendToSelf,
						router,
						A2($elm$browser$Browser$Events$Event, key, event));
				}));
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $elm$browser$Browser$Events$onEffects = F3(
	function (router, subs, state) {
		var stepRight = F3(
			function (key, sub, _v6) {
				var deads = _v6.a;
				var lives = _v6.b;
				var news = _v6.c;
				return _Utils_Tuple3(
					deads,
					lives,
					A2(
						$elm$core$List$cons,
						A3($elm$browser$Browser$Events$spawn, router, key, sub),
						news));
			});
		var stepLeft = F3(
			function (_v4, pid, _v5) {
				var deads = _v5.a;
				var lives = _v5.b;
				var news = _v5.c;
				return _Utils_Tuple3(
					A2($elm$core$List$cons, pid, deads),
					lives,
					news);
			});
		var stepBoth = F4(
			function (key, pid, _v2, _v3) {
				var deads = _v3.a;
				var lives = _v3.b;
				var news = _v3.c;
				return _Utils_Tuple3(
					deads,
					A3($elm$core$Dict$insert, key, pid, lives),
					news);
			});
		var newSubs = A2($elm$core$List$map, $elm$browser$Browser$Events$addKey, subs);
		var _v0 = A6(
			$elm$core$Dict$merge,
			stepLeft,
			stepBoth,
			stepRight,
			state.dk,
			$elm$core$Dict$fromList(newSubs),
			_Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, _List_Nil));
		var deadPids = _v0.a;
		var livePids = _v0.b;
		var makeNewPids = _v0.c;
		return A2(
			$elm$core$Task$andThen,
			function (pids) {
				return $elm$core$Task$succeed(
					A2(
						$elm$browser$Browser$Events$State,
						newSubs,
						A2(
							$elm$core$Dict$union,
							livePids,
							$elm$core$Dict$fromList(pids))));
			},
			A2(
				$elm$core$Task$andThen,
				function (_v1) {
					return $elm$core$Task$sequence(makeNewPids);
				},
				$elm$core$Task$sequence(
					A2($elm$core$List$map, $elm$core$Process$kill, deadPids))));
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (!_v0.$) {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _v0, state) {
		var key = _v0.dc;
		var event = _v0.c5;
		var toMessage = function (_v2) {
			var subKey = _v2.a;
			var _v3 = _v2.b;
			var node = _v3.a;
			var name = _v3.b;
			var decoder = _v3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : $elm$core$Maybe$Nothing;
		};
		var messages = A2($elm$core$List$filterMap, toMessage, state.dw);
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Platform$sendToApp(router),
					messages)));
	});
var $elm$browser$Browser$Events$subMap = F2(
	function (func, _v0) {
		var node = _v0.a;
		var name = _v0.b;
		var decoder = _v0.c;
		return A3(
			$elm$browser$Browser$Events$MySub,
			node,
			name,
			A2($elm$json$Json$Decode$map, func, decoder));
	});
_Platform_effectManagers['Browser.Events'] = _Platform_createManager($elm$browser$Browser$Events$init, $elm$browser$Browser$Events$onEffects, $elm$browser$Browser$Events$onSelfMsg, 0, $elm$browser$Browser$Events$subMap);
var $elm$browser$Browser$Events$subscription = _Platform_leaf('Browser.Events');
var $elm$browser$Browser$Events$on = F3(
	function (node, name, decoder) {
		return $elm$browser$Browser$Events$subscription(
			A3($elm$browser$Browser$Events$MySub, node, name, decoder));
	});
var $elm$browser$Browser$Events$onClick = A2($elm$browser$Browser$Events$on, 0, 'click');
var $rundis$elm_bootstrap$Bootstrap$Navbar$dropdownSubscriptions = F2(
	function (state, toMsg) {
		var dropdowns = state.S;
		var updDropdowns = A2(
			$elm$core$Dict$map,
			F2(
				function (_v2, status) {
					switch (status) {
						case 0:
							return 1;
						case 1:
							return 2;
						default:
							return 2;
					}
				}),
			dropdowns);
		var updState = A2(
			$rundis$elm_bootstrap$Bootstrap$Navbar$mapState,
			function (s) {
				return _Utils_update(
					s,
					{S: updDropdowns});
			},
			state);
		var needsSub = function (s) {
			return A2(
				$elm$core$List$any,
				function (_v1) {
					var status = _v1.b;
					return _Utils_eq(status, s);
				},
				$elm$core$Dict$toList(dropdowns));
		};
		return $elm$core$Platform$Sub$batch(
			_List_fromArray(
				[
					needsSub(0) ? $elm$browser$Browser$Events$onAnimationFrame(
					function (_v0) {
						return toMsg(updState);
					}) : $elm$core$Platform$Sub$none,
					needsSub(1) ? $elm$browser$Browser$Events$onClick(
					$elm$json$Json$Decode$succeed(
						toMsg(updState))) : $elm$core$Platform$Sub$none
				]));
	});
var $elm$browser$Browser$Events$Window = 1;
var $elm$browser$Browser$Events$onResize = function (func) {
	return A3(
		$elm$browser$Browser$Events$on,
		1,
		'resize',
		A2(
			$elm$json$Json$Decode$field,
			'target',
			A3(
				$elm$json$Json$Decode$map2,
				func,
				A2($elm$json$Json$Decode$field, 'innerWidth', $elm$json$Json$Decode$int),
				A2($elm$json$Json$Decode$field, 'innerHeight', $elm$json$Json$Decode$int))));
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$subscriptions = F2(
	function (state, toMsg) {
		var visibility = state.i;
		var updState = function (v) {
			return A2(
				$rundis$elm_bootstrap$Bootstrap$Navbar$mapState,
				function (s) {
					return _Utils_update(
						s,
						{i: v});
				},
				state);
		};
		return $elm$core$Platform$Sub$batch(
			_List_fromArray(
				[
					function () {
					switch (visibility) {
						case 1:
							return $elm$browser$Browser$Events$onAnimationFrame(
								function (_v1) {
									return toMsg(
										updState(2));
								});
						case 3:
							return $elm$browser$Browser$Events$onAnimationFrame(
								function (_v2) {
									return toMsg(
										updState(4));
								});
						default:
							return $elm$core$Platform$Sub$none;
					}
				}(),
					$elm$browser$Browser$Events$onResize(
					F2(
						function (x, _v3) {
							return toMsg(
								A2(
									$rundis$elm_bootstrap$Bootstrap$Navbar$mapState,
									function (s) {
										return _Utils_update(
											s,
											{
												aU: $elm$core$Maybe$Just(x)
											});
									},
									state));
						})),
					A2($rundis$elm_bootstrap$Bootstrap$Navbar$dropdownSubscriptions, state, toMsg)
				]));
	});
var $author$project$Main$subscriptions = function (model) {
	return $elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				A2($rundis$elm_bootstrap$Bootstrap$Navbar$subscriptions, model.bC, $author$project$Model$NavMsg),
				A2($elm$time$Time$every, 10000, $author$project$Model$Tick)
			]));
};
var $elm$browser$Browser$Navigation$load = _Browser_load;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$browser$Browser$Navigation$pushUrl = _Browser_pushUrl;
var $rundis$elm_bootstrap$Bootstrap$Modal$Show = 0;
var $rundis$elm_bootstrap$Bootstrap$Modal$shown = 0;
var $elm$url$Url$addPort = F2(
	function (maybePort, starter) {
		if (maybePort.$ === 1) {
			return starter;
		} else {
			var port_ = maybePort.a;
			return starter + (':' + $elm$core$String$fromInt(port_));
		}
	});
var $elm$url$Url$addPrefixed = F3(
	function (prefix, maybeSegment, starter) {
		if (maybeSegment.$ === 1) {
			return starter;
		} else {
			var segment = maybeSegment.a;
			return _Utils_ap(
				starter,
				_Utils_ap(prefix, segment));
		}
	});
var $elm$url$Url$toString = function (url) {
	var http = function () {
		var _v0 = url.dp;
		if (!_v0) {
			return 'http://';
		} else {
			return 'https://';
		}
	}();
	return A3(
		$elm$url$Url$addPrefixed,
		'#',
		url.c6,
		A3(
			$elm$url$Url$addPrefixed,
			'?',
			url.dq,
			_Utils_ap(
				A2(
					$elm$url$Url$addPort,
					url.dl,
					_Utils_ap(http, url.c7)),
				url.dZ)));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$Widget$update = F2(
	function (msg, model) {
		var mWH = msg;
		if (!mWH.$) {
			var _v2 = mWH.a;
			var w = _v2.a;
			var h = _v2.b;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{co: h, cp: w}),
				$elm$core$Platform$Cmd$none);
		} else {
			return _Utils_Tuple2(
				model,
				$MacCASOutreach$graphicsvg$GraphicSVG$Widget$getContainerSize(model.bq));
		}
	});
var $author$project$CalendarGSVG$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 0:
				var wMsg = msg.a;
				var _v1 = A2($MacCASOutreach$graphicsvg$GraphicSVG$Widget$update, wMsg, model.aO);
				var newWState = _v1.a;
				var wCmd = _v1.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{aO: newWState}),
					A2($elm$core$Platform$Cmd$map, $author$project$CalendarGSVG$WidgetMsg, wCmd));
			case 2:
				var idx = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							aD: $elm$core$Maybe$Just(idx)
						}),
					$elm$core$Platform$Cmd$none);
			case 1:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{aD: $elm$core$Maybe$Nothing}),
					$elm$core$Platform$Cmd$none);
			case 4:
				var idx = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							av: $elm$core$Maybe$Just(idx)
						}),
					$elm$core$Platform$Cmd$none);
			case 3:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{av: $elm$core$Maybe$Nothing}),
					$elm$core$Platform$Cmd$none);
			case 6:
				var idx = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							aN: $elm$core$Maybe$Just(idx)
						}),
					$elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{aN: $elm$core$Maybe$Nothing}),
					$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Calendar$update = $author$project$CalendarGSVG$update;
var $author$project$Camps$update = F2(
	function (msg, model) {
		if (!msg.$) {
			var wMsg = msg.a;
			var _v1 = A2($MacCASOutreach$graphicsvg$GraphicSVG$Widget$update, wMsg, model.aO);
			var newWState = _v1.a;
			var wCmd = _v1.b;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{aO: newWState}),
				A2($elm$core$Platform$Cmd$map, $author$project$Camps$WidgetMsg, wCmd));
		} else {
			var tab = msg.a;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{a: tab}),
				$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Lessons$update = F2(
	function (msg, model) {
		if (!msg.$) {
			var wMsg = msg.a;
			var _v1 = A2($MacCASOutreach$graphicsvg$GraphicSVG$Widget$update, wMsg, model.aO);
			var newWState = _v1.a;
			var wCmd = _v1.b;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{aO: newWState}),
				A2($elm$core$Platform$Cmd$map, $author$project$Lessons$WidgetMsg, wCmd));
		} else {
			var tab = msg.a;
			return _Utils_Tuple2(
				A2($author$project$Lessons$setTab, model, tab),
				$elm$core$Platform$Cmd$none);
		}
	});
var $author$project$Main$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 1:
				var req = msg.a;
				if (!req.$) {
					var url = req.a;
					return _Utils_Tuple2(
						model,
						A2(
							$elm$browser$Browser$Navigation$pushUrl,
							model.dg,
							$elm$url$Url$toString(url)));
				} else {
					var href = req.a;
					return _Utils_Tuple2(
						model,
						$elm$browser$Browser$Navigation$load(href));
				}
			case 0:
				var url = msg.a;
				return A2($author$project$Main$urlUpdate, url, model);
			case 2:
				var state = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{bC: state}),
					$elm$core$Platform$Cmd$none);
			case 3:
				var campsMsg = msg.a;
				var _v2 = A2($author$project$Camps$update, campsMsg, model.P);
				var campState = _v2.a;
				var campCmd = _v2.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{P: campState}),
					A2($elm$core$Platform$Cmd$map, $author$project$Model$CampsMsg, campCmd));
			case 4:
				var calMsg = msg.a;
				var _v3 = A2($author$project$Calendar$update, calMsg, model.a6);
				var calState = _v3.a;
				var calCmd = _v3.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{a6: calState}),
					A2($elm$core$Platform$Cmd$map, $author$project$Model$CalendarMsg, calCmd));
			case 5:
				var lessonsMsg = msg.a;
				var _v4 = A2($author$project$Lessons$update, lessonsMsg, model.V);
				var lessonsState = _v4.a;
				var lessonsCmd = _v4.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{V: lessonsState}),
					A2($elm$core$Platform$Cmd$map, $author$project$Model$LessonsMsg, lessonsCmd));
			case 6:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{cV: $rundis$elm_bootstrap$Bootstrap$Modal$shown}),
					$elm$core$Platform$Cmd$none);
			case 7:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{cV: $rundis$elm_bootstrap$Bootstrap$Modal$hidden}),
					$elm$core$Platform$Cmd$none);
			case 8:
				var newTime = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{b: newTime}),
					$elm$core$Platform$Cmd$none);
			case 9:
				var newZone = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{_: newZone}),
					$elm$core$Platform$Cmd$none);
			default:
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
		}
	});
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $rundis$elm_bootstrap$Bootstrap$Grid$containerFluid = F2(
	function (attributes, children) {
		return A2(
			$elm$html$Html$div,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('container-fluid')
					]),
				attributes),
			children);
	});
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $rundis$elm_bootstrap$Bootstrap$Card$Config = $elm$core$Basics$identity;
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$CardBlock = function (a) {
	return {$: 0, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$applyBlockModifier = F2(
	function (option, options) {
		switch (option.$) {
			case 0:
				var align = option.a;
				return _Utils_update(
					options,
					{
						H: $elm$core$Maybe$Just(align)
					});
			case 1:
				var role = option.a;
				return _Utils_update(
					options,
					{
						J: $elm$core$Maybe$Just(role)
					});
			case 2:
				var color = option.a;
				return _Utils_update(
					options,
					{
						N: $elm$core$Maybe$Just(color)
					});
			default:
				var attrs = option.a;
				return _Utils_update(
					options,
					{
						a3: _Utils_ap(options.a3, attrs)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$defaultBlockOptions = {H: $elm$core$Maybe$Nothing, a3: _List_Nil, J: $elm$core$Maybe$Nothing, N: $elm$core$Maybe$Nothing};
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption = function (size) {
	switch (size) {
		case 0:
			return $elm$core$Maybe$Nothing;
		case 1:
			return $elm$core$Maybe$Just('sm');
		case 2:
			return $elm$core$Maybe$Just('md');
		case 3:
			return $elm$core$Maybe$Just('lg');
		default:
			return $elm$core$Maybe$Just('xl');
	}
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Text$textAlignDirOption = function (dir) {
	switch (dir) {
		case 1:
			return 'center';
		case 0:
			return 'left';
		default:
			return 'right';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Text$textAlignClass = function (_v0) {
	var dir = _v0.c2;
	var size = _v0.b9;
	return $elm$html$Html$Attributes$class(
		'text' + (A2(
			$elm$core$Maybe$withDefault,
			'-',
			A2(
				$elm$core$Maybe$map,
				function (s) {
					return '-' + (s + '-');
				},
				$rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption(size))) + $rundis$elm_bootstrap$Bootstrap$Internal$Text$textAlignDirOption(dir)));
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass = F2(
	function (prefix, role) {
		return $elm$html$Html$Attributes$class(
			prefix + ('-' + function () {
				switch (role) {
					case 0:
						return 'primary';
					case 1:
						return 'secondary';
					case 2:
						return 'success';
					case 3:
						return 'info';
					case 4:
						return 'warning';
					case 5:
						return 'danger';
					case 6:
						return 'light';
					default:
						return 'dark';
				}
			}()));
	});
var $rundis$elm_bootstrap$Bootstrap$Internal$Text$textColorClass = function (color) {
	if (color.$ === 1) {
		return $elm$html$Html$Attributes$class('text-white');
	} else {
		var role = color.a;
		return A2($rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass, 'text', role);
	}
};
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$blockAttributes = function (modifiers) {
	var options = A3($elm$core$List$foldl, $rundis$elm_bootstrap$Bootstrap$Card$Internal$applyBlockModifier, $rundis$elm_bootstrap$Bootstrap$Card$Internal$defaultBlockOptions, modifiers);
	return _Utils_ap(
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('card-body')
			]),
		_Utils_ap(
			function () {
				var _v0 = options.H;
				if (!_v0.$) {
					var align = _v0.a;
					return _List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Internal$Text$textAlignClass(align)
						]);
				} else {
					return _List_Nil;
				}
			}(),
			_Utils_ap(
				function () {
					var _v1 = options.J;
					if (!_v1.$) {
						var role = _v1.a;
						return _List_fromArray(
							[
								A2($rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass, 'bg', role)
							]);
					} else {
						return _List_Nil;
					}
				}(),
				_Utils_ap(
					function () {
						var _v2 = options.N;
						if (!_v2.$) {
							var color = _v2.a;
							return _List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Internal$Text$textColorClass(color)
								]);
						} else {
							return _List_Nil;
						}
					}(),
					options.a3))));
};
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$block = F2(
	function (options, items) {
		return $rundis$elm_bootstrap$Bootstrap$Card$Internal$CardBlock(
			A2(
				$elm$html$Html$div,
				$rundis$elm_bootstrap$Bootstrap$Card$Internal$blockAttributes(options),
				A2(
					$elm$core$List$map,
					function (_v0) {
						var e = _v0;
						return e;
					},
					items)));
	});
var $rundis$elm_bootstrap$Bootstrap$Card$block = F3(
	function (options, items, _v0) {
		var conf = _v0;
		return _Utils_update(
			conf,
			{
				ct: _Utils_ap(
					conf.ct,
					_List_fromArray(
						[
							A2($rundis$elm_bootstrap$Bootstrap$Card$Internal$block, options, items)
						]))
			});
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Column = function (a) {
	return {$: 0, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Grid$col = F2(
	function (options, children) {
		return $rundis$elm_bootstrap$Bootstrap$Grid$Column(
			{c0: children, dY: options});
	});
var $rundis$elm_bootstrap$Bootstrap$Card$config = function (options) {
	return {ct: _List_Nil, cy: $elm$core$Maybe$Nothing, bo: $elm$core$Maybe$Nothing, cA: $elm$core$Maybe$Nothing, cB: $elm$core$Maybe$Nothing, dY: options};
};
var $elm$html$Html$h1 = _VirtualDom_node('h1');
var $elm$html$Html$h2 = _VirtualDom_node('h2');
var $elm$html$Html$h3 = _VirtualDom_node('h3');
var $rundis$elm_bootstrap$Bootstrap$Card$Header = $elm$core$Basics$identity;
var $rundis$elm_bootstrap$Bootstrap$Card$headerPrivate = F4(
	function (elemFn, attributes, children, _v0) {
		var conf = _v0;
		return _Utils_update(
			conf,
			{
				bo: $elm$core$Maybe$Just(
					A2(
						elemFn,
						A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class('card-header'),
							attributes),
						children))
			});
	});
var $rundis$elm_bootstrap$Bootstrap$Card$headerH3 = $rundis$elm_bootstrap$Bootstrap$Card$headerPrivate($elm$html$Html$h3);
var $elm$html$Html$img = _VirtualDom_node('img');
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Col8 = 8;
var $rundis$elm_bootstrap$Bootstrap$General$Internal$MD = 2;
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$ColWidth = function (a) {
	return {$: 0, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Width = F2(
	function (screenSize, columnCount) {
		return {c1: columnCount, dv: screenSize};
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$width = F2(
	function (size, count) {
		return $rundis$elm_bootstrap$Bootstrap$Grid$Internal$ColWidth(
			A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$Width, size, count));
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Col$md8 = A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$width, 2, 8);
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Col = 0;
var $rundis$elm_bootstrap$Bootstrap$General$Internal$XS = 0;
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColAlign = F2(
	function (align_, options) {
		var _v0 = align_.dv;
		switch (_v0) {
			case 0:
				return _Utils_update(
					options,
					{
						a0: $elm$core$Maybe$Just(align_)
					});
			case 1:
				return _Utils_update(
					options,
					{
						a_: $elm$core$Maybe$Just(align_)
					});
			case 2:
				return _Utils_update(
					options,
					{
						aZ: $elm$core$Maybe$Just(align_)
					});
			case 3:
				return _Utils_update(
					options,
					{
						aY: $elm$core$Maybe$Just(align_)
					});
			default:
				return _Utils_update(
					options,
					{
						a$: $elm$core$Maybe$Just(align_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColOffset = F2(
	function (offset_, options) {
		var _v0 = offset_.dv;
		switch (_v0) {
			case 0:
				return _Utils_update(
					options,
					{
						bI: $elm$core$Maybe$Just(offset_)
					});
			case 1:
				return _Utils_update(
					options,
					{
						bF: $elm$core$Maybe$Just(offset_)
					});
			case 2:
				return _Utils_update(
					options,
					{
						bE: $elm$core$Maybe$Just(offset_)
					});
			case 3:
				return _Utils_update(
					options,
					{
						bD: $elm$core$Maybe$Just(offset_)
					});
			default:
				return _Utils_update(
					options,
					{
						bH: $elm$core$Maybe$Just(offset_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColOrder = F2(
	function (order_, options) {
		var _v0 = order_.dv;
		switch (_v0) {
			case 0:
				return _Utils_update(
					options,
					{
						bS: $elm$core$Maybe$Just(order_)
					});
			case 1:
				return _Utils_update(
					options,
					{
						bQ: $elm$core$Maybe$Just(order_)
					});
			case 2:
				return _Utils_update(
					options,
					{
						bP: $elm$core$Maybe$Just(order_)
					});
			case 3:
				return _Utils_update(
					options,
					{
						bO: $elm$core$Maybe$Just(order_)
					});
			default:
				return _Utils_update(
					options,
					{
						bR: $elm$core$Maybe$Just(order_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColPull = F2(
	function (pull_, options) {
		var _v0 = pull_.dv;
		switch (_v0) {
			case 0:
				return _Utils_update(
					options,
					{
						bY: $elm$core$Maybe$Just(pull_)
					});
			case 1:
				return _Utils_update(
					options,
					{
						bW: $elm$core$Maybe$Just(pull_)
					});
			case 2:
				return _Utils_update(
					options,
					{
						bV: $elm$core$Maybe$Just(pull_)
					});
			case 3:
				return _Utils_update(
					options,
					{
						bU: $elm$core$Maybe$Just(pull_)
					});
			default:
				return _Utils_update(
					options,
					{
						bX: $elm$core$Maybe$Just(pull_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColPush = F2(
	function (push_, options) {
		var _v0 = push_.dv;
		switch (_v0) {
			case 0:
				return _Utils_update(
					options,
					{
						b1: $elm$core$Maybe$Just(push_)
					});
			case 1:
				return _Utils_update(
					options,
					{
						b$: $elm$core$Maybe$Just(push_)
					});
			case 2:
				return _Utils_update(
					options,
					{
						b_: $elm$core$Maybe$Just(push_)
					});
			case 3:
				return _Utils_update(
					options,
					{
						bZ: $elm$core$Maybe$Just(push_)
					});
			default:
				return _Utils_update(
					options,
					{
						b0: $elm$core$Maybe$Just(push_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColWidth = F2(
	function (width_, options) {
		var _v0 = width_.dv;
		switch (_v0) {
			case 0:
				return _Utils_update(
					options,
					{
						aT: $elm$core$Maybe$Just(width_)
					});
			case 1:
				return _Utils_update(
					options,
					{
						aR: $elm$core$Maybe$Just(width_)
					});
			case 2:
				return _Utils_update(
					options,
					{
						aQ: $elm$core$Maybe$Just(width_)
					});
			case 3:
				return _Utils_update(
					options,
					{
						aP: $elm$core$Maybe$Just(width_)
					});
			default:
				return _Utils_update(
					options,
					{
						aS: $elm$core$Maybe$Just(width_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColOption = F2(
	function (modifier, options) {
		switch (modifier.$) {
			case 6:
				var attrs = modifier.a;
				return _Utils_update(
					options,
					{
						a3: _Utils_ap(options.a3, attrs)
					});
			case 0:
				var width_ = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColWidth, width_, options);
			case 1:
				var offset_ = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColOffset, offset_, options);
			case 2:
				var pull_ = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColPull, pull_, options);
			case 3:
				var push_ = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColPush, push_, options);
			case 4:
				var order_ = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColOrder, order_, options);
			case 5:
				var align = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColAlign, align, options);
			default:
				var align = modifier.a;
				return _Utils_update(
					options,
					{
						cc: $elm$core$Maybe$Just(align)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$columnCountOption = function (size) {
	switch (size) {
		case 0:
			return $elm$core$Maybe$Nothing;
		case 1:
			return $elm$core$Maybe$Just('1');
		case 2:
			return $elm$core$Maybe$Just('2');
		case 3:
			return $elm$core$Maybe$Just('3');
		case 4:
			return $elm$core$Maybe$Just('4');
		case 5:
			return $elm$core$Maybe$Just('5');
		case 6:
			return $elm$core$Maybe$Just('6');
		case 7:
			return $elm$core$Maybe$Just('7');
		case 8:
			return $elm$core$Maybe$Just('8');
		case 9:
			return $elm$core$Maybe$Just('9');
		case 10:
			return $elm$core$Maybe$Just('10');
		case 11:
			return $elm$core$Maybe$Just('11');
		case 12:
			return $elm$core$Maybe$Just('12');
		default:
			return $elm$core$Maybe$Just('auto');
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$colWidthClass = function (_v0) {
	var screenSize = _v0.dv;
	var columnCount = _v0.c1;
	return $elm$html$Html$Attributes$class(
		'col' + (A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				function (v) {
					return '-' + v;
				},
				$rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption(screenSize))) + A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				function (v) {
					return '-' + v;
				},
				$rundis$elm_bootstrap$Bootstrap$Grid$Internal$columnCountOption(columnCount)))));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$colWidthsToAttributes = function (widths) {
	var width_ = function (w) {
		return A2($elm$core$Maybe$map, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$colWidthClass, w);
	};
	return A2(
		$elm$core$List$filterMap,
		$elm$core$Basics$identity,
		A2($elm$core$List$map, width_, widths));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$defaultColOptions = {aY: $elm$core$Maybe$Nothing, aZ: $elm$core$Maybe$Nothing, a_: $elm$core$Maybe$Nothing, a$: $elm$core$Maybe$Nothing, a0: $elm$core$Maybe$Nothing, a3: _List_Nil, bD: $elm$core$Maybe$Nothing, bE: $elm$core$Maybe$Nothing, bF: $elm$core$Maybe$Nothing, bH: $elm$core$Maybe$Nothing, bI: $elm$core$Maybe$Nothing, bO: $elm$core$Maybe$Nothing, bP: $elm$core$Maybe$Nothing, bQ: $elm$core$Maybe$Nothing, bR: $elm$core$Maybe$Nothing, bS: $elm$core$Maybe$Nothing, bU: $elm$core$Maybe$Nothing, bV: $elm$core$Maybe$Nothing, bW: $elm$core$Maybe$Nothing, bX: $elm$core$Maybe$Nothing, bY: $elm$core$Maybe$Nothing, bZ: $elm$core$Maybe$Nothing, b_: $elm$core$Maybe$Nothing, b$: $elm$core$Maybe$Nothing, b0: $elm$core$Maybe$Nothing, b1: $elm$core$Maybe$Nothing, cc: $elm$core$Maybe$Nothing, aP: $elm$core$Maybe$Nothing, aQ: $elm$core$Maybe$Nothing, aR: $elm$core$Maybe$Nothing, aS: $elm$core$Maybe$Nothing, aT: $elm$core$Maybe$Nothing};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$offsetCountOption = function (size) {
	switch (size) {
		case 0:
			return '0';
		case 1:
			return '1';
		case 2:
			return '2';
		case 3:
			return '3';
		case 4:
			return '4';
		case 5:
			return '5';
		case 6:
			return '6';
		case 7:
			return '7';
		case 8:
			return '8';
		case 9:
			return '9';
		case 10:
			return '10';
		default:
			return '11';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$screenSizeToPartialString = function (screenSize) {
	var _v0 = $rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption(screenSize);
	if (!_v0.$) {
		var s = _v0.a;
		return '-' + (s + '-');
	} else {
		return '-';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$offsetClass = function (_v0) {
	var screenSize = _v0.dv;
	var offsetCount = _v0.dj;
	return $elm$html$Html$Attributes$class(
		'offset' + ($rundis$elm_bootstrap$Bootstrap$Grid$Internal$screenSizeToPartialString(screenSize) + $rundis$elm_bootstrap$Bootstrap$Grid$Internal$offsetCountOption(offsetCount)));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$offsetsToAttributes = function (offsets) {
	var offset_ = function (m) {
		return A2($elm$core$Maybe$map, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$offsetClass, m);
	};
	return A2(
		$elm$core$List$filterMap,
		$elm$core$Basics$identity,
		A2($elm$core$List$map, offset_, offsets));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$orderColOption = function (size) {
	switch (size) {
		case 0:
			return 'first';
		case 1:
			return '1';
		case 2:
			return '2';
		case 3:
			return '3';
		case 4:
			return '4';
		case 5:
			return '5';
		case 6:
			return '6';
		case 7:
			return '7';
		case 8:
			return '8';
		case 9:
			return '9';
		case 10:
			return '10';
		case 11:
			return '11';
		case 12:
			return '12';
		default:
			return 'last';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$orderToAttributes = function (orders) {
	var order_ = function (m) {
		if (!m.$) {
			var screenSize = m.a.dv;
			var moveCount = m.a.am;
			return $elm$core$Maybe$Just(
				$elm$html$Html$Attributes$class(
					'order' + ($rundis$elm_bootstrap$Bootstrap$Grid$Internal$screenSizeToPartialString(screenSize) + $rundis$elm_bootstrap$Bootstrap$Grid$Internal$orderColOption(moveCount))));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	};
	return A2(
		$elm$core$List$filterMap,
		$elm$core$Basics$identity,
		A2($elm$core$List$map, order_, orders));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$moveCountOption = function (size) {
	switch (size) {
		case 0:
			return '0';
		case 1:
			return '1';
		case 2:
			return '2';
		case 3:
			return '3';
		case 4:
			return '4';
		case 5:
			return '5';
		case 6:
			return '6';
		case 7:
			return '7';
		case 8:
			return '8';
		case 9:
			return '9';
		case 10:
			return '10';
		case 11:
			return '11';
		default:
			return '12';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$pullsToAttributes = function (pulls) {
	var pull_ = function (m) {
		if (!m.$) {
			var screenSize = m.a.dv;
			var moveCount = m.a.am;
			return $elm$core$Maybe$Just(
				$elm$html$Html$Attributes$class(
					'pull' + ($rundis$elm_bootstrap$Bootstrap$Grid$Internal$screenSizeToPartialString(screenSize) + $rundis$elm_bootstrap$Bootstrap$Grid$Internal$moveCountOption(moveCount))));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	};
	return A2(
		$elm$core$List$filterMap,
		$elm$core$Basics$identity,
		A2($elm$core$List$map, pull_, pulls));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$pushesToAttributes = function (pushes) {
	var push_ = function (m) {
		if (!m.$) {
			var screenSize = m.a.dv;
			var moveCount = m.a.am;
			return $elm$core$Maybe$Just(
				$elm$html$Html$Attributes$class(
					'push' + ($rundis$elm_bootstrap$Bootstrap$Grid$Internal$screenSizeToPartialString(screenSize) + $rundis$elm_bootstrap$Bootstrap$Grid$Internal$moveCountOption(moveCount))));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	};
	return A2(
		$elm$core$List$filterMap,
		$elm$core$Basics$identity,
		A2($elm$core$List$map, push_, pushes));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$verticalAlignOption = function (align) {
	switch (align) {
		case 0:
			return 'start';
		case 1:
			return 'center';
		default:
			return 'end';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$vAlignClass = F2(
	function (prefix, _v0) {
		var align = _v0.cZ;
		var screenSize = _v0.dv;
		return $elm$html$Html$Attributes$class(
			_Utils_ap(
				prefix,
				_Utils_ap(
					A2(
						$elm$core$Maybe$withDefault,
						'',
						A2(
							$elm$core$Maybe$map,
							function (v) {
								return v + '-';
							},
							$rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption(screenSize))),
					$rundis$elm_bootstrap$Bootstrap$Grid$Internal$verticalAlignOption(align))));
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$vAlignsToAttributes = F2(
	function (prefix, aligns) {
		var align = function (a) {
			return A2(
				$elm$core$Maybe$map,
				$rundis$elm_bootstrap$Bootstrap$Grid$Internal$vAlignClass(prefix),
				a);
		};
		return A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			A2($elm$core$List$map, align, aligns));
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$colAttributes = function (modifiers) {
	var options = A3($elm$core$List$foldl, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyColOption, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$defaultColOptions, modifiers);
	var shouldAddDefaultXs = !$elm$core$List$length(
		A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			_List_fromArray(
				[options.aT, options.aR, options.aQ, options.aP, options.aS])));
	return _Utils_ap(
		$rundis$elm_bootstrap$Bootstrap$Grid$Internal$colWidthsToAttributes(
			_List_fromArray(
				[
					shouldAddDefaultXs ? $elm$core$Maybe$Just(
					A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$Width, 0, 0)) : options.aT,
					options.aR,
					options.aQ,
					options.aP,
					options.aS
				])),
		_Utils_ap(
			$rundis$elm_bootstrap$Bootstrap$Grid$Internal$offsetsToAttributes(
				_List_fromArray(
					[options.bI, options.bF, options.bE, options.bD, options.bH])),
			_Utils_ap(
				$rundis$elm_bootstrap$Bootstrap$Grid$Internal$pullsToAttributes(
					_List_fromArray(
						[options.bY, options.bW, options.bV, options.bU, options.bX])),
				_Utils_ap(
					$rundis$elm_bootstrap$Bootstrap$Grid$Internal$pushesToAttributes(
						_List_fromArray(
							[options.b1, options.b$, options.b_, options.bZ, options.b0])),
					_Utils_ap(
						$rundis$elm_bootstrap$Bootstrap$Grid$Internal$orderToAttributes(
							_List_fromArray(
								[options.bS, options.bQ, options.bP, options.bO, options.bR])),
						_Utils_ap(
							A2(
								$rundis$elm_bootstrap$Bootstrap$Grid$Internal$vAlignsToAttributes,
								'align-self-',
								_List_fromArray(
									[options.a0, options.a_, options.aZ, options.aY, options.a$])),
							_Utils_ap(
								function () {
									var _v0 = options.cc;
									if (!_v0.$) {
										var a = _v0.a;
										return _List_fromArray(
											[
												$rundis$elm_bootstrap$Bootstrap$Internal$Text$textAlignClass(a)
											]);
									} else {
										return _List_Nil;
									}
								}(),
								options.a3)))))));
};
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$Keyed$node = $elm$virtual_dom$VirtualDom$keyedNode;
var $rundis$elm_bootstrap$Bootstrap$Grid$renderCol = function (column) {
	switch (column.$) {
		case 0:
			var options = column.a.dY;
			var children = column.a.c0;
			return A2(
				$elm$html$Html$div,
				$rundis$elm_bootstrap$Bootstrap$Grid$Internal$colAttributes(options),
				children);
		case 1:
			var e = column.a;
			return e;
		default:
			var options = column.a.dY;
			var children = column.a.c0;
			return A3(
				$elm$html$Html$Keyed$node,
				'div',
				$rundis$elm_bootstrap$Bootstrap$Grid$Internal$colAttributes(options),
				children);
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyRowHAlign = F2(
	function (align, options) {
		var _v0 = align.dv;
		switch (_v0) {
			case 0:
				return _Utils_update(
					options,
					{
						bm: $elm$core$Maybe$Just(align)
					});
			case 1:
				return _Utils_update(
					options,
					{
						bk: $elm$core$Maybe$Just(align)
					});
			case 2:
				return _Utils_update(
					options,
					{
						bj: $elm$core$Maybe$Just(align)
					});
			case 3:
				return _Utils_update(
					options,
					{
						bi: $elm$core$Maybe$Just(align)
					});
			default:
				return _Utils_update(
					options,
					{
						bl: $elm$core$Maybe$Just(align)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyRowVAlign = F2(
	function (align_, options) {
		var _v0 = align_.dv;
		switch (_v0) {
			case 0:
				return _Utils_update(
					options,
					{
						cl: $elm$core$Maybe$Just(align_)
					});
			case 1:
				return _Utils_update(
					options,
					{
						cj: $elm$core$Maybe$Just(align_)
					});
			case 2:
				return _Utils_update(
					options,
					{
						ci: $elm$core$Maybe$Just(align_)
					});
			case 3:
				return _Utils_update(
					options,
					{
						ch: $elm$core$Maybe$Just(align_)
					});
			default:
				return _Utils_update(
					options,
					{
						ck: $elm$core$Maybe$Just(align_)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyRowOption = F2(
	function (modifier, options) {
		switch (modifier.$) {
			case 2:
				var attrs = modifier.a;
				return _Utils_update(
					options,
					{
						a3: _Utils_ap(options.a3, attrs)
					});
			case 0:
				var align = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyRowVAlign, align, options);
			default:
				var align = modifier.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyRowHAlign, align, options);
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$defaultRowOptions = {a3: _List_Nil, bi: $elm$core$Maybe$Nothing, bj: $elm$core$Maybe$Nothing, bk: $elm$core$Maybe$Nothing, bl: $elm$core$Maybe$Nothing, bm: $elm$core$Maybe$Nothing, ch: $elm$core$Maybe$Nothing, ci: $elm$core$Maybe$Nothing, cj: $elm$core$Maybe$Nothing, ck: $elm$core$Maybe$Nothing, cl: $elm$core$Maybe$Nothing};
var $rundis$elm_bootstrap$Bootstrap$General$Internal$horizontalAlignOption = function (align) {
	switch (align) {
		case 0:
			return 'start';
		case 1:
			return 'center';
		case 2:
			return 'end';
		case 3:
			return 'around';
		default:
			return 'between';
	}
};
var $rundis$elm_bootstrap$Bootstrap$General$Internal$hAlignClass = function (_v0) {
	var align = _v0.cZ;
	var screenSize = _v0.dv;
	return $elm$html$Html$Attributes$class(
		'justify-content-' + (A2(
			$elm$core$Maybe$withDefault,
			'',
			A2(
				$elm$core$Maybe$map,
				function (v) {
					return v + '-';
				},
				$rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption(screenSize))) + $rundis$elm_bootstrap$Bootstrap$General$Internal$horizontalAlignOption(align)));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$hAlignsToAttributes = function (aligns) {
	var align = function (a) {
		return A2($elm$core$Maybe$map, $rundis$elm_bootstrap$Bootstrap$General$Internal$hAlignClass, a);
	};
	return A2(
		$elm$core$List$filterMap,
		$elm$core$Basics$identity,
		A2($elm$core$List$map, align, aligns));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$rowAttributes = function (modifiers) {
	var options = A3($elm$core$List$foldl, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$applyRowOption, $rundis$elm_bootstrap$Bootstrap$Grid$Internal$defaultRowOptions, modifiers);
	return _Utils_ap(
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('row')
			]),
		_Utils_ap(
			A2(
				$rundis$elm_bootstrap$Bootstrap$Grid$Internal$vAlignsToAttributes,
				'align-items-',
				_List_fromArray(
					[options.cl, options.cj, options.ci, options.ch, options.ck])),
			_Utils_ap(
				$rundis$elm_bootstrap$Bootstrap$Grid$Internal$hAlignsToAttributes(
					_List_fromArray(
						[options.bm, options.bk, options.bj, options.bi, options.bl])),
				options.a3)));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$row = F2(
	function (options, cols) {
		return A2(
			$elm$html$Html$div,
			$rundis$elm_bootstrap$Bootstrap$Grid$Internal$rowAttributes(options),
			A2($elm$core$List$map, $rundis$elm_bootstrap$Bootstrap$Grid$renderCol, cols));
	});
var $elm$html$Html$Attributes$src = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$BlockItem = $elm$core$Basics$identity;
var $elm$html$Html$p = _VirtualDom_node('p');
var $rundis$elm_bootstrap$Bootstrap$Card$Block$text = F2(
	function (attributes, children) {
		return A2(
			$elm$html$Html$p,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('card-text')
					]),
				attributes),
			children);
	});
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$applyModifier = F2(
	function (option, options) {
		switch (option.$) {
			case 0:
				var align = option.a;
				return _Utils_update(
					options,
					{
						H: $elm$core$Maybe$Just(align)
					});
			case 1:
				var coloring = option.a;
				return _Utils_update(
					options,
					{
						J: $elm$core$Maybe$Just(coloring)
					});
			case 2:
				var coloring = option.a;
				return _Utils_update(
					options,
					{
						N: $elm$core$Maybe$Just(coloring)
					});
			default:
				var attrs = option.a;
				return _Utils_update(
					options,
					{
						a3: _Utils_ap(options.a3, attrs)
					});
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$defaultOptions = {H: $elm$core$Maybe$Nothing, a3: _List_Nil, J: $elm$core$Maybe$Nothing, N: $elm$core$Maybe$Nothing};
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$cardAttributes = function (modifiers) {
	var options = A3($elm$core$List$foldl, $rundis$elm_bootstrap$Bootstrap$Card$Internal$applyModifier, $rundis$elm_bootstrap$Bootstrap$Card$Internal$defaultOptions, modifiers);
	return _Utils_ap(
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('card')
			]),
		_Utils_ap(
			function () {
				var _v0 = options.J;
				if (!_v0.$) {
					if (!_v0.a.$) {
						var role = _v0.a.a;
						return _List_fromArray(
							[
								A2($rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass, 'bg', role)
							]);
					} else {
						var role = _v0.a.a;
						return _List_fromArray(
							[
								A2($rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass, 'border', role)
							]);
					}
				} else {
					return _List_Nil;
				}
			}(),
			_Utils_ap(
				function () {
					var _v1 = options.N;
					if (!_v1.$) {
						var color = _v1.a;
						return _List_fromArray(
							[
								$rundis$elm_bootstrap$Bootstrap$Internal$Text$textColorClass(color)
							]);
					} else {
						return _List_Nil;
					}
				}(),
				_Utils_ap(
					function () {
						var _v2 = options.H;
						if (!_v2.$) {
							var align = _v2.a;
							return _List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Internal$Text$textAlignClass(align)
								]);
						} else {
							return _List_Nil;
						}
					}(),
					options.a3))));
};
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$renderBlocks = function (blocks) {
	return A2(
		$elm$core$List$map,
		function (block_) {
			if (!block_.$) {
				var e = block_.a;
				return e;
			} else {
				var e = block_.a;
				return e;
			}
		},
		blocks);
};
var $rundis$elm_bootstrap$Bootstrap$Card$view = function (_v0) {
	var conf = _v0;
	return A2(
		$elm$html$Html$div,
		$rundis$elm_bootstrap$Bootstrap$Card$Internal$cardAttributes(conf.dY),
		_Utils_ap(
			A2(
				$elm$core$List$filterMap,
				$elm$core$Basics$identity,
				_List_fromArray(
					[
						A2(
						$elm$core$Maybe$map,
						function (_v1) {
							var e = _v1;
							return e;
						},
						conf.bo),
						A2(
						$elm$core$Maybe$map,
						function (_v2) {
							var e = _v2;
							return e;
						},
						conf.cB)
					])),
			_Utils_ap(
				$rundis$elm_bootstrap$Bootstrap$Card$Internal$renderBlocks(conf.ct),
				A2(
					$elm$core$List$filterMap,
					$elm$core$Basics$identity,
					_List_fromArray(
						[
							A2(
							$elm$core$Maybe$map,
							function (_v3) {
								var e = _v3;
								return e;
							},
							conf.cy),
							A2(
							$elm$core$Maybe$map,
							function (_v4) {
								var e = _v4;
								return e;
							},
							conf.cA)
						])))));
};
var $author$project$Board$mkMember = function (_v0) {
	var _v1 = _v0.a;
	var name = _v1.a;
	var picture = _v1.b;
	var position = _v0.b;
	var organization = _v0.c;
	return A2(
		$rundis$elm_bootstrap$Bootstrap$Grid$row,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$rundis$elm_bootstrap$Bootstrap$Grid$col,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$elm$html$Html$img,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'width', '200px'),
								$elm$html$Html$Attributes$src(picture)
							]),
						_List_Nil)
					])),
				A2(
				$rundis$elm_bootstrap$Bootstrap$Grid$col,
				_List_fromArray(
					[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
				_List_fromArray(
					[
						$rundis$elm_bootstrap$Bootstrap$Card$view(
						A3(
							$rundis$elm_bootstrap$Bootstrap$Card$block,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
											A2($elm$html$Html$Attributes$style, 'font-size', '20px')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text(position)
										])),
									A2(
									$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
											A2($elm$html$Html$Attributes$style, 'font-size', '20px')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text(organization)
										]))
								]),
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
										A2($elm$html$Html$Attributes$style, 'font-weight', '700')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(name)
									]),
								$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
					]))
			]));
};
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my5 = $elm$html$Html$Attributes$class('my-5');
var $author$project$Board$page = function (model) {
	return _Utils_ap(
		_List_fromArray(
			[
				A2(
				$elm$html$Html$h1,
				_List_fromArray(
					[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my5]),
				_List_fromArray(
					[
						$elm$html$Html$text('Board')
					])),
				A2(
				$elm$html$Html$h2,
				_List_fromArray(
					[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my5]),
				_List_fromArray(
					[
						$elm$html$Html$text('Software:  Tool for Change')
					])),
				A2(
				$rundis$elm_bootstrap$Bootstrap$Grid$row,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$rundis$elm_bootstrap$Bootstrap$Grid$col,
						_List_Nil,
						_List_fromArray(
							[
								$rundis$elm_bootstrap$Bootstrap$Card$view(
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$block,
									_List_Nil,
									_List_fromArray(
										[
											A2(
											$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
											_List_Nil,
											_List_fromArray(
												[
													$elm$html$Html$text('Software: Tool for Change is a project of McMaster University.\n                      Management and strategic direction are overseen by our board, while financial oversight is provided by McMaster Research Finance.')
												]))
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil)))
							]))
					]))
			]),
		A2(
			$elm$core$List$map,
			$author$project$Board$mkMember,
			_List_fromArray(
				[
					_Utils_Tuple3(
					_Utils_Tuple2('Dr Kevin Browne (chair)', 'img/browne_kevin.jpg'),
					'Assistant Professor, Computing and Software',
					'McMaster University'),
					_Utils_Tuple3(
					_Utils_Tuple2('Dr Lori Goff', 'img/LoriGoff.png'),
					'Director, McPhearson Institute',
					'McMaster University'),
					_Utils_Tuple3(
					_Utils_Tuple2('Antonietta Kovach', 'img/ToniKovach.jpg'),
					'Superintendent of Education',
					'Hamilton-Wentworth Catholic District School Board'),
					_Utils_Tuple3(
					_Utils_Tuple2('Jimena Merlo', 'img/JimenaMerlo.jpg'),
					'Manager, Programs & Services',
					'Brampton Multicultural Community Centre'),
					_Utils_Tuple3(
					_Utils_Tuple2('Katherine Hesson-Bolton', 'img/KatherineHesson-Bolton.jpg'),
					'Diversity and Inclusion Officer, Student Success Centre',
					'McMaster University'),
					_Utils_Tuple3(
					_Utils_Tuple2('Margo Foster-Cohen', 'img/MargoFoster-Cohen.png'),
					'Grade 4-8 Enrichment Teacher',
					'Waterloo Region District School Board'),
					_Utils_Tuple3(
					_Utils_Tuple2('Stephanie Koehl', 'img/mentorStephanie.png'),
					'CEO',
					'SkyVolt'),
					_Utils_Tuple3(
					_Utils_Tuple2('Yumna Irfan (ex-officio)', 'img/YumnaIrfan.jpg'),
					'President',
					'McMaster Start Coding')
				])));
};
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt5 = $elm$html$Html$Attributes$class('mt-5');
var $MacCASOutreach$graphicsvg$GraphicSVG$RGBA = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$black = A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 0, 0, 0, 1);
var $author$project$Parameters$campList = _List_fromArray(
	[
		_Utils_Tuple2(
		_Utils_Tuple2(8, 0),
		0),
		_Utils_Tuple2(
		_Utils_Tuple2(8, 1),
		6),
		_Utils_Tuple2(
		_Utils_Tuple2(9, 0),
		1),
		_Utils_Tuple2(
		_Utils_Tuple2(9, 1),
		8),
		_Utils_Tuple2(
		_Utils_Tuple2(10, 0),
		2),
		_Utils_Tuple2(
		_Utils_Tuple2(10, 1),
		4),
		_Utils_Tuple2(
		_Utils_Tuple2(11, 0),
		1),
		_Utils_Tuple2(
		_Utils_Tuple2(11, 1),
		3),
		_Utils_Tuple2(
		_Utils_Tuple2(12, 0),
		0),
		_Utils_Tuple2(
		_Utils_Tuple2(12, 1),
		2),
		_Utils_Tuple2(
		_Utils_Tuple2(13, 0),
		9),
		_Utils_Tuple2(
		_Utils_Tuple2(13, 1),
		6),
		_Utils_Tuple2(
		_Utils_Tuple2(14, 0),
		4),
		_Utils_Tuple2(
		_Utils_Tuple2(14, 1),
		8),
		_Utils_Tuple2(
		_Utils_Tuple2(15, 0),
		0),
		_Utils_Tuple2(
		_Utils_Tuple2(15, 1),
		7)
	]);
var $author$project$Parameters$combineName = function (_v0) {
	var a = _v0.a;
	var b = _v0.b;
	var c = _v0.c;
	return A2(
		$elm$core$String$join,
		' ',
		_List_fromArray(
			[a, b, c]));
};
var $elm$core$Basics$clamp = F3(
	function (low, high, number) {
		return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$ssc = function (n) {
	return A3($elm$core$Basics$clamp, 0, 255, n);
};
var $MacCASOutreach$graphicsvg$GraphicSVG$rgb = F3(
	function (r, g, b) {
		return A4(
			$MacCASOutreach$graphicsvg$GraphicSVG$RGBA,
			$MacCASOutreach$graphicsvg$GraphicSVG$ssc(r),
			$MacCASOutreach$graphicsvg$GraphicSVG$ssc(g),
			$MacCASOutreach$graphicsvg$GraphicSVG$ssc(b),
			1);
	});
var $author$project$Parameters$tabColor = function (tab) {
	switch (tab) {
		case 0:
			return _Utils_Tuple3(191, 17, 46);
		case 1:
			return _Utils_Tuple3(18, 0, 196);
		case 2:
			return _Utils_Tuple3(11, 98, 27);
		case 3:
			return _Utils_Tuple3(110, 36, 124);
		case 10:
			return _Utils_Tuple3(110, 36, 124);
		case 4:
			return _Utils_Tuple3(245, 94, 60);
		case 5:
			return _Utils_Tuple3(0, 160, 255);
		case 9:
			return _Utils_Tuple3(0, 160, 255);
		case 6:
			return _Utils_Tuple3(122, 69, 247);
		case 7:
			return _Utils_Tuple3(255, 13, 154);
		default:
			return _Utils_Tuple3(0, 0, 0);
	}
};
var $author$project$Parameters$gsvgColor = function (tab) {
	var _v0 = $author$project$Parameters$tabColor(tab);
	var r = _v0.a;
	var g = _v0.b;
	var b = _v0.c;
	return A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, r, g, b);
};
var $MacCASOutreach$graphicsvg$GraphicSVG$Clip = F2(
	function (a, b) {
		return {$: 10, a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$clip = F2(
	function (shape1, shape2) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$Clip, shape1, shape2);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$Inked = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$blank = A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 0, 0, 0, 0);
var $MacCASOutreach$graphicsvg$GraphicSVG$ghost = function (stencil) {
	return A3(
		$MacCASOutreach$graphicsvg$GraphicSVG$Inked,
		$elm$core$Maybe$Just($MacCASOutreach$graphicsvg$GraphicSVG$blank),
		$elm$core$Maybe$Nothing,
		stencil);
};
var $MacCASOutreach$graphicsvg$GraphicSVG$Group = function (a) {
	return {$: 7, a: a};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$group = function (shapes) {
	return $MacCASOutreach$graphicsvg$GraphicSVG$Group(shapes);
};
var $MacCASOutreach$graphicsvg$GraphicSVG$Move = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$move = F2(
	function (disp, shape) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$Move, disp, shape);
	});
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $MacCASOutreach$graphicsvg$GraphicSVG$filled = F2(
	function (color, stencil) {
		return A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$Inked,
			$elm$core$Maybe$Just(color),
			$elm$core$Maybe$Nothing,
			stencil);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$Rect = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$rect = F2(
	function (w, h) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$Rect, w, h);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$RoundRect = F3(
	function (a, b, c) {
		return {$: 2, a: a, b: b, c: c};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$roundedRect = F3(
	function (w, h, r) {
		return A3($MacCASOutreach$graphicsvg$GraphicSVG$RoundRect, w, h, r);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$square = function (r) {
	return A2($MacCASOutreach$graphicsvg$GraphicSVG$Rect, r, r);
};
var $MacCASOutreach$graphicsvg$GraphicSVG$AlphaMask = F2(
	function (a, b) {
		return {$: 9, a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$subtract = F2(
	function (shape1, shape2) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$AlphaMask, shape1, shape2);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$white = A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 255, 255, 255, 1);
var $author$project$Parameters$singleFilmstrip = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$subtract,
			$MacCASOutreach$graphicsvg$GraphicSVG$group(
				_List_fromArray(
					[
						$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 18, 13.5)),
						$MacCASOutreach$graphicsvg$GraphicSVG$group(
						A2(
							$elm$core$List$map,
							function (x) {
								return A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$move,
									_Utils_Tuple2(x * 2, 8.5),
									$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
										A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 1, 2, 0.5)));
							},
							A2($elm$core$List$range, -5, 5))),
						$MacCASOutreach$graphicsvg$GraphicSVG$group(
						A2(
							$elm$core$List$map,
							function (x) {
								return A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$move,
									_Utils_Tuple2(x * 2, -8.5),
									$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
										A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 1, 2, 0.5)));
							},
							A2($elm$core$List$range, -5, 5)))
					])),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				$MacCASOutreach$graphicsvg$GraphicSVG$white,
				$MacCASOutreach$graphicsvg$GraphicSVG$square(20)))
		]));
var $author$project$Parameters$animationIcon = A2(
	$MacCASOutreach$graphicsvg$GraphicSVG$clip,
	$MacCASOutreach$graphicsvg$GraphicSVG$ghost(
		$MacCASOutreach$graphicsvg$GraphicSVG$square(30)),
	$MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				$author$project$Parameters$singleFilmstrip,
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(20, 0),
				$author$project$Parameters$singleFilmstrip),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(-20, 0),
				$author$project$Parameters$singleFilmstrip)
			])));
var $elm$core$Basics$pi = _Basics_pi;
var $elm$core$Basics$degrees = function (angleInDegrees) {
	return (angleInDegrees * $elm$core$Basics$pi) / 180;
};
var $MacCASOutreach$graphicsvg$GraphicSVG$Polygon = function (a) {
	return {$: 5, a: a};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$polygon = function (ptList) {
	return $MacCASOutreach$graphicsvg$GraphicSVG$Polygon(ptList);
};
var $MacCASOutreach$graphicsvg$GraphicSVG$Rotate = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$rotate = F2(
	function (theta, shape) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$Rotate, theta, shape);
	});
var $author$project$Parameters$bang = $MacCASOutreach$graphicsvg$GraphicSVG$group(
	_List_fromArray(
		[
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 255, 255, 255),
			$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
				_List_fromArray(
					[
						_Utils_Tuple2(0, 10),
						_Utils_Tuple2(3, 0),
						_Utils_Tuple2(-3, 0)
					]))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
			$elm$core$Basics$degrees(51),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 255, 255, 255),
				$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
					_List_fromArray(
						[
							_Utils_Tuple2(0, 10),
							_Utils_Tuple2(3, 0),
							_Utils_Tuple2(-3, 0)
						])))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
			$elm$core$Basics$degrees(102),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 255, 255, 255),
				$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
					_List_fromArray(
						[
							_Utils_Tuple2(0, 10),
							_Utils_Tuple2(3, 0),
							_Utils_Tuple2(-3, 0)
						])))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
			$elm$core$Basics$degrees(153),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 255, 255, 255),
				$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
					_List_fromArray(
						[
							_Utils_Tuple2(0, 10),
							_Utils_Tuple2(3, 0),
							_Utils_Tuple2(-3, 0)
						])))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
			$elm$core$Basics$degrees(204),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 255, 255, 255),
				$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
					_List_fromArray(
						[
							_Utils_Tuple2(0, 10),
							_Utils_Tuple2(3, 0),
							_Utils_Tuple2(-3, 0)
						])))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
			$elm$core$Basics$degrees(255),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 255, 255, 255),
				$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
					_List_fromArray(
						[
							_Utils_Tuple2(0, 10),
							_Utils_Tuple2(3, 0),
							_Utils_Tuple2(-3, 0)
						])))),
			A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
			$elm$core$Basics$degrees(306),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 255, 255, 255),
				$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
					_List_fromArray(
						[
							_Utils_Tuple2(0, 10),
							_Utils_Tuple2(3, 0),
							_Utils_Tuple2(-3, 0)
						]))))
		]));
var $MacCASOutreach$graphicsvg$GraphicSVG$Scale = F3(
	function (a, b, c) {
		return {$: 4, a: a, b: b, c: c};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$scale = F2(
	function (s, shape) {
		return A3($MacCASOutreach$graphicsvg$GraphicSVG$Scale, s, s, shape);
	});
var $author$project$Parameters$comicIcon = A2(
	$MacCASOutreach$graphicsvg$GraphicSVG$move,
	_Utils_Tuple2(0, -7),
	A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$scale,
		0.5,
		$MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$subtract,
					$MacCASOutreach$graphicsvg$GraphicSVG$group(
						_List_fromArray(
							[
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(0, 13),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									$MacCASOutreach$graphicsvg$GraphicSVG$white,
									A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 1, 44.5))),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$scale,
								1.3,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$move,
									_Utils_Tuple2(18, 17),
									$author$project$Parameters$bang))
							])),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$white,
						$MacCASOutreach$graphicsvg$GraphicSVG$polygon(
							_List_fromArray(
								[
									_Utils_Tuple2(-35, 40),
									_Utils_Tuple2(0, 35),
									_Utils_Tuple2(35, 40),
									_Utils_Tuple2(35, -5),
									_Utils_Tuple2(0, -10),
									_Utils_Tuple2(-35, -5)
								]))))
				]))));
var $MacCASOutreach$graphicsvg$GraphicSVG$Circle = function (a) {
	return {$: 0, a: a};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$circle = function (r) {
	return $MacCASOutreach$graphicsvg$GraphicSVG$Circle(r);
};
var $MacCASOutreach$graphicsvg$GraphicSVG$ssa = function (n) {
	return A3($elm$core$Basics$clamp, 0, 1, n);
};
var $MacCASOutreach$graphicsvg$GraphicSVG$rgba = F4(
	function (r, g, b, a) {
		return A4(
			$MacCASOutreach$graphicsvg$GraphicSVG$RGBA,
			$MacCASOutreach$graphicsvg$GraphicSVG$ssc(r),
			$MacCASOutreach$graphicsvg$GraphicSVG$ssc(g),
			$MacCASOutreach$graphicsvg$GraphicSVG$ssc(b),
			$MacCASOutreach$graphicsvg$GraphicSVG$ssa(a));
	});
var $author$project$Parameters$gameIcon = A2(
	$MacCASOutreach$graphicsvg$GraphicSVG$scale,
	0.25,
	$MacCASOutreach$graphicsvg$GraphicSVG$group(
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$subtract,
				$MacCASOutreach$graphicsvg$GraphicSVG$group(
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(-32, -7),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$filled,
								A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 46, 56, 66),
								A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 20, 8))),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(-32, -7),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$filled,
								A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 46, 56, 66),
								A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 8, 20))),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(6, -7),
							$MacCASOutreach$graphicsvg$GraphicSVG$group(
								_List_fromArray(
									[
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$move,
										_Utils_Tuple2(25, 10),
										A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$filled,
											A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 46, 56, 66),
											$MacCASOutreach$graphicsvg$GraphicSVG$circle(5))),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$move,
										_Utils_Tuple2(25, -10),
										A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$filled,
											A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 46, 56, 66),
											$MacCASOutreach$graphicsvg$GraphicSVG$circle(5))),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$move,
										_Utils_Tuple2(15, 0),
										A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$filled,
											A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 46, 56, 66),
											$MacCASOutreach$graphicsvg$GraphicSVG$circle(5))),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$move,
										_Utils_Tuple2(35, 0),
										A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$filled,
											A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 46, 56, 66),
											$MacCASOutreach$graphicsvg$GraphicSVG$circle(5)))
									])))
						])),
				$MacCASOutreach$graphicsvg$GraphicSVG$group(
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							$MacCASOutreach$graphicsvg$GraphicSVG$white,
							A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 60, 50)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(30, -7),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$filled,
								$MacCASOutreach$graphicsvg$GraphicSVG$white,
								$MacCASOutreach$graphicsvg$GraphicSVG$circle(32))),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(-30, -7),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$filled,
								$MacCASOutreach$graphicsvg$GraphicSVG$white,
								$MacCASOutreach$graphicsvg$GraphicSVG$circle(32)))
						]))),
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				A4($MacCASOutreach$graphicsvg$GraphicSVG$rgba, 0, 0, 0, 0),
				A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 175, 175, 10))
			])));
var $elm$core$Basics$cos = _Basics_cos;
var $elm$core$Basics$sin = _Basics_sin;
var $elm$core$Basics$turns = function (angleInTurns) {
	return (2 * $elm$core$Basics$pi) * angleInTurns;
};
var $MacCASOutreach$graphicsvg$GraphicSVG$ptOnCircle = F3(
	function (r, n, cn) {
		var angle = $elm$core$Basics$turns(cn / n);
		return _Utils_Tuple2(
			r * $elm$core$Basics$cos(angle),
			r * $elm$core$Basics$sin(angle));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$ngon = F2(
	function (n, r) {
		return $MacCASOutreach$graphicsvg$GraphicSVG$Polygon(
			A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeL,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$ptOnCircle, r, n),
					$elm$core$Basics$toFloat),
				A2($elm$core$List$range, 0, n)));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$outlined = F3(
	function (style, outlineClr, stencil) {
		var lineStyle = function () {
			if (!style.$) {
				return $elm$core$Maybe$Nothing;
			} else {
				return $elm$core$Maybe$Just(
					_Utils_Tuple2(style, outlineClr));
			}
		}();
		return A3($MacCASOutreach$graphicsvg$GraphicSVG$Inked, $elm$core$Maybe$Nothing, lineStyle, stencil);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$Solid = function (a) {
	return {$: 1, a: a};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$solid = function (th) {
	return $MacCASOutreach$graphicsvg$GraphicSVG$Solid(th);
};
var $author$project$Parameters$icon = function (tab) {
	switch (tab) {
		case 0:
			return $author$project$Parameters$animationIcon;
		case 1:
			return $author$project$Parameters$comicIcon;
		case 2:
			return $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
		case 3:
			return $author$project$Parameters$gameIcon;
		case 10:
			return $author$project$Parameters$gameIcon;
		case 4:
			return $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
		case 5:
			return $MacCASOutreach$graphicsvg$GraphicSVG$group(
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(-5, 0),
						A3(
							$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
							$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
							$MacCASOutreach$graphicsvg$GraphicSVG$white,
							A2($MacCASOutreach$graphicsvg$GraphicSVG$ngon, 4, 10))),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(5, 0),
						A3(
							$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
							$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
							$MacCASOutreach$graphicsvg$GraphicSVG$white,
							A2($MacCASOutreach$graphicsvg$GraphicSVG$ngon, 4, 10)))
					]));
		case 9:
			return $MacCASOutreach$graphicsvg$GraphicSVG$group(
				_List_fromArray(
					[
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(-5, 0),
						A3(
							$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
							$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
							$MacCASOutreach$graphicsvg$GraphicSVG$white,
							A2($MacCASOutreach$graphicsvg$GraphicSVG$ngon, 4, 10))),
						A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(5, 0),
						A3(
							$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
							$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
							$MacCASOutreach$graphicsvg$GraphicSVG$white,
							A2($MacCASOutreach$graphicsvg$GraphicSVG$ngon, 4, 10)))
					]));
		case 6:
			return $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
		case 7:
			return $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
		default:
			return $MacCASOutreach$graphicsvg$GraphicSVG$group(_List_Nil);
	}
};
var $author$project$Parameters$name = function (thisTab) {
	switch (thisTab) {
		case 0:
			return _Utils_Tuple3('Animation', '', 'Camp');
		case 1:
			return _Utils_Tuple3('Comics', '', 'Camp');
		case 2:
			return _Utils_Tuple3('Adventure', '', 'Camp');
		case 3:
			return _Utils_Tuple3('Mini-', 'Games', 'Camp');
		case 10:
			return _Utils_Tuple3('Mini-', 'Games', 'Saturdays');
		case 4:
			return _Utils_Tuple3('Journey', 'into', '3D');
		case 5:
			return _Utils_Tuple3('Design', '', 'Thinking');
		case 9:
			return _Utils_Tuple3('Design', '', 'Thinking');
		case 6:
			return _Utils_Tuple3('Code', 'like', 'Picasso');
		case 7:
			return _Utils_Tuple3('Code', 'like', 'Escher');
		default:
			return _Utils_Tuple3('Code', 'like', 'Beethoven');
	}
};
var $author$project$Parameters$camps = A2(
	$elm$core$List$map,
	function (_v0) {
		var week = _v0.a;
		var camp = _v0.b;
		return _Utils_Tuple2(
			week,
			_Utils_Tuple3(
				$author$project$Parameters$combineName(
					$author$project$Parameters$name(camp)),
				$author$project$Parameters$icon(camp),
				$author$project$Parameters$gsvgColor(camp)));
	},
	$author$project$Parameters$campList);
var $MacCASOutreach$graphicsvg$GraphicSVG$Face = F8(
	function (a, b, c, d, e, f, g, h) {
		return {$: 0, a: a, b: b, c: c, d: d, e: e, f: f, g: g, h: h};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$FixedWidth = {$: 2};
var $MacCASOutreach$graphicsvg$GraphicSVG$Text = F2(
	function (a, b) {
		return {$: 7, a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$fixedwidth = function (stencil) {
	if (stencil.$ === 7) {
		var _v1 = stencil.a;
		var si = _v1.a;
		var bo = _v1.b;
		var i = _v1.c;
		var u = _v1.d;
		var s = _v1.e;
		var sel = _v1.f;
		var f = _v1.g;
		var c = _v1.h;
		var str = stencil.b;
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$Text,
			A8($MacCASOutreach$graphicsvg$GraphicSVG$Face, si, bo, i, u, s, sel, $MacCASOutreach$graphicsvg$GraphicSVG$FixedWidth, c),
			str);
	} else {
		var a = stencil;
		return a;
	}
};
var $author$project$CalendarGSVG$EnterLesson = function (a) {
	return {$: 2, a: a};
};
var $author$project$CalendarGSVG$LeaveLesson = function (a) {
	return {$: 1, a: a};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$Link = F2(
	function (a, b) {
		return {$: 13, a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$addHyperlink = F2(
	function (link, shape) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$Link, link, shape);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$EnterAt = F2(
	function (a, b) {
		return {$: 17, a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$EnterShape = F2(
	function (a, b) {
		return {$: 16, a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$Everything = {$: 11};
var $MacCASOutreach$graphicsvg$GraphicSVG$Exit = F2(
	function (a, b) {
		return {$: 18, a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$ExitAt = F2(
	function (a, b) {
		return {$: 19, a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$ForeignObject = F3(
	function (a, b, c) {
		return {$: 1, a: a, b: b, c: c};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$GraphPaper = F3(
	function (a, b, c) {
		return {$: 30, a: a, b: b, c: c};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$GroupOutline = function (a) {
	return {$: 8, a: a};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$MouseDown = F2(
	function (a, b) {
		return {$: 20, a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$MouseDownAt = F2(
	function (a, b) {
		return {$: 21, a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$MouseUp = F2(
	function (a, b) {
		return {$: 22, a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$MouseUpAt = F2(
	function (a, b) {
		return {$: 23, a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$MoveOverAt = F2(
	function (a, b) {
		return {$: 24, a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$NoLine = {$: 0};
var $MacCASOutreach$graphicsvg$GraphicSVG$Notathing = {$: 12};
var $MacCASOutreach$graphicsvg$GraphicSVG$Skew = F3(
	function (a, b, c) {
		return {$: 5, a: a, b: b, c: c};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$Tap = F2(
	function (a, b) {
		return {$: 14, a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$TapAt = F2(
	function (a, b) {
		return {$: 15, a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$TouchEnd = F2(
	function (a, b) {
		return {$: 26, a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$TouchEndAt = F2(
	function (a, b) {
		return {$: 28, a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$TouchMoveAt = F2(
	function (a, b) {
		return {$: 29, a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$TouchStart = F2(
	function (a, b) {
		return {$: 25, a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$TouchStartAt = F2(
	function (a, b) {
		return {$: 27, a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$Transformed = F2(
	function (a, b) {
		return {$: 6, a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$repaint = F2(
	function (color, shape) {
		switch (shape.$) {
			case 0:
				if (shape.b.$ === 1) {
					var _v1 = shape.b;
					var st = shape.c;
					return A3(
						$MacCASOutreach$graphicsvg$GraphicSVG$Inked,
						$elm$core$Maybe$Just(color),
						$elm$core$Maybe$Nothing,
						st);
				} else {
					var _v2 = shape.b.a;
					var lt = _v2.a;
					var st = shape.c;
					return A3(
						$MacCASOutreach$graphicsvg$GraphicSVG$Inked,
						$elm$core$Maybe$Just(color),
						$elm$core$Maybe$Just(
							_Utils_Tuple2(lt, color)),
						st);
				}
			case 2:
				var s = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Move,
					s,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 3:
				var r = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Rotate,
					r,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 4:
				var sx = shape.a;
				var sy = shape.b;
				var sh = shape.c;
				return A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$Scale,
					sx,
					sy,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 5:
				var skx = shape.a;
				var sky = shape.b;
				var sh = shape.c;
				return A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$Skew,
					skx,
					sky,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 6:
				var tm = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Transformed,
					tm,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 7:
				var shapes = shape.a;
				return $MacCASOutreach$graphicsvg$GraphicSVG$Group(
					A2(
						$elm$core$List$map,
						$MacCASOutreach$graphicsvg$GraphicSVG$repaint(color),
						shapes));
			case 8:
				var cmbndshp = shape.a;
				return $MacCASOutreach$graphicsvg$GraphicSVG$GroupOutline(
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, cmbndshp));
			case 13:
				var s = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Link,
					s,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 9:
				var reg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$AlphaMask,
					reg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 10:
				var reg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Clip,
					reg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 14:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Tap,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 15:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TapAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 16:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$EnterShape,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 17:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$EnterAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 18:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Exit,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 19:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$ExitAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 20:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$MouseDown,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 21:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$MouseDownAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 22:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$MouseUp,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 23:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$MouseUpAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 24:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$MoveOverAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 25:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TouchStart,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 26:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TouchEnd,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 27:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TouchStartAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 28:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TouchEndAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 29:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TouchMoveAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, color, sh));
			case 1:
				var w = shape.a;
				var h = shape.b;
				var htm = shape.c;
				return A3($MacCASOutreach$graphicsvg$GraphicSVG$ForeignObject, w, h, htm);
			case 11:
				return $MacCASOutreach$graphicsvg$GraphicSVG$Everything;
			case 12:
				return $MacCASOutreach$graphicsvg$GraphicSVG$Notathing;
			default:
				var s = shape.a;
				var th = shape.b;
				return A3($MacCASOutreach$graphicsvg$GraphicSVG$GraphPaper, s, th, color);
		}
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$addOutline = F3(
	function (style, outlineClr, shape) {
		addOutline:
		while (true) {
			var lineStyle = function () {
				if (!style.$) {
					return $elm$core$Maybe$Nothing;
				} else {
					return $elm$core$Maybe$Just(
						_Utils_Tuple2(style, outlineClr));
				}
			}();
			switch (shape.$) {
				case 0:
					var clr = shape.a;
					var st = shape.c;
					return A3($MacCASOutreach$graphicsvg$GraphicSVG$Inked, clr, lineStyle, st);
				case 2:
					var s = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Move,
						s,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 3:
					var r = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Rotate,
						r,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 4:
					var sx = shape.a;
					var sy = shape.b;
					var sh = shape.c;
					return A3(
						$MacCASOutreach$graphicsvg$GraphicSVG$Scale,
						sx,
						sy,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 5:
					var skx = shape.a;
					var sky = shape.b;
					var sh = shape.c;
					return A3(
						$MacCASOutreach$graphicsvg$GraphicSVG$Skew,
						skx,
						sky,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 6:
					var tm = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Transformed,
						tm,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 7:
					var list = shape.a;
					var innerlist = A2(
						$elm$core$List$filterMap,
						function (shp) {
							if (shp.$ === 8) {
								return $elm$core$Maybe$Nothing;
							} else {
								return $elm$core$Maybe$Just(
									A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, $MacCASOutreach$graphicsvg$GraphicSVG$NoLine, $MacCASOutreach$graphicsvg$GraphicSVG$black, shp));
							}
						},
						list);
					if (!innerlist.b) {
						return $MacCASOutreach$graphicsvg$GraphicSVG$Group(_List_Nil);
					} else {
						if (!innerlist.b.b) {
							var hd = innerlist.a;
							var $temp$style = style,
								$temp$outlineClr = outlineClr,
								$temp$shape = hd;
							style = $temp$style;
							outlineClr = $temp$outlineClr;
							shape = $temp$shape;
							continue addOutline;
						} else {
							if (_Utils_eq(lineStyle, $elm$core$Maybe$Nothing)) {
								return $MacCASOutreach$graphicsvg$GraphicSVG$Group(innerlist);
							} else {
								var outlnshp = $MacCASOutreach$graphicsvg$GraphicSVG$GroupOutline(
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$subtract,
										$MacCASOutreach$graphicsvg$GraphicSVG$Group(innerlist),
										$MacCASOutreach$graphicsvg$GraphicSVG$Group(
											A2(
												$elm$core$List$map,
												A2($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr),
												innerlist))));
								return $MacCASOutreach$graphicsvg$GraphicSVG$Group(
									_Utils_ap(
										innerlist,
										_List_fromArray(
											[outlnshp])));
							}
						}
					}
				case 8:
					var cmbndshp = shape.a;
					return $MacCASOutreach$graphicsvg$GraphicSVG$GroupOutline(cmbndshp);
				case 9:
					var reg = shape.a;
					var sh = shape.b;
					var ptrn = A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, $MacCASOutreach$graphicsvg$GraphicSVG$NoLine, $MacCASOutreach$graphicsvg$GraphicSVG$black, reg);
					var inside = A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, $MacCASOutreach$graphicsvg$GraphicSVG$NoLine, $MacCASOutreach$graphicsvg$GraphicSVG$black, sh);
					if (_Utils_eq(lineStyle, $elm$core$Maybe$Nothing)) {
						return A2($MacCASOutreach$graphicsvg$GraphicSVG$AlphaMask, ptrn, inside);
					} else {
						var ptrnlnd = A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, reg);
						var ptrnoutln = A2($MacCASOutreach$graphicsvg$GraphicSVG$Clip, inside, ptrnlnd);
						var newshp = A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh);
						var shpoutln = A2($MacCASOutreach$graphicsvg$GraphicSVG$Clip, inside, newshp);
						return A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$AlphaMask,
							ptrn,
							$MacCASOutreach$graphicsvg$GraphicSVG$Group(
								_List_fromArray(
									[
										inside,
										$MacCASOutreach$graphicsvg$GraphicSVG$GroupOutline(
										$MacCASOutreach$graphicsvg$GraphicSVG$Group(
											_List_fromArray(
												[shpoutln, ptrnoutln])))
									])));
					}
				case 10:
					var reg = shape.a;
					var sh = shape.b;
					var ptrn = A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, $MacCASOutreach$graphicsvg$GraphicSVG$NoLine, $MacCASOutreach$graphicsvg$GraphicSVG$black, reg);
					var inside = A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, $MacCASOutreach$graphicsvg$GraphicSVG$NoLine, $MacCASOutreach$graphicsvg$GraphicSVG$black, sh);
					if (_Utils_eq(lineStyle, $elm$core$Maybe$Nothing)) {
						return A2($MacCASOutreach$graphicsvg$GraphicSVG$Clip, ptrn, inside);
					} else {
						var ptrnlnd = A3(
							$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
							style,
							outlineClr,
							A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, $MacCASOutreach$graphicsvg$GraphicSVG$blank, reg));
						var ptrnoutln = A2($MacCASOutreach$graphicsvg$GraphicSVG$Clip, inside, ptrnlnd);
						var newshp = A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh);
						var shpoutln = A2($MacCASOutreach$graphicsvg$GraphicSVG$Clip, inside, newshp);
						return A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Clip,
							ptrn,
							$MacCASOutreach$graphicsvg$GraphicSVG$Group(
								_List_fromArray(
									[
										inside,
										$MacCASOutreach$graphicsvg$GraphicSVG$GroupOutline(
										$MacCASOutreach$graphicsvg$GraphicSVG$Group(
											_List_fromArray(
												[shpoutln, ptrnoutln])))
									])));
					}
				case 13:
					var s = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Link,
						s,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 14:
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Tap,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 15:
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$TapAt,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 16:
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$EnterShape,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 17:
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$EnterAt,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 18:
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$Exit,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 19:
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$ExitAt,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 20:
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$MouseDown,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 21:
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$MouseDownAt,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 22:
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$MouseUp,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 23:
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$MouseUpAt,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 24:
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$MoveOverAt,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 25:
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$TouchStart,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 26:
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$TouchEnd,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 27:
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$TouchStartAt,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 28:
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$TouchEndAt,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 29:
					var userMsg = shape.a;
					var sh = shape.b;
					return A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$TouchMoveAt,
						userMsg,
						A3($MacCASOutreach$graphicsvg$GraphicSVG$addOutline, style, outlineClr, sh));
				case 1:
					var w = shape.a;
					var h = shape.b;
					var htm = shape.c;
					return A3($MacCASOutreach$graphicsvg$GraphicSVG$ForeignObject, w, h, htm);
				case 11:
					return $MacCASOutreach$graphicsvg$GraphicSVG$Everything;
				case 12:
					return $MacCASOutreach$graphicsvg$GraphicSVG$Notathing;
				default:
					var s = shape.a;
					var th = shape.b;
					var clr = shape.c;
					return A3($MacCASOutreach$graphicsvg$GraphicSVG$GraphPaper, s, th, clr);
			}
		}
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$bold = function (stencil) {
	if (stencil.$ === 7) {
		var _v1 = stencil.a;
		var si = _v1.a;
		var bo = _v1.b;
		var i = _v1.c;
		var u = _v1.d;
		var s = _v1.e;
		var sel = _v1.f;
		var f = _v1.g;
		var c = _v1.h;
		var str = stencil.b;
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$Text,
			A8($MacCASOutreach$graphicsvg$GraphicSVG$Face, si, true, i, u, s, sel, f, c),
			str);
	} else {
		var a = stencil;
		return a;
	}
};
var $MacCASOutreach$graphicsvg$GraphicSVG$AlignCentred = 1;
var $MacCASOutreach$graphicsvg$GraphicSVG$centered = function (stencil) {
	if (stencil.$ === 7) {
		var _v1 = stencil.a;
		var si = _v1.a;
		var bo = _v1.b;
		var i = _v1.c;
		var u = _v1.d;
		var s = _v1.e;
		var sel = _v1.f;
		var f = _v1.g;
		var c = _v1.h;
		var str = stencil.b;
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$Text,
			A8($MacCASOutreach$graphicsvg$GraphicSVG$Face, si, bo, i, u, s, sel, f, 1),
			str);
	} else {
		var a = stencil;
		return a;
	}
};
var $MacCASOutreach$graphicsvg$GraphicSVG$lightGrey = A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 238, 238, 236, 1);
var $MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent = F2(
	function (alpha, shape) {
		switch (shape.$) {
			case 1:
				var w = shape.a;
				var h = shape.b;
				var htm = shape.c;
				return A3($MacCASOutreach$graphicsvg$GraphicSVG$ForeignObject, w, h, htm);
			case 2:
				var s = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Move,
					s,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 3:
				var r = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Rotate,
					r,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 4:
				var sx = shape.a;
				var sy = shape.b;
				var sh = shape.c;
				return A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$Scale,
					sx,
					sy,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 5:
				var skx = shape.a;
				var sky = shape.b;
				var sh = shape.c;
				return A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$Skew,
					skx,
					sky,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 6:
				var tm = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Transformed,
					tm,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 7:
				var list = shape.a;
				return $MacCASOutreach$graphicsvg$GraphicSVG$Group(
					A2(
						$elm$core$List$map,
						$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent(alpha),
						list));
			case 8:
				var cmbndshp = shape.a;
				return $MacCASOutreach$graphicsvg$GraphicSVG$GroupOutline(
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, cmbndshp));
			case 13:
				var s = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Link,
					s,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 9:
				var reg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$AlphaMask,
					reg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 10:
				var reg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Clip,
					reg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 11:
				return $MacCASOutreach$graphicsvg$GraphicSVG$Everything;
			case 12:
				return $MacCASOutreach$graphicsvg$GraphicSVG$Notathing;
			case 14:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Tap,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 15:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TapAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 16:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$EnterShape,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 17:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$EnterAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 18:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$Exit,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 19:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$ExitAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 20:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$MouseDown,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 21:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$MouseDownAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 22:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$MouseUp,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 23:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$MouseUpAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 24:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$MoveOverAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 25:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TouchStart,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 26:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TouchEnd,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 27:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TouchStartAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 28:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TouchEndAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 29:
				var userMsg = shape.a;
				var sh = shape.b;
				return A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$TouchMoveAt,
					userMsg,
					A2($MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent, alpha, sh));
			case 30:
				var s = shape.a;
				var th = shape.b;
				var _v9 = shape.c;
				var r = _v9.a;
				var g = _v9.b;
				var b = _v9.c;
				var a = _v9.d;
				return A3(
					$MacCASOutreach$graphicsvg$GraphicSVG$GraphPaper,
					s,
					th,
					A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, r, g, b, a * alpha));
			default:
				if (!shape.a.$) {
					if (!shape.b.$) {
						var _v4 = shape.a.a;
						var r = _v4.a;
						var g = _v4.b;
						var b = _v4.c;
						var a = _v4.d;
						var _v5 = shape.b.a;
						var lineType = _v5.a;
						var _v6 = _v5.b;
						var sr = _v6.a;
						var sg = _v6.b;
						var sb = _v6.c;
						var sa = _v6.d;
						var st = shape.c;
						return A3(
							$MacCASOutreach$graphicsvg$GraphicSVG$Inked,
							$elm$core$Maybe$Just(
								A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, r, g, b, a * alpha)),
							$elm$core$Maybe$Just(
								_Utils_Tuple2(
									lineType,
									A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, sr, sg, sb, sa * alpha))),
							st);
					} else {
						var _v7 = shape.a.a;
						var r = _v7.a;
						var g = _v7.b;
						var b = _v7.c;
						var a = _v7.d;
						var _v8 = shape.b;
						var st = shape.c;
						return A3(
							$MacCASOutreach$graphicsvg$GraphicSVG$Inked,
							$elm$core$Maybe$Just(
								A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, r, g, b, a * alpha)),
							$elm$core$Maybe$Nothing,
							st);
					}
				} else {
					if (!shape.b.$) {
						var _v1 = shape.a;
						var _v2 = shape.b.a;
						var lineType = _v2.a;
						var _v3 = _v2.b;
						var sr = _v3.a;
						var sg = _v3.b;
						var sb = _v3.c;
						var sa = _v3.d;
						var st = shape.c;
						return A3(
							$MacCASOutreach$graphicsvg$GraphicSVG$Inked,
							$elm$core$Maybe$Nothing,
							$elm$core$Maybe$Just(
								_Utils_Tuple2(
									lineType,
									A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, sr, sg, sb, sa * alpha))),
							st);
					} else {
						var _v10 = shape.a;
						var _v11 = shape.b;
						var st = shape.c;
						return shape;
					}
				}
		}
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$notifyEnter = F2(
	function (msg, shape) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$EnterShape, msg, shape);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$notifyLeave = F2(
	function (msg, shape) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$Exit, msg, shape);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$size = F2(
	function (sze, stencil) {
		if (stencil.$ === 7) {
			var _v1 = stencil.a;
			var si = _v1.a;
			var bo = _v1.b;
			var i = _v1.c;
			var u = _v1.d;
			var s = _v1.e;
			var sel = _v1.f;
			var f = _v1.g;
			var c = _v1.h;
			var str = stencil.b;
			return A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$Text,
				A8($MacCASOutreach$graphicsvg$GraphicSVG$Face, sze, bo, i, u, s, sel, f, c),
				str);
		} else {
			var a = stencil;
			return a;
		}
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$AlignLeft = 0;
var $MacCASOutreach$graphicsvg$GraphicSVG$Serif = {$: 0};
var $MacCASOutreach$graphicsvg$GraphicSVG$text = function (str) {
	return A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$Text,
		A8($MacCASOutreach$graphicsvg$GraphicSVG$Face, 12, false, false, false, false, false, $MacCASOutreach$graphicsvg$GraphicSVG$Serif, 0),
		str);
};
var $author$project$CalendarGSVG$title2link = function (title) {
	return ((title === 'L1+L2') || ((title === 'L3+L4') || (title === 'Herogram'))) ? 'https://forms.gle/q8oUaBYXcZihmxX98' : 'https://www.eng.mcmaster.ca/forms/mcmaster-start-coding-lessons-2021';
};
var $author$project$CalendarGSVG$lessonButton = F2(
	function (lessonHighlight, _v0) {
		var _v1 = _v0.a;
		var wIdx = _v1.a;
		var dayIdx = _v1.b;
		var numInWeek = _v1.c;
		var _v2 = _v0.b;
		var title = _v2.a;
		var clr = _v2.b;
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$addHyperlink,
			$author$project$CalendarGSVG$title2link(title),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$notifyLeave,
				$author$project$CalendarGSVG$LeaveLesson(
					_Utils_Tuple3(wIdx, dayIdx, numInWeek)),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$notifyEnter,
					$author$project$CalendarGSVG$EnterLesson(
						_Utils_Tuple3(wIdx, dayIdx, numInWeek)),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2((dayIdx * 20) - 60, (155 - (20 * wIdx)) - (6 * numInWeek)),
						$MacCASOutreach$graphicsvg$GraphicSVG$group(
							_List_fromArray(
								[
									_Utils_eq(
									lessonHighlight,
									$elm$core$Maybe$Just(
										_Utils_Tuple3(wIdx, dayIdx, numInWeek))) ? A3(
									$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
									$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
									clr,
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
										0.5,
										A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$filled,
											clr,
											A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 18, 5, 2.5)))) : A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									clr,
									A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 18, 5, 2.5)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$move,
									_Utils_Tuple2(0, -1),
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$filled,
										$MacCASOutreach$graphicsvg$GraphicSVG$lightGrey,
										(_Utils_eq(
											lessonHighlight,
											$elm$core$Maybe$Just(
												_Utils_Tuple3(wIdx, dayIdx, numInWeek))) ? $MacCASOutreach$graphicsvg$GraphicSVG$bold : $elm$core$Basics$identity)(
											$MacCASOutreach$graphicsvg$GraphicSVG$centered(
												A2(
													$MacCASOutreach$graphicsvg$GraphicSVG$size,
													4,
													$MacCASOutreach$graphicsvg$GraphicSVG$fixedwidth(
														$MacCASOutreach$graphicsvg$GraphicSVG$text(title)))))))
								]))))));
	});
var $author$project$Parameters$freeClr = A3($MacCASOutreach$graphicsvg$GraphicSVG$rgb, 50, 180, 100);
var $elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var $MacCASOutreach$graphicsvg$GraphicSVG$findChroma = F2(
	function (lit, sat) {
		return (1 - $elm$core$Basics$abs((2 * lit) - 1)) * sat;
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$findM = F2(
	function (lit, chroma) {
		return lit - (0.5 * chroma);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$mapTriple = F2(
	function (f, _v0) {
		var a1 = _v0.a;
		var a2 = _v0.b;
		var a3 = _v0.c;
		return _Utils_Tuple3(
			f(a1),
			f(a2),
			f(a3));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$modFloat = F2(
	function (x, m) {
		return x - (m * $elm$core$Basics$floor(x / m));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$findHue_ = function (hue) {
	return hue / $elm$core$Basics$degrees(60);
};
var $MacCASOutreach$graphicsvg$GraphicSVG$findX = F2(
	function (chroma, hue) {
		return chroma * (1 - $elm$core$Basics$abs(
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$modFloat,
				$MacCASOutreach$graphicsvg$GraphicSVG$findHue_(hue),
				2) - 1));
	});
var $elm$core$Basics$ge = _Utils_ge;
var $MacCASOutreach$graphicsvg$GraphicSVG$toRGB_ = F3(
	function (hue, sat, lit) {
		var hue_ = $MacCASOutreach$graphicsvg$GraphicSVG$findHue_(hue);
		var chroma = A2($MacCASOutreach$graphicsvg$GraphicSVG$findChroma, lit, sat);
		var x = A2($MacCASOutreach$graphicsvg$GraphicSVG$findX, chroma, hue);
		return ((hue_ >= 0) && (hue_ < 1)) ? _Utils_Tuple3(chroma, x, 0) : (((hue_ >= 1) && (hue_ < 2)) ? _Utils_Tuple3(x, chroma, 0) : (((hue_ >= 2) && (hue_ < 3)) ? _Utils_Tuple3(0, chroma, x) : (((hue_ >= 3) && (hue_ < 4)) ? _Utils_Tuple3(0, x, chroma) : (((hue_ >= 4) && (hue_ < 5)) ? _Utils_Tuple3(x, 0, chroma) : (((hue_ >= 5) && (hue_ < 6)) ? _Utils_Tuple3(chroma, 0, x) : _Utils_Tuple3(0, 0, 0))))));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$convert = F3(
	function (hue, sat, lit) {
		var hue_ = A2($MacCASOutreach$graphicsvg$GraphicSVG$modFloat, hue, 2 * $elm$core$Basics$pi);
		var rgb_ = A3($MacCASOutreach$graphicsvg$GraphicSVG$toRGB_, hue_, sat, lit);
		var chroma = A2($MacCASOutreach$graphicsvg$GraphicSVG$findChroma, lit, sat);
		var m = A2($MacCASOutreach$graphicsvg$GraphicSVG$findM, lit, chroma);
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$mapTriple,
			function (x) {
				return x * 255;
			},
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$mapTriple,
				function (x) {
					return x + m;
				},
				rgb_));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$hsl = F3(
	function (h, s, l) {
		var _v0 = A3($MacCASOutreach$graphicsvg$GraphicSVG$convert, h, s, l);
		var r = _v0.a;
		var g = _v0.b;
		var b = _v0.c;
		return A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, r, g, b, 1);
	});
var $author$project$Parameters$lessonClr = function (num) {
	switch (num) {
		case 5:
			return A3($MacCASOutreach$graphicsvg$GraphicSVG$hsl, 3.5, 1, 0.4);
		case 6:
			return A3($MacCASOutreach$graphicsvg$GraphicSVG$hsl, 3.6, 1, 0.4);
		case 7:
			return A3($MacCASOutreach$graphicsvg$GraphicSVG$hsl, 3.9, 1, 0.4);
		case 8:
			return A3($MacCASOutreach$graphicsvg$GraphicSVG$hsl, 4.4, 1, 0.4);
		case 9:
			return A3($MacCASOutreach$graphicsvg$GraphicSVG$hsl, 4.7, 1, 0.4);
		case 12:
			return A3($MacCASOutreach$graphicsvg$GraphicSVG$hsl, 5.5, 1, 0.4);
		case 13:
			return A3($MacCASOutreach$graphicsvg$GraphicSVG$hsl, 6, 1, 0.4);
		default:
			return A3($MacCASOutreach$graphicsvg$GraphicSVG$hsl, 1, 1, 0.5);
	}
};
var $author$project$Parameters$weekOfLessons = function (wk) {
	return _List_fromArray(
		[
			_Utils_Tuple2(
			_Utils_Tuple3(wk, 1, 0),
			_Utils_Tuple2('L1+L2', $author$project$Parameters$freeClr)),
			_Utils_Tuple2(
			_Utils_Tuple3(wk, 2, 0),
			_Utils_Tuple2('L3+L4', $author$project$Parameters$freeClr)),
			_Utils_Tuple2(
			_Utils_Tuple3(wk, 3, 0),
			_Utils_Tuple2(
				'L5',
				$author$project$Parameters$lessonClr(5))),
			_Utils_Tuple2(
			_Utils_Tuple3(wk, 4, 0),
			_Utils_Tuple2(
				'L6',
				$author$project$Parameters$lessonClr(6))),
			_Utils_Tuple2(
			_Utils_Tuple3(wk, 5, 0),
			_Utils_Tuple2(
				'L7',
				$author$project$Parameters$lessonClr(7))),
			_Utils_Tuple2(
			_Utils_Tuple3(wk, 1, 1),
			_Utils_Tuple2(
				'L8',
				$author$project$Parameters$lessonClr(8))),
			_Utils_Tuple2(
			_Utils_Tuple3(wk, 2, 1),
			_Utils_Tuple2(
				'L9',
				$author$project$Parameters$lessonClr(9))),
			_Utils_Tuple2(
			_Utils_Tuple3(wk, 3, 1),
			_Utils_Tuple2('L1+L2', $author$project$Parameters$freeClr)),
			_Utils_Tuple2(
			_Utils_Tuple3(wk, 4, 1),
			_Utils_Tuple2('L3+L4', $author$project$Parameters$freeClr)),
			_Utils_Tuple2(
			_Utils_Tuple3(wk, 5, 1),
			_Utils_Tuple2('Herogram', $author$project$Parameters$freeClr))
		]);
};
var $author$project$Parameters$lessons = A2(
	$elm$core$List$concatMap,
	$author$project$Parameters$weekOfLessons,
	A2($elm$core$List$range, 0, 6));
var $MacCASOutreach$graphicsvg$GraphicSVG$Path = function (a) {
	return {$: 6, a: a};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$openPolygon = function (ptList) {
	return $MacCASOutreach$graphicsvg$GraphicSVG$Path(ptList);
};
var $MacCASOutreach$graphicsvg$GraphicSVG$Widget$ViewHeight = function (a) {
	return {$: 1, a: a};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$Widget$ViewWidth = function (a) {
	return {$: 0, a: a};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$Widget$defaultViewOption = _List_fromArray(
	[
		$MacCASOutreach$graphicsvg$GraphicSVG$Widget$ViewWidth('100%'),
		$MacCASOutreach$graphicsvg$GraphicSVG$Widget$ViewHeight('100%')
	]);
var $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var $elm$svg$Svg$clipPath = $elm$svg$Svg$trustedNode('clipPath');
var $elm$svg$Svg$defs = $elm$svg$Svg$trustedNode('defs');
var $elm$core$String$fromFloat = _String_fromNumber;
var $elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var $elm$svg$Svg$Attributes$id = _VirtualDom_attribute('id');
var $elm$svg$Svg$rect = $elm$svg$Svg$trustedNode('rect');
var $elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var $elm$svg$Svg$Attributes$x = _VirtualDom_attribute('x');
var $elm$svg$Svg$Attributes$y = _VirtualDom_attribute('y');
var $MacCASOutreach$graphicsvg$GraphicSVG$Widget$cPath = F3(
	function (id, w, h) {
		return A2(
			$elm$svg$Svg$defs,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$svg$Svg$clipPath,
					_List_fromArray(
						[
							$elm$svg$Svg$Attributes$id('cPath' + id)
						]),
					_List_fromArray(
						[
							A2(
							$elm$svg$Svg$rect,
							_List_fromArray(
								[
									$elm$svg$Svg$Attributes$width(
									$elm$core$String$fromFloat(w)),
									$elm$svg$Svg$Attributes$height(
									$elm$core$String$fromFloat(h)),
									$elm$svg$Svg$Attributes$x(
									$elm$core$String$fromFloat((-w) / 2)),
									$elm$svg$Svg$Attributes$y(
									$elm$core$String$fromFloat((-h) / 2))
								]),
							_List_Nil)
						]))
				]));
	});
var $elm$svg$Svg$Attributes$clipPath = _VirtualDom_attribute('clip-path');
var $elm$core$Basics$not = _Basics_not;
var $MacCASOutreach$graphicsvg$GraphicSVG$Widget$convertCoords = F5(
	function (ww, sh, cw, ch, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		var aspectout = (!(!sh)) ? (ww / sh) : (4 / 3);
		var aspectin = (!(!ch)) ? (cw / ch) : (4 / 3);
		var scaledInX = _Utils_cmp(aspectout, aspectin) < 0;
		var scaledInY = _Utils_cmp(aspectout, aspectin) > 0;
		var cscale = scaledInX ? (ww / cw) : (scaledInY ? (sh / ch) : 1);
		return _Utils_Tuple2((x - (ww / 2)) / cscale, (y + (sh / 2)) / cscale);
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$Widget$convertViewOption = function (vo) {
	switch (vo.$) {
		case 0:
			var w = vo.a;
			return A2($elm$html$Html$Attributes$style, 'width', w);
		case 1:
			var h = vo.a;
			return A2($elm$html$Html$Attributes$style, 'height', h);
		default:
			var s = vo.a;
			var o = vo.b;
			return A2($elm$html$Html$Attributes$style, s, o);
	}
};
var $elm$svg$Svg$a = $elm$svg$Svg$trustedNode('a');
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $elm$svg$Svg$circle = $elm$svg$Svg$trustedNode('circle');
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
};
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$contenteditable = $elm$html$Html$Attributes$boolProperty('contentEditable');
var $MacCASOutreach$graphicsvg$GraphicSVG$pairToString = function (_v0) {
	var x = _v0.a;
	var y = _v0.b;
	return $elm$core$String$fromFloat(x) + (',' + $elm$core$String$fromFloat(y));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$bezierStringHelper = function (_v0) {
	var _v1 = _v0.a;
	var a = _v1.a;
	var b = _v1.b;
	var _v2 = _v0.b;
	var c = _v2.a;
	var d = _v2.b;
	return ' Q ' + ($MacCASOutreach$graphicsvg$GraphicSVG$pairToString(
		_Utils_Tuple2(a, b)) + (' ' + $MacCASOutreach$graphicsvg$GraphicSVG$pairToString(
		_Utils_Tuple2(c, d))));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$createBezierString = F2(
	function (first, list) {
		return 'M ' + ($MacCASOutreach$graphicsvg$GraphicSVG$pairToString(first) + $elm$core$String$concat(
			A2($elm$core$List$map, $MacCASOutreach$graphicsvg$GraphicSVG$bezierStringHelper, list)));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$createGraphX = F5(
	function (h, s, th, c, x) {
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(x * s, 0),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				c,
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, th, h)));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$createGraphY = F5(
	function (w, s, th, c, y) {
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$move,
			_Utils_Tuple2(0, y * s),
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				c,
				A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, w, th)));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$createGraph = F4(
	function (_v0, s, th, c) {
		var w = _v0.a;
		var h = _v0.b;
		var syi = $elm$core$Basics$ceiling(h / (s * 2));
		var ylisti = A2($elm$core$List$range, -syi, syi);
		var sxi = $elm$core$Basics$ceiling(w / (s * 2));
		var xlisti = A2($elm$core$List$range, -sxi, sxi);
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_Utils_ap(
				A2(
					$elm$core$List$map,
					A2(
						$elm$core$Basics$composeL,
						A4($MacCASOutreach$graphicsvg$GraphicSVG$createGraphX, h, s, th, c),
						$elm$core$Basics$toFloat),
					xlisti),
				A2(
					$elm$core$List$map,
					A2(
						$elm$core$Basics$composeL,
						A4($MacCASOutreach$graphicsvg$GraphicSVG$createGraphY, w, s, th, c),
						$elm$core$Basics$toFloat),
					ylisti)));
	});
var $elm$svg$Svg$Attributes$cx = _VirtualDom_attribute('cx');
var $elm$svg$Svg$Attributes$cy = _VirtualDom_attribute('cy');
var $elm$svg$Svg$Attributes$d = _VirtualDom_attribute('d');
var $elm$svg$Svg$ellipse = $elm$svg$Svg$trustedNode('ellipse');
var $elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var $elm$svg$Svg$Attributes$fillOpacity = _VirtualDom_attribute('fill-opacity');
var $elm$svg$Svg$Attributes$fontSize = _VirtualDom_attribute('font-size');
var $elm$svg$Svg$foreignObject = $elm$svg$Svg$trustedNode('foreignObject');
var $elm$svg$Svg$g = $elm$svg$Svg$trustedNode('g');
var $MacCASOutreach$graphicsvg$GraphicSVG$ident = _Utils_Tuple2(
	_Utils_Tuple3(1, 0, 0),
	_Utils_Tuple3(0, 1, 0));
var $elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						$elm$core$List$cons,
						sep,
						A2($elm$core$List$cons, x, rest));
				});
			var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
			return A2($elm$core$List$cons, hd, spersed);
		}
	});
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$svg$Svg$mask = $elm$svg$Svg$trustedNode('mask');
var $elm$svg$Svg$Attributes$mask = _VirtualDom_attribute('mask');
var $MacCASOutreach$graphicsvg$GraphicSVG$matrixMult = F2(
	function (_v0, _v3) {
		var _v1 = _v0.a;
		var a = _v1.a;
		var c = _v1.b;
		var e = _v1.c;
		var _v2 = _v0.b;
		var b = _v2.a;
		var d = _v2.b;
		var f = _v2.c;
		var _v4 = _v3.a;
		var a1 = _v4.a;
		var c1 = _v4.b;
		var e1 = _v4.c;
		var _v5 = _v3.b;
		var b1 = _v5.a;
		var d1 = _v5.b;
		var f1 = _v5.c;
		return _Utils_Tuple2(
			_Utils_Tuple3((a * a1) + (c * b1), (a * c1) + (c * d1), (e + (a * e1)) + (c * f1)),
			_Utils_Tuple3((b * a1) + (d * b1), (b * c1) + (d * d1), (f + (b * e1)) + (d * f1)));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$mkAlpha = function (_v0) {
	var a = _v0.d;
	return $elm$core$String$fromFloat(a);
};
var $elm$core$Basics$round = _Basics_round;
var $elm$core$Basics$modBy = _Basics_modBy;
var $MacCASOutreach$graphicsvg$GraphicSVG$toHexHelper = function (dec) {
	switch (dec) {
		case 0:
			return '0';
		case 1:
			return '1';
		case 2:
			return '2';
		case 3:
			return '3';
		case 4:
			return '4';
		case 5:
			return '5';
		case 6:
			return '6';
		case 7:
			return '7';
		case 8:
			return '8';
		case 9:
			return '9';
		case 10:
			return 'A';
		case 11:
			return 'B';
		case 12:
			return 'C';
		case 13:
			return 'D';
		case 14:
			return 'E';
		case 15:
			return 'F';
		default:
			return '';
	}
};
var $MacCASOutreach$graphicsvg$GraphicSVG$toHex = function (dec) {
	var second = A2($elm$core$Basics$modBy, 16, dec);
	var first = (dec / 16) | 0;
	return _Utils_ap(
		$MacCASOutreach$graphicsvg$GraphicSVG$toHexHelper(first),
		$MacCASOutreach$graphicsvg$GraphicSVG$toHexHelper(second));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$mkRGB = function (_v0) {
	var r = _v0.a;
	var g = _v0.b;
	var b = _v0.c;
	return '#' + ($MacCASOutreach$graphicsvg$GraphicSVG$toHex(
		$elm$core$Basics$round(r)) + ($MacCASOutreach$graphicsvg$GraphicSVG$toHex(
		$elm$core$Basics$round(g)) + $MacCASOutreach$graphicsvg$GraphicSVG$toHex(
		$elm$core$Basics$round(b))));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$moveT = F2(
	function (_v0, _v1) {
		var u = _v0.a;
		var v = _v0.b;
		var _v2 = _v1.a;
		var a = _v2.a;
		var c = _v2.b;
		var tx = _v2.c;
		var _v3 = _v1.b;
		var b = _v3.a;
		var d = _v3.b;
		var ty = _v3.c;
		return _Utils_Tuple2(
			_Utils_Tuple3(a, c, (tx + (a * u)) + (c * v)),
			_Utils_Tuple3(b, d, (ty + (b * u)) + (d * v)));
	});
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 0, a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $MacCASOutreach$graphicsvg$GraphicSVG$mousePosDecoder = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (x, y) {
			return _Utils_Tuple2(x, -y);
		}),
	A2($elm$json$Json$Decode$field, 'offsetX', $elm$json$Json$Decode$float),
	A2($elm$json$Json$Decode$field, 'offsetY', $elm$json$Json$Decode$float));
var $MacCASOutreach$graphicsvg$GraphicSVG$onEnterAt = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseover',
		A2($elm$json$Json$Decode$map, msg, $MacCASOutreach$graphicsvg$GraphicSVG$mousePosDecoder));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$onLeaveAt = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseleave',
		A2($elm$json$Json$Decode$map, msg, $MacCASOutreach$graphicsvg$GraphicSVG$mousePosDecoder));
};
var $elm$html$Html$Events$onMouseDown = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mousedown',
		$elm$json$Json$Decode$succeed(msg));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$onMouseDownAt = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mousedown',
		A2($elm$json$Json$Decode$map, msg, $MacCASOutreach$graphicsvg$GraphicSVG$mousePosDecoder));
};
var $elm$html$Html$Events$onMouseEnter = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseenter',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$Events$onMouseLeave = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseleave',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$Events$onMouseUp = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseup',
		$elm$json$Json$Decode$succeed(msg));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$onMouseUpAt = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseup',
		A2($elm$json$Json$Decode$map, msg, $MacCASOutreach$graphicsvg$GraphicSVG$mousePosDecoder));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$onMoveAt = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mousemove',
		A2($elm$json$Json$Decode$map, msg, $MacCASOutreach$graphicsvg$GraphicSVG$mousePosDecoder));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$onTapAt = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		A2($elm$json$Json$Decode$map, msg, $MacCASOutreach$graphicsvg$GraphicSVG$mousePosDecoder));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$onTouchEnd = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'touchend',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$virtual_dom$VirtualDom$MayPreventDefault = function (a) {
	return {$: 2, a: a};
};
var $elm$html$Html$Events$preventDefaultOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayPreventDefault(decoder));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$TouchPos = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $MacCASOutreach$graphicsvg$GraphicSVG$touchDecoder = $elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$json$Json$Decode$at,
			_List_fromArray(
				['touches', '0']),
			A3(
				$elm$json$Json$Decode$map2,
				$MacCASOutreach$graphicsvg$GraphicSVG$TouchPos,
				A2($elm$json$Json$Decode$field, 'pageX', $elm$json$Json$Decode$float),
				A2($elm$json$Json$Decode$field, 'pageY', $elm$json$Json$Decode$float))),
			A3(
			$elm$json$Json$Decode$map2,
			$MacCASOutreach$graphicsvg$GraphicSVG$TouchPos,
			A2($elm$json$Json$Decode$field, 'pageX', $elm$json$Json$Decode$float),
			A2($elm$json$Json$Decode$field, 'pageY', $elm$json$Json$Decode$float))
		]));
var $MacCASOutreach$graphicsvg$GraphicSVG$touchToPair = function (tp) {
	var x = tp.a;
	var y = tp.b;
	return _Utils_Tuple2(x, -y);
};
var $MacCASOutreach$graphicsvg$GraphicSVG$onTouchMove = function (msg) {
	return A2(
		$elm$html$Html$Events$preventDefaultOn,
		'touchmove',
		A2(
			$elm$json$Json$Decode$map,
			function (a) {
				return _Utils_Tuple2(
					A2($elm$core$Basics$composeL, msg, $MacCASOutreach$graphicsvg$GraphicSVG$touchToPair)(a),
					true);
			},
			$MacCASOutreach$graphicsvg$GraphicSVG$touchDecoder));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$onTouchStart = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'touchstart',
		$elm$json$Json$Decode$succeed(msg));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$onTouchStartAt = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'touchstart',
		A2(
			$elm$json$Json$Decode$map,
			A2($elm$core$Basics$composeL, msg, $MacCASOutreach$graphicsvg$GraphicSVG$touchToPair),
			$MacCASOutreach$graphicsvg$GraphicSVG$touchDecoder));
};
var $elm$svg$Svg$path = $elm$svg$Svg$trustedNode('path');
var $elm$svg$Svg$Attributes$points = _VirtualDom_attribute('points');
var $elm$svg$Svg$polygon = $elm$svg$Svg$trustedNode('polygon');
var $elm$svg$Svg$polyline = $elm$svg$Svg$trustedNode('polyline');
var $elm$svg$Svg$Attributes$r = _VirtualDom_attribute('r');
var $MacCASOutreach$graphicsvg$GraphicSVG$rotateT = F2(
	function (rad, _v0) {
		var _v1 = _v0.a;
		var a = _v1.a;
		var c = _v1.b;
		var tx = _v1.c;
		var _v2 = _v0.b;
		var b = _v2.a;
		var d = _v2.b;
		var ty = _v2.c;
		var sinX = $elm$core$Basics$sin(rad);
		var cosX = $elm$core$Basics$cos(rad);
		return _Utils_Tuple2(
			_Utils_Tuple3((a * cosX) + (c * sinX), (c * cosX) - (a * sinX), tx),
			_Utils_Tuple3((b * cosX) + (d * sinX), (d * cosX) - (b * sinX), ty));
	});
var $elm$svg$Svg$Attributes$rx = _VirtualDom_attribute('rx');
var $elm$svg$Svg$Attributes$ry = _VirtualDom_attribute('ry');
var $MacCASOutreach$graphicsvg$GraphicSVG$scaleT = F3(
	function (sx, sy, _v0) {
		var _v1 = _v0.a;
		var a = _v1.a;
		var c = _v1.b;
		var tx = _v1.c;
		var _v2 = _v0.b;
		var b = _v2.a;
		var d = _v2.b;
		var ty = _v2.c;
		return _Utils_Tuple2(
			_Utils_Tuple3(a * sx, c * sy, tx),
			_Utils_Tuple3(b * sx, d * sy, ty));
	});
var $elm$core$Basics$tan = _Basics_tan;
var $MacCASOutreach$graphicsvg$GraphicSVG$skewT = F3(
	function (skx, sky, _v0) {
		var _v1 = _v0.a;
		var a = _v1.a;
		var c = _v1.b;
		var tx = _v1.c;
		var _v2 = _v0.b;
		var b = _v2.a;
		var d = _v2.b;
		var ty = _v2.c;
		var tanY = $elm$core$Basics$tan(-sky);
		var tanX = $elm$core$Basics$tan(-skx);
		return _Utils_Tuple2(
			_Utils_Tuple3(a + (c * tanY), c + (a * tanX), tx),
			_Utils_Tuple3(b + (d * tanY), d + (b * tanX), ty));
	});
var $elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute('stroke');
var $elm$svg$Svg$Attributes$strokeDasharray = _VirtualDom_attribute('stroke-dasharray');
var $elm$svg$Svg$Attributes$strokeOpacity = _VirtualDom_attribute('stroke-opacity');
var $elm$svg$Svg$Attributes$strokeWidth = _VirtualDom_attribute('stroke-width');
var $elm$svg$Svg$Attributes$style = _VirtualDom_attribute('style');
var $elm$svg$Svg$Attributes$target = _VirtualDom_attribute('target');
var $elm$svg$Svg$text = $elm$virtual_dom$VirtualDom$text;
var $elm$svg$Svg$Attributes$textAnchor = _VirtualDom_attribute('text-anchor');
var $elm$svg$Svg$text_ = $elm$svg$Svg$trustedNode('text');
var $elm$svg$Svg$Attributes$transform = _VirtualDom_attribute('transform');
var $elm$svg$Svg$Attributes$xlinkHref = function (value) {
	return A3(
		_VirtualDom_attributeNS,
		'http://www.w3.org/1999/xlink',
		'xlink:href',
		_VirtualDom_noJavaScriptUri(value));
};
var $elm$svg$Svg$Attributes$xmlSpace = A2(_VirtualDom_attributeNS, 'http://www.w3.org/XML/1998/namespace', 'xml:space');
var $MacCASOutreach$graphicsvg$GraphicSVG$createSVG = F7(
	function (id, w, h, trans, msgWrapper, positionWrapper, shape) {
		createSVG:
		while (true) {
			switch (shape.$) {
				case 0:
					var fillClr = shape.a;
					var lt = shape.b;
					var stencil = shape.c;
					var strokeAttrs = function () {
						if (lt.$ === 1) {
							return _List_Nil;
						} else {
							switch (lt.a.a.$) {
								case 1:
									var _v11 = lt.a;
									var th = _v11.a.a;
									var strokeClr = _v11.b;
									var nonStroke = function () {
										var _v12 = strokeClr;
										var opcty = _v12.d;
										return (th <= 0) || (opcty <= 0);
									}();
									return nonStroke ? _List_Nil : _List_fromArray(
										[
											$elm$svg$Svg$Attributes$strokeWidth(
											$elm$core$String$fromFloat(th)),
											$elm$svg$Svg$Attributes$stroke(
											$MacCASOutreach$graphicsvg$GraphicSVG$mkRGB(strokeClr)),
											$elm$svg$Svg$Attributes$strokeOpacity(
											$MacCASOutreach$graphicsvg$GraphicSVG$mkAlpha(strokeClr))
										]);
								case 2:
									var _v13 = lt.a;
									var _v14 = _v13.a;
									var dashes = _v14.a;
									var th = _v14.b;
									var strokeClr = _v13.b;
									var nonStroke = function () {
										var _v15 = strokeClr;
										var opcty = _v15.d;
										return (th <= 0) || ((opcty <= 0) || A2(
											$elm$core$List$all,
											function (_v16) {
												var on = _v16.a;
												return !on;
											},
											dashes));
									}();
									return nonStroke ? _List_Nil : _Utils_ap(
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$strokeWidth(
												$elm$core$String$fromFloat(th)),
												$elm$svg$Svg$Attributes$stroke(
												$MacCASOutreach$graphicsvg$GraphicSVG$mkRGB(strokeClr)),
												$elm$svg$Svg$Attributes$strokeOpacity(
												$MacCASOutreach$graphicsvg$GraphicSVG$mkAlpha(strokeClr))
											]),
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$strokeDasharray(
												$elm$core$String$concat(
													A2(
														$elm$core$List$intersperse,
														',',
														A2($elm$core$List$map, $MacCASOutreach$graphicsvg$GraphicSVG$pairToString, dashes))))
											]));
								default:
									var _v17 = lt.a;
									var _v18 = _v17.a;
									return _List_Nil;
							}
						}
					}();
					var nonexistBody = function () {
						if (fillClr.$ === 1) {
							return true;
						} else {
							return false;
						}
					}();
					var clrAttrs = function () {
						if (fillClr.$ === 1) {
							return _List_fromArray(
								[
									$elm$svg$Svg$Attributes$fill('none')
								]);
						} else {
							var bodyClr = fillClr.a;
							return _List_fromArray(
								[
									$elm$svg$Svg$Attributes$fill(
									$MacCASOutreach$graphicsvg$GraphicSVG$mkRGB(bodyClr)),
									$elm$svg$Svg$Attributes$fillOpacity(
									$MacCASOutreach$graphicsvg$GraphicSVG$mkAlpha(bodyClr))
								]);
						}
					}();
					var _v1 = trans;
					var _v2 = _v1.a;
					var a = _v2.a;
					var c = _v2.b;
					var tx = _v2.c;
					var _v3 = _v1.b;
					var b = _v3.a;
					var d = _v3.b;
					var ty = _v3.c;
					var transAttrs = _List_fromArray(
						[
							$elm$svg$Svg$Attributes$transform(
							'matrix(' + ($elm$core$String$concat(
								A2(
									$elm$core$List$intersperse,
									',',
									A2(
										$elm$core$List$map,
										$elm$core$String$fromFloat,
										_List_fromArray(
											[a, -b, c, -d, tx, -ty])))) + ')'))
						]);
					var attrs = _Utils_ap(
						transAttrs,
						_Utils_ap(clrAttrs, strokeAttrs));
					if (nonexistBody && $elm$core$List$isEmpty(strokeAttrs)) {
						return A2($elm$svg$Svg$g, _List_Nil, _List_Nil);
					} else {
						switch (stencil.$) {
							case 0:
								var r = stencil.a;
								return A2(
									$elm$svg$Svg$circle,
									_Utils_ap(
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$cx('0'),
												$elm$svg$Svg$Attributes$cy('0'),
												$elm$svg$Svg$Attributes$r(
												$elm$core$String$fromFloat(r))
											]),
										attrs),
									_List_Nil);
							case 1:
								var rw = stencil.a;
								var rh = stencil.b;
								return A2(
									$elm$svg$Svg$rect,
									_Utils_ap(
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$x(
												$elm$core$String$fromFloat((-rw) / 2)),
												$elm$svg$Svg$Attributes$y(
												$elm$core$String$fromFloat((-rh) / 2)),
												$elm$svg$Svg$Attributes$width(
												$elm$core$String$fromFloat(rw)),
												$elm$svg$Svg$Attributes$height(
												$elm$core$String$fromFloat(rh))
											]),
										attrs),
									_List_Nil);
							case 2:
								var rw = stencil.a;
								var rh = stencil.b;
								var r = stencil.c;
								return A2(
									$elm$svg$Svg$rect,
									_Utils_ap(
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$x(
												$elm$core$String$fromFloat((-rw) / 2)),
												$elm$svg$Svg$Attributes$y(
												$elm$core$String$fromFloat((-rh) / 2)),
												$elm$svg$Svg$Attributes$rx(
												$elm$core$String$fromFloat(r)),
												$elm$svg$Svg$Attributes$ry(
												$elm$core$String$fromFloat(r)),
												$elm$svg$Svg$Attributes$width(
												$elm$core$String$fromFloat(rw)),
												$elm$svg$Svg$Attributes$height(
												$elm$core$String$fromFloat(rh))
											]),
										attrs),
									_List_Nil);
							case 3:
								var ow = stencil.a;
								var oh = stencil.b;
								return A2(
									$elm$svg$Svg$ellipse,
									_Utils_ap(
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$cx('0'),
												$elm$svg$Svg$Attributes$cy('0'),
												$elm$svg$Svg$Attributes$rx(
												$elm$core$String$fromFloat(0.5 * ow)),
												$elm$svg$Svg$Attributes$ry(
												$elm$core$String$fromFloat(0.5 * oh))
											]),
										attrs),
									_List_Nil);
							case 5:
								var vertices = stencil.a;
								return A2(
									$elm$svg$Svg$polygon,
									_Utils_ap(
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$points(
												$elm$core$String$concat(
													A2(
														$elm$core$List$intersperse,
														' ',
														A2($elm$core$List$map, $MacCASOutreach$graphicsvg$GraphicSVG$pairToString, vertices))))
											]),
										attrs),
									_List_Nil);
							case 6:
								var vertices = stencil.a;
								return A2(
									$elm$svg$Svg$polyline,
									_Utils_ap(
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$points(
												$elm$core$String$concat(
													A2(
														$elm$core$List$intersperse,
														' ',
														A2($elm$core$List$map, $MacCASOutreach$graphicsvg$GraphicSVG$pairToString, vertices))))
											]),
										attrs),
									_List_Nil);
							case 4:
								var start = stencil.a;
								var pts = stencil.b;
								return A2(
									$elm$svg$Svg$path,
									_Utils_ap(
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$d(
												A2($MacCASOutreach$graphicsvg$GraphicSVG$createBezierString, start, pts))
											]),
										attrs),
									_List_Nil);
							default:
								var _v5 = stencil.a;
								var si = _v5.a;
								var bo = _v5.b;
								var i = _v5.c;
								var u = _v5.d;
								var s = _v5.e;
								var sel = _v5.f;
								var f = _v5.g;
								var align = _v5.h;
								var str = stencil.b;
								var txtDec = (u && s) ? 'text-decoration: underline line-through;' : (u ? 'text-decoration: underline;' : (s ? 'text-decoration: line-through;' : ''));
								var select = (!sel) ? '-webkit-touch-callout: none;\n-webkit-user-select: none;\n-khtml-user-select: none;\n-moz-user-select: none;\n-ms-user-select: none;\nuser-select: none;cursor: default;' : '';
								var it = i ? 'font-style: italic;' : '';
								var font = function () {
									switch (f.$) {
										case 1:
											return 'sans-serif;';
										case 0:
											return 'serif;';
										case 2:
											return 'monospace;';
										default:
											var fStr = f.a;
											return fStr + ';';
									}
								}();
								var bol = bo ? 'font-weight: bold;' : '';
								var sty = bol + (it + (txtDec + ('font-family: ' + (font + select))));
								var anchor = function () {
									switch (align) {
										case 1:
											return 'middle';
										case 0:
											return 'start';
										default:
											return 'end';
									}
								}();
								return A2(
									$elm$svg$Svg$text_,
									_Utils_ap(
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$x('0'),
												$elm$svg$Svg$Attributes$y('0'),
												$elm$svg$Svg$Attributes$style(sty),
												$elm$svg$Svg$Attributes$fontSize(
												$elm$core$String$fromFloat(si)),
												$elm$svg$Svg$Attributes$textAnchor(anchor),
												$elm$html$Html$Attributes$contenteditable(true)
											]),
										_Utils_ap(
											_List_fromArray(
												[
													$elm$svg$Svg$Attributes$transform(
													'matrix(' + ($elm$core$String$concat(
														A2(
															$elm$core$List$intersperse,
															',',
															A2(
																$elm$core$List$map,
																$elm$core$String$fromFloat,
																_List_fromArray(
																	[a, -b, -c, d, tx, -ty])))) + ')'))
												]),
											_Utils_ap(
												_List_fromArray(
													[
														$elm$svg$Svg$Attributes$xmlSpace('preserve')
													]),
												_Utils_ap(clrAttrs, strokeAttrs)))),
									_List_fromArray(
										[
											$elm$svg$Svg$text(str)
										]));
						}
					}
				case 1:
					var fw = shape.a;
					var fh = shape.b;
					var htm = shape.c;
					var _v19 = trans;
					var _v20 = _v19.a;
					var a = _v20.a;
					var c = _v20.b;
					var tx = _v20.c;
					var _v21 = _v19.b;
					var b = _v21.a;
					var d = _v21.b;
					var ty = _v21.c;
					return A2(
						$elm$svg$Svg$foreignObject,
						_List_fromArray(
							[
								$elm$svg$Svg$Attributes$width(
								$elm$core$String$fromFloat(fw)),
								$elm$svg$Svg$Attributes$height(
								$elm$core$String$fromFloat(fh)),
								$elm$svg$Svg$Attributes$transform(
								'matrix(' + ($elm$core$String$concat(
									A2(
										$elm$core$List$intersperse,
										',',
										A2(
											$elm$core$List$map,
											$elm$core$String$fromFloat,
											_List_fromArray(
												[a, -b, -c, d, tx, -ty])))) + ')'))
							]),
						_List_fromArray(
							[
								A2($elm$html$Html$map, msgWrapper, htm)
							]));
				case 2:
					var v = shape.a;
					var sh = shape.b;
					var $temp$id = id,
						$temp$w = w,
						$temp$h = h,
						$temp$trans = A2($MacCASOutreach$graphicsvg$GraphicSVG$moveT, v, trans),
						$temp$msgWrapper = msgWrapper,
						$temp$positionWrapper = positionWrapper,
						$temp$shape = sh;
					id = $temp$id;
					w = $temp$w;
					h = $temp$h;
					trans = $temp$trans;
					msgWrapper = $temp$msgWrapper;
					positionWrapper = $temp$positionWrapper;
					shape = $temp$shape;
					continue createSVG;
				case 11:
					var $temp$id = id,
						$temp$w = w,
						$temp$h = h,
						$temp$trans = $MacCASOutreach$graphicsvg$GraphicSVG$ident,
						$temp$msgWrapper = msgWrapper,
						$temp$positionWrapper = positionWrapper,
						$temp$shape = A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$white,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, w, h));
					id = $temp$id;
					w = $temp$w;
					h = $temp$h;
					trans = $temp$trans;
					msgWrapper = $temp$msgWrapper;
					positionWrapper = $temp$positionWrapper;
					shape = $temp$shape;
					continue createSVG;
				case 12:
					var $temp$id = id,
						$temp$w = w,
						$temp$h = h,
						$temp$trans = $MacCASOutreach$graphicsvg$GraphicSVG$ident,
						$temp$msgWrapper = msgWrapper,
						$temp$positionWrapper = positionWrapper,
						$temp$shape = A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$filled,
						$MacCASOutreach$graphicsvg$GraphicSVG$black,
						A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, w, h));
					id = $temp$id;
					w = $temp$w;
					h = $temp$h;
					trans = $temp$trans;
					msgWrapper = $temp$msgWrapper;
					positionWrapper = $temp$positionWrapper;
					shape = $temp$shape;
					continue createSVG;
				case 3:
					var deg = shape.a;
					var sh = shape.b;
					var $temp$id = id,
						$temp$w = w,
						$temp$h = h,
						$temp$trans = A2($MacCASOutreach$graphicsvg$GraphicSVG$rotateT, deg, trans),
						$temp$msgWrapper = msgWrapper,
						$temp$positionWrapper = positionWrapper,
						$temp$shape = sh;
					id = $temp$id;
					w = $temp$w;
					h = $temp$h;
					trans = $temp$trans;
					msgWrapper = $temp$msgWrapper;
					positionWrapper = $temp$positionWrapper;
					shape = $temp$shape;
					continue createSVG;
				case 4:
					var sx = shape.a;
					var sy = shape.b;
					var sh = shape.c;
					var $temp$id = id,
						$temp$w = w,
						$temp$h = h,
						$temp$trans = A3($MacCASOutreach$graphicsvg$GraphicSVG$scaleT, sx, sy, trans),
						$temp$msgWrapper = msgWrapper,
						$temp$positionWrapper = positionWrapper,
						$temp$shape = sh;
					id = $temp$id;
					w = $temp$w;
					h = $temp$h;
					trans = $temp$trans;
					msgWrapper = $temp$msgWrapper;
					positionWrapper = $temp$positionWrapper;
					shape = $temp$shape;
					continue createSVG;
				case 5:
					var sx = shape.a;
					var sy = shape.b;
					var sh = shape.c;
					var $temp$id = id,
						$temp$w = w,
						$temp$h = h,
						$temp$trans = A3($MacCASOutreach$graphicsvg$GraphicSVG$skewT, sx, sy, trans),
						$temp$msgWrapper = msgWrapper,
						$temp$positionWrapper = positionWrapper,
						$temp$shape = sh;
					id = $temp$id;
					w = $temp$w;
					h = $temp$h;
					trans = $temp$trans;
					msgWrapper = $temp$msgWrapper;
					positionWrapper = $temp$positionWrapper;
					shape = $temp$shape;
					continue createSVG;
				case 6:
					var tm = shape.a;
					var sh = shape.b;
					var $temp$id = id,
						$temp$w = w,
						$temp$h = h,
						$temp$trans = A2($MacCASOutreach$graphicsvg$GraphicSVG$matrixMult, trans, tm),
						$temp$msgWrapper = msgWrapper,
						$temp$positionWrapper = positionWrapper,
						$temp$shape = sh;
					id = $temp$id;
					w = $temp$w;
					h = $temp$h;
					trans = $temp$trans;
					msgWrapper = $temp$msgWrapper;
					positionWrapper = $temp$positionWrapper;
					shape = $temp$shape;
					continue createSVG;
				case 13:
					var href = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$a,
						_List_fromArray(
							[
								$elm$svg$Svg$Attributes$xlinkHref(href),
								$elm$svg$Svg$Attributes$target('_blank')
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 9:
					var region = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								$elm$svg$Svg$defs,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$elm$svg$Svg$mask,
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$id('m' + id)
											]),
										_List_fromArray(
											[
												A7(
												$MacCASOutreach$graphicsvg$GraphicSVG$createSVG,
												id + 'm',
												w,
												h,
												trans,
												msgWrapper,
												positionWrapper,
												$MacCASOutreach$graphicsvg$GraphicSVG$Group(
													_List_fromArray(
														[
															$MacCASOutreach$graphicsvg$GraphicSVG$Everything,
															A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, $MacCASOutreach$graphicsvg$GraphicSVG$black, region)
														])))
											]))
									])),
								A2(
								$elm$svg$Svg$g,
								_List_fromArray(
									[
										$elm$svg$Svg$Attributes$mask('url(#m' + (id + ')'))
									]),
								_List_fromArray(
									[
										A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id + 'mm', w, h, trans, msgWrapper, positionWrapper, sh)
									]))
							]));
				case 10:
					var region = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								$elm$svg$Svg$defs,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$elm$svg$Svg$mask,
										_List_fromArray(
											[
												$elm$svg$Svg$Attributes$id('c' + id)
											]),
										_List_fromArray(
											[
												A7(
												$MacCASOutreach$graphicsvg$GraphicSVG$createSVG,
												id + 'c',
												w,
												h,
												trans,
												msgWrapper,
												positionWrapper,
												$MacCASOutreach$graphicsvg$GraphicSVG$Group(
													_List_fromArray(
														[
															$MacCASOutreach$graphicsvg$GraphicSVG$Notathing,
															A2($MacCASOutreach$graphicsvg$GraphicSVG$repaint, $MacCASOutreach$graphicsvg$GraphicSVG$white, region)
														])))
											]))
									])),
								A2(
								$elm$svg$Svg$g,
								_List_fromArray(
									[
										$elm$svg$Svg$Attributes$mask('url(#c' + (id + ')'))
									]),
								_List_fromArray(
									[
										A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id + 'cc', w, h, trans, msgWrapper, positionWrapper, sh)
									]))
							]));
				case 14:
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$elm$html$Html$Events$onClick(
								msgWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 15:
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$MacCASOutreach$graphicsvg$GraphicSVG$onTapAt(
								positionWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 16:
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$elm$html$Html$Events$onMouseEnter(
								msgWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 17:
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$MacCASOutreach$graphicsvg$GraphicSVG$onEnterAt(
								positionWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 18:
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$elm$html$Html$Events$onMouseLeave(
								msgWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 19:
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$MacCASOutreach$graphicsvg$GraphicSVG$onLeaveAt(
								positionWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 20:
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$elm$html$Html$Events$onMouseDown(
								msgWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 21:
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$MacCASOutreach$graphicsvg$GraphicSVG$onMouseDownAt(
								positionWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 22:
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$elm$html$Html$Events$onMouseUp(
								msgWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 23:
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$MacCASOutreach$graphicsvg$GraphicSVG$onMouseUpAt(
								positionWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 24:
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$MacCASOutreach$graphicsvg$GraphicSVG$onMoveAt(
								positionWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 25:
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$MacCASOutreach$graphicsvg$GraphicSVG$onTouchStart(
								msgWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 26:
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$MacCASOutreach$graphicsvg$GraphicSVG$onTouchEnd(
								msgWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 27:
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$MacCASOutreach$graphicsvg$GraphicSVG$onTouchStartAt(
								positionWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 28:
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$MacCASOutreach$graphicsvg$GraphicSVG$onTouchStartAt(
								positionWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 29:
					var msg = shape.a;
					var sh = shape.b;
					return A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$MacCASOutreach$graphicsvg$GraphicSVG$onTouchMove(
								positionWrapper(msg))
							]),
						_List_fromArray(
							[
								A7($MacCASOutreach$graphicsvg$GraphicSVG$createSVG, id, w, h, trans, msgWrapper, positionWrapper, sh)
							]));
				case 7:
					var shapes = shape.a;
					return A2(
						$elm$svg$Svg$g,
						_List_Nil,
						A2(
							$elm$core$List$indexedMap,
							function (n) {
								return A6(
									$MacCASOutreach$graphicsvg$GraphicSVG$createSVG,
									id + ('g' + $elm$core$String$fromInt(n)),
									w,
									h,
									trans,
									msgWrapper,
									positionWrapper);
							},
							shapes));
				case 8:
					var cmbndshp = shape.a;
					var $temp$id = id,
						$temp$w = w,
						$temp$h = h,
						$temp$trans = trans,
						$temp$msgWrapper = msgWrapper,
						$temp$positionWrapper = positionWrapper,
						$temp$shape = cmbndshp;
					id = $temp$id;
					w = $temp$w;
					h = $temp$h;
					trans = $temp$trans;
					msgWrapper = $temp$msgWrapper;
					positionWrapper = $temp$positionWrapper;
					shape = $temp$shape;
					continue createSVG;
				default:
					var s = shape.a;
					var th = shape.b;
					var c = shape.c;
					return ((th <= 0) || (_Utils_cmp(s, 2 * th) < 0)) ? A2($elm$svg$Svg$g, _List_Nil, _List_Nil) : A7(
						$MacCASOutreach$graphicsvg$GraphicSVG$createSVG,
						id,
						w,
						h,
						trans,
						msgWrapper,
						positionWrapper,
						A4(
							$MacCASOutreach$graphicsvg$GraphicSVG$createGraph,
							_Utils_Tuple2(w, h),
							s,
							th,
							c));
			}
		}
	});
var $elm$svg$Svg$svg = $elm$svg$Svg$trustedNode('svg');
var $elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute('viewBox');
var $MacCASOutreach$graphicsvg$GraphicSVG$Widget$viewCustom = F3(
	function (viewOptions, model, shapes) {
		var positionWrapper = F2(
			function (toMsg, _v0) {
				var x = _v0.a;
				var y = _v0.b;
				return toMsg(
					A5(
						$MacCASOutreach$graphicsvg$GraphicSVG$Widget$convertCoords,
						model.cp,
						model.co,
						model.ae,
						model.ad,
						_Utils_Tuple2(x, y)));
			});
		return A2(
			$elm$svg$Svg$svg,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$svg$Svg$Attributes$id(model.bq),
						$elm$svg$Svg$Attributes$viewBox(
						$elm$core$String$fromFloat((-model.ae) / 2) + (' ' + ($elm$core$String$fromFloat((-model.ad) / 2) + (' ' + ($elm$core$String$fromFloat(model.ae) + (' ' + $elm$core$String$fromFloat(model.ad)))))))
					]),
				A2($elm$core$List$map, $MacCASOutreach$graphicsvg$GraphicSVG$Widget$convertViewOption, viewOptions)),
			A2(
				$elm$core$List$cons,
				A3($MacCASOutreach$graphicsvg$GraphicSVG$Widget$cPath, model.bq, model.ae, model.ad),
				_List_fromArray(
					[
						A2(
						$elm$svg$Svg$g,
						_List_fromArray(
							[
								$elm$svg$Svg$Attributes$clipPath('url(#cPath' + (model.bq + ')'))
							]),
						A2(
							$elm$core$List$indexedMap,
							function (n) {
								return A6(
									$MacCASOutreach$graphicsvg$GraphicSVG$createSVG,
									_Utils_ap(
										model.bq,
										$elm$core$String$fromInt(n)),
									model.ae,
									model.ad,
									$MacCASOutreach$graphicsvg$GraphicSVG$ident,
									$elm$core$Basics$identity,
									positionWrapper);
							},
							shapes))
					])));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$Widget$view = $MacCASOutreach$graphicsvg$GraphicSVG$Widget$viewCustom($MacCASOutreach$graphicsvg$GraphicSVG$Widget$defaultViewOption);
var $author$project$CalendarGSVG$EnterCamp = function (a) {
	return {$: 4, a: a};
};
var $author$project$CalendarGSVG$LeaveCamp = function (a) {
	return {$: 3, a: a};
};
var $author$project$CalendarGSVG$weekButton = F2(
	function (highlight, _v0) {
		var _v1 = _v0.a;
		var wIdx = _v1.a;
		var numInWeek = _v1.b;
		var _v2 = _v0.b;
		var title = _v2.a;
		var icon = _v2.b;
		var clr = _v2.c;
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$addHyperlink,
			'https://www.eng.mcmaster.ca/forms/mcmaster-start-coding-camp-2021',
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$notifyLeave,
				$author$project$CalendarGSVG$LeaveCamp(
					_Utils_Tuple2(wIdx, numInWeek)),
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$notifyEnter,
					$author$project$CalendarGSVG$EnterCamp(
						_Utils_Tuple2(wIdx, numInWeek)),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(
							(wIdx === 12) ? 20 : 0,
							(155 - (20 * wIdx)) - (6 * numInWeek)),
						$MacCASOutreach$graphicsvg$GraphicSVG$group(
							_List_fromArray(
								[
									_Utils_eq(
									highlight,
									$elm$core$Maybe$Just(
										_Utils_Tuple2(wIdx, numInWeek))) ? A3(
									$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
									$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
									clr,
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
										0.5,
										A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$filled,
											clr,
											A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 98, 5, 2.5)))) : A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									clr,
									A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 98, 5, 2.5)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$move,
									_Utils_Tuple2(
										($elm$core$String$length(title) + 3) * (-1.25),
										0),
									A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.1, icon)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$move,
									_Utils_Tuple2(
										($elm$core$String$length(title) + 3) * 1.25,
										0),
									A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.1, icon)),
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$move,
									_Utils_Tuple2(0, -1),
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$filled,
										$MacCASOutreach$graphicsvg$GraphicSVG$white,
										(_Utils_eq(
											highlight,
											$elm$core$Maybe$Just(
												_Utils_Tuple2(wIdx, numInWeek))) ? $MacCASOutreach$graphicsvg$GraphicSVG$bold : $elm$core$Basics$identity)(
											$MacCASOutreach$graphicsvg$GraphicSVG$centered(
												A2(
													$MacCASOutreach$graphicsvg$GraphicSVG$size,
													4,
													$MacCASOutreach$graphicsvg$GraphicSVG$fixedwidth(
														$MacCASOutreach$graphicsvg$GraphicSVG$text(title)))))))
								]))))));
	});
var $author$project$CalendarGSVG$EnterWeekend = function (a) {
	return {$: 6, a: a};
};
var $author$project$CalendarGSVG$LeaveWeekend = function (a) {
	return {$: 5, a: a};
};
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $author$project$CalendarGSVG$weekendButtons = F2(
	function (highlight, _v0) {
		var wIdx = _v0.a;
		var _v1 = _v0.b;
		var _v2 = _v1.a;
		var morning = _v2.a;
		var mclr = _v2.b;
		var _v3 = _v1.b;
		var aft = _v3.a;
		var aclr = _v3.b;
		var _v4 = _v1.c;
		var hack = _v4.a;
		var hackClr = _v4.b;
		var dayIdx = 6;
		return $MacCASOutreach$graphicsvg$GraphicSVG$group(
			_List_fromArray(
				[
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$addHyperlink,
					$author$project$CalendarGSVG$title2link(morning),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$notifyLeave,
						$author$project$CalendarGSVG$LeaveWeekend(
							_Utils_Tuple2(wIdx, 1)),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$notifyEnter,
							$author$project$CalendarGSVG$EnterWeekend(
								_Utils_Tuple2(wIdx, 1)),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2((dayIdx * 20) - 63, (155 - (20 * wIdx)) - (6 * 0)),
								$MacCASOutreach$graphicsvg$GraphicSVG$group(
									_List_fromArray(
										[
											_Utils_eq(
											highlight,
											$elm$core$Maybe$Just(
												_Utils_Tuple2(wIdx, 1))) ? A3(
											$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
											$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
											mclr,
											A2(
												$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
												0.5,
												A2(
													$MacCASOutreach$graphicsvg$GraphicSVG$filled,
													mclr,
													A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 12, 5, 2.5)))) : A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$filled,
											mclr,
											A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 12, 5, 2.5)),
											A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$move,
											_Utils_Tuple2(0, -1),
											A2(
												$MacCASOutreach$graphicsvg$GraphicSVG$filled,
												$MacCASOutreach$graphicsvg$GraphicSVG$lightGrey,
												(_Utils_eq(
													highlight,
													$elm$core$Maybe$Just(
														_Utils_Tuple2(wIdx, 1))) ? $MacCASOutreach$graphicsvg$GraphicSVG$bold : $elm$core$Basics$identity)(
													$MacCASOutreach$graphicsvg$GraphicSVG$centered(
														A2(
															$MacCASOutreach$graphicsvg$GraphicSVG$size,
															4,
															$MacCASOutreach$graphicsvg$GraphicSVG$fixedwidth(
																$MacCASOutreach$graphicsvg$GraphicSVG$text(morning)))))))
										])))))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$addHyperlink,
					$author$project$CalendarGSVG$title2link(aft),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$notifyLeave,
						$author$project$CalendarGSVG$LeaveWeekend(
							_Utils_Tuple2(wIdx, 2)),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$notifyEnter,
							$author$project$CalendarGSVG$EnterWeekend(
								_Utils_Tuple2(wIdx, 2)),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2((dayIdx * 20) - 63, (155 - (20 * wIdx)) - (6 * 1)),
								$MacCASOutreach$graphicsvg$GraphicSVG$group(
									_List_fromArray(
										[
											_Utils_eq(
											highlight,
											$elm$core$Maybe$Just(
												_Utils_Tuple2(wIdx, 2))) ? A3(
											$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
											$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
											aclr,
											A2(
												$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
												0.5,
												A2(
													$MacCASOutreach$graphicsvg$GraphicSVG$filled,
													aclr,
													A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 12, 5, 2.5)))) : A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$filled,
											aclr,
											A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 12, 5, 2.5)),
											A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$move,
											_Utils_Tuple2(0, -1),
											A2(
												$MacCASOutreach$graphicsvg$GraphicSVG$filled,
												$MacCASOutreach$graphicsvg$GraphicSVG$lightGrey,
												(_Utils_eq(
													highlight,
													$elm$core$Maybe$Just(
														_Utils_Tuple2(wIdx, 2))) ? $MacCASOutreach$graphicsvg$GraphicSVG$bold : $elm$core$Basics$identity)(
													$MacCASOutreach$graphicsvg$GraphicSVG$centered(
														A2(
															$MacCASOutreach$graphicsvg$GraphicSVG$size,
															4,
															$MacCASOutreach$graphicsvg$GraphicSVG$fixedwidth(
																$MacCASOutreach$graphicsvg$GraphicSVG$text(aft)))))))
										])))))),
					A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$addHyperlink,
					'https://www.eng.mcmaster.ca/forms/mcmaster-start-coding-camp-2021',
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$notifyLeave,
						$author$project$CalendarGSVG$LeaveWeekend(
							_Utils_Tuple2(wIdx, 3)),
						A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$notifyEnter,
							$author$project$CalendarGSVG$EnterWeekend(
								_Utils_Tuple2(wIdx, 3)),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2((dayIdx * 20) - 53, 154 - (20 * wIdx)),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
									$elm$core$Basics$degrees(90),
									$MacCASOutreach$graphicsvg$GraphicSVG$group(
										_List_fromArray(
											[
												_Utils_eq(
												highlight,
												$elm$core$Maybe$Just(
													_Utils_Tuple2(wIdx, 3))) ? A3(
												$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
												$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
												hackClr,
												A2(
													$MacCASOutreach$graphicsvg$GraphicSVG$makeTransparent,
													0.5,
													A2(
														$MacCASOutreach$graphicsvg$GraphicSVG$filled,
														hackClr,
														A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 19, 5, 2.5)))) : A2(
												$MacCASOutreach$graphicsvg$GraphicSVG$filled,
												hackClr,
												A3($MacCASOutreach$graphicsvg$GraphicSVG$roundedRect, 19, 5, 2.5)),
												A2(
												$MacCASOutreach$graphicsvg$GraphicSVG$move,
												_Utils_Tuple2(-6, -0.5),
												(_Utils_eq(
													highlight,
													$elm$core$Maybe$Just(
														_Utils_Tuple2(wIdx, 3))) ? A2(
													$elm$core$Basics$composeR,
													$MacCASOutreach$graphicsvg$GraphicSVG$bold,
													$MacCASOutreach$graphicsvg$GraphicSVG$filled($MacCASOutreach$graphicsvg$GraphicSVG$black)) : A2(
													$elm$core$Basics$composeR,
													$elm$core$Basics$identity,
													$MacCASOutreach$graphicsvg$GraphicSVG$filled($MacCASOutreach$graphicsvg$GraphicSVG$white)))(
													A2(
														$MacCASOutreach$graphicsvg$GraphicSVG$size,
														2.5,
														$MacCASOutreach$graphicsvg$GraphicSVG$fixedwidth(
															$MacCASOutreach$graphicsvg$GraphicSVG$text(hack))))),
												A2(
												$MacCASOutreach$graphicsvg$GraphicSVG$move,
												_Utils_Tuple2(-7.5, 0),
												A2(
													$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
													$elm$core$Basics$degrees(-90),
													A2($MacCASOutreach$graphicsvg$GraphicSVG$scale, 0.1, $author$project$Parameters$gameIcon)))
											])))))))
				]));
	});
var $author$project$Parameters$weekendLessons = _List_fromArray(
	[
		_Utils_Tuple2(
		1,
		_Utils_Tuple3(
			_Utils_Tuple2('L1+L2', $author$project$Parameters$freeClr),
			_Utils_Tuple2('L3+L4', $author$project$Parameters$freeClr),
			_Utils_Tuple2(
				'flashlight',
				$author$project$Parameters$gsvgColor(3)))),
		_Utils_Tuple2(
		2,
		_Utils_Tuple3(
			_Utils_Tuple2(
				'L5',
				$author$project$Parameters$lessonClr(5)),
			_Utils_Tuple2(
				'L6',
				$author$project$Parameters$lessonClr(6)),
			_Utils_Tuple2(
				'powerups',
				$author$project$Parameters$gsvgColor(3)))),
		_Utils_Tuple2(
		3,
		_Utils_Tuple3(
			_Utils_Tuple2(
				'L7',
				$author$project$Parameters$lessonClr(7)),
			_Utils_Tuple2(
				'L12',
				$author$project$Parameters$lessonClr(12)),
			_Utils_Tuple2(
				'falling',
				$author$project$Parameters$gsvgColor(3)))),
		_Utils_Tuple2(
		4,
		_Utils_Tuple3(
			_Utils_Tuple2(
				'L8',
				$author$project$Parameters$lessonClr(8)),
			_Utils_Tuple2(
				'L13',
				$author$project$Parameters$lessonClr(13)),
			_Utils_Tuple2(
				'flashlight',
				$author$project$Parameters$gsvgColor(3)))),
		_Utils_Tuple2(
		5,
		_Utils_Tuple3(
			_Utils_Tuple2(
				'L9',
				$author$project$Parameters$lessonClr(9)),
			_Utils_Tuple2(
				'L12',
				$author$project$Parameters$lessonClr(12)),
			_Utils_Tuple2(
				'powerups',
				$author$project$Parameters$gsvgColor(3)))),
		_Utils_Tuple2(
		6,
		_Utils_Tuple3(
			_Utils_Tuple2(
				'L12',
				$author$project$Parameters$lessonClr(12)),
			_Utils_Tuple2(
				'L13',
				$author$project$Parameters$lessonClr(13)),
			_Utils_Tuple2(
				'falling',
				$author$project$Parameters$gsvgColor(3))))
	]);
var $author$project$CalendarGSVG$widget = function (model) {
	return A2(
		$MacCASOutreach$graphicsvg$GraphicSVG$Widget$view,
		model.aO,
		_List_fromArray(
			[
				A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, 0),
				$MacCASOutreach$graphicsvg$GraphicSVG$group(
					_Utils_ap(
						A2(
							$elm$core$List$indexedMap,
							F2(
								function (wIdx, ds) {
									return A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$move,
										_Utils_Tuple2(
											0,
											(wIdx * (-20)) + ($elm$core$List$length($author$project$CalendarGSVG$weeks) * 10)),
										$MacCASOutreach$graphicsvg$GraphicSVG$group(
											function (x) {
												return A2(
													$elm$core$List$cons,
													A2(
														$MacCASOutreach$graphicsvg$GraphicSVG$move,
														_Utils_Tuple2(0, 4),
														A2(
															$MacCASOutreach$graphicsvg$GraphicSVG$filled,
															$MacCASOutreach$graphicsvg$GraphicSVG$black,
															A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 140, 0.1))),
													x);
											}(
												A2(
													$elm$core$List$indexedMap,
													F2(
														function (dIdx, day) {
															return A2(
																$MacCASOutreach$graphicsvg$GraphicSVG$move,
																_Utils_Tuple2((20 * dIdx) - 69, 0),
																A2(
																	$MacCASOutreach$graphicsvg$GraphicSVG$filled,
																	$MacCASOutreach$graphicsvg$GraphicSVG$black,
																	A2(
																		$MacCASOutreach$graphicsvg$GraphicSVG$size,
																		4,
																		$MacCASOutreach$graphicsvg$GraphicSVG$fixedwidth(
																			$MacCASOutreach$graphicsvg$GraphicSVG$text(
																				$elm$core$String$fromInt(day))))));
														}),
													ds))));
								}),
							$author$project$CalendarGSVG$weeks),
						_Utils_ap(
							_List_fromArray(
								[
									A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$move,
									_Utils_Tuple2(
										0,
										4 - (10 * $elm$core$List$length($author$project$CalendarGSVG$weeks))),
									A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$filled,
										$MacCASOutreach$graphicsvg$GraphicSVG$black,
										A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 140, 0.1)))
								]),
							_Utils_ap(
								A2(
									$elm$core$List$map,
									function (idx) {
										return A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$move,
											_Utils_Tuple2((idx * 20) - 70, 3.5),
											A2(
												$MacCASOutreach$graphicsvg$GraphicSVG$filled,
												$MacCASOutreach$graphicsvg$GraphicSVG$black,
												A2(
													$MacCASOutreach$graphicsvg$GraphicSVG$rect,
													0.1,
													($elm$core$List$length($author$project$CalendarGSVG$weeks) * 20) + 1)));
									},
									A2($elm$core$List$range, 0, 7)),
								_Utils_ap(
									A2(
										$elm$core$List$map,
										$author$project$CalendarGSVG$weekButton(model.av),
										$author$project$Parameters$camps),
									_Utils_ap(
										A2(
											$elm$core$List$map,
											$author$project$CalendarGSVG$lessonButton(model.aD),
											$author$project$Parameters$lessons),
										_Utils_ap(
											A2(
												$elm$core$List$map,
												$author$project$CalendarGSVG$weekendButtons(model.aN),
												$author$project$Parameters$weekendLessons),
											_List_fromArray(
												[
													A2(
													$MacCASOutreach$graphicsvg$GraphicSVG$move,
													_Utils_Tuple2(0, 110),
													$MacCASOutreach$graphicsvg$GraphicSVG$group(
														_List_fromArray(
															[
																A2(
																$MacCASOutreach$graphicsvg$GraphicSVG$move,
																_Utils_Tuple2(-72, 40),
																A2(
																	$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
																	$elm$core$Basics$degrees(90),
																	A2(
																		$MacCASOutreach$graphicsvg$GraphicSVG$filled,
																		$MacCASOutreach$graphicsvg$GraphicSVG$black,
																		A2(
																			$MacCASOutreach$graphicsvg$GraphicSVG$size,
																			8,
																			$MacCASOutreach$graphicsvg$GraphicSVG$fixedwidth(
																				$MacCASOutreach$graphicsvg$GraphicSVG$text('May')))))),
																A3(
																$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
																$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.5),
																$MacCASOutreach$graphicsvg$GraphicSVG$black,
																$MacCASOutreach$graphicsvg$GraphicSVG$openPolygon(
																	_List_fromArray(
																		[
																			_Utils_Tuple2(-128, -26),
																			_Utils_Tuple2(-30, -26),
																			_Utils_Tuple2(-30, -6),
																			_Utils_Tuple2(128, -6)
																		]))),
																A2(
																$MacCASOutreach$graphicsvg$GraphicSVG$move,
																_Utils_Tuple2(-72, 46 - 93),
																A2(
																	$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
																	$elm$core$Basics$degrees(90),
																	A2(
																		$MacCASOutreach$graphicsvg$GraphicSVG$filled,
																		$MacCASOutreach$graphicsvg$GraphicSVG$black,
																		A2(
																			$MacCASOutreach$graphicsvg$GraphicSVG$size,
																			8,
																			$MacCASOutreach$graphicsvg$GraphicSVG$fixedwidth(
																				$MacCASOutreach$graphicsvg$GraphicSVG$text('June')))))),
																A2(
																$MacCASOutreach$graphicsvg$GraphicSVG$move,
																_Utils_Tuple2(0, -80),
																A3(
																	$MacCASOutreach$graphicsvg$GraphicSVG$outlined,
																	$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.5),
																	$MacCASOutreach$graphicsvg$GraphicSVG$black,
																	$MacCASOutreach$graphicsvg$GraphicSVG$openPolygon(
																		_List_fromArray(
																			[
																				_Utils_Tuple2(-128, -26),
																				_Utils_Tuple2(10, -26),
																				_Utils_Tuple2(10, -6),
																				_Utils_Tuple2(128, -6)
																			])))),
																A2(
																$MacCASOutreach$graphicsvg$GraphicSVG$move,
																_Utils_Tuple2(-72, 46 - 173),
																A2(
																	$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
																	$elm$core$Basics$degrees(90),
																	A2(
																		$MacCASOutreach$graphicsvg$GraphicSVG$filled,
																		$MacCASOutreach$graphicsvg$GraphicSVG$black,
																		A2(
																			$MacCASOutreach$graphicsvg$GraphicSVG$size,
																			8,
																			$MacCASOutreach$graphicsvg$GraphicSVG$fixedwidth(
																				$MacCASOutreach$graphicsvg$GraphicSVG$text('July')))))),
																A2(
																$MacCASOutreach$graphicsvg$GraphicSVG$move,
																_Utils_Tuple2(0, -186),
																A2(
																	$MacCASOutreach$graphicsvg$GraphicSVG$filled,
																	$MacCASOutreach$graphicsvg$GraphicSVG$black,
																	A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 192, 0.5))),
																A2(
																$MacCASOutreach$graphicsvg$GraphicSVG$move,
																_Utils_Tuple2(-72, 46 - 263),
																A2(
																	$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
																	$elm$core$Basics$degrees(90),
																	A2(
																		$MacCASOutreach$graphicsvg$GraphicSVG$filled,
																		$MacCASOutreach$graphicsvg$GraphicSVG$black,
																		A2(
																			$MacCASOutreach$graphicsvg$GraphicSVG$size,
																			8,
																			$MacCASOutreach$graphicsvg$GraphicSVG$fixedwidth(
																				$MacCASOutreach$graphicsvg$GraphicSVG$text('August'))))))
															])))
												])))))))))
			]));
};
var $author$project$Calendar$page = function (model) {
	return $elm$core$List$concat(
		_List_fromArray(
			[
				_List_fromArray(
				[
					A2(
					$elm$html$Html$h1,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my5]),
					_List_fromArray(
						[
							$elm$html$Html$text('Calendar')
						]))
				]),
				_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$row,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									$elm$html$Html$h2,
									_List_fromArray(
										[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt5]),
									_List_fromArray(
										[
											$elm$html$Html$text('Buttons below will link to signup/payment pages as they become available.')
										]))
								]))
						]))
				]),
				_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'display', 'flex'),
							A2($elm$html$Html$Attributes$style, 'flex-direction', 'row')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '100%')
								]),
							_List_fromArray(
								[
									$author$project$CalendarGSVG$widget(model)
								]))
						]))
				])
			]));
};
var $author$project$Utils$PreLink = function (a) {
	return {$: 1, a: a};
};
var $author$project$Utils$PreTxt = function (a) {
	return {$: 0, a: a};
};
var $author$project$Camps$adventure = {
	y: 'Adventure',
	n: _Utils_Tuple2(
		'McMaster Start Coding Camps',
		_List_fromArray(
			[
				$author$project$Utils$PreTxt('Check out McMaster Start Coding’s summer camp! A great opportunity where students, grades 5-8, will learn to code!'),
				$author$project$Utils$PreLink('http://outreach.mcmaster.ca#camps')
			])),
	o: 'Click for examples:',
	p: _List_fromArray(
		[
			_Utils_Tuple2('img/Cassiopeian.png', 'https://macoutreach.rocks/share/c0e66535')
		]),
	q: 'https://www.facebook.com/McmasterStartcoding',
	B: '',
	s: _List_fromArray(
		[
			_Utils_Tuple2('Learn to use design thinking to identify a game premise', ''),
			_Utils_Tuple2('Learn about state diagrams and use them to plan game logic', ''),
			_Utils_Tuple2('Develop soft skills such as communication, presenting, and team management', '')
		]),
	h: _Utils_Tuple2('img/AdventureGameAd2021.png', 'img/AdventureGameAd2021.pdf'),
	t: _List_fromArray(
		[
			_Utils_Tuple2('lessons 1,2,3,4,5,8', '#lessons')
		]),
	u: _List_fromArray(
		[
			_Utils_Tuple2('Monday-Friday (except Aug 4-7)', ''),
			_Utils_Tuple2('Tuesday-Satruday (Aug 4-7)', ''),
			_Utils_Tuple2('10am-noon: coding+', ''),
			_Utils_Tuple2('noon-1pm: lunch break', ''),
			_Utils_Tuple2('1pm-3pm: coding+', ''),
			_Utils_Tuple2('3pm-4pm: exercise break', ''),
			_Utils_Tuple2('4pm-6pm: coding+', '')
		]),
	v: 'https://twitter.com/maccsoutreach',
	w: _List_fromArray(
		[
			_Utils_Tuple2('You will work in a team of six to create an adventure game.', ''),
			_Utils_Tuple2('You will learn to create a game map.', ''),
			_Utils_Tuple2('You will learn to add buttons to move through the game map.', '')
		])
};
var $author$project$Camps$animation = {
	y: 'Animation',
	n: _Utils_Tuple2(
		'McMaster Start Coding Animation Camp',
		_List_fromArray(
			[
				$author$project$Utils$PreTxt('Check out McMaster Start Coding’s Animations Camp! A great opportunity where students, grades 5-8, will learn to code flowers blooming, hummingbirds flying, rockets blasting off, and more! Students will be able to imagine scenes and code them to life!'),
				$author$project$Utils$PreLink('http://outreach.mcmaster.ca#animation')
			])),
	o: 'Click for last year\'s creations:',
	p: _List_fromArray(
		[
			_Utils_Tuple2('img/Pyramid.png', 'https://macoutreach.rocks/share/e2994660'),
			_Utils_Tuple2('img/chrysalis.png', 'https://macoutreach.rocks/share/e07bfafe')
		]),
	q: 'https://www.facebook.com/McmasterStartcoding',
	B: '',
	s: _List_fromArray(
		[
			_Utils_Tuple2('Apply transformations to shapes', ''),
			_Utils_Tuple2('Use (x,y) coordinates in animations', ''),
			_Utils_Tuple2('Master colour theory using red-green-blue and hue-saturation-lightness colour spaces', ''),
			_Utils_Tuple2('Master sin and cos in wave animations', ''),
			_Utils_Tuple2('Develop soft skills such as communication, presenting, and team management', '')
		]),
	h: _Utils_Tuple2('img/AnimationsCampAd2021.png', 'img/AnimationsCampAd2021.pdf'),
	t: _List_fromArray(
		[
			_Utils_Tuple2('lessons 1,2,3,4,5', '#lessons')
		]),
	u: _List_fromArray(
		[
			_Utils_Tuple2('Monday-Friday (except Aug 4-7)', ''),
			_Utils_Tuple2('Tuesday-Saturday (Aug 4-7)', ''),
			_Utils_Tuple2('10am-noon: coding+', ''),
			_Utils_Tuple2('noon-1pm: lunch break', ''),
			_Utils_Tuple2('1pm-3pm: coding+', ''),
			_Utils_Tuple2('3pm-4pm: exercise break', ''),
			_Utils_Tuple2('4pm-6pm: coding+', '')
		]),
	v: 'https://twitter.com/maccsoutreach',
	w: _List_fromArray(
		[
			_Utils_Tuple2('You will work in a team of six to tell a story through animation.', ''),
			_Utils_Tuple2('You will pitch your theme and story ideas and come up with an action plan together.', ''),
			_Utils_Tuple2('You will learn new tools for making complex shapes.', ''),
			_Utils_Tuple2('You will learn new functions to create multi-part animations.', '')
		])
};
var $elm$html$Html$a = _VirtualDom_node('a');
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$Attrs = function (a) {
	return {$: 3, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Card$attrs = function (attrs_) {
	return $rundis$elm_bootstrap$Bootstrap$Card$Internal$Attrs(attrs_);
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$ColAttrs = function (a) {
	return {$: 6, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Col$attrs = function (attrs_) {
	return $rundis$elm_bootstrap$Bootstrap$Grid$Internal$ColAttrs(attrs_);
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$RowAttrs = function (a) {
	return {$: 2, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs = function (attrs_) {
	return $rundis$elm_bootstrap$Bootstrap$Grid$Internal$RowAttrs(attrs_);
};
var $author$project$Parameters$campDates = function (_v0) {
	var _v1 = _v0.a;
	var idx = _v1.a;
	switch (idx) {
		case 8:
			return 'July 5-9';
		case 9:
			return 'July 12-16';
		case 10:
			return 'July 19-23';
		case 11:
			return 'July 26-30';
		case 12:
			return 'Aug 3-7';
		case 13:
			return 'Aug 9-13';
		case 14:
			return 'Aug 16-20';
		default:
			return 'Aug 23-27';
	}
};
var $rundis$elm_bootstrap$Bootstrap$General$Internal$Center = 1;
var $rundis$elm_bootstrap$Bootstrap$General$Internal$LG = 3;
var $rundis$elm_bootstrap$Bootstrap$General$Internal$HAlign = F2(
	function (screenSize, align) {
		return {cZ: align, dv: screenSize};
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$RowHAlign = function (a) {
	return {$: 1, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$rowHAlign = F2(
	function (size, align) {
		return $rundis$elm_bootstrap$Bootstrap$Grid$Internal$RowHAlign(
			A2($rundis$elm_bootstrap$Bootstrap$General$Internal$HAlign, size, align));
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Row$centerLg = A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$rowHAlign, 3, 1);
var $rundis$elm_bootstrap$Bootstrap$Card$Block$custom = function (element) {
	return element;
};
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $author$project$Camps$heading = function (str) {
	return A2(
		$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'font-weight', '700')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$html$Html$li = _VirtualDom_node('li');
var $elm$html$Html$Attributes$target = $elm$html$Html$Attributes$stringProperty('target');
var $elm$html$Html$ul = _VirtualDom_node('ul');
var $author$project$Camps$listBody = function (txtLinks) {
	return $rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
		A2(
			$elm$html$Html$ul,
			_List_Nil,
			A2(
				$elm$core$List$map,
				function (_v0) {
					var txt = _v0.a;
					var link = _v0.b;
					return ('' === link) ? A2(
						$elm$html$Html$li,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(txt)
							])) : A2(
						$elm$html$Html$li,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(txt),
								A2(
								$elm$html$Html$div,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$elm$html$Html$a,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$target('_blank'),
												$elm$html$Html$Attributes$href(link)
											]),
										_List_fromArray(
											[
												$elm$html$Html$text(link)
											]))
									]))
							]));
				},
				txtLinks)));
};
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $author$project$Utils$convert = F2(
	function (dict, string) {
		return $elm$core$String$concat(
			A2(
				$elm$core$List$map,
				function (_char) {
					return A2(
						$elm$core$Maybe$withDefault,
						$elm$core$String$fromChar(_char),
						A2($elm$core$Dict$get, _char, dict));
				},
				$elm$core$String$toList(string)));
	});
var $author$project$Utils$escapeUrlDictionary = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('&', '%26'),
			_Utils_Tuple2('<', '%3C'),
			_Utils_Tuple2('>', '%3E'),
			_Utils_Tuple2('\"', '%22'),
			_Utils_Tuple2('\'', '%5C'),
			_Utils_Tuple2('`', '%60'),
			_Utils_Tuple2(' ', '%20'),
			_Utils_Tuple2('!', '!'),
			_Utils_Tuple2('@', '%40'),
			_Utils_Tuple2('$', '%24'),
			_Utils_Tuple2('%', '%25'),
			_Utils_Tuple2('=', '%3D'),
			_Utils_Tuple2('+', '%2B'),
			_Utils_Tuple2('{', '%7B'),
			_Utils_Tuple2('}', '%7D'),
			_Utils_Tuple2('[', '%5B'),
			_Utils_Tuple2(']', '%5D')
		]));
var $author$project$Utils$escapeUrl = $author$project$Utils$convert($author$project$Utils$escapeUrlDictionary);
var $author$project$Camps$mailto = function (_v0) {
	var subject = _v0.a;
	var preUrl = _v0.b;
	return $elm$core$String$concat(
		_Utils_ap(
			_List_fromArray(
				[
					'mailto:?subject=',
					$author$project$Utils$escapeUrl(subject),
					'&body='
				]),
			A2(
				$elm$core$List$concatMap,
				function (e) {
					if (!e.$) {
						var txt = e.a;
						return _List_fromArray(
							[
								$author$project$Utils$escapeUrl(txt),
								'%0A%0A'
							]);
					} else {
						var link = e.a;
						return _List_fromArray(
							[
								$author$project$Utils$escapeUrl(link),
								'%0A'
							]);
					}
				},
				preUrl)));
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Col3 = 3;
var $rundis$elm_bootstrap$Bootstrap$Grid$Col$md3 = A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$width, 2, 3);
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Col6 = 6;
var $rundis$elm_bootstrap$Bootstrap$Grid$Col$md6 = A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$width, 2, 6);
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$p0Lg = $elm$html$Html$Attributes$class('p-lg-0');
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $author$project$Camps$camps = F2(
	function (tab, info) {
		return A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$containerFluid,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$row,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Grid$Row$centerLg,
							$rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs(
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('ml0 mr0 w100')
								]))
						]),
					_List_fromArray(
						[
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md3]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$div,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'margin-top', '30px'),
											A2($elm$html$Html$Attributes$style, 'margin-bottom', '6px'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700'),
											A2($elm$html$Html$Attributes$style, 'font-size', '18pt')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Click to book:')
										])),
									function () {
									if (tab === 10) {
										return A2(
											$elm$html$Html$a,
											_List_fromArray(
												[
													$elm$html$Html$Attributes$target('_blank'),
													$elm$html$Html$Attributes$href('https://www.eng.mcmaster.ca/forms/mcmaster-start-coding-camp-2021')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('Camp Store')
												]));
									} else {
										return A2(
											$elm$html$Html$ul,
											_List_fromArray(
												[
													A2($elm$html$Html$Attributes$style, 'font-weight', '700'),
													A2($elm$html$Html$Attributes$style, 'font-size', '18pt')
												]),
											A2(
												$elm$core$List$map,
												function (dates) {
													return A2(
														$elm$html$Html$li,
														_List_Nil,
														_List_fromArray(
															[
																A2(
																$elm$html$Html$a,
																_List_fromArray(
																	[
																		$elm$html$Html$Attributes$target('_blank'),
																		$elm$html$Html$Attributes$href('https://www.eng.mcmaster.ca/forms/mcmaster-start-coding-camp-2021')
																	]),
																_List_fromArray(
																	[
																		$elm$html$Html$text(dates)
																	]))
															]));
												},
												A2(
													$elm$core$List$map,
													$author$project$Parameters$campDates,
													A2(
														$elm$core$List$filter,
														function (_v1) {
															var theTab = _v1.b;
															return _Utils_eq(theTab, tab);
														},
														$author$project$Parameters$campList))));
									}
								}(),
									A2(
									$elm$html$Html$div,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'margin-top', '30px'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700'),
											A2($elm$html$Html$Attributes$style, 'font-size', '18pt')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Click for poster:')
										])),
									$rundis$elm_bootstrap$Bootstrap$Card$view(
									A3(
										$rundis$elm_bootstrap$Bootstrap$Card$block,
										_List_Nil,
										_List_fromArray(
											[
												$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
												A2(
													$elm$html$Html$a,
													_List_fromArray(
														[
															$elm$html$Html$Attributes$target('_blank'),
															$elm$html$Html$Attributes$href(info.h.b)
														]),
													_List_fromArray(
														[
															A2(
															$elm$html$Html$img,
															_List_fromArray(
																[
																	A2($elm$html$Html$Attributes$style, 'width', '100%'),
																	A2($elm$html$Html$Attributes$style, 'maxWidth', '150px'),
																	$elm$html$Html$Attributes$src(info.h.a)
																]),
															_List_Nil)
														])))
											]),
										$rundis$elm_bootstrap$Bootstrap$Card$config(
											_List_fromArray(
												[
													$rundis$elm_bootstrap$Bootstrap$Card$attrs(
													_List_fromArray(
														[
															A2($elm$html$Html$Attributes$style, 'margin-top', '6px')
														]))
												])))),
									A2(
									$elm$html$Html$a,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$target('_blank'),
											$elm$html$Html$Attributes$href(info.q)
										]),
									_List_fromArray(
										[
											A2(
											$elm$html$Html$img,
											_List_fromArray(
												[
													A2($elm$html$Html$Attributes$style, 'width', '40px'),
													$elm$html$Html$Attributes$src('img/facebook-logo.png')
												]),
											_List_Nil)
										])),
									A2(
									$elm$html$Html$a,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$target('_blank'),
											$elm$html$Html$Attributes$href(info.v)
										]),
									_List_fromArray(
										[
											A2(
											$elm$html$Html$img,
											_List_fromArray(
												[
													A2($elm$html$Html$Attributes$style, 'width', '40px'),
													$elm$html$Html$Attributes$src('img/twitter.png')
												]),
											_List_Nil)
										])),
									A2(
									$elm$html$Html$a,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$href(
											$author$project$Camps$mailto(info.n))
										]),
									_List_fromArray(
										[
											A2(
											$elm$html$Html$img,
											_List_fromArray(
												[
													A2($elm$html$Html$Attributes$style, 'width', '30px'),
													$elm$html$Html$Attributes$src('img/mail-outline-filled.png')
												]),
											_List_Nil)
										])),
									A2(
									$elm$html$Html$a,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$target('_blank'),
											$elm$html$Html$Attributes$href(info.h.b)
										]),
									_List_fromArray(
										[
											A2(
											$elm$html$Html$img,
											_List_fromArray(
												[
													A2($elm$html$Html$Attributes$style, 'width', '30px'),
													$elm$html$Html$Attributes$src('img/pdfDownload.png')
												]),
											_List_Nil)
										]))
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md6]),
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Card$view(
									A3(
										$rundis$elm_bootstrap$Bootstrap$Card$block,
										_List_Nil,
										_List_fromArray(
											[
												$author$project$Camps$heading('What to expect during the camp'),
												$author$project$Camps$listBody(info.w),
												$author$project$Camps$heading('Learning objectives'),
												$author$project$Camps$listBody(info.s),
												$author$project$Camps$heading('Communication'),
												$author$project$Camps$listBody(
												_List_fromArray(
													[
														_Utils_Tuple2('email with confirmation of registration', ''),
														_Utils_Tuple2('information on registering for one free lesson (per camp)', ''),
														_Utils_Tuple2('email with Zoom link Thursday before the camp', ''),
														_Utils_Tuple2('daily email update with your child\'s progress', '')
													])),
												$author$project$Camps$heading('Timing'),
												$author$project$Camps$listBody(info.u),
												$author$project$Camps$heading('Requirements'),
												$author$project$Camps$listBody(
												_Utils_ap(
													info.t,
													_List_fromArray(
														[
															_Utils_Tuple2('computer/laptop/chromebook with Chrome browser installed and microphone', ''),
															_Utils_Tuple2('iPad with keyboard', ''),
															_Utils_Tuple2('Zoom client optional', '')
														])))
											]),
										$rundis$elm_bootstrap$Bootstrap$Card$config(
											_List_fromArray(
												[
													$rundis$elm_bootstrap$Bootstrap$Card$attrs(
													_List_fromArray(
														[
															A2($elm$html$Html$Attributes$style, 'margin-top', '6px')
														]))
												]))))
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Grid$Col$attrs(
									_List_fromArray(
										[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$p0Lg]))
								]),
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Card$view(
									A3(
										$rundis$elm_bootstrap$Bootstrap$Card$block,
										_List_Nil,
										A2(
											$elm$core$List$cons,
											A2(
												$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
												_List_fromArray(
													[
														A2($elm$html$Html$Attributes$style, 'font-weight', '700')
													]),
												_List_fromArray(
													[
														$elm$html$Html$text(info.o)
													])),
											A2(
												$elm$core$List$concatMap,
												function (_v2) {
													var face = _v2.a;
													var link = _v2.b;
													return _List_fromArray(
														[
															$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
															A2(
																$elm$html$Html$a,
																_List_fromArray(
																	[
																		$elm$html$Html$Attributes$target('_blank'),
																		$elm$html$Html$Attributes$href(link)
																	]),
																_List_fromArray(
																	[
																		A2(
																		$elm$html$Html$img,
																		_List_fromArray(
																			[
																				A2($elm$html$Html$Attributes$style, 'width', '100%'),
																				A2($elm$html$Html$Attributes$style, 'maxWidth', '300px'),
																				$elm$html$Html$Attributes$src(face)
																			]),
																		_List_Nil)
																	]))),
															$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
															A2($elm$html$Html$p, _List_Nil, _List_Nil))
														]);
												},
												info.p)),
										$rundis$elm_bootstrap$Bootstrap$Card$config(
											_List_fromArray(
												[
													$rundis$elm_bootstrap$Bootstrap$Card$attrs(
													_List_fromArray(
														[
															A2($elm$html$Html$Attributes$style, 'margin-top', '6px')
														]))
												]))))
								]))
						]))
				]));
	});
var $author$project$Camps$codeLikeBeethoven = {
	y: 'Code like Beethoven',
	n: _Utils_Tuple2(
		'McMaster Start Coding Camps',
		_List_fromArray(
			[
				$author$project$Utils$PreTxt('Check out McMaster Start Coding’s summer camp! A great opportunity where students, grades 5-8, will learn to code!'),
				$author$project$Utils$PreLink('http://outreach.mcmaster.ca#camps')
			])),
	o: 'Click for sample:',
	p: _List_fromArray(
		[
			_Utils_Tuple2('img/Bananana2020.png', 'https://macoutreach.rocks/Bananana2020.html')
		]),
	q: 'https://www.facebook.com/McmasterStartcoding',
	B: '',
	s: _List_fromArray(
		[
			_Utils_Tuple2('music theory basics aligned with the Ontario curriculum', ''),
			_Utils_Tuple2('rhythm and meter basics', ''),
			_Utils_Tuple2('Elm music programmatic interface', '')
		]),
	h: _Utils_Tuple2('img/CodeLikeBeethovenAd2021.png', 'img/CodeLikeBeethovenAd2021.pdf'),
	t: _List_fromArray(
		[
			_Utils_Tuple2('lessons 1,2,3,4', '#lessons')
		]),
	u: _List_fromArray(
		[
			_Utils_Tuple2('Monday-Friday', ''),
			_Utils_Tuple2('10am-noon: coding+', ''),
			_Utils_Tuple2('noon-1pm: lunch break', ''),
			_Utils_Tuple2('1pm-3pm: coding+', ''),
			_Utils_Tuple2('3pm-4pm: exercise break', ''),
			_Utils_Tuple2('4pm-6pm: coding+', '')
		]),
	v: 'https://twitter.com/maccsoutreach',
	w: _List_fromArray(
		[
			_Utils_Tuple2('You will work in a team of four to create music, lyrics (words) and animations for your own music video.', ''),
			_Utils_Tuple2('You will learn Elm Music, which works just like shapes in 2D graphics.', ''),
			_Utils_Tuple2('You will get advice from a professional musician and composer.', '')
		])
};
var $author$project$Camps$codeLikePicasso = {
	y: 'Code like Picasso',
	n: _Utils_Tuple2(
		'McMaster Start Coding Camps',
		_List_fromArray(
			[
				$author$project$Utils$PreTxt('Check out McMaster Start Coding’s summer camp! A great opportunity where students, grades 5-8, will learn to code!'),
				$author$project$Utils$PreLink('http://outreach.mcmaster.ca#camps')
			])),
	o: 'Click for examples:',
	p: _List_fromArray(
		[
			_Utils_Tuple2('img/Sharyucasso.png', 'https://macoutreach.rocks/Sharyucasso.html'),
			_Utils_Tuple2('img/Debcasso.png', 'https://macoutreach.rocks/Debcasso.html')
		]),
	q: 'https://www.facebook.com/McmasterStartcoding',
	B: '',
	s: _List_fromArray(
		[
			_Utils_Tuple2('Learn how art evolved through time', ''),
			_Utils_Tuple2('Learn to identify important styles of art', ''),
			_Utils_Tuple2('Learn to translate artistic ideas to a digital medium', '')
		]),
	h: _Utils_Tuple2('img/CodeLikePicassoAd2021.png', 'img/CodeLikePicassoAd2021.pdf'),
	t: _List_fromArray(
		[
			_Utils_Tuple2('lessons 1,2,3,4', '#lessons')
		]),
	u: _List_fromArray(
		[
			_Utils_Tuple2('Monday-Friday', ''),
			_Utils_Tuple2('10am-noon: coding+', ''),
			_Utils_Tuple2('noon-1pm: lunch break', ''),
			_Utils_Tuple2('1pm-3pm: coding+', ''),
			_Utils_Tuple2('3pm-4pm: exercise break', ''),
			_Utils_Tuple2('4pm-6pm: coding+', '')
		]),
	v: 'https://twitter.com/maccsoutreach',
	w: _List_fromArray(
		[
			_Utils_Tuple2('You will work individually or in a team to create pictures, animations or even interactions in the style of a famous painting or artist.', ''),
			_Utils_Tuple2('You will learn the history of art in half an hour.', ''),
			_Utils_Tuple2('You will answer the question: \"What would Picasso do with animations?\" ', '')
		])
};
var $author$project$Camps$codeWeaver = {
	y: 'Code like Escher',
	n: _Utils_Tuple2(
		'McMaster Start Coding Camps',
		_List_fromArray(
			[
				$author$project$Utils$PreTxt('Check out McMaster Start Coding’s summer camp! A great opportunity where students, grades 5-8, will learn to code!'),
				$author$project$Utils$PreLink('http://outreach.mcmaster.ca#camps')
			])),
	o: 'Click for examples:',
	p: _List_fromArray(
		[
			_Utils_Tuple2('img/AaidaDragon.png', 'https://macoutreach.rocks/share/c5e433ce'),
			_Utils_Tuple2('img/AmrDragon.png', 'https://macoutreach.rocks/share/3d717b34'),
			_Utils_Tuple2('img/GurleenTriangles.png', 'https://macoutreach.rocks/share/9edc09ac')
		]),
	q: 'https://www.facebook.com/McmasterStartcoding',
	B: '',
	s: _List_fromArray(
		[
			_Utils_Tuple2('Transformation groups', ''),
			_Utils_Tuple2('Symmetry', ''),
			_Utils_Tuple2('Tesselations', ''),
			_Utils_Tuple2('Escher\'s use of symmetry', 'https://www.wikiart.org/en/m-c-escher'),
			_Utils_Tuple2('Fractals', 'https://en.wikipedia.org/wiki/Fractal_art')
		]),
	h: _Utils_Tuple2('img/CodeLikeEscherAd2021.png', 'img/CodeLikeEscherAd2021.pdf'),
	t: _List_fromArray(
		[
			_Utils_Tuple2('lessons 1,2,3,4,5,6,7', '#lessons')
		]),
	u: _List_fromArray(
		[
			_Utils_Tuple2('Monday-Friday', ''),
			_Utils_Tuple2('10am-noon: coding+', ''),
			_Utils_Tuple2('noon-1pm: lunch break', ''),
			_Utils_Tuple2('1pm-3pm: coding+', ''),
			_Utils_Tuple2('3pm-4pm: exercise break', ''),
			_Utils_Tuple2('4pm-6pm: coding+', '')
		]),
	v: 'https://twitter.com/maccsoutreach',
	w: _List_fromArray(
		[
			_Utils_Tuple2('You will create your own animated kaleidoscope.', ''),
			_Utils_Tuple2('You will create a snowflake, leaf, and branching tree just like in animated movies.', ''),
			_Utils_Tuple2('You will work individually or in a team to create a complex image using the repeated transformations have learned.', '')
		])
};
var $author$project$Camps$comicsCamp = {
	y: 'Dynamic Comics',
	n: _Utils_Tuple2(
		'McMaster Start Coding Comics Camp',
		_List_fromArray(
			[
				$author$project$Utils$PreTxt('Check out McMaster Start Coding’s Comics Camp! An awesome opportunity that connects storytelling with coding for students grade 5-8!'),
				$author$project$Utils$PreLink('http://outreach.mcmaster.ca#comics')
			])),
	o: 'Click for last year\'s creations:',
	p: _List_fromArray(
		[
			_Utils_Tuple2('img/Alearicia.png', 'https://macoutreach.rocks/comic/Alearicia'),
			_Utils_Tuple2('img/SeaSerpent.png', 'https://macoutreach.rocks/comic/seaSerpent')
		]),
	q: 'https://www.facebook.com/McmasterStartcoding',
	B: '',
	s: _List_fromArray(
		[
			_Utils_Tuple2(' Learn to use storyboarding ', ''),
			_Utils_Tuple2('Learn to write a script', ''),
			_Utils_Tuple2('Apply animation knowledge to moving characters', ''),
			_Utils_Tuple2('Learn techniques to harness creativity from brainstorming to the final product', ''),
			_Utils_Tuple2('Develop soft skills such as communication, presenting, and team management', '')
		]),
	h: _Utils_Tuple2('img/DynamicComicsAd2021.png', 'img/DynamicComicsAd2021.pdf'),
	t: _List_fromArray(
		[
			_Utils_Tuple2('Lessons 1,2,3,4,5', '#lessons')
		]),
	u: _List_fromArray(
		[
			_Utils_Tuple2('Monday-Friday', ''),
			_Utils_Tuple2('10am-noon: coding+', ''),
			_Utils_Tuple2('noon-1pm: lunch break', ''),
			_Utils_Tuple2('1pm-3pm: coding+', ''),
			_Utils_Tuple2('3pm-4pm: exercise break', ''),
			_Utils_Tuple2('4pm-6pm: coding+', '')
		]),
	v: 'https://twitter.com/maccsoutreach',
	w: _List_fromArray(
		[
			_Utils_Tuple2('You will work in a team of six to tell your story through comics.', ''),
			_Utils_Tuple2('You will learn about narrative and story-boarding from a professional storyteller.', ''),
			_Utils_Tuple2('You will use colour to set the mood, and animation to add excitement.', '')
		])
};
var $author$project$Camps$designThinkingCamp = {
	y: 'Design Thinking camp',
	n: _Utils_Tuple2(
		'McMaster Start Coding Camps',
		_List_fromArray(
			[
				$author$project$Utils$PreTxt('Check out McMaster Start Coding’s summer camp! A great opportunity where students, grades 5-8, will learn to code!'),
				$author$project$Utils$PreLink('http://outreach.mcmaster.ca#camps')
			])),
	o: 'Herograms were invented at our first Virtual Designathon (Learning in a Pandemic). Click for animations.',
	p: _List_fromArray(
		[
			_Utils_Tuple2('img/d48060faHero.png', 'https://macoutreach.rocks/share/d48060fa'),
			_Utils_Tuple2('img/304cdecdHero.png', 'https://macoutreach.rocks/share/304cdecd'),
			_Utils_Tuple2('img/017c126eHero.png', 'https://macoutreach.rocks/share/017c126e'),
			_Utils_Tuple2('img/4ac9622bHero.png', 'https://macoutreach.rocks/share/4ac9622b'),
			_Utils_Tuple2('img/dd193df7Hero.png', 'https://macoutreach.rocks/share/dd193df7')
		]),
	q: 'https://www.facebook.com/McmasterStartcoding',
	B: '',
	s: _List_fromArray(
		[
			_Utils_Tuple2('Learn key methods of Design Thinking (a part of human-centred design): understanding the user, ideation, problem framing, option ranking, prototyping, and feedback elicitation', ''),
			_Utils_Tuple2('Develop soft skills such as communication, team and project management', '')
		]),
	h: _Utils_Tuple2('img/DesignThinkingAd2021.png', 'img/DesignThinkingAd2021.pdf'),
	t: _List_fromArray(
		[
			_Utils_Tuple2('lessons 1,2,3,4', '#lessons')
		]),
	u: _List_fromArray(
		[
			_Utils_Tuple2('Monday-Friday', ''),
			_Utils_Tuple2('10am-noon: coding+', ''),
			_Utils_Tuple2('noon-1pm: lunch break', ''),
			_Utils_Tuple2('1pm-3pm: coding+', ''),
			_Utils_Tuple2('3pm-4pm: exercise break', ''),
			_Utils_Tuple2('4pm-6pm: coding+', '')
		]),
	v: 'https://twitter.com/maccsoutreach',
	w: _List_fromArray(
		[
			_Utils_Tuple2('You will work in a team of four to apply Design Thinking to a real-life problem.', ''),
			_Utils_Tuple2('You will learn research skills, including how to locate sources and evaluate them for reliability.', ''),
			_Utils_Tuple2('You will learn to use empathy maps to see a problem through the eyes of your user.', ''),
			_Utils_Tuple2('You will learn to collect feedback and formulate an action plan to improve your product.', '')
		])
};
var $author$project$Camps$isNotSelected = function (_v0) {
	var flag = _v0.a;
	var x = _v0.b;
	return flag ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(x);
};
var $author$project$Camps$isSelected = function (_v0) {
	var flat = _v0.a;
	var x = _v0.b;
	return flat ? $elm$core$Maybe$Just(x) : $elm$core$Maybe$Nothing;
};
var $author$project$Camps$journyIntoThreeD = {
	y: 'Journey into 3D',
	n: _Utils_Tuple2(
		'McMaster Start Coding\'s Journey into 3D',
		_List_fromArray(
			[
				$author$project$Utils$PreTxt('Check out McMaster Start Coding’s 3D Camp! An incredible opportunity to learn how to code interactive 3D games for students grades 5-8!'),
				$author$project$Utils$PreLink('http://outreach.mcmaster.ca#3d')
			])),
	o: 'Click for examples (use WASD-Shift-Space):',
	p: _List_fromArray(
		[
			_Utils_Tuple2('img/b52e13daBee.png', 'https://macoutreach.rocks/share/b52e13da'),
			_Utils_Tuple2('img/152bc746Bee.png', 'https://macoutreach.rocks/share/152bc746'),
			_Utils_Tuple2('img/e15b16dbBee.png', 'https://macoutreach.rocks/share/e15b16db')
		]),
	q: 'https://www.facebook.com/McmasterStartcoding',
	B: '',
	s: _List_fromArray(
		[
			_Utils_Tuple2('Transfer knowledge of shapes, coordinates and transformations from 2D to 3D', ''),
			_Utils_Tuple2('Learn to create complex animations, e.g. seaweed swaying', ''),
			_Utils_Tuple2('Develop soft skills such as communication, presenting, and team management in the context of a larger team', '')
		]),
	h: _Utils_Tuple2('img/Journeyinto3DAd2021.png', 'img/Journeyinto3DAd2021.pdf'),
	t: _List_fromArray(
		[
			_Utils_Tuple2('lessons 1,2,3,4,5', '#lessons')
		]),
	u: _List_fromArray(
		[
			_Utils_Tuple2('Monday-Friday', ''),
			_Utils_Tuple2('10am-noon: coding+', ''),
			_Utils_Tuple2('noon-1pm: lunch break', ''),
			_Utils_Tuple2('1pm-3pm: coding+', ''),
			_Utils_Tuple2('3pm-4pm: exercise break', ''),
			_Utils_Tuple2('4pm-6pm: coding+', '')
		]),
	v: 'https://twitter.com/maccsoutreach',
	w: _List_fromArray(
		[
			_Utils_Tuple2('You will work in one big team to plan and create a coral reef in 3D.', ''),
			_Utils_Tuple2('You will learn to create 3D objects and give them textures.', ''),
			_Utils_Tuple2('You will swim around the 3D world.', '')
		])
};
var $author$project$Camps$miniGames = {
	y: 'Mini-Games',
	n: _Utils_Tuple2(
		'McMaster Start Coding Camps',
		_List_fromArray(
			[
				$author$project$Utils$PreTxt('Check out McMaster Start Coding’s summer camp! A great opportunity where students, grades 5-8, will learn to code!'),
				$author$project$Utils$PreLink('http://outreach.mcmaster.ca#camps')
			])),
	o: 'Click for 2019 example:',
	p: _List_fromArray(
		[
			_Utils_Tuple2('img/EscapeMathIslandLogs.png', 'https://macoutreach.rocks/escapemathisland/')
		]),
	q: 'https://www.facebook.com/McmasterStartcoding',
	B: '',
	s: _List_fromArray(
		[
			_Utils_Tuple2('Learn to use design thinking to identify a mini-game premise', ''),
			_Utils_Tuple2('Learn to use state variables to track score, position, etc.', ''),
			_Utils_Tuple2('Learn to use advanced data structures like lists to track multiple objects', ''),
			_Utils_Tuple2('Develop soft skills such as communication, presenting, and team management', '')
		]),
	h: _Utils_Tuple2('img/Mini-GamesAd2021.png', 'img/Mini-GamesAd2021.pdf'),
	t: _List_fromArray(
		[
			_Utils_Tuple2('lessons 1,2,3,4,5,8,9', '#lessons')
		]),
	u: _List_fromArray(
		[
			_Utils_Tuple2('Monday-Friday', ''),
			_Utils_Tuple2('10am-noon: coding+', ''),
			_Utils_Tuple2('noon-1pm: lunch break', ''),
			_Utils_Tuple2('1pm-3pm: coding+', ''),
			_Utils_Tuple2('3pm-4pm: exercise break', ''),
			_Utils_Tuple2('4pm-6pm: coding+', '')
		]),
	v: 'https://twitter.com/maccsoutreach',
	w: _List_fromArray(
		[
			_Utils_Tuple2('You will work in a team of six to create mini-games.', ''),
			_Utils_Tuple2('You will learn to use controls such as arrow keys and drag-and-drop.', ''),
			_Utils_Tuple2('If you already made an adventure game, you will be able to incorporate your mini game.', '')
		])
};
var $author$project$Camps$miniGamesSaturdays = {
	y: 'Mini-Games Saturdays',
	n: _Utils_Tuple2(
		'McMaster Start Coding Camps',
		_List_fromArray(
			[
				$author$project$Utils$PreTxt('Check out McMaster Start Coding’s summer camp! A great opportunity where students, grades 5-8, will learn to code!'),
				$author$project$Utils$PreLink('http://outreach.mcmaster.ca#camps')
			])),
	o: '5 Examples in 1',
	p: _List_fromArray(
		[
			_Utils_Tuple2('img/EscapeMathIslandLogs.png', 'https://macoutreach.rocks/escapemathisland/')
		]),
	q: 'https://www.facebook.com/McmasterStartcoding',
	B: '',
	s: _List_fromArray(
		[
			_Utils_Tuple2('Learn to use state variables to track score, position, etc.', ''),
			_Utils_Tuple2('Learn to use advanced data structures like lists to track multiple objects', '')
		]),
	h: _Utils_Tuple2('img/SaturdayMini-GamesPoster2021.png', 'img/SaturdayMini-GamesPoster2021.pdf'),
	t: _List_fromArray(
		[
			_Utils_Tuple2('lessons 1,2,3,4,5', '#lessons')
		]),
	u: _List_fromArray(
		[
			_Utils_Tuple2('Saturdays May 22 - June 26', ''),
			_Utils_Tuple2('10am-noon: step-by-step to a working game, deciding on a theme', ''),
			_Utils_Tuple2('noon-1pm: lunch break', ''),
			_Utils_Tuple2('1pm-3:30pm: coding', ''),
			_Utils_Tuple2('3:30pm-4pm: final presentations', '')
		]),
	v: 'https://twitter.com/maccsoutreach',
	w: _List_fromArray(
		[
			_Utils_Tuple2('You will work alone or in a team of two or three to create a mini-game starting from a template.', ''),
			_Utils_Tuple2('Three different game mechanics will be covered.', ''),
			_Utils_Tuple2('Arrow keys to move around a maze with prizes, traps and trap doors. (May 22nd and June 2nd)', ''),
			_Utils_Tuple2('Clicking to kick a ball against an AI opponent. (May 29th and June 19th)', ''),
			_Utils_Tuple2('Arrow keys to move left and right to catch falling objects. (June 5th and 26th)', ''),
			_Utils_Tuple2('If you attend multiple times, you will be able to refine your game and add more difficult mechanics.', ''),
			_Utils_Tuple2('If you attend the Adventure or Mini-Games week-long camps, you will be able to incorporate multiple mini-games into an adventure game, and work on a bigger project with a team.', '')
		])
};
var $author$project$Camps$TabMsg = function (a) {
	return {$: 1, a: a};
};
var $MacCASOutreach$graphicsvg$GraphicSVG$grey = A4($MacCASOutreach$graphicsvg$GraphicSVG$RGBA, 211, 215, 207, 1);
var $MacCASOutreach$graphicsvg$GraphicSVG$Pull = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$alignLeft = function (stencil) {
	if (stencil.$ === 7) {
		var _v1 = stencil.a;
		var si = _v1.a;
		var bo = _v1.b;
		var i = _v1.c;
		var u = _v1.d;
		var s = _v1.e;
		var sel = _v1.f;
		var f = _v1.g;
		var c = _v1.h;
		var str = stencil.b;
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$Text,
			A8($MacCASOutreach$graphicsvg$GraphicSVG$Face, si, bo, i, u, s, sel, f, 0),
			str);
	} else {
		var a = stencil;
		return a;
	}
};
var $MacCASOutreach$graphicsvg$GraphicSVG$AlignRight = 2;
var $MacCASOutreach$graphicsvg$GraphicSVG$alignRight = function (stencil) {
	if (stencil.$ === 7) {
		var _v1 = stencil.a;
		var si = _v1.a;
		var bo = _v1.b;
		var i = _v1.c;
		var u = _v1.d;
		var s = _v1.e;
		var sel = _v1.f;
		var f = _v1.g;
		var c = _v1.h;
		var str = stencil.b;
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$Text,
			A8($MacCASOutreach$graphicsvg$GraphicSVG$Face, si, bo, i, u, s, sel, f, 2),
			str);
	} else {
		var a = stencil;
		return a;
	}
};
var $MacCASOutreach$graphicsvg$GraphicSVG$BezierPath = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$curveListHelper = function (_v0) {
	var _v1 = _v0.a;
	var a = _v1.a;
	var b = _v1.b;
	var _v2 = _v0.b;
	var c = _v2.a;
	var d = _v2.b;
	return _Utils_Tuple2(
		_Utils_Tuple2(a, b),
		_Utils_Tuple2(c, d));
};
var $MacCASOutreach$graphicsvg$GraphicSVG$curve = F2(
	function (_v0, list) {
		var a = _v0.a;
		var b = _v0.b;
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$BezierPath,
			_Utils_Tuple2(a, b),
			A2($elm$core$List$map, $MacCASOutreach$graphicsvg$GraphicSVG$curveListHelper, list));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$Oval = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$oval = F2(
	function (w, h) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$Oval, w, h);
	});
var $author$project$Tabs$tippedPaint = F2(
	function (canClr, _v0) {
		var msg = _v0.a;
		var clr = _v0.b;
		var _v1 = _v0.c;
		var line1 = _v1.a;
		var line2 = _v1.b;
		var line3 = _v1.c;
		var topBottom = A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			canClr,
			A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 60, 55));
		var shift = (line2 === '') ? 15 : 0;
		var innerTop = A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.5),
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				clr,
				A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 54, 50)));
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$scale,
			0.2,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$move,
				_Utils_Tuple2(0, 20),
				$MacCASOutreach$graphicsvg$GraphicSVG$group(
					_List_fromArray(
						[
							A3(
							$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
							$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
							clr,
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(0, 20),
								topBottom)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							canClr,
							A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 60, 40)),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(0, -20),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$subtract,
								innerTop,
								A3(
									$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
									$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
									$MacCASOutreach$graphicsvg$GraphicSVG$black,
									topBottom))),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(0, -20),
							innerTop),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$filled,
							clr,
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$curve,
								_Utils_Tuple2(-17.44, -38.82),
								_List_fromArray(
									[
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(-5.404, -47.08),
										_Utils_Tuple2(-4.96, -52.74)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(-50.03, -52.36),
										_Utils_Tuple2(-795.11, -60)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(-795.34, -57.78),
										_Utils_Tuple2(-795.57, -60)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(-0.066, -90.98),
										_Utils_Tuple2(795.441, -60)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(795.47, -57.96),
										_Utils_Tuple2(795.498, -60)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(49.562, -53.98),
										_Utils_Tuple2(3.6264, -52.01)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(7.4120, -44.31),
										_Utils_Tuple2(16.197, -39.80)),
										A2(
										$MacCASOutreach$graphicsvg$GraphicSVG$Pull,
										_Utils_Tuple2(-0.113, -39.10),
										_Utils_Tuple2(-17.44, -38.82))
									]))),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2((-20) + shift, -66),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
								$elm$core$Basics$degrees(4),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									$MacCASOutreach$graphicsvg$GraphicSVG$white,
									$MacCASOutreach$graphicsvg$GraphicSVG$alignRight(
										A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$size,
											20,
											$MacCASOutreach$graphicsvg$GraphicSVG$text(line1)))))),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$move,
							_Utils_Tuple2(0, -70),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
								$elm$core$Basics$degrees(-3),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									$MacCASOutreach$graphicsvg$GraphicSVG$white,
									$MacCASOutreach$graphicsvg$GraphicSVG$centered(
										A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$size,
											15,
											$MacCASOutreach$graphicsvg$GraphicSVG$text(line2)))))),
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$rotate,
							$elm$core$Basics$degrees(-4),
							A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(25 - shift, -66),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									$MacCASOutreach$graphicsvg$GraphicSVG$white,
									$MacCASOutreach$graphicsvg$GraphicSVG$alignLeft(
										A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$size,
											20,
											$MacCASOutreach$graphicsvg$GraphicSVG$text(line3))))))
						]))));
	});
var $MacCASOutreach$graphicsvg$GraphicSVG$notifyTap = F2(
	function (msg, shape) {
		return A2($MacCASOutreach$graphicsvg$GraphicSVG$Tap, msg, shape);
	});
var $author$project$Tabs$uprightPaint = F2(
	function (canClr, _v0) {
		var msg = _v0.a;
		var clr = _v0.b;
		var _v1 = _v0.c;
		var line1 = _v1.a;
		var line2 = _v1.b;
		var line3 = _v1.c;
		var topBottom = A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$filled,
			canClr,
			A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 60, 15));
		var innerTop = A3(
			$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
			$MacCASOutreach$graphicsvg$GraphicSVG$solid(0.5),
			$MacCASOutreach$graphicsvg$GraphicSVG$black,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$filled,
				clr,
				A2($MacCASOutreach$graphicsvg$GraphicSVG$oval, 54, 12)));
		return A2(
			$MacCASOutreach$graphicsvg$GraphicSVG$notifyTap,
			msg,
			A2(
				$MacCASOutreach$graphicsvg$GraphicSVG$scale,
				0.2,
				A2(
					$MacCASOutreach$graphicsvg$GraphicSVG$move,
					_Utils_Tuple2(0, 5),
					$MacCASOutreach$graphicsvg$GraphicSVG$group(
						_List_fromArray(
							[
								A3(
								$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
								$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
								clr,
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$move,
									_Utils_Tuple2(0, -30),
									topBottom)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$filled,
								canClr,
								A2($MacCASOutreach$graphicsvg$GraphicSVG$rect, 60, 60)),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(0, 30),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$subtract,
									innerTop,
									A3(
										$MacCASOutreach$graphicsvg$GraphicSVG$addOutline,
										$MacCASOutreach$graphicsvg$GraphicSVG$solid(1),
										$MacCASOutreach$graphicsvg$GraphicSVG$black,
										topBottom))),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(0, 30),
								innerTop),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(0, 5),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									clr,
									$MacCASOutreach$graphicsvg$GraphicSVG$centered(
										$MacCASOutreach$graphicsvg$GraphicSVG$text(line1)))),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(0, -3),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									clr,
									$MacCASOutreach$graphicsvg$GraphicSVG$centered(
										A2(
											$MacCASOutreach$graphicsvg$GraphicSVG$size,
											8,
											$MacCASOutreach$graphicsvg$GraphicSVG$text(line2))))),
								A2(
								$MacCASOutreach$graphicsvg$GraphicSVG$move,
								_Utils_Tuple2(0, -12),
								A2(
									$MacCASOutreach$graphicsvg$GraphicSVG$filled,
									clr,
									$MacCASOutreach$graphicsvg$GraphicSVG$centered(
										$MacCASOutreach$graphicsvg$GraphicSVG$text(line3))))
							])))));
	});
var $author$project$Camps$tabButton = F2(
	function (selectedTab, thisTab) {
		var f = selectedTab ? $author$project$Tabs$tippedPaint($MacCASOutreach$graphicsvg$GraphicSVG$grey) : $author$project$Tabs$uprightPaint($MacCASOutreach$graphicsvg$GraphicSVG$grey);
		return f(
			_Utils_Tuple3(
				$author$project$Camps$TabMsg(thisTab),
				$author$project$Parameters$gsvgColor(thisTab),
				$author$project$Parameters$name(thisTab)));
	});
var $author$project$Camps$tabItem = F2(
	function (active, _v0) {
		var tabId = _v0.a;
		var name = _v0.b;
		var codeBlock = _v0.c;
		return codeBlock;
	});
var $author$project$Camps$page = function (model) {
	var tabs = A2(
		$elm$core$List$indexedMap,
		F2(
			function (idx, tab) {
				return _Utils_Tuple2(
					_Utils_eq(model.a, tab),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(((1.5 + idx) * $author$project$Camps$tabWidth) - (0.5 * $author$project$Camps$widgetWidth), -3),
						A2(
							$author$project$Camps$tabButton,
							_Utils_eq(model.a, tab),
							tab)));
			}),
		$author$project$Parameters$allCamps);
	return _List_fromArray(
		[
			A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'flex-direction', 'row')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'width', '100%')
						]),
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Widget$view,
							model.aO,
							_Utils_ap(
								A2($elm$core$List$filterMap, $author$project$Camps$isNotSelected, tabs),
								A2($elm$core$List$filterMap, $author$project$Camps$isSelected, tabs)))
						]))
				])),
			function () {
			var _v0 = model.a;
			switch (_v0) {
				case 0:
					return A2(
						$author$project$Camps$tabItem,
						model.a,
						_Utils_Tuple3(
							'Animation',
							'Animation Camp',
							A2($author$project$Camps$camps, model.a, $author$project$Camps$animation)));
				case 1:
					return A2(
						$author$project$Camps$tabItem,
						model.a,
						_Utils_Tuple3(
							'Comics',
							'Comics Camp',
							A2($author$project$Camps$camps, model.a, $author$project$Camps$comicsCamp)));
				case 2:
					return A2(
						$author$project$Camps$tabItem,
						model.a,
						_Utils_Tuple3(
							'Adventure',
							'Adventure Camp',
							A2($author$project$Camps$camps, model.a, $author$project$Camps$adventure)));
				case 3:
					return A2(
						$author$project$Camps$tabItem,
						model.a,
						_Utils_Tuple3(
							'Mini-Games',
							'Mini-Games Camp',
							A2($author$project$Camps$camps, model.a, $author$project$Camps$miniGames)));
				case 4:
					return A2(
						$author$project$Camps$tabItem,
						model.a,
						_Utils_Tuple3(
							'3D',
							'Journey into 3D',
							A2($author$project$Camps$camps, model.a, $author$project$Camps$journyIntoThreeD)));
				case 9:
					return A2(
						$author$project$Camps$tabItem,
						model.a,
						_Utils_Tuple3(
							'DT',
							'Design Thinking Camp',
							A2($author$project$Camps$camps, model.a, $author$project$Camps$designThinkingCamp)));
				case 5:
					return A2(
						$author$project$Camps$tabItem,
						model.a,
						_Utils_Tuple3(
							'DT',
							'Design Thinking Camp',
							A2($author$project$Camps$camps, model.a, $author$project$Camps$designThinkingCamp)));
				case 6:
					return A2(
						$author$project$Camps$tabItem,
						model.a,
						_Utils_Tuple3(
							'Picasso',
							'Code like Picasso',
							A2($author$project$Camps$camps, model.a, $author$project$Camps$codeLikePicasso)));
				case 7:
					return A2(
						$author$project$Camps$tabItem,
						model.a,
						_Utils_Tuple3(
							'Escher',
							'Code like Escher',
							A2($author$project$Camps$camps, model.a, $author$project$Camps$codeWeaver)));
				case 8:
					return A2(
						$author$project$Camps$tabItem,
						model.a,
						_Utils_Tuple3(
							'Beethoven',
							'Code like Beethoven',
							A2($author$project$Camps$camps, model.a, $author$project$Camps$codeLikeBeethoven)));
				default:
					return A2(
						$author$project$Camps$tabItem,
						model.a,
						_Utils_Tuple3(
							'Mini-Sat',
							'Mini-Games Saturdays',
							A2($author$project$Camps$camps, model.a, $author$project$Camps$miniGamesSaturdays)));
			}
		}()
		]);
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Col$lg8 = A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$width, 3, 8);
var $rundis$elm_bootstrap$Bootstrap$Card$Block$link = F2(
	function (attributes, children) {
		return A2(
			$elm$html$Html$a,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('card-link')
					]),
				attributes),
			children);
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Middle = 1;
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$ColAlign = function (a) {
	return {$: 5, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$VAlign = F2(
	function (screenSize, align) {
		return {cZ: align, dv: screenSize};
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$colVAlign = F2(
	function (size, align) {
		return $rundis$elm_bootstrap$Bootstrap$Grid$Internal$ColAlign(
			A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$VAlign, size, align));
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Col$middleMd = A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$colVAlign, 2, 1);
var $author$project$ClassVisits$page = function (model) {
	return _List_fromArray(
		[
			A2(
			$elm$html$Html$h1,
			_List_fromArray(
				[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my5]),
			_List_fromArray(
				[
					$elm$html$Html$text('What We Will Do Again when COVID-19 is Over')
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/whatwedo1.png')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$lg8, $rundis$elm_bootstrap$Bootstrap$Grid$Col$middleMd]),
					_List_fromArray(
						[
							$elm$html$Html$text('At Software: Tool For Change, we provide elementary and middle school students with a fun and safe environment to learn code. We incorporate mathematical concepts such as the cartesian coordinate system and trigonometry. We have seen students understand things that they have learned in class better by playing with the tools we have provided.')
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h2,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt5]),
							_List_fromArray(
								[
									$elm$html$Html$text('Activities')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/LoveTheEarth.png')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('This is a new idea we developed with Principal De Tullio (now at St Luke).  The idea is to take two things children find hard (math and creative writing) and put them together into a fun activity.  Each group of four children created spent three hours, spread over two days creating a short narrative and animating it in the form of an eight-frame comic.  Even in such a sort span of time, two groups made remarkable progress.  Open them in new taps, and click on the frames to see the animations.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$link,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$href('https://macoutreach.rocks/comic0/')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('I Need Help.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$link,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$href('https://macoutreach.rocks/comic1/')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Love the Earth.')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Telling Stories with Code')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/binary-blast-off.png')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Activity Description')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('We will need 5 volunteers to play the role of binary digits, or bits, and help us count, which will lead to a surprising result.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Expected Outcomes')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Zeros and Ones are the basis for computation in computers, and the system of numbers is called binary.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Pre-Trip Prep')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('We have found that the hands-on approach works without preparation.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Post-Trip Reinforcement')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('After the trip, it would be useful to show how numbers can be represented in different bases, including decimal and binary, and show how long addition works the same way in different bases.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Time Needed')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('20 - 30 minutes')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Binary Blast-off')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/image2bits.png')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Activity Description')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Having seen binary numbers, we will now use an iPad game to show that pictures are encoded using binary numbers. Each child will create a black-and-white image and share it wirelessly with the other iPads, after which they will try to use their knowledge of binary to decode the images. It is quite possible to decode the images by guessing, but it is faster when some tricks are discovered based on understanding how numbers are represented (i.e. digit values grow from right to left, so it is easier to try “turning on” bigits from left to right, since once the bigits to the left are known, turning on the next bigit will either put the number over or not). Even kids who think they are not good at math usually figure this out in the context of the game, but we try to help the small number who need a bit of extra encouragement.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Expected Outcomes')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('All information we share or process digitally is encoded as binary numbers. Knowing the code, we can even decode small examples.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Pre-Trip Prep')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Binary means base 2. They do not need to know this, but if they know about different bases, this will put it in context. Knowing the powers of 2 (1,2,4,8,16,32,64,128) will help them.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Post-Trip Reinforcement')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('For classrooms with iPads, we have another app which shows how colour pictures are encoded, and allows the images to be edited by changing the numbers corresponding to pixel values.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Time Needed')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('20 - 60 minutes. They can learn how to do the binary decoding in 20 min, and if you have it on your iPads, they can come back to this whenever they have 10 minutes left over at the end of a period.')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Image 2 Bits')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/CAT-scan.png')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Activity Description')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Kids and supervisors will play the role of a dog’s stomach and a missing gold coin, as we try to figure out how to locate the coin using x-rays from multiple directions. If we are efficient, we can go on to decode the positions of bones and other tissues in the body. The computer in this case will be a whiteboard.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Expected Outcomes')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('An algorithm is a precise list of instructions, and even kids can figure one out. Some problems involve so much data, we need computers to solve them, in this case giving us a powerful medical tool.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Pre-Trip Prep')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('It would be helpful if the kids were reminded that light goes in straight lines and that there are kinds of light we cannot see, like x-rays. Doing SUDOKU problems in class will prime them for the type of logic they will need, and help them discover a workable algorithm themselves. We need to add the fractions 1,1/2,1/4,1/8,1/16, so it might be worth practicing these.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Post-Trip Reinforcement')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('As a class or group activity, kids who previously did SUDOKU puzzles could try to write an algorithm (a step-bystep list of instructions) for solving a SUDOKU puzzle. Kids you need to keep busy for a couple of weeks could be asked to write an ELM program to solve SUDOKU puzzles.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Time Needed')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('20 min to 25 min per group of up to 16. Need a flip-chart, whiteboard or smart-board, and some separation from other children to prevent a feedback loop of talking over the other group.')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('CAT Scan (stand up activity)')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/Word1.png')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Activity Description')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Using a iPad app called ElmJr we will help kids to create graphics and animations, starting with some common challenges, but going on to whatever they can imagine.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Expected Outcomes')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('They will learn to write error free programs in Elm programming language, focussing on graphics, and animation for students who want a challenge.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Pre-Trip Prep')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('ElmJr app should be installed on their iPads. They will have a lot of choice in creating computer graphics in this activity, but if they are familiar with (x,y) coordinates, and with graphs of simple functions, they will have the widest range of possibilities.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Post-Trip Reinforcement')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Since ElmJr app is a free iPad app, they can continue to work on animations on their own even at home.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Time Needed')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('We would like to have 2 hours with each class. For scheduling, it would be convenient for me to send two instructors for the day, and have them each visit one class in the morning and one in the afternoon. In addition to the instructor, we should have a few undergrad volunteers who can float between classes to help fix errors, or formulate statements correctly.')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('ElmJr App')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/binary-blast-off.png')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Activity Description')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Using a web-based programming language we will all create graphics and animations, starting with some common challenges, but going on to whatever they can imagine.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Expected Outcomes')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('They will learn to write programs in a programming language, focussing on graphics, and animation for students who want a challenge.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Pre-Trip Prep')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('They will have a lot of choice in creating computer graphics in this activity, but if they are familiar with (x,y) coordinates, and with graphs of simple functions, they will have the widest range of possibilities.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Post-Trip Reinforcement')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Because there is nothing to install, they can continue to work on animations on their own or in groups.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Time Needed')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('We would like to have 2 hours with each class. For scheduling, it would be convenient for me to send two instructors for the day, and have them each visit one class in the morning and one in the afternoon. In addition to the instructor, we should have a few undergrad volunteers who can float between classes to help fix errors, or formulate statements correctly.')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Elm Graphics')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/venture.png')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Activity Description')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Pairs or triples of students will use tap and drag operations to create an adventure game, and they will see the structure of the game as a graph, and that some aspects of the game (such as whether it is impossible) can be decoded by examining the graph. We will also take a first look at adding functionality using a text language (like Python used in the pyVenture activity).')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Expected Outcomes')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('A computer science graph is a set of points with a set of edges (lines) connecting them. It is probably the most important tool we have for representing information (such as the graph of Facebook friends!).')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Pre-Trip Prep')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('If you have studied a literary form (like haiku or the sonnet), they can write their adventure in this form, and you can suggest it as a challenge.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Post-Trip Reinforcement')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('There are many other examples of graphs, and the class should be able to come up with some examples. For fun, they could, on the board, draw the graph of who often eats lunch with whom. They could also use the internet to figure out which airports in Canada (or the World!) are connected by direct flights.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Time Needed')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('50 min to 120 min. They need about 15 minutes to understand the basics, but few can finish a playable game in under 50 minutes. The good creative writers won’t want to stop, but some children will need goals, such as creating 6 places in their game, or 6 keys, or creating 2 dead-ends, etc.')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('MacVenture')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/information-revolution.png')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Activity Description')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('The Information Revolution, also called the Digital Revolution and the Data Revolution is about the changes software is having on all aspects of our lives, from how we work, play and keep in touch with friends and families. We want to hear about what they see as the problems (e.g. cyberbullying, loss of privacy, undermining democracy) and opportunities (e.g. exciting new jobs and new ways to better share scarce food and other resources). We will present forecasts on the expected explosion of jobs in this area.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Expected Outcomes')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('The kids will start to think about the types and pace of change, and how we have choices as society and individuals about how we react to this change.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Pre-Trip Prep')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('To prime the kids for this event, it would be helpful if you discuss past revolutions, and how some, like the Industrial Revolution are caused by new inventions, and others, like the Renaissance, are about new ideas.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Post-Trip Reinforcement')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('A post-trip writing assignment would reinforce the discussion, with topics such as: Does cyberbullying have a solution in new software features, new laws or better awareness of bullying? Could networked information be used to reduce food waste and solve hunger in Canada?')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Time Needed')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('20 - 30 minutes')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Information Revolution (group discussion)')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/Design-Thinking.jpg')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Activity Description')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text(' Although technical literacy and skill is important, it is necessary we learn how to use it in a way that benefits users most. We teach the Design Thinking method to students to help them design apps with a user-centered approach. We teach this workshops to kids from grade 6-8 and their objective is to help kids in grade 1-2 that struggle with math. These workshops require the students to empathize, ideate and interview with a given problem a grade 1-2 is having.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Expected Outcomes')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text(' After the Design-Thinking Workshop, the kids will have a better understanding of how to design tools that assist users with addressing some problem. After completing the workshop they will have a prototype app or game which aims to solve some problem. ')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Pre-Trip Prep')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text(' Preparing for this workshop might include helping students improve their interviewing skills. What also may help is giving them a brief overview of the Design Thinking process. Exercises in empathizing and understanding perspectives of others would be helpful. ')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Post-Trip Reinforcement')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text(' Since the Design-Thinking process will result in some prototype, allowing them to continue to work on their project and bring it to life would be a great way to show the students the effectiveness of Design Thinking.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Time Needed')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text(' The workshop can take 1-3 school days, teachers can select desired length.')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Design Thinking')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs(
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(52,58,64)')
						]))
				]),
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				]))
		]);
};
var $author$project$Club$page = function (model) {
	return _List_fromArray(
		[
			A2(
			$elm$html$Html$h1,
			_List_fromArray(
				[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my5]),
			_List_fromArray(
				[
					$elm$html$Html$text('Club & Volunteering')
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md6]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Join McMaster Start Coding where we learn functional programming and teach youth how to make graphics and animation!')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$link,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$href('https://docs.google.com/forms/d/e/1FAIpQLSe7qSXyDyK2LeQRSf7_uX9DsJqlI--mDjaOsNycOkIwQE3Yuw/viewform')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Sign Up')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('McMaster Start Coding Signup')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md6]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '100%'),
									$elm$html$Html$Attributes$src('img/Volunteer.jpg')
								]),
							_List_Nil)
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h2,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt5]),
							_List_fromArray(
								[
									$elm$html$Html$text('Experiences from our Volunteers')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(' \"I started volunteering with McMaster Outreach in the Fall of 2017. Through this program, I have travelled to schools to work with students from diverse communities. I have learned that when individuals are given the attention they require, they have tremendous capacity to learn and grow! It has been a pleasure to partake and watch the transformation of young children grow through our programming.\"    - Joanne Thai ')
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(' \"This summer I was involved in a free summer camp we ran for grade 6-8 students. I was helping a grade 6 student with their code and they told me that, because of this camp, they wanted to pursue an eventual career in computer science. Moments like these are why I love Software: Tool for Change so much. If we can inspire even one student to pursue a STEM career, then that makes it all worth it.\"    - Christopher Schankula ')
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs(
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(52,58,64)')
						]))
				]),
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				]))
		]);
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Attrs = function (a) {
	return {$: 4, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Button$attrs = function (attrs_) {
	return $rundis$elm_bootstrap$Bootstrap$Internal$Button$Attrs(attrs_);
};
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (!maybeValue.$) {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$applyModifier = F2(
	function (modifier, options) {
		switch (modifier.$) {
			case 0:
				var size = modifier.a;
				return _Utils_update(
					options,
					{
						b9: $elm$core$Maybe$Just(size)
					});
			case 1:
				var coloring = modifier.a;
				return _Utils_update(
					options,
					{
						J: $elm$core$Maybe$Just(coloring)
					});
			case 2:
				return _Utils_update(
					options,
					{a5: true});
			case 3:
				var val = modifier.a;
				return _Utils_update(
					options,
					{bg: val});
			default:
				var attrs = modifier.a;
				return _Utils_update(
					options,
					{
						a3: _Utils_ap(options.a3, attrs)
					});
		}
	});
var $elm$html$Html$Attributes$classList = function (classes) {
	return $elm$html$Html$Attributes$class(
		A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				$elm$core$Tuple$first,
				A2($elm$core$List$filter, $elm$core$Tuple$second, classes))));
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$defaultOptions = {a3: _List_Nil, a5: false, J: $elm$core$Maybe$Nothing, bg: false, b9: $elm$core$Maybe$Nothing};
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$roleClass = function (role) {
	switch (role) {
		case 0:
			return 'primary';
		case 1:
			return 'secondary';
		case 2:
			return 'success';
		case 3:
			return 'info';
		case 4:
			return 'warning';
		case 5:
			return 'danger';
		case 6:
			return 'dark';
		case 7:
			return 'light';
		default:
			return 'link';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$buttonAttributes = function (modifiers) {
	var options = A3($elm$core$List$foldl, $rundis$elm_bootstrap$Bootstrap$Internal$Button$applyModifier, $rundis$elm_bootstrap$Bootstrap$Internal$Button$defaultOptions, modifiers);
	return _Utils_ap(
		_List_fromArray(
			[
				$elm$html$Html$Attributes$classList(
				_List_fromArray(
					[
						_Utils_Tuple2('btn', true),
						_Utils_Tuple2('btn-block', options.a5),
						_Utils_Tuple2('disabled', options.bg)
					])),
				$elm$html$Html$Attributes$disabled(options.bg)
			]),
		_Utils_ap(
			function () {
				var _v0 = A2($elm$core$Maybe$andThen, $rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption, options.b9);
				if (!_v0.$) {
					var s = _v0.a;
					return _List_fromArray(
						[
							$elm$html$Html$Attributes$class('btn-' + s)
						]);
				} else {
					return _List_Nil;
				}
			}(),
			_Utils_ap(
				function () {
					var _v1 = options.J;
					if (!_v1.$) {
						if (!_v1.a.$) {
							var role = _v1.a.a;
							return _List_fromArray(
								[
									$elm$html$Html$Attributes$class(
									'btn-' + $rundis$elm_bootstrap$Bootstrap$Internal$Button$roleClass(role))
								]);
						} else {
							var role = _v1.a.a;
							return _List_fromArray(
								[
									$elm$html$Html$Attributes$class(
									'btn-outline-' + $rundis$elm_bootstrap$Bootstrap$Internal$Button$roleClass(role))
								]);
						}
					} else {
						return _List_Nil;
					}
				}(),
				options.a3)));
};
var $rundis$elm_bootstrap$Bootstrap$Button$linkButton = F2(
	function (options, children) {
		return A2(
			$elm$html$Html$a,
			A2(
				$elm$core$List$cons,
				A2($elm$html$Html$Attributes$attribute, 'role', 'button'),
				$rundis$elm_bootstrap$Bootstrap$Internal$Button$buttonAttributes(options)),
			children);
	});
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$Coloring = function (a) {
	return {$: 1, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$Outlined = function (a) {
	return {$: 1, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Role$Secondary = 1;
var $rundis$elm_bootstrap$Bootstrap$Card$outlineSecondary = $rundis$elm_bootstrap$Bootstrap$Card$Internal$Coloring(
	$rundis$elm_bootstrap$Bootstrap$Card$Internal$Outlined(1));
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Coloring = function (a) {
	return {$: 1, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Primary = 0;
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Roled = function (a) {
	return {$: 0, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Button$primary = $rundis$elm_bootstrap$Bootstrap$Internal$Button$Coloring(
	$rundis$elm_bootstrap$Bootstrap$Internal$Button$Roled(0));
var $author$project$CodingTools$page = function (model) {
	return _List_fromArray(
		[
			A2(
			$elm$html$Html$h1,
			_List_fromArray(
				[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my5]),
			_List_fromArray(
				[
					$elm$html$Html$text('🔨 Coding Tools')
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Start with the basics of animations and create different sizes and types of shapes.')
											])),
										$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
										A2(
											$rundis$elm_bootstrap$Bootstrap$Button$linkButton,
											_List_fromArray(
												[
													$rundis$elm_bootstrap$Bootstrap$Button$primary,
													$rundis$elm_bootstrap$Bootstrap$Button$attrs(
													_List_fromArray(
														[
															$elm$html$Html$Attributes$target('_blank'),
															$elm$html$Html$Attributes$href('http://www.cas.mcmaster.ca/~anand/ShapeCreate2.html')
														]))
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('Try Shape Creator')
												])))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Shape Creator')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(
										_List_fromArray(
											[$rundis$elm_bootstrap$Bootstrap$Card$outlineSecondary])))))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Edit code in Elm to develop things such as animations or games.')
											])),
										$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
										A2(
											$rundis$elm_bootstrap$Bootstrap$Button$linkButton,
											_List_fromArray(
												[
													$rundis$elm_bootstrap$Bootstrap$Button$primary,
													$rundis$elm_bootstrap$Bootstrap$Button$attrs(
													_List_fromArray(
														[
															$elm$html$Html$Attributes$target('_blank'),
															$elm$html$Html$Attributes$href('https://macoutreach.rocks/')
														]))
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('Try Code Editor')
												])))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Code Editor')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(
										_List_fromArray(
											[$rundis$elm_bootstrap$Bootstrap$Card$outlineSecondary])))))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Code in Elm or HTML and see your results in the web browser.')
											])),
										$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
										A2(
											$rundis$elm_bootstrap$Bootstrap$Button$linkButton,
											_List_fromArray(
												[
													$rundis$elm_bootstrap$Bootstrap$Button$primary,
													$rundis$elm_bootstrap$Bootstrap$Button$attrs(
													_List_fromArray(
														[
															$elm$html$Html$Attributes$target('_blank'),
															$elm$html$Html$Attributes$href('https://ellie-app.com/4DzdvnDVDZCa1')
														]))
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('Try Ellie')
												])))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Ellie')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(
										_List_fromArray(
											[$rundis$elm_bootstrap$Bootstrap$Card$outlineSecondary])))))
						]))
				])),
			A2(
			$elm$html$Html$h1,
			_List_fromArray(
				[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my5]),
			_List_fromArray(
				[
					$elm$html$Html$text('Examples')
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('See coding examples of codes from students.')
											])),
										$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
										A2(
											$rundis$elm_bootstrap$Bootstrap$Button$linkButton,
											_List_fromArray(
												[
													$rundis$elm_bootstrap$Bootstrap$Button$primary,
													$rundis$elm_bootstrap$Bootstrap$Button$attrs(
													_List_fromArray(
														[
															$elm$html$Html$Attributes$href('http://www.cas.mcmaster.ca/~anand/examples/')
														]))
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('View Examples')
												])))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Code Examples')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(
										_List_fromArray(
											[$rundis$elm_bootstrap$Bootstrap$Card$outlineSecondary])))))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('See some interesting demostrations in Elm developed from students.')
											])),
										$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
										A2(
											$rundis$elm_bootstrap$Bootstrap$Button$linkButton,
											_List_fromArray(
												[
													$rundis$elm_bootstrap$Bootstrap$Button$primary,
													$rundis$elm_bootstrap$Bootstrap$Button$attrs(
													_List_fromArray(
														[
															$elm$html$Html$Attributes$href('http://www.cas.mcmaster.ca/~anand/CoolDemos/')
														]))
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('View Cool Demos')
												])))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Cool Demos')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(
										_List_fromArray(
											[$rundis$elm_bootstrap$Bootstrap$Card$outlineSecondary])))))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('In a popular game-show tactic, contestants are given a choice of three doors, only one of which conceals a prize. After picking one, another is opened to reveal a non-prize, and the contestant is asked if they want to change their choice.  Should they?  Why?')
											])),
										$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
										A2(
											$rundis$elm_bootstrap$Bootstrap$Button$linkButton,
											_List_fromArray(
												[
													$rundis$elm_bootstrap$Bootstrap$Button$primary,
													$rundis$elm_bootstrap$Bootstrap$Button$attrs(
													_List_fromArray(
														[
															$elm$html$Html$Attributes$target('_blank'),
															$elm$html$Html$Attributes$href('http://www.cas.mcmaster.ca/~anand/MontyHallSimulator.html')
														]))
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('Monty Hall Simulator')
												])))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Monty Hall')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(
										_List_fromArray(
											[$rundis$elm_bootstrap$Bootstrap$Card$outlineSecondary])))))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs(
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(52,58,64)')
						]))
				]),
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				]))
		]);
};
var $rundis$elm_bootstrap$Bootstrap$Grid$container = F2(
	function (attributes, children) {
		return A2(
			$elm$html$Html$div,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('container')
					]),
				attributes),
			children);
	});
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt4 = $elm$html$Html$Attributes$class('mt-4');
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt2 = $elm$html$Html$Attributes$class('mt-2');
var $rundis$elm_bootstrap$Bootstrap$General$Internal$SM = 1;
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Size = function (a) {
	return {$: 0, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Button$small = $rundis$elm_bootstrap$Bootstrap$Internal$Button$Size(1);
var $author$project$Showcase$oneLink = function (_v0) {
	var name = _v0.a;
	var url = _v0.b;
	return A2(
		$rundis$elm_bootstrap$Bootstrap$Grid$row,
		_List_fromArray(
			[
				$rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs(
				_List_fromArray(
					[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt2]))
			]),
		_List_fromArray(
			[
				A2(
				$rundis$elm_bootstrap$Bootstrap$Grid$col,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$rundis$elm_bootstrap$Bootstrap$Button$linkButton,
						_List_fromArray(
							[
								$rundis$elm_bootstrap$Bootstrap$Button$primary,
								$rundis$elm_bootstrap$Bootstrap$Button$small,
								$rundis$elm_bootstrap$Bootstrap$Button$attrs(
								_List_fromArray(
									[
										$elm$html$Html$Attributes$target('_blank'),
										$elm$html$Html$Attributes$href(url),
										A2($elm$html$Html$Attributes$style, 'width', '100%')
									]))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(name)
							]))
					]))
			]));
};
var $author$project$Showcase$links2games = F3(
	function (title, imgurl, links) {
		return A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$container,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$row,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									$elm$html$Html$h2,
									_List_fromArray(
										[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt4]),
									_List_fromArray(
										[
											$elm$html$Html$text(title)
										]))
								]))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$row,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md6]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$img,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'width', '100%'),
											$elm$html$Html$Attributes$src(imgurl)
										]),
									_List_Nil)
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md3, $rundis$elm_bootstrap$Bootstrap$Grid$Col$middleMd]),
							A2($elm$core$List$map, $author$project$Showcase$oneLink, links))
						]))
				]));
	});
var $author$project$Showcase$comic2019 = A2(
	$rundis$elm_bootstrap$Bootstrap$Grid$row,
	_List_Nil,
	_List_fromArray(
		[
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$col,
			_List_Nil,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Card$view(
					A3(
						$rundis$elm_bootstrap$Bootstrap$Card$block,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text('For 2019, we partnered up with the schools of St Luke and Charles Beaudoin to create comics tied to teacher-selected curricula. The three main topics were global warming, the War of 1812, and ‘The Giver’, a novel by Lois Lowry.')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text('Ranging from grades 7 to 8 and in groups of various sizes, the students managed to complete several comics over the span of a few hours. The format stayed similar to that of last year, with the comic being a narrative being told over the length of an eight panel comic. Students made use of various tools provided to them to create interactive comics. Students utilized the tracing tool to create shapes requiring complicated curves, text bubbles to show the dialogue between the characters and much more.')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text('By working on the comics, students were able to switch from a literary world to the world of coding. Feedback from the students revealed that they enjoy working on coding integrated with creative writing projects more than strictly writing activities.')
									])),
								$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
								A3(
									$author$project$Showcase$links2games,
									'Climate Change Comics',
									'img/Flooding-Comic.png',
									_List_fromArray(
										[
											_Utils_Tuple2('Flooding', 'https://macoutreach.rocks/comic853.html'),
											_Utils_Tuple2('Save The Sea Life', 'https://macoutreach.rocks/comic861.html'),
											_Utils_Tuple2('Save The Turtles', 'https://macoutreach.rocks/comic859.html')
										]))),
								$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
								A3(
									$author$project$Showcase$links2games,
									'War of 1812 Comics',
									'img/War1812-Comic.png',
									_List_fromArray(
										[
											_Utils_Tuple2('War of 1812 #1', 'https://macoutreach.rocks/comic855.html'),
											_Utils_Tuple2('War of 1812 #2', 'https://macoutreach.rocks/comic854.html'),
											_Utils_Tuple2('War of 1812 #3', 'https://macoutreach.rocks/comic857.html')
										]))),
								$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
								A3(
									$author$project$Showcase$links2games,
									'The Giver Comics',
									'img/TheGiver-Comic.png',
									_List_fromArray(
										[
											_Utils_Tuple2('The Giver #1', 'https://macoutreach.rocks/comic875.html'),
											_Utils_Tuple2('The Giver #2', 'https://macoutreach.rocks/comic880.html')
										])))
							]),
						A3(
							$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
									A2($elm$html$Html$Attributes$style, 'font-weight', '700')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Comics 2019')
								]),
							$rundis$elm_bootstrap$Bootstrap$Card$config(
								_List_fromArray(
									[$rundis$elm_bootstrap$Bootstrap$Card$outlineSecondary])))))
				]))
		]));
var $author$project$Comics2019$page = function (model) {
	return _List_fromArray(
		[$author$project$Showcase$comic2019]);
};
var $rundis$elm_bootstrap$Bootstrap$Internal$Text$Center = 1;
var $rundis$elm_bootstrap$Bootstrap$Text$alignXs = function (dir) {
	return {c2: dir, b9: 0};
};
var $rundis$elm_bootstrap$Bootstrap$Text$alignXsCenter = $rundis$elm_bootstrap$Bootstrap$Text$alignXs(1);
var $rundis$elm_bootstrap$Bootstrap$Card$Internal$Aligned = function (a) {
	return {$: 0, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Card$align = function (hAlign) {
	return $rundis$elm_bootstrap$Bootstrap$Card$Internal$Aligned(hAlign);
};
var $rundis$elm_bootstrap$Bootstrap$Card$Footer = $elm$core$Basics$identity;
var $rundis$elm_bootstrap$Bootstrap$Card$footer = F3(
	function (attributes, children, _v0) {
		var conf = _v0;
		return _Utils_update(
			conf,
			{
				cy: $elm$core$Maybe$Just(
					A2(
						$elm$html$Html$div,
						A2(
							$elm$core$List$cons,
							$elm$html$Html$Attributes$class('card-footer'),
							attributes),
						children))
			});
	});
var $elm$html$Html$small = _VirtualDom_node('small');
var $author$project$Contact$cardList = _List_fromArray(
	[
		A3(
		$rundis$elm_bootstrap$Bootstrap$Card$footer,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$small,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('text-muted')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('Send us an email.')
					]))
			]),
		A3(
			$rundis$elm_bootstrap$Bootstrap$Card$block,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('mailto:mcmasteroutreach@gmail.com')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$img,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'width', '60px'),
											$elm$html$Html$Attributes$src('img/mail.png')
										]),
									_List_Nil)
								]))
						]))
				]),
			A3(
				$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text('Email:')
					]),
				$rundis$elm_bootstrap$Bootstrap$Card$config(
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$align($rundis$elm_bootstrap$Bootstrap$Text$alignXsCenter)
						]))))),
		A3(
		$rundis$elm_bootstrap$Bootstrap$Card$footer,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$small,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('text-muted')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('Check out our Facebook Page.')
					]))
			]),
		A3(
			$rundis$elm_bootstrap$Bootstrap$Card$block,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$target('_blank'),
									$elm$html$Html$Attributes$href('https://www.facebook.com/McmasterStartcoding')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$img,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'width', '90px'),
											$elm$html$Html$Attributes$src('img/facebook-logo.png')
										]),
									_List_Nil)
								]))
						]))
				]),
			A3(
				$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text('Facebook:')
					]),
				$rundis$elm_bootstrap$Bootstrap$Card$config(
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$align($rundis$elm_bootstrap$Bootstrap$Text$alignXsCenter)
						]))))),
		A3(
		$rundis$elm_bootstrap$Bootstrap$Card$footer,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$small,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('text-muted')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('Check out our Location.')
					]))
			]),
		A3(
			$rundis$elm_bootstrap$Bootstrap$Card$block,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$target('_blank'),
									$elm$html$Html$Attributes$href('https://www.google.com/maps/place/McMaster+University/@43.2600915,-79.9228492,15z/data=!4m5!3m4!1s0x882c84ac44f72ac1:0x399e00ea6143011c!8m2!3d43.260879!4d-79.9192254')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$img,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'width', '75px'),
											$elm$html$Html$Attributes$src('img/15-512.png')
										]),
									_List_Nil)
								]))
						]))
				]),
			A3(
				$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text('Address:')
					]),
				$rundis$elm_bootstrap$Bootstrap$Card$config(
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$align($rundis$elm_bootstrap$Bootstrap$Text$alignXsCenter)
						])))))
	]);
var $author$project$Contact$donateCardList = _List_fromArray(
	[
		A3(
		$rundis$elm_bootstrap$Bootstrap$Card$footer,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$small,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('text-muted')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('Email milsont@mcmaster.ca to inquire about donating to the Algebraic Thinking fund.')
					]))
			]),
		A3(
			$rundis$elm_bootstrap$Bootstrap$Card$block,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'font-size', '300%')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('mailto:milsont@mcmaster.ca?subject=AlgebraicThinkingFund')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('✉️')
								]))
						]))
				]),
			A3(
				$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text('Email:')
					]),
				$rundis$elm_bootstrap$Bootstrap$Card$config(
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$align($rundis$elm_bootstrap$Bootstrap$Text$alignXsCenter)
						]))))),
		A3(
		$rundis$elm_bootstrap$Bootstrap$Card$footer,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$small,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('text-muted')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('Call (905)525-9140 extension 27391 to inquire about donating to the Algebraic Thinking fund.')
					]))
			]),
		A3(
			$rundis$elm_bootstrap$Bootstrap$Card$block,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'font-size', '300%')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('tel:905-525-9140;;27391')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('☎️')
								]))
						]))
				]),
			A3(
				$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text('Telephone:')
					]),
				$rundis$elm_bootstrap$Bootstrap$Card$config(
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$align($rundis$elm_bootstrap$Bootstrap$Text$alignXsCenter)
						])))))
	]);
var $rundis$elm_bootstrap$Bootstrap$Card$group = function (cards) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('card-group')
			]),
		A2($elm$core$List$map, $rundis$elm_bootstrap$Bootstrap$Card$view, cards));
};
var $elm$html$Html$h4 = _VirtualDom_node('h4');
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$TextAlign = function (a) {
	return {$: 7, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Col$textAlign = function (align) {
	return $rundis$elm_bootstrap$Bootstrap$Grid$Internal$TextAlign(align);
};
var $author$project$Contact$page = function (model) {
	return _List_fromArray(
		[
			A2(
			$elm$html$Html$h1,
			_List_fromArray(
				[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my5]),
			_List_fromArray(
				[
					$elm$html$Html$text('Contact')
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h4,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'text-align', 'center')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Are you a teacher, parent or student? Get in touch with us; we\'d love to run a workshop at a school near you!')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Grid$Col$textAlign($rundis$elm_bootstrap$Bootstrap$Text$alignXsCenter)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h2,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'text-align', 'center')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Get in Touch:')
								]))
						]))
				])),
			$rundis$elm_bootstrap$Bootstrap$Card$group($author$project$Contact$cardList),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs(
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(52,58,64)')
						]))
				]),
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$elm$html$Html$h1,
			_List_fromArray(
				[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my5]),
			_List_fromArray(
				[
					$elm$html$Html$text('Donate')
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h2,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'text-align', 'center')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Do you share our vision of providing learning opportunities to childen, independently of parents\' ability to pay?')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Grid$Col$textAlign($rundis$elm_bootstrap$Bootstrap$Text$alignXsCenter)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('To support our workshops and extracurricular activities you may make a donation eligible for a tax receipt for donations of $25.00 or greater. Please contact Ms. Terry Milson, McMaster University, Faculty of Engineering Advancement Officer by phone or email to learn more about contributing to the Algebraic Thinking fund.')
						]))
				])),
			$rundis$elm_bootstrap$Bootstrap$Card$group($author$project$Contact$donateCardList),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs(
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(52,58,64)')
						]))
				]),
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				]))
		]);
};
var $author$project$Donate$cardList = _List_fromArray(
	[
		A3(
		$rundis$elm_bootstrap$Bootstrap$Card$footer,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$small,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('text-muted')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('Email milsont@mcmaster.ca to inquire about donating to the Algebraic Thinking fund.')
					]))
			]),
		A3(
			$rundis$elm_bootstrap$Bootstrap$Card$block,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'font-size', '300%')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('mailto:milsont@mcmaster.ca?subject=AlgebraicThinkingFund')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('✉️')
								]))
						]))
				]),
			A3(
				$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text('Email:')
					]),
				$rundis$elm_bootstrap$Bootstrap$Card$config(
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$align($rundis$elm_bootstrap$Bootstrap$Text$alignXsCenter)
						]))))),
		A3(
		$rundis$elm_bootstrap$Bootstrap$Card$footer,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$small,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('text-muted')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text('Call (905)525-9140 extension 27391 to inquire about donating to the Algebraic Thinking fund.')
					]))
			]),
		A3(
			$rundis$elm_bootstrap$Bootstrap$Card$block,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'font-size', '300%')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('tel:905-525-9140;;27391')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('☎️')
								]))
						]))
				]),
			A3(
				$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
				_List_Nil,
				_List_fromArray(
					[
						$elm$html$Html$text('Telephone:')
					]),
				$rundis$elm_bootstrap$Bootstrap$Card$config(
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$align($rundis$elm_bootstrap$Bootstrap$Text$alignXsCenter)
						])))))
	]);
var $author$project$Donate$page = function (model) {
	return _List_fromArray(
		[
			A2(
			$elm$html$Html$h1,
			_List_fromArray(
				[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my5]),
			_List_fromArray(
				[
					$elm$html$Html$text('Donate')
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h2,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'text-align', 'center')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Do you share our vision of providing learning opportunities to childen, independently of parents\' ability to pay?')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Grid$Col$textAlign($rundis$elm_bootstrap$Bootstrap$Text$alignXsCenter)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('To support our workshops and extracurricular activities you may make a donation eligible for a tax receipt for donations of $25.00 or greater. Please contact Ms. Terry Milson, McMaster University, Faculty of Engineering Advancement Officer by phone or email to learn more about contributing to the Algebraic Thinking fund.')
						]))
				])),
			$rundis$elm_bootstrap$Bootstrap$Card$group($author$project$Donate$cardList),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs(
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(52,58,64)')
						]))
				]),
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				]))
		]);
};
var $rundis$elm_bootstrap$Bootstrap$Card$headerH4 = $rundis$elm_bootstrap$Bootstrap$Card$headerPrivate($elm$html$Html$h4);
var $author$project$Examples$page = function (model) {
	return _List_fromArray(
		[
			A2(
			$elm$html$Html$h1,
			_List_fromArray(
				[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my5]),
			_List_fromArray(
				[
					$elm$html$Html$text('Examples')
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('See coding examples of codes from students.')
											])),
										$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
										A2(
											$rundis$elm_bootstrap$Bootstrap$Button$linkButton,
											_List_fromArray(
												[
													$rundis$elm_bootstrap$Bootstrap$Button$primary,
													$rundis$elm_bootstrap$Bootstrap$Button$attrs(
													_List_fromArray(
														[
															$elm$html$Html$Attributes$href('http://www.cas.mcmaster.ca/~anand/examples/')
														]))
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('View Examples')
												])))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$headerH4,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('Code Examples')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(
										_List_fromArray(
											[$rundis$elm_bootstrap$Bootstrap$Card$outlineSecondary])))))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('See some interesting demostrations in Elm developed from students.')
											])),
										$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
										A2(
											$rundis$elm_bootstrap$Bootstrap$Button$linkButton,
											_List_fromArray(
												[
													$rundis$elm_bootstrap$Bootstrap$Button$primary,
													$rundis$elm_bootstrap$Bootstrap$Button$attrs(
													_List_fromArray(
														[
															$elm$html$Html$Attributes$href('http://www.cas.mcmaster.ca/~anand/CoolDemos/')
														]))
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('View Cool Demos')
												])))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$headerH4,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('Cool Demos')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(
										_List_fromArray(
											[$rundis$elm_bootstrap$Bootstrap$Card$outlineSecondary])))))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs(
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'position', 'fixed'),
							A2($elm$html$Html$Attributes$style, 'bottom', '0px'),
							A2($elm$html$Html$Attributes$style, 'left', '12px'),
							A2($elm$html$Html$Attributes$style, 'width', '100%'),
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(52,58,64)')
						]))
				]),
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				]))
		]);
};
var $author$project$Execs$mkMember = function (_v0) {
	var _v1 = _v0.a;
	var name = _v1.a;
	var picture = _v1.b;
	var position = _v0.b;
	var programAndYear = _v0.c;
	return A2(
		$rundis$elm_bootstrap$Bootstrap$Grid$row,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$rundis$elm_bootstrap$Bootstrap$Grid$col,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$elm$html$Html$img,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'width', '200px'),
								$elm$html$Html$Attributes$src(picture)
							]),
						_List_Nil)
					])),
				A2(
				$rundis$elm_bootstrap$Bootstrap$Grid$col,
				_List_fromArray(
					[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
				_List_fromArray(
					[
						$rundis$elm_bootstrap$Bootstrap$Card$view(
						A3(
							$rundis$elm_bootstrap$Bootstrap$Card$block,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
											A2($elm$html$Html$Attributes$style, 'font-size', '20px')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text(position)
										])),
									A2(
									$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
											A2($elm$html$Html$Attributes$style, 'font-size', '20px')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text(programAndYear)
										]))
								]),
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
								_List_fromArray(
									[
										A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
										A2($elm$html$Html$Attributes$style, 'font-weight', '700')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text(name)
									]),
								$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
					]))
			]));
};
var $author$project$Execs$page = function (model) {
	return _Utils_ap(
		_List_fromArray(
			[
				A2(
				$elm$html$Html$h1,
				_List_fromArray(
					[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my5]),
				_List_fromArray(
					[
						$elm$html$Html$text('McMaster Start Coding')
					])),
				A2(
				$elm$html$Html$h2,
				_List_fromArray(
					[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my5]),
				_List_fromArray(
					[
						$elm$html$Html$text('Executives')
					])),
				A2(
				$rundis$elm_bootstrap$Bootstrap$Grid$row,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$rundis$elm_bootstrap$Bootstrap$Grid$col,
						_List_Nil,
						_List_fromArray(
							[
								$rundis$elm_bootstrap$Bootstrap$Card$view(
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$block,
									_List_Nil,
									_List_fromArray(
										[
											A2(
											$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
											_List_Nil,
											_List_fromArray(
												[
													$elm$html$Html$text('McMaster Start Coding is a student club of the McMaster Students Union.\n                      MSC was founded by mentors who recognized that coding outreach at McMaster could grow if students had an official organization.\n                        MSC currently recruits and trains mentors (undergraduate students who can become members of the club, graduate students who can be affiliates of the club, and junior mentors),\n                        creates educational videos, posters and social media campaigns.')
												]))
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil)))
							]))
					]))
			]),
		A2(
			$elm$core$List$map,
			$author$project$Execs$mkMember,
			_List_fromArray(
				[
					_Utils_Tuple3(
					_Utils_Tuple2('Yumna Irfan', 'img/YumnaIrfan.jpg'),
					'President',
					'iBio, 4th year'),
					_Utils_Tuple3(
					_Utils_Tuple2('Chris Schankula', 'img/ChrisSchankula.jpg'),
					'VP Software Architecture',
					'Software Engineering & Society, 4th year'),
					_Utils_Tuple3(
					_Utils_Tuple2('Ankit Kapoor', 'img/AnkitKapoor.jpg'),
					'VP External',
					'Computer Science, 3rd year'),
					_Utils_Tuple3(
					_Utils_Tuple2('Pesara Amarasekera', 'img/PesaraAmarasekera.jpg'),
					'Assistant VP Software Archtitecture',
					'Software Engineering, 3rd year'),
					_Utils_Tuple3(
					_Utils_Tuple2('Mikha Muliadi', 'img/Mikha.jpg'),
					'Secretary',
					'Electrical Engineering & Society, 4th year'),
					_Utils_Tuple3(
					_Utils_Tuple2('Steven Gonder', 'img/mentorSteven.jpg'),
					'Marketing Strategist',
					'Computer Science, 3rd year'),
					_Utils_Tuple3(
					_Utils_Tuple2('Gurleen Dulai', 'img/mentorGurleen.jpg'),
					'Media and Design',
					'iBioMed, 3rd year')
				])));
};
var $rundis$elm_bootstrap$Bootstrap$Card$Block$title = F3(
	function (elemFn, attributes, children) {
		return A2(
			elemFn,
			A2(
				$elm$core$List$cons,
				$elm$html$Html$Attributes$class('card-title'),
				attributes),
			children);
	});
var $rundis$elm_bootstrap$Bootstrap$Card$Block$titleH4 = $rundis$elm_bootstrap$Bootstrap$Card$Block$title($elm$html$Html$h4);
var $author$project$FAQ$page = function (model) {
	return _List_fromArray(
		[
			A2(
			$elm$html$Html$h1,
			_List_fromArray(
				[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my5]),
			_List_fromArray(
				[
					$elm$html$Html$text('FAQ')
				])),
			$rundis$elm_bootstrap$Bootstrap$Card$view(
			A3(
				$rundis$elm_bootstrap$Bootstrap$Card$block,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$rundis$elm_bootstrap$Bootstrap$Card$Block$titleH4,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Who is McMaster Start Coding?')
							])),
						A2(
						$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('A student club at McMaster University.')
							]))
					]),
				$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))),
			$rundis$elm_bootstrap$Bootstrap$Card$view(
			A3(
				$rundis$elm_bootstrap$Bootstrap$Card$block,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$rundis$elm_bootstrap$Bootstrap$Card$Block$titleH4,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Who is Software: Tool for Change?')
							])),
						A2(
						$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('An activist research project at McMaster University led by Christopher Anand.')
							])),
						A2(
						$rundis$elm_bootstrap$Bootstrap$Card$Block$link,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$target('_blank'),
								$elm$html$Html$Attributes$href('http://www.cas.mcmaster.ca/~anand')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('More about Dr. Anand')
							]))
					]),
				$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))),
			$rundis$elm_bootstrap$Bootstrap$Card$view(
			A3(
				$rundis$elm_bootstrap$Bootstrap$Card$block,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$rundis$elm_bootstrap$Bootstrap$Card$Block$titleH4,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Will you come to our school?')
							])),
						A2(
						$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Pre-pandemic we visited schools near Hamilton, as far away as Waterloo and Brampton. Now that we vist schools virtually, we have travelled as far as Hyderabad, India.')
							]))
					]),
				$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))),
			$rundis$elm_bootstrap$Bootstrap$Card$view(
			A3(
				$rundis$elm_bootstrap$Bootstrap$Card$block,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$rundis$elm_bootstrap$Bootstrap$Card$Block$titleH4,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Do you offer summer camps?')
							])),
						A2(
						$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Yes, see the Camps tab.')
							]))
					]),
				$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))),
			$rundis$elm_bootstrap$Bootstrap$Card$view(
			A3(
				$rundis$elm_bootstrap$Bootstrap$Card$block,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$rundis$elm_bootstrap$Bootstrap$Card$Block$titleH4,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('What age groups do you teach?')
							])),
						A2(
						$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('We teach programming to grades 4-8 with our web interface, and grades 2 and 3 with our iPad app ElmJr, and Image 2 Bits. We also train high school students to be mentors, and we teach grades 5-PhD about Design Thinking.')
							]))
					]),
				$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))),
			$rundis$elm_bootstrap$Bootstrap$Card$view(
			A3(
				$rundis$elm_bootstrap$Bootstrap$Card$block,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$rundis$elm_bootstrap$Bootstrap$Card$Block$titleH4,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('How much do lessons cost?')
							])),
						A2(
						$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Our first four lessons are free, as are the YouTube videos of most of our lessons.  Live lessons after lesson four are $10 per lesson, but each camp includes a free lesson.')
							]))
					]),
				$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))),
			$rundis$elm_bootstrap$Bootstrap$Card$view(
			A3(
				$rundis$elm_bootstrap$Bootstrap$Card$block,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$rundis$elm_bootstrap$Bootstrap$Card$Block$titleH4,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('I\'m a parent, how can I get my child enrolled?')
							])),
						A2(
						$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Let your child\'s teachers know about free classroom visits, and see the Camps tab for information about weekend and summer camps.')
							]))
					]),
				$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))),
			$rundis$elm_bootstrap$Bootstrap$Card$view(
			A3(
				$rundis$elm_bootstrap$Bootstrap$Card$block,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$rundis$elm_bootstrap$Bootstrap$Card$Block$titleH4,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('How can I sign my class up?')
							])),
						A2(
						$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Use the sign-up button on the home page.')
							]))
					]),
				$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))),
			$rundis$elm_bootstrap$Bootstrap$Card$view(
			A3(
				$rundis$elm_bootstrap$Bootstrap$Card$block,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$rundis$elm_bootstrap$Bootstrap$Card$Block$titleH4,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('What is Elm?')
							])),
						A2(
						$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Elm is a pure functional language used for web programming, for which we created a graphics library.')
							]))
					]),
				$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))),
			$rundis$elm_bootstrap$Bootstrap$Card$view(
			A3(
				$rundis$elm_bootstrap$Bootstrap$Card$block,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$rundis$elm_bootstrap$Bootstrap$Card$Block$titleH4,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('What is a pure functional language?')
							])),
						A2(
						$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('It is a programming language in which functions and variables work the same way they do in math.')
							]))
					]),
				$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))),
			$rundis$elm_bootstrap$Bootstrap$Card$view(
			A3(
				$rundis$elm_bootstrap$Bootstrap$Card$block,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$rundis$elm_bootstrap$Bootstrap$Card$Block$titleH4,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('Why don\'t you use other languages?')
							])),
						A2(
						$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text('We found children learn much faster with Elm and can do more with less typing.')
							])),
						A2(
						$rundis$elm_bootstrap$Bootstrap$Card$Block$link,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$target('_blank'),
								$elm$html$Html$Attributes$href('http://eptcs.web.cse.unsw.edu.au/paper.cgi?TFPIE2017.2')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('We developed a theory to explain this, which we call Algebraic Thinking.')
							]))
					]),
				$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs(
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(52,58,64)')
						]))
				]),
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				]))
		]);
};
var $elm$html$Html$embed = _VirtualDom_node('embed');
var $author$project$Hackathon$oneLink = function (_v0) {
	var name = _v0.a;
	var url = _v0.b;
	return A2(
		$rundis$elm_bootstrap$Bootstrap$Grid$row,
		_List_fromArray(
			[
				$rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs(
				_List_fromArray(
					[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt2]))
			]),
		_List_fromArray(
			[
				A2(
				$rundis$elm_bootstrap$Bootstrap$Grid$col,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						$rundis$elm_bootstrap$Bootstrap$Button$linkButton,
						_List_fromArray(
							[
								$rundis$elm_bootstrap$Bootstrap$Button$primary,
								$rundis$elm_bootstrap$Bootstrap$Button$small,
								$rundis$elm_bootstrap$Bootstrap$Button$attrs(
								_List_fromArray(
									[
										$elm$html$Html$Attributes$target('_blank'),
										$elm$html$Html$Attributes$href(url),
										A2($elm$html$Html$Attributes$style, 'width', '100%')
									]))
							]),
						_List_fromArray(
							[
								$elm$html$Html$text(name)
							]))
					]))
			]));
};
var $author$project$Hackathon$links2games = F3(
	function (title, imgurl, links) {
		return A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$container,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$row,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									$elm$html$Html$h2,
									_List_fromArray(
										[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt4]),
									_List_fromArray(
										[
											$elm$html$Html$text(title)
										]))
								]))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$row,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md6]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$embed,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'width', '100%'),
											$elm$html$Html$Attributes$src(imgurl)
										]),
									_List_Nil)
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md3, $rundis$elm_bootstrap$Bootstrap$Grid$Col$middleMd]),
							A2($elm$core$List$map, $author$project$Hackathon$oneLink, links))
						]))
				]));
	});
var $author$project$Hackathon$badgeHackathon = A2(
	$rundis$elm_bootstrap$Bootstrap$Grid$row,
	_List_Nil,
	_List_fromArray(
		[
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$col,
			_List_Nil,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Card$view(
					A3(
						$rundis$elm_bootstrap$Bootstrap$Card$block,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text('Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enimur.')
									])),
								$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
								A3(
									$author$project$Hackathon$links2games,
									'Comics 2019',
									'img/CarnivorousPlants.png',
									_List_fromArray(
										[
											_Utils_Tuple2('Carnivorous Plants', 'https://macoutreach.rocks/CarniverousPlants.html'),
											_Utils_Tuple2('How Long Can Worms Grow', 'https://macoutreach.rocks/Worms.html')
										])))
							]),
						A3(
							$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
									A2($elm$html$Html$Attributes$style, 'font-weight', '700')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Badge Hackathon')
								]),
							$rundis$elm_bootstrap$Bootstrap$Card$config(
								_List_fromArray(
									[$rundis$elm_bootstrap$Bootstrap$Card$outlineSecondary])))))
				]))
		]));
var $author$project$Hackathon$postcardHackathon = A2(
	$rundis$elm_bootstrap$Bootstrap$Grid$row,
	_List_Nil,
	_List_fromArray(
		[
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$col,
			_List_Nil,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Card$view(
					A3(
						$rundis$elm_bootstrap$Bootstrap$Card$block,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text('')
									]))
							]),
						A3(
							$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
									A2($elm$html$Html$Attributes$style, 'font-weight', '700')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Postcard Hackathon')
								]),
							$rundis$elm_bootstrap$Bootstrap$Card$config(
								_List_fromArray(
									[$rundis$elm_bootstrap$Bootstrap$Card$outlineSecondary])))))
				]))
		]));
var $author$project$Hackathon$page = function (model) {
	return _List_fromArray(
		[
			A2(
			$elm$html$Html$h1,
			_List_fromArray(
				[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my5]),
			_List_fromArray(
				[
					$elm$html$Html$text('Hackathon')
				])),
			$author$project$Hackathon$badgeHackathon,
			$author$project$Hackathon$postcardHackathon
		]);
};
var $rundis$elm_bootstrap$Bootstrap$Text$alignSm = function (dir) {
	return {c2: dir, b9: 1};
};
var $rundis$elm_bootstrap$Bootstrap$Text$alignSmCenter = $rundis$elm_bootstrap$Bootstrap$Text$alignSm(1);
var $elm$time$Time$posixToMillis = function (_v0) {
	var millis = _v0;
	return millis;
};
var $author$project$Home$bannerGif = function (t) {
	var _v0 = A2(
		$elm$core$Basics$modBy,
		8,
		($elm$time$Time$posixToMillis(t) / 10000) | 0);
	switch (_v0) {
		case 0:
			return 'img/GIF-WobbleCoolDemo.gif';
		case 1:
			return 'img/PeelHospital2021.gif';
		case 2:
			return 'img/GIF-CarCoolDemo.gif';
		case 3:
			return 'img/Word1.jpeg';
		case 4:
			return 'img/GIF-ClockCoolDemo.gif';
		case 5:
			return 'img/PeelThanks2021.gif';
		case 6:
			return 'img/GIF-GooglyEyesCoolDemo.gif';
		default:
			return 'img/PeelNY2021.gif';
	}
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Row$centerXs = A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$rowHAlign, 0, 1);
var $elm$html$Html$h5 = _VirtualDom_node('h5');
var $elm$html$Html$i = _VirtualDom_node('i');
var $rundis$elm_bootstrap$Bootstrap$Internal$Button$Block = {$: 2};
var $rundis$elm_bootstrap$Bootstrap$Button$block = $rundis$elm_bootstrap$Bootstrap$Internal$Button$Block;
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mb2 = $elm$html$Html$Attributes$class('mb-2');
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$pb5Lg = $elm$html$Html$Attributes$class('pb-lg-5');
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$px3 = $elm$html$Html$Attributes$class('px-3');
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$py1 = $elm$html$Html$Attributes$class('py-1');
var $rundis$elm_bootstrap$Bootstrap$Utilities$Size$w25 = $elm$html$Html$Attributes$class('w-25');
var $rundis$elm_bootstrap$Bootstrap$Utilities$Size$w50 = $elm$html$Html$Attributes$class('w-50');
var $author$project$Home$leftBlock = A2(
	$rundis$elm_bootstrap$Bootstrap$Grid$container,
	_List_Nil,
	_List_fromArray(
		[
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs(
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$py1]))
				]),
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h4,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mb2]),
							_List_fromArray(
								[
									$elm$html$Html$text('Parents:')
								])),
							$elm$html$Html$text('Learn about our camps:')
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs(
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$py1]))
				]),
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$rundis$elm_bootstrap$Bootstrap$Button$linkButton,
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Button$attrs(
									_List_fromArray(
										[
											$rundis$elm_bootstrap$Bootstrap$Utilities$Size$w50,
											A2($elm$html$Html$Attributes$style, 'float', 'center'),
											$elm$html$Html$Attributes$href('mailto:mcmasteroutreach@gmail.com'),
											A2($elm$html$Html$Attributes$style, 'color', 'white'),
											A2($elm$html$Html$Attributes$style, 'background-color', 'maroon'),
											A2($elm$html$Html$Attributes$style, 'border-radius', '12px')
										])),
									$rundis$elm_bootstrap$Bootstrap$Button$block
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Get on waiting list!')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs(
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$pb5Lg]))
				]),
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$rundis$elm_bootstrap$Bootstrap$Button$linkButton,
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Button$attrs(
									_List_fromArray(
										[
											$rundis$elm_bootstrap$Bootstrap$Utilities$Size$w25,
											A2($elm$html$Html$Attributes$style, 'float', 'center'),
											$elm$html$Html$Attributes$href('#lessons'),
											A2($elm$html$Html$Attributes$style, 'color', 'maroon'),
											A2($elm$html$Html$Attributes$style, 'border-color', 'maroon'),
											A2($elm$html$Html$Attributes$style, 'border-radius', '12px'),
											$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$px3
										])),
									$rundis$elm_bootstrap$Bootstrap$Button$small
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Lessons Info')
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Button$linkButton,
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Button$attrs(
									_List_fromArray(
										[
											$rundis$elm_bootstrap$Bootstrap$Utilities$Size$w25,
											A2($elm$html$Html$Attributes$style, 'float', 'center'),
											$elm$html$Html$Attributes$href('#camps'),
											A2($elm$html$Html$Attributes$style, 'color', 'maroon'),
											A2($elm$html$Html$Attributes$style, 'border-color', 'maroon'),
											A2($elm$html$Html$Attributes$style, 'border-radius', '12px'),
											$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$px3
										])),
									$rundis$elm_bootstrap$Bootstrap$Button$small
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Camps Info')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs(
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$py1]))
				]),
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h4,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mb2]),
							_List_fromArray(
								[
									$elm$html$Html$text('Teachers:')
								])),
							$elm$html$Html$text('Learn about class visits:')
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs(
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$py1]))
				]),
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$rundis$elm_bootstrap$Bootstrap$Button$linkButton,
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Button$attrs(
									_List_fromArray(
										[
											$rundis$elm_bootstrap$Bootstrap$Utilities$Size$w50,
											A2($elm$html$Html$Attributes$style, 'float', 'center'),
											A2($elm$html$Html$Attributes$style, 'padding', '5px'),
											$elm$html$Html$Attributes$target('_blank'),
											$elm$html$Html$Attributes$href('https://forms.gle/jacBCZS2vrSFwc9v8'),
											A2($elm$html$Html$Attributes$style, 'color', 'white'),
											A2($elm$html$Html$Attributes$style, 'background-color', 'maroon'),
											A2($elm$html$Html$Attributes$style, 'border-radius', '12px')
										])),
									$rundis$elm_bootstrap$Bootstrap$Button$block
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Free class visits')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs(
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$py1]))
				]),
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$rundis$elm_bootstrap$Bootstrap$Button$linkButton,
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Button$attrs(
									_List_fromArray(
										[
											$rundis$elm_bootstrap$Bootstrap$Utilities$Size$w50,
											A2($elm$html$Html$Attributes$style, 'float', 'center'),
											A2($elm$html$Html$Attributes$style, 'padding', '5px'),
											$elm$html$Html$Attributes$href('#classvisits'),
											A2($elm$html$Html$Attributes$style, 'color', 'maroon'),
											A2($elm$html$Html$Attributes$style, 'border-color', 'maroon'),
											A2($elm$html$Html$Attributes$style, 'border-radius', '12px')
										])),
									$rundis$elm_bootstrap$Bootstrap$Button$small
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Class Visit Info')
								]))
						]))
				]))
		]));
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Col4 = 4;
var $rundis$elm_bootstrap$Bootstrap$Grid$Col$md4 = A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$width, 2, 4);
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$RowVAlign = function (a) {
	return {$: 0, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$rowVAlign = F2(
	function (size, align) {
		return $rundis$elm_bootstrap$Bootstrap$Grid$Internal$RowVAlign(
			A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$VAlign, size, align));
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Row$middleMd = A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$rowVAlign, 2, 1);
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$pt4Lg = $elm$html$Html$Attributes$class('pt-lg-4');
var $elm$html$Html$span = _VirtualDom_node('span');
var $author$project$Home$page = function (model) {
	return _List_fromArray(
		[
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$containerFluid,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$row,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs(
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('ml0 mr0 w100'),
									$elm$html$Html$Attributes$class('row justify-content-center')
								]))
						]),
					_List_fromArray(
						[
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									$elm$html$Html$h4,
									_List_fromArray(
										[
											$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mb2,
											$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt5,
											A2($elm$html$Html$Attributes$style, 'line-height', '1.25'),
											A2($elm$html$Html$Attributes$style, 'font-size', '40px'),
											A2($elm$html$Html$Attributes$style, 'text-align', 'center')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Where kids '),
											A2(
											$elm$html$Html$i,
											_List_fromArray(
												[
													A2($elm$html$Html$Attributes$style, 'font-size', '45px')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('create')
												])),
											$elm$html$Html$text(' '),
											A2(
											$elm$html$Html$span,
											_List_fromArray(
												[
													A2($elm$html$Html$Attributes$style, 'display', 'inline-block')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text(' with code')
												]))
										]))
								]))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$row,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Grid$Row$centerLg,
							$rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs(
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('ml0 mr0 w100')
								]))
						]),
					_List_fromArray(
						[
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Grid$Col$attrs(
									_List_fromArray(
										[
											$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$p0Lg,
											$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$pt4Lg,
											$elm$html$Html$Attributes$class('col align-self-center')
										]))
								]),
							_List_fromArray(
								[$author$project$Home$leftBlock])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Card$view(
									A3(
										$rundis$elm_bootstrap$Bootstrap$Card$block,
										_List_Nil,
										_List_fromArray(
											[
												$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
												A2(
													$elm$html$Html$img,
													_List_fromArray(
														[
															A2($elm$html$Html$Attributes$style, 'width', '100%'),
															$elm$html$Html$Attributes$src(
															$author$project$Home$bannerGif(model.b))
														]),
													_List_Nil))
											]),
										$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil)))
								]))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$row,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Grid$Row$centerXs,
							$rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs(_List_Nil)
						]),
					_List_fromArray(
						[
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md4]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$h3,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'rgb(121,20,60)'),
											A2($elm$html$Html$Attributes$style, 'text-align', 'center')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('McMaster Start Coding makes math fun.')
										]))
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md4]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$h3,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'rgb(121,20,60)'),
											A2($elm$html$Html$Attributes$style, 'text-align', 'center')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('We have taught 26,131 new coders from over 1017 classes!')
										]))
								]))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$row,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									$elm$html$Html$h1,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text(' ')
										]))
								]))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$row,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Row$middleMd]),
					_List_fromArray(
						[
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Grid$Col$textAlign($rundis$elm_bootstrap$Bootstrap$Text$alignXsCenter)
								]),
							_List_fromArray(
								[
									A2(
									$rundis$elm_bootstrap$Bootstrap$Grid$row,
									_List_Nil,
									_List_fromArray(
										[
											A2(
											$rundis$elm_bootstrap$Bootstrap$Grid$col,
											_List_Nil,
											_List_fromArray(
												[
													A2(
													$elm$html$Html$h2,
													_List_fromArray(
														[
															A2($elm$html$Html$Attributes$style, 'text-align', 'center')
														]),
													_List_fromArray(
														[
															$elm$html$Html$text('Thanks for your support:')
														]))
												]))
										])),
									A2(
									$rundis$elm_bootstrap$Bootstrap$Grid$row,
									_List_fromArray(
										[$rundis$elm_bootstrap$Bootstrap$Grid$Row$middleMd]),
									_List_fromArray(
										[
											A2(
											$rundis$elm_bootstrap$Bootstrap$Grid$col,
											_List_fromArray(
												[
													$rundis$elm_bootstrap$Bootstrap$Grid$Col$textAlign($rundis$elm_bootstrap$Bootstrap$Text$alignXsCenter)
												]),
											_List_fromArray(
												[
													A2(
													$elm$html$Html$img,
													_List_fromArray(
														[
															A2($elm$html$Html$Attributes$style, 'height', '80px'),
															$elm$html$Html$Attributes$src('img/nserclogo.jpg')
														]),
													_List_Nil)
												])),
											A2(
											$rundis$elm_bootstrap$Bootstrap$Grid$col,
											_List_fromArray(
												[
													$rundis$elm_bootstrap$Bootstrap$Grid$Col$textAlign($rundis$elm_bootstrap$Bootstrap$Text$alignXsCenter)
												]),
											_List_fromArray(
												[
													A2(
													$elm$html$Html$a,
													_List_fromArray(
														[
															$elm$html$Html$Attributes$target('_blank'),
															$elm$html$Html$Attributes$href('https://www.eng.mcmaster.ca/')
														]),
													_List_fromArray(
														[
															A2(
															$elm$html$Html$img,
															_List_fromArray(
																[
																	A2($elm$html$Html$Attributes$style, 'height', '100px'),
																	$elm$html$Html$Attributes$src('img/mcm-eng.png')
																]),
															_List_Nil)
														]))
												])),
											A2(
											$rundis$elm_bootstrap$Bootstrap$Grid$col,
											_List_fromArray(
												[
													$rundis$elm_bootstrap$Bootstrap$Grid$Col$textAlign($rundis$elm_bootstrap$Bootstrap$Text$alignXsCenter)
												]),
											_List_fromArray(
												[
													A2(
													$elm$html$Html$a,
													_List_fromArray(
														[
															$elm$html$Html$Attributes$target('_blank'),
															$elm$html$Html$Attributes$href('http://www.fields.utoronto.ca')
														]),
													_List_fromArray(
														[
															A2(
															$elm$html$Html$img,
															_List_fromArray(
																[
																	A2($elm$html$Html$Attributes$style, 'height', '100px'),
																	$elm$html$Html$Attributes$src('img/Fields_Logo_Medium.jpg')
																]),
															_List_Nil)
														]))
												]))
										]))
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Grid$Col$textAlign($rundis$elm_bootstrap$Bootstrap$Text$alignXsCenter)
								]),
							_List_fromArray(
								[
									A2(
									$rundis$elm_bootstrap$Bootstrap$Grid$row,
									_List_Nil,
									_List_fromArray(
										[
											A2(
											$rundis$elm_bootstrap$Bootstrap$Grid$col,
											_List_Nil,
											_List_fromArray(
												[
													A2(
													$elm$html$Html$h2,
													_List_fromArray(
														[
															A2($elm$html$Html$Attributes$style, 'text-align', 'center')
														]),
													_List_fromArray(
														[
															$elm$html$Html$text('Also check out:')
														]))
												]))
										])),
									A2(
									$rundis$elm_bootstrap$Bootstrap$Grid$row,
									_List_fromArray(
										[$rundis$elm_bootstrap$Bootstrap$Grid$Row$middleMd]),
									_List_fromArray(
										[
											A2(
											$rundis$elm_bootstrap$Bootstrap$Grid$col,
											_List_fromArray(
												[
													$rundis$elm_bootstrap$Bootstrap$Grid$Col$textAlign($rundis$elm_bootstrap$Bootstrap$Text$alignXsCenter)
												]),
											_List_fromArray(
												[
													A2(
													$elm$html$Html$a,
													_List_fromArray(
														[
															$elm$html$Html$Attributes$target('_blank'),
															$elm$html$Html$Attributes$href('https://cariboutests.com/')
														]),
													_List_fromArray(
														[
															A2(
															$elm$html$Html$img,
															_List_fromArray(
																[
																	A2($elm$html$Html$Attributes$style, 'height', '100px'),
																	$elm$html$Html$Attributes$src('img/CaribouContestLogo.png')
																]),
															_List_Nil)
														]))
												])),
											A2(
											$rundis$elm_bootstrap$Bootstrap$Grid$col,
											_List_fromArray(
												[
													$rundis$elm_bootstrap$Bootstrap$Grid$Col$textAlign($rundis$elm_bootstrap$Bootstrap$Text$alignXsCenter)
												]),
											_List_fromArray(
												[
													A2(
													$elm$html$Html$a,
													_List_fromArray(
														[
															$elm$html$Html$Attributes$target('_blank'),
															$elm$html$Html$Attributes$href('http://www.sciod.ca/')
														]),
													_List_fromArray(
														[
															A2(
															$elm$html$Html$img,
															_List_fromArray(
																[
																	A2($elm$html$Html$Attributes$style, 'height', '50px'),
																	$elm$html$Html$Attributes$src('img/sciod.png')
																]),
															_List_Nil)
														]))
												])),
											A2(
											$rundis$elm_bootstrap$Bootstrap$Grid$col,
											_List_fromArray(
												[
													$rundis$elm_bootstrap$Bootstrap$Grid$Col$textAlign($rundis$elm_bootstrap$Bootstrap$Text$alignXsCenter)
												]),
											_List_fromArray(
												[
													A2(
													$elm$html$Html$a,
													_List_fromArray(
														[
															$elm$html$Html$Attributes$target('_blank'),
															$elm$html$Html$Attributes$href('http://www.scienceliteracy.ca/')
														]),
													_List_fromArray(
														[
															A2(
															$elm$html$Html$img,
															_List_fromArray(
																[
																	A2($elm$html$Html$Attributes$style, 'height', '100px'),
																	$elm$html$Html$Attributes$src('img/sciLitWeek.png')
																]),
															_List_Nil)
														]))
												]))
										]))
								]))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$row,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									$elm$html$Html$h1,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text(' ')
										]))
								]))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$row,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									$elm$html$Html$h1,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text(' ')
										]))
								]))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$row,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Grid$Col$textAlign($rundis$elm_bootstrap$Bootstrap$Text$alignSmCenter)
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$h5,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'font-weight', '600')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Interested? Contact us at ')
										])),
									A2(
									$elm$html$Html$a,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$href('mailto:mcmasteroutreach@gmail.com')
										]),
									_List_fromArray(
										[
											A2(
											$elm$html$Html$h5,
											_List_fromArray(
												[
													A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
													A2($elm$html$Html$Attributes$style, 'color', 'rgb(197,11,93)')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('mcmasteroutreach@gmail.com')
												]))
										]))
								]))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$row,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									$elm$html$Html$h1,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text(' ')
										]))
								]))
						]))
				]))
		]);
};
var $author$project$Jr$page = function (model) {
	return _List_fromArray(
		[
			A2(
			$elm$html$Html$h1,
			_List_fromArray(
				[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my5]),
			_List_fromArray(
				[
					$elm$html$Html$text('Junior Mentors')
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md6]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('If you are in grades 5 to 8 and have completed nine lessons or one camp, you can apply to be a junior mentor.  If you are in high school, you can also apply and we will send you information on completing lessons and shadowing university mentors.  You can earn volunteer hours for high school.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$link,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$href('https://forms.gle/FmRujz4MBzJ7rhF98')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Sign Up')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('McMaster Start Coding Signup')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md6]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '100%'),
									$elm$html$Html$Attributes$src('img/Volunteer.jpg')
								]),
							_List_Nil)
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h2,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$mt5]),
							_List_fromArray(
								[
									$elm$html$Html$text('Experiences from our Volunteers')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(' \"I started volunteering with McMaster Outreach in the Fall of 2017. Through this program, I have travelled to schools to work with students from diverse communities. I have learned that when individuals are given the attention they require, they have tremendous capacity to learn and grow! It has been a pleasure to partake and watch the transformation of young children grow through our programming.\"    - Joanne Thai ')
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(' \"This summer I was involved in a free summer camp we ran for grade 6-8 students. I was helping a grade 6 student with their code and they told me that, because of this camp, they wanted to pursue an eventual career in computer science. Moments like these are why I love Software: Tool for Change so much. If we can inspire even one student to pursue a STEM career, then that makes it all worth it.\"    - Christopher Schankula ')
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs(
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(52,58,64)')
						]))
				]),
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				]))
		]);
};
var $author$project$Lessons$defaultLesson = {
	j: _List_Nil,
	k: '',
	n: _Utils_Tuple2('', _List_Nil),
	q: '',
	B: '',
	s: _List_Nil,
	bB: '',
	h: _Utils_Tuple2('', ''),
	cO: '',
	u: _List_Nil,
	v: '',
	l: ''
};
var $author$project$Parameters$lessonName = function (idx) {
	switch (idx) {
		case 1:
			return 'Basic Drawing A';
		case 2:
			return 'Basic Drawing B';
		case 3:
			return 'Simple Animations';
		case 4:
			return 'Advanced Drawing';
		case 5:
			return 'Advanced Drawing Techniques';
		case 6:
			return 'Puppet Show';
		case 7:
			return 'Recursive Functions';
		case 8:
			return 'State Diagrams & Adventure Games';
		case 9:
			return 'Character Controls';
		case 12:
			return 'Bootstrap Web Grids & Containers';
		case 13:
			return 'Bootstrap Web Structure & Images';
		default:
			return 'Error:  Does not compute!';
	}
};
var $author$project$Lessons$elmLesson = function (tab) {
	switch (tab) {
		case 1:
			return _Utils_update(
				$author$project$Lessons$defaultLesson,
				{
					j: _List_fromArray(
						['Prior to learning Elm, there are a some tasks that need to be accomplished:', 'Ensure that you have signed up for the correct lesson (Lesson 1);', 'You will need the username and password that was provided after you’ve signed up; and,', 'A laptop, iPad or Chromebook will be necessary to access zoom and the macoutreach.rocks website.', 'Now, be excited and ready to learn!!']),
					k: 'In this lesson we will learn what functional programming is, along with what Elm is. We will learn about the macoutreach.rocks website as well as the design and importance of each section of the website. We will learn how to make basic shapes using the Shape Creator tool. We will learn about shapes and stencils as well as how to apply different transformations (move, rotate, make transparent, etc) to shapes. The last thing we\'ll be learning is the colour tool in the macoutreach.rocks website. These are the tools you will need to create images of your own!',
					s: _List_fromArray(
						['By the end of this lesson, you should know:', 'What functional programming is', 'How to use the macoutreach.rocks website', 'How to create a shape using the Shape Creator', 'How to apply transformations to shapes', 'How to change colours using the RGB flashlight']),
					bB: $author$project$Parameters$lessonName(tab),
					cO: 'L' + $elm$core$String$fromInt(tab),
					l: 'https://www.youtube.com/embed/8eMUJjORtaw'
				});
		case 2:
			return _Utils_update(
				$author$project$Lessons$defaultLesson,
				{
					j: _List_fromArray(
						['Prior to continuing, there are a some tasks that need to be accomplished:', '-Ensure that you have signed up for the correct lesson (Lesson 2);', '-It is important that you or your child are/is comfortable with the content taught in Lesson 1.']),
					k: 'During the lesson, you will learn about grouping and how to accurately name the groups. You will also be taught how to add transformations to a group and how to change the colour of a group. The last thing that will be taught is commenting and the importance of commenting in programming.',
					s: _List_fromArray(
						['By the end of this lesson, you should know:.', 'How to create a group.', 'How to correctly name a group.', 'How to apply transformation(s) to a group(s).', 'How to change the colour(s) of a group(s).', 'How to add comments to your code.']),
					bB: $author$project$Parameters$lessonName(tab),
					l: 'https://www.youtube.com/embed/mTfEcqR8mX8'
				});
		case 3:
			return _Utils_update(
				$author$project$Lessons$defaultLesson,
				{
					j: _List_fromArray(
						['Prior to learning animations, you should be able to draw basic shapes, use grouping to collect different shapes into one definition, and understand how to manipulate shapes. More specifically, you should be comfortable with using move, rotate, and scale functions on stencils.']),
					k: 'This builds upon our knowledge of basic 2D drawings by using mathematical properties to animate them. Most of the lesson material should be straight forward, with the exception of understanding trigonometric functions, which could present a challenge for students not yet in high school.',
					s: _List_fromArray(
						['Using model.time to animate shapes in elm.', 'Using mathematical functions to rotate shapes in elm.', 'Understand how to avoid moving shapes endlessly in one direction, via the use of trigonometric functions.', 'Changing speed/direction of animation.', 'Understand how to use rgb/hsl and animate colours using model.time.']),
					bB: $author$project$Parameters$lessonName(tab),
					l: 'https://www.youtube.com/embed/Wrkmj2sEYD8'
				});
		case 4:
			return _Utils_update(
				$author$project$Lessons$defaultLesson,
				{
					j: _List_fromArray(
						['It is expected that you have completed the first two lessons to understand and follow along during this lesson. Specifically being able to draw and move basic shapes to create pictures and creating groups so that you are able to move multiple shapes with only one function.']),
					k: 'You should expect to create one or more functions so that you are able to change features like colour or size of the picture/object in your group. You will be able to change the features in one step rather than changing the features of all the simple shapes.',
					s: _List_fromArray(
						['Create multiple functions in groups to change features of the picture.']),
					bB: $author$project$Parameters$lessonName(tab),
					l: 'https://www.youtube.com/embed/O-X2hMXhAAM'
				});
		case 5:
			return _Utils_update(
				$author$project$Lessons$defaultLesson,
				{
					j: _List_fromArray(
						['Prior to learning this lesson, you should have done basic shapes and animations and understand the basics of how time is used to make shapes move. More specifically, you should be comfortable with making shapes rotate and move with time, and make shapes move back and forth with sine and cosine. You should also be familiar with grouping and definitions.']),
					k: 'This lesson builds on both drawing and animation. For drawings, we’ll explore advanced ways of “clipping” or “cutting out” shapes using other shapes. This can be used to add patterns and intricate decorations to objects, without worrying about “drawing outside the lines”. Then, we’ll learn about how to do advanced animations, including two new ways of repeating an object’s movement and moving an object on a path. There is quite a bit of material in this lesson, but each example should be fairly straightforward and example code will be provided to make it easier to absorb. It is recommended, as always, that you modify the given code as much as possible to make your own animation, in order to learn more effectively.',
					s: _List_fromArray(
						['Using clipping to create intricate designs in Elm, such as a partial moon with craters and a striped t-shirt.', 'Calling new Elm repeat functions to animate in new ways.', 'How to make shapes grow and repeat using the repeat functions.', 'Using if else-if expressions to move shapes along pathways with multiple line segments.', 'Make your shapes move in a path, use clipping, and learn about our repeat function.']),
					bB: $author$project$Parameters$lessonName(tab),
					l: 'https://www.youtube.com/embed/dG7-aj6_iuA'
				});
		case 6:
			return _Utils_update(
				$author$project$Lessons$defaultLesson,
				{
					j: _List_fromArray(
						['Make sure that you are comfortable with the content covered in lessons 1 to 5.']),
					k: 'You will learn how to achieve 2.5D perspective in pictures and animations by converting shapes into layers.',
					s: _List_fromArray(
						['Understand how to implement 2.5D perspective into pictures and animations.']),
					bB: $author$project$Parameters$lessonName(tab),
					l: 'https://www.youtube.com/embed/gkZpTmbmVpw'
				});
		case 7:
			return _Utils_update(
				$author$project$Lessons$defaultLesson,
				{
					j: _List_fromArray(
						['Make sure you have attended Lesson 4 - Functions, and know how to use functions to create shapes.']),
					k: 'In this lesson, we will be teaching you how to use recursion in Elm. Students will learn how to use recursion to draw various patterns and animations, with mentors providing examples to help you get started.',
					s: _List_fromArray(
						['Use recursion to create more complex drawings and patterns.']),
					bB: $author$project$Parameters$lessonName(tab),
					l: 'https://www.youtube.com/embed/M_aNOZIwkN4'
				});
		case 8:
			return _Utils_update(
				$author$project$Lessons$defaultLesson,
				{
					j: _List_fromArray(
						['To prep for this lesson please ensure that you have attended all previous lessons. It is imperative that you are comfortable with the topics discussed in lessons 1-3.']),
					k: 'In this lesson we will be exploring the use of state diagrams in a live action game which hones in on problem solving and logical reasoning skills. Then using this basic understanding of state diagrams we will construct our own in order to develop an adventure game. Students will be encouraged to come up with their own setting and layout of an adventure game of their own. We will then use our skills developed from lessons 1-3 to create objects and characters to help our game come to life.',
					s: _List_fromArray(
						['Design your adventure game during Petri nets.', 'Understand the importance of ‘transitions’ and ‘states’ to create state diagrams using PalDraw.', 'Practice skills pertaining to communication and literacy to develop an original adventure game.']),
					bB: $author$project$Parameters$lessonName(tab),
					l: 'https://www.youtube.com/embed/8fH-0Nf8Tbw'
				});
		case 9:
			return _Utils_update(
				$author$project$Lessons$defaultLesson,
				{
					j: _List_fromArray(
						['Students should have a general understanding of how a message works in Elm and how we can change model properties in update function upon getting a message. Attending lesson 8 is highly recommended as lesson 9 is built on top of lesson 8 materials.']),
					k: 'Students will learn more in depth of the general structure of Elm: init, update, and view. Specifically, they will learn how to do keyboard interactions. On top of this, they will learn more advanced Elm techniques such as let-in statement, and pattern matching.',
					s: _List_fromArray(
						['Understand various ways on how you can achieve keyboard interactions.', 'Understand updating model more in depth.', 'Understand how “GetKeyState” works in message “Tick”.', 'Understand advanced elm techniques such as let-in statement and pattern matching.']),
					bB: $author$project$Parameters$lessonName(tab),
					l: 'https://www.youtube.com/embed/XnNCxB_dj68'
				});
		case 12:
			return _Utils_update(
				$author$project$Lessons$defaultLesson,
				{
					j: _List_fromArray(
						['To prepare for this lesson, students are highly recommended to have done lessons 1-4 as the syntax in this lesson can be challenging for beginners.']),
					k: 'Bootstrap is a powerful and simple tool for getting websites up and running quickly, and in this lesson we will teach you the basics of it. We will use Elm Bootstrap and HTML to create a working Bootstrap grid and container system. If time permits, participants will also have a chance to design a tic-tac-toe 3x3 grid.',
					s: _List_fromArray(
						['Learn how to use Bootstrap tools.', 'Learn basic web development concepts.', 'Learn how to apply responsive styles that work on a variety of devices.']),
					bB: $author$project$Parameters$lessonName(tab),
					l: 'Coming soon.'
				});
		default:
			return _Utils_update(
				$author$project$Lessons$defaultLesson,
				{
					j: _List_fromArray(
						['Complete Lesson 12 first.']),
					k: 'We will review the way Bootstrap uses Grids to structure pages usable from phones to large screens, and add to our knowlege of structuring pages and using html styles, headers and images.',
					s: _List_fromArray(
						['document structure', 'working on large and small devices', 'text styling', 'adding links', 'including images', 'accessing documentation']),
					bB: $author$project$Parameters$lessonName(tab),
					l: 'Coming soon.'
				});
	}
};
var $author$project$Lessons$isNotSelected = function (_v0) {
	var flag = _v0.a;
	var x = _v0.b;
	return flag ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(x);
};
var $author$project$Lessons$isSelected = function (_v0) {
	var flat = _v0.a;
	var x = _v0.b;
	return flat ? $elm$core$Maybe$Just(x) : $elm$core$Maybe$Nothing;
};
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my1 = $elm$html$Html$Attributes$class('my-1');
var $author$project$Lessons$mkLesson = F2(
	function (tab, info) {
		return A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$containerFluid,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my1,
							A2($elm$html$Html$Attributes$style, 'font-weight', '700')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('What to do before the lesson')
						])),
					A2(
					$elm$html$Html$ul,
					_List_Nil,
					A2(
						$elm$core$List$map,
						function (txt) {
							return A2(
								$elm$html$Html$li,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text(txt)
									]));
						},
						info.j)),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my1,
							A2($elm$html$Html$Attributes$style, 'font-weight', '700')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('What to expect during the lesson')
						])),
					$elm$html$Html$text(info.k),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my1,
							A2($elm$html$Html$Attributes$style, 'font-weight', '700')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('Learning objectives')
						])),
					A2(
					$elm$html$Html$ul,
					_List_Nil,
					A2(
						$elm$core$List$map,
						function (txt) {
							return A2(
								$elm$html$Html$li,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text(txt)
									]));
						},
						info.s)),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my1,
							A2($elm$html$Html$Attributes$style, 'font-weight', '700')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('Learn at home with YouTube video:')
						])),
					A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$target('_blank'),
							$elm$html$Html$Attributes$href(info.l)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '80px'),
									$elm$html$Html$Attributes$src('img/yt_logo_rgb_light.png')
								]),
							_List_Nil)
						]))
				]));
	});
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my2 = $elm$html$Html$Attributes$class('my-2');
var $author$project$Lessons$TabMsg = function (a) {
	return {$: 1, a: a};
};
var $author$project$Lessons$tabButton = F2(
	function (selectedTab, thisTab) {
		var f = selectedTab ? $author$project$Tabs$tippedPaint($MacCASOutreach$graphicsvg$GraphicSVG$lightGrey) : $author$project$Tabs$uprightPaint($MacCASOutreach$graphicsvg$GraphicSVG$lightGrey);
		return f(
			_Utils_Tuple3(
				$author$project$Lessons$TabMsg(thisTab),
				(thisTab < 5) ? $author$project$Parameters$freeClr : $author$project$Parameters$lessonClr(thisTab),
				_Utils_Tuple3(
					'Lesson',
					'',
					$elm$core$String$fromInt(thisTab))));
	});
var $author$project$Lessons$page = function (model) {
	var tabs = A2(
		$elm$core$List$indexedMap,
		F2(
			function (idx, tab) {
				return _Utils_Tuple2(
					_Utils_eq(model.a, tab),
					A2(
						$MacCASOutreach$graphicsvg$GraphicSVG$move,
						_Utils_Tuple2(((1 + idx) * $author$project$Lessons$tabWidth) - (0.5 * $author$project$Lessons$widgetWidth), -3),
						A2(
							$author$project$Lessons$tabButton,
							_Utils_eq(model.a, tab),
							tab)));
			}),
		$author$project$Parameters$allLessons);
	return _List_fromArray(
		[
			A2(
			$elm$html$Html$h3,
			_List_fromArray(
				[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my2]),
			_List_fromArray(
				[
					$elm$html$Html$text('Lessons')
				])),
			A2(
			$elm$html$Html$h4,
			_List_fromArray(
				[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my1]),
			_List_fromArray(
				[
					$elm$html$Html$text('Class Visits are Booked!  Sign up for waiting/mailing list for future events:')
				])),
			A2(
			$elm$html$Html$a,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$target('_blank'),
					$elm$html$Html$Attributes$href('https://forms.gle/EQdE8yReW1Vf4WxDA')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('https://forms.gle/EQdE8yReW1Vf4WxDA')
				])),
			A2(
			$elm$html$Html$h4,
			_List_fromArray(
				[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my1]),
			_List_fromArray(
				[
					$elm$html$Html$text('Parent/Guardian sign-up for evening and weekend lessons 1-4:')
				])),
			A2(
			$elm$html$Html$a,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$target('_blank'),
					$elm$html$Html$Attributes$href('https://forms.gle/vyJvmpZFPaVULyzt7')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('https://forms.gle/vyJvmpZFPaVULyzt7')
				])),
			A2(
			$elm$html$Html$h4,
			_List_fromArray(
				[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my1]),
			_List_fromArray(
				[
					$elm$html$Html$text('Parent/Guardian sign-up for evening and weekend lessons 5-13:')
				])),
			A2(
			$elm$html$Html$a,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$target('_blank'),
					$elm$html$Html$Attributes$href('https://www.eng.mcmaster.ca/forms/mcmaster-start-coding-lessons-2021')
				]),
			_List_fromArray(
				[
					$elm$html$Html$text('https://www.eng.mcmaster.ca/forms/mcmaster-start-coding-lessons-2021')
				])),
			A2(
			$elm$html$Html$div,
			_List_fromArray(
				[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my1]),
			_List_Nil),
			A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'flex-direction', 'row')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'width', '100%')
						]),
					_List_fromArray(
						[
							A2(
							$MacCASOutreach$graphicsvg$GraphicSVG$Widget$view,
							model.aO,
							_Utils_ap(
								A2($elm$core$List$filterMap, $author$project$Lessons$isNotSelected, tabs),
								A2($elm$core$List$filterMap, $author$project$Lessons$isSelected, tabs)))
						]))
				])),
			A2(
			$author$project$Lessons$mkLesson,
			model.a,
			$author$project$Lessons$elmLesson(model.a))
		]);
};
var $elm$html$Html$ol = _VirtualDom_node('ol');
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Col11 = 11;
var $rundis$elm_bootstrap$Bootstrap$Grid$Col$xs11 = A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$width, 0, 11);
var $rundis$elm_bootstrap$Bootstrap$Grid$Col$xs3 = A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$width, 0, 3);
var $author$project$NYH$page = function (model) {
	return _List_fromArray(
		[
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my5]),
							_List_fromArray(
								[
									$elm$html$Html$text('New Youth Hack')
								]))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$xs3]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('http://bmccentre.org/')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$img,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'width', '100px'),
											$elm$html$Html$Attributes$src('img/BMClogo.png')
										]),
									_List_Nil)
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('In 2018-2019 we partnered with Brampton Multicultural Community Centre (BMC) to apply Design Thinking (DT) to reimagining settlement services for refugee and immigrant youth in Canada.  One insight motivating DT is that design is a series of experiments in which we learn about our users. Iterative prototyping and user feedback are paramount. '),
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('http://bmccentre.org/wp-content/uploads/2018/08/NewYouthHack_Flyer2018.pdf')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('BMC recruited 30 New Youth, aged 15 to 20, speaking 10 languages.')
								]))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '500px'),
									$elm$html$Html$Attributes$src('img/DoubleDiamond.png')
								]),
							_List_Nil)
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$target('_blank'),
									$elm$html$Html$Attributes$href('https://github.com/CSchank/petri-app-land')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Petri App Land (GitHub)')
								]))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('But we also wanted to expose them to career pathways related to software design and development.  To do this we created a Model Driven Development framework called Petri App Land (PAL), leveraging our experience using State Diagrams to explain the implementation of interaction in Elm apps.  ')
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('After DT training for BMC staff, McMaster student volunteers and community mentors, we launched with a 2-day design-a-thon called NewYouthHack.  Twelve teams each settled on a problem, and made an initial presentation at the end of the first day.'),
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('https://twitter.com/BMC_and_MCS/status/1058722112813350912')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Videos.')
								]))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '500px'),
									$elm$html$Html$Attributes$src('img/NYH3.jpg')
								]),
							_List_Nil)
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$ol,
							_List_Nil,
							A2(
								$elm$core$List$map,
								function (txt) {
									return A2(
										$elm$html$Html$li,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text(txt)
											]));
								},
								_List_fromArray(
									['Technology learning for academic success', 'Information on courses - career pathways', 'Connections, mentorship at institutions', 'An app to make and submit resumes', 'Employer interaction, interviews, networking and hiring', 'Social interaction, services and events', 'Information on transit, maps and attractions', 'Vlog to help with school system and settlement', 'Multi-lingual resource to find friends and resources', 'Find volunteer opportunities, activities and interests', 'Community-specific multi-lingual interaction', 'Build connections and get information on services'])))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$target('_blank'),
									$elm$html$Html$Attributes$href('https://macoutreach.rocks/MathPathways.html')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$img,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'width', '200px'),
											$elm$html$Html$Attributes$src('img/MathPathways.png')
										]),
									_List_Nil)
								]))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('One of the ideas involved explaining course pathways to NewYouth and their parents who were not used to having choices in secondary education.  During the hackathon, we created a prototype.  (Click to see live version.) ')
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Most of the ideas generated at the design-a-thon involved mentorship and networking, requiring significant server-side logic.  In parallel with this development, we ran coding workshops for the NewYouth, including opportunities for them to create enhancements for our AvatarCreator.  Following the integration of these development efforts, we held focus groups, and small-group feedback sessions over several months.')
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('https://twitter.com/BMC_and_MCS/status/1055653877612249088')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Training and Coding')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h5,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '500px'),
									$elm$html$Html$Attributes$src('img/NYH1.jpg')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '500px'),
									$elm$html$Html$Attributes$src('img/NYH.jpg')
								]),
							_List_Nil)
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$p,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('To quote the independent evaluator\'s findings that the NewYouthHack Project achieved its objectives in both developing ideas and empowering youth:')
								])),
							A2(
							$elm$html$Html$ol,
							_List_Nil,
							A2(
								$elm$core$List$map,
								function (txt) {
									return A2(
										$elm$html$Html$li,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text(txt)
											]));
								},
								_List_fromArray(
									['Successfully developed an app that aims to assist newcomer youth in multiple areas such as careers, education pathways, volunteer engagement and access to programs and services.', 'The successful launching and implementing of the app now depends on: 1) securing additional funding to further engage in consultation with relevant stakeholders, 2) piloting the app to fine-tune, 3) implementing locally in Peel and 4) scaling it up by implementing the app in Ontario and Canada.', 'Collaboration and partnership with multiple stakeholders in the community contributed to the successful implementation of the NewYouthHack project that brought sponsorships, stakeholder participation and feedback.', 'The initiative helped engage newcomer youth from diverse background that spoke 10 different languages and included disabled and LGBTQ persons.', 'An environment of trust and safety was created by BMC to address the concerns of parents of the newcomer youth ensuring their full participation.', 'The project provided a platform for newcomer youth to 1) develop a sense of belonging to their new home in Canada, 2) know that they are not alone; 3) open up to share their opinion freely on issues facing newcomer youth at and subsequent to the hackathon; 4) learn, identify, analyse and find solutions to the problems in their day to day life; and 5) expand their social networks.'])))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h4,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('And we had fun doing it!!!')
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h4,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2($rundis$elm_bootstrap$Bootstrap$Grid$col, _List_Nil, _List_Nil),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$xs11]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('https://www.facebook.com/pg/NewYouthHack/posts/')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Celebration Video')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2($rundis$elm_bootstrap$Bootstrap$Grid$col, _List_Nil, _List_Nil),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$xs11]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('https://twitter.com/BMC_and_MCS/status/1058729050917797888')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Fun moments')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h2,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				]))
		]);
};
var $author$project$Research$page = function (model) {
	return _List_fromArray(
		[
			A2(
			$elm$html$Html$h1,
			_List_fromArray(
				[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my5]),
			_List_fromArray(
				[
					$elm$html$Html$text('🔬 Research')
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$containerFluid,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$row,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									$elm$html$Html$h1,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('')
										]))
								]))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$row,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md4]),
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Card$view(
									A3(
										$rundis$elm_bootstrap$Bootstrap$Card$block,
										_List_Nil,
										_List_fromArray(
											[
												A2(
												$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
												_List_Nil,
												_List_fromArray(
													[
														$elm$html$Html$text('Adventures in Petri App Land: Design Thinking and Multi-User Applications PAL Draw')
													])),
												A2(
												$rundis$elm_bootstrap$Bootstrap$Card$Block$link,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$target('_blank'),
														$elm$html$Html$Attributes$href('https://www.researchgate.net/publication/337144709_Adventures_in_Petri_App_Land_Design_Thinking_and_Multi-User_Applications_PAL_Draw')
													]),
												_List_fromArray(
													[
														$elm$html$Html$text('View poster.')
													]))
											]),
										A3(
											$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
											_List_fromArray(
												[
													A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
													A2($elm$html$Html$Attributes$style, 'font-weight', '700')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('CAN-CWiC Poster')
												]),
											$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md4]),
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Card$view(
									A3(
										$rundis$elm_bootstrap$Bootstrap$Card$block,
										_List_Nil,
										_List_fromArray(
											[
												A2(
												$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
												_List_Nil,
												_List_fromArray(
													[
														$elm$html$Html$text('Modelling Distributed Computation with Petri Nets so Children Can Program Multiplayer Universes')
													])),
												A2(
												$rundis$elm_bootstrap$Bootstrap$Card$Block$link,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$target('_blank'),
														$elm$html$Html$Attributes$href('https://wiki.tfpie.science.ru.nl/11:30_-_12:00')
													]),
												_List_fromArray(
													[
														$elm$html$Html$text('View slides.')
													]))
											]),
										A3(
											$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
											_List_fromArray(
												[
													A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
													A2($elm$html$Html$Attributes$style, 'font-weight', '700')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('TFPIE 2019 Slides')
												]),
											$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md4]),
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Card$view(
									A3(
										$rundis$elm_bootstrap$Bootstrap$Card$block,
										_List_Nil,
										_List_fromArray(
											[
												A2(
												$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
												_List_Nil,
												_List_fromArray(
													[
														$elm$html$Html$text('Animated Comics: Building Literacy through Teamwork')
													])),
												A2(
												$rundis$elm_bootstrap$Bootstrap$Card$Block$link,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$target('_blank'),
														$elm$html$Html$Attributes$href('https://www.researchgate.net/publication/334811735_Animated_Comics_Building_Literacy_through_Teamwork')
													]),
												_List_fromArray(
													[
														$elm$html$Html$text('View poster.')
													]))
											]),
										A3(
											$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
											_List_fromArray(
												[
													A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
													A2($elm$html$Html$Attributes$style, 'font-weight', '700')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('ICS 2019 - Comics Poster')
												]),
											$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md4]),
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Card$view(
									A3(
										$rundis$elm_bootstrap$Bootstrap$Card$block,
										_List_Nil,
										_List_fromArray(
											[
												A2(
												$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
												_List_Nil,
												_List_fromArray(
													[
														$elm$html$Html$text('Petri App Land: A Model-Driven Framework for Functional Client-Server Applications Petri App Land: A Model-Driven Framework for Functional Client-Server Applications')
													])),
												A2(
												$rundis$elm_bootstrap$Bootstrap$Card$Block$link,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$target('_blank'),
														$elm$html$Html$Attributes$href('https://www.researchgate.net/publication/334811823_Petri_App_Land_A_Model-Driven_Framework_for_Functional_Client-Server_Applications_Petri_App_Land_A_Model-Driven_Framework_for_Functional_Client-Server_Applications')
													]),
												_List_fromArray(
													[
														$elm$html$Html$text('View poster.')
													]))
											]),
										A3(
											$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
											_List_fromArray(
												[
													A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
													A2($elm$html$Html$Attributes$style, 'font-weight', '700')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('ICS 2019 - PAL Poster')
												]),
											$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md4]),
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Card$view(
									A3(
										$rundis$elm_bootstrap$Bootstrap$Card$block,
										_List_Nil,
										_List_fromArray(
											[
												A2(
												$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
												_List_Nil,
												_List_fromArray(
													[
														$elm$html$Html$text('Does Mentoring Develop Deep Skills in Undergraduate Mentors?')
													])),
												A2(
												$rundis$elm_bootstrap$Bootstrap$Card$Block$link,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$target('_blank'),
														$elm$html$Html$Attributes$href('img/TeamworkICS2019.pdf')
													]),
												_List_fromArray(
													[
														$elm$html$Html$text('View poster.')
													]))
											]),
										A3(
											$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
											_List_fromArray(
												[
													A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
													A2($elm$html$Html$Attributes$style, 'font-weight', '700')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('ICS 2019 - Teamwork Poster')
												]),
											$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md4]),
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Card$view(
									A3(
										$rundis$elm_bootstrap$Bootstrap$Card$block,
										_List_Nil,
										_List_fromArray(
											[
												A2(
												$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
												_List_Nil,
												_List_fromArray(
													[
														$elm$html$Html$text('Graphics Programming in Elm Develops Math Knowledge & Social Cohesion')
													])),
												A2(
												$rundis$elm_bootstrap$Bootstrap$Card$Block$link,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$target('_blank'),
														$elm$html$Html$Attributes$href('https://www.researchgate.net/publication/328701758_Graphics_Programming_in_Elm_Develops_Math_Knowledge_Social_Cohesion')
													]),
												_List_fromArray(
													[
														$elm$html$Html$text('View slides.')
													]))
											]),
										A3(
											$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
											_List_fromArray(
												[
													A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
													A2($elm$html$Html$Attributes$style, 'font-weight', '700')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('CASCON 2018 Slides')
												]),
											$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md4]),
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Card$view(
									A3(
										$rundis$elm_bootstrap$Bootstrap$Card$block,
										_List_Nil,
										_List_fromArray(
											[
												A2(
												$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
												_List_Nil,
												_List_fromArray(
													[
														$elm$html$Html$text('Graphics Programming in Elm Develops Math Knowledge & Social Cohesion')
													])),
												A2(
												$rundis$elm_bootstrap$Bootstrap$Card$Block$link,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$target('_blank'),
														$elm$html$Html$Attributes$href('https://dl.acm.org/citation.cfm?id=3291308')
													]),
												_List_fromArray(
													[
														$elm$html$Html$text('View paper.')
													]))
											]),
										A3(
											$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
											_List_fromArray(
												[
													A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
													A2($elm$html$Html$Attributes$style, 'font-weight', '700')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text(' CASCON 2018 Paper')
												]),
											$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md4]),
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Card$view(
									A3(
										$rundis$elm_bootstrap$Bootstrap$Card$block,
										_List_Nil,
										_List_fromArray(
											[
												A2(
												$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
												_List_Nil,
												_List_fromArray(
													[
														$elm$html$Html$text('A Framework for Preadolescent Programmers to Create Cooperative Multiplayer Reading Games')
													])),
												A2(
												$rundis$elm_bootstrap$Bootstrap$Card$Block$link,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$target('_blank'),
														$elm$html$Html$Attributes$href('https://www.researchgate.net/publication/328517783_A_Framework_for_Preadolescent_Programmers_to_Create_Cooperative_Multiplayer_Reading_Games')
													]),
												_List_fromArray(
													[
														$elm$html$Html$text('View slides.')
													]))
											]),
										A3(
											$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
											_List_fromArray(
												[
													A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
													A2($elm$html$Html$Attributes$style, 'font-weight', '700')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('IMCL2018 Slides')
												]),
											$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md4]),
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Card$view(
									A3(
										$rundis$elm_bootstrap$Bootstrap$Card$block,
										_List_Nil,
										_List_fromArray(
											[
												A2(
												$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
												_List_Nil,
												_List_fromArray(
													[
														$elm$html$Html$text('A Framework for Preadolescent Programmers to Create Cooperative Multiplayer Reading Games')
													])),
												A2(
												$rundis$elm_bootstrap$Bootstrap$Card$Block$link,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$target('_blank'),
														$elm$html$Html$Attributes$href('https://www.researchgate.net/publication/328517973_AAM_A_Framework_for_Preadolescent_Programmers_to_Create_Cooperative_Multiplayer_Reading_Games')
													]),
												_List_fromArray(
													[
														$elm$html$Html$text('View paper.')
													]))
											]),
										A3(
											$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
											_List_fromArray(
												[
													A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
													A2($elm$html$Html$Attributes$style, 'font-weight', '700')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('IMCL2018 Paper')
												]),
											$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md4]),
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Card$view(
									A3(
										$rundis$elm_bootstrap$Bootstrap$Card$block,
										_List_Nil,
										_List_fromArray(
											[
												A2(
												$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
												_List_Nil,
												_List_fromArray(
													[
														$elm$html$Html$text('Wordathon: A Tool for Social Learning')
													])),
												A2(
												$rundis$elm_bootstrap$Bootstrap$Card$Block$link,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$target('_blank'),
														$elm$html$Html$Attributes$href('https://www.researchgate.net/publication/326631727_Wordathon_A_Tool_for_Social_Learning')
													]),
												_List_fromArray(
													[
														$elm$html$Html$text('View poster.')
													]))
											]),
										A3(
											$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
											_List_fromArray(
												[
													A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
													A2($elm$html$Html$Attributes$style, 'font-weight', '700')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('EdCog 2018: Wordathon Poster')
												]),
											$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md4]),
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Card$view(
									A3(
										$rundis$elm_bootstrap$Bootstrap$Card$block,
										_List_Nil,
										_List_fromArray(
											[
												A2(
												$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
												_List_Nil,
												_List_fromArray(
													[
														$elm$html$Html$text('Applying Cognitive Load Theory to Improve K-12 Computer Science Education: An Automated Tool')
													])),
												A2(
												$rundis$elm_bootstrap$Bootstrap$Card$Block$link,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$target('_blank'),
														$elm$html$Html$Attributes$href('https://www.researchgate.net/publication/326631504_Applying_Cognitive_Load_Theory_to_Improve_K-12_Computer_Science_Education_An_Automated_Tool')
													]),
												_List_fromArray(
													[
														$elm$html$Html$text('View poster.')
													]))
											]),
										A3(
											$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
											_List_fromArray(
												[
													A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
													A2($elm$html$Html$Attributes$style, 'font-weight', '700')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('EdCog 2018: CoolDemos Poster')
												]),
											$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md4]),
							_List_fromArray(
								[
									$rundis$elm_bootstrap$Bootstrap$Card$view(
									A3(
										$rundis$elm_bootstrap$Bootstrap$Card$block,
										_List_Nil,
										_List_fromArray(
											[
												A2(
												$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
												_List_Nil,
												_List_fromArray(
													[
														$elm$html$Html$text('Using Elm to Introduce Algebraic Thinking to K-8 Students')
													])),
												A2(
												$rundis$elm_bootstrap$Bootstrap$Card$Block$link,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$target('_blank'),
														$elm$html$Html$Attributes$href('http://eptcs.web.cse.unsw.edu.au/paper.cgi?TFPIE2017.2')
													]),
												_List_fromArray(
													[
														$elm$html$Html$text('View paper.')
													]))
											]),
										A3(
											$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
											_List_fromArray(
												[
													A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
													A2($elm$html$Html$Attributes$style, 'font-weight', '700')
												]),
											_List_fromArray(
												[
													$elm$html$Html$text('TFPIE 2017 Paper')
												]),
											$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
								]))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$row,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									$elm$html$Html$h1,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text(' ')
										]))
								]))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$row,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs(
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(52,58,64)')
								]))
						]),
					_List_fromArray(
						[
							A2(
							$rundis$elm_bootstrap$Bootstrap$Grid$col,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									$elm$html$Html$h1,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text(' ')
										]))
								]))
						]))
				]))
		]);
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Offset1 = 1;
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$ColOffset = function (a) {
	return {$: 1, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$Offset = F2(
	function (screenSize, offsetCount) {
		return {dj: offsetCount, dv: screenSize};
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Internal$offset = F2(
	function (size, count) {
		return $rundis$elm_bootstrap$Bootstrap$Grid$Internal$ColOffset(
			A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$Offset, size, count));
	});
var $rundis$elm_bootstrap$Bootstrap$Grid$Col$offsetSm1 = A2($rundis$elm_bootstrap$Bootstrap$Grid$Internal$offset, 1, 1);
var $author$project$SciLit2019$page = function (model) {
	return _List_fromArray(
		[
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my5]),
							_List_fromArray(
								[
									$elm$html$Html$text('Science Literacy Week 2019')
								]))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$xs3]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('http://www.sciod.ca/')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$img,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'width', '300px'),
											$elm$html$Html$Attributes$src('img/sciLitWeek.png')
										]),
									_List_Nil)
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('For Science Literacy Week 2019, we partnered with Katie Moisse, an expert in science communication, to create animated comics answering questions proposed by local children.  Senior elementary children, many of who participated in our summer camp worked on two comics:')
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h4,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$offsetSm1]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('https://macoutreach.rocks/CarniverousPlants.html')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Can plants eat animals?')
								]))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$offsetSm1]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('https://macoutreach.rocks/Worms.html')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('How long can worms grow?')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$offsetSm1]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/CarnivorousPlants.png')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$offsetSm1]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/HowLongCanWormsGrow.png')
								]),
							_List_Nil)
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs(
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(52,58,64)')
						]))
				]),
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				]))
		]);
};
var $author$project$SciOd$page = function (model) {
	return _List_fromArray(
		[
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_fromArray(
								[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my5]),
							_List_fromArray(
								[
									$elm$html$Html$text('Science Odyssey 2018 @ Mac')
								]))
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$xs3]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('http://www.sciod.ca/')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$img,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'width', '300px'),
											$elm$html$Html$Attributes$src('img/scienceodyssey.jpg')
										]),
									_List_Nil)
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('For Science Odyssey 2018, McMaster Computing and Software Outreach taught children at Glen Brae, Lincoln Alexander, Nora Henderson, Ridgemount, Saginaw, St Luke, and Westview to create animations in the programming language Elm, with the challenge of illustrating K-2 reading words. We then taught high school students at Westmount to make games, and challenged them to make reading games to use the word animations. Here are the results:')
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h4,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$offsetSm1]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('http://www.cas.mcmaster.ca/~anand/DirectionImagesSciOd2018.html')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Image Direction')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$offsetSm1]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('http://www.cas.mcmaster.ca/~anand/WordMatchSciOd2018.html')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Word Match')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$offsetSm1]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('http://www.cas.mcmaster.ca/~anand/JumbledSciOd2018.html')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Jumbled')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$offsetSm1]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('http://www.cas.mcmaster.ca/~anand/LetterSeekSciOd2018.html')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Letter Seek')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$offsetSm1]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('http://www.cas.mcmaster.ca/~anand/LetterDragSciOd2018.html')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Letter Drag')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Some children even had fun doing it!')
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h5,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$elm$html$Html$img,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'width', '500px'),
					$elm$html$Html$Attributes$src('img/SciOd.jpg')
				]),
			_List_Nil),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('We made a few games of our own:')
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h4,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2($rundis$elm_bootstrap$Bootstrap$Grid$col, _List_Nil, _List_Nil),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$xs11]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('http://www.cas.mcmaster.ca/~anand/FlashlightSciOd2018.html')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Flashlight')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2($rundis$elm_bootstrap$Bootstrap$Grid$col, _List_Nil, _List_Nil),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$xs11]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('http://www.cas.mcmaster.ca/~anand/Choose4SciOd2018.html')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Choose4')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h2,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('And we even have one to play as a class using a smartboard.')
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h4,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$offsetSm1]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$a,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('http://www.cas.mcmaster.ca/~anand/SciOdy2018.html')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Letter Drop')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('If you know any K-2 teachers, please share our games with them.')
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs(
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(52,58,64)')
						]))
				]),
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				]))
		]);
};
var $author$project$Showcase$internshipCamp = A2(
	$rundis$elm_bootstrap$Bootstrap$Grid$row,
	_List_Nil,
	_List_fromArray(
		[
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$col,
			_List_Nil,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Card$view(
					A3(
						$rundis$elm_bootstrap$Bootstrap$Card$block,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text('For the summer of 2019, we had students from across the K-W and Hamilton school districts apply for our Internship Style Summer Camp. Most of the students had previous experience with our coding workshops and those who were very enthusiastic were encouraged to apply to our camp.')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text('The goal for the students was to create a multiplayer game to help improve math skills in kids in Grade 3. To prep the kids for the project, they underwent a number of workshops which included design thinking, elm programming, and cognitive Science. The students in the camp had a diverse set of talents, ranging from mathematics, programming, science, art, and other creative disciplines. This allowed for great dispersal of skills within groups which is helpful in creating well developed cohesive projects.')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text('By the end of each week in the camp, the students created functioning mini-games which were then added together to create a large multiplayer game. The kids gained technical skills in programming and math, as well as deep skills such as teamwork, empathy and leadership.')
									])),
								$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
								A3(
									$author$project$Showcase$links2games,
									'Escape Math Island',
									'img/escapemathisland.jpeg',
									_List_fromArray(
										[
											_Utils_Tuple2('Escape Math Island', 'https://macoutreach.rocks/escapemathisland')
										])))
							]),
						A3(
							$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
									A2($elm$html$Html$Attributes$style, 'font-weight', '700')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Internship Style Summer Camp')
								]),
							$rundis$elm_bootstrap$Bootstrap$Card$config(
								_List_fromArray(
									[$rundis$elm_bootstrap$Bootstrap$Card$outlineSecondary])))))
				]))
		]));
var $author$project$Showcase$sciLitWeek = A2(
	$rundis$elm_bootstrap$Bootstrap$Grid$row,
	_List_Nil,
	_List_fromArray(
		[
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$col,
			_List_Nil,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Card$view(
					A3(
						$rundis$elm_bootstrap$Bootstrap$Card$block,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text('For the Science literacy week of 2019, we had students from across the K-W and Hamilton school districts apply for our Hackathon for making comics. Most of the students had previous experience with our coding workshops and those who were very enthusiastic were encouraged to apply to our camp.')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text('The goal for the students was to create Comics.')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text('Science Literacy Week 2019')
									])),
								$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
								A3(
									$author$project$Showcase$links2games,
									'Comics 2019',
									'img/CarnivorousPlants.png',
									_List_fromArray(
										[
											_Utils_Tuple2('Carnivorous Plants', 'https://macoutreach.rocks/CarniverousPlants.html'),
											_Utils_Tuple2('How Long Can Worms Grow', 'https://macoutreach.rocks/Worms.html')
										])))
							]),
						A3(
							$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
									A2($elm$html$Html$Attributes$style, 'font-weight', '700')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Science Literacy Week 2019')
								]),
							$rundis$elm_bootstrap$Bootstrap$Card$config(
								_List_fromArray(
									[$rundis$elm_bootstrap$Bootstrap$Card$outlineSecondary])))))
				]))
		]));
var $author$project$Showcase$sciod = A2(
	$rundis$elm_bootstrap$Bootstrap$Grid$row,
	_List_Nil,
	_List_fromArray(
		[
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$col,
			_List_Nil,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Card$view(
					A3(
						$rundis$elm_bootstrap$Bootstrap$Card$block,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text('For Science Odyssey 2018, McMaster Computing and Software Outreach taught children at Glen Brae, Lincoln Alexander, Nora Henderson, Ridgemount, Saginaw, St Luke, and Westview to create animations in the programming language Elm, with the challenge of illustrating K-2 reading words. We then taught high school students at Westmount to make games, and challenged them to make reading games to use the word animations.')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text('The goal for the students was to create Animations using ELM.')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text('Science Odyssey 2018')
									])),
								$rundis$elm_bootstrap$Bootstrap$Card$Block$custom(
								A3(
									$author$project$Showcase$links2games,
									'Science Odyssey 2018',
									'img/SciOd.jpg',
									_List_fromArray(
										[
											_Utils_Tuple2('Learn More.', '#sci-od')
										])))
							]),
						A3(
							$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
									A2($elm$html$Html$Attributes$style, 'font-weight', '700')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Science Odyssey 2018 at McMaster')
								]),
							$rundis$elm_bootstrap$Bootstrap$Card$config(
								_List_fromArray(
									[$rundis$elm_bootstrap$Bootstrap$Card$outlineSecondary])))))
				]))
		]));
var $author$project$Showcase$page = function (model) {
	return _List_fromArray(
		[
			A2(
			$elm$html$Html$h1,
			_List_fromArray(
				[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my5]),
			_List_fromArray(
				[
					$elm$html$Html$text('🦄 Showcase')
				])),
			$author$project$Showcase$internshipCamp,
			$author$project$Showcase$comic2019,
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			$author$project$Showcase$sciLitWeek,
			$author$project$Showcase$sciod,
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('When visiting schools for the wordathon we encouraged kids to submit their best animations to our Hall of Fame. To view their creations, click on the \" Hall of Fame \" button below.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$link,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$href('http://www.cas.mcmaster.ca/~anand/hall.html')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Hall of Fame')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Hall of Fame')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(
										_List_fromArray(
											[$rundis$elm_bootstrap$Bootstrap$Card$outlineSecondary])))))
						]))
				]))
		]);
};
var $elm$html$Html$Attributes$alt = $elm$html$Html$Attributes$stringProperty('alt');
var $rundis$elm_bootstrap$Bootstrap$Card$header = $rundis$elm_bootstrap$Bootstrap$Card$headerPrivate($elm$html$Html$div);
var $author$project$Team$page = function (model) {
	return _List_fromArray(
		[
			A2(
			$elm$html$Html$h1,
			_List_fromArray(
				[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my5]),
			_List_fromArray(
				[
					$elm$html$Html$text('Meet Our Mentors')
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/mentorAbdullah.png'),
									$elm$html$Html$Attributes$alt('Mentor Abdullah')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('About me')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('I\'m in my third year of Electrical Engineering. With McMaster Start Coding, I\'m a Crazy Animations & Dynamic Comics Camp Leader and an Elm Sprints Instructor.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Being a mentor taught me that...')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('When you let your creativity run free and set your mind to accomplishing a goal, there\'s nothing you can\'t achieve.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Outside of Outreach')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Find me in a heated game of soccer, enjoying a nice hiking trail, or spending quality time with friends and family.')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$header,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700'),
											A2($elm$html$Html$Attributes$style, 'font-size', '22.4px')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Abdullah')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/mentorAngel.png'),
									$elm$html$Html$Attributes$alt('Mentor Angel')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('About me')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('I\'m in my third year of iBioMed (Health, Engineering Science, & Entrepreneurship). I help out with the Dynamic Comics and Educational Games camps. I also teach at Elm Sprints and help with one of our latest projects, Elm Music.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Being a mentor taught me that...')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Concepts from the classroom can be stretched far with creativity to find innovative brilliance!')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Outside of Outreach')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Find me playing the piano, hanging out with my bunny, or working on a painting or digital drawing!')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$header,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700'),
											A2($elm$html$Html$Attributes$style, 'font-size', '22.4px')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Angel')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/mentorDeborah.png'),
									$elm$html$Html$Attributes$alt('Mentor Deborah')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('About me')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('I graduated with a Degree in Art History. I\'m a seasoned developer for Comics, helping to create the workshop for it last year. Now, we\'ve turned it into a camp! I\'m also an Elm Sprints Instructor and Artistic Designer for the team.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Being a mentor taught me that...')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Patience is the key to unlocking the potential in every child and teamwork has tremendous power for incredible work.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Outside of Outreach')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Find me exploring Software and Computing and integrating it with my background in Art History.')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$header,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700'),
											A2($elm$html$Html$Attributes$style, 'font-size', '22.4px')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Deborah')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/mentorGabrielle.png'),
									$elm$html$Html$Attributes$alt('Mentor Gabrielle')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('About me')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('I\'m in my fifth year of Life Science. With McMaster Start Coding, I am a Content Developer & Lead for the Educational Games camp. As an Elm Sprints Instructor, I specialize in international lessons. I\'ve also been helping to produce Elm Music.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Being a mentor taught me that...')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Kindness stretches long and far, and fun is a key ingredient for learning and development.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Outside of Outreach')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Find me learning about policy and academic thoery and advocating for equal rights within education.')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$header,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700'),
											A2($elm$html$Html$Attributes$style, 'font-size', '22.4px')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Gabrielle')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/mentorGurleen.png'),
									$elm$html$Html$Attributes$alt('Mentor Gurleen')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('About me')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('I\'m in my third year of iBioMed with a specialization in Chemical & Biomedical Engineering. I\'m an instructor for Elm Sprints and I specialize in international teaching. I\'m a member of the Elm Music team, but I also work on our media and promotional material. Check out our social media ads and YouTube videos lessons to see some of my work.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Being a mentor taught me that...')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('When we get creative with content delivery and instruction, learning can be fun and effective.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Outside of Outreach')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Find me practicing karate, working on a sculpture or piece of embroidery, taking a scenic photo or making glass art, and helping out in my community.')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$header,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700'),
											A2($elm$html$Html$Attributes$style, 'font-size', '22.4px')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Gurleen')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/mentorJamie.png'),
									$elm$html$Html$Attributes$alt('Mentor Jamie')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('About me')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('I\'m in my fourth year of Life Science. I\'ve been working to develop and lead the Crazy Animations camp and I also teach with Elm Sprints!')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Being a mentor taught me that...')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('To organize my time well and lead by example, being part of a team means looking out for our collective interests.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Outside of Outreach')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Find me running or hiking the trails near McMaster or taking beautiful photos and videos.')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$header,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700'),
											A2($elm$html$Html$Attributes$style, 'font-size', '22.4px')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Jamie')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/mentorMaliha.png'),
									$elm$html$Html$Attributes$alt('Mentor Maliha')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('About me')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('I\'m in my second year of Mechanical Engineering & Management. At McMaster Start Coding, I\'ve been a leader at our Hackathons and events. I\'m also an instructor with Elm Sprints and many of our summer camps!')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Being a mentor taught me that...')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('That computer programming is a great way to learn logical thinking and mathematical manipulation. I believe that it is something that everyone is capable of.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Outside of Outreach')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Find me reading historical fiction or playing badminton or volleyball!')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$header,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700'),
											A2($elm$html$Html$Attributes$style, 'font-size', '22.4px')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Maliha')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/mentorMichelle.png'),
									$elm$html$Html$Attributes$alt('Mentor Michelle')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Program and Year')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('I\'m in my fourth year of Biology & Mathematics. I\'m an instructor with Elm Sprints!')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Being a mentor taught me that...')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('That children don\'t have boundaries on their creativity! It has been incredibly rewarding to watch them learn and strive in our program.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Outside of Outreach')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Find me with my nose in a book or going on a hike.')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$header,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700'),
											A2($elm$html$Html$Attributes$style, 'font-size', '22.4px')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Michelle')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/mentorMikha.png'),
									$elm$html$Html$Attributes$alt('Mentor Mikha')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('About me')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('I\'m in my fourth year of Electrical Engineering & Society. I\'m Content Developer & Leader for the Crazy Animations camp and an instructor with many of our workshops and Elm Sprints lessons.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Being a mentor taught me that...')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Learning is a life long process, and leaning on my team for support has helped me grow as a developer, instructor, and person!')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Outside of Outreach')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Find me in a chess match, playing every sport under the sun, or finding a way to make other people smile!')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$header,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700'),
											A2($elm$html$Html$Attributes$style, 'font-size', '22.4px')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Mikha')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/mentorParimal.png'),
									$elm$html$Html$Attributes$alt('Mentor Parimal')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Program and Year')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('I\'m in my third year of Electrical Engineering and I\'m an instructor with Elm Sprints and our many summer camps!')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Being a mentor taught me that...')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('A quality experience for our students comes from collaborative work among our teammates.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Outside of Outreach')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Find me on a run, in a basketball game, or watching Suits!')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$header,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700'),
											A2($elm$html$Html$Attributes$style, 'font-size', '22.4px')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Parimal')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/mentorRafi.png'),
									$elm$html$Html$Attributes$alt('Mentor Rafi')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Program and Year')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('I\'m in my third year of Electrical Engineering and I\'m an instructor with Elm Sprints and many of our summer camps!')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Being a mentor taught me that...')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Effective communication, quick thinking, and confidence are important for being a dynamic instructor.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Outside of Outreach')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Find me organizing my bank notes collection from all across the world, listening to classical music, or trying out a new restaurant.')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$header,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700'),
											A2($elm$html$Html$Attributes$style, 'font-size', '22.4px')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Rafi')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/mentorRebecca.png'),
									$elm$html$Html$Attributes$alt('Mentor Rebecca')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Program and Year')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('I\'m in my third year of Computer Engineering. With McMaster Start Coding, I\'m an Elm Sprints instructor and the evening activities Leader, organizing lessons and camps! I also helped develop and plan many of our workshops, hackathons, and events!')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Being a mentor taught me that...')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('You\'ve never to young to learn how to code, and creativity is key when guiding students and delivering content!')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Outside of Outreach')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Find me hanging out with my family (I have a twin!), practicing the piano, or advocating for Girls in STEM.')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$header,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700'),
											A2($elm$html$Html$Attributes$style, 'font-size', '22.4px')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Rebecca')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/mentorRutvi.png'),
									$elm$html$Html$Attributes$alt('Mentor Rutvi')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('About me')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('I\'m in my second year of Computer Engineering. I\'m an Elm Sprints Content Developer and Instructor and I also specialize in international teaching. Look for me at the multiple camps we have going on this summer.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Being a instructor taught me that...')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Every student is unique and require teaching styles specific to their needs, but when they are met, every child is capable of performing to their potential!')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Outside of Outreach')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Find me volunteering at local food banks and soup kitchens, or sketching and painting.')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$header,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700'),
											A2($elm$html$Html$Attributes$style, 'font-size', '22.4px')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Rutvi')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/mentorSharon.png'),
									$elm$html$Html$Attributes$alt('Mentor Sharon')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Program and Year')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('I\'m a Computing & Software Engineering Master\'s Candidate! I\'ve been helping with the summer camps, developing the 3D camp material, and working on games for the Crazy Animations camp.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Being a mentor taught me that...')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Teamwork is important when working on large projects and kids have a potential that is just out of this world!')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Outside of Outreach')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Find me making a new friend and diving deep into a niche conversation, you never know what you might just learn.')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$header,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700'),
											A2($elm$html$Html$Attributes$style, 'font-size', '22.4px')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Sharon')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/mentorStephanie.png'),
									$elm$html$Html$Attributes$alt('Mentor Stephanie')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('About me')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('I graduated with a Degree in Psychology and a minor in Computer Science. I\'m a leader at the Dynamic Comics camp and a Content Developer for the Educational Games camp.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Being a mentor taught me that...')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Patience is key to working well with others and it is important to be able to communicate technology with people in tech, as well as those outside of tech!')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Outside of Outreach')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Find me working on my electric airplace startup or working on a watercolour painting.')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$header,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700'),
											A2($elm$html$Html$Attributes$style, 'font-size', '22.4px')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Stephanie')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/mentorSteven.png'),
									$elm$html$Html$Attributes$alt('Mentor Steven')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('About me')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('I\'m in my third year of Computer Science. I work behind the scenes on this website, and help to facilitate the marketing material you see on our social media platforms. I\'m a Content Developer for the Dynamic Comics camp and an instructor with Elm Sprints.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Being a mentor taught me that...')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Effective teaching is the gold standard of understanding; if you can help someone learn something new, then you truly grasp the material.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Outside of Outreach')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Find me reading about politics or doing cutting edge work on elliptic curve cryptography.')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$header,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700'),
											A2($elm$html$Html$Attributes$style, 'font-size', '22.4px')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Steven')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '300px'),
									$elm$html$Html$Attributes$src('img/mentorTawana.png'),
									$elm$html$Html$Attributes$alt('Mentor Tawana')
								]),
							_List_Nil)
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_fromArray(
						[$rundis$elm_bootstrap$Bootstrap$Grid$Col$md8]),
					_List_fromArray(
						[
							$rundis$elm_bootstrap$Bootstrap$Card$view(
							A3(
								$rundis$elm_bootstrap$Bootstrap$Card$block,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('About me')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('I\'m in my third year of Computer Engineering & Management and I\'m an instructor with Elm Sprints and our various summer camps!')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Being a mentor taught me that...')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('In order for teams to work well together, they need to communicate effectively.')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_fromArray(
											[
												A2($elm$html$Html$Attributes$style, 'font-weight', '600'),
												A2($elm$html$Html$Attributes$style, 'font-size', '20px')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Outside of Outreach')
											])),
										A2(
										$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
										_List_Nil,
										_List_fromArray(
											[
												$elm$html$Html$text('Find me learning new tools and techonologies, I hope to one day go back to Botswana to start a cloud computing company and help the economy!')
											]))
									]),
								A3(
									$rundis$elm_bootstrap$Bootstrap$Card$header,
									_List_fromArray(
										[
											A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
											A2($elm$html$Html$Attributes$style, 'font-weight', '700'),
											A2($elm$html$Html$Attributes$style, 'font-size', '22.4px')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Tawana')
										]),
									$rundis$elm_bootstrap$Bootstrap$Card$config(_List_Nil))))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				])),
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$row,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Grid$Row$attrs(
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(52,58,64)')
						]))
				]),
			_List_fromArray(
				[
					A2(
					$rundis$elm_bootstrap$Bootstrap$Grid$col,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$h1,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text(' ')
								]))
						]))
				]))
		]);
};
var $rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my3 = $elm$html$Html$Attributes$class('my-3');
var $rundis$elm_bootstrap$Bootstrap$Table$THead = $elm$core$Basics$identity;
var $rundis$elm_bootstrap$Bootstrap$Table$thead = F2(
	function (options, rows) {
		return {dY: options, b4: rows};
	});
var $rundis$elm_bootstrap$Bootstrap$Table$Row = function (a) {
	return {$: 0, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Table$tr = F2(
	function (options, cells) {
		return $rundis$elm_bootstrap$Bootstrap$Table$Row(
			{m: cells, dY: options});
	});
var $rundis$elm_bootstrap$Bootstrap$Table$simpleThead = function (cells) {
	return A2(
		$rundis$elm_bootstrap$Bootstrap$Table$thead,
		_List_Nil,
		_List_fromArray(
			[
				A2($rundis$elm_bootstrap$Bootstrap$Table$tr, _List_Nil, cells)
			]));
};
var $rundis$elm_bootstrap$Bootstrap$Table$Striped = {$: 1};
var $rundis$elm_bootstrap$Bootstrap$Table$striped = $rundis$elm_bootstrap$Bootstrap$Table$Striped;
var $rundis$elm_bootstrap$Bootstrap$Table$Inversed = {$: 0};
var $rundis$elm_bootstrap$Bootstrap$Table$isResponsive = function (option) {
	if (option.$ === 5) {
		return true;
	} else {
		return false;
	}
};
var $rundis$elm_bootstrap$Bootstrap$Table$KeyedTBody = function (a) {
	return {$: 1, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Table$TBody = function (a) {
	return {$: 0, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Table$InversedRow = function (a) {
	return {$: 1, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Table$KeyedRow = function (a) {
	return {$: 1, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Table$InversedCell = function (a) {
	return {$: 1, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Table$Td = function (a) {
	return {$: 0, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Table$Th = function (a) {
	return {$: 1, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Table$mapInversedCell = function (cell) {
	var inverseOptions = function (options) {
		return A2(
			$elm$core$List$map,
			function (opt) {
				if (!opt.$) {
					var role = opt.a;
					return $rundis$elm_bootstrap$Bootstrap$Table$InversedCell(role);
				} else {
					return opt;
				}
			},
			options);
	};
	if (cell.$ === 1) {
		var cellCfg = cell.a;
		return $rundis$elm_bootstrap$Bootstrap$Table$Th(
			_Utils_update(
				cellCfg,
				{
					dY: inverseOptions(cellCfg.dY)
				}));
	} else {
		var cellCfg = cell.a;
		return $rundis$elm_bootstrap$Bootstrap$Table$Td(
			_Utils_update(
				cellCfg,
				{
					dY: inverseOptions(cellCfg.dY)
				}));
	}
};
var $rundis$elm_bootstrap$Bootstrap$Table$mapInversedRow = function (row) {
	var inversedOptions = function (options) {
		return A2(
			$elm$core$List$map,
			function (opt) {
				if (!opt.$) {
					var role = opt.a;
					return $rundis$elm_bootstrap$Bootstrap$Table$InversedRow(role);
				} else {
					return opt;
				}
			},
			options);
	};
	if (!row.$) {
		var options = row.a.dY;
		var cells = row.a.m;
		return $rundis$elm_bootstrap$Bootstrap$Table$Row(
			{
				m: A2($elm$core$List$map, $rundis$elm_bootstrap$Bootstrap$Table$mapInversedCell, cells),
				dY: inversedOptions(options)
			});
	} else {
		var options = row.a.dY;
		var cells = row.a.m;
		return $rundis$elm_bootstrap$Bootstrap$Table$KeyedRow(
			{
				m: A2(
					$elm$core$List$map,
					function (_v1) {
						var key = _v1.a;
						var cell = _v1.b;
						return _Utils_Tuple2(
							key,
							$rundis$elm_bootstrap$Bootstrap$Table$mapInversedCell(cell));
					},
					cells),
				dY: inversedOptions(options)
			});
	}
};
var $rundis$elm_bootstrap$Bootstrap$Table$maybeMapInversedTBody = F2(
	function (isTableInversed, tbody_) {
		var _v0 = _Utils_Tuple2(isTableInversed, tbody_);
		if (!_v0.a) {
			return tbody_;
		} else {
			if (!_v0.b.$) {
				var body = _v0.b.a;
				return $rundis$elm_bootstrap$Bootstrap$Table$TBody(
					_Utils_update(
						body,
						{
							b4: A2($elm$core$List$map, $rundis$elm_bootstrap$Bootstrap$Table$mapInversedRow, body.b4)
						}));
			} else {
				var keyedBody = _v0.b.a;
				return $rundis$elm_bootstrap$Bootstrap$Table$KeyedTBody(
					_Utils_update(
						keyedBody,
						{
							b4: A2(
								$elm$core$List$map,
								function (_v1) {
									var key = _v1.a;
									var row = _v1.b;
									return _Utils_Tuple2(
										key,
										$rundis$elm_bootstrap$Bootstrap$Table$mapInversedRow(row));
								},
								keyedBody.b4)
						}));
			}
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Table$InversedHead = {$: 0};
var $rundis$elm_bootstrap$Bootstrap$Table$maybeMapInversedTHead = F2(
	function (isTableInversed, _v0) {
		var thead_ = _v0;
		var isHeadInversed = A2(
			$elm$core$List$any,
			function (opt) {
				return _Utils_eq(opt, $rundis$elm_bootstrap$Bootstrap$Table$InversedHead);
			},
			thead_.dY);
		return (isTableInversed || isHeadInversed) ? _Utils_update(
			thead_,
			{
				b4: A2($elm$core$List$map, $rundis$elm_bootstrap$Bootstrap$Table$mapInversedRow, thead_.b4)
			}) : thead_;
	});
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $rundis$elm_bootstrap$Bootstrap$Table$maybeWrapResponsive = F2(
	function (options, table_) {
		var responsiveClass = $elm$html$Html$Attributes$class(
			'table-responsive' + A2(
				$elm$core$Maybe$withDefault,
				'',
				A2(
					$elm$core$Maybe$map,
					function (v) {
						return '-' + v;
					},
					A2(
						$elm$core$Maybe$andThen,
						$rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption,
						A2(
							$elm$core$Maybe$andThen,
							function (opt) {
								if (opt.$ === 5) {
									var val = opt.a;
									return val;
								} else {
									return $elm$core$Maybe$Nothing;
								}
							},
							$elm$core$List$head(
								A2($elm$core$List$filter, $rundis$elm_bootstrap$Bootstrap$Table$isResponsive, options)))))));
		return A2($elm$core$List$any, $rundis$elm_bootstrap$Bootstrap$Table$isResponsive, options) ? A2(
			$elm$html$Html$div,
			_List_fromArray(
				[responsiveClass]),
			_List_fromArray(
				[table_])) : table_;
	});
var $rundis$elm_bootstrap$Bootstrap$Table$CellAttr = function (a) {
	return {$: 2, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Table$cellAttr = function (attr_) {
	return $rundis$elm_bootstrap$Bootstrap$Table$CellAttr(attr_);
};
var $elm$html$Html$Attributes$scope = $elm$html$Html$Attributes$stringProperty('scope');
var $rundis$elm_bootstrap$Bootstrap$Table$addScopeIfTh = function (cell) {
	if (cell.$ === 1) {
		var cellConfig = cell.a;
		return $rundis$elm_bootstrap$Bootstrap$Table$Th(
			_Utils_update(
				cellConfig,
				{
					dY: A2(
						$elm$core$List$cons,
						$rundis$elm_bootstrap$Bootstrap$Table$cellAttr(
							$elm$html$Html$Attributes$scope('row')),
						cellConfig.dY)
				}));
	} else {
		return cell;
	}
};
var $rundis$elm_bootstrap$Bootstrap$Table$maybeAddScopeToFirstCell = function (row) {
	if (!row.$) {
		var options = row.a.dY;
		var cells = row.a.m;
		if (!cells.b) {
			return row;
		} else {
			var first = cells.a;
			var rest = cells.b;
			return $rundis$elm_bootstrap$Bootstrap$Table$Row(
				{
					m: A2(
						$elm$core$List$cons,
						$rundis$elm_bootstrap$Bootstrap$Table$addScopeIfTh(first),
						rest),
					dY: options
				});
		}
	} else {
		var options = row.a.dY;
		var cells = row.a.m;
		if (!cells.b) {
			return row;
		} else {
			var _v3 = cells.a;
			var firstKey = _v3.a;
			var first = _v3.b;
			var rest = cells.b;
			return $rundis$elm_bootstrap$Bootstrap$Table$KeyedRow(
				{
					m: A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							firstKey,
							$rundis$elm_bootstrap$Bootstrap$Table$addScopeIfTh(first)),
						rest),
					dY: options
				});
		}
	}
};
var $rundis$elm_bootstrap$Bootstrap$Table$cellAttribute = function (option) {
	switch (option.$) {
		case 0:
			if (!option.a.$) {
				var role = option.a.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass, 'table', role);
			} else {
				var _v1 = option.a;
				return $elm$html$Html$Attributes$class('table-active');
			}
		case 1:
			if (!option.a.$) {
				var role = option.a.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass, 'bg-', role);
			} else {
				var _v2 = option.a;
				return $elm$html$Html$Attributes$class('bg-active');
			}
		default:
			var attr_ = option.a;
			return attr_;
	}
};
var $rundis$elm_bootstrap$Bootstrap$Table$cellAttributes = function (options) {
	return A2($elm$core$List$map, $rundis$elm_bootstrap$Bootstrap$Table$cellAttribute, options);
};
var $elm$html$Html$td = _VirtualDom_node('td');
var $elm$html$Html$th = _VirtualDom_node('th');
var $rundis$elm_bootstrap$Bootstrap$Table$renderCell = function (cell) {
	if (!cell.$) {
		var options = cell.a.dY;
		var children = cell.a.c0;
		return A2(
			$elm$html$Html$td,
			$rundis$elm_bootstrap$Bootstrap$Table$cellAttributes(options),
			children);
	} else {
		var options = cell.a.dY;
		var children = cell.a.c0;
		return A2(
			$elm$html$Html$th,
			$rundis$elm_bootstrap$Bootstrap$Table$cellAttributes(options),
			children);
	}
};
var $rundis$elm_bootstrap$Bootstrap$Table$rowClass = function (option) {
	switch (option.$) {
		case 0:
			if (!option.a.$) {
				var role_ = option.a.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass, 'table', role_);
			} else {
				var _v1 = option.a;
				return $elm$html$Html$Attributes$class('table-active');
			}
		case 1:
			if (!option.a.$) {
				var role_ = option.a.a;
				return A2($rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass, 'bg', role_);
			} else {
				var _v2 = option.a;
				return $elm$html$Html$Attributes$class('bg-active');
			}
		default:
			var attr_ = option.a;
			return attr_;
	}
};
var $rundis$elm_bootstrap$Bootstrap$Table$rowAttributes = function (options) {
	return A2($elm$core$List$map, $rundis$elm_bootstrap$Bootstrap$Table$rowClass, options);
};
var $elm$html$Html$tr = _VirtualDom_node('tr');
var $rundis$elm_bootstrap$Bootstrap$Table$renderRow = function (row) {
	if (!row.$) {
		var options = row.a.dY;
		var cells = row.a.m;
		return A2(
			$elm$html$Html$tr,
			$rundis$elm_bootstrap$Bootstrap$Table$rowAttributes(options),
			A2($elm$core$List$map, $rundis$elm_bootstrap$Bootstrap$Table$renderCell, cells));
	} else {
		var options = row.a.dY;
		var cells = row.a.m;
		return A3(
			$elm$html$Html$Keyed$node,
			'tr',
			$rundis$elm_bootstrap$Bootstrap$Table$rowAttributes(options),
			A2(
				$elm$core$List$map,
				function (_v1) {
					var key = _v1.a;
					var cell = _v1.b;
					return _Utils_Tuple2(
						key,
						$rundis$elm_bootstrap$Bootstrap$Table$renderCell(cell));
				},
				cells));
	}
};
var $elm$html$Html$tbody = _VirtualDom_node('tbody');
var $rundis$elm_bootstrap$Bootstrap$Table$renderTBody = function (body) {
	if (!body.$) {
		var attributes = body.a.a3;
		var rows = body.a.b4;
		return A2(
			$elm$html$Html$tbody,
			attributes,
			A2(
				$elm$core$List$map,
				function (row) {
					return $rundis$elm_bootstrap$Bootstrap$Table$renderRow(
						$rundis$elm_bootstrap$Bootstrap$Table$maybeAddScopeToFirstCell(row));
				},
				rows));
	} else {
		var attributes = body.a.a3;
		var rows = body.a.b4;
		return A3(
			$elm$html$Html$Keyed$node,
			'tbody',
			attributes,
			A2(
				$elm$core$List$map,
				function (_v1) {
					var key = _v1.a;
					var row = _v1.b;
					return _Utils_Tuple2(
						key,
						$rundis$elm_bootstrap$Bootstrap$Table$renderRow(
							$rundis$elm_bootstrap$Bootstrap$Table$maybeAddScopeToFirstCell(row)));
				},
				rows));
	}
};
var $elm$html$Html$thead = _VirtualDom_node('thead');
var $rundis$elm_bootstrap$Bootstrap$Table$theadAttribute = function (option) {
	switch (option.$) {
		case 0:
			return $elm$html$Html$Attributes$class('thead-dark');
		case 1:
			return $elm$html$Html$Attributes$class('thead-default');
		default:
			var attr_ = option.a;
			return attr_;
	}
};
var $rundis$elm_bootstrap$Bootstrap$Table$theadAttributes = function (options) {
	return A2($elm$core$List$map, $rundis$elm_bootstrap$Bootstrap$Table$theadAttribute, options);
};
var $rundis$elm_bootstrap$Bootstrap$Table$renderTHead = function (_v0) {
	var options = _v0.dY;
	var rows = _v0.b4;
	return A2(
		$elm$html$Html$thead,
		$rundis$elm_bootstrap$Bootstrap$Table$theadAttributes(options),
		A2($elm$core$List$map, $rundis$elm_bootstrap$Bootstrap$Table$renderRow, rows));
};
var $elm$html$Html$table = _VirtualDom_node('table');
var $rundis$elm_bootstrap$Bootstrap$Table$tableClass = function (option) {
	switch (option.$) {
		case 0:
			return $elm$core$Maybe$Just(
				$elm$html$Html$Attributes$class('table-dark'));
		case 1:
			return $elm$core$Maybe$Just(
				$elm$html$Html$Attributes$class('table-striped'));
		case 2:
			return $elm$core$Maybe$Just(
				$elm$html$Html$Attributes$class('table-bordered'));
		case 3:
			return $elm$core$Maybe$Just(
				$elm$html$Html$Attributes$class('table-hover'));
		case 4:
			return $elm$core$Maybe$Just(
				$elm$html$Html$Attributes$class('table-sm'));
		case 5:
			return $elm$core$Maybe$Nothing;
		case 6:
			return $elm$core$Maybe$Just(
				$elm$html$Html$Attributes$class('table-reflow'));
		default:
			var attr_ = option.a;
			return $elm$core$Maybe$Just(attr_);
	}
};
var $rundis$elm_bootstrap$Bootstrap$Table$tableAttributes = function (options) {
	return A2(
		$elm$core$List$cons,
		$elm$html$Html$Attributes$class('table'),
		A2(
			$elm$core$List$filterMap,
			$elm$core$Basics$identity,
			A2($elm$core$List$map, $rundis$elm_bootstrap$Bootstrap$Table$tableClass, options)));
};
var $rundis$elm_bootstrap$Bootstrap$Table$table = function (rec) {
	var isInversed = A2(
		$elm$core$List$any,
		function (opt) {
			return _Utils_eq(opt, $rundis$elm_bootstrap$Bootstrap$Table$Inversed);
		},
		rec.dY);
	var classOptions = A2(
		$elm$core$List$filter,
		function (opt) {
			return !$rundis$elm_bootstrap$Bootstrap$Table$isResponsive(opt);
		},
		rec.dY);
	return A2(
		$rundis$elm_bootstrap$Bootstrap$Table$maybeWrapResponsive,
		rec.dY,
		A2(
			$elm$html$Html$table,
			$rundis$elm_bootstrap$Bootstrap$Table$tableAttributes(classOptions),
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Table$renderTHead(
					A2($rundis$elm_bootstrap$Bootstrap$Table$maybeMapInversedTHead, isInversed, rec.d2)),
					$rundis$elm_bootstrap$Bootstrap$Table$renderTBody(
					A2($rundis$elm_bootstrap$Bootstrap$Table$maybeMapInversedTBody, isInversed, rec.d1))
				])));
};
var $rundis$elm_bootstrap$Bootstrap$Table$tbody = F2(
	function (attributes, rows) {
		return $rundis$elm_bootstrap$Bootstrap$Table$TBody(
			{a3: attributes, b4: rows});
	});
var $rundis$elm_bootstrap$Bootstrap$Table$td = F2(
	function (options, children) {
		return $rundis$elm_bootstrap$Bootstrap$Table$Td(
			{c0: children, dY: options});
	});
var $rundis$elm_bootstrap$Bootstrap$Table$th = F2(
	function (options, children) {
		return $rundis$elm_bootstrap$Bootstrap$Table$Th(
			{c0: children, dY: options});
	});
var $author$project$Tutoring$page = function (_v0) {
	return _List_fromArray(
		[
			A2(
			$elm$html$Html$h1,
			_List_fromArray(
				[$rundis$elm_bootstrap$Bootstrap$Utilities$Spacing$my3]),
			_List_fromArray(
				[
					$elm$html$Html$text('Tutoring')
				])),
			A2(
			$elm$html$Html$ul,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$li,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('What if your child needs extra help getting connected or finishing a lesson?')
						])),
					A2(
					$elm$html$Html$li,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('What if you want to do coding in your learning pod?')
						])),
					A2(
					$elm$html$Html$li,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('What if your child wants help with the game they started in a camp?')
						]))
				])),
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('This is why we created tutoring services!')
				])),
			A2(
			$elm$html$Html$ul,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$li,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('What if your child is having trouble with a concept in math or science which could be explained better with a computer simulation?')
						]))
				])),
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('We are really excited about this use of coding, but email us at macoutreach@gmail.com with the concept to verify that it is something we can prepare in a reasonable time.')
				])),
			$rundis$elm_bootstrap$Bootstrap$Table$table(
			{
				dY: _List_fromArray(
					[$rundis$elm_bootstrap$Bootstrap$Table$striped]),
				d1: A2(
					$rundis$elm_bootstrap$Bootstrap$Table$tbody,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$rundis$elm_bootstrap$Bootstrap$Table$tr,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									$rundis$elm_bootstrap$Bootstrap$Table$td,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('1-2')
										])),
									A2(
									$rundis$elm_bootstrap$Bootstrap$Table$td,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('1h')
										])),
									A2(
									$rundis$elm_bootstrap$Bootstrap$Table$td,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('1 tutor')
										])),
									A2(
									$rundis$elm_bootstrap$Bootstrap$Table$td,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('$25')
										]))
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Table$tr,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									$rundis$elm_bootstrap$Bootstrap$Table$td,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('1-2')
										])),
									A2(
									$rundis$elm_bootstrap$Bootstrap$Table$td,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('5h')
										])),
									A2(
									$rundis$elm_bootstrap$Bootstrap$Table$td,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('1 tutor')
										])),
									A2(
									$rundis$elm_bootstrap$Bootstrap$Table$td,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('$100')
										]))
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Table$tr,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									$rundis$elm_bootstrap$Bootstrap$Table$td,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('3-6')
										])),
									A2(
									$rundis$elm_bootstrap$Bootstrap$Table$td,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('1h')
										])),
									A2(
									$rundis$elm_bootstrap$Bootstrap$Table$td,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('2 tutors')
										])),
									A2(
									$rundis$elm_bootstrap$Bootstrap$Table$td,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('$50')
										]))
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Table$tr,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									$rundis$elm_bootstrap$Bootstrap$Table$td,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('3-6')
										])),
									A2(
									$rundis$elm_bootstrap$Bootstrap$Table$td,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('5h')
										])),
									A2(
									$rundis$elm_bootstrap$Bootstrap$Table$td,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('2 tutors')
										])),
									A2(
									$rundis$elm_bootstrap$Bootstrap$Table$td,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('$200')
										]))
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Table$tr,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									$rundis$elm_bootstrap$Bootstrap$Table$td,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('4-10')
										])),
									A2(
									$rundis$elm_bootstrap$Bootstrap$Table$td,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('1h')
										])),
									A2(
									$rundis$elm_bootstrap$Bootstrap$Table$td,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('3 tutors')
										])),
									A2(
									$rundis$elm_bootstrap$Bootstrap$Table$td,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('$75')
										]))
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Table$tr,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									$rundis$elm_bootstrap$Bootstrap$Table$td,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('4-10')
										])),
									A2(
									$rundis$elm_bootstrap$Bootstrap$Table$td,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('5h')
										])),
									A2(
									$rundis$elm_bootstrap$Bootstrap$Table$td,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('3 tutors')
										])),
									A2(
									$rundis$elm_bootstrap$Bootstrap$Table$td,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('$300')
										]))
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Table$tr,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									$rundis$elm_bootstrap$Bootstrap$Table$td,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('1-2')
										])),
									A2(
									$rundis$elm_bootstrap$Bootstrap$Table$td,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('1h')
										])),
									A2(
									$rundis$elm_bootstrap$Bootstrap$Table$td,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('1 tutor')
										])),
									A2(
									$rundis$elm_bootstrap$Bootstrap$Table$td,
									_List_Nil,
									_List_fromArray(
										[
											$elm$html$Html$text('$25')
										]))
								]))
						])),
				d2: $rundis$elm_bootstrap$Bootstrap$Table$simpleThead(
					_List_fromArray(
						[
							A2(
							$rundis$elm_bootstrap$Bootstrap$Table$th,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('Pod Size')
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Table$th,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('Hours of Tutoring')
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Table$th,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('Number of Tutors')
								])),
							A2(
							$rundis$elm_bootstrap$Bootstrap$Table$th,
							_List_Nil,
							_List_fromArray(
								[
									$elm$html$Html$text('Cost')
								]))
						]))
			}),
			A2(
			$elm$html$Html$ul,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$li,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('We cannot provide refunds, but we can reschedule a tutoring session.')
						])),
					A2(
					$elm$html$Html$li,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('When purchasing 5 hours of tutoring, you will pick a day of the week and a time.  At the first session, your child can ask the tutor if the following sessions can be rescheduled, for example to squeeze in more tutoring before a camp deadline.')
						])),
					A2(
					$elm$html$Html$li,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('You will be provided with a Zoom meeting link which is open during tutoring hours.  Children will meet their tutor in the room, and then be shifted to a break-out room.')
						]))
				]))
		]);
};
var $author$project$Showcase$wordathonGames = A2(
	$rundis$elm_bootstrap$Bootstrap$Grid$row,
	_List_Nil,
	_List_fromArray(
		[
			A2(
			$rundis$elm_bootstrap$Bootstrap$Grid$col,
			_List_Nil,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Card$view(
					A3(
						$rundis$elm_bootstrap$Bootstrap$Card$block,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								$rundis$elm_bootstrap$Bootstrap$Card$Block$text,
								_List_Nil,
								_List_fromArray(
									[
										$elm$html$Html$text('testing')
									]))
							]),
						A3(
							$rundis$elm_bootstrap$Bootstrap$Card$headerH3,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'color', 'crimson'),
									A2($elm$html$Html$Attributes$style, 'font-weight', '700')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Wordathon 2019')
								]),
							$rundis$elm_bootstrap$Bootstrap$Card$config(
								_List_fromArray(
									[$rundis$elm_bootstrap$Bootstrap$Card$outlineSecondary])))))
				]))
		]));
var $author$project$Wordathon2019$page = function (model) {
	return _List_fromArray(
		[$author$project$Showcase$wordathonGames]);
};
var $author$project$Main$pageNotFound = _List_fromArray(
	[
		A2(
		$elm$html$Html$h1,
		_List_Nil,
		_List_fromArray(
			[
				$elm$html$Html$text('Not found')
			])),
		$elm$html$Html$text('Sorry couldn\'t find that page')
	]);
var $author$project$Main$mainContent = function (model) {
	return A2(
		$rundis$elm_bootstrap$Bootstrap$Grid$containerFluid,
		_List_Nil,
		function () {
			var _v0 = model.an;
			switch (_v0.$) {
				case 0:
					return $author$project$Home$page(model);
				case 1:
					return $author$project$ClassVisits$page(model);
				case 2:
					return $author$project$Club$page(model);
				case 4:
					return $author$project$SciOd$page(model);
				case 5:
					return $author$project$SciLit2019$page(model);
				case 6:
					return $author$project$NYH$page(model);
				case 8:
					return $author$project$Showcase$page(model);
				case 9:
					return $author$project$CodingTools$page(model);
				case 10:
					return $author$project$Examples$page(model);
				case 11:
					return $author$project$Contact$page(model);
				case 21:
					var tab = _v0.a;
					return A2(
						$elm$core$List$map,
						$elm$html$Html$map($author$project$Model$CampsMsg),
						$author$project$Camps$page(model.P));
				case 20:
					return $author$project$Tutoring$page(0);
				case 7:
					return $author$project$FAQ$page(model);
				case 12:
					return $author$project$Research$page(model);
				case 14:
					return $author$project$Comics2019$page(model);
				case 15:
					return $author$project$Wordathon2019$page(model);
				case 16:
					return A2(
						$elm$core$List$map,
						$elm$html$Html$map($author$project$Model$CalendarMsg),
						$author$project$Calendar$page(model.a6));
				case 17:
					return $author$project$Team$page(model);
				case 19:
					return $author$project$Board$page(model);
				case 18:
					return $author$project$Execs$page(model);
				case 3:
					return $author$project$Jr$page(model);
				case 24:
					return $author$project$Donate$page(model);
				case 22:
					return A2(
						$elm$core$List$map,
						$elm$html$Html$map($author$project$Model$LessonsMsg),
						$author$project$Lessons$page(model.V));
				case 23:
					return $author$project$Hackathon$page(model);
				default:
					return $author$project$Main$pageNotFound;
			}
		}());
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$Brand = $elm$core$Basics$identity;
var $rundis$elm_bootstrap$Bootstrap$Navbar$Config = $elm$core$Basics$identity;
var $rundis$elm_bootstrap$Bootstrap$Navbar$updateConfig = F2(
	function (mapper, _v0) {
		var conf = _v0;
		return mapper(conf);
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$brand = F3(
	function (attributes, children, config_) {
		return A2(
			$rundis$elm_bootstrap$Bootstrap$Navbar$updateConfig,
			function (conf) {
				return _Utils_update(
					conf,
					{
						au: $elm$core$Maybe$Just(
							A2(
								$elm$html$Html$a,
								_Utils_ap(
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('navbar-brand')
										]),
									attributes),
								children))
					});
			},
			config_);
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$updateOptions = F2(
	function (mapper, _v0) {
		var conf = _v0;
		return _Utils_update(
			conf,
			{
				dY: mapper(conf.dY)
			});
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$toggleAt = F2(
	function (size, conf) {
		return A2(
			$rundis$elm_bootstrap$Bootstrap$Navbar$updateOptions,
			function (opt) {
				return _Utils_update(
					opt,
					{aK: size});
			},
			conf);
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$collapseSmall = $rundis$elm_bootstrap$Bootstrap$Navbar$toggleAt(1);
var $rundis$elm_bootstrap$Bootstrap$Internal$Role$Light = 6;
var $rundis$elm_bootstrap$Bootstrap$Navbar$Light = 1;
var $rundis$elm_bootstrap$Bootstrap$Navbar$Roled = function (a) {
	return {$: 0, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$config = function (toMsg) {
	return {
		au: $elm$core$Maybe$Nothing,
		bb: _List_Nil,
		bt: _List_Nil,
		dY: {
			a3: _List_Nil,
			ag: $elm$core$Maybe$Nothing,
			br: false,
			b5: $elm$core$Maybe$Just(
				{
					a4: $rundis$elm_bootstrap$Bootstrap$Navbar$Roled(6),
					bA: 1
				}),
			aK: 0
		},
		cU: toMsg,
		Z: false
	};
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$Dropdown = $elm$core$Basics$identity;
var $rundis$elm_bootstrap$Bootstrap$Navbar$NavDropdown = function (a) {
	return {$: 1, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$dropdown = function (conf) {
	return $rundis$elm_bootstrap$Bootstrap$Navbar$NavDropdown(conf);
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$DropdownItem = $elm$core$Basics$identity;
var $rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem = F2(
	function (attributes, children) {
		return A2(
			$elm$html$Html$a,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('dropdown-item')
					]),
				attributes),
			children);
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$DropdownToggle = $elm$core$Basics$identity;
var $rundis$elm_bootstrap$Bootstrap$Navbar$dropdownToggle = F2(
	function (attributes, children) {
		return {a3: attributes, c0: children};
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$Item = function (a) {
	return {$: 0, a: a};
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$itemLink = F2(
	function (attributes, children) {
		return $rundis$elm_bootstrap$Bootstrap$Navbar$Item(
			{a3: attributes, c0: children});
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$items = F2(
	function (items_, config_) {
		return A2(
			$rundis$elm_bootstrap$Bootstrap$Navbar$updateConfig,
			function (conf) {
				return _Utils_update(
					conf,
					{bt: items_});
			},
			config_);
	});
var $elm$html$Html$button = _VirtualDom_node('button');
var $rundis$elm_bootstrap$Bootstrap$Navbar$maybeBrand = function (brand_) {
	if (!brand_.$) {
		var b = brand_.a;
		return _List_fromArray(
			[b]);
	} else {
		return _List_Nil;
	}
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$sizeToComparable = function (size) {
	switch (size) {
		case 0:
			return 1;
		case 1:
			return 2;
		case 2:
			return 3;
		case 3:
			return 4;
		default:
			return 5;
	}
};
var $rundis$elm_bootstrap$Bootstrap$General$Internal$XL = 4;
var $rundis$elm_bootstrap$Bootstrap$Navbar$toScreenSize = function (windowWidth) {
	return (windowWidth <= 576) ? 0 : ((windowWidth <= 768) ? 1 : ((windowWidth <= 992) ? 2 : ((windowWidth <= 1200) ? 3 : 4)));
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$shouldHideMenu = F2(
	function (_v0, _v1) {
		var windowWidth = _v0.aU;
		var options = _v1.dY;
		var winMedia = function () {
			if (!windowWidth.$) {
				var s = windowWidth.a;
				return $rundis$elm_bootstrap$Bootstrap$Navbar$toScreenSize(s);
			} else {
				return 0;
			}
		}();
		return _Utils_cmp(
			$rundis$elm_bootstrap$Bootstrap$Navbar$sizeToComparable(winMedia),
			$rundis$elm_bootstrap$Bootstrap$Navbar$sizeToComparable(options.aK)) > 0;
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$Shown = 5;
var $rundis$elm_bootstrap$Bootstrap$Navbar$StartDown = 1;
var $rundis$elm_bootstrap$Bootstrap$Navbar$StartUp = 3;
var $rundis$elm_bootstrap$Bootstrap$Navbar$visibilityTransition = F2(
	function (withAnimation_, visibility) {
		var _v0 = _Utils_Tuple2(withAnimation_, visibility);
		if (_v0.a) {
			switch (_v0.b) {
				case 0:
					var _v1 = _v0.b;
					return 1;
				case 1:
					var _v2 = _v0.b;
					return 2;
				case 2:
					var _v3 = _v0.b;
					return 5;
				case 5:
					var _v4 = _v0.b;
					return 3;
				case 3:
					var _v5 = _v0.b;
					return 4;
				default:
					var _v6 = _v0.b;
					return 0;
			}
		} else {
			switch (_v0.b) {
				case 0:
					var _v7 = _v0.b;
					return 5;
				case 5:
					var _v8 = _v0.b;
					return 0;
				default:
					return 0;
			}
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$transitionHandler = F2(
	function (state, configRec) {
		return $elm$json$Json$Decode$succeed(
			configRec.cU(
				A2(
					$rundis$elm_bootstrap$Bootstrap$Navbar$mapState,
					function (s) {
						return _Utils_update(
							s,
							{
								i: A2($rundis$elm_bootstrap$Bootstrap$Navbar$visibilityTransition, configRec.Z, s.i)
							});
					},
					state)));
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$transitionStyle = function (maybeHeight) {
	var pixelHeight = A2(
		$elm$core$Maybe$withDefault,
		'0',
		A2(
			$elm$core$Maybe$map,
			function (v) {
				return $elm$core$String$fromFloat(v) + 'px';
			},
			maybeHeight));
	return _List_fromArray(
		[
			A2($elm$html$Html$Attributes$style, 'position', 'relative'),
			A2($elm$html$Html$Attributes$style, 'height', pixelHeight),
			A2($elm$html$Html$Attributes$style, 'width', '100%'),
			A2($elm$html$Html$Attributes$style, 'overflow', 'hidden'),
			A2($elm$html$Html$Attributes$style, '-webkit-transition-timing-function', 'ease'),
			A2($elm$html$Html$Attributes$style, '-o-transition-timing-function', 'ease'),
			A2($elm$html$Html$Attributes$style, 'transition-timing-function', 'ease'),
			A2($elm$html$Html$Attributes$style, '-webkit-transition-duration', '0.35s'),
			A2($elm$html$Html$Attributes$style, '-o-transition-duration', '0.35s'),
			A2($elm$html$Html$Attributes$style, 'transition-duration', '0.35s'),
			A2($elm$html$Html$Attributes$style, '-webkit-transition-property', 'height'),
			A2($elm$html$Html$Attributes$style, '-o-transition-property', 'height'),
			A2($elm$html$Html$Attributes$style, 'transition-property', 'height')
		]);
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$menuAttributes = F2(
	function (state, configRec) {
		var visibility = state.i;
		var height = state.dP;
		var defaults = _List_fromArray(
			[
				$elm$html$Html$Attributes$class('collapse navbar-collapse')
			]);
		switch (visibility) {
			case 0:
				if (height.$ === 1) {
					return ((!configRec.Z) || A2($rundis$elm_bootstrap$Bootstrap$Navbar$shouldHideMenu, state, configRec)) ? defaults : _List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'display', 'block'),
							A2($elm$html$Html$Attributes$style, 'height', '0'),
							A2($elm$html$Html$Attributes$style, 'overflow', 'hidden'),
							A2($elm$html$Html$Attributes$style, 'width', '100%')
						]);
				} else {
					return defaults;
				}
			case 1:
				return $rundis$elm_bootstrap$Bootstrap$Navbar$transitionStyle($elm$core$Maybe$Nothing);
			case 2:
				return _Utils_ap(
					$rundis$elm_bootstrap$Bootstrap$Navbar$transitionStyle(height),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$Events$on,
							'transitionend',
							A2($rundis$elm_bootstrap$Bootstrap$Navbar$transitionHandler, state, configRec))
						]));
			case 4:
				return _Utils_ap(
					$rundis$elm_bootstrap$Bootstrap$Navbar$transitionStyle($elm$core$Maybe$Nothing),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$Events$on,
							'transitionend',
							A2($rundis$elm_bootstrap$Bootstrap$Navbar$transitionHandler, state, configRec))
						]));
			case 3:
				return $rundis$elm_bootstrap$Bootstrap$Navbar$transitionStyle(height);
			default:
				return _Utils_ap(
					defaults,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('show')
						]));
		}
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$menuWrapperAttributes = F2(
	function (state, confRec) {
		var visibility = state.i;
		var height = state.dP;
		var styleBlock = _List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'display', 'block'),
				A2($elm$html$Html$Attributes$style, 'width', '100%')
			]);
		var display = function () {
			if (height.$ === 1) {
				return ((!confRec.Z) || A2($rundis$elm_bootstrap$Bootstrap$Navbar$shouldHideMenu, state, confRec)) ? 'flex' : 'block';
			} else {
				return 'flex';
			}
		}();
		switch (visibility) {
			case 0:
				return _List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'display', display),
						A2($elm$html$Html$Attributes$style, 'width', '100%')
					]);
			case 1:
				return styleBlock;
			case 2:
				return styleBlock;
			case 4:
				return styleBlock;
			case 3:
				return styleBlock;
			default:
				return ((!confRec.Z) || A2($rundis$elm_bootstrap$Bootstrap$Navbar$shouldHideMenu, state, confRec)) ? _List_fromArray(
					[
						$elm$html$Html$Attributes$class('collapse navbar-collapse show')
					]) : _List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'display', 'block')
					]);
		}
	});
var $elm$html$Html$nav = _VirtualDom_node('nav');
var $rundis$elm_bootstrap$Bootstrap$Navbar$expandOption = function (size) {
	var toClass = function (sz) {
		return $elm$html$Html$Attributes$class(
			'navbar-expand' + A2(
				$elm$core$Maybe$withDefault,
				'',
				A2(
					$elm$core$Maybe$map,
					function (s) {
						return '-' + s;
					},
					$rundis$elm_bootstrap$Bootstrap$General$Internal$screenSizeOption(sz))));
	};
	switch (size) {
		case 0:
			return _List_fromArray(
				[
					toClass(1)
				]);
		case 1:
			return _List_fromArray(
				[
					toClass(2)
				]);
		case 2:
			return _List_fromArray(
				[
					toClass(3)
				]);
		case 3:
			return _List_fromArray(
				[
					toClass(4)
				]);
		default:
			return _List_Nil;
	}
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$fixOption = function (fix) {
	if (!fix) {
		return 'fixed-top';
	} else {
		return 'fixed-bottom';
	}
};
var $avh4$elm_color$Color$toCssString = function (_v0) {
	var r = _v0.a;
	var g = _v0.b;
	var b = _v0.c;
	var a = _v0.d;
	var roundTo = function (x) {
		return $elm$core$Basics$round(x * 1000) / 1000;
	};
	var pct = function (x) {
		return $elm$core$Basics$round(x * 10000) / 100;
	};
	return $elm$core$String$concat(
		_List_fromArray(
			[
				'rgba(',
				$elm$core$String$fromFloat(
				pct(r)),
				'%,',
				$elm$core$String$fromFloat(
				pct(g)),
				'%,',
				$elm$core$String$fromFloat(
				pct(b)),
				'%,',
				$elm$core$String$fromFloat(
				roundTo(a)),
				')'
			]));
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$backgroundColorOption = function (bgClass) {
	switch (bgClass.$) {
		case 0:
			var role = bgClass.a;
			return A2($rundis$elm_bootstrap$Bootstrap$Internal$Role$toClass, 'bg', role);
		case 1:
			var color = bgClass.a;
			return A2(
				$elm$html$Html$Attributes$style,
				'background-color',
				$avh4$elm_color$Color$toCssString(color));
		default:
			var classString = bgClass.a;
			return $elm$html$Html$Attributes$class(classString);
	}
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$linkModifierClass = function (modifier) {
	return $elm$html$Html$Attributes$class(
		function () {
			if (!modifier) {
				return 'navbar-dark';
			} else {
				return 'navbar-light';
			}
		}());
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$schemeAttributes = function (_v0) {
	var modifier = _v0.bA;
	var bgColor = _v0.a4;
	return _List_fromArray(
		[
			$rundis$elm_bootstrap$Bootstrap$Navbar$linkModifierClass(modifier),
			$rundis$elm_bootstrap$Bootstrap$Navbar$backgroundColorOption(bgColor)
		]);
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$navbarAttributes = function (options) {
	return _Utils_ap(
		_List_fromArray(
			[
				$elm$html$Html$Attributes$classList(
				_List_fromArray(
					[
						_Utils_Tuple2('navbar', true),
						_Utils_Tuple2('container', options.br)
					]))
			]),
		_Utils_ap(
			$rundis$elm_bootstrap$Bootstrap$Navbar$expandOption(options.aK),
			_Utils_ap(
				function () {
					var _v0 = options.b5;
					if (!_v0.$) {
						var scheme_ = _v0.a;
						return $rundis$elm_bootstrap$Bootstrap$Navbar$schemeAttributes(scheme_);
					} else {
						return _List_Nil;
					}
				}(),
				_Utils_ap(
					function () {
						var _v1 = options.ag;
						if (!_v1.$) {
							var fix = _v1.a;
							return _List_fromArray(
								[
									$elm$html$Html$Attributes$class(
									$rundis$elm_bootstrap$Bootstrap$Navbar$fixOption(fix))
								]);
						} else {
							return _List_Nil;
						}
					}(),
					options.a3))));
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$renderCustom = function (items_) {
	return A2(
		$elm$core$List$map,
		function (_v0) {
			var item = _v0;
			return item;
		},
		items_);
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$getOrInitDropdownStatus = F2(
	function (id, _v0) {
		var dropdowns = _v0.S;
		return A2(
			$elm$core$Maybe$withDefault,
			2,
			A2($elm$core$Dict$get, id, dropdowns));
	});
var $elm$core$Basics$neq = _Utils_notEqual;
var $elm$virtual_dom$VirtualDom$Custom = function (a) {
	return {$: 3, a: a};
};
var $elm$html$Html$Events$custom = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Custom(decoder));
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$toggleOpen = F3(
	function (state, id, _v0) {
		var toMsg = _v0.cU;
		var currStatus = A2($rundis$elm_bootstrap$Bootstrap$Navbar$getOrInitDropdownStatus, id, state);
		var newStatus = function () {
			switch (currStatus) {
				case 0:
					return 2;
				case 1:
					return 2;
				default:
					return 0;
			}
		}();
		return toMsg(
			A2(
				$rundis$elm_bootstrap$Bootstrap$Navbar$mapState,
				function (s) {
					return _Utils_update(
						s,
						{
							S: A3($elm$core$Dict$insert, id, newStatus, s.S)
						});
				},
				state));
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$renderDropdownToggle = F4(
	function (state, id, configRec, _v0) {
		var attributes = _v0.a3;
		var children = _v0.c0;
		return A2(
			$elm$html$Html$a,
			_Utils_ap(
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('nav-link dropdown-toggle'),
						$elm$html$Html$Attributes$href('#'),
						A2(
						$elm$html$Html$Events$custom,
						'click',
						$elm$json$Json$Decode$succeed(
							{
								L: A3($rundis$elm_bootstrap$Bootstrap$Navbar$toggleOpen, state, id, configRec),
								cK: true,
								cR: false
							}))
					]),
				attributes),
			children);
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$renderDropdown = F3(
	function (state, configRec, _v0) {
		var ddRec = _v0;
		var needsDropup = A2(
			$elm$core$Maybe$withDefault,
			false,
			A2(
				$elm$core$Maybe$map,
				function (fix) {
					if (fix === 1) {
						return true;
					} else {
						return false;
					}
				},
				configRec.dY.ag));
		var isShown = A2($rundis$elm_bootstrap$Bootstrap$Navbar$getOrInitDropdownStatus, ddRec.bq, state) !== 2;
		return A2(
			$elm$html$Html$li,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$classList(
					_List_fromArray(
						[
							_Utils_Tuple2('nav-item', true),
							_Utils_Tuple2('dropdown', true),
							_Utils_Tuple2('shown', isShown),
							_Utils_Tuple2('dropup', needsDropup)
						]))
				]),
			_List_fromArray(
				[
					A4($rundis$elm_bootstrap$Bootstrap$Navbar$renderDropdownToggle, state, ddRec.bq, configRec, ddRec.cd),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$classList(
							_List_fromArray(
								[
									_Utils_Tuple2('dropdown-menu', true),
									_Utils_Tuple2('show', isShown)
								]))
						]),
					A2(
						$elm$core$List$map,
						function (_v1) {
							var item = _v1;
							return item;
						},
						ddRec.bt))
				]));
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$renderItemLink = function (_v0) {
	var attributes = _v0.a3;
	var children = _v0.c0;
	return A2(
		$elm$html$Html$li,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('nav-item')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$a,
				_Utils_ap(
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('nav-link')
						]),
					attributes),
				children)
			]));
};
var $rundis$elm_bootstrap$Bootstrap$Navbar$renderNav = F3(
	function (state, configRec, navItems) {
		return A2(
			$elm$html$Html$ul,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('navbar-nav mr-auto')
				]),
			A2(
				$elm$core$List$map,
				function (item) {
					if (!item.$) {
						var item_ = item.a;
						return $rundis$elm_bootstrap$Bootstrap$Navbar$renderItemLink(item_);
					} else {
						var dropdown_ = item.a;
						return A3($rundis$elm_bootstrap$Bootstrap$Navbar$renderDropdown, state, configRec, dropdown_);
					}
				},
				navItems));
	});
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $elm$json$Json$Decode$fail = _Json_fail;
var $rundis$elm_bootstrap$Bootstrap$Utilities$DomHelper$parentElement = function (decoder) {
	return A2($elm$json$Json$Decode$field, 'parentElement', decoder);
};
var $elm$json$Json$Decode$string = _Json_decodeString;
var $rundis$elm_bootstrap$Bootstrap$Utilities$DomHelper$target = function (decoder) {
	return A2($elm$json$Json$Decode$field, 'target', decoder);
};
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $rundis$elm_bootstrap$Bootstrap$Navbar$heightDecoder = function () {
	var tagDecoder = A3(
		$elm$json$Json$Decode$map2,
		F2(
			function (tag, val) {
				return _Utils_Tuple2(tag, val);
			}),
		A2($elm$json$Json$Decode$field, 'tagName', $elm$json$Json$Decode$string),
		$elm$json$Json$Decode$value);
	var resToDec = function (res) {
		if (!res.$) {
			var v = res.a;
			return $elm$json$Json$Decode$succeed(v);
		} else {
			var err = res.a;
			return $elm$json$Json$Decode$fail(
				$elm$json$Json$Decode$errorToString(err));
		}
	};
	var fromNavDec = $elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['childNodes', '2', 'childNodes', '0', 'offsetHeight']),
				$elm$json$Json$Decode$float),
				A2(
				$elm$json$Json$Decode$at,
				_List_fromArray(
					['childNodes', '1', 'childNodes', '0', 'offsetHeight']),
				$elm$json$Json$Decode$float)
			]));
	var fromButtonDec = $rundis$elm_bootstrap$Bootstrap$Utilities$DomHelper$parentElement(fromNavDec);
	return A2(
		$elm$json$Json$Decode$andThen,
		function (_v0) {
			var tag = _v0.a;
			var val = _v0.b;
			switch (tag) {
				case 'NAV':
					return resToDec(
						A2($elm$json$Json$Decode$decodeValue, fromNavDec, val));
				case 'BUTTON':
					return resToDec(
						A2($elm$json$Json$Decode$decodeValue, fromButtonDec, val));
				default:
					return $elm$json$Json$Decode$succeed(0);
			}
		},
		$rundis$elm_bootstrap$Bootstrap$Utilities$DomHelper$target(
			$rundis$elm_bootstrap$Bootstrap$Utilities$DomHelper$parentElement(tagDecoder)));
}();
var $rundis$elm_bootstrap$Bootstrap$Navbar$toggleHandler = F2(
	function (state, configRec) {
		var height = state.dP;
		var updState = function (h) {
			return A2(
				$rundis$elm_bootstrap$Bootstrap$Navbar$mapState,
				function (s) {
					return _Utils_update(
						s,
						{
							dP: $elm$core$Maybe$Just(h),
							i: A2($rundis$elm_bootstrap$Bootstrap$Navbar$visibilityTransition, configRec.Z, s.i)
						});
				},
				state);
		};
		return A2(
			$elm$html$Html$Events$on,
			'click',
			A2(
				$elm$json$Json$Decode$andThen,
				function (v) {
					return $elm$json$Json$Decode$succeed(
						configRec.cU(
							(v > 0) ? updState(v) : updState(
								A2($elm$core$Maybe$withDefault, 0, height))));
				},
				$rundis$elm_bootstrap$Bootstrap$Navbar$heightDecoder));
	});
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $rundis$elm_bootstrap$Bootstrap$Navbar$view = F2(
	function (state, conf) {
		var configRec = conf;
		return A2(
			$elm$html$Html$nav,
			$rundis$elm_bootstrap$Bootstrap$Navbar$navbarAttributes(configRec.dY),
			_Utils_ap(
				$rundis$elm_bootstrap$Bootstrap$Navbar$maybeBrand(configRec.au),
				_Utils_ap(
					_List_fromArray(
						[
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class(
									'navbar-toggler' + A2(
										$elm$core$Maybe$withDefault,
										'',
										A2(
											$elm$core$Maybe$map,
											function (_v0) {
												return ' navbar-toggler-right';
											},
											configRec.au))),
									$elm$html$Html$Attributes$type_('button'),
									A2($rundis$elm_bootstrap$Bootstrap$Navbar$toggleHandler, state, configRec)
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$span,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('navbar-toggler-icon')
										]),
									_List_Nil)
								]))
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							A2($rundis$elm_bootstrap$Bootstrap$Navbar$menuAttributes, state, configRec),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$div,
									A2($rundis$elm_bootstrap$Bootstrap$Navbar$menuWrapperAttributes, state, configRec),
									_Utils_ap(
										_List_fromArray(
											[
												A3($rundis$elm_bootstrap$Bootstrap$Navbar$renderNav, state, configRec, configRec.bt)
											]),
										$rundis$elm_bootstrap$Bootstrap$Navbar$renderCustom(configRec.bb)))
								]))
						]))));
	});
var $rundis$elm_bootstrap$Bootstrap$Navbar$withAnimation = function (config_) {
	return A2(
		$rundis$elm_bootstrap$Bootstrap$Navbar$updateConfig,
		function (conf) {
			return _Utils_update(
				conf,
				{Z: true});
		},
		config_);
};
var $author$project$Main$menu = function (model) {
	return A2(
		$rundis$elm_bootstrap$Bootstrap$Navbar$view,
		model.bC,
		A2(
			$rundis$elm_bootstrap$Bootstrap$Navbar$items,
			_List_fromArray(
				[
					$rundis$elm_bootstrap$Bootstrap$Navbar$dropdown(
					{
						bq: 'camps',
						bt: _List_fromArray(
							[
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('#animation')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Animation Camp')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('#comics')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Comics Camp')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('#adventure')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Adventure Camp')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('#minigames')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Mini-Games Camp')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('#3d')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Journey into 3D')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('#dtcamp')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Design Thinking')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('#picasso')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Code like Picasso')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('#escher')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Code like Escher')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('#beethoven')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Code like Beethoven')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('#minigames-saturdays')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Mini-Games Saturdays')
									]))
							]),
						cd: A2(
							$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownToggle,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('#whereyouare'),
									A2($elm$html$Html$Attributes$style, 'font-size', '14pt')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Camps')
								]))
					}),
					$rundis$elm_bootstrap$Bootstrap$Navbar$dropdown(
					{
						bq: 'lessons',
						bt: _List_fromArray(
							[
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$target('_blank'),
										$elm$html$Html$Attributes$href('https://www.youtube.com/channel/UCBwtZa2OjMg_QtZOTKdDfpg/videos')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('YouTube')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('#lesson1')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Lesson 1')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('#lesson2')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Lesson 2')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('#lesson3')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Lesson 3')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('#lesson4')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Lesson 4')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('#lesson5')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Lesson 5')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('#lesson6')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Lesson 6')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('#lesson7')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Lesson 7')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('#lesson8')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Lesson 8')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('#lesson9')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Lesson 9')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('#lesson10')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Lesson 10')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('#lesson11')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Lesson 11')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('#lesson12')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Lesson 12')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('#lesson13')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Lesson 13')
									]))
							]),
						cd: A2(
							$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownToggle,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('#whereyouare'),
									A2($elm$html$Html$Attributes$style, 'font-size', '14pt')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Lessons')
								]))
					}),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Navbar$itemLink,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href('#classvisits'),
							A2($elm$html$Html$Attributes$style, 'font-size', '14pt')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('ClassVisits')
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Navbar$itemLink,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href('#coding-tools'),
							A2($elm$html$Html$Attributes$style, 'font-size', '18pt')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('🔨')
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Navbar$itemLink,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href('#showcase'),
							A2($elm$html$Html$Attributes$style, 'font-size', '18pt')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('🦄')
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Navbar$itemLink,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href('#research'),
							A2($elm$html$Html$Attributes$style, 'font-size', '18pt')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('🔬')
						])),
					$rundis$elm_bootstrap$Bootstrap$Navbar$dropdown(
					{
						bq: 'volunteering',
						bt: _List_fromArray(
							[
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('#club')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Undergraduates/Graduates')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('#jr')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Jr. Mentors')
									]))
							]),
						cd: A2(
							$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownToggle,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('#whereyouare')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Volunteering')
								]))
					}),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Navbar$itemLink,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href('#nyh')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('NewYouthHack')
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Navbar$itemLink,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href('#faq')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('FAQ')
						])),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Navbar$itemLink,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href('#calendar')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('Calendar')
						])),
					$rundis$elm_bootstrap$Bootstrap$Navbar$dropdown(
					{
						bq: 'teams',
						bt: _List_fromArray(
							[
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('#board')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Board Members')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('#execs')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Club Executives')
									])),
								A2(
								$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownItem,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('#team')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Mentors')
									]))
							]),
						cd: A2(
							$rundis$elm_bootstrap$Bootstrap$Navbar$dropdownToggle,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$href('#whereyouare')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Teams')
								]))
					}),
					A2(
					$rundis$elm_bootstrap$Bootstrap$Navbar$itemLink,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href('#contact')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('Contact')
						]))
				]),
			$rundis$elm_bootstrap$Bootstrap$Navbar$collapseSmall(
				A3(
					$rundis$elm_bootstrap$Bootstrap$Navbar$brand,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href('/')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$img,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'width', '120px'),
									$elm$html$Html$Attributes$src('img/MSCWebsiteLogoT.png')
								]),
							_List_Nil)
						]),
					$rundis$elm_bootstrap$Bootstrap$Navbar$withAnimation(
						$rundis$elm_bootstrap$Bootstrap$Navbar$config($author$project$Model$NavMsg))))));
};
var $author$project$Main$view = function (model) {
	return {
		dE: _List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						$author$project$Main$menu(model),
						$author$project$Main$mainContent(model)
					]))
			]),
		d3: function () {
			var _v0 = model.an;
			switch (_v0.$) {
				case 0:
					return 'McMaster Start Coding';
				case 2:
					return 'Club | McMaster Start Coding';
				case 1:
					return 'Class Visits | McMaster Start Coding';
				case 4:
					return 'Science Odyssey 2018 | McMaster Start Coding';
				case 6:
					return 'NewYouthHack | Reimagining Settlement Services for New Immigrant and Refugee Youth';
				case 5:
					return 'Science Literacy Week 2019 | Explaining Science with Comics';
				case 8:
					return 'Showcase | McMaster Start Coding';
				case 9:
					return 'Coding Tools | McMaster Start Coding';
				case 10:
					return 'Examples | McMaster Start Coding';
				case 3:
					return 'Junior Mentors | McMaster Start Coding';
				case 11:
					return 'Contact | McMaster Start Coding';
				case 22:
					return 'Lessons | McMaster Start Coding';
				case 23:
					return 'Hackathon | McMaster Start Coding';
				case 7:
					return 'FAQ | McMaster Start Coding';
				case 12:
					return 'Research | McMaster Start Coding';
				case 14:
					return 'Comics2019 | McMaster Start Coding';
				case 21:
					return 'Camps | McMaster Start Coding';
				case 20:
					return 'Tutoring | McMaster Start Coding';
				case 15:
					return 'Wordathon2019 | McMaster Start Coding';
				case 16:
					return 'Calendar | McMaster Start Coding';
				case 19:
					return 'Board | McMaster Start Coding';
				case 18:
					return 'Execs | McMaster Start Coding';
				case 17:
					return 'Team | McMaster Start Coding';
				case 24:
					return 'Support McMaster Start Coding';
				default:
					return 'Page Not Found';
			}
		}()
	};
};
var $author$project$Main$main = $elm$browser$Browser$application(
	{dU: $author$project$Main$init, dV: $author$project$Model$UrlChange, dW: $author$project$Model$ClickedLink, d0: $author$project$Main$subscriptions, d4: $author$project$Main$update, d5: $author$project$Main$view});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (time) {
			return $elm$json$Json$Decode$succeed(
				{b: time});
		},
		A2($elm$json$Json$Decode$field, 'time', $elm$json$Json$Decode$int)))(0)}});}(this));