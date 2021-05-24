import{T as t,d as e,n as s,D as a,f as i,i as o,a as n,r as l,j as c,s as d,b as r,k as p,l as u}from"./d6051293.js";import{P as v}from"./0f11c048.js";import{S as k,a as b}from"./48f989b2.js";let h,m=t=>t;function f({status:o,key:n,section:l,topic:c,label:d="Work on it",link:r,callback:p}){return t(h||(h=m`
    <fc-button
      style="--fc-button-text-transform:uppercase;--fc-button-color:white;"
      ?valid=${0}
      @click="${0}"
      class="${0}"
      size="medium"
      >${0}</fc-button
    >
  `),["done","added"].includes(o),(()=>e.create(n,{status:s[o]||a,key:n,section:l,link:r,topic:c}).then(p).then(i)),o,"work"===o?`${d} +`:o)}let $,y,g,w,x,j=t=>t;class W extends v{static get properties(){return{state:{type:Object}}}async firstUpdated(){this.state=await e.store("notepad").query({groupBy:"key",flat:!0})}render(){const{topic:e,role:s}=this.location.params;if(!o.includes(e)||!n.includes(s))return l("404");const a=this.firstUpdated.bind(this),i=c({topic:e,role:s});return t($||($=j`
      <section class="hero hero-improve">
        <div class="container">
          <div class="hero-inner">
            <h1> Improving at ${0}
            <p>
              Level: ${0}
            </p>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="result-inner">
            <h3>What do you do well? What do you want to work on?</h3>
            <p>
              Navigate between the different topics and mark things you believe
              you’re doing well today, or add to your growth notepad ideas and
              suggestions you’d like to work on later.
            </p>
          </div>
          <div class="result-data">
            ${0}
          </div>
        </div>
      </section>
    `),d(e),r[s].title,this.state?p.map((s=>t(y||(y=j`
                      <div class="result-box">
                        <div class="left-box">
                          <div class="box-title">${0}</div>
                          <div class="box-subtitle">
                            ${0}
                          </div>
                          <div class="box-questions">
                            ${0}
                          </div>
                        </div>
                      </div>
                    `),s,u[s].description,i[s].map((i=>{const o=i.name||i["anti-pattern"]||i,n=(this.state[o]||{}).status||"work";return i.link&&i.name?t(g||(g=j`
                                    <div>
                                      <div class="${0}">
                                        ${0}
                                        <a
                                          class="link"
                                          href="${0}"
                                          target="_blank"
                                          >${0}</a
                                        >
                                      </div>
                                      ${0}
                                    </div>
                                  `),n,k({status:n,key:o,section:s,topic:e,link:i.link,callback:a}),i.link,i.name,f({status:n,key:o,link:i.link,topic:e,section:s,label:"Explore Later",callback:a})):t(w||(w=j`
                                    <div>
                                      <div class="${0}">
                                        ${0}
                                        <span
                                          class="checkbox-text improve-label"
                                          >${0}
                                          ${0}
                                        </span>
                                      </div>
                                      ${0}
                                    </div>
                                  `),n,k({status:n,key:o,section:s,topic:e,callback:a}),o,["added","done"].includes(n)?b({key:o,callback:a}):"",f({status:n,key:o,topic:e,section:s,label:"Work on it",callback:a}))}))))):t(x||(x=j`Loading...`)))}}customElements.define("page-improve",W);export{W as PageImprove};
