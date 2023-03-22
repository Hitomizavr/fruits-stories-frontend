import Header from "../header/Header";
import HeaderSlider from "../headerSlider/HeaderSlider";
import PromoProducts from "../promoProducts/PromoProducts";
import Course from "../course/Course";
import PromoCourses from "../promoCourses/PromoCourses";
import GiftKit from "../giftKit/GiftKit";
import PromoGiftKit from "../promoGiftKit/PromoGiftKit";
import PromoFact from "../promoFact/PromoFact";
import PromoFrips from "../promoFrips/PromoFrips";
import PromoPastila from "../promoPastila/PromoPastila";
import ListPastila from "../listPastila/ListPastila";
import Blog from "../blog/Blog";
import Reviews from "../reviews/Reviews";
import Footer from "../footer/Footer";

function MainPage() {

  return (
    <>
      <Header />
      <HeaderSlider />
      <PromoProducts />
      <Course />
      <PromoCourses />
      <GiftKit />
      <PromoGiftKit />
      <PromoFact />
      <PromoFrips />
      <PromoPastila />
      <ListPastila />
      <Blog />
      <Reviews />
      <Footer />
    </>
  );
}

export default MainPage;
