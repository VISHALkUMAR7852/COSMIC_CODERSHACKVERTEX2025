import { Message } from '../types';

// This is a mock service that simulates AI responses
// In a real application, this would make API calls to an LLM service

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Sample responses for different medical topics
const responseDatabase = {
  headache: "Headaches can have many causes including stress, dehydration, lack of sleep, or eye strain. For persistent headaches, you should consider:\n\n1. Staying hydrated\n2. Getting adequate rest\n3. Taking breaks from screens\n4. Using over-the-counter pain relievers as directed\n\nIf headaches are severe, sudden, or accompanied by other symptoms like fever or vision changes, please consult a healthcare provider.",
  
  fever: "Fever is often a sign that your body is fighting an infection. For mild fevers (below 102°F/38.9°C in adults):\n\n1. Rest and stay hydrated\n2. Take acetaminophen or ibuprofen as directed\n3. Use a lukewarm compress\n\nSeek medical attention if the fever is high, lasts more than three days, or is accompanied by severe symptoms like difficulty breathing, chest pain, or confusion.",
  
  diabetes: "Type 2 diabetes symptoms may include:\n\n1. Increased thirst and frequent urination\n2. Increased hunger\n3. Fatigue\n4. Blurred vision\n5. Slow-healing sores\n6. Frequent infections\n\nRisk factors include being overweight, family history, and physical inactivity. Early detection and management are important. If you suspect diabetes, please consult with a healthcare provider for proper testing and treatment.",
  
  bloodPressure: "High blood pressure (hypertension) often has no symptoms but can lead to serious health problems if left untreated. It's recommended to:\n\n1. Get regular blood pressure checks\n2. Maintain a healthy weight\n3. Exercise regularly\n4. Limit sodium intake\n5. Avoid excessive alcohol\n\nIf you've been diagnosed with high blood pressure, take medications as prescribed and attend regular follow-up appointments with your healthcare provider.",
  
  default: "Thank you for your health question. While I can provide general information, it's important to consult with a healthcare professional for personalized medical advice. Based on the information you've provided, I'd recommend discussing your concerns with a doctor who can conduct a proper examination and provide appropriate guidance."
};

export const generateAIResponse = async (messages: Message[]): Promise<string> => {
  // Simulate API delay
  await delay(1500);
  
  const latestUserMessage = messages.filter(m => m.role === 'user').pop();
  if (!latestUserMessage) return responseDatabase.default;
  
  const userText = latestUserMessage.content.toLowerCase();
  
  // Simple keyword matching to determine response
  if (userText.includes('headache') || userText.includes('head pain') || userText.includes('migraine')) {
    return responseDatabase.headache;
  } else if (userText.includes('fever') || userText.includes('temperature')) {
    return responseDatabase.fever;
  } else if (userText.includes('diabetes') || userText.includes('blood sugar')) {
    return responseDatabase.diabetes;
  } else if (userText.includes('blood pressure') || userText.includes('hypertension')) {
    return responseDatabase.bloodPressure;
  }
  
  return responseDatabase.default;
};