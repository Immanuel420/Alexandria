/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { AlexLibrary, AlexLibraryInterface } from '../../contracts/AlexLibrary';

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract AlexAuthor',
        name: '_author',
        type: 'address',
      },
      {
        internalType: 'contract AlexLibraryCard',
        name: '_card',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'author',
    outputs: [
      {
        internalType: 'contract AlexAuthor',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'card',
    outputs: [
      {
        internalType: 'contract AlexLibraryCard',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'string[]',
        name: '_answer',
        type: 'string[]',
      },
    ],
    name: 'checkAnswer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'getRatings',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'string[]',
        name: '_answer',
        type: 'string[]',
      },
    ],
    name: 'learnProgram',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_title',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_contentURI',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_questionCID',
        type: 'string',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'rewardToken',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'rewardPerAddress',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'rewardAddressCap',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'rewardDistributed',
            type: 'uint256',
          },
        ],
        internalType: 'struct AlexLibrary.Reward',
        name: '_reward',
        type: 'tuple',
      },
      {
        internalType: 'string[]',
        name: '_answers',
        type: 'string[]',
      },
    ],
    name: 'newProgram',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'programs',
    outputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'title',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'contentURI',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'questionCID',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'certificate',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'rewardToken',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'rewardPerAddress',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'rewardAddressCap',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'rewardDistributed',
            type: 'uint256',
          },
        ],
        internalType: 'struct AlexLibrary.Reward',
        name: 'reward',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rating',
        type: 'uint256',
      },
    ],
    name: 'rateProgram',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'ratings',
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
];

