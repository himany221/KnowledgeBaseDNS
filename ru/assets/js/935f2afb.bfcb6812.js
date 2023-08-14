"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"\u0414\u0430\u043b\u0435\u0435","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"sidebar":[{"type":"link","label":"\u041e\u0431\u0437\u043e\u0440","href":"/KnowledgeBaseDNS/ru/","docId":"intro"},{"type":"category","label":"\u041e\u0431\u0449\u0435\u0435","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"DNS-\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f","href":"/KnowledgeBaseDNS/ru/general/dns-filtering","docId":"general/dns-filtering"},{"type":"link","label":"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u043f\u0440\u0430\u0432\u0438\u043b DNS-\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438","href":"/KnowledgeBaseDNS/ru/general/dns-filtering-syntax","docId":"general/dns-filtering-syntax"},{"type":"link","label":"\u0418\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0435 DNS-\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b","href":"/KnowledgeBaseDNS/ru/general/dns-providers","docId":"general/dns-providers"}]},{"type":"category","label":"\u041f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 DNS","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u041e\u0431\u0437\u043e\u0440","href":"/KnowledgeBaseDNS/ru/public-dns/overview","docId":"public-dns/overview"},{"type":"category","label":"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u041a\u0430\u043a \u0441\u0431\u0440\u043e\u0441\u0438\u0442\u044c DNS-\u043a\u0435\u0448","href":"/KnowledgeBaseDNS/ru/public-dns/solving-problems/how-to-flush-dns-cache","docId":"public-dns/solving-problems/how-to-flush-dns-cache"}]}]},{"type":"category","label":"\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439 DNS","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u041e\u0431\u0437\u043e\u0440","href":"/KnowledgeBaseDNS/ru/private-dns/overview","docId":"private-dns/overview"},{"type":"category","label":"API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u041e\u0431\u0437\u043e\u0440","href":"/KnowledgeBaseDNS/ru/private-dns/api/overview","docId":"private-dns/api/overview"},{"type":"link","label":"\u0420\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e API","href":"/KnowledgeBaseDNS/ru/private-dns/api/reference","docId":"private-dns/api/reference"}]}]},{"type":"category","label":"\u0420\u0430\u0437\u043d\u043e\u0435","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0411\u0430\u0437\u044b \u0437\u043d\u0430\u043d\u0438\u0439","href":"/KnowledgeBaseDNS/ru/miscellaneous/update-kb","docId":"miscellaneous/update-kb"},{"type":"link","label":"\u041a\u0430\u043a \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442","href":"/KnowledgeBaseDNS/ru/miscellaneous/take-screenshot","docId":"miscellaneous/take-screenshot"},{"type":"link","label":"\u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u043d\u043e\u0441\u0442\u0438","href":"/KnowledgeBaseDNS/ru/miscellaneous/acknowledgements","docId":"miscellaneous/acknowledgements"}]}]},"docs":{"general/dns-filtering":{"id":"general/dns-filtering","title":"DNS-\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f","description":"\u0421\u0430\u043c\u044b\u0439 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0438\u0437\u0443\u0447\u0438\u0442\u044c \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 DNS-\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u2014 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0449\u0438\u043a \u0440\u0435\u043a\u043b\u0430\u043c\u044b AdGuard \u0438\u043b\u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c AdGuard DNS. \u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u0442\u044c DNS \u043d\u0430 \u0441\u0435\u0442\u0435\u0432\u043e\u043c \u0443\u0440\u043e\u0432\u043d\u0435, AdGuard Home \u2014 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442","sidebar":"sidebar"},"general/dns-filtering-syntax":{"id":"general/dns-filtering-syntax","title":"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u043f\u0440\u0430\u0432\u0438\u043b DNS-\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438","description":"\u0420\u0430\u0441\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c, \u043a\u0430\u043a \u043f\u0438\u0441\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 DNS-\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430\u0445 AdGuard","sidebar":"sidebar"},"general/dns-providers":{"id":"general/dns-providers","title":"\u0418\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0435 DNS-\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b","description":"\u0417\u0434\u0435\u0441\u044c \u0432\u044b \u043d\u0430\u0439\u0434\u0451\u0442\u0435 \u0441\u043f\u0438\u0441\u043e\u043a \u043d\u0430\u0434\u0451\u0436\u043d\u044b\u0445 DNS-\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u043e\u0432. \u0427\u0442\u043e\u0431\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u0445, \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0411\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0449\u0438\u043a \u0440\u0435\u043a\u043b\u0430\u043c\u044b AdGuard \u0438\u043b\u0438 AdGuard VPN. \u0417\u0430\u0442\u0435\u043c \u043d\u0430 \u0442\u043e\u043c \u0436\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435 \u043a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0430 \u0432 \u044d\u0442\u043e\u0439 \u0441\u0442\u0430\u0442\u044c\u0435","sidebar":"sidebar"},"intro":{"id":"intro","title":"\u041e\u0431\u0437\u043e\u0440","description":"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 DNS?","sidebar":"sidebar"},"miscellaneous/acknowledgements":{"id":"miscellaneous/acknowledgements","title":"\u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u043d\u043e\u0441\u0442\u0438","description":"\u041d\u0430\u0448\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0432\u044b\u0440\u0430\u0436\u0430\u0435\u0442 \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u043d\u043e\u0441\u0442\u044c \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430\u043c \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0435\u0433\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0432 AdGuard DNS, \u043d\u0430\u0448\u0438\u043c \u0437\u0430\u043c\u0435\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u0431\u0435\u0442\u0430-\u0442\u0435\u0441\u0442\u0435\u0440\u0430\u043c \u0438 \u0434\u0440\u0443\u0433\u0438\u043c \u0432\u043e\u0432\u043b\u0435\u0447\u0451\u043d\u043d\u044b\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c, \u0447\u044c\u044f \u043f\u043e\u043c\u043e\u0449\u044c \u0432 \u043f\u043e\u0438\u0441\u043a\u0435 \u0438 \u0443\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u0438 \u0432\u0441\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0445 \u043e\u0448\u0438\u0431\u043e\u043a, \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0435 AdGuard DNS \u0438 \u043c\u043e\u0434\u0435\u0440\u0430\u0446\u0438\u0438 \u043d\u0430\u0448\u0438\u0445 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432 \u0431\u0435\u0441\u0446\u0435\u043d\u043d\u0430.","sidebar":"sidebar"},"miscellaneous/take-screenshot":{"id":"miscellaneous/take-screenshot","title":"\u041a\u0430\u043a \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442","description":"\u0421\u043a\u0440\u0438\u043d\u0448\u043e\u0442 \u2014 \u044d\u0442\u043e \u0441\u043d\u0438\u043c\u043e\u043a \u044d\u043a\u0440\u0430\u043d\u0430 \u0432\u0430\u0448\u0435\u0433\u043e \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430 \u0438\u043b\u0438 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0445 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u043b\u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b/\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f.","sidebar":"sidebar"},"miscellaneous/update-kb":{"id":"miscellaneous/update-kb","title":"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0411\u0430\u0437\u044b \u0437\u043d\u0430\u043d\u0438\u0439","description":"\u0426\u0435\u043b\u044c \u0411\u0430\u0437\u044b \u0437\u043d\u0430\u043d\u0438\u0439 \u2014 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043f\u043e \u0432\u0441\u0435\u043c \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c, \u043a\u0430\u0441\u0430\u044e\u0449\u0438\u043c\u0441\u044f AdGuard DNS. \u0412\u0441\u0451 \u0432 \u043c\u0438\u0440\u0435 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f, \u0438 \u043d\u0430\u0448 \u043f\u0440\u043e\u0434\u0443\u043a\u0442 \u043d\u0435 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432\u0440\u0435\u043c\u044f \u043e\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0441\u0442\u0430\u0442\u044c\u0438 \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u044e\u0442 \u043e\u0442\u0440\u0430\u0436\u0430\u0442\u044c \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0432\u0435\u0449\u0435\u0439. \u041d\u0430\u0441 \u043d\u0435 \u0442\u0430\u043a \u043c\u043d\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0443\u0441\u043b\u0435\u0434\u0438\u0442\u044c \u0437\u0430 \u043a\u0430\u0436\u0434\u043e\u0439 \u043a\u0440\u0443\u043f\u0438\u0446\u0435\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u0438 \u0441 \u0432\u044b\u0445\u043e\u0434\u043e\u043c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0445 \u0432\u0435\u0440\u0441\u0438\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430.","sidebar":"sidebar"},"private-dns/api/overview":{"id":"private-dns/api/overview","title":"\u041e\u0431\u0437\u043e\u0440","description":"AdGuard DNS API","sidebar":"sidebar"},"private-dns/api/reference":{"id":"private-dns/api/reference","title":"\u0420\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e API","description":"\x3c!--","sidebar":"sidebar"},"private-dns/overview":{"id":"private-dns/overview","title":"\u041e\u0431\u0437\u043e\u0440","description":"\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e AdGuard DNS \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0441\u0432\u043e\u0438 DNS-\u0441\u0435\u0440\u0432\u0435\u0440\u044b \u0434\u043b\u044f \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f DNS-\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0438 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438 \u0440\u0435\u043a\u043b\u0430\u043c\u044b, \u0442\u0440\u0435\u043a\u0435\u0440\u043e\u0432 \u0438 \u0432\u0440\u0435\u0434\u043e\u043d\u043e\u0441\u043d\u044b\u0445 \u0434\u043e\u043c\u0435\u043d\u043e\u0432 \u0434\u043e \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u043e\u043d\u0438 \u043f\u043e\u043f\u0430\u0434\u0443\u0442 \u043d\u0430 \u0432\u0430\u0448\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e","sidebar":"sidebar"},"public-dns/overview":{"id":"public-dns/overview","title":"\u041e\u0431\u0437\u043e\u0440","description":"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 AdGuard DNS?","sidebar":"sidebar"},"public-dns/solving-problems/how-to-flush-dns-cache":{"id":"public-dns/solving-problems/how-to-flush-dns-cache","title":"\u041a\u0430\u043a \u0441\u0431\u0440\u043e\u0441\u0438\u0442\u044c DNS-\u043a\u0435\u0448","description":"\u0420\u0430\u0441\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c, \u043a\u0430\u043a \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c DNS-\u043a\u0435\u0448, \u0447\u0442\u043e\u0431\u044b \u0440\u0435\u0448\u0438\u0442\u044c \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u043c DNS. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0411\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0449\u0438\u043a \u0440\u0435\u043a\u043b\u0430\u043c\u044b AdGuard \u0434\u043b\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 DNS-\u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432, \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0437\u0430\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445","sidebar":"sidebar"}}}')}}]);