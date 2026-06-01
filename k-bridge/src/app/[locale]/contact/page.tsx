import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactFAQ } from "@/components/sections/contact/ContactFAQ";

export const metadata = {
  title: "Contact Us | K-BRIDGE",
  description:
    "Got a question? We'd love to hear from you. Whether you're a student, parent, or university partner, K-BRIDGE is a message away.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <div id="contact-form">
          <ContactForm />
        </div>
        <ContactFAQ />
      </main>
      <Footer />
    </>
  );
}
