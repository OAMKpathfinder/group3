import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import { Typography, Link } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    margin: '20px'
  }
}))

const Footer = props => {
  const { className, ...rest } = props

  const classes = useStyles()

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography variant="body2">
        &copy;{' '}
        <Link component="a" href="https://oamk.fi/" target="_blank">
          OAMK
        </Link>
        . 2019
      </Typography>
      <Typography variant="caption">
        Created by three developers, students of Oulu University of Applied
        Sciences.
      </Typography>
    </div>
  )
}

Footer.propTypes = {
  className: PropTypes.string
}

export default Footer