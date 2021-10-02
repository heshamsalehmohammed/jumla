import {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

class ScrollHandler extends PureComponent {
  componentDidMount = () => this.handleScroll();

  componentDidUpdate = (prevProps) => {
    const {
      location: {pathname, hash},
    } = this.props;
    if (
      pathname !== prevProps.location.pathname ||
      hash !== prevProps.location.hash
    ) {
      this.handleScroll();
    }
  };

  handleScroll = () => {
    const {
      location: {hash},
    } = this.props;
    const element = document.getElementById(hash.replace('#', ''));

    setTimeout(() => {
      if (element) {
        window.scrollTo({
          behavior: element ? 'smooth' : 'auto',
          top: element ? element.offsetTop : 0,
        });
      }
    }, 100);
  };

  render = () => this.props.children;
}

ScrollHandler.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    hash: PropTypes.string,
    pathname: PropTypes.string,
  }),
};

export default withRouter(ScrollHandler);
