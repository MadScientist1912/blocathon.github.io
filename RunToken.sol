// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.5.0;

import "./SafeMath.sol";
import "./Address.sol";
import "./Common.sol";
import "./IXRC1155TokenReceiver.sol";
import "./IXRC1155.sol";


contract RunToken is XRC1155 {
    constructor() XRC1155("RunToken", "Run"){
        _mint(msg.sender, 20*10**6);
    }

    function mintTokens(address account, uint256 amount) public {
        _mint(account, amount);
    }
}



