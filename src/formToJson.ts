const formToJson = <T>(formElement: HTMLFormElement): T => {
  const formData = new FormData(formElement);
  const data = {} as T;

  formData.forEach((value, key) => {
    (data as any)[key] = value;
  });

  return data;
};

export default formToJson;
