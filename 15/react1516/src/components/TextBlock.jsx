import PropTypes from 'prop-types';

const TextBlock = ({ title = "Default title", content = "Default content" }) => {
    return (
        <>
            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 className="display-4 fw-normal text-body-emphasis">{title}</h1>
                <p className="fs-5 text-body-secondary">{content}</p>
            </div>
        </>
    );
};

TextBlock.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
};

// TextBlock.defaultProps = {
//     title: 'Test',
//     content: 'test'
//   };

export default TextBlock;