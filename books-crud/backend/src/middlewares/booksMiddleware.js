const validadeBody = (req,res, next)=>{
    const{body} = req;
    if(body.title === undefined || body.title === "") return res.status(400).json({message:'The field "title" is required'});

    if(body.autor_name === undefined || body.autor_name === "") return res.status(400).json({message:'The field "autor_name" is required'});

    if(body.created_at === undefined || body.created_at === "") return res.status(400).json({message:'The field "created_at" is required'});

    if(body.number_pages === undefined || body.created_at < 1) return res.status(400).json({message:'The field "number_pages" is required'});

    next();
}
module.exports = {
    validadeBody,
}
