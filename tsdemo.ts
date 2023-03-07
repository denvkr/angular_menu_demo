import { Point } from './Point.js';
import { getWidget } from './getWidget.js';
//import {getWidget} from './point.js';
type WindowStates = "open" | "closed" | "minimized";
var myWindowStates:WindowStates;

myWindowStates = "open";

class VirtualPoint {
  x: number;
  y: number;
   scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

var myObjectWithNameArray:ObjectWithNameArray;
myObjectWithNameArray=[{name:'a1'},{name:'a2'}];

//declare const backpack: Backpack<Object>;
//var object = backpack.get();

function getLength(obj: string | string[]) {
  return obj.length;
}

function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
  }
  return obj;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

function logVPoint(p: VirtualPoint) {
  console.log(`${p.x}, ${p.y}`);
}

function logBackpack(bp:Backpack<Object>){
	console.log(`${bp.get()}`);
}

console.log('myWindowStates',myWindowStates,getLength(myWindowStates),wrapInArray(myWindowStates),myObjectWithNameArray);
var point:any = {x:12, y:26, add:function(Obj:Object){}, get:function(){}};
//logPoint(point);

//var bp:Backpack<Point> = point;
const newVPoint = new VirtualPoint(13, 56);
logVPoint(newVPoint);

let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2

function f([first, second]: [number, number],reverse:boolean) {
if (reverse){
	[ second,first ] = [first, second];
  console.log(first);
  console.log(second);	
} else {
  console.log(first);
  console.log(second);	
	
}
}
f([1, 2],true);

let [first1, ...rest1] = [1, 2, 3, 4];
console.log(first1); // outputs 1
console.log(rest1); // outputs [ 2, 3, 4 ]

let tuple: [number, string, boolean] = [7, "hello", true];

let [a, b, c] = tuple; // a: number, b: string, c: boolean
console.log(a, b, c);

//let { a1, b1 }:Object;
let { b1, a1 } = { a1: "baz", b1: 101 };
console.log({ a1, b1 });

let o = {
  a: "foo",
  b: 12,
  c: "bar",
};

let { a: newName1, b: newName2 }: { a: string; b: number } = o;
console.log({newName1,newName2});

function f1({ a = "", b = 0, c:string }=o): void {
  // ...
  console.log({ a, b, c });
}
f1(o);

function f2({ a = "testA", b = 0, c="testC" }={}): void {
  // ...
  console.log({ a, b, c });
}
f2();

function f3({ a, b = 0 } = { a: "" }): void {
  // ...
}
f3({ a: "yes" }); // ok, default b = 0
f3(); // ok, default to { a: "" }, which then defaults b = 0
//f3({}); // error, 'a' is required if you supply an argument

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };
console.log(search);

let first2 = [1, 2];
let second2 = [3, 4];
let bothPlus = [0, ...first2, ...second2, 5];
console.log(bothPlus);

class Greeter {
  name: string = "world";
 
  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }
 
  err() {
    this.name = "not ok";
  }
}
const g = new Greeter();
g.name = "also not ok";
console.log(g);

class Base {
  k = 4;
}
 
class Derived extends Base {
  constructor() {
    // Prints a wrong value in ES5; throws exception in ES6
    super();
    console.log(this.k);

  }
}
var myDerived = new Derived();
console.log(myDerived);

class MyClass {
  [s: string]: boolean | ((s: string) => boolean);
 
  check(s: string) {
    return this[s] as boolean;
  }
}

var myMyClass = new MyClass();
myMyClass['test']=true;
myMyClass.test2=true;
myMyClass.check('list');
console.log(myMyClass.check('test'));
console.log(myMyClass.check('test2'));

interface Animal {
  dateOfBirth: any;
}
 
interface Dog extends Animal {
  breed: any;
}

class Dog implements Dog{
	
}
class AnimalHouse {
  resident: Animal;
  constructor(animal: Animal) {
    this.resident = animal;
  }
}
 
class DogHouse extends AnimalHouse {
  // Does not emit JavaScript code,
  // only ensures the types are correct
  declare resident: Dog;
  constructor(dog: Dog) {
    super(dog);
  }
}
var myDog:Dog = new Dog();
myDog.breed='whow';

var myDogHouse = new DogHouse(myDog);
var anim:AnimalHouse =myDogHouse; 
//myDogHouse.resident = myDog;
console.log(myDogHouse);
console.log(anim);

