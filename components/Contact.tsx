import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission will be handled by Supabase later
    console.log('Form submitted');
  };

  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-6xl mb-8 tracking-tight text-white font-light">
              Let's Work Together
            </h2>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed font-light">
              I'm always interested in new opportunities and collaborations. 
              Whether you have a project in mind or just want to chat about design, 
              I'd love to hear from you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gray-300" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">jino.butaslac@email.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gray-300" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-300" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Available for remote work</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
                  <Input id="firstName" required className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-gray-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
                  <Input id="lastName" required className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-gray-500" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">Email</Label>
                <Input id="email" type="email" required className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-gray-500" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-gray-300">Subject</Label>
                <Input id="subject" required className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-gray-500" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-300">Message</Label>
                <Textarea 
                  id="message" 
                  rows={6} 
                  required
                  placeholder="Tell me about your project..."
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-gray-500"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full md:w-auto bg-white text-gray-900 hover:bg-gray-100">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}