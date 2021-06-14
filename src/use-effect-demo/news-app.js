import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

const NewsList = ({ articles }) => {
    return (
        <ul>
            {
                articles.map((article, idx) => {
                    return (<li key={idx}>
                        <NewsItem article={article} />
                    </li>)
                })
            }
        </ul>
    )
}

const NewsItem = (props) => {
    const {title, description, url, urlToImage} = props.article

    return (
        <div>
            <h1><a href={url} target='_blank'>{title}</a></h1>
            <img style={{height: '100px'}} src={urlToImage}/>
            <p>{description}</p>
        </div>
    )
}

const Search = ({ label, handleSearch }) => {
    const [keyword, setKeyword] = useState('')
    // const ref = useRef()

    /*
    useEffect(() => {
        ref.current.value = keyword
    }, [keyword])
    */
    return (
        <div>
            <input
                type="text"
                value={keyword}
                onChange={(e) => {
                    setKeyword(e.target.value)
                }}
            />
            <button onClick={() => {
                const k = keyword.trim()
                if(k.length === 0) {
                    alert('검색어를 정확히 입력해주세요.')
                } else {
                    handleSearch(k)
                }
            }}>{label ?? "검색"}</button>
        </div>
    )
}

const NewsApp = () => {
    const [query, setQuery] = useState(null)
    const [articles, setArticles] = useState([])
    const apiKey = '1f53e5d2542c4249ae8ab514d7ca273a'

    useEffect(() => {
        if(query) {
            fetch(`http://newsapi.org/v2/everything?apiKey=${apiKey}&q=${query}`)
                .then(res => res.json())
                .then(data => {
                    // 데이터 설정 및 로딩 상태 갱신
                    setArticles(data.articles)
                })
        }
    }, [query])

    return (
        <div>
            <Search handleSearch={setQuery} />
            <h1>{query}</h1>
            <NewsList articles={articles} />
        </div>
    )
}

ReactDOM.render(<NewsApp />, document.getElementById("root"))
