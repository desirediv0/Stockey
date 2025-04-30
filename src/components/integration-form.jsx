import { Mail, MessageSquare, Phone, User } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import { saveFormToCSV } from "@/utils/form-handler";
import { toast } from "sonner";

const IntegrationForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    integrationDetails: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save form data to CSV
      const result = await saveFormToCSV(formData, "integration");

      if (!result) {
        throw new Error("Failed to save form data");
      }

      // Log the form data to console
      console.log("Integration Suggestion:", formData);

      // Use toast instead of changing state for better UX
      toast.success("Your integration suggestion has been received!", {
        duration: 5000,
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error submitting the form", {
        description: "Please try again or contact support.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="py-6 text-center">
        <div className="mx-auto w-16 h-16 bg-[#19C68B]/10 rounded-full flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8 text-[#19C68B]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[#1E2B4F] mb-3">
          Thank You for Your Suggestion!
        </h3>
        <p className="text-[#6A7C99] mb-6">
          We&apos;ve received your integration request and will review it
          carefully.
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          variant="outline"
          className="border-[#4B63FF] text-[#4B63FF] hover:bg-[#4B63FF]/10"
        >
          Submit Another Suggestion
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 w-full">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
              type="tel"
              placeholder="+91 1234567890"
              className="pl-10 border-[#A8BFFF] focus:border-[#4B63FF] focus:ring-1 focus:ring-[#4B63FF] w-full"
              required
              value={formData.phone}
              onChange={handleChange}
              pattern="^[+]?[\d\s()-]{8,20}$"
              title="Please enter a valid phone number"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="integrationDetails"
          className="text-[#1E2B4F] font-medium"
        >
          Integration Details
        </Label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 text-[#6A7C99] h-4 w-4" />
          <Textarea
            id="integrationDetails"
            placeholder="Tell us about the integration you'd like to suggest..."
            className="min-h-[120px] pl-10 border-[#A8BFFF] focus:border-[#4B63FF] focus:ring-1 focus:ring-[#4B63FF] w-full resize-none"
            required
            value={formData.integrationDetails}
            onChange={handleChange}
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-[#4B63FF] hover:bg-[#3A51E0] text-white font-semibold mt-4 py-6 rounded-xl"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Submitting...
          </div>
        ) : (
          "Suggest Integration"
        )}
      </Button>
    </form>
  );
};

export default IntegrationForm;
