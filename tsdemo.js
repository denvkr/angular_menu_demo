"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var myWindowStates;
myWindowStates = "open";
var VirtualPoint = /** @class */ (function () {
    function VirtualPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    VirtualPoint.prototype.scale = function (n) {
        this.x *= n;
        this.y *= n;
    };
    return VirtualPoint;
}());
var myObjectWithNameArray;
myObjectWithNameArray = [{ name: 'a1' }, { name: 'a2' }];
//declare const backpack: Backpack<Object>;
//var object = backpack.get();
function getLength(obj) {
    return obj.length;
}
function wrapInArray(obj) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
}
function logPoint(p) {
    console.log("".concat(p.x, ", ").concat(p.y));
}
function logVPoint(p) {
    console.log("".concat(p.x, ", ").concat(p.y));
}
function logBackpack(bp) {
    console.log("".concat(bp.get()));
}
console.log('myWindowStates', myWindowStates, getLength(myWindowStates), wrapInArray(myWindowStates), myObjectWithNameArray);
var point = { x: 12, y: 26, add: function (Obj) { }, get: function () { } };
//logPoint(point);
//var bp:Backpack<Point> = point;
var newVPoint = new VirtualPoint(13, 56);
logVPoint(newVPoint);
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first); // outputs 1
console.log(second); // outputs 2
function f(_a, reverse) {
    var _b;
    var first = _a[0], second = _a[1];
    if (reverse) {
        _b = [first, second], second = _b[0], first = _b[1];
        console.log(first);
        console.log(second);
    }
    else {
        console.log(first);
        console.log(second);
    }
}
f([1, 2], true);
var _a = [1, 2, 3, 4], first1 = _a[0], rest1 = _a.slice(1);
console.log(first1); // outputs 1
console.log(rest1); // outputs [ 2, 3, 4 ]
var tuple = [7, "hello", true];
var a = tuple[0], b = tuple[1], c = tuple[2]; // a: number, b: string, c: boolean
console.log(a, b, c);
//let { a1, b1 }:Object;
var _b = { a1: "baz", b1: 101 }, b1 = _b.b1, a1 = _b.a1;
console.log({ a1: a1, b1: b1 });
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var newName1 = o.a, newName2 = o.b;
console.log({ newName1: newName1, newName2: newName2 });
function f1(_a) {
    var _b = _a === void 0 ? o : _a, _c = _b.a, a = _c === void 0 ? "" : _c, _d = _b.b, b = _d === void 0 ? 0 : _d, string = _b.c;
    // ...
    console.log({ a: a, b: b, c: c });
}
f1(o);
function f2(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.a, a = _c === void 0 ? "testA" : _c, _d = _b.b, b = _d === void 0 ? 0 : _d, _e = _b.c, c = _e === void 0 ? "testC" : _e;
    // ...
    console.log({ a: a, b: b, c: c });
}
f2();
function f3(_a) {
    var _b = _a === void 0 ? { a: "" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    // ...
}
f3({ a: "yes" }); // ok, default b = 0
f3(); // ok, default to { a: "" }, which then defaults b = 0
//f3({}); // error, 'a' is required if you supply an argument
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign(__assign({}, defaults), { food: "rich" });
console.log(search);
var first2 = [1, 2];
var second2 = [3, 4];
var bothPlus = __spreadArray(__spreadArray(__spreadArray([0], first2, true), second2, true), [5], false);
console.log(bothPlus);
var Greeter = /** @class */ (function () {
    function Greeter(otherName) {
        this.name = "world";
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
    Greeter.prototype.err = function () {
        this.name = "not ok";
    };
    return Greeter;
}());
var g = new Greeter();
g.name = "also not ok";
console.log(g);
var Base = /** @class */ (function () {
    function Base() {
        this.k = 4;
    }
    return Base;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        var _this = 
        // Prints a wrong value in ES5; throws exception in ES6
        _super.call(this) || this;
        console.log(_this.k);
        return _this;
    }
    return Derived;
}(Base));
var myDerived = new Derived();
console.log(myDerived);
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.check = function (s) {
        return this[s];
    };
    return MyClass;
}());
var myMyClass = new MyClass();
myMyClass['test'] = true;
myMyClass.test2 = true;
myMyClass.check('list');
console.log(myMyClass.check('test'));
console.log(myMyClass.check('test2'));
var Dog = /** @class */ (function () {
    function Dog() {
    }
    return Dog;
}());
var AnimalHouse = /** @class */ (function () {
    function AnimalHouse(animal) {
        this.resident = animal;
    }
    return AnimalHouse;
}());
var DogHouse = /** @class */ (function (_super) {
    __extends(DogHouse, _super);
    function DogHouse(dog) {
        return _super.call(this, dog) || this;
    }
    return DogHouse;
}(AnimalHouse));
var myDog = new Dog();
myDog.breed = 'whow';
var myDogHouse = new DogHouse(myDog);
var anim = myDogHouse;
//myDogHouse.resident = myDog;
console.log(myDogHouse);
console.log(anim);
var Base1 = /** @class */ (function () {
    function Base1() {
        this.m = 10;
    }
    return Base1;
}());
var Derived1 = /** @class */ (function (_super) {
    __extends(Derived1, _super);
    function Derived1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // No modifier, so default is 'public'
        _this.m = 15;
        return _this;
    }
    return Derived1;
}(Base1));
var d = new Derived1();
console.log(d.m); // OK
var Empty = /** @class */ (function () {
    function Empty() {
    }
    return Empty;
}());
function fn(x) {
    // can't do anything with 'x', so I won't
}
// All OK!
console.log(fn(window));
console.log(fn({}));
console.log(fn(fn));
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
// OK
var p = new Employee();
p.name = 'den';
p.age = 48;
console.log(p);
var Box = /** @class */ (function () {
    function Box() {
    }
    Box.prototype.hasValue = function () {
        return this.value !== undefined;
    };
    return Box;
}());
var box = new Box();
box.value = "Gameboy";
box.value;
if (box.hasValue()) {
    box.value;
}
console.log(box.hasValue());
var FileSystemObject = /** @class */ (function () {
    function FileSystemObject(path, networked) {
        this.path = path;
        this.networked = networked;
    }
    FileSystemObject.prototype.isFile = function () {
        return this instanceof FileRep;
    };
    FileSystemObject.prototype.isDirectory = function () {
        return this instanceof Directory;
    };
    FileSystemObject.prototype.isNetworked = function () {
        return this.networked;
    };
    return FileSystemObject;
}());
var FileRep = /** @class */ (function (_super) {
    __extends(FileRep, _super);
    function FileRep(path, content) {
        var _this = _super.call(this, path, false) || this;
        _this.content = content;
        return _this;
    }
    return FileRep;
}(FileSystemObject));
var Directory = /** @class */ (function (_super) {
    __extends(Directory, _super);
    function Directory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Directory;
}(FileSystemObject));
var fso = new FileRep("foo/bar.txt", "foo");
var dir = new Directory('/', true);
if (fso.isFile()) {
    fso.content;
}
else if (fso.isDirectory()) {
    fso.children;
}
else if (fso.isNetworked()) {
    fso.host;
}
console.log(fso);
console.log(dir);
var Box1 = /** @class */ (function () {
    function Box1() {
        this.content = "";
    }
    Box1.prototype.sameAs = function (other) {
        return other.content === this.content;
    };
    return Box1;
}());
var DerivedBox = /** @class */ (function (_super) {
    __extends(DerivedBox, _super);
    function DerivedBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.otherContent = "?";
        return _this;
    }
    return DerivedBox;
}(Box1));
var base = new Box1();
var derived = new DerivedBox();
//derived.sameAs(base);
console.log(derived);
var myExample1;
myExample1 = 'test' || 23;
console.log(myExample1.toString());
function createLabel(nameOrId) {
    /*
    class IdLabel implements IdLabel{
        id:number;
        constructor(id: Number) {
            this.id = id;
        }
    }
    var myIdLabel = new IdLabel(55);
    */
    var myIdLabel;
    myIdLabel.id = 435;
    return myIdLabel;
}
;
var udl1 = ['test test2 test3', 'test'];
console.log(udl1);
var udl2 = 345;
console.log(udl2);
var mytype;
var mytype2;
mytype = 'test';
function keepProcessing() {
    while (true) {
        //console.log('I always does something and never ends.');
        //return;
    }
}
//mytype2 = keepProcessing();
console.log(mytype);
