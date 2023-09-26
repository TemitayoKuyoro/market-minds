'use client';

import React from 'react';
import Image from 'next/image';

interface CardProps {
    imageUrl: string
}


const Card: React.FC<CardProps> = ({imageUrl}) => {
    return ( 
        <div className='rounded-xl bg-cover'>
            <Image 
                src={imageUrl}
                width={200}
                height={200}
                alt={imageUrl}
            />
        </div>
     );
}

export default Card;