const _bytecode =
  '0x60806040523480156200001157600080fd5b5060405162003a8038038062003a80833981016040819052620000349162000066565b600180546001600160a01b039384166001600160a01b03199182161790915560028054929093169116179055620000bd565b6000806040838503121562000079578182fd5b82516200008681620000a4565b60208401519092506200009981620000a4565b809150509250929050565b6001600160a01b0381168114620000ba57600080fd5b50565b6139b380620000cd6000396000f3fe60806040523480156200001157600080fd5b5060043610620000b05760003560e01c8063482ef360116200007f5780639ec8f8aa11620000625780639ec8f8aa146200017a578063a6c3e6b914620001a7578063d18e250914620001bb57600080fd5b8063482ef360146200012857806392db2816146200014e57600080fd5b806304e613dc14620000b55780631234b88114620000ce5780632cddc36714620000e557806347de8d4514620000fc575b600080fd5b620000cc620000c636600462001791565b620001e1565b005b620000cc620000df36600462001748565b620003e9565b620000cc620000f6366004620015eb565b620009c1565b620001136200010d36600462001748565b62000e03565b60405190151581526020015b60405180910390f35b6200013f6200013936600462001791565b6200101e565b6040519081526020016200011f565b620001656200015f36600462001716565b62001050565b6040516200011f97969594939291906200188b565b6002546200018e906001600160a01b031681565b6040516001600160a01b0390911681526020016200011f565b6001546200018e906001600160a01b031681565b620001d2620001cc36600462001716565b6200127f565b6040516200011f919062001845565b6002546040516370a0823160e01b81523360048201526000916001600160a01b0316906370a082319060240160206040518083038186803b1580156200022657600080fd5b505afa1580156200023b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200026191906200172f565b11620002c45760405162461bcd60e51b815260206004820152602760248201527f41646472657373206973206e6f7420726567697374657265642061732061206c60448201526632b0b93732b91760c91b60648201526084015b60405180910390fd5b6000828152600360205260408082206005015490516370a0823160e01b81523360048201526001600160a01b03909116906370a082319060240160206040518083038186803b1580156200031757600080fd5b505afa1580156200032c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200035291906200172f565b11620003c65760405162461bcd60e51b8152602060048201526024808201527f43616e6e6f74207261746520776974686f75742074686520636572746966696360448201527f6174652e000000000000000000000000000000000000000000000000000000006064820152608401620002bb565b600091825260056020908152604083208054600181018255908452922090910155565b6002546040516370a0823160e01b81523360048201526000916001600160a01b0316906370a082319060240160206040518083038186803b1580156200042e57600080fd5b505afa15801562000443573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200046991906200172f565b11620004c85760405162461bcd60e51b815260206004820152602760248201527f41646472657373206973206e6f7420726567697374657265642061732061206c60448201526632b0b93732b91760c91b6064820152608401620002bb565b6000828152600360209081526040808320815160e0810183528154815260018201546001600160a01b03169381019390935260028101805491928401916200051090620019f0565b80601f01602080910402602001604051908101604052809291908181526020018280546200053e90620019f0565b80156200058f5780601f1062000563576101008083540402835291602001916200058f565b820191906000526020600020905b8154815290600101906020018083116200057157829003601f168201915b50505050508152602001600382018054620005aa90620019f0565b80601f0160208091040260200160405190810160405280929190818152602001828054620005d890620019f0565b8015620006295780601f10620005fd5761010080835404028352916020019162000629565b820191906000526020600020905b8154815290600101906020018083116200060b57829003601f168201915b505050505081526020016004820180546200064490620019f0565b80601f01602080910402602001604051908101604052809291908181526020018280546200067290620019f0565b8015620006c35780601f106200069757610100808354040283529160200191620006c3565b820191906000526020600020905b815481529060010190602001808311620006a557829003601f168201915b505050918352505060058201546001600160a01b0390811660208084019190915260408051608081018252600686015490931683526007850154918301919091526008840154828201526009909301546060820152910152905060006200072b848462000e03565b9050806200077c5760405162461bcd60e51b815260206004820152601460248201527f416e7377657220697320696e636f72726563742e0000000000000000000000006044820152606401620002bb565b60c082015160208101516060820180516200079990839062001980565b905250600085815260036020908152604091829020835160068201805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0390921691821790559184015160078201819055848401516008830155606085015160099092019190915591517f095ea7b300000000000000000000000000000000000000000000000000000000815230600482015260248101929092529063095ea7b390604401602060405180830381600087803b1580156200085757600080fd5b505af11580156200086c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620008929190620015c2565b50805160208201516040517f23b872dd00000000000000000000000000000000000000000000000000000000815230600482015233602482015260448101919091526001600160a01b03909116906323b872dd90606401602060405180830381600087803b1580156200090457600080fd5b505af115801562000919573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200093f9190620015c2565b5060a08301516040517f40d097c30000000000000000000000000000000000000000000000000000000081523360048201526001600160a01b03909116906340d097c390602401600060405180830381600087803b158015620009a157600080fd5b505af1158015620009b6573d6000803e3d6000fd5b505050505050505050565b6001546040516370a0823160e01b81523360048201526000916001600160a01b0316906370a082319060240160206040518083038186803b15801562000a0657600080fd5b505afa15801562000a1b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000a4191906200172f565b1162000ab65760405162461bcd60e51b815260206004820152602760248201527f41646472657373206973206e6f74207265676973746572656420617320616e2060448201527f617574686f722e000000000000000000000000000000000000000000000000006064820152608401620002bb565b62000ac5600080546001019055565b600080549050600030828b8b60405162000adf90620012e3565b62000aee9493929190620017ff565b604051809103906000f08015801562000b0b573d6000803e3d6000fd5b509050600084606001818152505060006040518060e00160405280848152602001336001600160a01b031681526020018c8c8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250505090825250604080516020601f8d018190048102820181019092528b815291810191908c908c9081908401838280828437600092019190915250505090825250604080516020601f8b0181900481028201810190925289815291810191908a908a908190840183828082843760009201829052509385525050506001600160a01b0385811660208085019190915260409384018a90528783526003815291839020845181558483015160018201805473ffffffffffffffffffffffffffffffffffffffff19169190931617909155918301518051939450849362000c5a9260028501920190620012f1565b506060820151805162000c78916003840191602090910190620012f1565b506080820151805162000c96916004840191602090910190620012f1565b5060a08201516005820180546001600160a01b0392831673ffffffffffffffffffffffffffffffffffffffff199182161790915560c09093015180516006840180549190931694169390931790556020808301516007830155604080840151600884015560609093015160099092019190915560008581526004825291909120855162000d269287019062001380565b5084600001516001600160a01b03166323b872dd33308860200151896040015162000d5291906200199b565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b1681526001600160a01b0393841660048201529290911660248301526044820152606401602060405180830381600087803b15801562000dba57600080fd5b505af115801562000dcf573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000df59190620015c2565b505050505050505050505050565b600082815260046020908152604080832080548251818502810185019093528083528493849084015b8282101562000ee257838290600052602060002001805462000e4e90620019f0565b80601f016020809104026020016040519081016040528092919081815260200182805462000e7c90620019f0565b801562000ecd5780601f1062000ea15761010080835404028352916020019162000ecd565b820191906000526020600020905b81548152906001019060200180831162000eaf57829003601f168201915b50505050508152602001906001019062000e2c565b505050509050825181511462000f3b5760405162461bcd60e51b815260206004820152601d60248201527f616e73776572206c656e677468206973206e6f74206d6174636865642e0000006044820152606401620002bb565b60005b8151811015620010115783818151811062000f6957634e487b7160e01b600052603260045260246000fd5b602002602001015160405160200162000f839190620017e1565b6040516020818303038152906040528051906020012082828151811062000fba57634e487b7160e01b600052603260045260246000fd5b602002602001015160405160200162000fd49190620017e1565b604051602081830303815290604052805190602001201462000ffc5760009250505062001018565b80620010088162001a2d565b91505062000f3e565b5060019150505b92915050565b600560205281600052604060002081815481106200103b57600080fd5b90600052602060002001600091509150505481565b60036020526000908152604090208054600182015460028301805492936001600160a01b03909216926200108490620019f0565b80601f0160208091040260200160405190810160405280929190818152602001828054620010b290620019f0565b8015620011035780601f10620010d75761010080835404028352916020019162001103565b820191906000526020600020905b815481529060010190602001808311620010e557829003601f168201915b5050505050908060030180546200111a90620019f0565b80601f01602080910402602001604051908101604052809291908181526020018280546200114890620019f0565b8015620011995780601f106200116d5761010080835404028352916020019162001199565b820191906000526020600020905b8154815290600101906020018083116200117b57829003601f168201915b505050505090806004018054620011b090620019f0565b80601f0160208091040260200160405190810160405280929190818152602001828054620011de90620019f0565b80156200122f5780601f1062001203576101008083540402835291602001916200122f565b820191906000526020600020905b8154815290600101906020018083116200121157829003601f168201915b5050505060058301546040805160808101825260068601546001600160a01b0390811682526007870154602083015260088701549282019290925260099095015460608601529293921691905087565b600081815260056020908152604091829020805483518184028101840190945280845260609392830182828015620012d757602002820191906000526020600020905b815481526020019060010190808311620012c2575b50505050509050919050565b611f068062001a7883390190565b828054620012ff90620019f0565b90600052602060002090601f0160209004810192826200132357600085556200136e565b82601f106200133e57805160ff19168380011785556200136e565b828001600101855582156200136e579182015b828111156200136e57825182559160200191906001019062001351565b506200137c929150620013e0565b5090565b828054828255906000526020600020908101928215620013d2579160200282015b82811115620013d25782518051620013c1918491602090910190620012f1565b5091602001919060010190620013a1565b506200137c929150620013f7565b5b808211156200137c5760008155600101620013e1565b808211156200137c5760006200140e828262001418565b50600101620013f7565b5080546200142690620019f0565b6000825580601f1062001437575050565b601f016020900490600052602060002090810190620014579190620013e0565b50565b600082601f8301126200146b578081fd5b8135602067ffffffffffffffff808311156200148b576200148b62001a61565b8260051b6200149c8382016200194c565b8481528381019087850183890186018a1015620014b7578788fd5b8793505b86841015620014f957803585811115620014d3578889fd5b620014e38b88838d010162001550565b84525060019390930192918501918501620014bb565b5098975050505050505050565b60008083601f84011262001518578182fd5b50813567ffffffffffffffff81111562001530578182fd5b6020830191508360208285010111156200154957600080fd5b9250929050565b600082601f83011262001561578081fd5b813567ffffffffffffffff8111156200157e576200157e62001a61565b62001593601f8201601f19166020016200194c565b818152846020838601011115620015a8578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215620015d4578081fd5b81518015158114620015e4578182fd5b9392505050565b600080600080600080600080888a0361010081121562001609578485fd5b893567ffffffffffffffff8082111562001621578687fd5b6200162f8d838e0162001506565b909b50995060208c013591508082111562001648578687fd5b620016568d838e0162001506565b909950975060408c01359150808211156200166f578687fd5b6200167d8d838e0162001506565b90975095508591506080605f198401121562001697578485fd5b620016a162001920565b925060608c013591506001600160a01b0382168214620016bf578485fd5b81835260808c0135602084015260a08c0135604084015260c08c0135606084015291935060e08b01359180831115620016f6578384fd5b5050620017068b828c016200145a565b9150509295985092959890939650565b60006020828403121562001728578081fd5b5035919050565b60006020828403121562001741578081fd5b5051919050565b600080604083850312156200175b578182fd5b82359150602083013567ffffffffffffffff81111562001779578182fd5b62001787858286016200145a565b9150509250929050565b60008060408385031215620017a4578182fd5b50508035926020909101359150565b60008151808452620017cd816020860160208601620019bd565b601f01601f19169290920160200192915050565b60008251620017f5818460208701620019bd565b9190910192915050565b6001600160a01b038516815283602082015260606040820152816060820152818360808301376000818301608090810191909152601f909201601f191601019392505050565b6020808252825182820181905260009190848201906040850190845b818110156200187f5783518352928401929184019160010162001861565b50909695505050505050565b60006101408983526001600160a01b03808a166020850152816040850152620018b78285018a620017b3565b91508382036060850152620018cd8289620017b3565b91508382036080850152620018e38288620017b3565b95811660a085015284511660c08401525050602082015160e082015260408201516101008201526060909101516101209091015295945050505050565b6040516080810167ffffffffffffffff8111828210171562001946576200194662001a61565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171562001978576200197862001a61565b604052919050565b6000821982111562001996576200199662001a4b565b500190565b6000816000190483118215151615620019b857620019b862001a4b565b500290565b60005b83811015620019da578181015183820152602001620019c0565b83811115620019ea576000848401525b50505050565b600181811c9082168062001a0557607f821691505b6020821081141562001a2757634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141562001a445762001a4462001a4b565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfe60806040523480156200001157600080fd5b5060405162001f0638038062001f06833981016040819052620000349162000186565b604080518082018252600f81526e416c6578436572746966696361746560881b6020808301918252835180850190945260058452641850d1549560da1b9084015281519192916200008891600091620000e0565b5080516200009e906001906020840190620000e0565b5050600880546001600160a01b0319166001600160a01b0386161790555060098290558051620000d690600a906020840190620000e0565b50505050620002db565b828054620000ee9062000288565b90600052602060002090601f0160209004810192826200011257600085556200015d565b82601f106200012d57805160ff19168380011785556200015d565b828001600101855582156200015d579182015b828111156200015d57825182559160200191906001019062000140565b506200016b9291506200016f565b5090565b5b808211156200016b576000815560010162000170565b6000806000606084860312156200019b578283fd5b83516001600160a01b0381168114620001b2578384fd5b60208581015160408701519295509350906001600160401b0380821115620001d8578384fd5b818701915087601f830112620001ec578384fd5b815181811115620002015762000201620002c5565b604051601f8201601f19908116603f011681019083821181831017156200022c576200022c620002c5565b816040528281528a8684870101111562000244578687fd5b8693505b8284101562000267578484018601518185018701529285019262000248565b828411156200027857868684830101525b8096505050505050509250925092565b600181811c908216806200029d57607f821691505b60208210811415620002bf57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b611c1b80620002eb6000396000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c80635d21b263116100cd578063a22cb46511610081578063c87b56dd11610066578063c87b56dd146102bc578063de25fc17146102cf578063e985e9c5146102d857600080fd5b8063a22cb46514610296578063b88d4fde146102a957600080fd5b806370a08231116100b257806370a082311461024d57806395d89b411461026e5780639a00fdbb1461027657600080fd5b80635d21b263146102325780636352211e1461023a57600080fd5b8063095ea7b31161012457806340d097c31161010957806340d097c3146101f957806342842e0e1461020c57806342966c681461021f57600080fd5b8063095ea7b3146101d157806323b872dd146101e657600080fd5b80630102c5601461015657806301ffc9a71461018657806306fdde03146101a9578063081812fc146101be575b600080fd5b600854610169906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6101996101943660046119ba565b610314565b604051901515815260200161017d565b6101b16103b1565b60405161017d9190611aa1565b6101696101cc3660046119f2565b610443565b6101e46101df366004611991565b6104dd565b005b6101e46101f4366004611847565b61060f565b6101e46102073660046117fb565b610696565b6101e461021a366004611847565b610780565b6101e461022d3660046119f2565b61079b565b6101b1610807565b6101696102483660046119f2565b610895565b61026061025b3660046117fb565b610920565b60405190815260200161017d565b6101b16109ba565b6102606102843660046119f2565b600b6020526000908152604090205481565b6101e46102a4366004611957565b6109c9565b6101e46102b7366004611882565b6109d4565b6101b16102ca3660046119f2565b610a62565b61026060095481565b6101996102e6366004611815565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982167f80ac58cd00000000000000000000000000000000000000000000000000000000148061037757506001600160e01b031982167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806103ab57507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316145b92915050565b6060600080546103c090611b23565b80601f01602080910402602001604051908101604052809291908181526020018280546103ec90611b23565b80156104395780601f1061040e57610100808354040283529160200191610439565b820191906000526020600020905b81548152906001019060200180831161041c57829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166104c15760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006104e882610895565b9050806001600160a01b0316836001600160a01b031614156105725760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084016104b8565b336001600160a01b038216148061058e575061058e81336102e6565b6106005760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016104b8565b61060a8383610a6d565b505050565b6106193382610ae8565b61068b5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f76656400000000000000000000000000000060648201526084016104b8565b61060a838383610bdf565b6008546001600160a01b031633146106f05760405162461bcd60e51b815260206004820152601d60248201527f43616e206f6e6c79206265206d696e7465642062792070726f6772616d00000060448201526064016104b8565b6106f981610920565b156107465760405162461bcd60e51b815260206004820152601f60248201527f416c7265616479206f776e656420746869732063657274696669636174652e0060448201526064016104b8565b600061075160075490565b9050610761600780546001019055565b6000818152600b6020526040902042905561077c8282610dc4565b5050565b61060a838383604051806020016040528060008152506109d4565b336107a582610895565b6001600160a01b0316146107fb5760405162461bcd60e51b815260206004820152601460248201527f4e6f7420616c6c6f77656420746f206275726e2e00000000000000000000000060448201526064016104b8565b61080481610dde565b50565b600a805461081490611b23565b80601f016020809104026020016040519081016040528092919081815260200182805461084090611b23565b801561088d5780601f106108625761010080835404028352916020019161088d565b820191906000526020600020905b81548152906001019060200180831161087057829003601f168201915b505050505081565b6000818152600260205260408120546001600160a01b0316806103ab5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e000000000000000000000000000000000000000000000060648201526084016104b8565b60006001600160a01b03821661099e5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f20616464726573730000000000000000000000000000000000000000000060648201526084016104b8565b506001600160a01b031660009081526003602052604090205490565b6060600180546103c090611b23565b61077c338383610de7565b6109de3383610ae8565b610a505760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f76656400000000000000000000000000000060648201526084016104b8565b610a5c84848484610eb6565b50505050565b60606103ab82610f34565b6000818152600460205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0384169081179091558190610aaf82610895565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b0316610b615760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016104b8565b6000610b6c83610895565b9050806001600160a01b0316846001600160a01b03161480610bb357506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b80610bd75750836001600160a01b0316610bcc84610443565b6001600160a01b0316145b949350505050565b826001600160a01b0316610bf282610895565b6001600160a01b031614610c6e5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e657200000000000000000000000000000000000000000000000000000060648201526084016104b8565b6001600160a01b038216610ce95760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016104b8565b610cf48383836110bf565b610cff600082610a6d565b6001600160a01b0383166000908152600360205260408120805460019290610d28908490611ae0565b90915550506001600160a01b0382166000908152600360205260408120805460019290610d56908490611ab4565b9091555050600081815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b61077c828260405180602001604052806000815250611128565b610804816111a6565b816001600160a01b0316836001600160a01b03161415610e495760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016104b8565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610ec1848484610bdf565b610ecd848484846111e6565b610a5c5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60648201526084016104b8565b6000818152600260205260409020546060906001600160a01b0316610fc15760405162461bcd60e51b815260206004820152603160248201527f45524337323155524953746f726167653a2055524920717565727920666f722060448201527f6e6f6e6578697374656e7420746f6b656e00000000000000000000000000000060648201526084016104b8565b60008281526006602052604081208054610fda90611b23565b80601f016020809104026020016040519081016040528092919081815260200182805461100690611b23565b80156110535780601f1061102857610100808354040283529160200191611053565b820191906000526020600020905b81548152906001019060200180831161103657829003601f168201915b50505050509050600061107160408051602081019091526000815290565b9050805160001415611084575092915050565b8151156110b657808260405160200161109e929190611a36565b60405160208183030381529060405292505050919050565b610bd78461133e565b6001600160a01b03831615806110dc57506001600160a01b038216155b61060a5760405162461bcd60e51b815260206004820152601b60248201527f546f6b656e206973206e6f74207472616e736665727261626c652e000000000060448201526064016104b8565b6111328383611434565b61113f60008484846111e6565b61060a5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60648201526084016104b8565b6111af8161158f565b600081815260066020526040902080546111c890611b23565b15905061080457600081815260066020526040812061080491611791565b60006001600160a01b0384163b1561133357604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061122a903390899088908890600401611a65565b602060405180830381600087803b15801561124457600080fd5b505af1925050508015611274575060408051601f3d908101601f19168201909252611271918101906119d6565b60015b611319573d8080156112a2576040519150601f19603f3d011682016040523d82523d6000602084013e6112a7565b606091505b5080516113115760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60648201526084016104b8565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610bd7565b506001949350505050565b6000818152600260205260409020546060906001600160a01b03166113cb5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e000000000000000000000000000000000060648201526084016104b8565b60006113e260408051602081019091526000815290565b90506000815111611402576040518060200160405280600081525061142d565b8061140c84611643565b60405160200161141d929190611a36565b6040516020818303038152906040525b9392505050565b6001600160a01b03821661148a5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016104b8565b6000818152600260205260409020546001600160a01b0316156114ef5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016104b8565b6114fb600083836110bf565b6001600160a01b0382166000908152600360205260408120805460019290611524908490611ab4565b9091555050600081815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600061159a82610895565b90506115a8816000846110bf565b6115b3600083610a6d565b6001600160a01b03811660009081526003602052604081208054600192906115dc908490611ae0565b9091555050600082815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60608161168357505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b81156116ad578061169781611b5e565b91506116a69050600a83611acc565b9150611687565b60008167ffffffffffffffff8111156116d657634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611700576020820181803683370190505b5090505b8415610bd757611715600183611ae0565b9150611722600a86611b79565b61172d906030611ab4565b60f81b81838151811061175057634e487b7160e01b600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535061178a600a86611acc565b9450611704565b50805461179d90611b23565b6000825580601f106117ad575050565b601f01602090049060005260206000209081019061080491905b808211156117db57600081556001016117c7565b5090565b80356001600160a01b03811681146117f657600080fd5b919050565b60006020828403121561180c578081fd5b61142d826117df565b60008060408385031215611827578081fd5b611830836117df565b915061183e602084016117df565b90509250929050565b60008060006060848603121561185b578081fd5b611864846117df565b9250611872602085016117df565b9150604084013590509250925092565b60008060008060808587031215611897578081fd5b6118a0856117df565b93506118ae602086016117df565b925060408501359150606085013567ffffffffffffffff808211156118d1578283fd5b818701915087601f8301126118e4578283fd5b8135818111156118f6576118f6611bb9565b604051601f8201601f19908116603f0116810190838211818310171561191e5761191e611bb9565b816040528281528a6020848701011115611936578586fd5b82602086016020830137918201602001949094529598949750929550505050565b60008060408385031215611969578182fd5b611972836117df565b915060208301358015158114611986578182fd5b809150509250929050565b600080604083850312156119a3578182fd5b6119ac836117df565b946020939093013593505050565b6000602082840312156119cb578081fd5b813561142d81611bcf565b6000602082840312156119e7578081fd5b815161142d81611bcf565b600060208284031215611a03578081fd5b5035919050565b60008151808452611a22816020860160208601611af7565b601f01601f19169290920160200192915050565b60008351611a48818460208801611af7565b835190830190611a5c818360208801611af7565b01949350505050565b60006001600160a01b03808716835280861660208401525083604083015260806060830152611a976080830184611a0a565b9695505050505050565b60208152600061142d6020830184611a0a565b60008219821115611ac757611ac7611b8d565b500190565b600082611adb57611adb611ba3565b500490565b600082821015611af257611af2611b8d565b500390565b60005b83811015611b12578181015183820152602001611afa565b83811115610a5c5750506000910152565b600181811c90821680611b3757607f821691505b60208210811415611b5857634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611b7257611b72611b8d565b5060010190565b600082611b8857611b88611ba3565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b03198116811461080457600080fdfea26469706673582212201b02fa97d8e944c3520346ad47d57cfabf5be5d3cb412db92def7c601df0cfba64736f6c63430008040033a264697066735822122030b5a81d81e1643598b3d728d9b2d59501d218d73de7cdb5d8de9598af41550364736f6c63430008040033';

type AlexLibraryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AlexLibraryConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AlexLibrary__factory extends ContractFactory {
  constructor(...args: AlexLibraryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _author: string,
    _card: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<AlexLibrary> {
    return super.deploy(_author, _card, overrides || {}) as Promise<AlexLibrary>;
  }
  override getDeployTransaction(
    _author: string,
    _card: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_author, _card, overrides || {});
  }
  override attach(address: string): AlexLibrary {
    return super.attach(address) as AlexLibrary;
  }
  override connect(signer: Signer): AlexLibrary__factory {
    return super.connect(signer) as AlexLibrary__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AlexLibraryInterface {
    return new utils.Interface(_abi) as AlexLibraryInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): AlexLibrary {
    return new Contract(address, _abi, signerOrProvider) as AlexLibrary;
  }
}
