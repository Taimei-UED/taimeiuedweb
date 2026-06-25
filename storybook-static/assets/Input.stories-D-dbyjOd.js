import{r as z}from"./index-GiUgBvb1.js";const de={sm:"h-8 text-xs",md:"h-10 text-sm",lg:"h-12 text-base"},e=z.forwardRef(({label:r,hint:b,error:t,inputSize:le="md",leftIcon:S,rightIcon:f,disabled:v,className:se="",id:oe,...ne},ce)=>{const ie=z.useId(),a=oe??ie,x=!!t;return React.createElement("div",{className:"w-full"},r&&React.createElement("label",{htmlFor:a,className:"mb-1.5 block text-sm font-medium text-neutral-700"},r),React.createElement("div",{className:"relative"},S&&React.createElement("div",{className:"pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"},S),React.createElement("input",{ref:ce,id:a,disabled:v,className:["w-full rounded-lg border bg-white font-normal text-neutral-900","transition-colors duration-200","placeholder:text-neutral-400","focus:outline-none focus:ring-2 focus:ring-offset-0",de[le],S?"pl-10":"pl-3",f?"pr-10":"pr-3",x?"border-danger-500 focus:border-danger-500 focus:ring-danger-500":"border-neutral-300 focus:border-primary-500 focus:ring-primary-500",v?"cursor-not-allowed bg-neutral-50 opacity-60":"",se].filter(Boolean).join(" "),"aria-invalid":x,"aria-describedby":t?`${a}-error`:b?`${a}-hint`:void 0,...ne}),f&&React.createElement("div",{className:"absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400"},f)),t?React.createElement("p",{id:`${a}-error`,className:"mt-1.5 text-xs text-danger-600",role:"alert"},t):b?React.createElement("p",{id:`${a}-hint`,className:"mt-1.5 text-xs text-neutral-400"},b):null)});e.displayName="Input";e.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:"标签文本"},hint:{required:!1,tsType:{name:"string"},description:"辅助提示文本"},error:{required:!1,tsType:{name:"string"},description:"错误信息（传入后触发错误样式）"},inputSize:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"尺寸",defaultValue:{value:"'md'",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"左侧图标"},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"右侧图标"},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const pe={title:"Design System/Input",component:e,tags:["autodocs"],argTypes:{inputSize:{control:"select",options:["sm","md","lg"],description:"输入框尺寸"},label:{control:"text",description:"标签文本"},hint:{control:"text",description:"辅助提示文本"},error:{control:"text",description:"错误信息"},disabled:{control:"boolean",description:"禁用状态"},placeholder:{control:"text",description:"占位文本"}},decorators:[r=>React.createElement("div",{className:"w-[320px]"},React.createElement(r,null))]},l={args:{label:"用户名",placeholder:"请输入用户名",inputSize:"md"}},s={args:{label:"邮箱",placeholder:"name@example.com",hint:"请使用工作邮箱注册",inputSize:"md"}},o={args:{label:"密码",placeholder:"请输入密码",error:"密码长度至少 8 位",inputSize:"md"}},n={args:{placeholder:"搜索...",inputSize:"md"}},c={args:{label:"小输入框",placeholder:"sm size",inputSize:"sm"}},i={args:{label:"中输入框",placeholder:"md size",inputSize:"md"}},d={args:{label:"大输入框",placeholder:"lg size",inputSize:"lg"}},m={args:{label:"只读字段",value:"不可编辑内容",disabled:!0,inputSize:"md"}},p={args:{label:"搜索",placeholder:"输入关键词搜索",inputSize:"md",leftIcon:React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"h-4 w-4"},React.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))}},u={args:{label:"日期",placeholder:"选择日期",inputSize:"md",rightIcon:React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"h-4 w-4"},React.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"}))}},g={render:()=>React.createElement("div",{className:"flex flex-col gap-4"},React.createElement(e,{label:"Small",placeholder:"sm",inputSize:"sm"}),React.createElement(e,{label:"Medium",placeholder:"md",inputSize:"md"}),React.createElement(e,{label:"Large",placeholder:"lg",inputSize:"lg"}))},h={render:()=>React.createElement("div",{className:"flex flex-col gap-4"},React.createElement(e,{label:"默认",placeholder:"正常状态"}),React.createElement(e,{label:"提示",placeholder:"带提示",hint:"请输入有效信息"}),React.createElement(e,{label:"错误",placeholder:"错误状态",error:"此字段为必填项"}),React.createElement(e,{label:"禁用",placeholder:"禁用状态",disabled:!0}))};var R,w,E;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: '用户名',
    placeholder: '请输入用户名',
    inputSize: 'md'
  }
}`,...(E=(w=l.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var N,I,k;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: '邮箱',
    placeholder: 'name@example.com',
    hint: '请使用工作邮箱注册',
    inputSize: 'md'
  }
}`,...(k=(I=s.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var y,A,L;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: '密码',
    placeholder: '请输入密码',
    error: '密码长度至少 8 位',
    inputSize: 'md'
  }
}`,...(L=(A=o.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var W,M,q;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    placeholder: '搜索...',
    inputSize: 'md'
  }
}`,...(q=(M=n.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var T,j,B;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: '小输入框',
    placeholder: 'sm size',
    inputSize: 'sm'
  }
}`,...(B=(j=c.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var D,C,V;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: '中输入框',
    placeholder: 'md size',
    inputSize: 'md'
  }
}`,...(V=(C=i.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var _,$,H;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: '大输入框',
    placeholder: 'lg size',
    inputSize: 'lg'
  }
}`,...(H=($=d.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var O,Z,F;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: '只读字段',
    value: '不可编辑内容',
    disabled: true,
    inputSize: 'md'
  }
}`,...(F=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:F.source}}};var G,J,K;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: '搜索',
    placeholder: '输入关键词搜索',
    inputSize: 'md',
    leftIcon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var P,Q,U;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: '日期',
    placeholder: '选择日期',
    inputSize: 'md',
    rightIcon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
  }
}`,...(U=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,ee;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Input label="Small" placeholder="sm" inputSize="sm" />
      <Input label="Medium" placeholder="md" inputSize="md" />
      <Input label="Large" placeholder="lg" inputSize="lg" />
    </div>
}`,...(ee=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var ae,re,te;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Input label="默认" placeholder="正常状态" />
      <Input label="提示" placeholder="带提示" hint="请输入有效信息" />
      <Input label="错误" placeholder="错误状态" error="此字段为必填项" />
      <Input label="禁用" placeholder="禁用状态" disabled />
    </div>
}`,...(te=(re=h.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};const ue=["Default","WithHint","WithError","WithoutLabel","Small","Medium","Large","Disabled","WithLeftIcon","WithRightIcon","AllSizes","AllStates"];export{g as AllSizes,h as AllStates,l as Default,m as Disabled,d as Large,i as Medium,c as Small,o as WithError,s as WithHint,p as WithLeftIcon,u as WithRightIcon,n as WithoutLabel,ue as __namedExportsOrder,pe as default};
