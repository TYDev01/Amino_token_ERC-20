import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export  default buildModule("Token", (m) => {
    const token = m.contract("Token", ["Amino", "AMI", 18, 100000000]);
    m.call(token, "name");
    m.call(token, "symbol");
    m.call(token, "decimals");
    m.call(token, "totalSupply");
    // m.call(token, "balanceOf", [m.getParameter("deployer")]);

    return { token }
});

