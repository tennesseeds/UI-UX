=================Exercise 1====================
var someObject = {};

//Which of the following are valid:

someObject._name= "Hedwig"; //Valid
someObject.age = 6; //Valid

var prop = "color" 
someObject[prop] = "red"; //Valid

someObject.123 = true; //Invalid

=================Exercise 2====================

var someObject = {
	friends: [
	{name: "Malfoy"},
	{name: "Crabbe"},
	{name: "Goyle"},
	],
	color: "baby blue",
	isEvil: true
};

//Write code to retrieve "Malfoy" from someObject
//Go one "layer" at a time!
someObject
Object {friends: Array[3], color: "baby blue", isEvil: true}color: "baby blue"friends: Array[3]0: Objectname: "Malfoy"__proto__: Object1: Objectname: "Crabbe"__proto__: Object__defineGetter__: __defineGetter__()__defineSetter__: __defineSetter__()__lookupGetter__: __lookupGetter__()__lookupSetter__: __lookupSetter__()constructor: Object()hasOwnProperty: hasOwnProperty()isPrototypeOf: isPrototypeOf()propertyIsEnumerable: propertyIsEnumerable()toLocaleString: toLocaleString()toString: toString()valueOf: valueOf()get __proto__: get __proto__()set __proto__: set __proto__()2: Objectname: "Goyle"__proto__: Object__defineGetter__: __defineGetter__()__defineSetter__: __defineSetter__()__lookupGetter__: __lookupGetter__()__lookupSetter__: __lookupSetter__()constructor: Object()hasOwnProperty: hasOwnProperty()isPrototypeOf: isPrototypeOf()propertyIsEnumerable: propertyIsEnumerable()toLocaleString: toLocaleString()toString: toString()valueOf: valueOf()get __proto__: get __proto__()set __proto__: set __proto__()length: 3__proto__: Array[0]concat: concat()constructor: Array()copyWithin: copyWithin()entries: entries()every: every()fill: fill()filter: filter()find: find()findIndex: findIndex()forEach: forEach()includes: includes()indexOf: indexOf()join: join()keys: keys()lastIndexOf: lastIndexOf()length: 0map: map()move: (a,b)pop: pop()push: push()reduce: reduce()reduceRight: reduceRight()reverse: reverse()shift: shift()slice: slice()some: some()sort: sort()splice: splice()toLocaleString: toLocaleString()toString: toString()unshift: unshift()Symbol(Symbol.iterator): values()Symbol(Symbol.unscopables): Object__proto__: ObjectisEvil: true__proto__: Object

someObject.friends
[Object, Object, Object]

someObject.friends[0]
Object {name: "Malfoy"}

someObject.friends[0].name
"Malfoy"

