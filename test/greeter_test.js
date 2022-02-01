// REFERE THE  COMMENTED CODE BELOW FOR  THE COMMENTS

// const GreeterContract = artifacts.require("Greeter"); //A way to load and interact with our contact provided by truffle through 'artifacts.require' function. Pass in the name of the contract
// contract("Greeter", () => {  //fresh contracts will be deployed before the tests nested within are executed.Helps prevent state from being shared between different test groups
//  it("has been deployed successfully", async () => { //Every interaction with the blockchain is going to be asynchronous, so instead of using Promises and the Promise.prototype.then method, we will take advan‐tage of the async/await syntax now available in JavaScript.
//  const greeter = await GreeterContract.deployed();
//  assert(greeter, "contract was not deployed");  //If the greeter is truthy (exists), our test will pass.
//  });
// });

const GreeterContract = artifacts.require("Greeter");

contract("Greeter", (accounts) => {  //we pass in the 'accounts' parameter to access to the accounts in out test environment
  describe("deployment", () => {
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

describe("owner()", () => {
    it("returns the address of the owner", async () => {
    const greeter = await GreeterContract.deployed();
    const owner = await greeter.owner();
    assert(owner, "the current owner"); // Is the owner address is the same as the deploy‐ing address?
    });

    it("matches the address that originally deployed the contract", async () => {
        const greeter = await GreeterContract.deployed();
        const owner = await greeter.owner();
        const expected = accounts[0];
        assert.equal(owner, expected, "matches address used to deploy contract");
        });       
});
});

// MAKING THE CONTRACT DYNAMIC
contract("Greeter: update greeting", (accounts) => {
    describe("setGreeting(string)", () => {
        describe("when message is sent by the owner", () => {
        it("sets greeting to passed in string", async () => {
        const greeter = await GreeterContract.deployed()
        const expected = "The owner changed the message"; //we set a variable to hold our expected return value
        await greeter.setGreeting(expected); //passing the expected return value string
        const actual = await greeter.greet(); //Update the greeting and ask the greet for its return value. The call is asynchronous thus the await keyword
        assert.equal(actual, expected, "greeting was not updated"); //check the value from greet against our expected value
        });
    });
});

describe("when message is sent by another account", () => {
    it("does not set the greeting", async () => {
    const greeter = await GreeterContract.deployed()
    const expected = await greeter.greet();
    try {
        await greeter.setGreeting("Not the owner", { from: accounts[1] });
        } catch(err) {
        const errorMessage = "Ownable: caller is not the owner"
        assert.equal(err.reason, errorMessage, "greeting should not update");
        return;
        }
        assert(false, "greeting should not update");
        });
        });
    });
       
   
