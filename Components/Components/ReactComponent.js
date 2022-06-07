class MyFirstComponent extends React.Component {
    render() {
        return (
            <div>
                <h2 className="class-highlight">Hello World Component</h2>
            </div>
        )
    }
}    

class MyFruitList extends React.Component {
    render() {
        const orange_str = "Orange";
        const apple_str = "Apple";
        const banana_str = "Banana";

        const fruit_img = 'images/fruit.JPG'
        const image_el = <img src={fruit_img} />

        var items = ['Jackfruit', 'Mango', 'Strawberry', 'Grapes', 'Peach'];

        var item = items[Math.floor(Math.random() * items.length)];

        const fruit_list = (
            <div>
                <div key="el-key" className="my-fruit">Some of my favorite fruits</div>
                <ul>
                    <li key="O-Key">{orange_str}</li>
                    <li key="A-Key">{apple_str}</li>
                    <li key="B-Key">{banana_str}</li>
                    <li key="N-Key" className="my-fruit">{item}</li>
                </ul>
                {image_el}
            </div>
        );

        return fruit_list;
    }
}

ReactDOM.render(<MyFirstComponent />, document.getElementById("my-first-component"));

function on_tick() {
    ReactDOM.render(<MyFruitList />, document.getElementById("my-fruit-list"));
}

setInterval(on_tick, 2000);