import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './GeneralFunctions/ScrollTop';
import { Navbar } from './INDEX';

const Home = lazy(() => import('./Components/Home/Home'));
const Teachers = lazy(() => import('./Components/Teachers/Home'));
const TeachersDetails = lazy(() =>
  import('./Components/Teachers/TeachersDetails/TeacherDetails')
);
const AboutUs = lazy(() => import('./Components/About-Us/Home'));
const SignUp = lazy(() => import('./Components/SignUp/SignUp'));
const Login = lazy(() => import('./Components/Login/Login'));
const Faq = lazy(() => import('./Components/Faq/Home'));
const Footer = lazy(() => import('./Components/Footer/Footer'));
const Blog = lazy(() => import('./Components/Blog/Home'));
const BlogDetails = lazy(() =>
  import('./Components/Blog/BlogDetails/BlogDetails')
);
const ContactUs = lazy(() => import('./Components/Contact-Us/Home'));
const Courses = lazy(() => import('./Components/Courses/Home'));
const CourseDetails = lazy(() =>
  import('./Components/Courses/CourseDetails/CourseDetails')
);
const Error = lazy(() => import('./Components/404Error/Error'));
const Up = lazy(() => import('./Components/Ui/Up/Up'));

const App = () => {
  return (
    <>
      <ScrollToTop>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="our-teachers" element={<Teachers />} />
          <Route path="our-teachers/:teacherId" element={<TeachersDetails />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="blog-details/:blogId" element={<BlogDetails />} />
          <Route path="our-courses" element={<Courses />} />
          <Route path="course-details/:courseId" element={<CourseDetails />} />
          <Route path="About-us" element={<AboutUs />} />
          <Route path="Contact-Us" element={<ContactUs />} />
          <Route path="Faq" element={<Faq />} />
          <Route path="Sign-up" element={<SignUp />} />
          <Route path="Login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Up />
        {location.pathname !== '/Login' && location.pathname !== '/Sign-up' && (
          <Footer />
        )}
      </ScrollToTop>
    </>
  );
};

export default App;
