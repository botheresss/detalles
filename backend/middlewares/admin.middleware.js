function adminOnly(req, res, next) {
  if (req.user.rol !== "admin") {
    return res.status(403).json({ msg: "Acceso denegado: solo para administradores" });
  }
  next();
}

module.exports = adminOnly;
