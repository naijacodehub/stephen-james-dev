import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppCTA = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number (format: country code + number without + or spaces)
    const phoneNumber = '1234567890';
    const message = encodeURIComponent('Hi Stephen! I found your portfolio and would like to discuss a project.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 p-0 shadow-lg hover:shadow-[0_0_30px_hsl(142_71%_45%/0.5)] bg-[#25D366] hover:bg-[#20BD5A] animate-glow"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default WhatsAppCTA;
