import { Router } from "express";

import { CreateUserController } from "./controllers/user/createUserController";
import { AuthUserController } from "./controllers/user/authUserController";
import { UserInfoController } from "./controllers/user/userInfoController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import { AddTransactionController } from "./controllers/transaction/addTransactionController";
import { UpdateTransactionController } from "./controllers/transaction/updateTransactionController";
import { DeleteTransactionController } from "./controllers/transaction/deleteTransactionController";

import { AddAppointmentController } from "./controllers/appointment/addAppointmentController";
import { DeleteAppointmentController } from "./controllers/appointment/deleteAppointmentController";
import { UpdateAppointmentController } from "./controllers/appointment/updateAppointmentController";
import { CompleteAppointmentController } from "./controllers/appointment/completeAppointmentController";

export const router = Router();

// ROTAS USER
router.post("/users", new CreateUserController().handle);

router.post("/login", new AuthUserController().handle);

router.get("/me", isAuthenticated, new UserInfoController().handle);

// ROTAS TRANSACTION
router.post(
  "/transactions",
  isAuthenticated,
  new AddTransactionController().handle
);

router.put(
  "/transactions",
  isAuthenticated,
  new UpdateTransactionController().handle
);

router.delete(
  "/transactions",
  isAuthenticated,
  new DeleteTransactionController().handle
);

// ROTAS APPOINTMENT
router.post(
  "/appointments",
  isAuthenticated,
  new AddAppointmentController().handle
);

router.delete(
  "/appointments",
  isAuthenticated,
  new DeleteAppointmentController().handle
);

router.put(
  "/appointments/update",
  isAuthenticated,
  new UpdateAppointmentController().handle
);

router.put(
  "/appointments/complete",
  isAuthenticated,
  new CompleteAppointmentController().handle
);
