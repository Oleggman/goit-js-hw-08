function e(e){return e&&e.__esModule?e.default:e}var t,a;t=JSON.parse('{"LS_CURRENTTIME":"videoplayer-current-time","LS_FEEDBACK_FORM":"feedback-form-state"}');const l=null!==(a=localStorage.getItem(e(t).LS_FEEDBACK_FORM))&&void 0!==a?a:"{}",n=JSON.parse(l),r=document.querySelector(".feedback-form");var o,s;r.elements.email.value=null!==(o=n.email)&&void 0!==o?o:"",r.elements.message.value=null!==(s=n.message)&&void 0!==s?s:"",r.addEventListener("input",(function(a){n[a.target.name]=a.target.value,localStorage.setItem(e(t).LS_FEEDBACK_FORM,JSON.stringify(n))})),r.addEventListener("submit",(function(a){a.preventDefault(),console.log(n),localStorage.removeItem(e(t).LS_FEEDBACK_FORM),r.reset()}));
//# sourceMappingURL=03-feedback.58144ad8.js.map
