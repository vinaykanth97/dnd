
import { renderTree } from '../EssentialFunc';



export const FieldArea = ({ tree }) => {
    console.log(tree);
    
    return (
        <div className='box'>
            {renderTree(tree)}
        </div>
    )
}
