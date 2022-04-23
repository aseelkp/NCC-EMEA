const baseUrl = "http://localhost:3000/api/public";

const getUrl = (endPoint) => `${baseUrl}/${endPoint}/`;

const apiEndpoints = {
  event: getUrl("event"),
  achievement: getUrl("achievement"),
  gallery: getUrl("gallery"),
};

export default apiEndpoints;
