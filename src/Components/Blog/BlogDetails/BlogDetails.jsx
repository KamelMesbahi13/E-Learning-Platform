import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import BlogData from './../data/BlogData.json';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Title } from '../../../GeneralFunctions/title';
import { useTranslation } from 'react-i18next';

const BlogDetails = () => {
  const [windowValue, setWindowValue] = useState(false);

  window.addEventListener('load', () => {
    setWindowValue(true);
  });
  const { t, i18n } = useTranslation();

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
  const { blogId } = useParams();

  const blog = blogs.find((teacher) => teacher.id == blogId);

  const { heading, image, introduction, description } = blog;

  Title(`Mendarek | ${heading}`);

  return (
    <div className={windowValue ? 'activeClass' : 'nonActiveClass'}>
      <div className="container">
        <div className="mt-20 mb-16 md:mb-32 text-center">
          <h1 className="mb-4 font-bold relative">{t('news_details')} </h1>
        </div>{' '}
        <div>
          <LazyLoadImage src={image} alt={heading} effect="blur" />
        </div>
        <div className="mb-20">
          <div className="mt-8">
            <h1>{heading}</h1>
          </div>
          <div className="mt-4">
            <div className="w-1/2">
              <p>{introduction}</p>
            </div>
            <p className="mt-8">
              {description}
              {description}
              {description}
            </p>
          </div>
          <div className="mt-8 w-9/12 relative rtl:right-12 ltr:left-12 font-light">
            <p className="ml-4 before:absolute before:h-full before:w-2 rtl:before:-right-4 ltr:before:-left-4 before:bg-third-color before:top-0">
              {description}
            </p>
          </div>
          <div className="mt-8">
            <p>{description}</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
