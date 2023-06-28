const encodeText = (text: string) => {
  const encodedText = Buffer.from(text).toString('base64');
  return encodeURIComponent(encodedText);
};

export default encodeText;
