import express from "express";
import ctrl from "../controllers/students.controller";

const router = express.Router();

//prettier-ignore
router.route("/students")
.get(ctrl.list)
.post(ctrl.create);

//prettier-ignore
router.route("/students/:id")
.get(ctrl.read)
.put(ctrl.update)
.delete(ctrl.remove);

export default router;
