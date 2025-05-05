const {returnAddComponents} = require ("./math");
//testing comment
test ('adds 2 + 3 to equal 5', () => {
    expect (returnAddComponents(2,3)).toBe(5);
});

test ('adds 5 + 3 to equal 8', () => {
    expect (returnAddComponents(5,3)).toBe(8);
});
