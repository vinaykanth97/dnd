// These will be available from the sidebar
export const fields = [
    { label: "Container", template: "Container" },
    { label: "Text Input", template: "Input" },
    { label: "Textarea", template: "Textarea" },
    { label: "Checkbox", template: "Checkbox" },
    { label: "Button", template: "Button" },
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
    container: (args) => <div className="container">{args}</div>,
    form: (args) => <div className="form">{args}</div>
};
