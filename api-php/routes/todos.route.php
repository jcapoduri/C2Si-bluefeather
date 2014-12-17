<?php

$app->group('/todo', function() {
    require_once __DIR__.'/../controllers/todo.controller.php';
    require_once __DIR__.'/../controllers/item.controller.php';
    require_once __DIR__.'/../managers/item.manager.php';
    require_once __DIR__.'/../managers/todo.manager.php';
    require_once __DIR__.'/../managers/user.manager.php';
    require_once __DIR__.'/../managers/token.manager.php';
    
    $usermgr = new userManager(new tokenManager());
    $todomgr = new todoManager($usermgr);
    $itemmgr = new itemManager($todomgr);

    $controller = new todoController($todomgr, $usermgr);
    $itemController = new itemController($itemmgr, $todomgr);
    $app = \Slim\Slim::getInstance();
    
    //todos
    $app->get('/', array($controller, 'getAll'));
    $app->get('/:id', array($controller, 'get'));
    $app->post('/', array($controller, 'post'));
    $app->put('/:id', array($controller, 'put'));
    $app->delete('/:id', array($controller, 'delete'));

    //items
    $app->get('/:tid/items', array($itemController, 'getAll'))->name('itemUrl');
    $app->get('/:tid/items/:id', array($itemController, 'get'));
    $app->post('/:tid/items', array($itemController, 'post'));
    $app->put('/:tid/items/:id', array($itemController, 'put'));
    $app->delete('/:tid/items/:id', array($itemController, 'delete'));
});

?>