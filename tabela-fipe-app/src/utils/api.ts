const API_URL = 'https://parallelum.com.br/fipe/api/v1/carros';

export async function getBrands() {
  const response = await fetch(`${API_URL}/marcas`, {
    method: 'GET',
  });
  if (!response.ok) return;
  return await response.json();
}

export async function getModels(brandId: string) {
  const response = await fetch(`${API_URL}/marcas/${brandId}/modelos`, {
    method: 'GET',
  });
  if (!response.ok) return;
  return await response.json();
}

export async function getYears(brandId: string, modelId: string) {
  const response = await fetch(
    `${API_URL}/marcas/${brandId}/modelos/${modelId}/anos`,
    {
      method: 'GET',
    },
  );
  if (!response.ok) return;
  return await response.json();
}

export async function getPrice(
  brandId: string,
  modelId: string,
  yearID: string,
) {
  const response = await fetch(
    `${API_URL}/marcas/${brandId}/modelos/${modelId}/anos/${yearID}`,
    {
      method: 'GET',
    },
  );
  if (!response.ok) return;
  return await response.json();
}
