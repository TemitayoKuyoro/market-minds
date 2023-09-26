import React from 'react';

interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children}) => {
    return ( 
        <div className='mx-auto max-w-7xl w-5/6'>
            {children}
        </div>
     );
}
 
export default Container;