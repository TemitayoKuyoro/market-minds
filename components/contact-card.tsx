"use client";

import { ContactForm } from "@/components/contact-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ContactCard = () => {
  return (
    <Card className="p-2">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>Fill form to submit enquiry</CardDescription>
      </CardHeader>
      <CardContent>
        <ContactForm />
      </CardContent>
    </Card>
  );
};

export default ContactCard;
