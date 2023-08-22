import PropTypes from "prop-types";

function Section({ children, title = "", className = "" }) {
  return (
    <section className={className}>
      {children}
      {title && <h2>{title}</h2>}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default Section;
