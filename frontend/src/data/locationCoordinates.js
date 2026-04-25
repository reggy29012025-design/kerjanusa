const locationCoordinates = {
  'jakarta barat': { latitude: -6.1674, longitude: 106.7637 },
  'jakarta pusat': { latitude: -6.1862, longitude: 106.8341 },
  'jakarta selatan': { latitude: -6.2615, longitude: 106.8106 },
  'jakarta timur': { latitude: -6.2250, longitude: 106.9004 },
  'jakarta utara': { latitude: -6.1389, longitude: 106.8636 },
  'bandung': { latitude: -6.9175, longitude: 107.6191 },
  'bandung barat': { latitude: -6.8650, longitude: 107.4910 },
  'surabaya': { latitude: -7.2575, longitude: 112.7521 },
  'bogor kota': { latitude: -6.5950, longitude: 106.8166 },
  'kabupaten bogor': { latitude: -6.4796, longitude: 106.8347 },
  'kemang, kabupaten bogor': { latitude: -6.5571, longitude: 106.7305 },
  'parung, kabupaten bogor': { latitude: -6.4229, longitude: 106.7334 },
  'bekasi': { latitude: -6.2383, longitude: 106.9756 },
  'bogor': { latitude: -6.5950, longitude: 106.8166 },
  'kemang': { latitude: -6.5571, longitude: 106.7305 },
  'parung': { latitude: -6.4229, longitude: 106.7334 },
  'depok': { latitude: -6.4025, longitude: 106.7942 },
  'tangerang': { latitude: -6.1783, longitude: 106.6319 },
  'tangerang selatan': { latitude: -6.2886, longitude: 106.7179 },
  'serang': { latitude: -6.1201, longitude: 106.1503 },
  'cilegon': { latitude: -6.0025, longitude: 106.0112 },
  'semarang': { latitude: -6.9667, longitude: 110.4167 },
  'yogyakarta': { latitude: -7.7956, longitude: 110.3695 },
  'solo': { latitude: -7.5696, longitude: 110.8284 },
  'malang': { latitude: -7.9666, longitude: 112.6326 },
  'denpasar': { latitude: -8.6705, longitude: 115.2126 },
  'medan': { latitude: 3.5952, longitude: 98.6722 },
  'palembang': { latitude: -2.9761, longitude: 104.7754 },
  'makassar': { latitude: -5.1477, longitude: 119.4327 },
  'balikpapan': { latitude: -1.2379, longitude: 116.8529 },
  'banjarmasin': { latitude: -3.3186, longitude: 114.5944 },
  'manado': { latitude: 1.4748, longitude: 124.8421 },
};

export const normalizeLocationKey = (locationName = '') =>
  locationName.toString().trim().toLowerCase();

export const getLocationCoordinates = (locationName) => {
  const normalizedLocation = normalizeLocationKey(locationName);

  if (!normalizedLocation) {
    return null;
  }

  if (locationCoordinates[normalizedLocation]) {
    return locationCoordinates[normalizedLocation];
  }

  const fallbackMatch = Object.entries(locationCoordinates).find(
    ([key]) => normalizedLocation.includes(key) || key.includes(normalizedLocation)
  );

  return fallbackMatch?.[1] ?? null;
};

export default locationCoordinates;
