import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './GeneralFunctions/ScrollTop';
import {
  AboutUs,
  Blog,
  BlogDetails,
  ContactUs,
  CourseDetails,
  Courses,
  Error,
  Faq,
  Footer,
  Home,
  Login,
  Navbar,
  SignUp,
  Teachers,
  TeachersDetails,
  Up,
} from './INDEX';

const App = () => {
  return (
    <>
      <ScrollToTop>
        {location.pathname !== '/Login' && location.pathname !== '/Sign-up' && (
          <Navbar />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-teachers" element={<Teachers />} />
          <Route
            path="/our-teachers/:teacherId"
            element={<TeachersDetails />}
          />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/blog-details/:blogId" element={<BlogDetails />} />
          <Route path="/our-courses" element={<Courses />} />
          <Route path="/course-details/:courseId" element={<CourseDetails />} />
          <Route path="/About-us" element={<AboutUs />} />
          <Route path="/Contact-Us" element={<ContactUs />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Sign-up" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
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
