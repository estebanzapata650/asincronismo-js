const fnAsync = () =>{
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('OK Async'), 2000)
            : reject(new Error("Error Async"));
    });
};

const anotherFuntion = async () =>{
    const something = await fnAsync();
    console.log(something);
    console.log('Hello');
}

console.log('Before');
anotherFuntion();
console.log('After');

/*
Before
After
OK Async
Hello 
*/