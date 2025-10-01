"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firstName = "Diego";
var isAdmin = false;
var age = 30;
var duties = ['write code', 'fix bugs'];
var car = null;
var bicycle = undefined;
var work = function () {
    console.log("working...");
};
// BigInt
//let salary = 50n;
// Identificador único e inmutable
var icon = Symbol("icon");
var all = [firstName, isAdmin, age, duties, car, bicycle, work, icon];
for (var _i = 0, all_1 = all; _i < all_1.length; _i++) {
    var item = all_1[_i];
    console.log(String(item) + 'is ' + typeof item);
}
