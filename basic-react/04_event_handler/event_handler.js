// Button Component
class MyButton extends React.Component {
    handleButtonClick = () => {
        alert(this.props.message);
    }

    render() {
        return (
            React.createElement("button", { onClick: this.handleButtonClick, style: { margin: "10px" } },
                this.props.children
            )
        );
    }
}

// App Component
class MyApp extends React.Component {
    render() {
        return (
            React.createElement("div", null,
                React.createElement("h1", null, "Learn React"),
                React.createElement(MyButton, { message: "Learn React" }, "React"),
                React.createElement(MyButton, { message: "Learn JavaScript" }, "JavaScript")
            )
        );
    }
}

const myElement = React.createElement(MyApp, null);
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);