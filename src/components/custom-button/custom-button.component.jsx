import React from 'react'
import './custom-button.styles.scss'
const CustomButton=({children,isGoogleSignIn,...otherParams})=>
(
<button className={`${isGoogleSignIn ? 'google-sign-in':' '} custom-button`} {...otherParams}>
{children}
</button>
);
export default CustomButton