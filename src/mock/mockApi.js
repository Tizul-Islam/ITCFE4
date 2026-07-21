// ============================================================
// ITCFE4 — Mock API Functions
// These functions mirror the real API endpoints.
// When backend is ready, replace these with real fetch() calls.
// ============================================================

import {
  mockSiteSettings,
  mockSocialLinks,
  mockBanners,
  mockCourses,
  mockInstructors,
  mockReviews,
  mockPlatformSummary,
  mockBlogs,
  mockVideoGalleries,
  mockSuccessStories,
  mockApprovals,
  mockOffers,
} from "./mockData";

// Simulate network delay (remove when switching to real API)
const delay = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

// ─── Site Settings ───────────────────────────────────────────
export async function fetchSiteSettingsMock() {
  await delay(200);
  return { ...mockSiteSettings };
}

// ─── Social Links ────────────────────────────────────────────
export async function fetchSocialLinksMock() {
  await delay(150);
  return [...mockSocialLinks];
}

// ─── Banners ─────────────────────────────────────────────────
export async function fetchBannersMock() {
  await delay(200);
  return [...mockBanners];
}

// ─── Courses ─────────────────────────────────────────────────
export async function fetchCoursesMock() {
  await delay(300);
  return { results: mockCourses, count: mockCourses.length };
}

export async function fetchCourseByIdMock(id) {
  await delay(250);
  const numId = parseInt(id, 10);
  const course = mockCourses.find((c) => c.id === numId);
  if (!course) throw new Error("Course not found");
  const instructor = mockInstructors.find((i) => i.id === course.instructor_id) || null;
  const reviews = mockReviews.filter(
    (r) => r.course_name === course.title
  );
  return { ...course, instructor, reviews };
}

// ─── Instructors ─────────────────────────────────────────────
export async function fetchInstructorsMock() {
  await delay(300);
  return { results: mockInstructors, count: mockInstructors.length };
}

export async function fetchInstructorByIdMock(id) {
  await delay(200);
  const numId = parseInt(id, 10);
  const instructor = mockInstructors.find((i) => i.id === numId);
  if (!instructor) throw new Error("Instructor not found");
  return { ...instructor };
}

// ─── Reviews ─────────────────────────────────────────────────
export async function fetchReviewsMock() {
  await delay(250);
  return { results: mockReviews, count: mockReviews.length };
}

export async function fetchCourseReviewsMock(courseId) {
  await delay(200);
  const numId = parseInt(courseId, 10);
  const course = mockCourses.find((c) => c.id === numId);
  if (!course) return [];
  return mockReviews.filter((r) => r.course_name === course.title);
}

// ─── Platform Summary (Stats) ────────────────────────────────
export async function fetchPlatformSummaryMock() {
  await delay(200);
  return { ...mockPlatformSummary };
}

// ─── Blogs ───────────────────────────────────────────────────
export async function fetchBlogsMock() {
  await delay(300);
  return { results: mockBlogs, count: mockBlogs.length };
}

export async function fetchBlogByIdMock(id) {
  await delay(200);
  const numId = parseInt(id, 10);
  const blog = mockBlogs.find((b) => b.id === numId);
  if (!blog) throw new Error("Blog not found");
  return { ...blog };
}

// ─── Video Galleries ─────────────────────────────────────────
export async function fetchVideoGalleriesMock() {
  await delay(300);
  return { results: mockVideoGalleries, count: mockVideoGalleries.length };
}

// ─── Success Stories ─────────────────────────────────────────
export async function fetchSuccessStoriesMock() {
  await delay(300);
  return { results: mockSuccessStories, count: mockSuccessStories.length };
}

// ─── Approvals / Certificates ────────────────────────────────
export async function fetchApprovalsMock() {
  await delay(200);
  return [...mockApprovals];
}

// ─── Special Offers ──────────────────────────────────────────
export async function fetchOffersMock() {
  await delay(150);
  return { results: mockOffers };
}
