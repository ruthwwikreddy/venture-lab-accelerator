import React, { useState } from 'react';
import { PageContainer } from '../components/shared/PageContainer';
import { Button } from '../components/shared/Button';
import { Mail, MessageSquare, Clock } from 'lucide-react';
import { useContact } from '../hooks/useContact';

export function Contact() {
  const { submitContact, loading, error } = useContact();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await submitContact(formData);
    if (result) {
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <PageContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-[#CCCCCC] text-lg mb-8">
            Have a great idea? We'd love to hear about it. Reach out to us and let's make it happen.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-[#6D5DFB] mt-1" />
              <div>
                <h3 className="text-white font-semibold">Email Us</h3>
                <p className="text-[#CCCCCC]">contact@venturex.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MessageSquare className="w-6 h-6 text-[#6D5DFB] mt-1" />
              <div>
                <h3 className="text-white font-semibold">Chat With Us</h3>
                <p className="text-[#CCCCCC]">Available on Discord</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-[#6D5DFB] mt-1" />
              <div>
                <h3 className="text-white font-semibold">Response Time</h3>
                <p className="text-[#CCCCCC]">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8">
          {success ? (
            <div className="text-center py-8">
              <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
              <p className="text-[#CCCCCC]">We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-lg">
                  {error}
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#6D5DFB]"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#6D5DFB]"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#6D5DFB] h-32"
                  placeholder="Tell us about your project"
                  required
                ></textarea>
              </div>
              <Button
                variant="primary"
                className="w-full"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </PageContainer>
  );
}