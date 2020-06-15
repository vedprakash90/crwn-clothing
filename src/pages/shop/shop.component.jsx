import React from 'react'
import SHOP_DATA from './shop.data.js'
import  CollectionPreview from '../collection-preview/collection-preview.jsx'
 class ShopPage extends React.Component
 {
     constructor(props)
     {
         super(props)
     
     this.state={
         collections:SHOP_DATA
     }
    }
     render()
     {
        const {collections}=this.state;
         return (<div className="ShopPage">
             {
           
           collections.map(({id,...otherCollectionProps}) =>
           {
               return  <CollectionPreview key={id} {...otherCollectionProps} />
            
            }
           )
        }
     
           </div>)
    
            
    }

     }
 
 export default ShopPage;