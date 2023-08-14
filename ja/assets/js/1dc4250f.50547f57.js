"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[577],{4137:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=l(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3575:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return c}});var n=a(3117),r=a(102),i=(a(7294),a(4137)),o=["components"],d={title:"Overview",sidebar_position:1},s=void 0,l={unversionedId:"private-dns/overview",id:"private-dns/overview",title:"Overview",description:"AdGuard DNS \u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8DNS\u30b5\u30fc\u30d0\u30fc\u3092\u8a2d\u5b9a\u3057\u3066DNS\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u89e3\u6c7a\u3057\u3001\u5e83\u544a\u3001\u30c8\u30e9\u30c3\u30ab\u30fc\u3001\u60aa\u610f\u306e\u3042\u308b\u30c9\u30e1\u30a4\u30f3\u304c\u30c7\u30d0\u30a4\u30b9\u306b\u5230\u9054\u3059\u308b\u524d\u306b\u30d6\u30ed\u30c3\u30af\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/private-dns/overview.md",sourceDirName:"private-dns",slug:"/private-dns/overview",permalink:"/KnowledgeBaseDNS/ja/private-dns/overview",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/private-dns/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"sidebar",previous:{title:"How to flush DNS cache",permalink:"/KnowledgeBaseDNS/ja/public-dns/solving-problems/how-to-flush-dns-cache"},next:{title:"Overview",permalink:"/KnowledgeBaseDNS/ja/private-dns/api/overview"}},u={},c=[{value:"What is Private AdGuard DNS?",id:"what-is-private-adguard-dns",level:2},{value:"Why you need Private AdGuard DNS",id:"why-you-need-private-adguard-dns",level:2},{value:"The difference between Private and Public AdGuard DNS",id:"the-difference-between-private-and-public-adguard-dns",level:2},{value:"How to set up Private AdGuard DNS",id:"how-to-set-up-private-adguard-dns",level:2},{value:"Linked IP",id:"linked-ip",level:2},{value:"Private AdGuard DNS features",id:"private-adguard-dns-features",level:2},{value:"Blocklists management",id:"blocklists-management",level:3},{value:"User rules",id:"user-rules",level:3},{value:"Statistics",id:"statistics",level:3},{value:"Traffic destination",id:"traffic-destination",level:3},{value:"Companies",id:"companies",level:3},{value:"Query log",id:"query-log",level:3},{value:"Parental control",id:"parental-control",level:3}],p={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"AdGuard DNS \u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8DNS\u30b5\u30fc\u30d0\u30fc\u3092\u8a2d\u5b9a\u3057\u3066DNS\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u89e3\u6c7a\u3057\u3001\u5e83\u544a\u3001\u30c8\u30e9\u30c3\u30ab\u30fc\u3001\u60aa\u610f\u306e\u3042\u308b\u30c9\u30e1\u30a4\u30f3\u304c\u30c7\u30d0\u30a4\u30b9\u306b\u5230\u9054\u3059\u308b\u524d\u306b\u30d6\u30ed\u30c3\u30af\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("p",{parentName:"div"},"\u30af\u30a4\u30c3\u30af\u30ea\u30f3\u30af: ",(0,i.kt)("a",{parentName:"p",href:"https://adguard-dns.io/dashboard/"},"AdGuard DNS \u3092\u8a66\u3057\u3066\u307f\u308b")))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/main.png",alt:"Private AdGuard DNS dashboard main"})),(0,i.kt)("h2",{id:"what-is-private-adguard-dns"},"What is Private AdGuard DNS?"),(0,i.kt)("p",null,"Private AdGuard DNS is a DNS server that, in addition to benefits of a public DNS server (such as traffic encryption and domain blocklists), provides features like flexible customization, DNS statistics and parental control and is easily managed through a handy dashboard."),(0,i.kt)("h2",{id:"why-you-need-private-adguard-dns"},"Why you need Private AdGuard DNS"),(0,i.kt)("p",null,"Today, you can connect anything to the Internet: TVs, refrigerators, smart bulbs, or speakers. But along with the undeniable conveniences you get trackers and ads. A simple browser-based ad blocker will not protect you in this case, but AdGuard DNS, which you can set up to filter traffic, block content and trackers, has a system-wide effect."),(0,i.kt)("p",null,"We already have ",(0,i.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/ja/public-dns/overview"},"public AdGuard DNS")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome"},"AdGuard Home"),". These solutions work fine for some users, but for others, the public AdGuard DNS lacks the flexibility of configuration, while the AdGuard Home lacks simplicity. That's where private AdGuard DNS comes into play. It has the best of both worlds: it offers customizability, control and information - all through a simple easy-to-use dashboard."),(0,i.kt)("h2",{id:"the-difference-between-private-and-public-adguard-dns"},"The difference between Private and Public AdGuard DNS"),(0,i.kt)("p",null,"Here is a simple comparison of features available in Public AdGuard DNS and Private AdGuard DNS servers."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Public AdGuard DNS"),(0,i.kt)("th",{parentName:"tr",align:null},"Private AdGuard DNS"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DNS traffic encryption"),(0,i.kt)("td",{parentName:"tr",align:null},"DNS traffic encryption")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Pre-determined domain blocklists"),(0,i.kt)("td",{parentName:"tr",align:null},"Customizable domain blocklists")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"Custom DNS filtering rules with import/export feature")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"Request statistics (see where do your DNS requests go: which countries, which companies, etc.)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"Detailed query log")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"Parental control")))),(0,i.kt)("h2",{id:"how-to-set-up-private-adguard-dns"},"How to set up Private AdGuard DNS"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to your ",(0,i.kt)("a",{parentName:"li",href:"https://adguard-dns.io/dashboard/"},"AdGuard DNS dashboard")," (if not logged in, log in using your AdGuard account)"),(0,i.kt)("li",{parentName:"ol"},'Click "Connect device" and follow on-screen instructions')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Supported platforms:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Android"),(0,i.kt)("li",{parentName:"ul"},"iOS"),(0,i.kt)("li",{parentName:"ul"},"Windows"),(0,i.kt)("li",{parentName:"ul"},"Mac"),(0,i.kt)("li",{parentName:"ul"},"Linux"),(0,i.kt)("li",{parentName:"ul"},"Routers"),(0,i.kt)("li",{parentName:"ul"},"Gaming consoles")))),(0,i.kt)("p",null,"Every device that you add in the AdGuard DNS panel has its own unique address that can be used if the device supports modern encrypted DNS protocols (DoH, DoT, and DoQ)."),(0,i.kt)("h2",{id:"linked-ip"},"Linked IP"),(0,i.kt)("p",null,'If the device does not support encrypted DNS and you have to use plain DNS, there\'s another way to allow AdGuard DNS to recognize the device \u2014 link its IP address. In this case AdGuard DNS counts all plain DNS requests that come from that IP address towards that "device".'),(0,i.kt)("p",null,"The only requirement for linking IP is that ",(0,i.kt)("strong",{parentName:"p"},"it must be a residential IP address"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A residential IP address is an IP address assigned to a device connected to a residential ISP. It is typically associated with a physical location and is allocated to individual homes or apartments. Residential IP addresses are used by regular Internet users for their everyday online activities, such as browsing the web, accessing social media platforms, sending emails, or streaming content."))),(0,i.kt)("p",null,"If you're trying to link a residential IP address and AdGuard DNS does not allow you to do that, please contact our support team at ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@adguard.com"},"support@adguard.com"),"."),(0,i.kt)("h2",{id:"private-adguard-dns-features"},"Private AdGuard DNS features"),(0,i.kt)("h3",{id:"blocklists-management"},"Blocklists management"),(0,i.kt)("p",null,'With "Blocklists" feature you can set which domains you want to block and which you don\'t. \u0421hoose from wide variety of blocklists for different purposes.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/blocklists.png",alt:"Private AdGuard DNS dashboard blocklists"})),(0,i.kt)("h3",{id:"user-rules"},"User rules"),(0,i.kt)("p",null,"For times when pre-installed ",(0,i.kt)("em",{parentName:"p"},"Blocklists"),' with thousands of rules are not enough, we have a handy function called "User rules". Here you can add custom rules manually to block/unblock a certain domain or import custom rules lists (check out ',(0,i.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/ja/general/dns-filtering-syntax"},"DNS filtering rules syntax"),"). You can export the lists."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/import.png",alt:"Private AdGuard DNS dashboard user rules"})),(0,i.kt)("h3",{id:"statistics"},"Statistics"),(0,i.kt)("p",null,'In "Statistics" tab you can see all the summarized statistics on DNS queries made by devices connected to your Private AdGuard  DNS. It shows the total number and geography of requests, the number of blocked requests, the list of companies the requests were addressed to, requests types and top requested domains.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/statistics.png",alt:"Private AdGuard DNS dashboard statistics"})),(0,i.kt)("h3",{id:"traffic-destination"},"Traffic destination"),(0,i.kt)("p",null,"This feature shows you where DNS requests sent by your devices go. On top of seeing the map of request destinations, you can filter the information by date, device and country."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/traffic_destination.png",alt:"Private AdGuard DNS dashboard traffic"})),(0,i.kt)("h3",{id:"companies"},"Companies"),(0,i.kt)("p",null,"This tab allows you to quickly check which companies send the most requests, and which companies have the most blocked requests."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/companies.png",alt:"Private AdGuard DNS dashboard companies"})),(0,i.kt)("h3",{id:"query-log"},"Query log"),(0,i.kt)("p",null,"This is a detailed log where you can check out the information on every single request and also sort requests by status, type, company, device, time, country."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/query_log.png",alt:"Private AdGuard DNS dashboard query log"})),(0,i.kt)("h3",{id:"parental-control"},"Parental control"),(0,i.kt)("p",null,"To protect your child from online content you deem inappropriate, set up and activate the ",(0,i.kt)("em",{parentName:"p"},"Parental control"),' option. In addition to options such as "adult content" blocking and safe search, we\'ve added the ability to manually specify domains for blocking and set a schedule for the ',(0,i.kt)("em",{parentName:"p"},"Parental control")," to work accordingly."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/private_adguard_dns/parental_control.png",alt:"Private AdGuard DNS dashboard Parental Control"})),(0,i.kt)("p",null,"In case you don't have Private AdGuard DNS yet, you can ",(0,i.kt)("a",{parentName:"p",href:"https://adguard-dns.io/"},"get it on the official website"),"."))}m.isMDXComponent=!0}}]);