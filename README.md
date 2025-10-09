# Plum-Assessment

# 🧠 AI-Powered Appointment Scheduler Assistant

An intelligent backend service that parses both **text-based** and **image-based** appointment requests using **OCR**, **Entity Extraction**, and **Normalization**, and produces structured JSON output.

---

## 🧩 Problem Statement

**Focus Area:** OCR → Entity Extraction → Normalization  

**Goal:**  
Build a backend service that parses natural language or document-based appointment requests and converts them into structured scheduling data. The system handles both typed text and noisy image inputs (e.g., scanned notes, emails) and outputs structured JSON with confidence levels and guardrails for ambiguity.

## ⚙️ Tech Stack
- Node.js + Express  
- Multer (for file uploads)  
- Tesseract.js (for OCR)  
- Gemini API (for Entity Extraction & Normalization)  
- Timezone: Asia/Kolkata  

---

## 🔗 API Endpoints

###  **Text API**

**Endpoint:**  
http://localhost:3000/api/text

**Sample Query:**

{
  "query": "I want to book an appointment yesterday at 3 PM for a dental checkup."
}

---

### **Document API**
http://localhost:3000/api/document

**Sample Query:**

document in jpeg|jpg|png|gif format

---

## 🔗 Sample cURL Command

**Request**
curl -X POST http://localhost:3000/api/text \
  -H "Content-Type: application/json" \
  -d "{\"query\": \"I want to book an appointment yesterday at 3 PM for a dental checkup.\"}"


**Response**
{
  "status": "ok",
  "pipeline_results": {
    "step1_extraction": {
      "raw_text": "I want to book an appointment yesterday at 3 PM for a dental checkup.",
      "confidence": 1
    },
    "step2_entities": {
      "entities": {
        "date_phrase": "yesterday",
        "time_phrase": "3 PM",
        "department": "dental checkup"
      },
      "entities_confidence": 0.95
    },
    "step3_normalization": {
      "normalized": {
        "date": "2025-10-08",
        "time": "15:00",
        "tz": "Asia/Kolkata"
      },
      "normalization_confidence": 1
    },
    "step4_final": {
      "appointment": {
        "department": "Dentistry",
        "date": "2025-10-08",
        "time": "15:00",
        "tz": "Asia/Kolkata"
      },
      "status": "ok"
    }
  }
}

---

## 🔗 File structure, route and server start image**
![Document Screenshot](https://github.com/Aman3220/Plum-Assessment/blob/main/assets/route_filestructure.png)

## 🔗 Request and Response of text based api
![Document Screenshot](https://github.com/Aman3220/Plum-Assessment/blob/main/assets/test_api.png)


## 🔗 Request and Response of document based api

**Request**
![Document Screenshot](https://github.com/Aman3220/Plum-Assessment/blob/main/assets/document.png)

**Response**
![Document Screenshot](https://github.com/Aman3220/Plum-Assessment/blob/main/assets/document_api.png)
