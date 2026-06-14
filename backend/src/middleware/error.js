export function notFound(req,res){res.status(404).json({message:`Route ${req.originalUrl} not found`});}
export function errorHandler(err,req,res,_next){const status=err.statusCode||err.status||500;res.status(status).json({message:err.message||'Internal server error',requestId:req.id});}
