const React = require('react')

class Index extends React.Component { 
    render() {
        const {logs} = this.props;
        return (
            <div>
             <h1>Index Page</h1>

                <nav>
                    <a href="/logs/new">Create a New Logs</a>
                </nav>
                <ul>
                    {logs.map((log, i) => {
                        return (
                            <li>
                                    {log.title}<br/>
                                    {/* {log.entry} */}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
module.exports= Index