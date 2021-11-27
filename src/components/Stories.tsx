import React from 'react'
import { Story } from './Story'
import {getClassWithVariant} from '../utils/classUtils'
import './styles.css'

var MOCK_USERS = ['lorem_ipsum', 'dolor_sit', 'amet_13', 'qui_aliquid']

interface IStoriesProps {
    variant: string
}

export const Stories = (props:IStoriesProps) => {
    const { variant } = props
        return <div id="stories-container">
            <div className={getClassWithVariant("story_layout", variant)}>
                {MOCK_USERS.map((user,i) => <Story label={user} variant={variant} key={'story'+i} />)}
            </div>
        </div>
    
}