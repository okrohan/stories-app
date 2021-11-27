import React from 'react'
import uuid from 'uuid';

import {getClassWithVariant} from '../utils/classUtils'
import './styles.css'

interface IStoreProps {
    variant:string;
    label: string;
}

export const Story = (props:IStoreProps) => {
    const { variant, label } = props
    return (
    <div className={getClassWithVariant("story_container", variant)}>
        <div className={getClassWithVariant("story_image_wrapper", variant)}>
        <img src={`https://source.unsplash.com/random/360x240?random=${uuid.v4()}`} className={getClassWithVariant("story_image", variant)} />
    </div>
        <div className={getClassWithVariant("story_text", variant)}>{label}</div>
    </div>
    )
}