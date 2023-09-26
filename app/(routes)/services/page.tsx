import React from 'react';

import Container from '@/components/ui/container';
import Image from 'next/image';

const Services = () => {
    return ( 
        <Container>
          <div className='min-h-screen'>
            <section className='mt-12 pb-12'>           
              <h2 className='font-semibold text-3xl'>Our Services</h2>           
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 justify-between'>
                <div className= 'grid grid-cols-1' style={{
                  gridTemplateRows:'65px max-content auto'
                }}>
                  <h3 className='text-xl font-medium'>Website Development</h3>
                  <div style={{position:'relative', width: '18vw', height: '18vw'}}>
                    <Image 
                      src='/img/Firefly website development 97938.jpg'
                      alt="ai seo image"
                      fill
                      style={{                   
                      objectFit: 'contain',
                      borderRadius: '6px'
                        }}
                    />
                  </div>  
                  <p className="text-xl font-light mt-4">We create intuitive, user-friendly websites with seamless functionality and sleek design to enhance your online presence.</p>
                </div>
                <div className= 'grid grid-cols-1' style={{
                  gridTemplateRows:'65px max-content auto'
                }}>
                  <h3 className='text-xl font-medium h-16' >Mobile App Design</h3>
                  <div style={{position:'relative', width: '18vw', height: '18vw'}}>
                    <Image 
                      src='/img/Firefly mobile app design 89151.jpg'
                      alt="ai seo image"
                      fill
                      style={{                   
                      objectFit: 'contain',
                      borderRadius: '6px'
                        }}
                    />
                  </div>  
                  <p className="text-xl font-light mt-4">Our team crafts innovative mobile applications, with great user experience to deliver app solutions that resonate with your target audience.</p>
                </div>
                <div className= 'grid grid-cols-1' style={{
                  gridTemplateRows:'65px max-content auto'
                }}>
                  <h3 className='text-xl font-medium' >Digital Marketing & SEO</h3>
                  <div style={{position:'relative', width: '18vw', height: '18vw'}}>
                    <Image 
                      src='/img/Firefly digital marketing bar graph showing sales optimization 79759.jpg'
                      alt="ai seo image"
                      fill
                      style={{                   
                      objectFit: 'contain',
                      borderRadius: '6px'
                        }}
                    />
                  </div>                 
                  <p className="text-xl font-light mt-4 max-w-prose">We provide tailored digital marketing strategies and SEO solutions to boost your online visibility and increase customer engagement.</p>
                </div>
              </div>
            </section>
          </div>
    
        </Container>
     );
}
 
export default Services;