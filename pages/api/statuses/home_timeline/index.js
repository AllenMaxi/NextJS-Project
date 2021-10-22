const timeline = [
  {
    id: "0",
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    username: "maxi",
    message: `Como estas?`,
  },
  {
    id: "1",
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    username: "allen",
    message: `hola`,
  },
  {
    id: "2",
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    username: "maxi",
    message: `Como estas?`,
  },
  {
    id: "3",
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    username: "allen",
    message: `hola`,
  },
  {
    id: "4",
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    username: "maxi",
    message: `Como estas?`,
  },
  {
    id: "5",
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    username: "allen",
    message: `hola`,
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(timeline));
};
