import React, { useState } from 'react';
import { Check, Loader2, Sparkles, Calendar, Clock, AlertCircle, BookmarkCheck, Gift, Award, HelpCircle } from 'lucide-react';

export default function RegistrationForm() {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    specialty: '',
    clinicName: ''
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const specialties = [
    "General Physician",
    "Dentist",
    "Dermatologist",
    "Pediatrician",
    "Gynecologist",
    "Cardiologist",
    "Orthopedic Surgeon",
    "Clinic Owner / Admin",
    "Hospital Administrator",
    "Other Specialist"
  ];

  const bonuses = [
    {
      num: "Bonus #1",
      title: "Patient Lifetime Value (PLTV) Calculator",
      val: "₹1,999",
      desc: "Calculate the long-term value of your patients to determine exact profitable advertising budgets."
    },
    {
      num: "Bonus #2",
      title: "5 Clinic Success Case Studies",
      val: "₹3,000",
      desc: "Video interviews with private practitioners who scaled their setups to 300+ new patients a month."
    },
    {
      num: "Bonus #3",
      title: "Google & Meta Medical Ads Templates",
      val: "₹2,999",
      desc: "Ready-to-copy ad campaigns and targeting templates engineered for healthcare specialties."
    },
    {
      num: "Bonus #4",
      title: "Receptionist Enquiry Cheatsheet",
      val: "₹1,999",
      desc: "Double your phone-to-booking conversions using our optimized front-desk scripting frameworks."
    },
    {
      num: "Bonus #5",
      title: "Clinic LMS Video Vault Access",
      val: "₹3,000",
      desc: "[Attendee Only] Logins to our private LMS portal containing 10+ clinic marketing audits."
    },
    {
      num: "Bonus #6",
      title: "40+ Hours of Medical Marketing Archives",
      val: "₹2,000",
      desc: "Elite video archives covering SEO, Google Maps local SEO, and Meta Ads setup guides."
    }
  ];

  const validate = () => {
    let tempErrors = {};
    if (!form.name.trim()) tempErrors.name = "Name is required.";
    else if (form.name.length < 3) tempErrors.name = "Name must be at least 3 characters.";

    if (!form.mobile.trim()) tempErrors.mobile = "Mobile number is required.";
    else if (!/^\d{10}$/.test(form.mobile.trim())) tempErrors.mobile = "Please enter a valid 10-digit mobile number.";

    if (!form.email.trim()) tempErrors.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) tempErrors.email = "Please enter a valid email address.";

    if (!form.specialty) tempErrors.specialty = "Please select your specialty.";

    if (!form.clinicName.trim()) tempErrors.clinicName = "Clinic or Hospital name is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      
      const submissions = JSON.parse(localStorage.getItem('webinar_registrations') || '[]');
      submissions.push({ ...form, date: new Date().toISOString() });
      localStorage.setItem('webinar_registrations', JSON.stringify(submissions));
    }, 1500);
  };

  return (
    <section id="register" className="py-24 bg-gradient-to-tr from-blue-700 via-blue-600 to-sky-600 relative overflow-hidden text-white">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] -z-10" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bonuses Grid Section */}
        <div className="max-w-5xl mx-auto mb-20 text-center reveal-element">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 shadow-xs mb-4">
            <Gift className="w-4 h-4 text-sky-300" />
            <span className="text-xs font-bold tracking-wider text-white uppercase">
              REGISTER & CLAIM BONUSES
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[45px] font-extrabold text-white tracking-tight leading-tight uppercase">
            Book Your Seat and Get Bonuses Worth <span className="text-sky-300">₹14,999</span> For Free!
          </h2>
          <p className="text-base text-sky-100 font-light max-w-xl mx-auto mt-2">
            Witness the patient acquisition systems and join 49,000+ doctors who have unlocked local patient growth secrets.
          </p>

          {/* 6 Bonus Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mt-10">
            {bonuses.map((bonus, i) => (
              <div 
                key={i} 
                className="bg-white/10 backdrop-blur-xs border border-white/15 rounded-2xl p-5 hover:border-white/30 transition-all"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-3xs font-extrabold text-sky-300 uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded">
                    {bonus.num}
                  </span>
                  <span className="text-3xs font-extrabold text-rose-300 line-through">
                    {bonus.val}
                  </span>
                </div>
                <h3 className="font-display text-sm font-extrabold leading-snug">
                  {bonus.title}
                </h3>
                <p className="text-3xs text-sky-200 mt-1.5 leading-relaxed font-light">
                  {bonus.desc}
                </p>
                <div className="mt-3.5 flex items-center text-3xs font-bold text-emerald-300">
                  <Check className="w-3.5 h-3.5 mr-1" />
                  <span>ABSOLUTELY FREE</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-2xs font-extrabold uppercase tracking-widest text-sky-200">
            🎁 Total Bonus Value: <span className="text-white line-through">₹14,999</span> &rarr; ₹0 (FREE FOR ATTENDEES)
          </div>
        </div>

        {/* Centered Registration Card / Success Ticket */}
        <div className="max-w-xl mx-auto reveal-element">
          {!success ? (
            /* Registration Form Card */
            <div className="glass-panel text-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20">
              <div className="text-center mb-6">
                <h3 className="font-display text-xl font-bold text-slate-900">GET YOUR FREE VIP PASS NOW!</h3>
                <p className="text-xs text-slate-500 mt-1 font-light">Limited seats are available! ⏱️ Register now to claim bonuses.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4.5">
                {/* Name */}
                <div className="text-left">
                  <label htmlFor="name" className="block text-2xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Dr. Rajesh Sharma"
                    className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors duration-200 ${
                      errors.name ? 'border-rose-400 focus:border-rose-500 bg-rose-50/20' : 'border-slate-200 focus:border-blue-500'
                    }`}
                  />
                  {errors.name && (
                    <p className="flex items-center text-3xs text-rose-500 mt-1 font-semibold">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Mobile & Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="text-left">
                    <label htmlFor="mobile" className="block text-2xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={form.mobile}
                      onChange={handleChange}
                      placeholder="9876543210"
                      maxLength="10"
                      className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors duration-200 ${
                        errors.mobile ? 'border-rose-400 focus:border-rose-500 bg-rose-50/20' : 'border-slate-200 focus:border-blue-500'
                      }`}
                    />
                    {errors.mobile && (
                      <p className="flex items-center text-3xs text-rose-500 mt-1 font-semibold">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.mobile}
                      </p>
                    )}
                  </div>
                  <div className="text-left">
                    <label htmlFor="email" className="block text-2xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="rajesh@sharmaclinic.com"
                      className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors duration-200 ${
                        errors.email ? 'border-rose-400 focus:border-rose-500 bg-rose-50/20' : 'border-slate-200 focus:border-blue-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="flex items-center text-3xs text-rose-500 mt-1 font-semibold">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Specialty */}
                <div className="text-left">
                  <label htmlFor="specialty" className="block text-2xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Your Specialty
                  </label>
                  <select
                    id="specialty"
                    name="specialty"
                    value={form.specialty}
                    onChange={handleChange}
                    className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors duration-200 ${
                      errors.specialty ? 'border-rose-400 focus:border-rose-500 bg-rose-50/20' : 'border-slate-200 focus:border-blue-500'
                    }`}
                  >
                    <option value="">Select Specialty...</option>
                    {specialties.map((spec) => (
                      <option key={spec} value={spec}>{spec}</option>
                    ))}
                  </select>
                  {errors.specialty && (
                    <p className="flex items-center text-3xs text-rose-500 mt-1 font-semibold">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {errors.specialty}
                    </p>
                  )}
                </div>

                {/* Clinic / Hospital Name */}
                <div className="text-left">
                  <label htmlFor="clinicName" className="block text-2xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    Clinic / Hospital Name
                    <span className="text-2xs text-slate-400 normal-case font-normal ml-1">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="clinicName"
                    name="clinicName"
                    value={form.clinicName}
                    onChange={handleChange}
                    placeholder="Sharma Multispeciality Clinic"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-3.5 rounded-xl shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed text-base mt-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Securing VIP Pass...</span>
                    </>
                  ) : (
                    <span>GET MY FREE VIP PASS NOW &rarr;</span>
                  )}
                </button>
              </form>
              <p className="text-[10px] text-slate-400 text-center mt-3 font-semibold">
                🔒 We HATE spam. Your email address is 100% secure.
              </p>
            </div>
          ) : (
            /* Success State - Ticket */
            <div className="bg-white text-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-100 p-6 sm:p-8 animate-scale-in text-center relative">
              <div className="absolute top-4 right-4 bg-emerald-50 text-emerald-600 text-3xs font-extrabold px-3 py-1 rounded-full border border-emerald-200 uppercase tracking-widest flex items-center">
                <Check className="w-3.5 h-3.5 mr-1" /> Confirmed
              </div>

              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto mb-4">
                <BookmarkCheck className="w-8 h-8" />
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                VIP Pass Activated!
              </h3>
              <p className="text-xs text-slate-500 mt-1">We've saved your free seat for the live session.</p>

              {/* Ticket Details */}
              <div className="my-6 border border-slate-100 rounded-2xl bg-slate-50/50 p-5 text-left space-y-4">
                <div className="border-b border-slate-200/60 pb-3 flex justify-between">
                  <div>
                    <p className="text-3xs font-bold text-slate-400 uppercase tracking-wider">Attendee</p>
                    <h4 className="text-sm font-bold text-slate-800">{form.name}</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-3xs font-bold text-slate-400 uppercase tracking-wider">Specialty</p>
                    <h4 className="text-xs font-semibold text-slate-700">{form.specialty}</h4>
                  </div>
                </div>

                <div className="border-b border-slate-200/60 pb-3 flex justify-between">
                  <div>
                    <p className="text-3xs font-bold text-slate-400 uppercase tracking-wider">Clinic/Hospital</p>
                    <h4 className="text-xs font-semibold text-slate-700">{form.clinicName || 'Not Specified'}</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-3xs font-bold text-slate-400 uppercase tracking-wider">Pass Type</p>
                    <h4 className="text-xs font-mono font-bold text-emerald-600">FREE VIP PASS</h4>
                  </div>
                </div>

                {/* Timing */}
                <div className="flex justify-between text-2xs text-slate-500 font-semibold bg-white p-3.5 rounded-xl border border-slate-100">
                  <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1.5 text-blue-500" /> Monday, July 13th</span>
                  <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1.5 text-blue-500" /> 7:30 PM (IST)</span>
                </div>
              </div>

              <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed font-light">
                Meeting credentials and your digital bonuses have been sent to <span className="font-semibold text-slate-800">{form.email}</span>.
              </p>

              {/* Whatsapp */}
              <div className="mt-6 pt-2">
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noreferrer"
                  className="block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg text-sm cursor-pointer"
                >
                  💬 Join Webinar Updates WhatsApp Group
                </a>
                <p className="text-[10px] text-slate-400 mt-2 font-medium">Join to receive reminders & worksheets links.</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
