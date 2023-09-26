import React from 'react';

import Container from '@/components/ui/container';
import ContactForm from '@/components/contact-form';

const Contact = () => {
    return ( 
        <Container>
          <div className='min-h-screen'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 pb-12'>
              <div>
                <h1 className='font-semibold text-3xl'>Contact</h1>
                <p className='font-light text-xl mt-4'>Please feel free to call or use our contact form to get in touch with us. 
                We look forward to hearing from you!</p>
              </div>
              <div className='border border-gray-200 p-2 rounded'>                 
                  <ContactForm />                
              </div>
            </div>
          </div>
        </Container>
     );
}
 
export default Contact;