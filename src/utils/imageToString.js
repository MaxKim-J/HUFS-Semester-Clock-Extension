// 이미지를 문자열로 인코딩

export const imageToString = (file) => {
  return new Promise((resolve, reject) => {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => resolve(fileReader.result);
  });
};
