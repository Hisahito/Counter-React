import PropTypes from 'prop-types';

const App = ({ title, subTitle })  => {

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
  subTitle: PropTypes.string,
}

App.defaultProps = {
  title: 'No hay ningun titulo',
  subTitle: 'No hay ningun subtitulo',
}