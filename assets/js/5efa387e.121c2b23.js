"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9181],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return u}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),u=i,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6563:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),a=["components"],l={id:"trie",title:"Trie"},s=void 0,c={unversionedId:"algorithms/trie",id:"algorithms/trie",title:"Trie",description:"Study links",source:"@site/../contents/algorithms/trie.md",sourceDirName:"algorithms",slug:"/algorithms/trie",permalink:"/algorithms/trie",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/algorithms/trie.md",tags:[],version:"current",lastUpdatedBy:"Yangshun Tay",lastUpdatedAt:1569463535,formattedLastUpdatedAt:"9/26/2019",frontMatter:{id:"trie",title:"Trie"},sidebar:"docs",previous:{title:"Tree",permalink:"/algorithms/tree"},next:{title:"\ud83d\udd25 System design interviews",permalink:"/system-design"}},p=[{value:"Study links",id:"study-links",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2},{value:"Recommended LeetCode questions",id:"recommended-leetcode-questions",children:[],level:2}],d={toc:p};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"study-links"},"Study links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/basecs/trying-to-understand-tries-3ec6bede0014"},"Trying to Understand Tries")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/articles/implement-trie-prefix-tree/"},"Implement Trie (Prefix Tree)"))),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("p",null,"Tries are special trees (prefix trees) that make searching and storing strings more efficient. Tries have many practical applications, such as conducting searches and providing autocomplete. It is helpful to know these common applications so that you can easily identify when a problem can be efficiently solved using a trie."),(0,o.kt)("p",null,"Sometimes preprocessing a dictionary of words (given in a list) into a trie, will improve the efficiency of searching for a word of length k, among n words. Searching becomes O(k) instead of O(n)."),(0,o.kt)("p",null,"Be familiar with implementing, from scratch, a ",(0,o.kt)("inlineCode",{parentName:"p"},"Trie")," class and its ",(0,o.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"remove")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"search")," methods."),(0,o.kt)("h2",{id:"recommended-leetcode-questions"},"Recommended LeetCode questions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/implement-trie-prefix-tree"},"Implement Trie (Prefix Tree)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/add-and-search-word-data-structure-design"},"Add and Search Word")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/word-search-ii/"},"Word Search II"))))}m.isMDXComponent=!0}}]);