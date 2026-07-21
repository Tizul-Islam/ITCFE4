import { createBrowserRouter } from "react-router-dom";
import AdmissionForm from "../components/AdmissionForm";
import BlogPostDetail from "../components/BlogPostDetail";
import PhotoGallery from "../components/Gallery/PhotoGallery";
import VideoGallery from "../components/Gallery/VideoGallery";
import LoginForm from "../components/LoginForm";
import OurOpinion from "../components/OurOpinion";
import OurWork from "../components/OurWork";
import Root from "../layout/Root";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Course from "../pages/Course";
import CourseDetails from "../pages/CourseDetails";
import Games from "../pages/Games";
import Home from "../pages/Home";
import SuccessStories from "../pages/SuccessStories";
import Training from "../pages/Trainer";
import TrainerDetails from "../pages/TrainerDetails";
import ErrorPage from "../Error";

import {
  fetchCoursesMock,
  fetchCourseByIdMock,
  fetchInstructorsMock,
  fetchBlogsMock,
  fetchBlogByIdMock,
  fetchVideoGalleriesMock,
} from "../mock/mockApi";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/login",
        element: <LoginForm></LoginForm>,
      },
      {
        path: "/course",
        element: <Course></Course>,
        loader: () => fetchCoursesMock(),
      },
      {
        path: "/course/:id",
        element: <CourseDetails></CourseDetails>,
        loader: async ({ params }) => {
          try {
            const courseData = await fetchCourseByIdMock(params.id);
            return courseData;
          } catch (error) {
            console.error("Error fetching course:", error);
            throw error;
          }
        },
      },
      {
        path: "/training",
        element: <Training></Training>,
        loader: () => fetchInstructorsMock(),
      },
      {
        path: "/games",
        element: <Games></Games>,
      },
      {
        path: "/photosGallery",
        element: <OurWork></OurWork>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
        loader: () => fetchBlogsMock(),
      },
      {
        path: "/blog/:id",
        element: <BlogPostDetail></BlogPostDetail>,
        loader: ({ params }) => fetchBlogByIdMock(params.id),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/admission",
        element: <AdmissionForm></AdmissionForm>,
      },
      {
        path: "/photoGallery",
        element: <PhotoGallery></PhotoGallery>,
      },
      {
        path: "/videoGallery",
        element: <VideoGallery></VideoGallery>,
        loader: async () => {
          try {
            const data = await fetchVideoGalleriesMock();
            return data;
          } catch (error) {
            console.error("Error fetching video galleries:", error);
            return { results: [] };
          }
        },
      },
      {
        path: "/success-stories",
        element: <SuccessStories></SuccessStories>,
      },
      {
        path: "/OurOpinion",
        element: <OurOpinion></OurOpinion>,
      },
      {
        path: "/trainer/:id",
        element: <TrainerDetails />,
      },
    ],
  },
]);
