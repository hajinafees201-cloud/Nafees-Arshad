/**
 * Utility Home Exports - Official Form Submission Endpoints
 * 
 * Separate and dedicated Formspree endpoints for each form category.
 * This guarantees proper data separation, email notification routing,
 * and reliable receipt of international buyer inquiries.
 */

export const FORM_ENDPOINTS = {
  /**
   * 1. RFQ (Request for Quotation) Endpoint
   * Dedicated to container-load quotations, maritime freight estimates, and Proforma Invoices.
   */
  rfq: import.meta.env.VITE_FORMSPREE_RFQ_ENDPOINT || 'https://formspree.io/f/mqaeovpq',

  /**
   * 2. Corporate Contact Desk Endpoint
   * Dedicated to general business correspondence, partnership inquiries, and executive desk messages.
   */
  contact: import.meta.env.VITE_FORMSPREE_CONTACT_ENDPOINT || 'https://formspree.io/f/xjkgnkqa',

  /**
   * 3. Product Inquiries Endpoint
   * Dedicated to commodity-level inquiries (Fresh Produce/Vegetables, Himalayan Salt, Surgical Tools).
   */
  inquiry: import.meta.env.VITE_FORMSPREE_INQUIRY_ENDPOINT || 'https://formspree.io/f/mrbeyeqe',

  /**
   * 4. International Buyer Reviews & Commercial Testimonials Endpoint
   * Dedicated to client verification, order rating, and feedback submissions.
   */
  review: import.meta.env.VITE_FORMSPREE_REVIEW_ENDPOINT || 'https://formspree.io/f/xvoeykwa',
} as const;

export interface FormSubmissionResult {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Standardized submit function with fallback and structured headers
 */
export async function submitToFormEndpoint(
  endpoint: string,
  data: Record<string, unknown>
): Promise<FormSubmissionResult> {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        _destination_portal: 'utilityhomeexports.com',
        _submission_timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        success: false,
        error: errorData.error || `Submission returned status ${response.status}. Please reach out directly via WhatsApp or email.`,
      };
    }

    return {
      success: true,
      message: 'Your inquiry has been successfully transmitted to the Utility Home Exports desk.',
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Network error';
    return {
      success: false,
      error: errorMsg,
    };
  }
}
