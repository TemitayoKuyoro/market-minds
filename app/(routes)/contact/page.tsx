import React from 'react';

import Container from '@/components/ui/container';
import ContactForm from '@/components/contact-form';

const Contact = () => {
    return ( 
        <Container>
          <div className='min-h-screen'>
            <section className='mt-4 py-10'>
            <h1 className='font-semibold text-3xl'>Contact</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6'>
              <div>
                <p className='font-light text-xl tracking-tight leading-snug'>Please feel free to call or use our contact form to get in touch with us. 
                We look forward to hearing from you!</p>
              </div>
              <div className='border border-gray-200 p-2 rounded'>                 
                  <ContactForm />                
              </div>
            </div>
            </section>
          </div>
        </Container>
     );
}
 
export default Contact;