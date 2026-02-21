/**
 * Navigates to the thank-you page in the same tab with query parameters
 */
export const openThankYouPage = (params: Record<string, string | undefined>) => {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value) searchParams.set(key, value);
  });
  const url = `/thank-you?${searchParams.toString()}`;
  window.location.href = url;
};
