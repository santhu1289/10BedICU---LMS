import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import {
  createLayout,
  editLayout,
  getLayoutByType,
} from "../controllers/layout.controller";
const layoutRoute = express.Router();

layoutRoute.post(
  "/create-layout",
  isAuthenticated,
  authorizeRoles("admin"),
  createLayout
);

layoutRoute.put(
  "/edit-layout",
  isAuthenticated,
  authorizeRoles("admin"),
  editLayout
);

layoutRoute.get("/get-layout", getLayoutByType);
export default layoutRoute;
