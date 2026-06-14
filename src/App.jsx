import './index.css';

import { createContext, useContext, useMemo, useState } from 'react';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';

const AuthContext = createContext(null);
const features = [
  ['Communities', 'Join moderated academic communities with resources, announcements, and events.'],
  ['Resource Library', 'Upload, search, bookmark, and review notes, PDFs, placement kits, and projects.'],
  ['Doubt Forum', 'Ask questions, accept answers, vote, tag subjects, and build reputation.'],
  ['Study Groups', 'Plan sessions, invite peers, share agendas, and track attendance.'],
  ['Coding Hub', 'Run contests, rankings, submissions, editorials, and achievement badges.'],
  ['Realtime Chat', 'Private and group messaging with unread counters and moderation tools.'],
];
const metrics = [
  ['42K+', 'active students'], ['1.2M', 'resources indexed'], ['98%', 'doubt response SLA'], ['360+', 'campus communities'],
];
const activity = [
  'Anika accepted an answer in Data Structures',
  'Placement Corner added Amazon SDE-1 kit',
  'React Ninjas scheduled a mock interview session',
  'Contest #128 leaderboard recalculated',
];
function AuthProvider({ children }) {
  const [user, setUser] = useState({ name: 'Aarav Sharma', role: 'admin', verified: true });
  const value = useMemo(() => ({ user, login: () => setUser({ name: 'Aarav Sharma', role: 'admin', verified: true }), logout: () => setUser(null) }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
function useAuth() { return useContext(AuthContext); }
function RequireRole({ roles, children }) {
  const { user } = useAuth();
  const location = useLocation();
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;
  if (!roles.includes(user.role)) return <Navigate to="/403" replace />;
  return children;
}
function Shell({ children }) {
  const { user, logout } = useAuth();
  return <div className="min-h-screen bg-slate-950 text-white"><nav className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/85 backdrop-blur"><div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"><Link className="text-2xl font-black tracking-tight" to="/">Student<span className="text-cyan-300">Hub</span></Link><div className="hidden gap-6 text-sm text-slate-300 md:flex"><Link to="/dashboard">Dashboard</Link><Link to="/communities">Communities</Link><Link to="/resources">Resources</Link><Link to="/admin">Admin</Link><Link to="/docs">Docs</Link></div><button onClick={user ? logout : undefined} className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950">{user ? 'Logout' : 'Get Started'}</button></div></nav>{children}</div>;
}
function Home() { return <Shell><main className="mx-auto max-w-7xl px-6 py-16"><section className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]"><div><p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">Enterprise learning operations for modern campuses</p><h1 className="text-5xl font-black leading-tight md:text-7xl">The operating system for student success.</h1><p className="mt-6 max-w-2xl text-lg text-slate-300">Student Hub centralizes communities, notes, doubts, contests, placement preparation, study groups, realtime chat, analytics, and role-based moderation in one production-grade SaaS experience.</p><div className="mt-8 flex flex-wrap gap-4"><Link to="/dashboard" className="rounded-2xl bg-cyan-400 px-6 py-3 font-bold text-slate-950">Open dashboard</Link><Link to="/docs" className="rounded-2xl border border-white/15 px-6 py-3 font-bold">View architecture</Link></div></div><div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl"><div className="grid gap-4">{metrics.map(([v,l])=><div key={l} className="rounded-2xl bg-slate-900 p-5"><div className="text-3xl font-black text-cyan-300">{v}</div><div className="text-slate-400">{l}</div></div>)}</div></div></section><section className="mt-20 grid gap-5 md:grid-cols-3">{features.map(([t,d])=><div key={t} className="rounded-3xl border border-white/10 bg-white/[.04] p-6"><h3 className="text-xl font-bold">{t}</h3><p className="mt-3 text-slate-400">{d}</p></div>)}</section></main></Shell>; }
function Dashboard() { return <Shell><main className="mx-auto max-w-7xl px-6 py-10"><h1 className="text-4xl font-black">Student Command Center</h1><div className="mt-8 grid gap-6 lg:grid-cols-3"><div className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:col-span-2"><h2 className="text-2xl font-bold">Learning progress</h2><div className="mt-6 space-y-5">{['DSA mastery','MERN capstone','Aptitude practice'].map((x,i)=><div key={x}><div className="mb-2 flex justify-between text-sm"><span>{x}</span><span>{72+i*8}%</span></div><div className="h-3 rounded-full bg-slate-800"><div className="h-3 rounded-full bg-cyan-400" style={{width:`${72+i*8}%`}} /></div></div>)}</div></div><div className="rounded-3xl border border-white/10 bg-white/5 p-6"><h2 className="text-2xl font-bold">Activity feed</h2><ul className="mt-5 space-y-4 text-slate-300">{activity.map(a=><li key={a} className="rounded-2xl bg-slate-900 p-4">{a}</li>)}</ul></div></div></main></Shell>; }
function Listing({ title, items }) { return <Shell><main className="mx-auto max-w-7xl px-6 py-10"><h1 className="text-4xl font-black">{title}</h1><div className="mt-8 grid gap-5 md:grid-cols-3">{items.map((item)=><article key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6"><h2 className="text-xl font-bold">{item}</h2><p className="mt-3 text-slate-400">Production APIs support pagination, filtering, search, bookmarks, audit trails, RBAC, and realtime events.</p><button className="mt-5 rounded-xl bg-white px-4 py-2 font-bold text-slate-950">Explore</button></article>)}</div></main></Shell>; }
function Login() { const { login } = useAuth(); return <Shell><main className="mx-auto max-w-md px-6 py-20"><div className="rounded-3xl border border-white/10 bg-white/5 p-8"><h1 className="text-3xl font-black">Welcome back</h1><input className="mt-6 w-full rounded-xl bg-slate-900 p-3" placeholder="Email"/><input className="mt-3 w-full rounded-xl bg-slate-900 p-3" placeholder="Password" type="password"/><button onClick={login} className="mt-5 w-full rounded-xl bg-cyan-400 p-3 font-bold text-slate-950">Sign in securely</button></div></main></Shell>; }
function Docs() { return <Shell><main className="mx-auto max-w-5xl px-6 py-10 prose prose-invert"><h1>Student Hub Architecture</h1><p>Full-stack platform with React/Vite frontend, Express API, MongoDB/Mongoose persistence, Socket.io realtime gateway, Redis caching/session throttling, Cloudinary uploads, JWT access tokens, refresh-token rotation, email verification, password reset, Helmet, CORS, CSRF, validation, audit logging, and Docker/GitHub Actions deployment assets.</p><pre>{`frontend/ src/{app,features,components,routes,services,store,hooks}\nbackend/ src/{config,controllers,services,repositories,models,middleware,routes,validators,sockets,utils}`}</pre></main></Shell>; }
export default function App(){return <AuthProvider><Routes><Route path="/" element={<Home/>}/><Route path="/login" element={<Login/>}/><Route path="/dashboard" element={<RequireRole roles={["student","moderator","admin"]}><Dashboard/></RequireRole>}/><Route path="/communities" element={<Listing title="Academic Communities" items={["Computer Science","Placement Prep","Open Source Guild"]}/>}/><Route path="/resources" element={<Listing title="Resource Library" items={["Operating Systems notes","Aptitude kit","MERN roadmap"]}/>}/><Route path="/admin" element={<RequireRole roles={["admin"]}><Listing title="Admin Panel" items={["User management","Content moderation","Analytics & reports"]}/></RequireRole>}/><Route path="/docs" element={<Docs/>}/><Route path="/403" element={<Shell><main className="p-12">Access denied</main></Shell>}/><Route path="*" element={<Shell><main className="p-12">Not found</main></Shell>}/></Routes></AuthProvider>}
