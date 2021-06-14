
let add = function(a, b) {
    return a + b
};

add(2, 3)
let func = add

/*
<MyComponent f={add} />
<MyComponent f={func} />
*/

let f = function(func) {
    return func(1, 2)
}

f(func)

