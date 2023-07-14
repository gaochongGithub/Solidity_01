// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;



contract SimpleStorage {
    uint256 favaoiteNumber;

    struct People {
        uint256 favaoiteNumber;
        string name;
    }

    People[] public people;

    mapping(string => uint256) public nameToFavaoiteNumber;

    function store(uint256 _favaoiteNumber) public {
        favaoiteNumber = _favaoiteNumber;        
    }

    function retrieve() public view returns (uint256) {
        return favaoiteNumber;
    }

    function addPerson(string memory _name, uint256 _favaoiteNumber) public {
        people.push(People(_favaoiteNumber, _name));
        nameToFavaoiteNumber[_name] = _favaoiteNumber;
    }
}