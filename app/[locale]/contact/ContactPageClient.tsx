'use client';

import { useState } from 'react';
import type { Locale } from '@/lib/i18n/config';

interface ContactData {
  title: string;
  subtitle: string;
  form: {
    name: string;
    email: string;
    type: string;
    typeEvent: string;
    typePrivate: string;
    typePress: string;
    typeOther: string;
    message: string;
    submit: string;
  };
  info: {
    title: string;
    address: string;
    hours: string;
  };
}

interface ContactPageClientProps {
  data: ContactData;
  locale: Locale;
}

export default function ContactPageClient({ data, locale }: ContactPageClientProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'other',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(locale === 'fr' ? 'Message envoyé !' : 'Message sent!');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div data-publisher-section="header" className="text-center mb-16">
          <h1 data-publisher-field="contact.title" className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            {data.title}
          </h1>
          <p data-publisher-field="contact.subtitle" className="text-lg font-body text-foreground/70 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div data-publisher-section="form" className="bg-white rounded-3xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-body font-semibold text-foreground mb-2"
                >
                  {data.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cream rounded-xl font-body text-foreground focus:outline-none focus:ring-2 focus:ring-tropical-green"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-body font-semibold text-foreground mb-2"
                >
                  {data.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cream rounded-xl font-body text-foreground focus:outline-none focus:ring-2 focus:ring-tropical-green"
                />
              </div>

              <div>
                <label
                  htmlFor="type"
                  className="block text-sm font-body font-semibold text-foreground mb-2"
                >
                  {data.form.type}
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-cream rounded-xl font-body text-foreground focus:outline-none focus:ring-2 focus:ring-tropical-green"
                >
                  <option value="event">{data.form.typeEvent}</option>
                  <option value="private">{data.form.typePrivate}</option>
                  <option value="press">{data.form.typePress}</option>
                  <option value="other">{data.form.typeOther}</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-body font-semibold text-foreground mb-2"
                >
                  {data.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-cream rounded-xl font-body text-foreground focus:outline-none focus:ring-2 focus:ring-tropical-green resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-tropical-green to-tropical-green/90 text-white rounded-full font-body font-bold text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {data.form.submit}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div data-publisher-section="info" className="bg-gradient-to-br from-tropical-green to-tropical-green/90 rounded-3xl p-8 text-white">
              <h2 data-publisher-field="info.title" className="text-2xl font-display font-bold mb-6">{data.info.title}</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-body font-semibold mb-2 text-white/90">
                    {locale === 'fr' ? 'Adresse' : 'Address'}
                  </h3>
                  <p data-publisher-field="info.address" className="font-body text-white/80">{data.info.address}</p>
                </div>

                <div>
                  <h3 className="font-body font-semibold mb-2 text-white/90">
                    {locale === 'fr' ? 'Horaires' : 'Hours'}
                  </h3>
                  <p data-publisher-field="info.hours" className="font-body text-white/80">{data.info.hours}</p>
                </div>

                <div>
                  <h3 className="font-body font-semibold mb-2 text-white/90">Social</h3>
                  <div className="flex gap-4 mt-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/20 hover:bg-mango rounded-full flex items-center justify-center transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="https://wa.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/20 hover:bg-mango rounded-full flex items-center justify-center transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-mint rounded-3xl h-64 flex items-center justify-center">
              <p className="text-tropical-green font-body text-center px-8">
                {locale === 'fr'
                  ? '📍 Carte Google Maps à intégrer'
                  : '📍 Google Maps integration here'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
