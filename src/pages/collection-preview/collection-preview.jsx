import React from 'react';
import './collection-preview.scss'
import ColllectionItem from '../../components/collection-item/collection-item.component'
const CollectionPreview=({title,items})=>
{
   return ( <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className='preview'>
{items.filter((item,id)=>id<4).map(({id,...otherParams})=>
    
       <ColllectionItem key={id} {...otherParams} ></ColllectionItem>
    
    )}
        </div>
    </div>);
}
export default CollectionPreview
