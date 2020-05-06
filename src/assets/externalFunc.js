// LOAD EXTERNAL SCRIPTS INTO CODE STRUCTURE
let publicPath = "../../public"

const load_script = (src) => {
    let scriptSrc = `${publicPath}/js/${src}`;
    // if (document.querySelector(`script[src=${scriptSrc}]`)) {
    //     return
    // }
    let script = document.createElement('script');
    script.setAttribute('src', scriptSrc);
    script.setAttribute('type', 'text/javascript');
    document.body.appendChild(script);
}

const del_script = src => {
    let scriptSrc = `${publicPath}/js/${src}`;
    let el = document.querySelector(`script[src=${scriptSrc}]`);
    if (el) {
        el.removeChild();
    }
}

export {
    load_script,
    del_script
}