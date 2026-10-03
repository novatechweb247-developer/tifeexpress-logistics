import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, MapPin, Send, CheckCircle, ArrowRight, RefreshCw, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO, LOGISTICS_SERVICES } from '../data/logisticsData';
import { InquiryFormData } from '../types';

interface ContactSectionProps {
  initialServiceId?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialServiceId }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    serviceType: initialServiceId || 'parcel-delivery',
    pickupLocation: '',
    deliveryDestination: '',
    packageDescription: '',
    urgency: 'standard',
  });

  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({ ...prev, serviceType: initialServiceId }));
    }
  }, [initialServiceId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationError) setValidationError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setValidationError('Please provide your name.');
      return;
    }
    if (!formData.phone.trim()) {
      setValidationError('Please provide your phone number so we can reach you.');
      return;
    }
    if (!formData.packageDescription.trim()) {
      setValidationError('Please provide a brief description of the package or inquiry.');
      return;
    }

    setSubmitted(true);
  };

  // Generate WhatsApp text with form inputs
  const selectedServiceObj = LOGISTICS_SERVICES.find((s) => s.id === formData.serviceType);
  const serviceTitle = selectedServiceObj ? selectedServiceObj.title : 'General Delivery';

  const whatsappMessage = encodeURIComponent(
    `Hello Tifeexpress Logistics,\n\nI want to make a delivery inquiry:\n• Name: ${formData.fullName}\n• Phone: ${formData.phone}\n• Service: ${serviceTitle}\n• Pickup Location: ${formData.pickupLocation || 'To be specified'}\n• Destination: ${formData.deliveryDestination || 'To be specified'}\n• Package Details: ${formData.packageDescription}\n\nPlease confirm availability and details.`
  );

  const directWhatsappUrl = `https://wa.me/2347047428000?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0B0F19] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <span>Direct Inquiries</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight leading-tight">
            Connect with Tifeexpress Logistics
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Have a parcel to dispatch or a delivery requirement to arrange? Contact our operations desk in Challenge Axis, Ibadan directly by phone, WhatsApp, or through the inquiry form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone Call Card */}
            <div className="bg-[#111827] border border-white/10 hover:border-amber-400/40 rounded-2xl p-6 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs text-slate-400 font-mono uppercase tracking-wider block">
                    Phone Inquiries
                  </span>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="text-xl font-bold text-white hover:text-amber-400 transition-colors font-mono tracking-wide block mt-1"
                  >
                    {BUSINESS_INFO.displayPhone}
                  </a>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Direct line for delivery inquiries, parcel coordination, and dispatch status.
                  </p>
                  <div className="mt-4">
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors min-h-[40px]"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call {BUSINESS_INFO.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-[#111827] border border-white/10 hover:border-emerald-500/40 rounded-2xl p-6 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs text-slate-400 font-mono uppercase tracking-wider block">
                    WhatsApp Message
                  </span>
                  <span className="text-xl font-bold text-white font-mono tracking-wide block mt-1">
                    {BUSINESS_INFO.displayPhone}
                  </span>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Chat with us on WhatsApp to quickly share package photos, pickup addresses, or location pins.
                  </p>
                  <div className="mt-4">
                    <a
                      href={BUSINESS_INFO.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors min-h-[40px]"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Message on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Summary Card */}
            <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono uppercase tracking-wider block">
                    Operating Hub
                  </span>
                  <span className="text-lg font-bold text-white font-display block mt-1">
                    Challenge Axis, Ibadan
                  </span>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Centrally positioned in Ibadan, Oyo State for coordinated courier and parcel movements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form / Submission Confirmation */}
          <div id="inquiry" className="lg:col-span-7">
            <div className="bg-[#111827] border border-white/10 rounded-2xl p-6 sm:p-8">
              {!submitted ? (
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white font-display">
                      Send a Delivery Inquiry
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fill in your package and route requirements. You can also forward this directly to WhatsApp or call us.
                    </p>
                  </div>

                  {validationError && (
                    <div className="mb-6 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{validationError}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="fullName" className="block text-xs font-medium text-slate-300 mb-1.5">
                          Your Full Name <span className="text-amber-400">*</span>
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Adeola Balogun"
                          className="w-full bg-[#0B0F19] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs font-medium text-slate-300 mb-1.5">
                          Phone Number <span className="text-amber-400">*</span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 08012345678"
                          className="w-full bg-[#0B0F19] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors font-mono"
                        />
                      </div>
                    </div>

                    {/* Service Category */}
                    <div>
                      <label htmlFor="serviceType" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Logistics Service Category
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full bg-[#0B0F19] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        {LOGISTICS_SERVICES.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Pickup & Destination */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="pickupLocation" className="block text-xs font-medium text-slate-300 mb-1.5">
                          Pickup Area / Landmark
                        </label>
                        <input
                          id="pickupLocation"
                          type="text"
                          name="pickupLocation"
                          value={formData.pickupLocation}
                          onChange={handleChange}
                          placeholder="e.g. Challenge Axis or Bodija"
                          className="w-full bg-[#0B0F19] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="deliveryDestination" className="block text-xs font-medium text-slate-300 mb-1.5">
                          Delivery Destination
                        </label>
                        <input
                          id="deliveryDestination"
                          type="text"
                          name="deliveryDestination"
                          value={formData.deliveryDestination}
                          onChange={handleChange}
                          placeholder="e.g. Ring Road, Dugbe, UI"
                          className="w-full bg-[#0B0F19] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Package Description */}
                    <div>
                      <label htmlFor="packageDescription" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Package Details / Special Instructions <span className="text-amber-400">*</span>
                      </label>
                      <textarea
                        id="packageDescription"
                        rows={3}
                        name="packageDescription"
                        value={formData.packageDescription}
                        onChange={handleChange}
                        placeholder="Briefly describe what you need delivered (e.g. documents, cartons, clothing merchandise, fragile goods)..."
                        className="w-full bg-[#0B0F19] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 min-h-[44px]"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry</span>
                      </button>

                      <a
                        href={directWhatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto px-5 py-3.5 text-xs font-semibold text-white hover:text-emerald-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors flex items-center justify-center gap-2 min-h-[44px]"
                      >
                        <MessageSquare className="w-4 h-4 text-emerald-400" />
                        <span>Or Send via WhatsApp</span>
                      </a>
                    </div>
                  </form>
                </div>
              ) : (
                /* Submission Confirmation Receipt (Polished client-side state) */
                <div className="py-6 text-center animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">
                    Inquiry Details Ready
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-white">{formData.fullName}</span>. Your inquiry for{' '}
                    <span className="text-amber-400 font-semibold">{serviceTitle}</span> has been structured.
                  </p>

                  {/* Summary Box */}
                  <div className="mt-6 p-4 rounded-xl bg-[#0B0F19] border border-white/10 text-left max-w-md mx-auto text-xs space-y-2">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-slate-400">Customer:</span>
                      <span className="font-semibold text-white">{formData.fullName}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-slate-400">Phone:</span>
                      <span className="font-mono text-white">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-slate-400">Service:</span>
                      <span className="text-amber-400 font-medium">{serviceTitle}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-slate-400">Route:</span>
                      <span className="text-slate-200">
                        {formData.pickupLocation || 'Challenge Axis'} → {formData.deliveryDestination || 'Ibadan'}
                      </span>
                    </div>
                    <div className="pt-1">
                      <span className="text-slate-400 block mb-0.5">Details:</span>
                      <span className="text-slate-300">{formData.packageDescription}</span>
                    </div>
                  </div>

                  {/* Next Step Action Buttons */}
                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={directWhatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors flex items-center justify-center gap-2 min-h-[44px]"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Forward Directly to WhatsApp (07047428000)</span>
                    </a>

                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-lg transition-colors flex items-center justify-center gap-2 min-h-[44px]"
                    >
                      <Phone className="w-4 h-4 text-amber-400" />
                      <span>Call 07047428000</span>
                    </a>
                  </div>

                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          phone: '',
                          serviceType: 'parcel-delivery',
                          pickupLocation: '',
                          deliveryDestination: '',
                          packageDescription: '',
                          urgency: 'standard',
                        });
                      }}
                      className="text-xs text-slate-400 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Submit another delivery inquiry</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
