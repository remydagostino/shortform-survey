"use strict";(self.webpackChunkshortform_survey=self.webpackChunkshortform_survey||[]).push([[691],{2942:function(e,t,i){i.r(t),i.d(t,{Head:function(){return l},default:function(){return d}});var n=i(7294);const o=[{title:"Interested",index:1,code:"In",description:"Curious or attentive toward something new."},{title:"Distressed",index:2,code:"Di",description:"Uneasy, worried, or in emotional pain."},{title:"Excited",index:3,code:"Ex",description:"A heightened sense of anticipation."},{title:"Upset",index:4,code:"Up",description:"Emotionally troubled or disturbed."},{title:"Strong",index:5,code:"St",description:"Confident, *capable*, and physically or emotionally robust."},{title:"Guilty",index:6,code:"Gu",description:"Responsible for wrongdoing or mistakes."},{title:"Scared",index:7,code:"Sc",description:"An acute sense of fear or alarm."},{title:"Hostile",index:8,code:"Ho",description:"Angry, aggressive, or antagonistic."},{title:"Enthusiastic",index:9,code:"En",description:"Hopeful and eager about something meaningful."},{title:"Proud",index:10,code:"Pr",description:"A sense of satisfaction and self-worth from achievements."},{title:"Irritable",index:11,code:"Ir",description:"Easily annoyed or frustrated."},{title:"Alert",index:12,code:"Al",description:"Being awake, alert, and responsive to stimuli."},{title:"Ashamed",index:13,code:"As",description:"Embarrassed, disgraced or unworthy"},{title:"Inspired",index:14,code:"Ip",description:"Uplifted or driven to create or achieve something meaningful."},{title:"Nervous",index:15,code:"Ne",description:"Emotionally anxious or uneasy about potential outcomes."},{title:"Determined",index:16,code:"De",description:"Motivated, and *resolute* in pursuing goals"},{title:"Attentive",index:17,code:"At",description:"Focused or fixated on a specific task"},{title:"Jittery",index:18,code:"Ji",description:"Physically nervous or restless."},{title:"Active",index:19,code:"Ac",description:"Alive and energized and ready to engage."},{title:"Afraid",index:20,code:"Af",description:"Fearful or apprehensive about something."}],r=[{value:0,description:"Not at all"},{value:1,description:"A little"},{value:2,description:"Moderately"},{value:3,description:"Quite a bit"},{value:4,description:"Extremely"}],a=e=>{let{title:t,description:i,code:o,onChange:a}=e;return n.createElement("div",{style:{marginBottom:20}},n.createElement("h3",{style:{marginBottom:0}},t),n.createElement("p",{style:{margin:"8px 0 12px"}},i),n.createElement("fieldset",{className:"SurveyQuestion--fieldset"},r.map((e=>{let{value:t,description:i}=e;return n.createElement("label",{className:"SurveyQuestion--label SurveyQuestion--magnitude-"+t,key:""+o+t,id:"question-"+o+"-"+t.toString()},n.createElement("input",{type:"radio",className:"SurveyQuestion--input",id:"question-"+o+"-0",name:"question-"+o,value:t.toString(),onChange:()=>{a(o,t)}}),n.createElement("span",null,i))}))))},s={color:"#232129",background:"#fefefe",padding:12,fontFamily:"Roboto, sans-serif, serif",maxWidth:800,margin:"0 auto"};var d=()=>{const{surveyAnswers:e,updateSurveyAnswers:t,shortCode:i}=(()=>{const[e,t]=n.useState(new Map),i=n.useCallback((i=>{let{code:n,value:o}=i;const r=new Map(e);r.set(n,o),t(r)}),[e,t]),o=n.useMemo((()=>e.entries().filter((e=>{let[t,i]=e;return i>0})).map((e=>{let[t,i]=e;return""+t+i})).toArray().join(",")),[e]);return{surveyAnswers:e,updateSurveyAnswers:i,shortCode:o}})(),r=n.useCallback((e=>{e.preventDefault(),navigator.clipboard.writeText(i)}),[i]);return n.createElement("main",{style:s},n.createElement("h1",null,"Panas Survey"),n.createElement("div",{style:{marginBottom:20}},o.map((e=>{let{title:i,code:o,index:r,description:s}=e;return n.createElement(a,{key:o,title:i,description:s,code:o,onChange:(e,i)=>t({code:e,value:i})})}))),n.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:6,paddingBottom:20}},n.createElement("h2",{style:{margin:0}},"Short code:"),n.createElement("code",{style:{background:"#eee",padding:"3px"}},i),n.createElement("button",{onClick:r},"Copy")))};const l=()=>n.createElement("title",null,"Home Page")}}]);
//# sourceMappingURL=component---src-pages-index-tsx-7cf4c7c680006e741b20.js.map