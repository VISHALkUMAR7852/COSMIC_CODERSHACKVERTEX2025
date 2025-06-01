import { Message } from '../types';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const responseDatabase = {
  headache: {
    response: "Based on your description of headache symptoms, here are my recommendations:\n\n1. Rest in a quiet, dark room\n2. Stay hydrated - drink plenty of water\n3. Try over-the-counter pain relievers like acetaminophen or ibuprofen\n4. Apply a cold or warm compress to your head/neck\n5. Practice stress-reduction techniques\n\n⚠️ Seek immediate medical attention if you experience:\n- Sudden, severe headache\n- Headache with fever, stiff neck, confusion\n- Headache after head injury\n- Vision changes or speech problems",
    followUp: "Would you like me to help you find the nearest healthcare facility?"
  },
  
  fever: {
    response: "I understand you're experiencing fever. Here's what you should know:\n\n🌡️ For mild fever (below 102°F/38.9°C):\n1. Rest and stay hydrated\n2. Take acetaminophen or ibuprofen as directed\n3. Use a lukewarm compress\n4. Wear light clothing\n\n⚠️ Seek immediate medical care if:\n- Fever is above 103°F (39.4°C)\n- Fever lasts more than 3 days\n- You have other severe symptoms\n- You have a weakened immune system",
    followUp: "Would you like information about fever-reducing medications?"
  },
  
  diabetes: {
    response: "Here's important information about diabetes symptoms and management:\n\n🔍 Common symptoms include:\n1. Increased thirst and frequent urination\n2. Extreme hunger or fatigue\n3. Blurred vision\n4. Slow-healing sores\n5. Unexplained weight loss\n\n📋 Risk factors:\n- Family history\n- Obesity\n- Physical inactivity\n- Age over 45\n\n🏥 Prevention and management:\n1. Maintain a healthy diet\n2. Regular exercise\n3. Monitor blood sugar\n4. Take medications as prescribed",
    followUp: "Would you like information about diabetes prevention or management?"
  },
  
  bloodPressure: {
    response: "Understanding blood pressure is crucial for your health:\n\n📊 Normal BP: Less than 120/80 mmHg\nElevated: 120-129/80 mmHg\nHigh: 130/80 mmHg or higher\n\n🎯 Management strategies:\n1. Regular exercise (30 mins/day)\n2. Reduce sodium intake\n3. Limit alcohol consumption\n4. Maintain healthy weight\n5. Manage stress\n\n🥗 DASH diet recommendations:\n- Fruits and vegetables\n- Whole grains\n- Lean proteins\n- Low-fat dairy",
    followUp: "Would you like tips for monitoring blood pressure at home?"
  },
  
  covid: {
    response: "Regarding COVID-19 concerns:\n\n🔍 Common symptoms:\n1. Fever or chills\n2. Cough\n3. Shortness of breath\n4. Fatigue\n5. Loss of taste/smell\n\n⚠️ Emergency warning signs:\n- Difficulty breathing\n- Persistent chest pain\n- Confusion\n- Inability to stay awake\n\n🛡️ Prevention:\n1. Get vaccinated\n2. Wear masks in high-risk areas\n3. Maintain good hygiene\n4. Social distance when necessary",
    followUp: "Would you like information about testing centers near you?"
  },
  
  default: {
    response: "I understand you have a health concern. While I can provide general information, it's important to note that I'm an AI assistant and cannot provide medical diagnosis. For personalized medical advice, please consult a healthcare professional.\n\nI can help you with:\n1. General health information\n2. Finding nearby healthcare facilities\n3. Understanding common symptoms\n4. Preventive health measures",
    followUp: "Would you like me to provide more specific information about any health topic?"
  }
};

export const generateAIResponse = async (messages: Message[]): Promise<string> => {
  await delay(1500);
  
  const latestUserMessage = messages.filter(m => m.role === 'user').pop();
  if (!latestUserMessage) return responseDatabase.default.response;
  
  const userText = latestUserMessage.content.toLowerCase();
  
  if (userText.includes('headache') || userText.includes('head pain') || userText.includes('migraine')) {
    return responseDatabase.headache.response;
  } else if (userText.includes('fever') || userText.includes('temperature')) {
    return responseDatabase.fever.response;
  } else if (userText.includes('diabetes') || userText.includes('blood sugar')) {
    return responseDatabase.diabetes.response;
  } else if (userText.includes('blood pressure') || userText.includes('hypertension')) {
    return responseDatabase.bloodPressure.response;
  } else if (userText.includes('covid') || userText.includes('coronavirus')) {
    return responseDatabase.covid.response;
  }
  
  return responseDatabase.default.response;
};