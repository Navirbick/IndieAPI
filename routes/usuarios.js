const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const decodetoken = require('../middleware/decodetoken');


/*Rotas de usuários*/

//pega todos usuários cadastrados
router.get('/', userController.getusuarios);

//pega algum usuário pelo seu id
router.get('/:usu_id', userController.getusuid);

//cadastro e login
router.post('/cadastro', userController.postusuarios);
router.post('/login', userController.loginusuarios);

//editar e deletar usuário
router.patch('/editar', userController.patchusuarios);
router.delete('/deletar', userController.deleteusuarios);

//Alteração de senha 
router.post('/esqueci-senha', userController.esquecisenha);
router.post('/nova-senha', userController.novasenha);

//Adicionar nova foto de perfil
router.post('/adicionar-nova-foto', decodetoken.decodifica, userController.fotousuario);



module.exports = router;