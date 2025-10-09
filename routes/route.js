import { Router } from 'express';
import { parseTextController, parseDocumentController } from '../controllers/controller.js';
import upload from '../middleware/upload.js'; 

const router = Router();

router.post('/text', parseTextController);
router.post('/document', upload, parseDocumentController);

export default router;
