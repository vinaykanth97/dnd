// These will be available from the sidebar
export const fields = [
    {
        type: "input",
        title: "Text Input"
    },
    {
        type: "select",
        title: "Select"
    },
    {
        type: "button",
        title: "Button"
    },
    {
        type: "textarea",
        title: "Text Area"
    },
    {
        type: "container",
        title: "Container"
    },
    {
        type: "form",
        title: "Form"
    }
];


export const fieldRenderers = {
    input: <input type="text" placeholder="This is a text input" />,
    textarea: <textarea rows="5" />,
    select:
        <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
    ,
    button: <button>Button</button>,
    container: <div className="container"></div>,
    form: <div className="form"></div>
};
