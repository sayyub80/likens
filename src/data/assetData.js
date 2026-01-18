// src/data/assetData.js
import avatar1 from '../assets/avatar1.jpg';
import avatar2 from '../assets/avatar2.jpg';
import avatar3 from '../assets/avatar3.jpg';
import avatar4 from '../assets/avatar4.jpg';

export const assetData = {
  "chloe-chen": {
    name: "Gaming Avatar Pro",
    creator: "Chloe Chen",
    handle: "@Chloe_Creator",
    trustScore: "98%",
    category: "Gaming & Tech Niche",
    image: avatar1,
    description: "Gaming Avatar Pro is a high-quality, professionally produced AI avatar designed specifically for gaming content, tech reviews, and digital entertainment. Created through advanced AI training with over 50+ hours of source material.",
    perfectFor: ["Gaming reviews", "E-sports", "Tech demos"],
    capabilities: ["4K output", "Dynamic expressions", "Multi-language"],
    specs: {
      videoQuality: "4K / 1080p",
      frameRate: "60 FPS",
      fileFormat: "MP4, MOV",
      audioSupport: "48kHz Stereo",
      greenScreen: "Yes",
      languages: "English, Spanish"
    },
    performance: { responseTime: "< 2 hours", renewalRate: "94%", totalImpressions: "2.4M+" },
    reviews: [
      { id: 1, company: "TechCorp Inc.", role: "Director", text: "Game-changing for our campaigns!", stars: 5 }
    ]
  },
  "alex-park": {
    name: "Tech Guru Alex",
    creator: "Alex Park",
    handle: "@Alex_Tech",
    trustScore: "95%",
    category: "Tech & Corporate",
    image: avatar2,
    description: "A professional and authoritative AI persona ideal for technical tutorials, corporate presentations, and educational content.",
    perfectFor: ["Tutorials", "B2B Sales", "Training"],
    capabilities: ["1080p output", "Professional attire", "Studio sets"],
    specs: {
      videoQuality: "1080p Full HD",
      frameRate: "30 FPS",
      fileFormat: "MP4, WebM",
      audioSupport: "44.1kHz Stereo",
      greenScreen: "No",
      languages: "English, Korean"
    },
    performance: { responseTime: "< 5 hours", renewalRate: "88%", totalImpressions: "1.1M+" },
    reviews: [
      { id: 1, company: "Digital Dynamics", role: "Manager", text: "Smooth licensing and great support.", stars: 5 }
    ]
  },
  "sarah-miller": {
    name: "Fitness Pro Sarah",
    creator: "Sarah Miller",
    handle: "@Sarah_Fit",
    trustScore: "96%",
    category: "Fitness & Lifestyle",
    image: avatar3,
    description: "Energetic and engaging AI avatar perfect for fitness coaching, lifestyle vlogs, and wellness brand promotions.",
    perfectFor: ["Workout videos", "Wellness tips", "Vlogs"],
    capabilities: ["High motion tracking", "Outdoor settings", "Gym backgrounds"],
    specs: {
      videoQuality: "4K / 1080p",
      frameRate: "60 FPS",
      fileFormat: "MP4",
      audioSupport: "48kHz Stereo",
      greenScreen: "Yes",
      languages: "English, Portuguese"
    },
    performance: { responseTime: "< 3 hours", renewalRate: "91%", totalImpressions: "3.2M+" },
    reviews: [
      { id: 1, company: "FitLife App", role: "CEO", text: "Sarah's energy is unmatched in the AI space.", stars: 5 }
    ]
  },
  "james-wilson": {
    name: "Strategist James",
    creator: "James Wilson",
    handle: "@James_Strategy",
    trustScore: "94%",
    category: "Business Strategy",
    image: avatar4,
    description: "An authoritative and experienced business persona for thought leadership, financial news, and strategic advice.",
    perfectFor: ["News segments", "Financial reports", "Keynotes"],
    capabilities: ["Formal delivery", "Newsroom backgrounds", "Chart integration"],
    specs: {
      videoQuality: "1080p Full HD",
      frameRate: "30 FPS",
      fileFormat: "MP4, MOV",
      audioSupport: "48kHz Stereo",
      greenScreen: "No",
      languages: "English, German"
    },
    performance: { responseTime: "< 1 hour", renewalRate: "96%", totalImpressions: "900K+" },
    reviews: [
      { id: 1, company: "Global Fin", role: "VP", text: "Perfect for our weekly market updates.", stars: 5 }
    ]
  }
};