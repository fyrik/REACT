import React from 'react'
import Article from './Article'


export default function ArticleList(props) {

    const {articles} = props;
    const articleElement = articles.map((article) => <li><Article article = {article}/></li>);
    return (
        <ul>
            {articleElement}
        </ul>
    )
}