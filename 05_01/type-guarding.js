const getSomeValue = () => {
    return 3;
};
export function Demo() {
    let value = getSomeValue();
    if (typeof value !== "number" &&
        typeof value !== "string") {
        console.log(value.name);
    }
    if (value instanceof Object) {
        console.log(value.name);
    }
    const myObject = {};
    if (myObject.foobar) {
        console.log(myObject.foobar.foo);
    }
}
