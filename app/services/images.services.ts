export const ImagesServices = {
  getImages: async () => {
    const resp = await fetch(`${process.env.API_URL}/list_photos`, {
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,GET",
      },
      method: "GET",
    });

    const res = await resp.json();

    return res;
  },
};
