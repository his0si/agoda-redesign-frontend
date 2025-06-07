import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_URL;

export const postPics = async (images: File[]) => {
  const formData = new FormData();

  images.forEach((file) => {
    formData.append('images', file);
  });

  const response = await axios.post(`${baseUrl}/images`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};
