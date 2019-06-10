import * as React from 'react'
import Skeleton from './base/skeleton.js';

export type Props = { text: string }

export default class FLMC extends React.Component<Props> {
  render() {
    const { } = this.props

    return (
        <Skeleton/> 
    )
  }
}
