import React, { PropTypes } from 'react'

const Text = ({ children }) => <p>{children}</p>

Text.propTypes = {
   children: PropTypes.string
}

export default Text
