import MailApi from "../../../shared/Infra/services/api";

class TodoController {
  async teste(req, res) {
    const { email } = req.query;

    try {
      const { data } = await MailApi.post(
        `/check?access_key=${process.env.MAIL_ACCESS_KEY}&email=${email}&smtp=1&format=1`
      );

      return res.status(201).json(data);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default TodoController;
