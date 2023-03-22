import iconArticlePastila from "../../img/pastilaback.jpg";
import iconArticlePastila2 from "../../img/article-image-2.jpg";

const Blog = () => {
  return (
    <section className="blog">
      <div className="container">
        <div className="blog-information">
          <div className="blog-text-block">
            <h3>Читайте наш блог</h3>
            <p className="blog-subtitle">
              Интересные и полезные статьи о фруктах и ягодах, о нашей работе и
              нашей команде. Узнавайте о пользе того или иного фрукта и делитесь
              информацией с друзьями!
            </p>
            <a className="giftkit-link-all blog-button-link" href="#test">ЧИТАТЬ ВСЕ СТАТЬИ → </a>
          </div>
          <div className="blog-list-articles">
            <div className="blog-cards-articles">
              <div className="blog-card-article">
                <div>
                  <img className="blog-image-article" src={iconArticlePastila} alt="blog article" />
                </div>
                <div className="blog-article-information">
                  <a className="blog-article-title" href="#test">Сушеная вишня полезна для сердца</a>
                  <p className="blog-article-subtitle">17 МАРТА 2021</p>
                </div>
              </div>
              <div className="blog-card-article">
                <div>
                  <img className="blog-image-article" src={iconArticlePastila2} alt="blog article" />
                </div>
                <div className="blog-article-information">
                  <a className="blog-article-title" href="#test">Как готовятся самые вкусные фрипсы?</a>
                  <p className="blog-article-subtitle">27 ФЕВРАЛЯ 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
