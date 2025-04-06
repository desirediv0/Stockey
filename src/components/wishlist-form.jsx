import { Mail, Phone, User, Globe } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const WishlistForm = ({ planName }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    tradingExperience: "beginner",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    const fieldName = id.replace("wishlist-", "");
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleRadioChange = (value, field) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionTime = new Date();
    const submittedData = {
      ...formData,
      planName,
      submissionDate: submissionTime.toLocaleDateString(),
      submissionTime: submissionTime.toLocaleTimeString(),
    };

    try {
      console.log("Sending data to API:", submittedData);

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Simulate successful response
      const fakeResponse = {
        success: true,
        message: "Successfully added to waitlist",
        data: submittedData,
      };

      console.log("API Response:", fakeResponse);
      console.log("Wishlist Form Submission:", submittedData);

      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
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
          You&apos;re on the Waitlist!
        </h3>
        <p className="text-[#6A7C99]">
          Thanks for your interest! We&apos;ll notify you when the {planName}{" "}
          plan becomes available.
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
        <Label
          htmlFor="wishlist-fullName"
          className="text-[#1E2B4F] font-medium"
        >
          Full Name
        </Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6A7C99] h-4 w-4" />
          <Input
            id="wishlist-fullName"
            placeholder="Your full name"
            className="pl-10 border-[#A8BFFF] focus:border-[#4B63FF] focus:ring-1 focus:ring-[#4B63FF] w-full"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="wishlist-email" className="text-[#1E2B4F] font-medium">
          Email
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6A7C99] h-4 w-4" />
          <Input
            id="wishlist-email"
            type="email"
            placeholder="you@example.com"
            className="pl-10 border-[#A8BFFF] focus:border-[#4B63FF] focus:ring-1 focus:ring-[#4B63FF] w-full"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label
            htmlFor="wishlist-phone"
            className="text-[#1E2B4F] font-medium"
          >
            Phone Number
          </Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6A7C99] h-4 w-4" />
            <Input
              id="wishlist-phone"
              placeholder="+91 1234567890"
              className="pl-10 border-[#A8BFFF] focus:border-[#4B63FF] focus:ring-1 focus:ring-[#4B63FF] w-full"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="wishlist-country"
            className="text-[#1E2B4F] font-medium"
          >
            Country
          </Label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6A7C99] h-4 w-4" />
            <Input
              id="wishlist-country"
              placeholder="Your country"
              className="pl-10 border-[#A8BFFF] focus:border-[#4B63FF] focus:ring-1 focus:ring-[#4B63FF] w-full"
              required
              value={formData.country}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="space-y-3 pt-2">
        <Label className="text-[#1E2B4F] font-medium">Trading Experience</Label>
        <RadioGroup
          defaultValue="beginner"
          className="grid grid-cols-1 sm:grid-cols-3 gap-2"
          value={formData.tradingExperience}
          onValueChange={(value) =>
            handleRadioChange(value, "tradingExperience")
          }
        >
          <Label
            htmlFor="experience-beginner"
            className="flex items-center justify-between space-x-2 rounded-md border border-[#A8BFFF] p-3 cursor-pointer hover:border-[#4B63FF] transition-colors"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="beginner" id="experience-beginner" />
              <span>Beginner</span>
            </div>
          </Label>
          <Label
            htmlFor="experience-intermediate"
            className="flex items-center justify-between space-x-2 rounded-md border border-[#A8BFFF] p-3 cursor-pointer hover:border-[#4B63FF] transition-colors"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="intermediate"
                id="experience-intermediate"
              />
              <span>Intermediate</span>
            </div>
          </Label>
          <Label
            htmlFor="experience-expert"
            className="flex items-center justify-between space-x-2 rounded-md border border-[#A8BFFF] p-3 cursor-pointer hover:border-[#4B63FF] transition-colors"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="expert" id="experience-expert" />
              <span>Expert</span>
            </div>
          </Label>
        </RadioGroup>
      </div>

      <Button
        type="submit"
        className="w-full bg-[#4B63FF] hover:bg-[#3A51E0] text-white font-semibold mt-4"
      >
        Join Waitlist
      </Button>

      <p className="text-xs text-center text-[#6A7C99] mt-2">
        We&apos;ll only use your information to notify you about this plan.
      </p>
    </form>
  );
};

export default WishlistForm;
