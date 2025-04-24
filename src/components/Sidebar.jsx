import { nanoid } from "nanoid";
import { fields } from "./FieldList"
import { useDraggable } from "@dnd-kit/core";
import { useRef } from "react";



export function SideBarItem({ contents }) {
    const id = useRef(nanoid());
    const { attributes, listeners, setNodeRef } = useDraggable({
        id: id.current,
        data: {
            ...contents,
        },
        
    });
    return (
        <li
            ref={setNodeRef}
            {...attributes}
            {...listeners}
        >
            {contents.title}
        </li>
    )

}


export function Sidebar() {

    return (
        <ul className="sidebarlist box" >
            {fields.map((allFields, index) => {
                return (
                    <SideBarItem key={index} contents={allFields} />
                )
            })}
        </ul>
    )
}


