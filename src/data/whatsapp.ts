// WhatsApp groups. Invite links come from the Ministry's document
// "Department Whatsapp Groups + BOR Email IDs" (Tab 1: subject groups,
// MAA x BOR). `department` matches the names in departmentContacts.

export type WhatsAppGroup = {
  department: string;
  /** Name as written in the source document */
  groupName: string;
  url: string;
};

export const departmentWhatsAppGroups: WhatsAppGroup[] = [
  { department: "Media Studies", groupName: "Media Studies", url: "https://chat.whatsapp.com/DKvehQsH43DB8o4TS17rgz" },
  { department: "Environmental Studies", groupName: "Environmental Studies", url: "https://chat.whatsapp.com/J9biLdrcpZ10YGWmPkGZ3u" },
  { department: "Entrepreneurship", groupName: "Entrepreneurship", url: "https://chat.whatsapp.com/JczOwMMuSjHAUDQzhl0Dea?s=cl&p=i&mlu=4" },
  { department: "Sociology & Anthropology", groupName: "Sociology/Anthropology", url: "https://chat.whatsapp.com/L9qKGOGUzZP2hTuObA9e88" },
  { department: "Psychology", groupName: "Psychology and Cognitive Sciences", url: "https://chat.whatsapp.com/IlXQCp72ajaKwA775WZuG4" },
  { department: "Economics", groupName: "Economics", url: "https://chat.whatsapp.com/JLttAxEWfYqAEke5i1SXXO" },
  { department: "PPE", groupName: "Politics, Philosophy and Economics (PPE)", url: "https://chat.whatsapp.com/Bf1eylh0JfXKqxpYKWwWMv" },
  { department: "International Relations", groupName: "International Relations", url: "https://chat.whatsapp.com/GSO9Ho53wEE9Cp5j7yC7sg" },
  { department: "Biology", groupName: "Biology", url: "https://chat.whatsapp.com/BvZgTdXc2p80ZkLK8UGlq4" },
  { department: "Chemistry", groupName: "Chemistry", url: "https://chat.whatsapp.com/KdCUp7zhE1pJnt51tgfgxJ" },
  { department: "Computer Science", groupName: "Computer Science", url: "https://chat.whatsapp.com/CBWzD9QtZZ2JaVpZu6T5i5" },
  { department: "Mathematics", groupName: "Mathematics", url: "https://chat.whatsapp.com/LRGvwkrGdOEA15RePhqgZI" },
  { department: "Physics", groupName: "Physics/Astronomy", url: "https://chat.whatsapp.com/DsiEMEafLsrIOqriFdDdIX" },
  { department: "English", groupName: "English", url: "https://chat.whatsapp.com/F6d0OlORePv24BWt2fJIbd" },
  { department: "Political Science", groupName: "Political Science", url: "https://chat.whatsapp.com/GIW6933WjJqLF1qHGc5o8P" },
  { department: "History", groupName: "History", url: "https://chat.whatsapp.com/ITAS3TdOvN1I4AM9UC7VjW" },
  { department: "Visual Arts", groupName: "Visual Arts", url: "https://chat.whatsapp.com/D1gOXyrQijnIWM5rifiIFQ" },
  { department: "Philosophy", groupName: "Philosophy", url: "https://chat.whatsapp.com/EbUoS61LcIe54njZ6GgLk0" },
  { department: "China Studies", groupName: "China Studies", url: "https://chat.whatsapp.com/ERfDn7Pz2JEFDVTJfgHVGC" },
  { department: "Creative Writing", groupName: "CW", url: "https://chat.whatsapp.com/Ci6QgReaGjF4ooHTUcaCt4" },
  { department: "Performing Arts", groupName: "Performing Arts", url: "https://chat.whatsapp.com/F5FiHmDsulVDLoofRY20av" },
];

// Groups that are joined by scanning a QR code. The QR images are on Google Drive.
export const qrWhatsAppGroups = [
  {
    name: "MAA Open Q&A Group (UG2025)",
    purpose: "Open WhatsApp group for academic questions.",
    url: "https://drive.google.com/file/d/1xCLQAfJbFXJG5fbNM4Y26n-JuaCpxkob/view",
  },
];