//declare function getWidget(n: number): Point;
//declare function getWidget(s: string): Point[];

//let x: Point = getWidget(43);
//let arr: Point[] = getWidget('array');
//console.log(arr);
/*
function getWidget(s: string): Point[] {
	if (s == 'array'){
		class pnt implements Point{
			  x: number;
  			  y: number;
  			  slf:Object;
  			  add (obj: Object):void{
				this.slf = obj;	
				};
  			   get: () => this; 
		}
		let p = new pnt;
		p.x=10;
		p.y=12;
		p.add(p);
		return [p,p,p];
	}
}
*/
interface GreetingSettings {
  greeting: string;
  duration?: number;
  color?: string;
}

declare function greet(setting: GreetingSettings): void;

class Base1 {
  protected m = 10;
}
class Derived1 extends Base1 {
  // No modifier, so default is 'public'
  m = 15;
}
const d = new Derived1();
console.log(d.m); // OK

class Empty {}
 
function fn(x: Empty) {
  // can't do anything with 'x', so I won't
}
 
// All OK!
console.log(fn(window));
console.log(fn({}));
console.log(fn(fn));

class Person {
  name: string;
  age: number;
}
 
class Employee {
  name: string;
  age: number;
  salary: number;
}
 
// OK
const p: Person = new Employee();
p.name = 'den';
p.age = 48;
console.log(p);

class Box<T> {
  value?: T;
 
  hasValue(): this is { value: T } {
    return this.value !== undefined;
  }
}
 
const box = new Box();
box.value = "Gameboy";
 
box.value;
 
if (box.hasValue()) {
  box.value;
}
console.log(box.hasValue());

class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep;
  }
  isDirectory(): this is Directory {
    return this instanceof Directory;
  }
  isNetworked(): this is Networked & this {
    return this.networked;
  }
  constructor(public path: string, private networked: boolean) {}
}
 
class FileRep extends FileSystemObject {
  constructor(path: string, public content: string) {
    super(path, false);
  }
}
 
class Directory extends FileSystemObject {
  children: FileSystemObject[];
}
 
interface Networked {
  host: string;
}
 
const fso: FileSystemObject = new FileRep("foo/bar.txt", "foo");
 
const dir:Directory = new Directory('/',true);
  
if (fso.isFile()) {
  fso.content;
} else if (fso.isDirectory()) {
  fso.children;
} else if (fso.isNetworked()) {
  fso.host;
}

console.log(fso);
console.log(dir);

class Box1 {
  content: string = "";
  sameAs(other: this) {
    return other.content === this.content;
  }
}
 
class DerivedBox extends Box1 {
  otherContent: string = "?";
}
 
const base = new Box1();
const derived = new DerivedBox();
//derived.sameAs(base);
console.log(derived);

type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

interface Email {
  message: string;
}

interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}
type DogMessageContents = MessageOf<Dog>;
 
type Example1 = Dog extends Animal ? number : string;
var myExample1:Example1;
myExample1 = 'test'||23;
console.log(myExample1.toString());

interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;
  
function createLabel(nameOrId: string | number): IdLabel | NameLabel{
	/*
	class IdLabel implements IdLabel{
		id:number;
		constructor(id: Number) {
    		this.id = id;
  		}
	}
	var myIdLabel = new IdLabel(55);
	*/
	var myIdLabel:IdLabel;
	myIdLabel.id = 435;
	return myIdLabel;
};

type Flatten<T> = T extends any[] ? T[number] : T;
 
// Extracts out the element type.
type Str = Flatten<string[]>;
 
// Leaves the type alone.
type Num = Flatten<number>;

var udl1:Str[] | Num= ['test test2 test3','test'];
console.log(udl1);

var udl2:Num = 345;
console.log(udl2);

var mytype:MessageOf<Email>;
var mytype2:DogMessageContents;
mytype = 'test';
function keepProcessing(): never { 
            while (true) { 
         //console.log('I always does something and never ends.');
         //return;
     }
}
//mytype2 = keepProcessing();
console.log(mytype);

declare function stringOrNum(x: string): number;
declare function stringOrNum(x: number): string;
declare function stringOrNum(x: string | number): string | number;

type T1 = ReturnType<typeof stringOrNum>;