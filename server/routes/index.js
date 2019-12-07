import { Router } from 'express';

import { user, catalogs, employee } from '../controllers';

const router = Router();

/** Example route */
router.get('/', (req, res) => res.send('Hello World!'));

/** User */
router.post('/users', user.add);
router.get('/users', user.list);
router.get('/users/:id', user.byId);
router.delete('/users/:id', user.remove);
router.put('/users/:id', user.updateUser);

/** Catalogs */
router.get('/status', catalogs.listStatusTypes);
router.get('/request', catalogs.listRequestTypes);

/** Employee */
router.post('/employees', employee.add);
router.get('/employees', employee.list);
router.get('/employees/:id', employee.byId);
router.delete('/employees/:id', employee.remove);
router.put('/employees/:id', employee.updateEmployee);

export default router;
