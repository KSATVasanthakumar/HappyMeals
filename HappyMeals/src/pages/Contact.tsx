import PageHero from '../components/common/PageHero'
import ContactForm from '../components/common/ContactForm'
import heroImg from '../assets/images/pic-3.jpg'

function Contact() {
  return (
    <section id="contact">
      <PageHero title="Contact Us" image={heroImg} />

      <div className="flex flex-col items-center justify-center gap-4 px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 pb-6 text-center">
          <h2 className="text-(length:--font-size-2xl) font-(--font-weight-bold) font-(family-name:--font-family-heading) text-(--color-text-primary) sm:text-(length:--font-size-3xl)">
            Request a Catering Quote
          </h2>
          <p className="text-(length:--font-size-md) leading-relaxed text-(--color-text-secondary)">
            Tell us about your event — corporate lunch, wedding, cafeteria contract, or celebration —
            and our team will get back to you with a tailored catering proposal.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact
