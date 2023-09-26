import React from 'react';
import Image from 'next/legacy/image';

import Container from '@/components/ui/container';

const About = () => {
    return ( 
        <Container>
          <div className='min-h-screen'>   
            <section className='mt-12 pb-12'>
                <h1 className='font-semibold text-3xl'>About</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 mt-4 gap-6'>    
                  <p className='font-light text-xl'>At Market Minds Co., we are dedicated to helping businesses achieve their full potential through targeted marketing strategies that drive growth and increase revenue. Our customized approach ensures that each client receives a unique plan that is tailored to their specific needs and goals. We are committed to delivering measurable results and providing exceptional service to every client we work with.</p>
                  <div style={{position:'relative', width: '100%', height: '300px'}}>
                    <Image 
                      src='/img/Firefly a digital marketing team discussing in a meeting with a kanban board shown in the background.jpg'
                      alt="ai seo image"
                      layout='fill'
                      style={{                   
                      objectFit: 'contain',
                      borderRadius: '6px',
                      objectPosition: 'center top'
                        }}
                    />                  
                  </div>
                </div>
            </section>
          </div>
        </Container>
     );
}
export default About;