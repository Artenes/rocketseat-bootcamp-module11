import User from '../models/User';

class UserController {
  async store(req, res) {
    const { email } = req.body;

    const user = await User.findOne({ where: { email } });

    if (user) {
      return res.status(400).json({ error: 'User already registered' });
    }

    const newUser = await User.create(req.body);

    return res.json(newUser);
  }
}

export default new UserController();
