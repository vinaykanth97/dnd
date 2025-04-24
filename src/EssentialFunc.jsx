export function handleDragStart(e, setActiveData) {
    console.log(e);

    setActiveData({
        activeId: e.active.id,
        activeType: e.active.data.current
    })
}
export const handleDragOver = (e) => {
    console.log(e);
}
export const handleDragEnd = (e, setActiveData, fieldAreaElements, SetFieldAreaElements) => {
    const { active, over } = e;
    console.log(over);

    if (over && over.data.current.accepts.includes(active.data.current.type)) {
        SetFieldAreaElements([...fieldAreaElements, {
            elements: active.data.current.type
        }])
    }
}
