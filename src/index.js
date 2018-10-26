import React from 'react'
import {render} from 'react-dom'
import ArticleList from './ArticleList'
import {articles} from './fixture'

render(<ArticleList articles = {articles}/>, document.getElementById('container'));
