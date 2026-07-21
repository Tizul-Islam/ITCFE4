// ============================================================
// Site Settings API — currently uses mock data.
// To switch to real API: replace mock functions with fetch().
// ============================================================
import { fetchSiteSettingsMock, fetchSocialLinksMock } from '../mock/mockApi';

export async function fetchSiteSettings() {
  return fetchSiteSettingsMock();
}

export async function fetchSocialLinks() {
  return fetchSocialLinksMock();
}