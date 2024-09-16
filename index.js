const root = document.getElementById("root");

function createElement(type, props={}, ...children) {
    const propsString = Object.entries(props).map(([key,value])=>`${key}="${value}"`).join(' ');

    return `<${type} ${propsString}>${children.join('')}</${type}>`
}

root.innerHTML = createElement('div',{class:'border border-black flex flex-col'},createElement('h1',{},'Título'),createElement('p',{},'Um texto de descrição'));