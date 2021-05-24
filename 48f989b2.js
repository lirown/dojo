import{T as e,d as t,f as c}from"./d6051293.js";let o,n=e=>e;function a({status:a,key:d,section:i,topic:l,link:s,callback:k}){return console.log(a,d),e(o||(o=n`
    <fc-tooltip
      tooltip="${0}"
      position="top"
    >
      <fc-checkbox
        ?checked=${0}
        @click="${0}"
      ></fc-checkbox
    ></fc-tooltip>
  `),"done"===a?"added?":"done?","done"===a,(({target:e})=>t.create(d,{status:"done"===a?"added":"done",link:s,key:d,section:i,topic:l}).then((()=>"added"!==a?e.removeAttribute("checked"):e.setAttribute("checked",""))).then(k).then(c)))}let d,i=e=>e;function l({key:o,callback:n}){return e(d||(d=i`
    <a
      @click="${0}"
      class="delete-link"
    >
      Remove <a />
    </a>
  `),(()=>t.remove(o).then(n).then(c)))}export{a as S,l as a};
