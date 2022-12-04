(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[663],{67845:function(i,e,n){"use strict";n.d(e,{FL:function(){return p},Zk:function(){return d}});var t=n(4942),r=n(22782),o=n(39413),s=n(79826),a=n(64049),c=n(23420),h=n.n(c);function g(i,e){var n=Object.keys(i);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(i);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),n.push.apply(n,t)}return n}function l(i){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){(0,t.Z)(i,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(n,e))}))}return i}class d extends r.xG{constructor(i){let{config:e,state:n}=i;if(super({config:e,state:n}),(0,t.Z)(this,"_providerEngineProxy",null),!e.chainConfig)throw o.Ty.invalidProviderConfigError("Please provide chainConfig");if(!e.chainConfig.chainId)throw o.Ty.invalidProviderConfigError("Please provide chainId inside chainConfig");if(!e.chainConfig.rpcTarget)throw o.Ty.invalidProviderConfigError("Please provide rpcTarget inside chainConfig");this.defaultState={chainId:"loading"},this.defaultConfig={chainConfig:e.chainConfig,networks:{[e.chainConfig.chainId]:e.chainConfig}},super.initialize()}get provider(){return this._providerEngineProxy}set provider(i){throw new Error("Method not implemented.")}addChain(i){if(!i.chainId)throw s.ethErrors.rpc.invalidParams("chainId is required");if(!i.rpcTarget)throw s.ethErrors.rpc.invalidParams("chainId is required");this.configure({networks:l(l({},this.config.networks),{},{[i.chainId]:i})})}getChainConfig(i){var e;const n=null===(e=this.config.networks)||void 0===e?void 0:e[i];if(!n)throw s.ethErrors.rpc.invalidRequest("Chain ".concat(i," is not supported, please add chainConfig for it"));return n}getProviderEngineProxy(){return this._providerEngineProxy}updateProviderEngineProxy(i){this._providerEngineProxy?this._providerEngineProxy.setTarget(i):this._providerEngineProxy=(0,r.qY)(i)}}class p{constructor(){(0,t.Z)(this,"_providerEngineProxy",null)}get provider(){return this._providerEngineProxy}set provider(i){throw new Error("Method not implemented.")}addChain(i){throw new Error("Method not implemented.")}async setupProvider(i){const e=this.getPrivKeyMiddleware(i),n=new a.eI;n.push(e);const t=(0,r.Xj)(n);this.updateProviderEngineProxy(t)}async switchChain(i){return Promise.resolve()}getProviderEngineProxy(){return this._providerEngineProxy}updateProviderEngineProxy(i){this._providerEngineProxy?this._providerEngineProxy.setTarget(i):this._providerEngineProxy=(0,r.qY)(i)}getPrivKeyMiddleware(i){const e={getPrivatekey:async()=>i};return this.createPrivKeyMiddleware(e)}createPrivKeyMiddleware(i){let{getPrivatekey:e}=i;return(0,a.v0)({private_key:(0,a.Pk)((async function(i,n){n.result=await e()}))})}}(0,t.Z)(p,"getProviderInstance",(async i=>{const e=new p;return await e.setupProvider(i.privKey),e}));h()()},86094:function(i,e,n){"use strict";n.r(e),n.d(e,{OpenloginAdapter:function(){return d},getOpenloginDefaultOptions:function(){return h}});var t=n(3388),r=n(39413),o=n(4942),s=n(67845),a=n(72378),c=n.n(a);const h=(i,e)=>({adapterSettings:{network:t.dr.MAINNET,clientId:"",uxMode:t.$e.POPUP},chainConfig:i?(0,r.h2)(i,e):null,loginSettings:{}});function g(i,e){var n=Object.keys(i);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(i);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),n.push.apply(n,t)}return n}function l(i){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){(0,o.Z)(i,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(n,e))}))}return i}class d extends r.J5{constructor(i){var e,n,s;super(),(0,o.Z)(this,"name",r.rW.OPENLOGIN),(0,o.Z)(this,"adapterNamespace",r.yk.MULTICHAIN),(0,o.Z)(this,"type",r.hN.IN_APP),(0,o.Z)(this,"openloginInstance",null),(0,o.Z)(this,"status",r.MP.NOT_READY),(0,o.Z)(this,"currentChainNamespace",r.EN.EIP155),(0,o.Z)(this,"openloginOptions",void 0),(0,o.Z)(this,"loginSettings",{}),(0,o.Z)(this,"privKeyProvider",null),r.cM.debug("const openlogin adapter",i);const a=h(null===(e=i.chainConfig)||void 0===e?void 0:e.chainNamespace,null===(n=i.chainConfig)||void 0===n?void 0:n.chainId);if(this.openloginOptions=l(l({clientId:"",network:t.dr.MAINNET},a.adapterSettings),i.adapterSettings||{}),this.loginSettings=l(l({},a.loginSettings),i.loginSettings),this.sessionTime=this.loginSettings.sessionTime||86400,null!==(s=i.chainConfig)&&void 0!==s&&s.chainNamespace){var c;this.currentChainNamespace=null===(c=i.chainConfig)||void 0===c?void 0:c.chainNamespace;const e=a.chainConfig?a.chainConfig:{};if(this.chainConfig=l(l({},e),null===i||void 0===i?void 0:i.chainConfig),r.cM.debug("const openlogin chainConfig",this.chainConfig),!this.chainConfig.rpcTarget&&i.chainConfig.chainNamespace!==r.EN.OTHER)throw r.Ty.invalidParams("rpcTarget is required in chainConfig")}}get chainConfigProxy(){return this.chainConfig?l({},this.chainConfig):null}get provider(){var i;return(null===(i=this.privKeyProvider)||void 0===i?void 0:i.provider)||null}set provider(i){throw new Error("Not implemented")}async init(i){var e;if(super.checkInitializationRequirements(),null===(e=this.openloginOptions)||void 0===e||!e.clientId)throw r.Ty.invalidParams("clientId is required before openlogin's initialization");if(!this.chainConfig)throw r.Ty.invalidParams("chainConfig is required before initialization");let n=!1;if(this.openloginOptions.uxMode===t.$e.REDIRECT){const i=(0,t.Gv)();Object.keys(i).length>0&&i._pid&&(n=!0)}this.openloginOptions=l(l({},this.openloginOptions),{},{replaceUrlOnRedirect:n}),this.openloginInstance=new t.ZP(this.openloginOptions),r.cM.debug("initializing openlogin adapter init"),await this.openloginInstance.init(),this.status=r.MP.READY,this.emit(r.n2.READY,r.rW.OPENLOGIN);try{r.cM.debug("initializing openlogin adapter"),this.openloginInstance.privKey&&(i.autoConnect||n)&&await this.connect()}catch(o){r.cM.error("Failed to connect with cached openlogin provider",o),this.emit("ERRORED",o)}}async connect(i){super.checkConnectionRequirements(),this.status=r.MP.CONNECTING,this.emit(r.n2.CONNECTING,l(l({},i),{},{adapter:r.rW.OPENLOGIN}));try{return await this.connectWithProvider(i),this.provider}catch(e){if(r.cM.error("Failed to connect with openlogin provider",e),this.status=r.MP.READY,this.emit(r.n2.ERRORED,e),null!==e&&void 0!==e&&e.message.includes("user closed popup"))throw r.RM.popupClosed();throw r.RM.connectionError("Failed to login with openlogin")}}async disconnect(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cleanup:!1};if(this.status!==r.MP.CONNECTED)throw r.RM.notConnectedError("Not connected with wallet");if(!this.openloginInstance)throw r.Ty.notReady("openloginInstance is not ready");await this.openloginInstance.logout(),i.cleanup?(this.status=r.MP.NOT_READY,this.openloginInstance=null,this.privKeyProvider=null):this.status=r.MP.READY,this.emit(r.n2.DISCONNECTED)}async authenticateUser(){if(this.status!==r.MP.CONNECTED)throw r.RM.notConnectedError("Not connected with wallet, Please login/connect first");return{idToken:(await this.getUserInfo()).idToken}}async getUserInfo(){if(this.status!==r.MP.CONNECTED)throw r.RM.notConnectedError("Not connected with wallet");if(!this.openloginInstance)throw r.Ty.notReady("openloginInstance is not ready");return await this.openloginInstance.getUserInfo()}setAdapterSettings(i){if(this.status===r.MP.READY)return;const e=h();this.openloginOptions=l(l(l({},e.adapterSettings),this.openloginOptions||{}),i),i.sessionTime&&(this.loginSettings=l(l({},this.loginSettings),{},{sessionTime:i.sessionTime}))}setChainConfig(i){super.setChainConfig(i),this.currentChainNamespace=i.chainNamespace}async connectWithProvider(i){if(!this.chainConfig)throw r.Ty.invalidParams("chainConfig is required before initialization");if(!this.openloginInstance)throw r.Ty.notReady("openloginInstance is not ready");if(this.currentChainNamespace===r.EN.SOLANA){const{SolanaPrivateKeyProvider:i}=await Promise.all([n.e(766),n.e(108),n.e(182),n.e(445),n.e(690)]).then(n.bind(n,44445));this.privKeyProvider=new i({config:{chainConfig:this.chainConfig}})}else if(this.currentChainNamespace===r.EN.EIP155){const{EthereumPrivateKeyProvider:i}=await Promise.all([n.e(482),n.e(968),n.e(62),n.e(644)]).then(n.bind(n,52062));this.privKeyProvider=new i({config:{chainConfig:this.chainConfig}})}else{if(this.currentChainNamespace!==r.EN.OTHER)throw new Error("Invalid chainNamespace: ".concat(this.currentChainNamespace," found while connecting to wallet"));this.privKeyProvider=new s.FL}var e;!this.openloginInstance.privKey&&i&&(this.loginSettings.curve||(this.loginSettings.curve=this.currentChainNamespace===r.EN.SOLANA?t.x7.ED25519:t.x7.SECP256K1),await this.openloginInstance.login(c()(this.loginSettings,{loginProvider:i.loginProvider},{extraLoginOptions:l(l({},i.extraLoginOptions||{}),{},{login_hint:i.login_hint||(null===(e=i.extraLoginOptions)||void 0===e?void 0:e.login_hint)})})));let o=this.openloginInstance.privKey;if(o){if(this.currentChainNamespace===r.EN.SOLANA){const{getED25519Key:i}=await Promise.all([n.e(108),n.e(418)]).then(n.bind(n,33946));o=i(o).sk.toString("hex")}await this.privKeyProvider.setupProvider(o),this.status=r.MP.CONNECTED,this.emit(r.n2.CONNECTED,{adapter:r.rW.OPENLOGIN,reconnected:!i})}}}},27790:function(){}}]);