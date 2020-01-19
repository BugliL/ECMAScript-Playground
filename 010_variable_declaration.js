/*
  Starting with variable declaration and their differences

  BNF:
  <var_declaration> ::= let <identifier> [= <expr>] ;
        |     var <identifier> [= <expr>] ;
        |     const <identifier> = <expr> ;


  The 3 kinds of declaration differs by scope and mutability.
  Const declare a function scope constant (constant binding but not costant value)
  Let declare a block scope variable.
  Var declare a function scope variable.

  Var declaration, wherever it is, start it's scope from the beginning of the
  function block, or the file if outside all. This behaviour is called hoisting.
*/

'use strict'; // Can't use undeclared variables
const x = 13; // Const must be used as much as possible

function foo_let() {
    // i as DIFFERENT reference for all loop
    // so when it's expression is valued it result 0,1,2,....
    var aList = [];
    for (let i = 0; i < 5; ++i) {
        aList.push(() => {
            return i;
        });
    }
    return aList;
}
console.log(foo_let().map((f) => { return f() })) // [0,1,2,3,4,5]

function foo_var() {
    // i as the SAME reference for all loops
    // so when it's expression is valued it result 5
    var aList = [];
    for (var i = 0; i < 5; ++i) {
        aList.push(() => {
            return i;
        });
    }
    return aList;
}
console.log(foo_var().map((f) => { return f() })) // [5,5,5,5,5]
