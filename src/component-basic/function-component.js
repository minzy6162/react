// 화살표 함수로 컴포넌트 정의 (props 값은 함수의 파라미터로 전달)
import ReactDOM from "react-dom"

const Greeting = (props) => {
    return (<h1>Hello, {props.name}</h1>)
}

const Smile = (props) => <span style={{fontSize: (props.size || 16) + 'px'}}>😃
</span>

function FuncComponent(props) {
    return (
        <div>
            {/* 일반적인 컴포넌트와 똑같이 사용 가능 */}
            <Greeting name="John" />
            <Smile size={100} />
            <Smile />
        </div>
    )
}

ReactDOM.render(<FuncComponent />, document.getElementById("root"))
