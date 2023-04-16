import React from 'react';
import BlogData from './../data/BlogData.json';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

const BlogList = () => {
  const { i18n } = useTranslation();

  const blogs = BlogData.map((blog) => {
    if (i18n.language == 'ar') {
      return {
        id: blog.id,
        image: blog.image,
        heading: blog.heading_ar,
        introduction: blog.introduction_ar,
        description: blog.description_ar,
      };
    }

    if (i18n.language == 'fr') {
      return {
        id: blog.id,
        image: blog.image,
        heading: blog.heading_fr,
        introduction: blog.introduction_fr,
        description: blog.description_fr,
      };
    }
    return blog;
  });

  return (
    <>
      <div>
        <div className="directionLeft">
          <div className="container">
            <div>
              {blogs.map((blog) => {
                return (
                  <div key={blog.id}>
                    <div className="my-20">
                      <div className="flex flex-col md:flex-row shadow-lg w-full lg:w-9/12">
                        <div className="transition-all duration-700 opacity-100">
                          <div>
                            <LazyLoadImage
                              src={blog.image}
                              alt={blog.heading}
                              effect="blur"
                              className="w-full md:w-[17rem] md:h-[14rem] object-cover rounded"
                            ></LazyLoadImage>
                          </div>
                        </div>
                        <div className="w-full text-left mt-4 md:mt-0 pb-8 md:ml-8 md:w-1/2">
                          <h6 className="font-semibold">{blog.heading}</h6>
                          <p className="text-sm">{blog.description}</p>
                          <div className="text-second-color mt-8 flex items-center justify-center md:justify-end">
                            <div>
                              <Link to={`/blog-details/${blog.id}`}>
                                See More
                              </Link>
                            </div>
                            <div className="ml-2">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;
