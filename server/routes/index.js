import { Router } from 'express';

// import { defaultCrt, user, message } from '../controllers';

const router = Router();

/** Example route */
router.get('/', (req, res) => res.send('Hello World!'));

export default router;
