/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, BigNumberish, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { AlexToken, AlexTokenInterface } from '../../contracts/AlexToken';

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_initialSupply',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040523480156200001157600080fd5b5060405162000c4738038062000c47833981016040819052620000349162000241565b604080518082018252600981526820b632bc2a37b5b2b760b91b602080830191825283518085019094526004845263082988ab60e31b90840152815191929162000081916003916200019b565b508051620000979060049060208401906200019b565b505050620000ac3382620000b360201b60201c565b50620002bc565b6001600160a01b0382166200010e5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200012291906200025a565b90915550506001600160a01b03821660009081526020819052604081208054839290620001519084906200025a565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001a9906200027f565b90600052602060002090601f016020900481019282620001cd576000855562000218565b82601f10620001e857805160ff191683800117855562000218565b8280016001018555821562000218579182015b8281111562000218578251825591602001919060010190620001fb565b50620002269291506200022a565b5090565b5b808211156200022657600081556001016200022b565b60006020828403121562000253578081fd5b5051919050565b600082198211156200027a57634e487b7160e01b81526011600452602481fd5b500190565b600181811c908216806200029457607f821691505b60208210811415620002b657634e487b7160e01b600052602260045260246000fd5b50919050565b61097b80620002cc6000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80633950935111610081578063a457c2d71161005b578063a457c2d714610187578063a9059cbb1461019a578063dd62ed3e146101ad57600080fd5b8063395093511461014357806370a082311461015657806395d89b411461017f57600080fd5b806318160ddd116100b257806318160ddd1461010f57806323b872dd14610121578063313ce5671461013457600080fd5b806306fdde03146100ce578063095ea7b3146100ec575b600080fd5b6100d66101e6565b6040516100e39190610893565b60405180910390f35b6100ff6100fa36600461086a565b610278565b60405190151581526020016100e3565b6002545b6040519081526020016100e3565b6100ff61012f36600461082f565b610290565b604051601281526020016100e3565b6100ff61015136600461086a565b6102b4565b6101136101643660046107dc565b6001600160a01b031660009081526020819052604090205490565b6100d66102f3565b6100ff61019536600461086a565b610302565b6100ff6101a836600461086a565b6103b1565b6101136101bb3660046107fd565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101f59061090a565b80601f01602080910402602001604051908101604052809291908181526020018280546102219061090a565b801561026e5780601f106102435761010080835404028352916020019161026e565b820191906000526020600020905b81548152906001019060200180831161025157829003601f168201915b5050505050905090565b6000336102868185856103bf565b5060019392505050565b60003361029e858285610517565b6102a98585856105a9565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061028690829086906102ee9087906108e6565b6103bf565b6060600480546101f59061090a565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156103a45760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6102a982868684036103bf565b6000336102868185856105a9565b6001600160a01b03831661043a5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161039b565b6001600160a01b0382166104b65760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161039b565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146105a357818110156105965760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161039b565b6105a384848484036103bf565b50505050565b6001600160a01b0383166106255760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161039b565b6001600160a01b0382166106a15760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161039b565b6001600160a01b038316600090815260208190526040902054818110156107305760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161039b565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906107679084906108e6565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516107b391815260200190565b60405180910390a36105a3565b80356001600160a01b03811681146107d757600080fd5b919050565b6000602082840312156107ed578081fd5b6107f6826107c0565b9392505050565b6000806040838503121561080f578081fd5b610818836107c0565b9150610826602084016107c0565b90509250929050565b600080600060608486031215610843578081fd5b61084c846107c0565b925061085a602085016107c0565b9150604084013590509250925092565b6000806040838503121561087c578182fd5b610885836107c0565b946020939093013593505050565b6000602080835283518082850152825b818110156108bf578581018301518582016040015282016108a3565b818111156108d05783604083870101525b50601f01601f1916929092016040019392505050565b6000821982111561090557634e487b7160e01b81526011600452602481fd5b500190565b600181811c9082168061091e57607f821691505b6020821081141561093f57634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220947d07cc95750b05d9072c03793899b2a9ad0c97933d3e950aa2f551c4bf2e0064736f6c63430008040033';

type AlexTokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AlexTokenConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AlexToken__factory extends ContractFactory {
  constructor(...args: AlexTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<AlexToken> {
    return super.deploy(_initialSupply, overrides || {}) as Promise<AlexToken>;
  }
  override getDeployTransaction(
    _initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_initialSupply, overrides || {});
  }
  override attach(address: string): AlexToken {
    return super.attach(address) as AlexToken;
  }
  override connect(signer: Signer): AlexToken__factory {
    return super.connect(signer) as AlexToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AlexTokenInterface {
    return new utils.Interface(_abi) as AlexTokenInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): AlexToken {
    return new Contract(address, _abi, signerOrProvider) as AlexToken;
  }
}
