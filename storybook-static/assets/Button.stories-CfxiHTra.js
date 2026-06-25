import{r as ze}from"./index-GiUgBvb1.js";const Re={primary:"bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500",secondary:"bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus-visible:ring-neutral-400",outline:"border border-neutral-300 bg-transparent text-neutral-700 hover:bg-neutral-50 focus-visible:ring-neutral-400",ghost:"bg-transparent text-neutral-700 hover:bg-neutral-100 focus-visible:ring-neutral-400",danger:"bg-danger-600 text-white hover:bg-danger-700 focus-visible:ring-danger-500"},Se={sm:"h-8 px-3 text-xs gap-1.5",md:"h-10 px-4 text-sm gap-2",lg:"h-12 px-6 text-base gap-2.5"},e=ze.forwardRef(({variant:ue="primary",size:pe="md",fullWidth:ge=!1,leftIcon:ve,rightIcon:he,loading:r=!1,disabled:fe,className:ye="",children:we,...be},xe)=>React.createElement("button",{ref:xe,disabled:fe||r,className:["inline-flex items-center justify-center rounded-lg font-semibold transition-colors duration-200","focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2","disabled:cursor-not-allowed disabled:opacity-50",Re[ue],Se[pe],ge?"w-full":"",ye].filter(Boolean).join(" "),...be},r&&React.createElement("svg",{className:"h-4 w-4 animate-spin",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},React.createElement("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),React.createElement("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})),!r&&ve,we,!r&&he));e.displayName="Button";e.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'outline'
| 'ghost'
| 'danger'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'danger'"}]},description:"按钮变体样式",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"按钮尺寸",defaultValue:{value:"'md'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"是否占满父容器宽度",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"左侧图标"},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"右侧图标"},loading:{required:!1,tsType:{name:"boolean"},description:"加载中状态",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const ke={title:"Design System/Button",component:e,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost","danger"],description:"按钮变体样式"},size:{control:"select",options:["sm","md","lg"],description:"按钮尺寸"},fullWidth:{control:"boolean",description:"是否占满父容器宽度"},loading:{control:"boolean",description:"加载中状态"},disabled:{control:"boolean",description:"禁用状态"},onClick:{action:"clicked"}}},a={args:{children:"按钮",variant:"primary",size:"md"}},t={args:{children:"主要按钮",variant:"primary",size:"md"}},n={args:{children:"次要按钮",variant:"secondary",size:"md"}},s={args:{children:"描边按钮",variant:"outline",size:"md"}},o={args:{children:"幽灵按钮",variant:"ghost",size:"md"}},i={args:{children:"危险按钮",variant:"danger",size:"md"}},c={args:{children:"小按钮",variant:"primary",size:"sm"}},l={args:{children:"中按钮",variant:"primary",size:"md"}},d={args:{children:"大按钮",variant:"primary",size:"lg"}},m={args:{children:"加载中...",variant:"primary",loading:!0}},u={args:{children:"禁用按钮",variant:"primary",disabled:!0}},p={args:{children:"添加",variant:"primary",leftIcon:React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"h-4 w-4"},React.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"}))}},g={args:{children:"下一步",variant:"primary",rightIcon:React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"h-4 w-4"},React.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"}))}},v={args:{children:"全宽按钮",variant:"primary",fullWidth:!0}},h={render:()=>React.createElement("div",{className:"flex flex-wrap items-center gap-4"},React.createElement(e,{variant:"primary"},"Primary"),React.createElement(e,{variant:"secondary"},"Secondary"),React.createElement(e,{variant:"outline"},"Outline"),React.createElement(e,{variant:"ghost"},"Ghost"),React.createElement(e,{variant:"danger"},"Danger"))},f={render:()=>React.createElement("div",{className:"flex flex-wrap items-center gap-4"},React.createElement(e,{size:"sm"},"Small"),React.createElement(e,{size:"md"},"Medium"),React.createElement(e,{size:"lg"},"Large"))};var y,w,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: '按钮',
    variant: 'primary',
    size: 'md'
  }
}`,...(b=(w=a.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var x,z,R;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: '主要按钮',
    variant: 'primary',
    size: 'md'
  }
}`,...(R=(z=t.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var S,B,k;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: '次要按钮',
    variant: 'secondary',
    size: 'md'
  }
}`,...(k=(B=n.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var E,N,L;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: '描边按钮',
    variant: 'outline',
    size: 'md'
  }
}`,...(L=(N=s.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var W,I,M;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: '幽灵按钮',
    variant: 'ghost',
    size: 'md'
  }
}`,...(M=(I=o.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var D,C,V;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: '危险按钮',
    variant: 'danger',
    size: 'md'
  }
}`,...(V=(C=i.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var q,T,j;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: '小按钮',
    variant: 'primary',
    size: 'sm'
  }
}`,...(j=(T=c.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var O,A,G;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: '中按钮',
    variant: 'primary',
    size: 'md'
  }
}`,...(G=(A=l.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var P,_,F;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: '大按钮',
    variant: 'primary',
    size: 'lg'
  }
}`,...(F=(_=d.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var H,J,K;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: '加载中...',
    variant: 'primary',
    loading: true
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    children: '禁用按钮',
    variant: 'primary',
    disabled: true
  }
}`,...(X=(U=u.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    children: '添加',
    variant: 'primary',
    leftIcon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
  }
}`,...($=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    children: '下一步',
    variant: 'primary',
    rightIcon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
  }
}`,...(ae=(re=g.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,ne,se;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    children: '全宽按钮',
    variant: 'primary',
    fullWidth: true
  }
}`,...(se=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,ie,ce;h.parameters={...h.parameters,docs:{...(oe=h.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
}`,...(ce=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,de,me;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...(me=(de=f.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};const Ee=["Default","Primary","Secondary","Outline","Ghost","Danger","Small","Medium","Large","Loading","Disabled","WithLeftIcon","WithRightIcon","FullWidth","AllVariants","AllSizes"];export{f as AllSizes,h as AllVariants,i as Danger,a as Default,u as Disabled,v as FullWidth,o as Ghost,d as Large,m as Loading,l as Medium,s as Outline,t as Primary,n as Secondary,c as Small,p as WithLeftIcon,g as WithRightIcon,Ee as __namedExportsOrder,ke as default};
