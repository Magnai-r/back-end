let orders = [];
import { users } from './userController.js'

export const createOrder = (req, res) => {
  const { food, price, createDate, updateDate, id } = req.body;
  orders.push({
    id: id,
    food,
    price,
    createDate,
    updateDate,
  });
  users.find((user) => {
    if (user.id === id) {
    user.order.push ({
      food,
      price,
      createDate: Date(),
      updateDate,
    });
   }
  });
  res.send({success: true, message: 'successful!'});
};

export const getOrderById = (req, res) => {
  const { id } = req.body;
  const order = orders.find((order) => {
    return order.id === id;
  });
  res.send(order);
};

export const deleteOrderById = (req, res) => {
  const { id } =req.body;
  orders = orders.filter((order) => order.id !==id);
  res.send({success: true, message: 'successfully deleled'})
}
 
export const updateOrder  = (req, res) => {
  const { food, price, createDate, id } = req.body;
  users.map((user) => {
    if (user.id === id) {
      user.order.food = food;
      user.order.price = price;
      user.order.createDate = createDate;
      user.order.updateDate = Date();
    }
  });
  res.send({success: true, message: 'update is succesful'});
};
