// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract Wlmao is ERC20 {

    IERC20 lmao;

    constructor(address _lmao) ERC20("Wrapped Lmao", "WLM") {
        lmao = IERC20(_lmao);
    }

    function deposit(uint amount) external{
        bool success = lmao.transferFrom(msg.sender, address(this), amount);
        require(success, "Transfer failed");
        uint mintAmntPerTx = (amount * 92) / 100;
        _mint(msg.sender, mintAmntPerTx);
    }

    function withdrawal(uint amount) external {
        uint withdrawableBalance = balanceOf(address(this));
        require(withdrawableBalance >= amount, "Amount too high");
        _burn(msg.sender, amount);
        lmao.transfer(msg.sender, amount);
    }
}

