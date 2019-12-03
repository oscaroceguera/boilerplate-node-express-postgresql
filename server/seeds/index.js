import db from '../config/database';
import models from '../models';

import { STATUS_TYPES } from './status-types';
import { REQUEST_TYPES } from './request-types';

const seed = async () => {
  await db.sync({ force: true });

  await models.Status.bulkCreate(STATUS_TYPES);
  await models.Request.bulkCreate(REQUEST_TYPES);
};

seed();

/** Example - SEED DATABASE USER (Only once) */
// const createUsersWithMessages = async () => {
//   await models.User.create(
//     {
//       username: 'rwieruch',
//       messages: [
//         {
//           text: 'Published the Road to learn React'
//         }
//       ]
//     },
//     {
//       include: [models.Message]
//     }
//   );
//   await models.User.create(
//     {
//       username: 'ddavids',
//       messages: [
//         {
//           text: 'Happy to release ...'
//         },
//         {
//           text: 'Published a complete ...'
//         }
//       ]
//     },
//     {
//       include: [models.Message]
//     }
//   );
// };
