import { Router } from "express";
import {
	getLetters,
	run,
} from "../controllers/letterController.js";
const router = Router();

router.get('/', run);

router.get('/Letters', getLetters);

// router.get('/citation/:cedula', getCitation);

// router.post('/new-citation', newCitation);

// router.put('/modic-citation/:cedula', modicCitation);

// router.delete('/delete-citation/:cedula', deleteCitation);

export default router;
