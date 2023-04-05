import { expect, it } from 'vitest'

import * as Exports from './'

it('should expose correct exports', () => {
  expect(Object.keys(Exports)).toMatchInlineSnapshot(`
    [
      "connect",
      "disconnect",
      "fetchBalance",
      "fetchBlockNumber",
      "fetchEnsAddress",
      "fetchEnsAvatar",
      "fetchEnsName",
      "fetchEnsResolver",
      "fetchFeeData",
      "fetchSigner",
      "fetchToken",
      "fetchTransaction",
      "getAccount",
      "getContract",
      "getNetwork",
      "getProvider",
      "getWebSocketProvider",
      "multicall",
      "prepareWriteContract",
      "prepareSendTransaction",
      "readContract",
      "readContracts",
      "sendTransaction",
      "signMessage",
      "signTypedData",
      "switchNetwork",
      "waitForTransaction",
      "watchAccount",
      "watchBlockNumber",
      "watchContractEvent",
      "watchMulticall",
      "watchNetwork",
      "watchPendingTransactions",
      "watchProvider",
      "watchReadContract",
      "watchReadContracts",
      "watchSigner",
      "watchWebSocketProvider",
      "writeContract",
      "mainnet",
      "goerli",
      "createClient",
      "getClient",
      "Client",
      "Connector",
      "InjectedConnector",
      "erc20ABI",
      "erc721ABI",
      "erc4626ABI",
      "units",
      "AddChainError",
      "ChainDoesNotSupportMulticallError",
      "ChainMismatchError",
      "ChainNotConfiguredError",
      "ConnectorAlreadyConnectedError",
      "ConnectorNotFoundError",
      "ContractMethodDoesNotExistError",
      "ContractMethodNoResultError",
      "ContractMethodRevertedError",
      "ContractResultDecodeError",
      "ProviderChainsNotFound",
      "ProviderRpcError",
      "ResourceUnavailableError",
      "RpcError",
      "SwitchChainError",
      "SwitchChainNotSupportedError",
      "UserRejectedRequestError",
      "createStorage",
      "noopStorage",
      "configureChains",
      "deepEqual",
      "deserialize",
      "getUnit",
      "minimizeContractInterface",
      "normalizeChainId",
      "serialize",
    ]
  `)
})
