(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{816:function(e){e.exports=['function Example() {\n  const [checked, setChecked] = React.useState(false);\n  return (\n    <Checkbox\n      label="Cookies"\n      checked={checked}\n      onChange={evt => setChecked(evt.currentTarget.checked)}\n    />\n  );\n}','<Checkbox label="Pizza" />',"<Checkbox>Icecream</Checkbox>",'<>\n  <Checkbox label="Broccoli" indeterminate />\n\n  <Checkbox label="Always On" checked />\n  <Checkbox label="Always Off" checked={false} />\n</>']},817:function(e){e.exports={npm:{},typescript:{Checkbox:{documentation:{contents:["<p>A Checkbox component.</p>\n"],contentsRaw:"A Checkbox component.",metadata:{}},fileName:"src/checkbox/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"class",name:"Checkbox",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/76326d1e5/src/checkbox/index.tsx#L78",extends:["ToggleableFoundationComponent<MDCCheckboxFoundation, CheckboxProps>"],methods:[{fileName:"node_modules/@types/react/index.d.ts",flags:{isExported:!0,isExternal:!1,isOptional:!0,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"method",name:"UNSAFE_componentWillMount",inheritedFrom:"DeprecatedLifecycle.UNSAFE_componentWillMount",signatures:[{documentation:{contents:["<p>Called immediately before mounting occurs, and before <code>Component#render</code>.\nAvoid introducing any side-effects or subscriptions in this method.</p>\n<p>This method will not stop working in React 17.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",{tag:"see",value:"https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state"},{tag:"see",value:"https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"}],contentsRaw:"Called immediately before mounting occurs, and before `Component#render`.\nAvoid introducing any side-effects or subscriptions in this method.\n\nThis method will not stop working in React 17.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",metadata:{}},fileName:"node_modules/@types/react/index.d.ts",kind:"signature",name:"UNSAFE_componentWillMount",parameters:[],returnType:"void",type:"() => void"}]},{fileName:"node_modules/@types/react/index.d.ts",flags:{isExported:!0,isExternal:!1,isOptional:!0,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"method",name:"UNSAFE_componentWillReceiveProps",inheritedFrom:"DeprecatedLifecycle.UNSAFE_componentWillReceiveProps",signatures:[{documentation:{contents:["<p>Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.</p>\n<p>Calling <code>Component#setState</code> generally does not trigger this method.</p>\n<p>This method will not stop working in React 17.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",{tag:"see",value:"https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props"},{tag:"see",value:"https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"}],contentsRaw:"Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.\n\nCalling `Component#setState` generally does not trigger this method.\n\nThis method will not stop working in React 17.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",metadata:{}},fileName:"node_modules/@types/react/index.d.ts",kind:"signature",name:"UNSAFE_componentWillReceiveProps",parameters:[{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"nextProps",type:"Readonly<FoundationPropsT<CheckboxProps & FoundationProps>>"},{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"nextContext",type:"any"}],returnType:"void",type:"(nextProps: Readonly<FoundationPropsT<CheckboxProps & FoundationProps>>, nextContext: any) => void"}]},{fileName:"node_modules/@types/react/index.d.ts",flags:{isExported:!0,isExternal:!1,isOptional:!0,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"method",name:"UNSAFE_componentWillUpdate",inheritedFrom:"DeprecatedLifecycle.UNSAFE_componentWillUpdate",signatures:[{documentation:{contents:["<p>Called immediately before rendering when new props or state is received. Not called for the initial render.</p>\n<p>Note: You cannot call <code>Component#setState</code> here.</p>\n<p>This method will not stop working in React 17.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",{tag:"see",value:"https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update"},{tag:"see",value:"https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"}],contentsRaw:"Called immediately before rendering when new props or state is received. Not called for the initial render.\n\nNote: You cannot call `Component#setState` here.\n\nThis method will not stop working in React 17.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",metadata:{}},fileName:"node_modules/@types/react/index.d.ts",kind:"signature",name:"UNSAFE_componentWillUpdate",parameters:[{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"nextProps",type:"Readonly<FoundationPropsT<CheckboxProps & FoundationProps>>"},{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"nextState",type:"Readonly<FoundationStateT<S>>"},{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"nextContext",type:"any"}],returnType:"void",type:"(nextProps: Readonly<FoundationPropsT<CheckboxProps & FoundationProps>>, nextState: Readonly<FoundationStateT<S>>, nextContext: any) => void"}]},{fileName:"node_modules/@types/react/index.d.ts",flags:{isExported:!0,isExternal:!1,isOptional:!0,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"method",name:"componentDidCatch",inheritedFrom:"ComponentLifecycle.componentDidCatch",signatures:[{documentation:{contents:["<p>Catches exceptions generated in descendant components. Unhandled exceptions will cause\nthe entire component tree to unmount.</p>\n"],contentsRaw:"Catches exceptions generated in descendant components. Unhandled exceptions will cause\nthe entire component tree to unmount.",metadata:{}},fileName:"node_modules/@types/react/index.d.ts",kind:"signature",name:"componentDidCatch",parameters:[{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"error",type:"Error"},{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"errorInfo",type:"ErrorInfo"}],returnType:"void",type:"(error: Error, errorInfo: ErrorInfo) => void"}]},{fileName:"src/checkbox/node_modules/@rmwc/base/foundation-component.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"method",name:"componentDidMount",inheritedFrom:"FoundationComponent.componentDidMount",signatures:[{fileName:"src/checkbox/node_modules/@rmwc/base/foundation-component.tsx",kind:"signature",name:"componentDidMount",parameters:[],returnType:"void",type:"() => void"}]},{fileName:"src/checkbox/node_modules/@rmwc/base/foundation-component.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"method",name:"componentDidUpdate",inheritedFrom:"FoundationComponent.componentDidUpdate",signatures:[{fileName:"src/checkbox/node_modules/@rmwc/base/foundation-component.tsx",kind:"signature",name:"componentDidUpdate",parameters:[{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"prevProps",type:"FoundationPropsT<CheckboxProps & FoundationProps>"}],returnType:"void",type:"(prevProps: FoundationPropsT<CheckboxProps & FoundationProps>) => void"}]},{fileName:"node_modules/@types/react/index.d.ts",flags:{isExported:!0,isExternal:!1,isOptional:!0,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"method",name:"componentWillMount",inheritedFrom:"DeprecatedLifecycle.componentWillMount",signatures:[{documentation:{contents:["<p>Called immediately before mounting occurs, and before <code>Component#render</code>.\nAvoid introducing any side-effects or subscriptions in this method.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",{tag:"see",value:"https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state"},{tag:"see",value:"https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"}],contentsRaw:"Called immediately before mounting occurs, and before `Component#render`.\nAvoid introducing any side-effects or subscriptions in this method.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",metadata:{}},fileName:"node_modules/@types/react/index.d.ts",kind:"signature",name:"componentWillMount",parameters:[],returnType:"void",type:"() => void"}]},{fileName:"node_modules/@types/react/index.d.ts",flags:{isExported:!0,isExternal:!1,isOptional:!0,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"method",name:"componentWillReceiveProps",inheritedFrom:"DeprecatedLifecycle.componentWillReceiveProps",signatures:[{documentation:{contents:["<p>Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.</p>\n<p>Calling <code>Component#setState</code> generally does not trigger this method.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",{tag:"see",value:"https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props"},{tag:"see",value:"https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"}],contentsRaw:"Called when the component may be receiving new props.\nReact may call this even if props have not changed, so be sure to compare new and existing\nprops if you only want to handle changes.\n\nCalling `Component#setState` generally does not trigger this method.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",metadata:{}},fileName:"node_modules/@types/react/index.d.ts",kind:"signature",name:"componentWillReceiveProps",parameters:[{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"nextProps",type:"Readonly<FoundationPropsT<CheckboxProps & FoundationProps>>"},{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"nextContext",type:"any"}],returnType:"void",type:"(nextProps: Readonly<FoundationPropsT<CheckboxProps & FoundationProps>>, nextContext: any) => void"}]},{fileName:"src/checkbox/node_modules/@rmwc/base/foundation-component.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"method",name:"componentWillUnmount",inheritedFrom:"FoundationComponent.componentWillUnmount",signatures:[{fileName:"src/checkbox/node_modules/@rmwc/base/foundation-component.tsx",kind:"signature",name:"componentWillUnmount",parameters:[],returnType:"void",type:"() => void"}]},{fileName:"node_modules/@types/react/index.d.ts",flags:{isExported:!0,isExternal:!1,isOptional:!0,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"method",name:"componentWillUpdate",inheritedFrom:"DeprecatedLifecycle.componentWillUpdate",signatures:[{documentation:{contents:["<p>Called immediately before rendering when new props or state is received. Not called for the initial render.</p>\n<p>Note: You cannot call <code>Component#setState</code> here.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.</p>\n",{tag:"see",value:"https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update"},{tag:"see",value:"https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path"}],contentsRaw:"Called immediately before rendering when new props or state is received. Not called for the initial render.\n\nNote: You cannot call `Component#setState` here.\n\nNote: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps\nprevents this from being invoked.\n\n\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update\n@see https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path",metadata:{}},fileName:"node_modules/@types/react/index.d.ts",kind:"signature",name:"componentWillUpdate",parameters:[{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"nextProps",type:"Readonly<FoundationPropsT<CheckboxProps & FoundationProps>>"},{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"nextState",type:"Readonly<FoundationStateT<S>>"},{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"nextContext",type:"any"}],returnType:"void",type:"(nextProps: Readonly<FoundationPropsT<CheckboxProps & FoundationProps>>, nextState: Readonly<FoundationStateT<S>>, nextContext: any) => void"}]},{fileName:"src/checkbox/node_modules/@rmwc/base/foundation-component.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"method",name:"createElement",inheritedFrom:"FoundationComponent.createElement",signatures:[{fileName:"src/checkbox/node_modules/@rmwc/base/foundation-component.tsx",kind:"signature",name:"createElement",parameters:[{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"elementName",type:"string"}],returnType:"FoundationElement<ExtractProps<ElementType>, ElementType>",type:"(elementName: string) => FoundationElement<ExtractProps<ElementType>, ElementType>"}]},{fileName:"src/checkbox/node_modules/@rmwc/base/foundation-component.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"method",name:"emit",inheritedFrom:"FoundationComponent.emit",signatures:[{documentation:{contents:["<p>Fires a cross-browser-compatible custom event from the component root of the given type,</p>\n"],contentsRaw:"Fires a cross-browser-compatible custom event from the component root of the given type,",metadata:{}},fileName:"src/checkbox/node_modules/@rmwc/base/foundation-component.tsx",kind:"signature",name:"emit",parameters:[{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"evtType",type:"string"},{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"evtData",type:"any"},{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"shouldBubble",defaultValue:"false",type:"boolean"}],returnType:"CustomEvent<any>",type:"(evtType: string, evtData: any, shouldBubble?: boolean) => CustomEvent<any>"}]},{fileName:"src/checkbox/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"method",name:"getDefaultFoundation",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/76326d1e5/src/checkbox/index.tsx#L104",signatures:[{fileName:"src/checkbox/index.tsx",kind:"signature",name:"getDefaultFoundation",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/76326d1e5/src/checkbox/index.tsx#L104",parameters:[],returnType:"MDCCheckboxFoundation",type:"() => MDCCheckboxFoundation"}]},{fileName:"node_modules/@types/react/index.d.ts",flags:{isExported:!0,isExternal:!1,isOptional:!0,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"method",name:"getSnapshotBeforeUpdate",inheritedFrom:"NewLifecycle.getSnapshotBeforeUpdate",signatures:[{documentation:{contents:["<p>Runs before React applies the result of <code>render</code> to the document, and\nreturns an object to be given to componentDidUpdate. Useful for saving\nthings such as scroll position before <code>render</code> causes changes to it.</p>\n<p>Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated\nlifecycle events from running.</p>\n"],contentsRaw:"Runs before React applies the result of `render` to the document, and\nreturns an object to be given to componentDidUpdate. Useful for saving\nthings such as scroll position before `render` causes changes to it.\n\nNote: the presence of getSnapshotBeforeUpdate prevents any of the deprecated\nlifecycle events from running.",metadata:{}},fileName:"node_modules/@types/react/index.d.ts",kind:"signature",name:"getSnapshotBeforeUpdate",parameters:[{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"prevProps",type:"Readonly<FoundationPropsT<CheckboxProps & FoundationProps>>"},{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"prevState",type:"Readonly<FoundationStateT<S>>"}],returnType:"SS | null",type:"(prevProps: Readonly<FoundationPropsT<CheckboxProps & FoundationProps>>, prevState: Readonly<FoundationStateT<S>>) => SS | null"}]},{fileName:"src/checkbox/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"method",name:"handleAnimationEnd",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/76326d1e5/src/checkbox/index.tsx#L125",signatures:[{fileName:"src/checkbox/index.tsx",kind:"signature",name:"handleAnimationEnd",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/76326d1e5/src/checkbox/index.tsx#L125",parameters:[{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"evt",type:"AnimationEvent"}],returnType:"void",type:"(evt: AnimationEvent) => void"}]},{fileName:"src/checkbox/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"method",name:"handleOnChange",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/76326d1e5/src/checkbox/index.tsx#L130",signatures:[{fileName:"src/checkbox/index.tsx",kind:"signature",name:"handleOnChange",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/76326d1e5/src/checkbox/index.tsx#L130",parameters:[{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"evt",type:"ChangeEvent<HTMLInputElement>"}],returnType:"void",type:"(evt: ChangeEvent<HTMLInputElement>) => void"}]},{fileName:"src/checkbox/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"method",name:"render",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/76326d1e5/src/checkbox/index.tsx#L135",signatures:[{fileName:"src/checkbox/index.tsx",kind:"signature",name:"render",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/76326d1e5/src/checkbox/index.tsx#L135",parameters:[],returnType:"undefined | null | {}",type:"() => undefined | null | {}"}]},{fileName:"src/checkbox/node_modules/@rmwc/toggleable/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"method",name:"renderToggle",inheritedFrom:"ToggleableFoundationComponent.renderToggle",signatures:[{fileName:"src/checkbox/node_modules/@rmwc/toggleable/index.tsx",kind:"signature",name:"renderToggle",parameters:[{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"toggle",type:"React.ReactNode"}],returnType:"undefined | null | {}",type:"(toggle: React.ReactNode) => undefined | null | {}"}]},{fileName:"node_modules/@types/react/index.d.ts",flags:{isExported:!0,isExternal:!1,isOptional:!0,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"method",name:"shouldComponentUpdate",inheritedFrom:"ComponentLifecycle.shouldComponentUpdate",signatures:[{documentation:{contents:["<p>Called to determine whether the change in props and state should trigger a re-render.</p>\n<p><code>Component</code> always returns true.\n<code>PureComponent</code> implements a shallow comparison on props and state and returns true if any\nprops or states have changed.</p>\n<p>If false is returned, <code>Component#render</code>, <code>componentWillUpdate</code>\nand <code>componentDidUpdate</code> will not be called.</p>\n"],contentsRaw:"Called to determine whether the change in props and state should trigger a re-render.\n\n`Component` always returns true.\n`PureComponent` implements a shallow comparison on props and state and returns true if any\nprops or states have changed.\n\nIf false is returned, `Component#render`, `componentWillUpdate`\nand `componentDidUpdate` will not be called.",metadata:{}},fileName:"node_modules/@types/react/index.d.ts",kind:"signature",name:"shouldComponentUpdate",parameters:[{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"nextProps",type:"Readonly<FoundationPropsT<CheckboxProps & FoundationProps>>"},{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"nextState",type:"Readonly<FoundationStateT<S>>"},{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"nextContext",type:"any"}],returnType:"boolean",type:"(nextProps: Readonly<FoundationPropsT<CheckboxProps & FoundationProps>>, nextState: Readonly<FoundationStateT<S>>, nextContext: any) => boolean"}]},{fileName:"src/checkbox/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"method",name:"sync",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/76326d1e5/src/checkbox/index.tsx#L93",signatures:[{fileName:"src/checkbox/index.tsx",kind:"signature",name:"sync",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/76326d1e5/src/checkbox/index.tsx#L93",parameters:[{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"nextProps",type:"CheckboxProps"}],returnType:"void",type:"(nextProps: CheckboxProps) => void"}]},{fileName:"src/checkbox/node_modules/@rmwc/base/foundation-component.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"method",name:"syncProp",inheritedFrom:"FoundationComponent.syncProp",signatures:[{fileName:"src/checkbox/node_modules/@rmwc/base/foundation-component.tsx",kind:"signature",name:"syncProp",parameters:[{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"prop",type:"any"},{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"prevProp",type:"any"},{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"callback",type:"() => void"}],returnType:"void",type:"(prop: any, prevProp: any, callback: () => void) => void"}]},{fileName:"src/checkbox/node_modules/@rmwc/base/foundation-component.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"method",name:"update",inheritedFrom:"FoundationComponent.update",signatures:[{fileName:"src/checkbox/node_modules/@rmwc/base/foundation-component.tsx",kind:"signature",name:"update",parameters:[],returnType:"void",type:"() => void"}]}],properties:[{fileName:"src/checkbox/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!0},kind:"property",name:"displayName",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/76326d1e5/src/checkbox/index.tsx#L82",defaultValue:'"Checkbox"',type:"string"},{fileName:"src/checkbox/node_modules/@rmwc/base/foundation-component.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!0},kind:"property",name:"shouldDebounce",defaultValue:"false",inheritedFrom:"FoundationComponent.shouldDebounce",type:"boolean"},{fileName:"src/checkbox/node_modules/@rmwc/base/foundation-component.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"property",name:"elements",inheritedFrom:"FoundationComponent.elements",type:"{ [key: string]: FoundationElement<any, any> }"},{fileName:"src/checkbox/node_modules/@rmwc/base/foundation-component.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"property",name:"foundation",inheritedFrom:"FoundationComponent.foundation",type:"MDCCheckboxFoundation"},{fileName:"src/checkbox/node_modules/@rmwc/toggleable/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"property",name:"generatedId",defaultValue:" randomId(this.constructor.displayName)",inheritedFrom:"ToggleableFoundationComponent.generatedId",type:"string"}],constructorType:{fileName:"src/checkbox/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"constructor",name:"constructor",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/76326d1e5/src/checkbox/index.tsx#L85",signatures:[{fileName:"src/checkbox/index.tsx",kind:"signature",name:"new Checkbox",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/76326d1e5/src/checkbox/index.tsx#L85",parameters:[{flags:{isExported:!1,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"parameter",name:"props",type:"CheckboxProps"}],returnType:"Checkbox",type:"(props: CheckboxProps) => Checkbox"}]}},CheckboxProps:{documentation:{contents:["<p>A Checkbox component.</p>\n"],contentsRaw:"A Checkbox component.",metadata:{}},fileName:"src/checkbox/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!1,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"interface",name:"CheckboxProps",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/76326d1e5/src/checkbox/index.tsx#L21",extends:["WithRippleProps","ToggleableFoundationProps"],methods:[],properties:[{documentation:{contents:["<p>DEPRECATED: pass an options object to the ripple prop <code>ripple={{accent: true}}</code></p>\n"],contentsRaw:"DEPRECATED: pass an options object to the ripple prop `ripple={{accent: true}}`",metadata:{}},fileName:"src/checkbox/node_modules/@rmwc/types/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!0,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"property",name:"accent",inheritedFrom:"DeprecatedRippleProps.accent",type:"undefined | false | true"},{documentation:{contents:["<p>Toggle the control on and off.</p>\n"],contentsRaw:"Toggle the control on and off.",metadata:{}},fileName:"src/checkbox/node_modules/@rmwc/toggleable/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!0,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"property",name:"checked",inheritedFrom:"ToggleableFoundationProps.checked",type:"undefined | false | true"},{documentation:{contents:["<p>Disables the control.</p>\n"],contentsRaw:"Disables the control.",metadata:{}},fileName:"src/checkbox/node_modules/@rmwc/toggleable/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!0,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"property",name:"disabled",inheritedFrom:"ToggleableFoundationProps.disabled",type:"undefined | false | true"},{documentation:{contents:["<p>A DOM ID for the toggle.</p>\n"],contentsRaw:"A DOM ID for the toggle.",metadata:{}},fileName:"src/checkbox/node_modules/@rmwc/toggleable/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!0,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"property",name:"id",inheritedFrom:"ToggleableFoundationProps.id",type:"undefined | string"},{documentation:{contents:["<p>Make the control indeterminate</p>\n"],contentsRaw:"Make the control indeterminate",metadata:{}},fileName:"src/checkbox/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!0,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"property",name:"indeterminate",sourceUrl:"https://github.com/jamesmfriedman/rmwc/blob/76326d1e5/src/checkbox/index.tsx#L25",type:"undefined | false | true"},{documentation:{contents:["<p>A reference to the native input.</p>\n"],contentsRaw:"A reference to the native input.",metadata:{}},fileName:"src/checkbox/node_modules/@rmwc/toggleable/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!0,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"property",name:"inputRef",inheritedFrom:"ToggleableFoundationProps.inputRef",type:"undefined | (ref: HTMLInputElement | null) => void"},{documentation:{contents:["<p>A label for the control.</p>\n"],contentsRaw:"A label for the control.",metadata:{}},fileName:"src/checkbox/node_modules/@rmwc/toggleable/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!0,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"property",name:"label",inheritedFrom:"ToggleableFoundationProps.label",type:"React.ReactNode"},{documentation:{contents:["<p>Adds a ripple effect to the component</p>\n"],contentsRaw:"Adds a ripple effect to the component",metadata:{}},fileName:"src/checkbox/node_modules/@rmwc/types/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!0,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"property",name:"ripple",inheritedFrom:"WithRippleProps.ripple",type:"RipplePropT"},{documentation:{contents:["<p>By default, all props except className and style spread to the input. These are additional props for the root of the checkbox.</p>\n"],contentsRaw:"By default, all props except className and style spread to the input. These are additional props for the root of the checkbox.",metadata:{}},fileName:"src/checkbox/node_modules/@rmwc/toggleable/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!0,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"property",name:"rootProps",inheritedFrom:"ToggleableFoundationProps.rootProps",type:"React.HTMLProps<any>"},{documentation:{contents:["<p>DEPRECATED: pass an options object to the ripple prop <code>ripple={{surface: true}}</code></p>\n"],contentsRaw:"DEPRECATED: pass an options object to the ripple prop `ripple={{surface: true}}`",metadata:{}},fileName:"src/checkbox/node_modules/@rmwc/types/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!0,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"property",name:"surface",inheritedFrom:"DeprecatedRippleProps.surface",type:"undefined | false | true"},{documentation:{contents:["<p>DEPRECATED: pass an options object to the ripple prop <code>ripple={{unbounded: true}}</code></p>\n"],contentsRaw:"DEPRECATED: pass an options object to the ripple prop `ripple={{unbounded: true}}`",metadata:{}},fileName:"src/checkbox/node_modules/@rmwc/types/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!0,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"property",name:"unbounded",inheritedFrom:"DeprecatedRippleProps.unbounded",type:"undefined | false | true"},{documentation:{contents:["<p>The value of the control.</p>\n"],contentsRaw:"The value of the control.",metadata:{}},fileName:"src/checkbox/node_modules/@rmwc/toggleable/index.tsx",flags:{isExported:!0,isExternal:!1,isOptional:!0,isPrivate:!1,isProtected:!1,isPublic:!1,isRest:!1,isStatic:!1},kind:"property",name:"value",inheritedFrom:"ToggleableFoundationProps.value",type:"string | number | string[]"}]}}}},872:function(e,t,n){"use strict";n.r(t);var o=n(31),i=n(0),s=n.n(i),a=n(40),r=n(817),d=n(816),c=n(107);t.default=function(){return s.a.createElement(a.b,{title:"Checkboxes",lead:"Checkboxes allow the user to select multiple options from a set.",module:"@rmwc/checkbox",styles:["@material/checkbox/dist/mdc.checkbox.css","@material/form-field/dist/mdc.form-field.css"],docsLink:"https://material.io/develop/web/components/input-controls/checkboxes/",examples:d},s.a.createElement(a.c,{label:"Controlled"},function(){var e=s.a.useState(!1),t=Object(o.a)(e,2),n=t[0],i=t[1];return s.a.createElement(c.a,{label:"Cookies",checked:n,onChange:function(e){return i(e.currentTarget.checked)}})}),s.a.createElement(a.c,{label:"Uncontrolled"},s.a.createElement(c.a,{label:"Pizza"})),s.a.createElement(a.c,{label:"Label as Child"},s.a.createElement(c.a,null,"Icecream")),s.a.createElement(a.c,{label:"States"},s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,{label:"Broccoli",indeterminate:!0}),s.a.createElement(c.a,{label:"Always On",checked:!0}),s.a.createElement(c.a,{label:"Always Off",checked:!1}))),s.a.createElement(a.a,{src:r,components:[c.a]}))}}}]);
//# sourceMappingURL=7.5b01773e.chunk.js.map