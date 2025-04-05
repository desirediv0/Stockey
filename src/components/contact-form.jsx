import { Mail, MessageSquare, Phone, User } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the form data to console
    console.log("Contact Form Submission:", formData);

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-6 text-center">
        <div className="mx-auto w-12 h-12 bg-[#19C68B]/10 rounded-full flex items-center justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-[#19C68B]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-[#1E2B4F] mb-2">
          Message Sent!
        </h3>
        <p className="text-[#6A7C99]">
          Thank you for contacting us. Our team will get back to you within 24
          hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 max-h-[70vh] overflow-y-auto pr-1 w-full"
    >
      <div className="space-y-2">
        <Label htmlFor="fullName" className="text-[#1E2B4F] font-medium">
          Full Name
        </Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6A7C99] h-4 w-4" />
          <Input
            id="fullName"
            placeholder="Your full name"
            className="pl-10 border-[#A8BFFF] focus:border-[#4B63FF] focus:ring-1 focus:ring-[#4B63FF] w-full"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-[#1E2B4F] font-medium">
            Email
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6A7C99] h-4 w-4" />
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="pl-10 border-[#A8BFFF] focus:border-[#4B63FF] focus:ring-1 focus:ring-[#4B63FF] w-full"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-[#1E2B4F] font-medium">
            Phone Number
          </Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6A7C99] h-4 w-4" />
            <Input
              id="phone"
              placeholder="+91 1234567890"
              className="pl-10 border-[#A8BFFF] focus:border-[#4B63FF] focus:ring-1 focus:ring-[#4B63FF] w-full"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-[#1E2B4F] font-medium">
          Requirements
        </Label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 text-[#6A7C99] h-4 w-4" />
          <Textarea
            id="message"
            placeholder="Tell us about your requirements"
            className="min-h-24 pl-10 border-[#A8BFFF] focus:border-[#4B63FF] focus:ring-1 focus:ring-[#4B63FF] w-full"
            required
            value={formData.message}
            onChange={handleChange}
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-[#4B63FF] hover:bg-[#3A51E0] text-white font-semibold mt-4"
      >
        Submit Request
      </Button>
    </form>
  );
};

export default ContactForm;
