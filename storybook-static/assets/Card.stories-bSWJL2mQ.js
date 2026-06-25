import{r as o}from"./index-GiUgBvb1.js";const O={default:"bg-white border border-neutral-200",outlined:"bg-transparent border-2 border-neutral-300",elevated:"bg-white shadow-md border border-neutral-100"},A={none:"p-0",sm:"p-3",md:"p-6",lg:"p-8"},l=o.forwardRef(({variant:e="default",padding:a="md",className:t="",children:r,...c},I)=>React.createElement("div",{ref:I,className:["rounded-xl",O[e],A[a],t].filter(Boolean).join(" "),...c},r));l.displayName="Card";const d=o.forwardRef(({divider:e=!0,className:a="",children:t,...r},c)=>React.createElement("div",{ref:c,className:[e?"border-b border-neutral-200 pb-4":"",a].filter(Boolean).join(" "),...r},t));d.displayName="CardHeader";const n=o.forwardRef(({className:e="",children:a,...t},r)=>React.createElement("h3",{ref:r,className:["text-lg font-semibold text-neutral-900",e].filter(Boolean).join(" "),...t},a));n.displayName="CardTitle";const g=o.forwardRef(({className:e="",children:a,...t},r)=>React.createElement("p",{ref:r,className:["text-sm text-neutral-500",e].filter(Boolean).join(" "),...t},a));g.displayName="CardDescription";const s=o.forwardRef(({className:e="",children:a,...t},r)=>React.createElement("div",{ref:r,className:["py-4",e].filter(Boolean).join(" "),...t},a));s.displayName="CardContent";const v=o.forwardRef(({divider:e=!0,className:a="",children:t,...r},c)=>React.createElement("div",{ref:c,className:[e?"border-t border-neutral-200 pt-4":"",a].filter(Boolean).join(" "),...r},t));v.displayName="CardFooter";l.__docgenInfo={description:"",methods:[],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'outlined' | 'elevated'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'elevated'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}}};d.__docgenInfo={description:"",methods:[],displayName:"CardHeader",props:{divider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}}};n.__docgenInfo={description:"",methods:[],displayName:"CardTitle",props:{className:{defaultValue:{value:"''",computed:!1},required:!1}}};g.__docgenInfo={description:"",methods:[],displayName:"CardDescription",props:{className:{defaultValue:{value:"''",computed:!1},required:!1}}};s.__docgenInfo={description:"",methods:[],displayName:"CardContent",props:{className:{defaultValue:{value:"''",computed:!1},required:!1}}};v.__docgenInfo={description:"",methods:[],displayName:"CardFooter",props:{divider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const W={title:"Design System/Card",component:l,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outlined","elevated"],description:"卡片变体样式"},padding:{control:"select",options:["none","sm","md","lg"],description:"内边距"}},decorators:[e=>React.createElement("div",{className:"w-[360px]"},React.createElement(e,null))]},i={args:{variant:"default",padding:"md",children:React.createElement(React.Fragment,null,React.createElement(d,null,React.createElement(n,null,"卡片标题"),React.createElement(g,null,"这是卡片的描述文本。")),React.createElement(s,null,React.createElement("p",{className:"text-sm text-neutral-600"},"这是卡片的内容区域。可以放置任意内容，包括文本、图片或其他组件。")))}},m={args:{variant:"outlined",padding:"md",children:React.createElement(React.Fragment,null,React.createElement(d,null,React.createElement(n,null,"描边卡片")),React.createElement(s,null,React.createElement("p",{className:"text-sm text-neutral-600"},"使用 outline 变体，无背景色，仅有边框。")))}},u={args:{variant:"elevated",padding:"md",children:React.createElement(React.Fragment,null,React.createElement(d,null,React.createElement(n,null,"悬浮卡片")),React.createElement(s,null,React.createElement("p",{className:"text-sm text-neutral-600"},"使用 elevated 变体，带阴影效果，适合强调内容。")))}},p={render:()=>React.createElement(l,{variant:"default",padding:"md"},React.createElement(d,null,React.createElement(n,null,"带底部的卡片"),React.createElement(g,null,"包含 Header、Content 和 Footer。")),React.createElement(s,null,React.createElement("p",{className:"text-sm text-neutral-600"},"这里的内容区域展示了卡片的主体内容。")),React.createElement(v,null,React.createElement("div",{className:"flex justify-end gap-2"},React.createElement("button",{className:"rounded-lg px-3 py-1.5 text-xs font-medium text-neutral-600 hover:bg-neutral-100"},"取消"),React.createElement("button",{className:"rounded-lg bg-primary-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-primary-700"},"确认"))))},C={render:()=>React.createElement(l,{variant:"default",padding:"none"},React.createElement(d,null,React.createElement(n,{className:"px-6 pt-6"},"无内边距卡片")),React.createElement(s,{className:"px-6"},React.createElement("p",{className:"text-sm text-neutral-600"},'padding="none" 时需手动在各子组件中设置内边距。')),React.createElement(v,{className:"px-6 pb-6"},React.createElement("p",{className:"text-xs text-neutral-400"},"适用于图片贴边的场景。")))},f={render:()=>React.createElement("div",{className:"flex flex-col gap-4"},React.createElement(l,{variant:"default",padding:"sm"},React.createElement(n,null,"Default")),React.createElement(l,{variant:"outlined",padding:"sm"},React.createElement(n,null,"Outlined")),React.createElement(l,{variant:"elevated",padding:"sm"},React.createElement(n,null,"Elevated")))};var x,R,E;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    padding: 'md',
    children: <>
        <CardHeader>
          <CardTitle>卡片标题</CardTitle>
          <CardDescription>这是卡片的描述文本。</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-neutral-600">
            这是卡片的内容区域。可以放置任意内容，包括文本、图片或其他组件。
          </p>
        </CardContent>
      </>
  }
}`,...(E=(R=i.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var N,b,y;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    padding: 'md',
    children: <>
        <CardHeader>
          <CardTitle>描边卡片</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-neutral-600">
            使用 outline 变体，无背景色，仅有边框。
          </p>
        </CardContent>
      </>
  }
}`,...(y=(b=m.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var h,T,H;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    padding: 'md',
    children: <>
        <CardHeader>
          <CardTitle>悬浮卡片</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-neutral-600">
            使用 elevated 变体，带阴影效果，适合强调内容。
          </p>
        </CardContent>
      </>
  }
}`,...(H=(T=u.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var w,F,_;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Card variant="default" padding="md">
      <CardHeader>
        <CardTitle>带底部的卡片</CardTitle>
        <CardDescription>包含 Header、Content 和 Footer。</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-600">
          这里的内容区域展示了卡片的主体内容。
        </p>
      </CardContent>
      <CardFooter>
        <div className="flex justify-end gap-2">
          <button className="rounded-lg px-3 py-1.5 text-xs font-medium text-neutral-600 hover:bg-neutral-100">
            取消
          </button>
          <button className="rounded-lg bg-primary-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-primary-700">
            确认
          </button>
        </div>
      </CardFooter>
    </Card>
}`,...(_=(F=p.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var D,V,q;C.parameters={...C.parameters,docs:{...(D=C.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Card variant="default" padding="none">
      <CardHeader>
        <CardTitle className="px-6 pt-6">无内边距卡片</CardTitle>
      </CardHeader>
      <CardContent className="px-6">
        <p className="text-sm text-neutral-600">
          padding="none" 时需手动在各子组件中设置内边距。
        </p>
      </CardContent>
      <CardFooter className="px-6 pb-6">
        <p className="text-xs text-neutral-400">适用于图片贴边的场景。</p>
      </CardFooter>
    </Card>
}`,...(q=(V=C.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var S,j,B;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Card variant="default" padding="sm">
        <CardTitle>Default</CardTitle>
      </Card>
      <Card variant="outlined" padding="sm">
        <CardTitle>Outlined</CardTitle>
      </Card>
      <Card variant="elevated" padding="sm">
        <CardTitle>Elevated</CardTitle>
      </Card>
    </div>
}`,...(B=(j=f.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const k=["Default","Outlined","Elevated","WithFooter","NoPadding","AllVariants"];export{f as AllVariants,i as Default,u as Elevated,C as NoPadding,m as Outlined,p as WithFooter,k as __namedExportsOrder,W as default};
