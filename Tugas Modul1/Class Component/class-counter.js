// Class Component
class Counter extends React.Component {
    // Constructor: Inisialisasi state count dengan nilai awal 0
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    // Event Handler: decrement akan dipanggil saat tombol "(-1)" diklik
    decrement = () => {
        // Mengubah state count dengan mengurangkan 1
        this.setState({ count: this.state.count - 1 });
    };

    // Event Handler: increment akan dipanggil saat tombol "(+1)" diklik
    increment = () => {
        // Mengubah state count dengan menambah 1
        this.setState({ count: this.state.count + 1 });
    };

    // Render Method: Mendefinisikan tampilan komponen dengan JSX
    render() {
        return (
            <div>
                <h1>Pengenalan React Tingkat Dasar</h1>
                <h2>Counter</h2>
                <p>{this.state.count}</p>
                {/* Tombol "(-1)" dengan event handler decrement */}
                <button onClick={this.decrement}>(-1)</button>
                {/* Tombol "(+1)" dengan event handler increment */}
                <button onClick={this.increment}>(+1)</button>
            </div>
        );
    }
}

// Merender komponen Counter ke dalam elemen dengan ID 'root'
ReactDOM.render(<Counter />, document.getElementById('root'));
