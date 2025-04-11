import {v4 as uuidv4} from "uuid";
export const users = [];
 let orders = [];
export const createUser = (req, res) => {
  const {username, gender, age, email, order} = req.body;

 const user = users.find((user) => user.email === email);
 if(user) {
  return res.send({
    success: false,
    message: 'this email is already exist'
  });
 } else {
  users.push ({ username, gender, age, email, id: uuidv4(), order});
  res.send({success: true, message: 'succesful'})
 }
};

export const getUsers = (_, res) => {
  const data ={ users: users, orders: orders};
  res.send(data);
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  console.log(id);
  const user = users.find((user) => {
    return user.id === id;
  });
  res.send(user);
};

export const deleteUserByID = ( req, res ) => {
  const { id } = req.body;
  users = users.filter((user) => user.id !== id);
  res.send({success: true, message: 'successfully deleted'});
};

export const updateUser = (req, res) => {
  const { id, username, age, email, gender } = req.body;
  users.map((user) => {
    if(user.id === id) {
      user.username = username;
      user.age = age;
      user.gender = gender;
      user.email = email;
    }
    return user;
  });
  res.send({success: true, message: ' update is successful'});
};