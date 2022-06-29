import PropTypes from 'prop-types';

const App = (title, subTitle) => {

 return (
   <>
    <h1>{title}</h1>
    <p>{subTitle}</p>
   </>
 );
}

export default App;

App.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number,
}