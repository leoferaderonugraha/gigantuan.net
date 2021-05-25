class Test extends React.Component {
    render() {
        return (
            <div className="test-class">
                <p>Hello React!</p>
            </div>
        );
    }
}

ReactDOM.render(<Test />, document.getElementById('root'));