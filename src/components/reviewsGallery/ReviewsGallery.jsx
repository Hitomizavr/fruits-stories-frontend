import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

import review from "../../img/review.jpg";
import review2 from "../../img/review-2.jpg";
import review3 from "../../img/review-3.jpg";
import review4 from "../../img/review-4.jpg";
import review5 from "../../img/review-5.jpg";

// https://photoswipe.com/getting-started/

const ReviewsGallery = () => {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
  }, []);

  return (
    <div className="reviews-gallery-container">
      <div className="reviews-gallery" id="gallery">
        <a
          className="reviews-gallery-card"
          href={review}
          data-pswp-width="498"
          data-pswp-height="1080"
          rel="noreferrer"
          target="_blank"
        >
          <img className="reviews-gallery-card-img" src={review} alt="review" />
        </a>

        <a
          className="reviews-gallery-card"
          href={review2}
          data-pswp-width="607"
          data-pswp-height="1080"
          data-cropped="true"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="reviews-gallery-card-img"
            src={review2}
            alt="review"
          />
        </a>

        <a
          className="reviews-gallery-card"
          href={review3}
          data-pswp-width="607"
          data-pswp-height="1080"
          rel="noreferrer"
          target="_blank"
        >
          <img className="reviews-gallery-card-img" src={review3} alt="" />
        </a>

        <a
          className="reviews-gallery-card"
          href={review4}
          data-pswp-width="1280"
          data-pswp-height="1280"
          rel="noreferrer"
          target="_blank"
        >
          <img className="reviews-gallery-card-img" src={review4} alt="" />
        </a>
        
        <a
          className="reviews-gallery-card"
          href={review5}
          data-pswp-width="607"
          data-pswp-height="1080"
          rel="noreferrer"
          target="_blank"
        >
          <img className="reviews-gallery-card-img" src={review5} alt="" />
        </a>
      </div>
    </div>
  );
};

export default ReviewsGallery;
