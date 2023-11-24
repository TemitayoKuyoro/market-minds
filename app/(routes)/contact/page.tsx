import React from "react";

import Container from "@/components/ui/container";
import ContactCard from "@/components/contact-card";

const Contact = () => {
  return (
    <Container>
      <section className="mt-4 py-6 px-3 mb-12">
        <div className="min-h-screen">
          <h1 className="font-semibold text-3xl">Contact</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
            <div>
              <p className="font-light text-lg tracking-wide leading-snug">
                Please feel free to use our contact form to get in touch with us.
                We look forward to hearing from you!
              </p>
            </div>
            <div>
              <ContactCard />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Contact;
