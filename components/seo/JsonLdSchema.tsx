import React from "react";

export const JsonLdSchema: React.FC = () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://saihej-motion.com";

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Saihej Motion",
    "url": siteUrl,
    "logo": `${siteUrl}/icon1.png`,
    "sameAs": [
      "https://www.youtube.com/@SaihejMotion",
      "https://youtube.com/@SaihejMotion"
    ],
    "description": "Official website of Saihej Motion - 4K 3D Animated Hindi Nursery Rhymes, Toddler Songs, and Kids Cartoons."
  };

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Saihej Motion",
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/?search={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  // Featured Videos Schema (VideoObject & ItemList)
  const videoObjectList = [
    {
      name: "Aloo Kachaloo Beta Kahan Gaye The | Hindi Rhymes for Babies | Chintu 4K",
      description: "Teach toddlers about vegetables and family bonds with playful singing potatoes and brinjals in 4K 3D animation!",
      thumbnailUrl: ["https://i.ytimg.com/vi/SDXfWhIjxaE/maxresdefault.jpg"],
      uploadDate: "2026-07-10T08:00:00+05:30",
      duration: "PT3M30S",
      contentUrl: "https://www.youtube.com/watch?v=SDXfWhIjxaE",
      embedUrl: "https://www.youtube.com/embed/SDXfWhIjxaE"
    },
    {
      name: "Aaj Mangalwar Hai + Kalu Madari Aaya + Lakdi Ki Kathi | Hindi Rhymes for Kids",
      description: "Aaj Mangalwar hai chuhe ko bukhar hai! Fun-filled non-stop Hindi nursery rhymes for children in 4K.",
      thumbnailUrl: ["https://i.ytimg.com/vi/xdyykKifm3w/maxresdefault.jpg"],
      uploadDate: "2026-07-15T08:00:00+05:30",
      duration: "PT4M12S",
      contentUrl: "https://www.youtube.com/watch?v=xdyykKifm3w",
      embedUrl: "https://www.youtube.com/embed/xdyykKifm3w"
    },
    {
      name: "Billi Mausi Billi Mausi | Hindi Rhymes for Babies | Animal Cartoon | Chintu 4K",
      description: "Sing along with cute Billi Mausi and her little kittens in a vibrant courtyard full of flowers.",
      thumbnailUrl: ["https://i.ytimg.com/vi/0PKhCycLdb8/maxresdefault.jpg"],
      uploadDate: "2026-07-20T08:00:00+05:30",
      duration: "PT3M15S",
      contentUrl: "https://www.youtube.com/watch?v=0PKhCycLdb8",
      embedUrl: "https://www.youtube.com/embed/0PKhCycLdb8"
    },
    {
      name: "Gaiya Meri Aati Hai | Dancing Cow Song | Kids Hindi Rhymes | Saihej Motion 4K",
      description: "Gaiya Gaiya Thum Thum! Chintu aur uski pyaari dancing gaiya ka dhamakedaar 3D dance song!",
      thumbnailUrl: ["https://i.ytimg.com/vi/iZC7_cmOzWM/maxresdefault.jpg"],
      uploadDate: "2026-08-09T08:00:00+05:30",
      duration: "PT2M07S",
      contentUrl: "https://www.youtube.com/watch?v=iZC7_cmOzWM",
      embedUrl: "https://www.youtube.com/embed/iZC7_cmOzWM"
    }
  ];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Popular 4K Hindi Nursery Rhymes",
    "itemListElement": videoObjectList.map((video, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "VideoObject",
        "name": video.name,
        "description": video.description,
        "thumbnailUrl": video.thumbnailUrl,
        "uploadDate": video.uploadDate,
        "duration": video.duration,
        "contentUrl": video.contentUrl,
        "embedUrl": video.embedUrl,
        "publisher": {
          "@type": "Organization",
          "name": "Saihej Motion",
          "logo": {
            "@type": "ImageObject",
            "url": `${siteUrl}/icon1.png`
          }
        }
      }
    }))
  };

  // FAQ Page Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Saihej Motion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Saihej Motion is a top-rated YouTube Kids & Animation channel providing 4K 3D Hindi Nursery Rhymes, Educational Toddler Songs, and Moral Cartoon Stories for children."
        }
      },
      {
        "@type": "Question",
        "name": "Are Saihej Motion nursery rhymes safe for toddlers and kids?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! All Saihej Motion content is 100% kid-safe, friendly, non-violent, and specially tailored for early preschool learning and entertainment."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I watch Saihej Motion 4K videos and songs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can watch all 4K nursery rhymes and songs directly on our official YouTube channel @SaihejMotion or right here on our website."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};
