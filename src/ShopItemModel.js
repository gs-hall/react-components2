import PropTypes from 'prop-types'

export default class ShopItemModel {
  constructor(props){
    this.props=props;
  }
}

ShopItemModel.propTypes = {
  brand: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  descriptionFull: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}
