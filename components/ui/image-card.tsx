'use client';

import React from 'react';
import Image from 'next/image';

interface ImageCardProps {
    imageUrl: string
}


const imageCard: React.FC<ImageCardProps> = ({imageUrl}) => {
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

export default imageCard;