import models from '../models';

const awaitQueryHandlerFactory = async (req, res, type) => {
  try {
    let query;
    let args = {};
    let destroyMsg = 'Employee has been delete.';

    const create = type === 'create';
    const findByPk = type === 'findByPk';
    const destroy = type === 'destroy';

    if (create) args = req.body;

    if (findByPk) args = req.params.id;

    if (destroy) {
      args = { where: { id: req.params.id } };
    }

    const data = await models.Employee[type](args);

    res.send(destroy ? destroyMsg : data);
  } catch (err) {
    res.status(500).send(err.errors[0].message);
  }
};

const add = async (req, res) => {
  return awaitQueryHandlerFactory(req, res, 'create');
};

const list = async (req, res) => {
  return awaitQueryHandlerFactory(req, res, 'findAll');
};

const byId = async (req, res) => {
  return awaitQueryHandlerFactory(req, res, 'findByPk');
};

const remove = async (req, res) => {
  return awaitQueryHandlerFactory(req, res, 'destroy');
};

const updateUser = async (req, res) => {
  try {
    const {
      params: { id }
    } = req;
    const body = req.body;

    const response = await models.Employee.update(body, { where: { id: id } });

    res.send('Employee has been updated.');
  } catch (err) {
    res.status(500).send(err.errors[0].message);
  }
};

export { add, list, byId, remove, updateUser };
