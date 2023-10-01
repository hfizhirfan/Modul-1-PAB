// Functional Component
function Counter() {
    // State: Menggunakan React.useState untuk menginisialisasi state count dengan nilai awal 0
    const [count, setCount] = React.useState(0);

    // Event Handler: decrement akan dipanggil saat tombol "(-1)" diklik
    const decrement = () => {
        // Mengubah state count dengan mengurangkan 1
        setCount(count - 1);
    };

    // Event Handler: increment akan dipanggil saat tombol "(+1)" diklik
    const increment = () => {
        // Mengubah state count dengan menambah 1
        setCount(count + 1);
    };

    // JSX Render: Mendefinisikan tampilan komponen dengan menggunakan JSX
    return (
        <div>
            <h1>Pengenalan React Tingkat Dasar</h1>
            <h2>Counter</h2>
            <p>{count}</p>
            {/* Tombol "(-1)" dengan event handler decrement */}
            <button onClick={decrement}>(-1)</button>
            {/* Tombol "(+1)" dengan event handler increment */}
            <button onClick={increment}>(+1)</button>
        </div>
    );
}

// Merender komponen Counter ke dalam elemen dengan ID 'root'
ReactDOM.render(<Counter />, document.getElementById('root'));
