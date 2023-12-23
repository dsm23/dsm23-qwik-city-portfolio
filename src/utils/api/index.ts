// TODO: type this file
// @ts-nocheck
const POST_GRAPHQL_FIELDS = `
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          title
          description
          url
          height
          width
        }
      }
    }
  }
  slug
`;

async function fetchGraphQL(query: string, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${
      import.meta.env.PUBLIC_CONTENTFUL_SPACE_ID
    }`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? import.meta.env.PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : import.meta.env.PUBLIC_CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    },
  ).then((response) => response.json());
}

function extractAsset(fetchResponse) {
  return fetchResponse?.data?.asset;
}

function extractAssetEntries(fetchResponse) {
  return fetchResponse?.data?.assetCollection?.items;
}

function extractEducation(fetchResponse) {
  return fetchResponse?.data?.educationSchoolCollection?.items;
}

function extractInterests(fetchResponse) {
  return fetchResponse?.data?.interestsCollection?.items;
}

function extractSkill(fetchResponse) {
  return fetchResponse?.data?.skillCollection?.items?.[0];
}

function extractProfilePic(fetchResponse) {
  return fetchResponse?.data?.personCollection?.items?.[0];
}

function extractHomePage(fetchResponse) {
  const {
    educationSchoolCollection,
    experienceCompanyCollection,
    interestsCollection,
    personCollection,
    skillCollection,
    // TODO: remove this eslint disable
    // eslint-disable-next-line
  } = fetchResponse?.data;

  return {
    education: educationSchoolCollection?.items,
    experience: experienceCompanyCollection?.items,
    interests: interestsCollection?.items,
    person: personCollection?.items?.[0],
    skills: skillCollection?.items,
  };
}

export const getAllAssetsWithSlug = async () => {
  const entries = await fetchGraphQL(
    `query {
      assetCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
      }
    }`,
  );

  return extractAssetEntries(entries);
};

export const getAsset = async (assetId) => {
  const entry = await fetchGraphQL(
    `query {
      asset(id: "${assetId}") {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
    }`,
  );

  return extractAsset(entry);
};

export const getSkillBySlug = async (slug: string) => {
  const entry = await fetchGraphQL(
    `query {
      skillCollection(where: { slug: "${slug}" }, limit: 1) {
        items {
          skillName
          rating
          sys {
            id
          }
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
  );

  return extractSkill(entry);
};

export const getEducation = async () => {
  const entry = await fetchGraphQL(
    `query {
      educationSchoolCollection {
        items {
          schoolName
          description {
            json
          }
          startDate
          endDate
        }
      }
    }`,
  );

  return extractEducation(entry);
};

export const getInterests = async () => {
  const entry = await fetchGraphQL(
    `query {
      interestsCollection {
        items {
          interest
        }
      }
    }`,
  );

  return extractInterests(entry);
};

export const getProfilePic = async () => {
  const entry = await fetchGraphQL(
    `query {
      personCollection {
        items {
          image {
            height
            width
            description
            url
          }
        }
      }
    }`,
  );

  return extractProfilePic(entry);
};

export const getHomePageQuery = async () => {
  const entry = await fetchGraphQL(
    `query {
      personCollection {
        items {
          firstName
          lastName
          title
          shortBio
          email
          phone
          github
          codesandbox
        }
      }
      educationSchoolCollection {
        items {
          schoolName
          description {
            json
          }
          startDate
          endDate
        }
      }
      experienceCompanyCollection(order: endDateTime_DESC) {
        items {
          companyName
          city
          description {
            json
          }
          startDate
          endDate
        }
      }
      skillCollection(order: order_ASC) {
        items {
          skillName
          slug
          icon {
            description
            url
          }
        }
      }
      interestsCollection {
        items {
          interest
        }
      }
    }`,
  );

  return extractHomePage(entry);
};
