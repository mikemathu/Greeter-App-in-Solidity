// SPDX-License-Identifier: MIT

// pragma solidity >= 0.4.0 < 0.7.0;
pragma solidity >= 0.4.0;//compiler instruction, telling the Solidity compiler what version our code is compatible with
contract Greeter { //data and functions/methods defined in here will be isolated to this contract 
    string private _greeting = 'Hello, World!'; //State Variable. Stores data in contract's persisted storage which exist for the entire lifetime of our contract.

    function greet() external view returns(string memory) {
        return _greeting;
        }  
    
    //setGreeting function updates the state ot our contract with a new greeting
    function setGreeting(string calldata greeting) external { //string value is expected and will be refferd by indetifier 'greeting'. The being passed in is not part of the contract’s persisted storage, but is included as part of    the calldata and must be labeled with the data location 'calldata'.
    _greeting = greeting; 

    }
}
