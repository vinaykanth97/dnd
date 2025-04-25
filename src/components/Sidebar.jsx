
import { fields } from "./FieldList"
import { useDraggable } from "@dnd-kit/core";




export function SideBarItem({ label, template }) {
    const { setNodeRef, attributes, listeners } = useDraggable({
        id: `${template}-${Math.random()}`,
        data: {
            type: 'myItem',
            node: {
                id: Math.random(),
                data: label,
                template,
                children: [],
            },
        },
    });

    return (
        <li
            ref={setNodeRef}
            {...attributes}
            {...listeners}
        >
            {label}
        </li>
    )

}


export function Sidebar() {

    return (
        <ul className="sidebarlist box" >
            {fields.map((item) => {


                return (
                    <SideBarItem key={item.template} {...item} />
                )
            })}
        </ul>
    )
}


