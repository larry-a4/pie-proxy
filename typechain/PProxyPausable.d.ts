/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface PProxyPausableInterface extends Interface {
  functions: {
    addressToBytes32: TypedFunctionDescription<{
      encode([_value]: [string]): string;
    }>;

    bytes32ToAddress: TypedFunctionDescription<{
      encode([_value]: [Arrayish]): string;
    }>;

    getImplementation: TypedFunctionDescription<{ encode([]: []): string }>;

    getPaused: TypedFunctionDescription<{ encode([]: []): string }>;

    getPauzer: TypedFunctionDescription<{ encode([]: []): string }>;

    getProxyOwner: TypedFunctionDescription<{ encode([]: []): string }>;

    readAddress: TypedFunctionDescription<{
      encode([_key]: [Arrayish]): string;
    }>;

    readBool: TypedFunctionDescription<{ encode([_key]: [Arrayish]): string }>;

    renouncePauzer: TypedFunctionDescription<{ encode([]: []): string }>;

    setImplementation: TypedFunctionDescription<{
      encode([_newImplementation]: [string]): string;
    }>;

    setPaused: TypedFunctionDescription<{
      encode([_value]: [boolean]): string;
    }>;

    setPauzer: TypedFunctionDescription<{
      encode([_newPauzer]: [string]): string;
    }>;

    setProxyOwner: TypedFunctionDescription<{
      encode([_newOwner]: [string]): string;
    }>;

    storageRead: TypedFunctionDescription<{
      encode([_key]: [Arrayish]): string;
    }>;
  };

  events: {};
}

export class PProxyPausable extends Contract {
  connect(signerOrProvider: Signer | Provider | string): PProxyPausable;
  attach(addressOrName: string): PProxyPausable;
  deployed(): Promise<PProxyPausable>;

  on(event: EventFilter | string, listener: Listener): PProxyPausable;
  once(event: EventFilter | string, listener: Listener): PProxyPausable;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): PProxyPausable;
  removeAllListeners(eventName: EventFilter | string): PProxyPausable;
  removeListener(eventName: any, listener: Listener): PProxyPausable;

  interface: PProxyPausableInterface;

  functions: {
    addressToBytes32(_value: string): Promise<string>;

    bytes32ToAddress(_value: Arrayish): Promise<string>;

    getImplementation(): Promise<string>;

    getPaused(): Promise<boolean>;

    getPauzer(): Promise<string>;

    getProxyOwner(): Promise<string>;

    readAddress(_key: Arrayish): Promise<string>;

    readBool(_key: Arrayish): Promise<boolean>;

    renouncePauzer(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setImplementation(
      _newImplementation: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setPaused(
      _value: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setPauzer(
      _newPauzer: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setProxyOwner(
      _newOwner: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    storageRead(_key: Arrayish): Promise<string>;
  };

  addressToBytes32(_value: string): Promise<string>;

  bytes32ToAddress(_value: Arrayish): Promise<string>;

  getImplementation(): Promise<string>;

  getPaused(): Promise<boolean>;

  getPauzer(): Promise<string>;

  getProxyOwner(): Promise<string>;

  readAddress(_key: Arrayish): Promise<string>;

  readBool(_key: Arrayish): Promise<boolean>;

  renouncePauzer(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setImplementation(
    _newImplementation: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setPaused(
    _value: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setPauzer(
    _newPauzer: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setProxyOwner(
    _newOwner: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  storageRead(_key: Arrayish): Promise<string>;

  filters: {};

  estimate: {
    addressToBytes32(_value: string): Promise<BigNumber>;

    bytes32ToAddress(_value: Arrayish): Promise<BigNumber>;

    getImplementation(): Promise<BigNumber>;

    getPaused(): Promise<BigNumber>;

    getPauzer(): Promise<BigNumber>;

    getProxyOwner(): Promise<BigNumber>;

    readAddress(_key: Arrayish): Promise<BigNumber>;

    readBool(_key: Arrayish): Promise<BigNumber>;

    renouncePauzer(): Promise<BigNumber>;

    setImplementation(_newImplementation: string): Promise<BigNumber>;

    setPaused(_value: boolean): Promise<BigNumber>;

    setPauzer(_newPauzer: string): Promise<BigNumber>;

    setProxyOwner(_newOwner: string): Promise<BigNumber>;

    storageRead(_key: Arrayish): Promise<BigNumber>;
  };
}
