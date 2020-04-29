// LOAD EXTERNAL SCRIPTS INTO CODE STRUCTURE
const load_script = (src, section) => {
    let scriptSrc = '@/assets/js/'+src;
    if (document.querySelector("script[src='"+ scriptSrc +"']")) { return; }
    let script = document.createElement('script');
    script.setAttribute('src', scriptSrc);
    script.setAttribute('type', 'text/javascript');
    (section==='head') ? document.head.appendChild(script) : document.body.appendChild(script);
}

const del_script = src => {
    let scriptSrc = '@/assets/js/'+src;
    let el = document.querySelector("script[src='"+ scriptSrc +"']");
    if (el) {el.remove();}
}

export {load_script, del_script}