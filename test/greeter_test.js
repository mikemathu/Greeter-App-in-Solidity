// REFERE THE  COMMENTED CODE BELOW FOR  THE COMMENTS

// const GreeterContract = artifacts.require("Greeter"); //A way to load and interact with our contact provided by truffle through 'artifacts.require' function. Pass in the name of the contract
// contract("Greeter", () => {  //fresh contracts will be deployed before the tests nested within are executed.Helps prevent state from being shared between different test groups
//  it("has been deployed successfully", async () => { //Every interaction with the blockchain is going to be asynchronous, so instead of using Promises and the Promise.prototype.then method, we will take advan‐tage of the async/await syntax now available in JavaScript.
//  const greeter = await GreeterContract.deployed();
//  assert(greeter, "contract was not deployed");  //If the greeter is truthy (exists), our test will pass.
//  });
// });

const GreeterContract = artifacts.require("Greeter");

contract("Greeter", () => { 
    it("has been deployed successfully", async () => {
    const greeter = await GreeterContract.deployed();
    assert(greeter, "contract was not deployed");  
    });
});

describe("greet()", () => {
    it("returns 'Hello, World!'", async () => {
    const greeter = await GreeterContract.deployed();
    const expected = "Hello, World!";
    const actual = await greeter.greet();
    assert.equal(actual, expected, "greeted with 'Hello, World!'");
    });
});   

contract("Greeter: update greeting", () => {
    describe("setGreeting(string)", () => {
        it("sets greeting to passed in string", async () => {
        const greeter = await GreeterContract.deployed()
        const expected = "Hi there!"; //we set a variable to hold our expected return value
        await greeter.setGreeting(expected); //passing the expected return value string
        const actual = await greeter.greet(); //Update the greeting and ask the greet for its return value. The call is asynchronous thus the await keyword
        assert.equal(actual, expected, "greeting was not updated"); //check the value from greet against our expected value
        });
    });
});
   