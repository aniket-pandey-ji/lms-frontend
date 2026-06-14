import { Router } from 'express';import { login, logout, me, register } from '../controllers/auth.controller.js';import { create, list } from '../controllers/crud.controller.js';import { authenticate, authorize } from '../middleware/auth.js';
const router=Router();router.post('/auth/register',register);router.post('/auth/login',login);router.post('/auth/logout',logout);router.get('/auth/me',authenticate,me);
for(const [path,key] of [['communities','communities'],['resources','resources'],['posts','posts'],['study-groups','studyGroups'],['contests','contests']]){router.get(`/${path}`,list(key));router.post(`/${path}`,authenticate,create(key));}
router.get('/admin/audit',authenticate,authorize('admin'),(req,res)=>res.json({events:[]}));export default router;
