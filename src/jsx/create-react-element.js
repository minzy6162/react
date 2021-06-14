import React from 'react'
import ReactDOM from 'react-dom'

// const element = <h1>Hello, world!</h1>;
// const element = React.createElement("h1", null, "Hello, world!");
// const img = React.createElement('img', { src: 'https://picsum.photos/id/237/200/300', title: 'img title' })
const img = React.createElement(
    'img',
    {
        src: 'https://picsum.photos/id/237/200/300',
        title: 'img title'
    }
)

const paragraph = React.createElement(
    'p',
    null,
    'Hello, React'
)

/*
const lst = ['Chocolate', 'Vanilla', 'Banana'].map(flavor => {
    return React.createElement('li', null, flavor)
})
*/
const lst = ['Chocolate', 'Vanilla', 'Banana'].map(flavor => {
    return <h1>{flavor}</h1>
})
const title = 'My favorite ice cream flavors'
/*
const favorites = React.createElement('div', null,
    React.createElement('h1', null, `Title : ${title}`),
    React.createElement('ul', null, lst)
)
*/
const favorites = <div>
    <h1>${`Title : ${title}`}</h1>
    <ul>{lst}</ul>
</div>

/* const rootDiv = React.createElement('div', { id: 'mydiv' }, [img, paragraph, favorites]) */
const rootDiv = <div id="mydiv">
    {img}
    {paragraph}
    {favorites}
</div>

console.log(rootDiv)

const rootElement = document.getElementById("root")
ReactDOM.render(rootDiv, rootElement)
