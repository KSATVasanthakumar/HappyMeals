import { Router } from "express";
import { appendContactRow } from "../services/googleSheets";

const router = Router();

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9]{7,12}$/;

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  category: string;
  otherCategory?: string;
  pax?: string;
  eventType?: string;
  eventDate: string;
  address?: string;
}

function validate(body: Partial<ContactPayload>): string | null {
  if (!body.name || body.name.trim().length < 2) return "Name is required.";
  if (!body.email || !EMAIL_REGEX.test(body.email)) return "A valid email is required.";
  if (!body.phone || !PHONE_REGEX.test(body.phone)) return "A valid phone number is required.";
  if (!body.category) return "Category is required.";
  if (!body.eventDate) return "Event date is required.";
  return null;
}

router.post("/", async (req, res) => {
  const body = req.body as Partial<ContactPayload>;
  const validationError = validate(body);
  if (validationError) {
    res.status(400).json({ error: validationError });
    return;
  }

  const timestamp = new Date().toISOString();

  try {
    await appendContactRow([
      timestamp,
      body.name!,
      body.email!,
      body.phone!,
      body.category!,
      body.otherCategory ?? "",
      body.pax ?? "",
      body.eventType ?? "",
      body.eventDate!,
      body.address ?? "",
    ]);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Failed to append contact row to Google Sheet", error);
    res.status(502).json({ error: "Failed to save your request. Please try again." });
  }
});

export default router;
