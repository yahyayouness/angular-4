"use strict";

class AlphormHello extends HTMLElement {

    constructor() {                   
        super();
        console.log("constructor");
    }
    
    connectedCallback(){
        console.log("connectedCallback");
        let shadowDom = this.attachShadow({mode:'open'});
        let template = document.querySelector('#templateHelloAlphorm');
        shadowDom.innerHTML=template.innerHTML;
    } 

    disconnectedCallback(){
        console.log("disconnectedCallback");
    } 

    attributeChangedCallback() {
        console.log("attributeChangedCallback");
    }   
  
}

window.customElements.define('alphorm-hello',AlphormHello);