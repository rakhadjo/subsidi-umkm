(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[569],{3951:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return s}});var n=t(7294),r=t(6040),l=t(3751),i=function(e){var a=e.title,t=e.placeholder,r=e.error,l=e.value,i=e.onChange;return n.createElement(n.Fragment,null,n.createElement("div",{className:"title"},a),n.createElement("input",{className:r?"input-error":"input",type:"text",placeholder:t,value:l,onChange:function(e){i(e.target.value)}}),r&&n.createElement("div",{className:"error"},r))},u=function(e){var a=e.creditAmount,t=e.outstandingDebt,r=e.daysOfSubsidisation;return n.createElement("div",{className:"wrapper"},n.createElement("div",{className:"description"},"Jumlah subsidi bunga/margin:"),n.createElement("div",{className:"total"},function(e,a,t,n){var r=0;if(!n&&e<=1e7)r=t>180?45:.25*t;else if(e<=5e8)r=t>180?8.1:t>90?90*.06+.03*(t-90):.06*t;else{if(!(e<=1e10))return"Plafon pembiayaan melebihi batas Rp. 10 miliar";r=t>180?4.5:t>90?90*.03+.02*(t-90):.03*t}return"Rp. "+r*a/360+",-"}(a,t,r)))},s=function(){var e=(0,n.useState)(""),a=e[0],t=e[1],s=(0,n.useState)(""),c=s[0],m=s[1],o=(0,n.useState)(""),d=o[0],h=o[1],f=function(e){if(e&&isNaN(Number(e)))return"Input harus dalam bentuk angka!"};return n.createElement(r.Z,null,n.createElement(l.Z,{title:"Kalkulator besaran subsidi bunga/margin Usaha Mikro, Kecil, dan Menengah"}),n.createElement("h1",null,"Kalkulator"),n.createElement(u,{creditAmount:a,outstandingDebt:c,daysOfSubsidisation:d}),n.createElement(i,{title:"Plafon Pembiayaan",placeholder:"Dalam jumlah rupiah",error:f(a),value:a,onChange:t}),n.createElement(i,{title:"Baki Debet",placeholder:"Dalam jumlah rupiah",error:f(c),value:c,onChange:m}),n.createElement(i,{title:"Hari Bunga/Margin",placeholder:"Dalam angka",error:f(d),value:d,onChange:h}))}}}]);
//# sourceMappingURL=component---src-pages-kalkulator-js-9e03ecb6857622aaf188.js.map