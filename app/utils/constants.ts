export const saveImageToSession = (
  file: File | null
): Promise<string | null> => {
  return new Promise((resolve) => {
    if (!file) {
      resolve(null);
    } else {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result?.toString() || null;
        resolve(base64String);
      };
      reader.readAsDataURL(file);
    }
  });
};
