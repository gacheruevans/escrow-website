// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.19;

contract Escrow {
    address agent;
    mapping(address => uint256) public deposits;

    modifier onlyAgent() {
        require(msg.sender == agent);
        _;
    }

    constructor() {
        agent = msg.sender;
    }

    function deposit(address payee) public payable onlyAgent {
        uint256 amount = msg.value;
        deposits[payee] = deposits[payee] + amount;
    }

    function withdraw(address payable payee) public onlyAgent {
        uint256 payment = deposits[payee];
        deposits[payee] = 0;
        payee.transfer(payment);
    }
}
