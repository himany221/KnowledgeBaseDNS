"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[666],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8511:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return h}});var a=n(3117),o=n(102),r=(n(7294),n(4137)),i=["components"],s={title:"How to flush DNS cache",sidebar_position:1},l=void 0,c={unversionedId:"public-dns/solving-problems/how-to-flush-dns-cache",id:"public-dns/solving-problems/how-to-flush-dns-cache",title:"How to flush DNS cache",description:"Here we explain how you can flush the DNS cache to resolve public DNS issues. You can use AdGuard Ad Blocker to set up DNS servers, including encrypted ones",source:"@site/docs/public-dns/solving-problems/how-to-flush-dns-cache.md",sourceDirName:"public-dns/solving-problems",slug:"/public-dns/solving-problems/how-to-flush-dns-cache",permalink:"/KnowledgeBaseDNS/public-dns/solving-problems/how-to-flush-dns-cache",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/public-dns/solving-problems/how-to-flush-dns-cache.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"How to flush DNS cache",sidebar_position:1},sidebar:"sidebar",previous:{title:"Overview",permalink:"/KnowledgeBaseDNS/public-dns/overview"},next:{title:"Overview",permalink:"/KnowledgeBaseDNS/private-dns/overview"}},d={},h=[{value:"What is DNS cache?",id:"what-is-dns-cache",level:2},{value:"When you might need to clear the cache",id:"when-you-might-need-to-clear-the-cache",level:2},{value:"How to flush DNS cache on different OSs",id:"how-to-flush-dns-cache-on-different-oss",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"Clear DNS cache via Chrome",id:"clear-dns-cache-via-chrome",level:4},{value:"Modify the Wi-Fi network to Static",id:"modify-the-wi-fi-network-to-static",level:4},{value:"Reset network settings",id:"reset-network-settings",level:4},{value:"macOS",id:"macos",level:3},{value:"Windows",id:"windows",level:3},{value:"Linux",id:"linux",level:3},{value:"systemd-resolved",id:"systemd-resolved",level:4},{value:"DNSMasq",id:"dnsmasq",level:4},{value:"NSCD",id:"nscd",level:4},{value:"BIND",id:"bind",level:4},{value:"How to flush DNS cache in Chrome",id:"how-to-flush-dns-cache-in-chrome",level:2}],p={toc:h};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Here we explain how you can flush the DNS cache to resolve public DNS issues. You can use AdGuard Ad Blocker to set up DNS servers, including encrypted ones"),(0,r.kt)("p",{parentName:"div"},"Quick link: ",(0,r.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"Download AdGuard Ad Blocker")))),(0,r.kt)("h2",{id:"what-is-dns-cache"},"What is DNS cache?"),(0,r.kt)("p",null,"DNS cache stores the IP addresses of visited sites on the local computer so that they load faster next time. Instead of doing a long DNS lookup, the system answers the queries with DNS records from the temporary DNS cache."),(0,r.kt)("p",null,"The DNS cache contains so-called ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain_Name_System#Resource_records"},"resource records (RRs)"),", which are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Resource data (or rdata)"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Record type"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Record name"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TTL (time to live)"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Class"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Resource data length"),".")),(0,r.kt)("h2",{id:"when-you-might-need-to-clear-the-cache"},"When you might need to clear the cache"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You've changed your DNS provider to AdGuard DNS.")," If the user has changed their DNS, it may take some time to see the result because of the cache."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You regularly get a 404 error.")," For example, the website has been transferred to another server, and its IP address has changed. To make the browser open the website from the new IP address, you need to remove the cached IP from the DNS cache."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You want to improve your privacy.")),(0,r.kt)("h2",{id:"how-to-flush-dns-cache-on-different-oss"},"How to flush DNS cache on different OSs"),(0,r.kt)("h3",{id:"ios"},"iOS"),(0,r.kt)("p",null,"There are different ways to clear the DNS cache on your iPad or iPhone."),(0,r.kt)("p",null,"The simplest way is to activate the Airplane mode (for example, in the Control Center or in the Settings app) and to deactivate it again. The DNS cache will be flushed."),(0,r.kt)("p",null,"Another option is to reset the network settings of your device in the Settings app. Open ",(0,r.kt)("em",{parentName:"p"},"General"),", scroll down, find ",(0,r.kt)("em",{parentName:"p"},"Reset")," and tap ",(0,r.kt)("em",{parentName:"p"},"Reset Network Settings"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"By doing that, you will lose connections to Wi-Fi routers and other specific network settings, including DNS servers customizations. You will need to reset them manually."))),(0,r.kt)("h3",{id:"android"},"Android"),(0,r.kt)("p",null,"There are different ways to clear the DNS cache on your Android device. The exact steps may vary depending on the version of Android you're using and the device manufacturer."),(0,r.kt)("h4",{id:"clear-dns-cache-via-chrome"},"Clear DNS cache via Chrome"),(0,r.kt)("p",null,"Google Chrome, often the default browser on Android, has its own DNS cache. To flush this cache in the Chrome browser, follow the instructions below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Launch Chrome on your Android device"),(0,r.kt)("li",{parentName:"ol"},"Type ",(0,r.kt)("inlineCode",{parentName:"li"},"chrome://net-internals/#DNS")," in the address bar"),(0,r.kt)("li",{parentName:"ol"},"On the DNS lookup page, choose DNS from the menu on the left"),(0,r.kt)("li",{parentName:"ol"},"In the panel on the right, tap the ",(0,r.kt)("em",{parentName:"li"},"Clear Host Cache")," button to clear the DNS cache on your device")),(0,r.kt)("h4",{id:"modify-the-wi-fi-network-to-static"},"Modify the Wi-Fi network to Static"),(0,r.kt)("p",null,"To clear your Android device's DNS cache by changing Wi-Fi network settings to Static, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("em",{parentName:"li"},"Settings \u2192 Wi-Fi")," and choose the network you're connected to"),(0,r.kt)("li",{parentName:"ol"},"Look for IP settings and select ",(0,r.kt)("em",{parentName:"li"},"Static")),(0,r.kt)("li",{parentName:"ol"},"Fill in the required fields. You can get the necessary information from your network administrator or from your router's configuration page"),(0,r.kt)("li",{parentName:"ol"},"After entering the required information, reconnect to your Wi-Fi network. This action will force your device to update its IP and DNS settings and clear the DNS cache")),(0,r.kt)("h4",{id:"reset-network-settings"},"Reset network settings"),(0,r.kt)("p",null,"Another option is to reset the network settings of your device in the Settings app. Open ",(0,r.kt)("em",{parentName:"p"},"Settings \u2192 System \u2192 Advanced \u2192 Reset options \u2192 Reset network settings")," and tap ",(0,r.kt)("em",{parentName:"p"},"Reset Settings")," to confirm."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"By doing that, you will lose connections to Wi-Fi routers and other specific network settings, including DNS servers customizations. You will need to reset them manually."))),(0,r.kt)("h3",{id:"macos"},"macOS"),(0,r.kt)("p",null,"To clear the DNS cache on macOS, open the Terminal (you can find it by using the Spotlight search \u2014 to do that, press Command+Space and type ",(0,r.kt)("em",{parentName:"p"},"Terminal"),") and enter the following command:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sudo killall -HUP mDNSResponder")),(0,r.kt)("p",null,"On macOS Big Sur 11.2.0 and macOS Monterey 12.0.0, you may also use this command:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sudo dscacheutil -flushcache")),(0,r.kt)("p",null,"After that, enter your administrator password to complete the process."),(0,r.kt)("h3",{id:"windows"},"Windows"),(0,r.kt)("p",null,"To flush DNS cache on your Windows device, do the following:"),(0,r.kt)("p",null,"Open the Command Prompt as an administrator. You can find it in the Start Menu by typing ",(0,r.kt)("em",{parentName:"p"},"command prompt")," or ",(0,r.kt)("em",{parentName:"p"},"cmd"),". Then type ",(0,r.kt)("inlineCode",{parentName:"p"},"ipconfig/flushdns")," and press Enter."),(0,r.kt)("p",null,"You will see the line ",(0,r.kt)("em",{parentName:"p"},"Successfully flushed the DNS Resolver Cache"),". Done!"),(0,r.kt)("h3",{id:"linux"},"Linux"),(0,r.kt)("p",null,"Linux does not have OS-level DNS caching unless a caching service such as systemd-resolved, DNSMasq, BIND or Nscd is installed and running. The process of clearing the DNS cache depends on the Linux distribution and the caching service used."),(0,r.kt)("p",null,"For each distribution you need to start a terminal window. Press Ctrl+Alt+T on your keyboard and use the corresponding command to clear the DNS cache for the service your Linux system is running."),(0,r.kt)("p",null,"To find out which DNS resolver you're using, command ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo lsof -i :53 -S"),"."),(0,r.kt)("h4",{id:"systemd-resolved"},"systemd-resolved"),(0,r.kt)("p",null,"To clear the ",(0,r.kt)("strong",{parentName:"p"},"systemd-resolved")," DNS cache, type:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sudo systemd-resolve --flush-caches")),(0,r.kt)("p",null,"On success, the command doesn\u2019t return any message."),(0,r.kt)("h4",{id:"dnsmasq"},"DNSMasq"),(0,r.kt)("p",null,"To clear the ",(0,r.kt)("strong",{parentName:"p"},"DNSMasq")," cache, you need to restart it:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sudo service dnsmasq restart")),(0,r.kt)("h4",{id:"nscd"},"NSCD"),(0,r.kt)("p",null,"To clear the ",(0,r.kt)("strong",{parentName:"p"},"NSCD")," cache, you also need to restart the service:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sudo service nscd restart")),(0,r.kt)("h4",{id:"bind"},"BIND"),(0,r.kt)("p",null,"To flush the ",(0,r.kt)("strong",{parentName:"p"},"BIND")," DNS cache, run the command:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rndc flush")),(0,r.kt)("p",null,"Then you will need to reload BIND:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rndc reload")),(0,r.kt)("p",null,"You will get the message that the server has been successfully reloaded."),(0,r.kt)("h2",{id:"how-to-flush-dns-cache-in-chrome"},"How to flush DNS cache in Chrome"),(0,r.kt)("p",null,"This may be useful if you do not want restart a browser every time during work with the private AdGuard DNS or AdGuard Home. Settings 1-2 only need to be changed once."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Disable ",(0,r.kt)("strong",{parentName:"p"},"secure DNS")," in Chrome settings"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chrome://settings/security\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Disable ",(0,r.kt)("strong",{parentName:"p"},"Async DNS resolver")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chrome://flags/#enable-async-dns\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Press both buttons here"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chrome://net-internals/#sockets\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Press ",(0,r.kt)("strong",{parentName:"p"},"Clear host cache")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chrome://net-internals/#dns\n")))))}u.isMDXComponent=!0}}]);