import models from '../models';

import { isEmpty } from '../utils/nativeMethods';

const add = async (req, res) => {
  try {
    const { body } = req;
    const response = await models.Employee.create(body);

    res.send(response).status(201);
  } catch (err) {
    res.status(500).send(err.errors[0].message);
  }
};

const list = async (req, res) => {
  try {
    // find by attributes Employee.findAll({ attributes: ['name', '..']})
    const response = await models.Employee.findAll({
      include: [
        {
          model: models.Ticket,
          attributes: ['id', 'description', 'feedback'],
          include: [
            {
              model: models.Status,
              attributes: ['id', 'value']
            },
            {
              model: models.Request,
              attributes: ['id', 'value']
            },
            {
              model: models.User,
              attributes: ['id', 'name', 'email']
            }
          ]
        }
      ]
    });

    if (isEmpty(response)) {
      return res.status(204).send('Not content');
    }

    res.send(response);
  } catch (err) {
    res.status(500).send(err.errors[0].message);
  }
};

const byId = async (req, res) => {
  try {
    const pk = req.params.id;
    const response = await models.Employee.findByPk(pk, {
      include: [
        {
          model: models.Ticket,
          attributes: ['id', 'description', 'feedback'],
          include: [
            {
              model: models.Status,
              attributes: ['id', 'value']
            },
            {
              model: models.Request,
              attributes: ['id', 'value']
            },
            {
              model: models.User,
              attributes: ['id', 'name', 'email']
            }
          ]
        }
      ]
    });

    if (isEmpty(response)) {
      return res.status(204).send('Not content');
    }

    res.send(response);
  } catch (err) {
    res.status(500).send(err.errors[0].message);
  }
};

const remove = async (req, res) => {
  try {
    const pk = req.params.id;
    const response = await models.Employee.destroy({
      where: {
        id: pk
      }
    });

    if (isEmpty(response)) {
      return res.status(204).send('Not content');
    }

    res.send('Employee has been delete.');
  } catch (err) {
    res.status(500).send(err.errors[0].message);
  }
};

const updateEmployee = async (req, res) => {
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

export { add, list, byId, remove, updateEmployee };
