const appRoot = document.getElementById('app');
let visibility=false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>
            <p id="details"></p>
            { visibility && (
                <div>
                    <p>Hey. These are some details you can see!</p>
                </div>
            )}
        </div>    
    );
    ReactDOM.render(template, appRoot);
}
render();