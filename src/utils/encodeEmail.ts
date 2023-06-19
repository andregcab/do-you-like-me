const encodeEmail = (email: string) => {
  const encodedEmail = Buffer.from(email).toString('base64');
  return encodeURIComponent(encodedEmail);
};

export default encodeEmail;
