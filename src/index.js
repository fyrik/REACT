import React from 'react'
import {render} from 'react-dom'

var el = React.createElement('h1', null, 'hello WORLD');
render(el, document.getElementById('container'));
