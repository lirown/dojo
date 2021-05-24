import{d as t,m as e,i as s,r as i,o as a,T as o,k as n,l as c}from"./d6051293.js";import{P as d}from"./0f11c048.js";import{S as r,a as l}from"./48f989b2.js";let u,h,p,m,g,v,y=t=>t;class f extends d{static get properties(){return{state:{type:Object},topicsCount:{type:Object,default:{}}}}constructor(t){super(t),this.getTopic=this.getTopic.bind(this),this.topicsCount={},this.sectionStatus={}}async firstUpdated(){await this.fetch()}async fetch(e){const s=this.getTopic();this.state=await t.store("notepad").query({groupBy:"section",filter:t=>t.topic===("string"==typeof e?e:s)}),this.topicsCount=await t.store("notepad").aggregate({groupBy:"topic"})}changeTab({detail:{key:t}}){history.pushState(null,"",`/notepad/${t}`),this.fetch(t)}getTopic(){const t=location.href.split("/").reverse()[0],s=!t||t.includes("software")?this.location.params.topic:t;return s.includes("software")?e:s}get modal(){return document.querySelector("#auth-modal").modal}toggleStatus(t){this.sectionStatus[t]&&"added"!==this.sectionStatus[t]?this.sectionStatus[t]="added":this.sectionStatus[t]="done",this.requestUpdate()}render(){const t=this.getTopic();if(!s.includes(t))return void i("404");const{state:e,topicsCount:d}=this,f=()=>setTimeout((()=>this.fetch()),500),b=a().map((t=>({...t,count:this.topicsCount[t.key]||0}))),$=a().find((e=>e.key===t)).name,k=t=>({status:e})=>(this.sectionStatus[t]||"added")===e;return o(u||(u=y`
      <section class="hero">
        <div class="container">
          <div class="hero-inner">
            <h1>My Growth Notepad</h1>
            <div class="goal-items">
                <elastic-tabs @change="${0}" .tabs="${0}" activeElementName="${0}">
                </elastic-tabs>
            </div>
          </div>
        </div>
      </section>
        <section style="min-height: 1000px">
        <div class="container">
          <div class="result-inner">
            <p>
              <b>Note:</b> By default, things you’ve added or marked as done will be
              stored on your browser. If you want to persist them so you can
              change devices or browsers, we do recommend you to <span id="auth-text" @click="${0}">Sign up / sign in</span>.
            </p>
            <fc-auth-modal id="auth-modal"></fc-auth-modal>
          </div>
          <div class="result-data">
            ${0}
           </div>
          </div>
        </div>
      </section>
    `),(t=>this.changeTab(t)),b,$,(()=>this.modal.open()),e?n.map((t=>o(h||(h=y`
                      <div class="result-box">
                        <div class="left-box">
                          <div class="box-title">
                            ${0}
                            <a
                              class="link"
                              @click=${0}
                            >
                              ${0}
                            </a>
                          </div>
                          <div class="box-subtitle">
                            ${0}
                          </div>
                          <div class="box-questions">
                            ${0}
                          </div>
                        </div>
                      </div>
                    `),t,(()=>this.toggleStatus(t)),"added"===this.sectionStatus[t]?"View Open Items":"View History",c[t].description,0===(e[t]||[]).filter(k(t)).length?o(p||(p=y` <div>Nothing here yet.</div> `)):e[t].filter(k(t)).map((({key:t,section:e,topic:s,status:i,link:a,updatedAt:n})=>o(m||(m=y`
                                      <div>
                                        <div class="${0}">
                                          ${0}
                                          <span>
                                            <span class="checkbox-text">
                                              ${0}
                                            </span>
                                            <span
                                              class="green done-text"
                                              style=""
                                              ?hidden=${0}
                                            >
                                              done on the
                                              ${0}
                                            </span>
                                            ${0}
                                          </span>
                                        </div>
                                      </div>
                                    `),i,r({key:t,section:e,topic:s,status:i,link:a,callback:f}),a?o(g||(g=y`
                                                    <a
                                                      class="link"
                                                      href="${0}"
                                                      target="_blank"
                                                      >${0}</a
                                                    >
                                                  `),a,t):o(v||(v=y` ${0} `),t),"done"!==i,new Date(n).toLocaleString("en-us",{day:"numeric",month:"long",year:"numeric",hour:"numeric",minute:"numeric"}),l({key:t,callback:f}))))))):"loading...")}}customElements.define("page-notepad",f);export{f as PageNotepad};
