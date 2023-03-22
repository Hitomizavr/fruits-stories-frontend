import ReviewsGallery from "../reviewsGallery/ReviewsGallery";
const Reviews = () => {
  return (
    <section className="blog">
      <div className="container">
        <div className="reviews-information">
          <h2 className="review-title">Отзывы любимых клиентов!</h2>
          <p className="blog-subtitle reviews-subtitle">
            Все отзывы реальные. Оригиналы можно посмотреть в нашей группе в
            контакте в разделе{" "}
            <a href="https://vk.com/topic-182313080_40434635">"отзывы"</a>
          </p>
          <div className="reviews-gallery-container">
            <ReviewsGallery />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
