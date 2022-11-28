import { IconButtonStyle } from './IconButton.styled'
import PropTypes from 'prop-types';


const IconButton = ({ children, onClick, ...allyProps }) => {
    <IconButtonStyle type='button' onClick={onClick} {...allyProps}>
        {children}
    </IconButtonStyle>

}
IconButton.defaultProps = {
    onClick: () => null,
    children: null
}

IconButton.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    // 'aria-label': PropTypes.string.isRequired,
}

export default IconButton;