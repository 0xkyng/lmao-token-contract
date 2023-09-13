// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Lmao is ERC20 {

    address public owner;

    constructor() ERC20("LMAO", "LMA") {
        owner = msg.sender;
        _mint(msg.sender, 100 * 1e18);
    }

    function _transfer(
        address from,
        address to,
        uint amount
    ) internal override {
        uint feePerTnx = (amount * 8) /100;
        uint tnxAmount = amount - feePerTnx;

        super._transfer(from, to, tnxAmount);
        super._transfer(from, msg.sender, feePerTnx);
    }
}