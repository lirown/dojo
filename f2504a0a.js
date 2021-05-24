import{T as e}from"./d6051293.js";import{P as n,s as o}from"./0f11c048.js";let s,t=e=>e;class a extends n{render(){return e(s||(s=t`
      <section class="not-found">
        <h1>404</h1>
        <h2>Oops!</h2>
        <h3>We can't seem to find the page you're looking for...</h3>
      </section>
    `))}connectedCallback(){super.connectedCallback(),o("name","render:status_code","404")}disconnectedCallback(){removeMetaTag("name","render:status_code"),super.disconnectedCallback()}}customElements.define("page-not-found",a);export{a as PageNotFound};
