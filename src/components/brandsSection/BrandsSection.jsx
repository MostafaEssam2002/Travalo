import MarqueeModule from "react-fast-marquee";
const Marquee = MarqueeModule.default;
const BrandsSection = () => {
  return (
    <div className="brand_section">
      <div className="brand_section_container">
        <Marquee speed={200} style={{display: "flex",gap:"2em",alignItems: "center",overflow: "hidden", height: "100%" }} >
          <img width={"10%"} src="https://img.magnific.com/premium-photo/gold-alphabet-letter-v-daz3d-style-3d-illustration_899449-405952.jpg?w=1480" alt="" />
          <img width={"10%"} src="https://img.magnific.com/premium-photo/fiery-letter-v-fire-narrativedriven-visual-storytelling-by-vicente-romero-redondo_899449-605966.jpg?w=1480" alt="" />
          <img width={"10%"} src="https://img.magnific.com/premium-vector/approved-logo-number-7-check-logo-design-template-eps10-vector_252051-5321.jpg?w=1480" alt="" />
          <img width={"10%"} src="https://img.magnific.com/premium-photo/gold-alphabet-letter-v-daz3d-style-3d-illustration_899449-405952.jpg?w=1480" alt="" />
          <img width={"10%"} src="https://img.magnific.com/premium-photo/fiery-letter-v-fire-narrativedriven-visual-storytelling-by-vicente-romero-redondo_899449-605966.jpg?w=1480" alt="" />
          <img width={"10%"} src="https://img.magnific.com/premium-photo/gold-alphabet-letter-v-daz3d-style-3d-illustration_899449-405952.jpg?w=1480" alt="" />
          <img width={"10%"} src="https://img.magnific.com/premium-photo/gold-alphabet-letter-v-daz3d-style-3d-illustration_899449-405952.jpg?w=1480" alt="" />
          <img width={"10%"} src="https://img.magnific.com/premium-photo/gold-alphabet-letter-v-daz3d-style-3d-illustration_899449-405952.jpg?w=1480" alt="" />

          <img width={"10%"} src="https://img.magnific.com/premium-vector/approved-logo-number-7-check-logo-design-template-eps10-vector_252051-5321.jpg?w=1480" alt="" />
        </Marquee>
      </div>
    </div>
  );
};
export default BrandsSection;