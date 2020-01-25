/*
    functions

    BNF:
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
