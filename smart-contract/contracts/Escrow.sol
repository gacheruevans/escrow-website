// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.19;

contract Escrow {
    address agent;
    mapping(address => unit256) public deposits;

    modifier onlyAgent() {
        require(msg.sender == agent);
        _;
    }

    constructor() public {
        agent = msg.sender;
    }

    function deposit(address payee) public payable onlyAgent {
        uint256 amount = msg.value;
        deposits[payee] = deposit[payee] + amount;
    }

    function withdraw(address payable payee) public onlyAgent {
        unit256 payment = deposit[payee];
        deposite[payee] = 0;
        payee.transfer(payment);
    }
}
