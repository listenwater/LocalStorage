
const util = require('./../src/util');
const _ = require('./ls.t.function');

const _num11 = '123';
const _num12 = 123;
const _num21 = '1234';
const _num22 = 1;

const _obj11 = '{"name":"realign","age":23}';
const _obj12 = {
    name: "realign",
    age: 23
};

const _obj21 = '{"name":"realign"}';
const _obj22 = {
	name: "realign",
    age: 23
};

const _arr11 = '[1,2,"3"]';
const _arr12 = [1, 2, '3'];
const _arr21 = '[1,2,"3"]';
const _arr22 = [1, 2, '3', 4];

test('util', function() {
     expect(util.support()).toBe(false);
});

test('jsonParseNumber1', function() {
     expect(util.jsonParse(_num11) === _num12).toBe(true);
});

test('jsonParseNumber2', function() {
    expect(util.jsonParse(_num21) === _num22).toBe(false);
});

test('jsonParseObject1', function() {
    expect(_.cmp(util.jsonParse(_obj11), _obj12)).toBe(true);
});

test('jsonParseObject2', function() {
    expect(_.cmp(util.jsonParse(_obj21), _obj22)).toBe(false);
});

test('jsonParseArray1', function() {
    expect(_.cmp(util.jsonParse(_arr11), _arr12)).toBe(true);
});

test('jsonParseArray2', function() {
    expect(_.cmp(util.jsonParse(_arr21), _arr22)).toBe(false);
});