(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{222:function(t,e,a){"use strict";a.r(e);var r=a(2),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"json-rpc-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-rpc-api","aria-hidden":"true"}},[t._v("#")]),t._v(" JSON RPC API")]),t._v(" "),a("h2",{attrs:{id:"the-ethereum-rpc-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-ethereum-rpc-api","aria-hidden":"true"}},[t._v("#")]),t._v(" The Ethereum RPC API")]),t._v(" "),a("p",[t._v("MetaMask uses the "),a("code",[t._v("ethereum.sendAsync()")]),t._v(" [Deprecated] API to wrap an RPC API which is based on an interface exposed by all Ethereum clients, with some extra methods that are provided by MetaMask, as a key-holding signer.")]),t._v(" "),a("p",[t._v("This document is a cross-post of "),a("a",{attrs:{href:"https://github.com/ethereum/EIPs/pull/1474/",target:"_blank",rel:"noopener noreferrer"}},[t._v("EIP 1474"),a("OutboundLink")],1),t._v(", which aims to standardize the declaration of this interface.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("eip: 1474\ntitle: Remote procedure call specification\nauthor: Paul Bouchon <mail@bitpshr.net>\ndiscussions-to: https://ethereum-magicians.org/t/eip-remote-procedure-call-specification/1537\nstatus: Draft\ntype: Standards Track\ncategory: Interface\ncreated: 2018-10-02\n")])])]),a("h3",{attrs:{id:"simple-summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-summary","aria-hidden":"true"}},[t._v("#")]),t._v(" Simple Summary")]),t._v(" "),a("p",[t._v("This proposal defines a standard set of remote procedure call methods that an Ethereum node should implement.")]),t._v(" "),a("h3",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract","aria-hidden":"true"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),a("p",[t._v("Nodes created by the current generation of Ethereum clients expose inconsistent and incompatible remote procedure call (RPC) methods because no formal Ethereum RPC specification exists. This proposal standardizes such a specification to provide developers with a predictable Ethereum RPC interface regardless of underlying node implementation.")]),t._v(" "),a("h3",{attrs:{id:"specification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specification","aria-hidden":"true"}},[t._v("#")]),t._v(" Specification")]),t._v(" "),a("h4",{attrs:{id:"concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concepts","aria-hidden":"true"}},[t._v("#")]),t._v(" Concepts")]),t._v(" "),a("h4",{attrs:{id:"rfc-2119"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rfc-2119","aria-hidden":"true"}},[t._v("#")]),t._v(" RFC-2119")]),t._v(" "),a("p",[t._v("The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in "),a("a",{attrs:{href:"https://www.ietf.org/rfc/rfc2119.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC-2119"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"json-rpc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-rpc","aria-hidden":"true"}},[t._v("#")]),t._v(" JSON-RPC")]),t._v(" "),a("p",[t._v("Communication with Ethereum nodes is accomplished using "),a("a",{attrs:{href:"https://www.jsonrpc.org/specification",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON-RPC"),a("OutboundLink")],1),t._v(", a stateless, lightweight "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Remote_procedure_call",target:"_blank",rel:"noopener noreferrer"}},[t._v("remote procedure call"),a("OutboundLink")],1),t._v(" protocol that uses "),a("a",{attrs:{href:"http://www.json.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON"),a("OutboundLink")],1),t._v(" as its data format. Ethereum RPC methods MUST be called using "),a("a",{attrs:{href:"https://www.jsonrpc.org/specification#request_object",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON-RPC request objects"),a("OutboundLink")],1),t._v(" and MUST respond with "),a("a",{attrs:{href:"https://www.jsonrpc.org/specification#response_object",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON-RPC response objects"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"error-codes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-codes","aria-hidden":"true"}},[t._v("#")]),t._v(" Error codes")]),t._v(" "),a("p",[t._v("If an Ethereum RPC method encounters an error, the "),a("code",[t._v("error")]),t._v(" member included on the response object MUST be an object containing a "),a("code",[t._v("code")]),t._v(" member and descriptive "),a("code",[t._v("message")]),t._v(" member. The following list contains all possible error codes and associated messages:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Code")]),t._v(" "),a("th",[t._v("Message")]),t._v(" "),a("th",[t._v("Meaning")]),t._v(" "),a("th",[t._v("Category")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("-32700")]),t._v(" "),a("td",[t._v("Parse error")]),t._v(" "),a("td",[t._v("Invalid JSON")]),t._v(" "),a("td",[t._v("standard")])]),t._v(" "),a("tr",[a("td",[t._v("-32600")]),t._v(" "),a("td",[t._v("Invalid request")]),t._v(" "),a("td",[t._v("JSON is not a valid request object")]),t._v(" "),a("td",[t._v("standard")])]),t._v(" "),a("tr",[a("td",[t._v("-32601")]),t._v(" "),a("td",[t._v("Method not found")]),t._v(" "),a("td",[t._v("Method does not exist")]),t._v(" "),a("td",[t._v("standard")])]),t._v(" "),a("tr",[a("td",[t._v("-32602")]),t._v(" "),a("td",[t._v("Invalid params")]),t._v(" "),a("td",[t._v("Invalid method parameters")]),t._v(" "),a("td",[t._v("standard")])]),t._v(" "),a("tr",[a("td",[t._v("-32603")]),t._v(" "),a("td",[t._v("Internal error")]),t._v(" "),a("td",[t._v("Internal JSON-RPC error")]),t._v(" "),a("td",[t._v("standard")])]),t._v(" "),a("tr",[a("td",[t._v("-32000")]),t._v(" "),a("td",[t._v("Invalid input")]),t._v(" "),a("td",[t._v("Missing or invalid parameters")]),t._v(" "),a("td",[t._v("non-standard")])]),t._v(" "),a("tr",[a("td",[t._v("-32001")]),t._v(" "),a("td",[t._v("Resource not found")]),t._v(" "),a("td",[t._v("Requested resource not found")]),t._v(" "),a("td",[t._v("non-standard")])]),t._v(" "),a("tr",[a("td",[t._v("-32002")]),t._v(" "),a("td",[t._v("Resource unavailable")]),t._v(" "),a("td",[t._v("Requested resource not available")]),t._v(" "),a("td",[t._v("non-standard")])]),t._v(" "),a("tr",[a("td",[t._v("-32003")]),t._v(" "),a("td",[t._v("Transaction rejected")]),t._v(" "),a("td",[t._v("Transaction creation failed")]),t._v(" "),a("td",[t._v("non-standard")])]),t._v(" "),a("tr",[a("td",[t._v("-32004")]),t._v(" "),a("td",[t._v("Method not supported")]),t._v(" "),a("td",[t._v("Method is not implemented")]),t._v(" "),a("td",[t._v("non-standard")])])])]),t._v(" "),a("p",[t._v("Example error response:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1337")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("-32003")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Transaction rejected"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"value-encoding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#value-encoding","aria-hidden":"true"}},[t._v("#")]),t._v(" Value encoding")]),t._v(" "),a("p",[t._v("Specific types of values passed to and returned from Ethereum RPC methods require special encoding:")]),t._v(" "),a("h4",{attrs:{id:"quantity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quantity","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("Quantity")])]),t._v(" "),a("ul",[a("li",[t._v("A "),a("code",[t._v("Quantity")]),t._v(" value MUST be hex-encoded.")]),t._v(" "),a("li",[t._v("A "),a("code",[t._v("Quantity")]),t._v(" value MUST be “0x”-prefixed.")]),t._v(" "),a("li",[t._v("A "),a("code",[t._v("Quantity")]),t._v(" value MUST be expressed using the fewest possible hex digits per byte.")]),t._v(" "),a("li",[t._v("A "),a("code",[t._v("Quantity")]),t._v(" value MUST express zero as “0x0”.")])]),t._v(" "),a("p",[t._v("Examples "),a("code",[t._v("Quantity")]),t._v(" values:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Value")]),t._v(" "),a("th",[t._v("Valid")]),t._v(" "),a("th",[t._v("Reason")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("0x")]),t._v(" "),a("td",[t._v("Parse error")]),t._v(" "),a("td",[t._v("empty not a valid quantity")])]),t._v(" "),a("tr",[a("td",[t._v("0x0")]),t._v(" "),a("td",[t._v("Invalid request")]),t._v(" "),a("td",[t._v("interpreted as a quantity of zero")])]),t._v(" "),a("tr",[a("td",[t._v("0x00")]),t._v(" "),a("td",[t._v("Method not found")]),t._v(" "),a("td",[t._v("leading zeroes not allowed")])]),t._v(" "),a("tr",[a("td",[t._v("0x41")]),t._v(" "),a("td",[t._v("Invalid params")]),t._v(" "),a("td",[t._v("interpreted as a quantity of 65")])]),t._v(" "),a("tr",[a("td",[t._v("0x400")]),t._v(" "),a("td",[t._v("Internal error")]),t._v(" "),a("td",[t._v("interpreted as a quantity of 1024")])]),t._v(" "),a("tr",[a("td",[t._v("0x0400")]),t._v(" "),a("td",[t._v("Invalid input")]),t._v(" "),a("td",[t._v("leading zeroes not allowed")])]),t._v(" "),a("tr",[a("td",[t._v("ff")]),t._v(" "),a("td",[t._v("Resource not found")]),t._v(" "),a("td",[t._v("values must be prefixed")])])])]),t._v(" "),a("h4",{attrs:{id:"data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data","aria-hidden":"true"}},[t._v("#")]),t._v(" Data")]),t._v(" "),a("ul",[a("li",[t._v("A Data value MUST be hex-encoded.")]),t._v(" "),a("li",[t._v("A Data value MUST be “0x”-prefixed.")]),t._v(" "),a("li",[t._v("A Data value MUST be expressed using two hex digits per byte.")])]),t._v(" "),a("p",[t._v("Examples "),a("code",[t._v("Data")]),t._v(" values:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Value")]),t._v(" "),a("th",[t._v("Valid")]),t._v(" "),a("th",[t._v("Reason")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("0x")]),t._v(" "),a("td",[t._v("valid")]),t._v(" "),a("td",[t._v("interpreted as empty data")])]),t._v(" "),a("tr",[a("td",[t._v("0x0")]),t._v(" "),a("td",[t._v("invalid")]),t._v(" "),a("td",[t._v("each byte must be represented using two hex digits")])]),t._v(" "),a("tr",[a("td",[t._v("0x00")]),t._v(" "),a("td",[t._v("valid")]),t._v(" "),a("td",[t._v("interpreted as a single zero byte")])]),t._v(" "),a("tr",[a("td",[t._v("0x41")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("interpreted as a data value of 65")])]),t._v(" "),a("tr",[a("td",[t._v("0x004200")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("interpreted as a data value of 16896")])]),t._v(" "),a("tr",[a("td",[t._v("0xf0f0f")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("bytes require two hex digits")])]),t._v(" "),a("tr",[a("td",[t._v("004200")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("values must be prefixed")])])])]),t._v(" "),a("h4",{attrs:{id:"proposing-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proposing-changes","aria-hidden":"true"}},[t._v("#")]),t._v(" Proposing changes")]),t._v(" "),a("p",[t._v("New Ethereum RPC methods and changes to existing methods MUST be proposed via the traditional EIP process. This allows for community consensus around new method implementations and proposed method modifications. RPC method proposals MUST reach “draft” status before being added to this proposal and the official Ethereum RPC specification defined herein.")]),t._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Method")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#web3-clientversion"}},[t._v("web3_clientVersion")])],1),t._v(" "),a("td",[t._v("Returns the version of the current client")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#web3-sha3"}},[t._v("web3_sha3")])],1),t._v(" "),a("td",[t._v("Hashes data using the Keccak-256 algorithm")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#net-listening"}},[t._v("net_listening")])],1),t._v(" "),a("td",[t._v("Determines if this client is listening for new network connections")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#net-peercount"}},[t._v("net_peerCount")])],1),t._v(" "),a("td",[t._v("Returns the number of peers currently connected to this client")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#net-version"}},[t._v("net_version")])],1),t._v(" "),a("td",[t._v("Returns the chain ID associated with the current network")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-accounts"}},[t._v("eth_accounts")])],1),t._v(" "),a("td",[t._v("Returns a list of addresses owned by this client")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-blocknumber"}},[t._v("eth_blockNumber")])],1),t._v(" "),a("td",[t._v("Returns the number of the most recent block seen by this client")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-call"}},[t._v("eth_call")])],1),t._v(" "),a("td",[t._v("Executes a new message call immediately without submitting a transaction to the network")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-coinbase"}},[t._v("eth_coinbase")])],1),t._v(" "),a("td",[t._v("Returns the coinbase address for this client")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-estimategas"}},[t._v("eth_estimateGas")])],1),t._v(" "),a("td",[t._v("Estimates the gas necessary to complete a transaction without submitting it to the network")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-gasprice"}},[t._v("eth_gasPrice")])],1),t._v(" "),a("td",[t._v("Returns the current price of gas expressed in wei")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-getbalance"}},[t._v("eth_getBalance")])],1),t._v(" "),a("td",[t._v("Returns the balance of an address in wei")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-getblockbyhash"}},[t._v("eth_getBlockByHash")])],1),t._v(" "),a("td",[t._v("Returns information about a block specified by hash")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-getblockbynumber"}},[t._v("eth_getBlockByNumber")])],1),t._v(" "),a("td",[t._v("Returns information about a block specified by number")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-getblocktransactioncountbyhash"}},[t._v("eth_getBlockTransactionCountByHash")])],1),t._v(" "),a("td",[t._v("Returns the number of transactions in a block specified by block hash")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-getblocktransactioncountbynumber"}},[t._v("eth_getBlockTransactionCountByNumber")])],1),t._v(" "),a("td",[t._v("Returns the number of transactions in a block specified by block number")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-getcode"}},[t._v("eth_getCode")])],1),t._v(" "),a("td",[t._v("Returns the contract code stored at a given address")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-getfilterchanges"}},[t._v("eth_getFilterChanges")])],1),t._v(" "),a("td",[t._v("Returns a list of all logs based on filter ID since the last log retrieval")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-getfilterlogs"}},[t._v("eth_getFilterLogs")])],1),t._v(" "),a("td",[t._v("Returns a list of all logs based on filter ID")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-getlogs"}},[t._v("eth_getLogs")])],1),t._v(" "),a("td",[t._v("Returns a list of all logs based on a filter object")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-getstorageat"}},[t._v("eth_getStorageAt")])],1),t._v(" "),a("td",[t._v("Returns the value from a storage position at an address")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-gettransactionbyblockhashandindex"}},[t._v("eth_getTransactionByBlockHashAndIndex")])],1),t._v(" "),a("td",[t._v("Returns information about a transaction specified by block hash and transaction index")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-gettransactionbyblocknumberandindex"}},[t._v("eth_getTransactionByBlockNumberAndIndex")])],1),t._v(" "),a("td",[t._v("Returns information about a transaction specified by block number and transaction index")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-gettransactionbyhash"}},[t._v("eth_getTransactionByHash")])],1),t._v(" "),a("td",[t._v("Returns information about a transaction specified by hash")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-gettransactioncount"}},[t._v("eth_getTransactionCount")])],1),t._v(" "),a("td",[t._v("Returns the number of transactions sent from an address")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-gettransactionreceipt"}},[t._v("eth_getTransactionReceipt")])],1),t._v(" "),a("td",[t._v("Returns the receipt of a transaction specified by hash")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-getunclebyblockhashandindex"}},[t._v("eth_getUncleByBlockHashAndIndex")])],1),t._v(" "),a("td",[t._v("Returns information about an uncle specified by block hash and uncle index position")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-getunclebyblocknumberandindex"}},[t._v("eth_getUncleByBlockNumberAndIndex")])],1),t._v(" "),a("td",[t._v("Returns information about an uncle specified by block number and uncle index position")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-getunclecountbyblockhash"}},[t._v("eth_getUncleCountByBlockHash")])],1),t._v(" "),a("td",[t._v("Returns the number of uncles in a block specified by block hash")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-getunclecountbyblocknumber"}},[t._v("eth_getUncleCountByBlockNumber")])],1),t._v(" "),a("td",[t._v("Returns the number of uncles in a block specified by block number")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-getwork"}},[t._v("eth_getWork")])],1),t._v(" "),a("td",[t._v("Returns a list containing relevant information for proof-of-work")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-hashrate"}},[t._v("eth_hashrate")])],1),t._v(" "),a("td",[t._v("Returns the number of hashes-per-second this node is mining at")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-mining"}},[t._v("eth_mining")])],1),t._v(" "),a("td",[t._v("Determines if this client is mining new blocks")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-newblockfilter"}},[t._v("eth_newBlockFilter")])],1),t._v(" "),a("td",[t._v("Creates a filter to listen for new blocks that can be used with "),a("code",[t._v("eth_getFilterChanges")])])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-newfilter"}},[t._v("eth_newFilter")])],1),t._v(" "),a("td",[t._v("Creates a filter to listen for specific state changes that can then be used with eth_getFilterChanges")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-newpendingtransactionfilter"}},[t._v("eth_newPendingTransactionFilter")])],1),t._v(" "),a("td",[t._v("Creates a filter to listen for new pending transactions that can be used with "),a("code",[t._v("eth_getFilterChanges")])])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-protocolversion"}},[t._v("eth_protocolVersion")])],1),t._v(" "),a("td",[t._v("Returns the current Ethereum protocol version")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-sendrawtransaction"}},[t._v("eth_sendRawTransaction")])],1),t._v(" "),a("td",[t._v("Sends and already-signed transaction to the network")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-sendtransaction"}},[t._v("eth_sendTransaction")])],1),t._v(" "),a("td",[t._v("Creates, signs, and sends a new transaction to the network")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-sign"}},[t._v("eth_sign")])],1),t._v(" "),a("td",[t._v("Calculates an Ethereum-specific signature in the form of "),a("code",[t._v('keccak256("\\x19Ethereum Signed Message:\\n" + len(message) + message))')])])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-signtransaction"}},[t._v("eth_signTransaction")])],1),t._v(" "),a("td",[t._v("Signs a transaction that can be submitted to the network at a later time using with "),a("code",[t._v("eth_sendRawTransaction")])])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-signtypeddata"}},[t._v("eth_signTypedData")])],1),t._v(" "),a("td",[t._v("Calculates an Ethereum-specific signature in the form of "),a("code",[t._v('keccak256("\\x19Ethereum Signed Message:\\n" + len(message) + message))')])])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-submithashrate"}},[t._v("eth_submitHashrate")])],1),t._v(" "),a("td",[t._v("Submit a mining hashrate")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-submitwork"}},[t._v("eth_submitWork")])],1),t._v(" "),a("td",[t._v("Submit a proof-of-work solution")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-syncing"}},[t._v("eth_syncing")])],1),t._v(" "),a("td",[t._v("Returns information about the status of this client’s network synchronization")])]),t._v(" "),a("tr",[a("td",[a("router-link",{attrs:{to:"/guide/json-rpc-api.html#eth-uninstallfilter"}},[t._v("eth_uninstallFilter")])],1),t._v(" "),a("td",[t._v("Destroys a filter based on filter ID")])])])]),t._v(" "),a("h3",{attrs:{id:"web3-clientversion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web3-clientversion","aria-hidden":"true"}},[t._v("#")]),t._v(" web3_clientVersion")]),t._v(" "),a("details",[a("summary",[t._v("Returns the version of the current client")]),t._v(" "),a("ul",[a("li",[t._v(" markdown list 1")]),t._v(" "),a("ul",[a("li",[t._v(" nested list 1")]),t._v(" "),a("li",[t._v(" nested list 2")])]),t._v(" "),a("li",[t._v(" markdown list 2")])])]),t._v(" "),a("h3",{attrs:{id:"web3-sha3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web3-sha3","aria-hidden":"true"}},[t._v("#")]),t._v(" web3_sha3")]),t._v(" "),a("h3",{attrs:{id:"net-listening"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#net-listening","aria-hidden":"true"}},[t._v("#")]),t._v(" net_listening")]),t._v(" "),a("h3",{attrs:{id:"net-peercount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#net-peercount","aria-hidden":"true"}},[t._v("#")]),t._v(" net_peerCount")]),t._v(" "),a("h3",{attrs:{id:"net-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#net-version","aria-hidden":"true"}},[t._v("#")]),t._v(" net_version")]),t._v(" "),a("h3",{attrs:{id:"eth-accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-accounts","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_accounts")]),t._v(" "),a("h3",{attrs:{id:"eth-blocknumber"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-blocknumber","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_blockNumber")]),t._v(" "),a("h3",{attrs:{id:"eth-call"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-call","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_call")]),t._v(" "),a("h3",{attrs:{id:"eth-coinbase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-coinbase","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_coinbase")]),t._v(" "),a("h3",{attrs:{id:"eth-estimategas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-estimategas","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_estimateGas")]),t._v(" "),a("h3",{attrs:{id:"eth-gasprice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-gasprice","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_gasPrice")]),t._v(" "),a("h3",{attrs:{id:"eth-getbalance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-getbalance","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_getBalance")]),t._v(" "),a("h3",{attrs:{id:"eth-getblockbyhash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-getblockbyhash","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_getBlockByHash")]),t._v(" "),a("h3",{attrs:{id:"eth-getblockbynumber"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-getblockbynumber","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_getBlockByNumber")]),t._v(" "),a("h3",{attrs:{id:"eth-getblocktransactioncountbyhash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-getblocktransactioncountbyhash","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_getBlockTransactionCountByHash")]),t._v(" "),a("h3",{attrs:{id:"eth-getblocktransactioncountbynumber"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-getblocktransactioncountbynumber","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_getBlockTransactionCountByNumber")]),t._v(" "),a("h3",{attrs:{id:"eth-getcode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-getcode","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_getCode")]),t._v(" "),a("h3",{attrs:{id:"eth-getfilterchanges"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-getfilterchanges","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_getFilterChanges")]),t._v(" "),a("h3",{attrs:{id:"eth-getfilterlogs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-getfilterlogs","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_getFilterLogs")]),t._v(" "),a("h3",{attrs:{id:"eth-getlogs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-getlogs","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_getLogs")]),t._v(" "),a("h3",{attrs:{id:"eth-getstorageat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-getstorageat","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_getStorageAt")]),t._v(" "),a("h3",{attrs:{id:"eth-gettransactionbyblockhashandindex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-gettransactionbyblockhashandindex","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_getTransactionByBlockHashAndIndex")]),t._v(" "),a("h3",{attrs:{id:"eth-gettransactionbyblocknumberandindex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-gettransactionbyblocknumberandindex","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_getTransactionByBlockNumberAndIndex")]),t._v(" "),a("h3",{attrs:{id:"eth-gettransactionbyhash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-gettransactionbyhash","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_getTransactionByHash")]),t._v(" "),a("h3",{attrs:{id:"eth-gettransactioncount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-gettransactioncount","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_getTransactionCount")]),t._v(" "),a("h3",{attrs:{id:"eth-gettransactionreceipt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-gettransactionreceipt","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_getTransactionReceipt")]),t._v(" "),a("h3",{attrs:{id:"eth-getunclebyblockhashandindex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-getunclebyblockhashandindex","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_getUncleByBlockHashAndIndex")]),t._v(" "),a("h3",{attrs:{id:"eth-getunclebyblocknumberandindex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-getunclebyblocknumberandindex","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_getUncleByBlockNumberAndIndex")]),t._v(" "),a("h3",{attrs:{id:"eth-getunclecountbyblockhash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-getunclecountbyblockhash","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_getUncleCountByBlockHash")]),t._v(" "),a("h3",{attrs:{id:"eth-getunclecountbyblocknumber"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-getunclecountbyblocknumber","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_getUncleCountByBlockNumber")]),t._v(" "),a("h3",{attrs:{id:"eth-getwork"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-getwork","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_getWork")]),t._v(" "),a("h3",{attrs:{id:"eth-hashrate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-hashrate","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_hashrate")]),t._v(" "),a("h3",{attrs:{id:"eth-mining"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-mining","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_mining")]),t._v(" "),a("h3",{attrs:{id:"eth-newblockfilter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-newblockfilter","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_newBlockFilter")]),t._v(" "),a("h3",{attrs:{id:"eth-newfilter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-newfilter","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_newFilter")]),t._v(" "),a("h3",{attrs:{id:"eth-newpendingtransactionfilter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-newpendingtransactionfilter","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_newPendingTransactionFilter")]),t._v(" "),a("h3",{attrs:{id:"eth-protocolversion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-protocolversion","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_protocolVersion")]),t._v(" "),a("h3",{attrs:{id:"eth-sendrawtransaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-sendrawtransaction","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_sendRawTransaction")]),t._v(" "),a("h3",{attrs:{id:"eth-sendtransaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-sendtransaction","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_sendTransaction")]),t._v(" "),a("h3",{attrs:{id:"eth-sign"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-sign","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_sign")]),t._v(" "),a("h3",{attrs:{id:"eth-signtransaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-signtransaction","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_signTransaction")]),t._v(" "),a("h3",{attrs:{id:"eth-signtypeddata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-signtypeddata","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_signTypedData")]),t._v(" "),a("h3",{attrs:{id:"eth-submithashrate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-submithashrate","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_submitHashrate")]),t._v(" "),a("h3",{attrs:{id:"eth-submitwork"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-submitwork","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_submitWork")]),t._v(" "),a("h3",{attrs:{id:"eth-syncing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-syncing","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_syncing")]),t._v(" "),a("h3",{attrs:{id:"eth-uninstallfilter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eth-uninstallfilter","aria-hidden":"true"}},[t._v("#")]),t._v(" eth_uninstallFilter")])])},[],!1,null,null,null);e.default=s.exports}}]);