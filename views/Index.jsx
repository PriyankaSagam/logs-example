const React = require('react')

class Index extends React.Component { 
    render() {
        const { logs } = this.props;
        console.log(logs);
        return (
            <div>
             <h1>Index Page</h1>

                <nav>
                    <a href="/new">Create a New Logs</a>
                </nav>
                <ul>
                    {logs.map((log, i) => {
                        return (
                            <li>
                                <a href={`/logs/${log._id}`}>
                                  Title:  {log.title}<br/>
                                  Entry:  {log.entry}
                                </a> 
                                <br />
                            <a href={`/logs/${log._id}/edit`}> Edit This Log </a>
                            <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                           <input type="submit" value="DELETE" />
                            </form>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
module.exports= Index