var htmlContent = require('../pages/test.html')
// or you can also write
// import htmlContent from 'path/to/html/file.html');


export default function MyComponent() {
    return (
        <div dangerouslySetInnerHTML={ {__html: htmlContent} } />
    );
}