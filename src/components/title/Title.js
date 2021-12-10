import { Fragment } from 'react';
import './Title.css'

const Title = (props) => {
    const { title, subTitle, fontSizeTitle, fontSizeSubtitle } = props;
    return (
        <Fragment>
            <h1 className="App-title" style={{fontSize: fontSizeTitle + 'rem' }}> {title} </h1>
            <p className="App-subtitle" style={{fontSize: fontSizeSubtitle + 'rem'}}> { subTitle }</p>
        </Fragment>
    );
            
}
 
export default Title;