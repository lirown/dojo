import{T as e,d as t,r as n}from"./d6051293.js";import{P as o}from"./0f11c048.js";const s="Entry Level Engineer",r="Software Engineer",a="Senior Software Engineer",i="Principal Software Engineer",c="Staff Software Engineer";var l=[{question:"When it’s unclear why you need to build a certain capability, what do you do?",answers:[{content:"As long as I understand the task, it’s fine with me",type:s},{content:"Ask my manager, this is their job",type:r},{content:"I feel comfortable talking with various people (product, sales, etc.) and figuring out the answer",type:a},{content:"I’m usually the one who figure these thing out for others. That's how I work",type:i}]},{question:"When you lead projects, how big are they (number of people involved / time)?",answers:[{content:"I help with other projects; haven't lead one myself yet",type:s},{content:"I work by myself / up to a few weeks",type:r},{content:"Me and 2-3 more people from my team / a few weeks to a few months",type:a},{content:"Me and 5-15 people from various teams, for a few weeks to a few months",type:c},{content:"I lead some of the biggest initiatives in the company, having at least 10 people working with me for more than a year",type:i}]},{question:"Do you know well the company’s goals for the year and why these goals were chosen?",answers:[{content:"Not really. I remember some numbers but not more than that. I don’t think it’s needed for me to work.",type:s},{content:"Yes, I know the goals well. I don’t know the rational for picking them",type:r},{content:"I can explain the goals and why they’re critical for our success to other teammates",type:a},{content:"I use the company’s goals to attract talent during interviews and while helping to onboard new teammates",type:i}]},{question:"Who usually hears from you?",answers:[{content:"I update my manager on my progress.",type:s},{content:"My teammates. I provide context on my work.",type:r},{content:"I tend to update bigger forums around the projects I lead, or things I did to make others’ life easier",type:a},{content:"It’s very common to hear from me on various projects and initiatives by email, Slack and f2f. Many people outside of my team know my work.",type:i}]},{question:"If others are working on a big project (>6 months effort), when are they coming to consult with you?",answers:[{content:"Very rarely. Maybe if it’s around code I wrote.",type:s},{content:"Here and there. I do have some expertise in specific types of systems or solutions that people want to leverage my knowledge for",type:r},{content:"People consult with me on big projects where I have context - from making sure requirements are solid to the solutions and tradeoffs they have in mind",type:a},{content:"People consult with me on everything they feel is a big challenge. Even if I don’t have specific context, they feel comfortable sharing and getting my perspective.",type:i}]}];const h=["Answer these 5 quick questions without overthinking it.","Amazing! Only 4 left...","You’re doing great, please continue...","So much fun! 2 more questions please :)","And the last one..."];function d({answers:e}){const t=Array.from(new Set(e)).filter((e=>void 0!==e));return 1===t.length&&t.includes(s)?"entry-level-engineer":t.includes(s)||t.includes(r)||t.includes(a)||t.includes(c)?t.includes(s)||t.includes(r)||!t.includes(i)&&!t.includes(c)?t.includes(s)||t.includes(r)?"software-engineer":"senior-software-engineer":"staff-software-engineer":"principal-software-engineer"}let u,p,m,y=e=>e;class f extends o{static get properties(){return{selected:{type:Number,default:0}}}render(){return this.answers=this.answers||[],this.selected=this.selected||0,e(u||(u=y`
      <section class="hero">
        <div class="container">
          <div class="hero-inner">
            <p>To be helpful, we need to get to know you just a little.</p>

            <h1>${0}</h1>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          ${0}
        </div>
      </section>
    `),h[this.selected],l.map((({question:t,answers:n},o)=>e(p||(p=y`
              <div class="quiz-inner" ?hidden=${0}>
                <div class="quiz-data">
                  <div class="quiz-q" place="${0}_">${0}</div>
                  <div class="quiz-a">
                    <fc-radio-group
                      name="q-radio"
                      @change=${0}
                    >
                      ${0}
                    </fc-radio-group>
                  </div>
                </div>
              </div>
            `),this.selected!=o,o+1,t,(async e=>await this.answerChosen(e,o)),n.map((({content:t,type:n})=>e(m||(m=y`
                            <fc-radio value="${0}">${0}</fc-radio>
                          `),n,t)))))))}reshuffle(){return Math.random()-.5}async answerChosen({target:e},t){this.answers.push(e.value),setTimeout((async()=>{if(4===this.selected)return await this.redirectResult();this.selected=t+1,this.requestUpdate()}),500)}async redirectResult(){const{answers:e}=this,o={role:d({answers:e})};await t.store("user").create("user",o),localStorage.setItem("user.role",o.role),n("result",o)}}customElements.define("page-quiz",f);export{f as PageQuiz};
