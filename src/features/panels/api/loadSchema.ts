export const loadSchema = async (schema: "panel" | "panels-list") => {
  const response = await fetch(`/schemas/${schema}.schema.json`);
  const data = await response.json();

  return data;
};
