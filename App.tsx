import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import AIConcierge from './components/AIConcierge';
import CampaignCreatives from './components/CampaignCreatives';
import { AMENITIES, REVIEWS, GALLERY_IMAGES, LOGO_IMAGE } from './constants';
import { Phone, MapPin, Star, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const App: React.FC = () => {

const [formState, setFormState] = useState({
name: '',
contact: '',
checkIn: '',
checkOut: '',
guests: '1',
requests: ''
});

const [isSubmitted, setIsSubmitted] = useState(false);

// ✅ WHATSAPP + EMAIL HANDLERS
const handleWhatsAppBooking = () => {
const message = encodeURIComponent(
`Booking Request:
Name: ${formState.name}
Contact: ${formState.contact}
Check-in: ${formState.checkIn}
Check-out: ${formState.checkOut}
Guests: ${formState.guests}
Notes: ${formState.requests}`
);
window.open(`https://wa.me/2348088713277?text=${message}`, "_blank");
};

const handleWhatsAppConcierge = () => {
const message = encodeURIComponent(
"Hello, I need a private concierge (Majordomo) service"
);
window.open(`https://wa.me/2348088713277?text=${message}`, "_blank");
};

const handleEmail = () => {
window.location.href =
`mailto:greendot.merchant@gmail.com?subject=Luxury Booking Request&body=
Name: ${formState.name}
Contact: ${formState.contact}
Check-in: ${formState.checkIn}
Check-out: ${formState.checkOut}
Guests: ${formState.guests}
Notes: ${formState.requests}`;
};

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
setIsSubmitted(true);
};

return ( <div className="bg-black text-white">

```
  <Navbar />
  <Hero />
  <Pricing />

  {/* CONTACT / BOOKING */}
  <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">

    <h2 className="text-4xl font-bold mb-10">Book Your Stay</h2>

    {!isSubmitted ? (
      <form onSubmit={handleSubmit} className="space-y-6">

        <input
          placeholder="Full Name"
          className="w-full p-3 bg-black border"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
        />

        <input
          placeholder="Phone or Email"
          className="w-full p-3 bg-black border"
          value={formState.contact}
          onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
        />

        <input
          type="date"
          className="w-full p-3 bg-black border"
          value={formState.checkIn}
          onChange={(e) => setFormState({ ...formState, checkIn: e.target.value })}
        />

        <input
          type="date"
          className="w-full p-3 bg-black border"
          value={formState.checkOut}
          onChange={(e) => setFormState({ ...formState, checkOut: e.target.value })}
        />

        <input
          type="number"
          min="1"
          className="w-full p-3 bg-black border"
          value={formState.guests}
          onChange={(e) => setFormState({ ...formState, guests: e.target.value })}
        />

        <textarea
          placeholder="Special Requests"
          className="w-full p-3 bg-black border"
          value={formState.requests}
          onChange={(e) => setFormState({ ...formState, requests: e.target.value })}
        />

        <button className="w-full bg-yellow-500 text-black py-3 font-bold">
          Submit Request
        </button>

      </form>
    ) : (
      <div className="text-center">
        <CheckCircle2 className="mx-auto mb-4" />
        <p>Request received. Continue below:</p>
      </div>
    )}

    {/* ACTION BUTTONS */}
    <div className="flex flex-col gap-4 mt-10">

      <button
        onClick={handleWhatsAppBooking}
        className="bg-green-500 py-3"
      >
        Book via WhatsApp
      </button>

      <button
        onClick={handleWhatsAppConcierge}
        className="border py-3"
      >
        Concierge (Majordomo)
      </button>

      <button
        onClick={handleEmail}
        className="border py-3 text-yellow-400"
      >
        Email Booking
      </button>

    </div>

  </section>

  <CampaignCreatives />
  <AIConcierge />

  {/* FOOTER */}
  <footer className="text-center py-10 border-t mt-20">
    <img src={LOGO_IMAGE} className="mx-auto w-16 mb-4" />
    <p>Signature Villas • Benin City</p>
  </footer>

  {/* FLOATING WHATSAPP */}
  <a
    href="https://wa.me/2348088713277?text=Hello%20I%20need%20assistance"
    target="_blank"
    className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full"
  >
    💬
  </a>

</div>
```

);
};

export default App;

