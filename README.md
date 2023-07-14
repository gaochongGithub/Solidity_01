# Solidity_02
合约编译，开源，测试，gas消耗，验证测试程度

npm install hardhat-gas-reporter --save-dev
测试gas消耗
需要再hardhat.config配置gasReporter，
并且在https://pro.coinmarketcap.com/account获取API_KEY
直接运行测试demp就可以执行

npm install --save-dev solidity-coverage
需要再hardhat.config导入solidity-coverage，
然后运行npx hardhat coverage
