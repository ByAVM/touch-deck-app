const publicBaseUrl = import.meta.env.BASE_URL

export const loadSchema = async (schema: "panel" | "panels-list") => {
  const response = await fetch(`${publicBaseUrl}/schemas/${schema}.schema.json`);
  const data = await response.json();

  return data;
};
