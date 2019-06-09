import * as React from 'react'
import Skeleton from './skeleton.jsx';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

export type Props = { text: string }

export {ThemeProvider};

export default class FLMC extends React.Component<Props> {
  render() {
    const { } = this.props

    return (
        <Skeleton/> 
    )
  }
}
