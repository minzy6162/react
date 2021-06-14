import React from 'react'
import ReactDOM from 'react-dom'

const name = 'Josh Perez'
// 변수 내용 삽입 가능
const element = <h1>Hello, {name}</h1>

const lst = [100, 200, 300]
const person = {
    name: 'John',
    age: 20
}
function double(value) {
    return value * 2
}

// 주석
const JSXwithExpressions = (
    <h1>
        {/* 밑에 처럼 변수, 배열 접근 가능 */}
        {lst[0]}
        &nbsp;{person.name}
        &nbsp;{person.age}
        &nbsp;{2 + 2}
        &nbsp;{person.name.toUpperCase()}
        &nbsp;{person.name.length}
        &nbsp;{double(person.age)}
    </h1>)

//














const div = (<div>
    { 1 + 1 }
    {true}
    {false}
    {undefined}
    {null}
</div>)

let unreadMessages = ["Hello", "World"]

const div2 = (<div>
    <h1>Hello!</h1>
    {/* 만약 읽지 않은 메시지가 있다면 경고문 출력 */}
    {unreadMessages.length > 0 &&
    <h2>You have {unreadMessages.length} unread messages.</h2>
    }
</div>)

function conditionalRender(age) {
    if(age >= 20) {
        return <div>성인</div>
    } else {
        return <div>미성년자</div>
    }
}

const el1 = conditionalRender(100)
const el2 = conditionalRender(10)

const age = 20
const conditionalElement = (
    <>{age >= 20 ? <div>성인</div> : <div>미성년자</div>}</>
)

const cssObj = {color: "red", backgroundColor: "blue"}
const h1 = <h1 style={cssObj}>Hello Style!</h1>
const h2 = <h1 style={{color: "red"}}>Hello Style!</h1>


ReactDOM.render(h1, document.getElementById("root"))
