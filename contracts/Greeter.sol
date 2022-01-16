// SPDX-License-Identifier: MIT

// pragma solidity >= 0.4.0 < 0.7.0;
pragma solidity >= 0.4.0;//compiler instruction, telling the Solidity compiler what version our code is compatible with
contract Greeter { //data and functions/methods defined in here will be isolated to this contract 
    string private _greeting = 'Hello, World!'; //State Variable. Stores data in contract's persisted storage which exist for the entire lifetime of our contract.

    address private _owner;

    constructor() public {
        _owner = msg.sender;
    }
    
    modifier onlyOwner() { //modifiers syntax looks like function but without the visibility declaration
        require(
        msg.sender == _owner,
        "Ownable: caller is not the owner"
        );
        _; // where the function that is being modified will be called.
       }

    function greet() external view returns(string memory) {
        return _greeting;
        }  
    
    //setGreeting function updates the state ot our contract with a new greeting
    function setGreeting(string calldata greeting) external onlyOwner { //string value is expected and will be refferd by indetifier 'greeting'. The being passed in is not part of the contract’s persisted storage, but is included as part of    the calldata and must be labeled with the data location 'calldata'.
    _greeting = greeting; 
    }

    // Getter function to Add ownership
    function owner() public view returns(address) {
        return _owner;
        }
       
}
