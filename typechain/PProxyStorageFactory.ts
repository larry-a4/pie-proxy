/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { PProxyStorage } from "./PProxyStorage";

export class PProxyStorageFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(): Promise<PProxyStorage> {
    return super.deploy() as Promise<PProxyStorage>;
  }
  getDeployTransaction(): UnsignedTransaction {
    return super.getDeployTransaction();
  }
  attach(address: string): PProxyStorage {
    return super.attach(address) as PProxyStorage;
  }
  connect(signer: Signer): PProxyStorageFactory {
    return super.connect(signer) as PProxyStorageFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PProxyStorage {
    return new Contract(address, _abi, signerOrProvider) as PProxyStorage;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_value",
        type: "address"
      }
    ],
    name: "addressToBytes32",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_value",
        type: "bytes32"
      }
    ],
    name: "bytes32ToAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_value",
        type: "bytes32"
      }
    ],
    name: "bytes32ToString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32"
      }
    ],
    name: "readAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32"
      }
    ],
    name: "readBool",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32"
      }
    ],
    name: "readString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32"
      }
    ],
    name: "storageRead",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_value",
        type: "string"
      }
    ],
    name: "stringToBytes32",
    outputs: [
      {
        internalType: "bytes32",
        name: "result",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506106e6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80639201de551161005b5780639201de551461023c5780639d84ae69146102e3578063bb15ac8e14610351578063cfb519281461039757610088565b80631bc289601461008d57806337a440e6146101345780635ced058e1461017657806382c947b7146101e4575b600080fd5b6100b9600480360360208110156100a357600080fd5b8101908080359060200190929190505050610466565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100f95780820151818401526020810190506100de565b50505050905090810190601f1680156101265780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101606004803603602081101561014a57600080fd5b8101908080359060200190929190505050610480565b6040518082815260200191505060405180910390f35b6101a26004803603602081101561018c57600080fd5b8101908080359060200190929190505050610490565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610226600480360360208110156101fa57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061049d565b6040518082815260200191505060405180910390f35b6102686004803603602081101561025257600080fd5b81019080803590602001909291905050506104c0565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102a857808201518184015260208101905061028d565b50505050905090810190601f1680156102d55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61030f600480360360208110156102f957600080fd5b8101908080359060200190929190505050610653565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61037d6004803603602081101561036757600080fd5b810190808035906020019092919050505061066d565b604051808215151515815260200191505060405180910390f35b610450600480360360208110156103ad57600080fd5b81019080803590602001906401000000008111156103ca57600080fd5b8201836020820111156103dc57600080fd5b803590602001918460018302840111640100000000831117156103fe57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610685565b6040518082815260200191505060405180910390f35b606061047961047483610480565b6104c0565b9050919050565b6000808254905080915050919050565b60008160001c9050919050565b60008173ffffffffffffffffffffffffffffffffffffffff1660001b9050919050565b60608060206040519080825280601f01601f1916602001820160405280156104f75781602001600182028038833980820191505090505b509050600080905060008090505b60208110156105a15760008160080260020a8660001c0260001b9050600060f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614610593578084848151811061055b57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535082806001019350505b508080600101915050610505565b506060816040519080825280601f01601f1916602001820160405280156105d75781602001600182028038833980820191505090505b50905060008090505b82811015610647578381815181106105f457fe5b602001015160f81c60f81b82828151811061060b57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080806001019150506105e0565b50809350505050919050565b600061066661066183610480565b610490565b9050919050565b6000600160001b61067d83610480565b149050919050565b600060608290506000815114156106a2576000801b9150506106ab565b60208301519150505b91905056fea2646970667358221220cc81ffc456f81b989f125eaf89a41f41f168f88ce2228df6ba36b25b76a57cdd64736f6c63430006020033";
