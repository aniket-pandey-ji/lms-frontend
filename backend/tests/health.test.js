import request from 'supertest';import { createApp } from '../src/app.js';
test('health endpoint returns ok',async()=>{const res=await request(createApp()).get('/health');expect(res.status).toBe(200);expect(res.body.status).toBe('ok');});
