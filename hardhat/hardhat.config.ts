import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config({ path: "../.env" });

const {PRIVATE_KEY} = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.28",

  networks: {
    arcTestnet: {
      url: "https://arc-testnet.drpc.org/",
      chainId: 5042002,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    liskSepolia: {
      url: "https://lisk-sepolia.drpc.org",
      chainId: 4202,
      accounts: [`0x${PRIVATE_KEY}`],
    }
  }
};

export default config;
