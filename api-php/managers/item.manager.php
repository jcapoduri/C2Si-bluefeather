<?php
require_once __DIR__.'/contracts/item.manager.contract.php';
require_once __DIR__.'/../models/item.class.php';


class itemManager implements IitemManager {

    public function createItem($item) {
        $todo = R::dispense("item");
        $todo->fromJSON($item);
        return $todo;
    }
    
    public function updateItem($id, $itemData) {
        $item = R::load("item", $id);
        $item->fromJSON($itemData);
        return R::store($item);
    }
    
    public function deleteItem($id) {}
    
    public function getItems($todo) {
        $items = [];
        foreach($todo->ownItem as $item) {
            $items[] = $item->export();
        };
        return $items;
    }
    
    public function assignItemToTodo($todo, $item) {
        $todo->ownItem[] = $item;
        return R::store($todo);
    }
};

?>