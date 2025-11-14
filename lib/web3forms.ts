/**
 * Web3Forms Integration Utility
 * Handles form submissions to Web3Forms API
 */

import type { QuoteRequest, ContactMessage } from "@/types";
import { WEB3FORMS_CONFIG } from "@/utils/constants";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

interface Web3FormsResponse {
  success: boolean;
  message: string;
}

/**
 * Submit quote request to Web3Forms
 */
export async function submitQuoteRequest(
  data: QuoteRequest
): Promise<Web3FormsResponse> {
  try {
    const formData = new FormData();

    // Add Web3Forms required fields
    formData.append("access_key", WEB3FORMS_CONFIG.accessKey);
    formData.append("subject", WEB3FORMS_CONFIG.subject.quote);
    formData.append("from_name", data.fullName);
    formData.append("redirect", WEB3FORMS_CONFIG.redirectUrl);

    // Add form data
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("typeOfCleaning", data.typeOfCleaning);
    formData.append("numberOfRooms", data.numberOfRooms?.toString() || "");
    formData.append("location", data.location);
    formData.append("suppliesOption", data.suppliesOption);
    formData.append("address", data.address);
    formData.append("city", data.city || "");
    formData.append("postalCode", data.postalCode || "");
    formData.append("preferredDate", data.preferredDate || "");
    formData.append("additionalNotes", data.additionalNotes || "");
    formData.append("acceptsPolicy", data.acceptsPolicy.toString());
    formData.append("sourcePage", data.sourcePage || "unknown");

    // Honeypot field for spam protection
    formData.append("botcheck", "");

    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    return {
      success: result.success || false,
      message: result.message || "Unknown error occurred",
    };
  } catch (error) {
    console.error("Web3Forms submission error:", error);
    return {
      success: false,
      message: "Failed to submit form. Please try again.",
    };
  }
}

/**
 * Submit contact message to Web3Forms
 */
export async function submitContactMessage(
  data: ContactMessage
): Promise<Web3FormsResponse> {
  try {
    const formData = new FormData();

    // Add Web3Forms required fields
    formData.append("access_key", WEB3FORMS_CONFIG.accessKey);
    formData.append("subject", WEB3FORMS_CONFIG.subject.contact);
    formData.append("from_name", data.fullName);
    formData.append("redirect", WEB3FORMS_CONFIG.redirectUrl);

    // Add form data
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("phone", data.phone || "");
    formData.append("subject_field", data.subject); // renamed to avoid conflict
    formData.append("message", data.message);
    formData.append("reason", data.reason || "general");

    // Honeypot field for spam protection
    formData.append("botcheck", "");

    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    return {
      success: result.success || false,
      message: result.message || "Unknown error occurred",
    };
  } catch (error) {
    console.error("Web3Forms submission error:", error);
    return {
      success: false,
      message: "Failed to submit form. Please try again.",
    };
  }
}
