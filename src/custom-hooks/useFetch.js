import { useEffect, useState } from 'react'

const useFetch = url => {
// 내부적으로 useState 훅을 사용하므로, 바깥에서 useFetch 훅을 사용한 컴포넌트는state 값이 변경되면 다시 render 됨
    const [state, setState] = useState({
        data: null,
        loading: true
    })
    useEffect(() => {
// 다시 요청을 보내야 되므로, data는 그대로 전달하고 loading을 true로 변경
        setState(state => ({ data: state.data, loading: true }))
        fetch(url)
            .then(res => res.json())
            .then(data => {
// 이 시점 이후 useFetch 훅을 사용한 컴포넌트 다시 render
                setState({
                    data: data,
                    loading: false
                })
            })
    }, [url])
    return state
}
export default useFetch
