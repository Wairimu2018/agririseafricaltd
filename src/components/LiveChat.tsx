import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Send, MessageSquare, User, Headphones } from 'lucide-react';

interface Message {
  id: string;
  message: string;
  sender_type: 'user' | 'agent';
  created_at: string;
}

interface LiveChatProps {
  onClose: () => void;
}

const LiveChat: React.FC<LiveChatProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate connection and send welcome message
    setTimeout(() => {
      setIsConnected(true);
      const welcomeMessage: Message = {
        id: `msg_${Date.now()}`,
        message: "Hello! Welcome to AgriRise support. How can I help you with your farming technology needs today?",
        sender_type: 'agent',
        created_at: new Date().toISOString()
      };
      setMessages([welcomeMessage]);
    }, 500);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendAgentMessage = (message: string) => {
    const agentMessage: Message = {
      id: `msg_${Date.now()}_agent`,
      message,
      sender_type: 'agent',
      created_at: new Date().toISOString()
    };
    setMessages(prev => [...prev, agentMessage]);
  };

  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: `msg_${Date.now()}_user`,
      message: newMessage.trim(),
      sender_type: 'user',
      created_at: new Date().toISOString()
    };
    setMessages(prev => [...prev, userMessage]);
    const messageText = newMessage.trim();
    setNewMessage('');

    // Simulate AI response after a short delay
    setTimeout(() => {
      const responses = [
        "Thank you for your message! Our team specializes in solar-powered irrigation, precision farming, and smart monitoring solutions. How can we assist you specifically?",
        "I'd be happy to help! We offer a range of products including SolarPump Pro, SmartSoil Monitors, and WeatherStation Elite. Would you like more information about any of these?",
        "Great question! Our solutions are designed to help farmers increase yields while reducing costs. Would you like to schedule a consultation with our experts?",
        "I understand your needs. We can provide customized solutions based on your farm size and requirements. Would you like to speak with a specialist?",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      sendAgentMessage(randomResponse);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md h-96 flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
          <div className="flex items-center space-x-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            <CardTitle className="text-lg">Live Chat Support</CardTitle>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-gray-400'}`}></div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-4">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-3 mb-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender_type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.sender_type === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  <div className="flex items-center space-x-1 mb-1">
                    {message.sender_type === 'user' ? (
                      <User className="w-3 h-3" />
                    ) : (
                      <Headphones className="w-3 h-3" />
                    )}
                    <span className="text-xs opacity-70">
                      {message.sender_type === 'user' ? 'You' : 'Support'}
                    </span>
                  </div>
                  {message.message}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="flex space-x-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button onClick={sendMessage} disabled={!newMessage.trim()}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LiveChat;
