const React = require('react')
class Show extends React.Component {
    render() {
        const log = this.props.log;
    return (
        <div>
            <h1>Show Page</h1>
            
            <h2>Title:{log.title}</h2> 
            <h2>Entry:{log.entry}</h2>
            {log.shipIsBroken ? 'Ship is Broken':"Ship is not broken"}
        </div>
    );
    }
 }
 module.exports  = Show;