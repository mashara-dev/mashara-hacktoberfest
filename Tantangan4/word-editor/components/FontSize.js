import React from 'react'
import {
    PixelRatio,
    Dimensions
} from 'react-native'
import Constants from 'expo-constants';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
} = Dimensions.get('window')
const scale = SCREEN_WIDTH / 375

let time = 48
let postTitle = 20
let title = 18
let regular = 16
let subtitle = 14
let meta = 12
let verified = 10

let titleLineHeightScale = 1.4
let contentLineHeightScale = 1.6

let timeLineHeight = Math.round(time * titleLineHeightScale)
let postTitleLineHeight = Math.round(postTitle * contentLineHeightScale)
let titleLineHeight = Math.round(title * titleLineHeightScale)
let regularLineHeight = Math.round(regular * contentLineHeightScale)
let subtitleLineHeight = Math.round(subtitle * contentLineHeightScale)
let metaLineHeight = Math.round(meta * contentLineHeightScale)

function normalize(size) {
    if (PixelRatio.get() !== 2) {
        let newSize = Math.round(PixelRatio.roundToNearestPixel(size * scale))
        return newSize
    }
    return size
}

export default {
    time: normalize(time),
    postTitle: normalize(postTitle),
    title: normalize(title),
    regular: normalize(regular),
    subtitle: normalize(subtitle),
    meta: normalize(meta),
    timeLineHeight: normalize(timeLineHeight),
    postTitleLineHeight: normalize(postTitleLineHeight),
    titleLineHeight: normalize(titleLineHeight),
    regularLineHeight: normalize(regularLineHeight),
    subtitleLineHeight: normalize(subtitleLineHeight),
    metaLineHeight: normalize(metaLineHeight),
    verified: normalize(verified)
}

// console.log("HANDPHONE ", Constants.platform)
// console.log("SCREEN WIDTH: ", SCREEN_WIDTH)
// console.log("SCALE ", scale)
// console.log(postTitle)
// console.log("postTitle NEW ", normalize(postTitle))
// console.log("regular ", regular)
// console.log("regular NEW ", normalize(regular))
// console.log("regularLineHeight ", regularLineHeight)
// console.log("regularLineHeight NEW ", normalize(regularLineHeight))
// console.log(subtitle)
// console.log("subtitle NEW ", normalize(subtitle))