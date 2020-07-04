(this["webpackJsonpword-game"]=this["webpackJsonpword-game"]||[]).push([[0],[,,,,,,,,function(e,t,r){e.exports=r(16)},,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),s=r(6),c=r.n(s),d=r(1),i=r(2),o=r(4),u=r(3),l=(r(13),r(7)),m=(r(14),0),v=function(e){Object(o.a)(r,e);var t=Object(u.a)(r);function r(e){var n;Object(d.a)(this,r),n=t.call(this,e);var s=[];return n.renderTemplateById=function(e,t){return t.map((function(t,r){return a.a.createElement(p,{isWordGuessed:n.guessedWordsChecker,word:t.word,key:t.word,templateNumber:e,wordIndex:r,guessed:t.guessed})}))},n.addGuessedWord=function(e){s.push(e)},n.guessedWordsChecker=function(e){return!!s.includes(e)||(n.addGuessedWord(e),!1)},n}return Object(i.a)(r,[{key:"render",value:function(){var e=this.props,t=e.data.words,r=e.data.templateNumber,n=this.renderTemplateById(r,t);return a.a.createElement("div",{className:"template"},n)}}]),r}(a.a.Component),p=function(e){var t=e.word,r=e.templateNumber,n=e.wordIndex,s=e.guessed,c=e.isWordGuessed,d=Object(l.a)(t),i=0,o="template__letter-inner",u="template__word";s&&(i=1,c(t)?o+=" template__letter-inner--visible":o+=" template__letter-inner--visible animate__animated animate__fadeInUpBig");var v=!1;var p={zIndex:i};!function(e){if(1===e){switch(n){case 2:case 4:case 5:case 3:v=!0}u+=" template_1"}switch(v&&(u+=" template__word--stretch"),n){case 0:case 1:case 2:case 3:case 4:case 5:v=u+=" index_".concat(n)}}(r);var f=d.map((function(e){return a.a.createElement("div",{className:"template__letter",key:m++},a.a.createElement("span",{className:o},e.toUpperCase()))}));return a.a.createElement("div",{className:u,style:p},f)},f=(r(15),function(e){Object(o.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(d.a)(this,r),(e=t.call(this)).state={input:[],selectedLetter:[],touchedLine:[]};var n=[];return e.setSelectedLetter=function(t){e.setState((function(e){var r=e.selectedLetter.map((function(e){return e}));return r.push(Number(t)),{selectedLetter:r}}))},e.setInput=function(t,r){var n=!0;e.state.input.forEach((function(e){e.id===r&&(n=!1)})),n&&e.setState((function(e){var n=e.input.map((function(e){return e}));return n.push({letter:t,id:r}),{input:n}}))},e.setLettersData=function(t,r){e.setInput(t,r),e.setSelectedLetter(r)},e.setLettersDataByMouse=function(t){var r=t.target,n=r.innerText,a=r.id;e.setLettersData(n,a)},e.wordChecker=function(t){(0,e.props.wordChecker)(t)},window.onload=function(){var t=document.getElementById("letters-block"),r=function(t){e.setLettersDataByMouse(t)},a=function(e){n.length<5&&n.push({value:e.innerText,id:e.id,xStart:Math.floor(e.getBoundingClientRect().x),xEnd:Math.floor(e.getBoundingClientRect().x+e.getBoundingClientRect().width),yStart:Math.floor(e.getBoundingClientRect().y),yEnd:Math.floor(e.getBoundingClientRect().y+e.getBoundingClientRect().height)})},s=function(r){var s=t.children,c=r.changedTouches[0].clientX,d=r.changedTouches[0].clientY;r.preventDefault(),n.forEach((function(t){var r=t.yStart,n=t.yEnd,a=t.xStart,s=t.xEnd,i=t.value,o=t.id;d>r&&d<n&&c>a&&c<s&&e.setLettersData(i,o)}));for(var i,o=0;i=s[o];o++)a(i)},c=function(){e.wordChecker(e.state.input),e.props.nextLevelChecker(),e.setState({input:[],selectedLetter:[],touchedLine:[]});for(var n,a=t.children,s=0;n=a[s];s++)n.removeEventListener("mouseover",r)};t.addEventListener("mousedown",(function(n){var a=t.children;1===n.target.innerText.length&&e.setLettersDataByMouse(n);for(var s,c=0;s=a[c];c++)s.addEventListener("mouseover",r)})),document.addEventListener("mouseup",c),t.addEventListener("touchmove",s),t.addEventListener("touchstart",s),document.addEventListener("touchend",c)},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this.state,t=e.input,r=e.selectedLetter,n=this.props.letters.map((function(e,t){var n=e.letter,s=e.id,c=!1;r.forEach((function(e){s===e&&(c=!0)}));var d=c?"letters__item letters__item--selected letters--index_".concat(t):"letters__item letters--index_".concat(t);return a.a.createElement("span",{id:s,key:s,className:d},n)})),s=t.map((function(e){return e.letter}));return a.a.createElement("div",{className:"letters-block",id:"test"},this.state.touchedLine,a.a.createElement("div",{className:"letters-input"},s),a.a.createElement("div",{className:"letters",id:"letters-block"},n))}}]),r}(a.a.Component)),h=function(e){Object(o.a)(r,e);var t=Object(u.a)(r);function r(){var e;return Object(d.a)(this,r),(e=t.call(this)).state={currentLevel:1,dataBase:[{level:1,templateNumber:1,words:[{word:"\u0422\u0430\u0440\u0430\u0441",guessed:!1},{word:"\u0422\u0440\u0430\u0441\u0430",guessed:!1},{word:"\u0422\u0430\u0440\u0430",guessed:!1},{word:"\u0421\u0430\u0440\u0430",guessed:!1},{word:"\u0420\u0430\u0441\u0430",guessed:!1},{word:"\u0420\u0430\u0441\u0442\u0430",guessed:!1}],letters:[{letter:"\u0410",id:1},{letter:"\u0420",id:2},{letter:"\u0421",id:3},{letter:"\u0410",id:4},{letter:"\u0422",id:5}]},{level:2,templateNumber:1,words:[{word:"\u043a\u0440\u043e\u043d\u0430",guessed:!1},{word:"\u043a\u043e\u0440\u0430\u043d",guessed:!1},{word:"\u043a\u043e\u0440\u0430",guessed:!1},{word:"\u043d\u043e\u0440\u0430",guessed:!1},{word:"\u043a\u0440\u0430\u043d",guessed:!1},{word:"\u0440\u0430\u043d\u043e\u043a",guessed:!1}],letters:[{letter:"\u041a",id:1},{letter:"\u0420",id:2},{letter:"\u041e",id:3},{letter:"\u0410",id:4},{letter:"\u041d",id:5}]}]},e.nextLevelChecker=function(){var t=e.state,r=t.dataBase,n=t.currentLevel;0===e.levelChecker(r,n)[0].words.filter((function(e){return!1===e.guessed})).length&&setTimeout(e.nextLevel,1500)},e.wordChecker=function(t){var r=e.state,n=r.dataBase,a=r.currentLevel,s=t.map((function(e){return e.letter})).join(""),c=n.map((function(e){return a===e.level&&e.words.map((function(e){e.word.toUpperCase()===s&&(e.guessed=!0)})),e}));e.setState({dataBase:c})},e.levelChecker=function(e,t){return e.filter((function(e){var r=e.level,n=e.templateNumber,a=e.words,s=e.letters;if(r===t)return{templateNumber:n,words:a,letters:s}}))},e.nextLevel=function(){e.setState((function(e){return{currentLevel:e.currentLevel+1}}))},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this.state,t=e.dataBase,r=e.currentLevel,n=this.levelChecker(t,r),s=n[0].letters,c=Object.assign({},n[0]);return a.a.createElement("div",{className:"wrapper"},a.a.createElement(v,{data:c}),a.a.createElement(f,{letters:s,wordChecker:this.wordChecker,nextLevelChecker:this.nextLevelChecker}))}}]),r}(a.a.Component);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.c673793b.chunk.js.map