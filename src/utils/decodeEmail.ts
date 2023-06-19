const decodeEmail = (uriParam: string) => {
  const decodedURIComponent = decodeURIComponent(uriParam);
  return Buffer.from(decodedURIComponent, 'base64').toString('utf-8');
};

export default decodeEmail;
