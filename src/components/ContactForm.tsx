import foguete from '../../public/images/foguete.png';
import { useEffect, useState } from 'react';
import { Button } from './Button';
import { SparklesText } from './magicui/sparkles-text';
import { Observer } from 'tailwindcss-intersect';

export function ContactForm() {
  useEffect(() => {
    Observer.start();
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    // const res = await fetch("https://api.web3forms.com/submit", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     access_key: "SUA_ACCESS_KEY_DO_WEB3FORMS",
    //     name: formData.name,
    //     email: formData.email,
    //     message: formData.message,
    //     redirect: "https://seusite.com/obrigado", // se quiser redirecionar
    //   }),
    // });

    //   const result = await res.json();
    //   if (result.success) {
    //     setStatus("Success!");
    //     setFormData({ name: "", email: "", message: "" });
    //   } else {
    //     setStatus("Something went wrong...");
    //   }
  };

  return (
    <section className="container-section bg-background">
      <div className="container gap-4 pt-4">
        <div className="flex flex-col md:flex-row">
          <div className="flex h-1/2 w-full flex-col justify-center max-[300px]:hidden">
            <SparklesText className="title-primary text-purple-pink">
              <span id="contact" className="whitespace-nowrap">
                Let's work
              </span>
              <br />
              together!
            </SparklesText>

            <img src={foguete} className="intersect:animate-fade-up h-auto max-h-40 w-auto object-contain md:max-h-60" alt="Foguete" />
          </div>
          <form onSubmit={handleSubmit} className="flex h-1/2 w-full flex-col gap-4">
            <input type="text" name="name" placeholder="Full name" value={formData.name} onChange={handleChange} required className="bg-base-card rounded p-2" />
            <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required className="bg-base-card rounded p-2" />
            <textarea name="message" placeholder="Tell me about your idea..." value={formData.message} onChange={handleChange} required className="bg-base-card h-32 rounded p-2"></textarea>

            <div className="flex justify-end">
              <Button text="LET'S TALK" onClick={() => {}} variants="primary" />
            </div>
            {status && <p className="text-center text-sm">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
