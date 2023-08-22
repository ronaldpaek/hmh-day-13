import PropTypes from "prop-types";

function Box({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

Box.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Box;
