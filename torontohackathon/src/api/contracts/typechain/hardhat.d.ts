/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from 'ethers';
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from '@nomiclabs/hardhat-ethers/types';

import * as Contracts from '.';

declare module 'hardhat/types/runtime' {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: 'Ownable',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: 'Pausable',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: 'ERC20',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: 'IERC20Metadata',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: 'IERC20',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: 'ERC721',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: 'ERC721Burnable',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC721Burnable__factory>;
    getContractFactory(
      name: 'ERC721Enumerable',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC721Enumerable__factory>;
    getContractFactory(
      name: 'ERC721URIStorage',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC721URIStorage__factory>;
    getContractFactory(
      name: 'IERC721Enumerable',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC721Enumerable__factory>;
    getContractFactory(
      name: 'IERC721Metadata',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: 'IERC721',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: 'IERC721Receiver',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: 'ERC165',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: 'IERC165',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: 'AlexAdmin',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.AlexAdmin__factory>;
    getContractFactory(
      name: 'AlexAuthor',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.AlexAuthor__factory>;
    getContractFactory(
      name: 'AlexCertificate',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.AlexCertificate__factory>;
    getContractFactory(
      name: 'AlexLibrary',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.AlexLibrary__factory>;
    getContractFactory(
      name: 'AlexLibraryCard',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.AlexLibraryCard__factory>;
    getContractFactory(
      name: 'AlexToken',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.AlexToken__factory>;
    getContractFactory(
      name: 'NFTToken',
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<Contracts.NFTToken__factory>;

    getContractAt(
      name: 'Ownable',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: 'Pausable',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.Pausable>;
    getContractAt(name: 'ERC20', address: string, signer?: ethers.Signer): Promise<Contracts.ERC20>;
    getContractAt(
      name: 'IERC20Metadata',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: 'IERC20',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: 'ERC721',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: 'ERC721Burnable',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.ERC721Burnable>;
    getContractAt(
      name: 'ERC721Enumerable',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.ERC721Enumerable>;
    getContractAt(
      name: 'ERC721URIStorage',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.ERC721URIStorage>;
    getContractAt(
      name: 'IERC721Enumerable',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC721Enumerable>;
    getContractAt(
      name: 'IERC721Metadata',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: 'IERC721',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: 'IERC721Receiver',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: 'ERC165',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: 'IERC165',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: 'AlexAdmin',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.AlexAdmin>;
    getContractAt(
      name: 'AlexAuthor',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.AlexAuthor>;
    getContractAt(
      name: 'AlexCertificate',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.AlexCertificate>;
    getContractAt(
      name: 'AlexLibrary',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.AlexLibrary>;
    getContractAt(
      name: 'AlexLibraryCard',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.AlexLibraryCard>;
    getContractAt(
      name: 'AlexToken',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.AlexToken>;
    getContractAt(
      name: 'NFTToken',
      address: string,
      signer?: ethers.Signer,
    ): Promise<Contracts.NFTToken>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions,
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer,
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer,
    ): Promise<ethers.Contract>;
  }
}
