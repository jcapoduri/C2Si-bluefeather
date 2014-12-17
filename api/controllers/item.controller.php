<?php
//require_once __DIR__.'/../managers/item.manager.php';
require_once __DIR__.'/../helpers/basic.controller.php';

class itemController extends basicController{
    protected $itemManager;
    protected $todoManager;

    public function __construct(IitemManager $itemmgr, ItodoManager $todomgr) {
        $this->itemManager = $itemmgr;
        $this->todoManager = $todomgr;
        parent::__construct();
    }

    public function getAll($tid = 0) {
        $todo = $this->todoManager->getTodo($tid);
        $items = $this->itemManager->getItems($todo);        
        $this->app->response->write(json_encode($items));
    }
    
    public function get($tid, $id = 0) {}
    
    public function post($tid = 0) {
        $todo = $this->todoManager->getTodo($tid);
        $json_data = $this->app->request->getBody();
        
        $data = json_decode($json_data);
        $item = $this->itemManager->createItem($data);
        $result = $this->itemManager->assignItemToTodo($todo, $item);
        $this->app->response->write($result);
    }
    public function put($tid, $id = 0) {
        $todo = $this->todoManager->getTodo($tid);
        $json_data = $this->app->request->getBody();
        
        $data = json_decode($json_data);
        $result = $this->itemManager->updateItem($id, $data);        
        $this->app->response->write($result);
    }
    public function delete($tid, $id = 0) {}
};

?>