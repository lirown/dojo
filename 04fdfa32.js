import{a as e,r as s,d as t,T as i,b as a,t as o,e as l,g as r,u as n}from"./d6051293.js";import{P as c}from"./0f11c048.js";let d,v,h,u=e=>e;class p extends c{render(){const{role:c}=this.location.params;return e.includes(c)?(t.store("user").create("user",{role:c}),i(d||(d=u`
      <section class="hero hero-result level-${0}">
        <div class="container">
          <div class="hero-inner">
            <p>
              We don’t know what your real title is (that would be creepy!) but
              the level of impact you’ve mentioned fits here:
            </p>

            <h1>${0}</h1>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="result-inner">
            <h3>
                Which area would you like to improve at in the next 6 months?
            </h3>

              <p>
                  We’ve put 4 areas that should serve as a nice distinction between different skills and experience to work on.</p>
              <p>Go ahead, click on one of them. You can always explore other areas later.</p>
          </div>
          <div class="result-data">
            ${0}
        </div>
      </section>
    `),a[c].level.split(" ")[1],a[c].title,o.map((e=>i(v||(v=u`
                <div class="result-box">
                  <div class="left-box">
                    <div class="box-title">
                      <i class="${0}"></i>${0}
                    </div>
                    <div class="box-tags">
                      <ul>
                        ${0}
                      </ul>
                    </div>
                  </div>
                  <div class="right-box">
                    <a
                      class="text-white"
                      href="${0}"
                    >
                      <fc-button size="small" class="work"
                        >Show me How</fc-button
                      >
                    </a>
                  </div>
                </div>
              `),l[e].icon,e,r(e).map((e=>i(h||(h=u` <li>${0}</li> `),e))),n("improve",{role:c,topic:l[e].link})))))):s("404")}}customElements.define("page-result",p);export{p as PageResult};
