import { client } from "../../../sanity/lib/client";
import BrandImageLeftTextRight from "../components/BrandImageLeftTextRight";
import BrandImageRightTextLeft from "../components/BrandImageRightTextLeft";

export default async function BrandsPage() {
  const data = await client.fetch(`
    *[_type == "pages" && title == "Brands"] {
      pageItems[] {
        "brandName": name,
        "websiteUrl": website,
        "imageUrl": featuredImage.asset->url,
        "brandLogoUrl": brandLogo.asset->url,
        "heading": tagline,
        paragraph,
        paragraph2,
        order,
      }
    }
  `);

  const brandArray = data[0].pageItems;

  return (
    <>
      {brandArray.map((brand, index) =>
        index % 2 === 0 ? (
          <BrandImageLeftTextRight
            key={index}
            brandName={brand.brandName}
            brandLogoUrl={brand.brandLogoUrl}
            imageUrl={brand.imageUrl}
            websiteUrl={brand.websiteUrl}
            heading={brand.heading}
            paragraph={brand.paragraph}
            paragraph2={brand.paragraph2}
          />
        ) : (
          <BrandImageRightTextLeft
            key={index}
            brandName={brand.brandName}
            brandLogoUrl={brand.brandLogoUrl}
            imageUrl={brand.imageUrl}
            websiteUrl={brand.websiteUrl}
            heading={brand.heading}
            paragraph={brand.paragraph}
            paragraph2={brand.paragraph2}
          />
        )
      )}
    </>
  );
}
