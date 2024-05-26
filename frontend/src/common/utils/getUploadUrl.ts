export const getUploadUrl = (path: string) => {
  return `${import.meta.env.VITE_BACKEND_URL as string}${path}`;
};
