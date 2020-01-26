/*
    functions

    BNF: <function_declaration> ::=
    function <identifier>(<declaration_list>){
        <statements>
    }

*/

function foo(a, b=23, c=42){
    // EC6 introduced default values
    return a*b*c;
}

console.log(foo(2));           // 1932
console.log(foo(2, 3));        // 252
console.log(foo(2, 3, 4));     // 24

/*
    Rest parameters
    A rest parameter is indicated with 3 dots.
    It is an Array containing all parameters passed from that point until the
    end in the function call

    <rest_param> ::= ...<identifier>
*/
function bar(a, ...b){
    const sum = b.reduce((x, y) => x + y)
    return a*sum;
}
console.log(bar(2,4,5,6,7));   // 44
